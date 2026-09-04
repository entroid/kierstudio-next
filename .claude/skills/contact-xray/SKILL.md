---
name: contact-xray
description: Analiza un listado de contactos comerciales (Excel o CSV), investiga cada empresa en fuentes públicas, la puntúa por potencial y genera un PDF con una tabla comparativa de todas las cuentas más un desglose profundo de las 5-8 mejores. Usalo siempre que aparezca un CRM, listado de prospectos, cartera de clientes potenciales, leads o cuentas comerciales y la pregunta sea a quién conviene contactar, cuánto potencial tiene cada uno, qué se le podría automatizar o cómo acercarse con una propuesta — aunque no se nombre "Contact X-Ray" ni se pida un PDF explícitamente.
---

# Contact X-Ray

Convierte un listado de contactos en una decisión: a quién llamar primero, con qué
excusa concreta, y a quién no vale la pena llamar.

El entregable es **un solo PDF**: primero una comparativa de todas las cuentas
ordenadas por score, después un desglose de las 5-8 más relevantes con el potencial
de la cuenta, las hipótesis de dolor y la estrategia de abordaje.

## Lo que hace bueno o inútil a este informe

Un informe de prospección se vuelve basura por una sola razón: cifras inventadas que
suenan creíbles. Si el desglose dice "$18M de facturación" y en la reunión resulta
que facturan $4M, perdiste la reunión y la credibilidad. Por eso la regla que gobierna
todo lo demás:

**Ningún dato sin fuente.** Un campo que no pudiste verificar queda vacío — el informe
está diseñado para mostrar huecos sin que se vea mal. Cuando estimás, decís que estimás
y con qué método. Los valores van como rango (`$25-40M USD`), no como cifra exacta, y
cada uno lleva su nivel de confianza:

| Confianza | Significa |
|---|---|
| `alta` | Citado en una fuente pública que leíste |
| `media` | Derivado de indicadores indirectos (headcount, obras, sucursales) |
| `baja` | Estimado por analogía con empresas comparables del sector |

Lo segundo que separa un informe útil de una plantilla llena: **las hipótesis de dolor
tienen que ser específicas de esa empresa**. "Podrían automatizar procesos" no vale nada.
"Publican atención 24h en tres ciudades y los técnicos reportan por WhatsApp, o sea que
hay carga manual de partes todos los días" es una excusa para pedir una reunión. La
diferencia siempre viene de algo que efectivamente leíste sobre ellos.

## Flujo

### 1. Leer el listado

```bash
python scripts/read_table.py <archivo.xlsx> -o cuentas_crudas.json
```

Devuelve las filas crudas de cada hoja. Los encabezados casi nunca están en la fila 1
(suele haber banner de título, hojas de resumen aparte), así que identificá vos cuál
fila es el encabezado y qué significa cada columna.

Mapeá a: `id`, `empresa`, `contacto` (nombre, cargo, email, teléfono), `vertical`,
`estado`, `notas`. Lo que el listado ya trae — sobre todo las notas y el estado del
pipeline — es contexto de primera mano que ninguna búsqueda web te va a dar; usalo.

Antes de investigar, mostrá al usuario cuántas cuentas leíste y cómo mapeaste las
columnas. Un mapeo mal entendido arruina todo lo que sigue y cuesta diez segundos
confirmarlo.

**Calidad del contacto** — clasificá cada uno, porque pesa en el score:
- `verificado`: nombre propio + un canal directo (email nominal o teléfono)
- `generico`: solo `info@` / `contacto@`, o un cargo sin nombre
- `ausente`: sin contacto, o un placeholder tipo "Buscar contacto" / "+54 9 ..."

Ojo con los emails que *parecen* correctos pero están construidos por patrón
(`contacto@empresa.com` para las 19 cuentas es una señal de que nadie los verificó).
Tratalos como `generico` salvo que confirmes que existen.

### 2. Investigar en dos pasadas

Investigar a fondo 20 cuentas cuesta mucho tiempo y la mayoría no lo merece. Dividí:

**Pasada de triage (todas las cuentas, 1-3 búsquedas cada una).** Buscá el sitio propio
y el nombre de la empresa. Alcanza para: verificar que existe y a qué se dedica, sacar
una idea de tamaño (sucursales, plantas, catálogo, headcount de LinkedIn) y detectar
señales evidentes. Con eso ya podés puntuar los cinco ejes.

**Pasada profunda (solo las 5-8 mejores del triage).** Ahí sí: prensa, avisos de
búsqueda laboral, licitaciones, boletín oficial, redes, la sección de novedades del
propio sitio. Es lo que alimenta el desglose.

`references/investigacion.md` tiene dónde buscar cada cosa (con foco en Argentina, donde
las PyMEs no publican estados contables), cómo estimar facturación cuando no hay cifra
publicada, y qué señales delatan dolor operativo. Leelo antes de la primera búsqueda.

Guardá lo que encontrás con su URL a medida que avanzás. Reconstruir las fuentes al
final, de memoria, es cómo aparecen las citas equivocadas.

### 3. Puntuar

Cinco ejes, cada uno de 1 a 5. El script calcula el score 0-100 con estos pesos:

| Eje | Qué mide | Peso |
|---|---|---|
| `capacidad_pago` | Tamaño, capex, empleados | 25% |
| `densidad_dolor` | Cuánto proceso manual detectable hay | 30% |
| `accesibilidad` | Qué tan factible es llegar al que decide | 20% |
| `timing` | Señales de que el momento es ahora | 15% |
| `costo_entrega` | Qué tan barato es entregarlo (5 = barato) | 10% |

El dolor pesa más que el tamaño a propósito, y la accesibilidad pesa casi tanto como el
tamaño: una cuenta enorme sin puerta de entrada no es una oportunidad, es una fantasía.
La rúbrica de qué es un 1 y qué es un 5 en cada eje está en `references/scoring.md`.

Un veredicto sale solo del score (≥70 priorizar, 45-69 evaluar, <45 descartar), pero
podés sobrescribirlo con el campo `veredicto` cuando sepas algo que el score no captura.
Si lo hacés, explicá por qué en el `resumen` de esa cuenta.

### 4. Generar el PDF

Armá un `data.json` (esquema completo con ejemplo en `references/data-schema.md`) y:

```bash
python scripts/build_report.py data.json -o "Contact X-Ray - <cliente> - <fecha>.pdf"
```

El script ordena por score, calcula veredictos, arma el índice, la tabla, los desgloses
(los que tengan `"dossier": true`) y la sección final con el resto de la cartera.
Imprime avisos por consola cuando detecta un dato sin fuente, un desglose sin hipótesis
de dolor o una cuenta sin desglose que quedó sin explicar: no aborta, pero esos avisos
son justamente los errores que arruinan el informe, así que corregilos antes de entregar.

Con `--html-only` genera solo el HTML, útil para revisar rápido sin abrir el PDF.

**Toda cuenta necesita `resumen`, y las que no llevan desglose necesitan además
`desbloqueo`.** Una cuenta que aparece en la tabla como un número sin explicación deja
al lector con la pregunta más importante sin responder: por qué quedó ahí y qué haría
falta para que suba. El `desbloqueo` es esa respuesta en una o dos líneas — "conseguir
el mail directo del dueño", "aclarar internamente de qué empresa se trata", "cambiar el
objetivo: como cuenta comercial no cierra". También va en las descartadas: saber por qué
se descarta algo evita volver a investigarlo dentro de tres meses.

## Marcá 5 a 8 cuentas para desglose

Menos de 5 y el informe no justifica el esfuerzo; más de 8 y deja de ser una
priorización — el punto es que el usuario sepa por dónde empezar el lunes.

Elegí por score, pero con criterio: si dos cuentas del mismo grupo económico dan
parecido, desglosá una sola y mencioná la otra dentro. Y si una cuenta puntúa alto solo
por tamaño y no encontraste ni una hipótesis de dolor concreta, no la desgloses: una
página que dice "podrían optimizar procesos" resta credibilidad al resto del informe.

## Cerrá con el usuario, no con el archivo

Al terminar, además de entregar el PDF, decile en el chat las tres o cuatro cosas que
cambian su semana: quién quedó primero y por qué, qué cuenta grande hay que descartar o
postergar, y qué contactos hay que conseguir antes de poder avanzar. El PDF es para
mandar y archivar; la conversación es donde se toma la decisión.
