"""Lee un .xlsx o .csv y vuelca su contenido como JSON, sin dependencias externas.

Un archivo de contactos real casi nunca tiene los encabezados en la fila 1: suele
haber un banner de titulo, filas en blanco, una hoja de panel aparte. Por eso este
script no intenta adivinar el esquema: devuelve las filas crudas de cada hoja y
deja esa lectura al modelo, que tiene mucho mejor criterio para decidir cual fila
es el encabezado y que significa cada columna.

Uso:
    python read_table.py <archivo> [--max-rows N] [--sheet NOMBRE]
"""

import argparse
import csv
import datetime
import io
import json
import os
import re
import sys
import zipfile
import xml.etree.ElementTree as ET

NS_MAIN = '{http://schemas.openxmlformats.org/spreadsheetml/2006/main}'
NS_REL = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}'
NS_PKG_REL = '{http://schemas.openxmlformats.org/package/2006/relationships}'

# numFmtId built-in que representan fechas u horas.
BUILTIN_DATE_FMTS = set(range(14, 23)) | set(range(45, 48)) | {27, 30, 36, 50, 57}


def col_to_index(ref):
    """'BC12' -> 54 (indice 0-based de la columna)."""
    letters = re.match(r'[A-Z]+', ref or 'A').group(0)
    n = 0
    for ch in letters:
        n = n * 26 + (ord(ch) - 64)
    return n - 1


def serial_to_iso(value):
    """Convierte el serial de fecha de Excel a ISO. Excel arranca en 1899-12-30."""
    try:
        days = float(value)
    except (TypeError, ValueError):
        return None
    if days < 1 or days > 2958465:
        return None
    base = datetime.datetime(1899, 12, 30)
    dt = base + datetime.timedelta(days=days)
    if dt.hour or dt.minute:
        return dt.strftime('%Y-%m-%d %H:%M')
    return dt.strftime('%Y-%m-%d')


def read_shared_strings(z):
    if 'xl/sharedStrings.xml' not in z.namelist():
        return []
    root = ET.fromstring(z.read('xl/sharedStrings.xml'))
    out = []
    for si in root.findall(NS_MAIN + 'si'):
        # Un <si> puede venir partido en varios <t> por formato mixto; se concatenan.
        out.append(''.join(t.text or '' for t in si.iter(NS_MAIN + 't')))
    return out


def read_date_styles(z):
    """Devuelve el set de indices de estilo (s=) que corresponden a fechas."""
    if 'xl/styles.xml' not in z.namelist():
        return set()
    root = ET.fromstring(z.read('xl/styles.xml'))
    custom_date = set()
    for nf in root.iter(NS_MAIN + 'numFmt'):
        code = (nf.get('formatCode') or '').lower()
        if re.search(r'(yy|dd|mm(?![a-z])|hh)', code) and 'red' not in code:
            custom_date.add(int(nf.get('numFmtId')))
    date_ids = BUILTIN_DATE_FMTS | custom_date
    styles = set()
    cell_xfs = root.find(NS_MAIN + 'cellXfs')
    if cell_xfs is None:
        return styles
    for i, xf in enumerate(cell_xfs.findall(NS_MAIN + 'xf')):
        if int(xf.get('numFmtId', 0)) in date_ids:
            styles.add(i)
    return styles


def sheet_targets(z):
    """[(nombre_hoja, path_en_el_zip)] respetando el orden del libro."""
    wb = ET.fromstring(z.read('xl/workbook.xml'))
    rels = ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))
    by_id = {r.get('Id'): r.get('Target') for r in rels.findall(NS_PKG_REL + 'Relationship')}
    out = []
    for sh in wb.iter(NS_MAIN + 'sheet'):
        target = by_id.get(sh.get(NS_REL + 'id'), '')
        target = target.lstrip('/')
        if not target.startswith('xl/'):
            target = 'xl/' + target
        if target in z.namelist():
            out.append((sh.get('name'), target))
    return out


def read_sheet(z, path, shared, date_styles, max_rows):
    root = ET.fromstring(z.read(path))
    rows = []
    for row in root.iter(NS_MAIN + 'row'):
        cells = {}
        for c in row.findall(NS_MAIN + 'c'):
            idx = col_to_index(c.get('r'))
            ctype = c.get('t')
            v = c.find(NS_MAIN + 'v')
            if ctype == 's':
                val = shared[int(v.text)] if v is not None and v.text else ''
            elif ctype == 'inlineStr':
                is_el = c.find(NS_MAIN + 'is')
                val = ''.join(t.text or '' for t in is_el.iter(NS_MAIN + 't')) if is_el is not None else ''
            elif v is None or v.text is None:
                val = ''
            elif ctype in ('str', 'e'):
                val = v.text
            else:
                style = int(c.get('s') or -1)
                if style in date_styles:
                    val = serial_to_iso(v.text) or v.text
                else:
                    val = v.text
                    # Los enteros llegan como '5.0'; se normalizan para no ensuciar el JSON.
                    if re.fullmatch(r'-?\d+\.0+', val or ''):
                        val = val.split('.')[0]
            val = (val or '').strip()
            if val:
                cells[idx] = val
        if cells:
            width = max(cells) + 1
            rows.append([cells.get(i, '') for i in range(width)])
        else:
            rows.append([])
        if max_rows and len(rows) >= max_rows:
            break
    # Las filas vacias del final no aportan nada.
    while rows and not any(rows[-1]):
        rows.pop()
    return rows


def read_xlsx(path, max_rows, only_sheet):
    with zipfile.ZipFile(path) as z:
        shared = read_shared_strings(z)
        date_styles = read_date_styles(z)
        sheets = []
        for name, target in sheet_targets(z):
            if only_sheet and name != only_sheet:
                continue
            sheets.append({'name': name, 'rows': read_sheet(z, target, shared, date_styles, max_rows)})
    return sheets


def read_csv(path, max_rows):
    with open(path, 'rb') as fh:
        raw = fh.read()
    for enc in ('utf-8-sig', 'utf-8', 'latin-1'):
        try:
            text = raw.decode(enc)
            break
        except UnicodeDecodeError:
            continue
    sample = text[:4096]
    try:
        dialect = csv.Sniffer().sniff(sample, delimiters=',;\t|')
    except csv.Error:
        dialect = csv.excel
    rows = []
    for row in csv.reader(io.StringIO(text), dialect):
        rows.append([(c or '').strip() for c in row])
        if max_rows and len(rows) >= max_rows:
            break
    return [{'name': os.path.basename(path), 'rows': rows}]


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('archivo')
    ap.add_argument('--max-rows', type=int, default=0, help='corta la lectura en N filas por hoja')
    ap.add_argument('--sheet', default='', help='leer solo esta hoja (por nombre)')
    ap.add_argument('-o', '--out', default='', help='escribir el JSON a un archivo')
    args = ap.parse_args()

    ext = os.path.splitext(args.archivo)[1].lower()
    if ext in ('.xlsx', '.xlsm', '.xltx'):
        sheets = read_xlsx(args.archivo, args.max_rows, args.sheet)
    elif ext in ('.csv', '.tsv', '.txt'):
        sheets = read_csv(args.archivo, args.max_rows)
    else:
        sys.exit(f'Formato no soportado: {ext}. Se aceptan .xlsx, .xlsm, .csv, .tsv')

    payload = {'archivo': os.path.abspath(args.archivo), 'hojas': sheets}
    text = json.dumps(payload, ensure_ascii=False, indent=1)
    if args.out:
        with open(args.out, 'w', encoding='utf8') as fh:
            fh.write(text)
        print(f'{len(sheets)} hoja(s) -> {args.out}')
        for s in sheets:
            print(f'  "{s["name"]}": {len(s["rows"])} filas')
    else:
        print(text)


if __name__ == '__main__':
    main()
