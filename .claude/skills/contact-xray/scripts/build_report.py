"""Convierte un data.json de cuentas investigadas en el PDF del Contact X-Ray.

El scoring vive aca y no en el modelo a proposito: la aritmetica siempre da igual,
y que el ranking sea reproducible es lo que permite comparar dos corridas del mismo
listado. El modelo aporta el juicio (los cinco ejes en escala 1-5, la investigacion,
las hipotesis de dolor); el script aporta la cuenta y el formato.

El PDF se imprime con Chrome/Edge headless, que ya esta instalado en cualquier
Windows o Mac. Asi no hay que instalar librerias de PDF y el layout se controla con
CSS comun.

Uso:
    python build_report.py data.json -o informe.pdf [--html-only]
"""

import argparse
import html
import json
import os
import shutil
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
CSS_PATH = os.path.join(HERE, '..', 'assets', 'report.css')

# El peso de cada eje refleja que buscamos: una cuenta grande a la que no podemos
# entrar vale menos que una mediana con dolor evidente y una puerta abierta.
EJES = [
    ('capacidad_pago', 'Capacidad de pago', 25, 'Pago'),
    ('densidad_dolor', 'Densidad de dolor', 30, 'Dolor'),
    ('accesibilidad', 'Accesibilidad', 20, 'Acceso'),
    ('timing', 'Timing / señal', 15, 'Timing'),
    ('costo_entrega', 'Costo de entrega', 10, 'Costo'),
]

VEREDICTOS = [(70, 'priorizar'), (45, 'evaluar'), (0, 'descartar')]

CONFIANZA_LABEL = {
    'alta': 'A',
    'media': 'M',
    'baja': 'B',
}

CALIDAD_CONTACTO = {
    'verificado': ('Verificado', 'ok'),
    'generico': ('Genérico', 'warn'),
    'ausente': ('Sin contacto', 'bad'),
}


def e(value):
    """Escapa para HTML. None y numeros incluidos."""
    if value is None:
        return ''
    return html.escape(str(value), quote=True)


def calcular_score(cuenta):
    """0-100 a partir de los cinco ejes en escala 1-5. Un eje ausente se trata como 1
    (el minimo) para que la falta de informacion nunca infle un puntaje."""
    ejes = cuenta.get('ejes') or {}
    total = 0.0
    usado = 0
    for key, _label, peso, _abrev in EJES:
        raw = ejes.get(key)
        try:
            val = float(raw)
        except (TypeError, ValueError):
            continue
        val = max(1.0, min(5.0, val))
        total += (val - 1) / 4 * peso
        usado += peso
    if not usado:
        return 0.0
    # Si faltan ejes se normaliza sobre los presentes, pero se avisa al validar.
    return round(total * 100 / usado, 1) if usado != 100 else round(total, 1)


def veredicto_de(score):
    for umbral, nombre in VEREDICTOS:
        if score >= umbral:
            return nombre
    return 'descartar'


def dato(campo):
    """Normaliza un campo firmografico: {valor, confianza, fuente} o string suelto."""
    if campo is None:
        return {'valor': '', 'confianza': '', 'fuente': ''}
    if isinstance(campo, dict):
        return {
            'valor': campo.get('valor', ''),
            'confianza': (campo.get('confianza') or '').lower(),
            'fuente': campo.get('fuente', ''),
        }
    return {'valor': campo, 'confianza': '', 'fuente': ''}


def badge_confianza(conf):
    if not conf:
        return ''
    letra = CONFIANZA_LABEL.get(conf, conf[:1].upper())
    return f'<span class="conf conf-{e(conf)}" title="Confianza {e(conf)}">{e(letra)}</span>'


def celda_dato(campo, corto=False):
    d = dato(campo)
    if not d['valor']:
        return '<td class="vacio">—</td>'
    val = e(d['valor'])
    if corto and len(d['valor']) > 22:
        val = e(d['valor'][:21]) + '…'
    # El valor y su marca de confianza viajan juntos: separados por un salto de
    # linea se leen como dos datos distintos.
    return f'<td><span class="nowrap">{val} {badge_confianza(d["confianza"])}</span></td>'


def render_tabla(cuentas):
    filas = []
    for i, c in enumerate(cuentas, 1):
        contacto = c.get('contacto') or {}
        calidad = (contacto.get('calidad') or '').lower()
        cal_label, cal_cls = CALIDAD_CONTACTO.get(calidad, ('—', 'vacio'))
        ejes = c.get('ejes') or {}
        celdas_ejes = ''.join(
            f'<td class="eje">{e(ejes.get(k, "–"))}</td>' for k, _l, _p, _a in EJES
        )
        ver = c['_veredicto']
        marca = ' ★' if lleva_desglose(c) else ''
        filas.append(
            f'<tr>'
            f'<td class="rank">{i}</td>'
            f'<td class="empresa"><strong>{e(c.get("empresa"))}</strong>{marca}'
            f'<span class="sub">{e(c.get("vertical"))}</span></td>'
            f'{celda_dato(c.get("firmografia", {}).get("ingresos"), corto=True)}'
            f'{celda_dato(c.get("firmografia", {}).get("empleados"), corto=True)}'
            f'<td class="contacto {cal_cls}">{e(cal_label)}</td>'
            f'{celdas_ejes}'
            f'<td class="score">{c["_score"]:g}</td>'
            f'<td class="ver ver-{e(ver)}">{e(ver.capitalize())}</td>'
            f'</tr>'
        )
    encabezados_ejes = ''.join(
        f'<th class="eje" title="{e(label)} ({peso}%)">{e(abrev)}</th>'
        for _k, label, peso, abrev in EJES
    )
    return f'''<table class="comparativa">
<thead><tr>
<th class="rank">#</th><th class="empresa">Cuenta</th>
<th>Ingresos est.</th><th>Empleados</th><th>Contacto</th>
{encabezados_ejes}
<th class="score">Score</th><th class="ver">Veredicto</th>
</tr></thead>
<tbody>{''.join(filas)}</tbody></table>'''


def render_metricas(firmo):
    campos = [
        ('ingresos', 'Ingresos estimados'),
        ('empleados', 'Empleados'),
        ('capex', 'Capex'),
        ('dato_relevante', 'Dato relevante'),
    ]
    bloques = []
    fuentes = []
    for key, label in campos:
        d = dato(firmo.get(key))
        # Un guion no es un dato: ocupa una tarjeta entera para decir nada.
        if not d['valor'] or str(d['valor']).strip() in {'—', '-', 'N/D', 'n/d'}:
            continue
        bloques.append(
            f'<div class="metrica"><div class="metrica-val">{e(d["valor"])}'
            f'{badge_confianza(d["confianza"])}</div>'
            f'<div class="metrica-label">{e(label)}</div></div>'
        )
        if d['fuente']:
            fuentes.append(d['fuente'])
    if not bloques:
        return '<p class="vacio">Sin datos firmográficos verificables.</p>'
    pie = ''
    if fuentes:
        unicas = list(dict.fromkeys(fuentes))
        pie = f'<p class="fuente">Fuente: {e("; ".join(unicas))}</p>'
    return f'<div class="metricas">{"".join(bloques)}</div>{pie}'


BASE_DOLOR = {
    'citada': ('Cita', 'Se apoya en algo que la empresa o la prensa publicó sobre ella'),
    'inferida': ('Rubro', 'Se deduce de cómo funciona el rubro, sin evidencia propia de la empresa'),
}


def badge_base(base):
    """Distingue la hipótesis apoyada en evidencia propia de la deducida del rubro.

    Las dos son hipótesis y la sección lo dice, pero no valen lo mismo en una reunión:
    una se puede citar y la otra hay que preguntarla. Sin la marca, las cuarenta se leen
    con la misma solidez.
    """
    base = (base or '').lower()
    if base not in BASE_DOLOR:
        return ''
    etiqueta, titulo = BASE_DOLOR[base]
    return f'<span class="base base-{e(base)}" title="{e(titulo)}">{e(etiqueta)}</span>'


def render_dolores(dolores):
    if not dolores:
        return ''
    filas = []
    for i, d in enumerate(dolores, 1):
        imp = d.get('impacto', '')
        esf = d.get('esfuerzo', '')
        filas.append(
            f'<tr><td class="num">{i}</td>'
            f'<td><strong>{e(d.get("proceso"))}</strong> {badge_base(d.get("base"))}'
            f'<span class="sub">{e(d.get("descripcion"))}</span></td>'
            f'<td class="just">{e(d.get("justificacion"))}</td>'
            f'<td class="carnada">{e(d.get("carnada"))}</td>'
            f'<td class="ie">{e(imp)}/{e(esf)}</td></tr>'
        )
    hay_marcas = any((d.get('base') or '').lower() in BASE_DOLOR for d in dolores)
    leyenda = ''
    if hay_marcas:
        leyenda = ('<p class="leyenda leyenda-dolor">Cita: se apoya en algo publicado por la empresa '
                   'o por la prensa sobre ella. Rubro: se deduce de cómo opera el sector, sin evidencia '
                   'propia — hay que confirmarlo antes de usarlo como argumento.</p>')
    return f'''<h3>Hipótesis de dolor</h3>
<table class="dolores"><thead><tr>
<th class="num"></th><th>Proceso candidato</th><th>Justificación</th>
<th>Carnada</th><th class="ie" title="Impacto / Esfuerzo, 1-5">I/E</th>
</tr></thead><tbody>{''.join(filas)}</tbody></table>{leyenda}'''


def render_estrategia(est):
    if not est:
        return ''
    filas = [
        ('Puerta de entrada', est.get('puerta_entrada')),
        ('Ángulo del mensaje', est.get('mensaje')),
        ('Primer paso concreto', est.get('primer_paso')),
    ]
    items = ''.join(
        f'<div class="est-item"><span class="est-label">{e(l)}</span>{e(v)}</div>'
        for l, v in filas if v
    )
    if not items:
        return ''
    return f'<h3>Estrategia de abordaje</h3><div class="estrategia">{items}</div>'


def render_fuentes(fuentes):
    if not fuentes:
        return ''
    items = []
    for f in fuentes:
        if isinstance(f, str):
            items.append(f'<li>{e(f)}</li>')
            continue
        titulo = e(f.get('titulo') or f.get('url'))
        url = e(f.get('url'))
        fecha = f' · {e(f.get("fecha"))}' if f.get('fecha') else ''
        items.append(f'<li>{titulo}{fecha}<span class="url">{url}</span></li>')
    return f'<h3 class="h-fuentes">Fuentes consultadas</h3><ol class="fuentes">{"".join(items)}</ol>'


def veredicto_cuenta(c):
    """El veredicto de una cuenta, se haya calculado ya o no.

    `validar()` corre antes de que el render asigne los campos calculados, así que esto
    no puede depender de `_veredicto`: lo recalcula cuando hace falta.
    """
    if c.get('_veredicto'):
        return c['_veredicto']
    return (c.get('veredicto') or veredicto_de(calcular_score(c))).lower()


def lleva_desglose(c):
    """Una cuenta se desglosa salvo que esté descartada.

    Descartar una cuenta es una conclusión corta: alcanza con el motivo y con qué haría
    falta para reconsiderarla. Todo lo demás —lo que se va a trabajar y lo que está a un
    dato de distancia de trabajarse— merece la página entera. El campo `dossier` sigue
    funcionando como override explícito cuando el criterio general no aplica.
    """
    if 'dossier' in c:
        return bool(c['dossier'])
    return veredicto_cuenta(c) != 'descartar'


def render_indice(grupos, hay_resto):
    """Índice con anclas internas. Chrome las convierte en links navegables del PDF,
    que es lo que vuelve usable un informe de veinte páginas."""
    items = ['<li class="ix-seccion"><a href="#comparativa">Comparativa de la cartera</a></li>']
    pos = 0
    for clave, titulo, cuentas in grupos:
        if not cuentas:
            continue
        items.append(f'<li class="ix-seccion"><a href="#g-{e(clave)}">{e(titulo)}</a></li>')
        for c in cuentas:
            pos += 1
            items.append(
                f'<li><a href="#d{pos}"><span class="ix-num">{pos}</span>'
                f'<span class="ix-nombre">{e(c.get("empresa"))}</span>'
                f'<span class="ix-score ver-{e(c["_veredicto"])}">{c["_score"]:g}</span></a></li>'
            )
    if hay_resto:
        items.append('<li class="ix-seccion"><a href="#resto">Resto de la cartera</a></li>')
    return f'<nav class="indice"><h2>Contenido</h2><ol>{"".join(items)}</ol></nav>'


def render_separador(clave, titulo, bajada, cuentas):
    """Portadilla de grupo: separa lo que se trabaja de lo que se evalúa."""
    nombres = ' · '.join(e(c.get('empresa')) for c in cuentas)
    return f'''<section class="grupo grupo--{e(clave)}" id="g-{e(clave)}">
<h2>{e(titulo)}</h2>
<p class="grupo-bajada">{e(bajada)}</p>
<p class="grupo-lista">{nombres}</p>
</section>'''


def render_resto(cuentas):
    """Las cuentas sin desglose, en una línea cada una.

    Sin esto, una cuenta que no llega al desglose aparece en la tabla como un número
    sin explicación: el lector ve que quedó abajo pero no por qué, ni qué haría falta
    para que suba. Media página acá evita esa pregunta trece veces.
    """
    if not cuentas:
        return ''
    bloques = []
    for c in cuentas:
        desbloqueo = ''
        if c.get('desbloqueo'):
            desbloqueo = (f'<p class="desbloqueo"><span class="db-label">Para considerarla</span>'
                          f'{e(c["desbloqueo"])}</p>')
        resumen = f'<p>{e(c.get("resumen"))}</p>' if c.get('resumen') else ''
        bloques.append(
            f'<div class="resto-item">'
            f'<div class="resto-head">'
            f'<span class="resto-score ver-{e(c["_veredicto"])}">{c["_score"]:g}</span>'
            f'<h3>{e(c.get("empresa"))}</h3>'
            f'<span class="resto-ver ver-{e(c["_veredicto"])}">{e(c["_veredicto"].capitalize())}</span>'
            f'<span class="resto-vertical">{e(c.get("vertical"))}</span>'
            f'</div>{resumen}{desbloqueo}</div>'
        )
    return (f'<section class="resto" id="resto"><h2>Resto de la cartera</h2>'
            f'<p class="grupo-bajada">Las cuentas descartadas: qué se encontró, qué no, '
            f'y qué haría falta para volver a considerarlas.</p>'
            f'{"".join(bloques)}</section>')


def render_dossier(c, pos, nivel='primario'):
    contacto = c.get('contacto') or {}
    datos_contacto = ' · '.join(
        e(v) for v in [contacto.get('nombre'), contacto.get('cargo'),
                       contacto.get('email'), contacto.get('telefono')] if v
    ) or '<span class="vacio">Contacto sin identificar — primer paso: encontrarlo.</span>'
    ejes = c.get('ejes') or {}
    detalle_ejes = ' '.join(
        f'<span class="mini-eje">{e(label)} <b>{e(ejes.get(key, "–"))}</b></span>'
        for key, label, _p, _a in EJES
    )
    riesgo = ''
    if c.get('riesgo'):
        riesgo = f'<p class="riesgo"><strong>Riesgo / contra-argumento:</strong> {e(c["riesgo"])}</p>'
    return f'''<section class="dossier dossier--{e(nivel)}" id="d{pos}">
<div class="dossier-head">
  <div>
    <span class="pos">#{pos}</span>
    <h2>{e(c.get('empresa'))}</h2>
    <p class="sub">{e(c.get('vertical'))}{' · ' + e(c.get('id')) if c.get('id') else ''}</p>
  </div>
  <div class="score-box ver-{e(c['_veredicto'])}">
    <div class="score-num">{c['_score']:g}</div>
    <div class="score-cap">{e(c['_veredicto'].capitalize())}</div>
  </div>
</div>
<p class="resumen">{e(c.get('resumen'))}</p>
{render_metricas(c.get('firmografia') or {})}
<p class="contacto-linea"><strong>Contacto:</strong> {datos_contacto}</p>
<p class="ejes-linea">{detalle_ejes}</p>
{render_dolores(c.get('dolores'))}
{render_estrategia(c.get('estrategia'))}
{riesgo}
{render_fuentes(c.get('fuentes'))}
</section>'''


def render_html(data, css):
    cuentas = data.get('cuentas') or []
    for c in cuentas:
        c['_score'] = calcular_score(c)
        c['_veredicto'] = (c.get('veredicto') or veredicto_de(c['_score'])).lower()
    cuentas.sort(key=lambda c: -c['_score'])

    dossiers = [c for c in cuentas if lleva_desglose(c)]
    conteo = {}
    for c in cuentas:
        conteo[c['_veredicto']] = conteo.get(c['_veredicto'], 0) + 1
    chips = ''.join(
        f'<span class="chip ver-{e(k)}">{v} {e(k)}</span>'
        for k, v in sorted(conteo.items(), key=lambda kv: -kv[1])
    )
    hallazgos = ''.join(f'<li>{e(h)}</li>' for h in (data.get('hallazgos') or []))
    bloque_hallazgos = f'<ul class="hallazgos">{hallazgos}</ul>' if hallazgos else ''

    resto = [c for c in cuentas if not lleva_desglose(c)]
    grupos = [
        ('primario', 'Mayor potencial',
         'Donde el potencial y el acceso se dan juntos. Son las cuentas que justifican '
         'trabajo esta semana.',
         [c for c in dossiers if c['_veredicto'] == 'priorizar']),
        ('secundario', 'A evaluar',
         'Potencial real con algo que todavía no cierra — casi siempre, el acceso. Cada '
         'una dice qué le falta para moverse al grupo de arriba.',
         [c for c in dossiers if c['_veredicto'] != 'priorizar']),
    ]
    grupos = [g for g in grupos if g[3]]
    indice = render_indice([(k, t, cs) for k, t, _b, cs in grupos], bool(resto)) if dossiers else ''

    cuerpo = []
    pos = 0
    for clave, titulo, bajada, cs in grupos:
        cuerpo.append(render_separador(clave, titulo, bajada, cs))
        for c in cs:
            pos += 1
            cuerpo.append(render_dossier(c, pos, clave))
    desgloses = ''.join(cuerpo)

    leyenda_ejes = ' · '.join(f'{label} {peso}%' for _k, label, peso, _a in EJES)
    nota = data.get('nota_metodo') or (
        'Los valores firmográficos son estimaciones con fuente citada, no cifras auditadas. '
        'La letra al lado de cada dato indica su confianza: A citado en fuente pública, '
        'M derivado de indicadores indirectos, B estimado por analogía sectorial. '
        'Un campo sin fuente queda vacío en lugar de completarse.'
    )

    return f'''<!doctype html>
<html lang="es"><head><meta charset="utf-8">
<title>{e(data.get('titulo') or 'Contact X-Ray')}</title>
<style>{css}</style></head><body>
<header class="portada">
  <div class="marca">{e(data.get('marca') or 'Contact X-Ray')}</div>
  <h1>{e(data.get('titulo') or 'Priorización de cuentas')}</h1>
  <p class="bajada">{e(data.get('subtitulo') or '')}</p>
  <p class="meta">{e(data.get('fecha') or '')}{
      ' · ' + e(f'{len(cuentas)} cuentas analizadas') if cuentas else ''}{
      ' · ' + e(f'{len(dossiers)} con desglose') if dossiers else ''}</p>
</header>

<section class="resumen-ejecutivo">
  <div class="chips">{chips}</div>
  {bloque_hallazgos}
</section>

{indice}

<h2 class="h-tabla" id="comparativa">Comparativa</h2>
<p class="leyenda">Score 0-100 ponderado: {e(leyenda_ejes)}. Cada eje se puntúa 1-5.
Las cuentas marcadas con ★ tienen desglose al final; las descartadas van resumidas.</p>
{render_tabla(cuentas)}
<p class="nota-metodo">{e(nota)}</p>

{desgloses}
{render_resto(resto)}
</body></html>'''


def validar(data):
    """Avisa sobre lo que suele salir mal: ejes faltantes y datos sin fuente.

    No aborta: preferimos un informe con huecos visibles a uno que no se genera.
    """
    avisos = []
    for c in data.get('cuentas') or []:
        nombre = c.get('empresa', '?')
        ejes = c.get('ejes') or {}
        faltan = [k for k, _l, _p, _a in EJES if k not in ejes]
        if faltan:
            avisos.append(f'{nombre}: faltan ejes {", ".join(faltan)}')
        for key in ('ingresos', 'empleados', 'capex', 'dato_relevante'):
            d = dato((c.get('firmografia') or {}).get(key))
            if d['valor'] and not d['fuente']:
                avisos.append(f'{nombre}: "{key}" tiene valor sin fuente citada')
        if lleva_desglose(c) and not c.get('dolores'):
            avisos.append(f'{nombre}: marcada para desglose pero sin hipótesis de dolor')
        for d in c.get('dolores') or []:
            if (d.get('base') or '').lower() not in BASE_DOLOR:
                avisos.append(f'{nombre}: la hipótesis "{d.get("proceso")}" no dice si se apoya en '
                              f'evidencia propia ("citada") o en el rubro ("inferida")')
        if not lleva_desglose(c):
            # Sin desglose, el resumen y el desbloqueo son lo único que explica el score.
            if not c.get('resumen'):
                avisos.append(f'{nombre}: sin desglose y sin resumen — queda como un número sin explicación')
            if not c.get('desbloqueo'):
                avisos.append(f'{nombre}: sin desglose y sin "desbloqueo" — no dice qué haría falta para reconsiderarla')
    return avisos


def encontrar_navegador():
    for var in ('CHROME_PATH', 'EDGE_PATH'):
        p = os.environ.get(var)
        if p and os.path.exists(p):
            return p
    candidatos = [
        r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
        r'C:\Program Files\Microsoft\Edge\Application\msedge.exe',
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    ]
    for c in candidatos:
        if os.path.exists(c):
            return c
    for name in ('google-chrome', 'chromium', 'chromium-browser', 'msedge'):
        found = shutil.which(name)
        if found:
            return found
    return None


def imprimir_pdf(html_path, pdf_path):
    navegador = encontrar_navegador()
    if not navegador:
        sys.exit('No se encontró Chrome ni Edge para imprimir el PDF. '
                 'Definí CHROME_PATH con la ruta al ejecutable, o usá --html-only.')
    cmd = [
        navegador, '--headless=new', '--disable-gpu', '--no-sandbox',
        '--no-pdf-header-footer', f'--print-to-pdf={pdf_path}', html_path,
    ]
    res = subprocess.run(cmd, capture_output=True, text=True, timeout=180)
    if not os.path.exists(pdf_path):
        sys.exit(f'El navegador no generó el PDF.\n{res.stderr[-1500:]}')
    return navegador


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('data', help='JSON con las cuentas investigadas')
    ap.add_argument('-o', '--out', default='contact-xray.pdf')
    ap.add_argument('--html-only', action='store_true', help='genera solo el HTML')
    args = ap.parse_args()

    with open(args.data, encoding='utf8') as fh:
        data = json.load(fh)

    with open(CSS_PATH, encoding='utf8') as fh:
        css = fh.read()

    avisos = validar(data)
    for a in avisos:
        print(f'  aviso: {a}', file=sys.stderr)

    pdf_path = os.path.abspath(args.out)
    html_path = os.path.splitext(pdf_path)[0] + '.html'
    with open(html_path, 'w', encoding='utf8') as fh:
        fh.write(render_html(data, css))

    if args.html_only:
        print(f'HTML: {html_path}')
        return

    imprimir_pdf(html_path, pdf_path)
    kb = os.path.getsize(pdf_path) // 1024
    print(f'PDF: {pdf_path} ({kb} KB)')
    print(f'HTML: {html_path}')


if __name__ == '__main__':
    main()
