# Investigación: dónde buscar y qué concluir

Guía de fuentes para el análisis de cuentas, con foco en Argentina, donde la mayoría de
las empresas objetivo son SRL/SA cerradas que no publican estados contables. Asumir que
existe una fuente con la facturación de una PyME argentina es el error más común y el
que produce informes falsos.

## Contenido

- [El principio: proxies, no cifras](#el-principio-proxies-no-cifras)
- [Fuentes por tipo de dato](#fuentes-por-tipo-de-dato)
- [Estimar facturación cuando no hay cifra](#estimar-facturación-cuando-no-hay-cifra)
- [Señales de dolor operativo](#señales-de-dolor-operativo)
- [Qué NO hacer](#qué-no-hacer)

## El principio: proxies, no cifras

Para empresas grandes o con obra pública (constructoras, energía, agro exportador,
cotizantes) hay cifras publicables: prensa sectorial, licitaciones adjudicadas, memorias
de cámaras, comunicados de cierre de ejercicio.

Para todas las demás, el camino es indirecto: contás empleados, sucursales, plantas,
camiones, sucursales en Google Maps, amplitud de catálogo, cantidad de obras publicadas
— y de ahí derivás una banda de facturación. Es una estimación, se declara como tal, y
se marca `confianza: "baja"` o `"media"` según cuán sólido sea el proxy.

## Fuentes por tipo de dato

**Sitio propio.** Casi siempre la mejor fuente y la más ignorada. Mirá: sección de
novedades o blog (te dice qué les importa este año), "nosotros" (años de trayectoria,
plantas, sucursales), catálogo (amplitud = complejidad operativa), clientes o casos,
formulario de contacto y canales de atención, si hay portal de proveedores o
e-commerce, si publican búsquedas laborales.

**LinkedIn.** El headcount de la página de empresa es el proxy de tamaño más útil que
existe, aunque subestima a las empresas industriales del interior (mucho operario sin
perfil). Los perfiles de empleados te dan además el organigrama real: quién es el
gerente de sistemas, si existe un rol de "mejora de procesos", si hay IT propio.

**Avisos de búsqueda laboral** (LinkedIn Jobs, Bumeran, Computrabajo, ZonaJobs, la
propia web). La mejor señal de dolor que hay: si buscan "analista de facturación",
"data entry" o "asistente administrativo para carga de remitos", están confesando un
proceso manual. Anotá el aviso textual, sirve como justificación citable.

**Boletín Oficial** (boletinoficial.gob.ar y los provinciales). Ampliaciones de capital,
cambios societarios, designación de directorio, fusiones. Un aumento de capital reciente
es señal de timing.

**Licitaciones y compras públicas** (COMPR.AR, portales provinciales y municipales).
Si la cuenta le vende al Estado, ahí están los montos adjudicados: es de las pocas
formas de ver cifras reales de una empresa cerrada.

**Prensa sectorial.** Suele tener más datos duros que la prensa general: Infocampo,
Agrofy News y Bichos de Campo para agro; Infobae Campo; diarios regionales (La Capital,
El Litoral, Puntal); revistas de cámaras. Buscá "<empresa> inversión", "<empresa> planta",
"<empresa> facturación", "<empresa> exporta".

**Cámaras sectoriales.** El padrón de socios confirma actividad y escala: CAFMA
(maquinaria agrícola), ADIMRA (metalúrgica), CIARA, COPAL (alimentos), CAC. Muchas
publican informes con facturación promedio del sector, útil para las bandas.

**Google Maps.** Cantidad de sucursales, depósitos y plantas; fotos del lugar; reseñas
(a veces las quejas describen el proceso: "tardan en mandar la factura", "hay que
llamar para saber si está el repuesto").

**Ferias.** Expoagro, Agroactiva, Biel, Expo Logisti-k. Participar como expositor tiene
un costo alto: es señal de capacidad de inversión y de foco comercial del año.

**Tecnología del sitio.** Mirá el HTML: si el formulario de contacto es un Google Form,
si el catálogo es un PDF descargable, si no hay carrito ni cotizador, si el sitio es de
2015. Cada una de esas cosas es una hipótesis de automatización con evidencia.

## Estimar facturación cuando no hay cifra

Método: `empleados estimados × facturación por empleado del sector`, expresado como
rango amplio y marcado `confianza: "baja"`. Órdenes de magnitud orientativos en USD por
empleado por año para Argentina — son gruesos a propósito, no los presentes como
precisos:

| Sector | USD/empleado/año |
|---|---|
| Servicios profesionales, consultoría | 30-60k |
| Software y tecnología | 40-80k |
| Alimentos, retail, gastronomía | 60-120k |
| Transporte y logística | 60-120k |
| Metalúrgica, manufactura general | 80-150k |
| Construcción, energía, montaje | 100-200k |
| Maquinaria agrícola, agroindustria | 100-200k |
| Distribución mayorista, comercialización | 150-400k |

Ajustá hacia arriba si exporta, tiene marca propia o vende bienes de capital; hacia
abajo si es intensiva en mano de obra o trabaja como proveedor de terceros.

Redondeá siempre a un rango legible (`$3-6M USD`, `$25-40M USD`). Una estimación con
dos decimales miente sobre su propia precisión.

Si ni siquiera podés estimar empleados, dejá el campo vacío. Es información válida:
el informe muestra el hueco y el score baja por falta de sustento, que es exactamente
lo que corresponde.

## Señales de dolor operativo

Lo que buscás no es "empresa sin sistemas" sino un proceso concreto, de alto volumen,
que hoy alguien hace a mano. Las señales más confiables:

- **Avisos de puestos administrativos de carga** — confesión directa de trabajo manual.
- **Operación distribuida** (obras, sucursales, técnicos en la calle): genera partes,
  remitos y fotos que alguien recarga en la oficina.
- **Alto volumen documental**: facturas de proveedores, remitos, certificados,
  comprobantes de flete.
- **Catálogo amplio sin cotizador online**: presupuestos armados uno por uno a mano.
- **Atención por WhatsApp como canal principal de pedidos**: pedidos que se transcriben.
- **Requisitos de cumplimiento**: contratistas, seguros, habilitaciones, vencimientos de
  documentación, HSE. Todo eso suele vivir en una planilla.
- **Multi-sucursal sin stock unificado**: llamados internos para saber si hay
  disponibilidad.
- **Trabajo con el Estado o con grandes clientes**: implica certificaciones,
  rendiciones y formatos que hoy se arman manualmente.

Para cada dolor, la anotación útil tiene tres partes: el proceso, la evidencia de que
existe (qué leíste, dónde), y la carnada — el entregable chico y demostrable con el que
se abre la conversación ("app de parte de trabajo", "validación de facturas por IA",
"cotizador"). Priorizá alto impacto y bajo esfuerzo: lo que se puede mostrar funcionando
en dos semanas abre más puertas que el proyecto integral.

## Qué NO hacer

- **No inventes cifras ni fuentes.** Si citás una nota, tenés que haberla leído y tener
  la URL.
- **No confundas el sector con la empresa.** "El agro invierte en tecnología" no es un
  dato sobre Crucianelli.
- **No infles el dolor.** Si el sitio es moderno y tienen sistema propio, eso baja el
  eje de dolor: decilo. Una cuenta bien descartada ahorra más plata que una mal
  priorizada.
- **No presentes un dato viejo como actual.** Poné el año: "facturación 2023" no es
  "facturación estimada 2026".
