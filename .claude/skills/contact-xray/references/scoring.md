# Rúbrica de puntuación

Cinco ejes, cada uno de 1 a 5. El score final (0-100) lo calcula `build_report.py` con
los pesos fijos; acá está qué significa cada valor.

Puntuá con la evidencia que tenés, no con la que te gustaría tener. Un eje puntuado en 4
"porque probablemente sea así" convierte todo el ranking en una opinión disfrazada de
número. Ante la duda, bajá: el costo de descartar mal una cuenta es una llamada que no
hiciste; el costo de priorizar mal es una semana de trabajo perdida.

## capacidad_pago — 25%

Puede pagar un proyecto de consultoría o desarrollo a medida y sostenerlo.

| | |
|---|---|
| 5 | Corporación o empresa grande con inversión visible (capex, obras, plantas, exportación). Presupuesto de tecnología asumible sin discusión. |
| 4 | Empresa mediana consolidada, multi-sucursal o industrial, con crecimiento demostrable. |
| 3 | PyME establecida, operación estable, puede afrontar un proyecto acotado. |
| 2 | Empresa chica o de márgenes ajustados; solo alcanza para algo muy puntual. |
| 1 | Micro, unipersonal, o sin evidencia de que pueda pagar. |

El sector público va aparte: la capacidad de pago existe pero el ciclo es larguísimo.
Puntualo por capacidad real y descontá en `timing`.

## densidad_dolor — 30%

Cuánto proceso manual, repetitivo y de alto volumen hay para automatizar. Es el eje que
más pesa porque es el que determina si hay proyecto.

| | |
|---|---|
| 5 | Varios procesos manuales identificados **con evidencia concreta** (avisos de puestos de carga, operación distribuida, alto volumen documental). |
| 4 | Un proceso claro y evidente, con evidencia sólida. |
| 3 | Indicios razonables por el tipo de operación, sin evidencia directa. |
| 2 | Poca superficie: operación simple o ya sistematizada. |
| 1 | Sin dolor detectable, o ya tienen resuelto lo que ofrecemos. |

Una empresa con IT propio y sistemas modernos puede seguir teniendo dolor (los huecos
entre sistemas suelen ser el mejor negocio), pero necesitás evidencia específica para
puntuar alto.

## accesibilidad — 20%

Qué tan factible es llegar a quien decide, ahora.

| | |
|---|---|
| 5 | Contacto nominal con canal directo (celular o email nominal) **y** poder de decisión: dueño, socio, gerente general. |
| 4 | Contacto nominal verificado, aunque no sea el decisor final; o referido por alguien en común. |
| 3 | Nombre identificado pero sin canal directo confirmado. |
| 2 | Solo canal genérico (`info@`, formulario web, teléfono de recepción). |
| 1 | Sin contacto, o el registro trae un placeholder ("Buscar contacto", "+54 9 ..."). |

Una organización grande y burocrática, sin referencia interna, no pasa de 2 aunque
tengas un mail: la puerta existe pero está cerrada.

## timing — 15%

Qué tan oportuno es el momento.

| | |
|---|---|
| 5 | Señal fuerte y reciente: obra o planta nueva, ronda de inversión, expansión, contratación masiva, licitación ganada, o una conversación ya iniciada con nosotros. |
| 4 | Movimiento visible en los últimos meses. |
| 3 | Actividad normal, sin señal particular. |
| 2 | Sector o empresa en amesetamiento. |
| 1 | Contracción, conflicto, ciclo de decisión bloqueado (elecciones, cambio de gestión, reestructuración). |

Si el listado ya trae un estado de pipeline avanzado ("Propuesta Enviada", "En
Negociación"), eso es señal de timing de primera mano: pesa más que cualquier hallazgo
web.

## costo_entrega — 10%

Qué tan barato nos sale entregar. **Se puntúa invertido: 5 = barato de entregar.**

| | |
|---|---|
| 5 | Encaja con algo que ya tenemos hecho o hicimos antes; alcanza con configurar. |
| 4 | Desarrollo acotado sobre patrones conocidos. |
| 3 | Proyecto estándar, sin integraciones raras. |
| 2 | Requiere integrarse con sistemas legacy o procesos muy particulares. |
| 1 | Alta complejidad: normativa, integraciones múltiples, stakeholders dispersos, on-site permanente. |

Pesa poco a propósito: es un factor de rentabilidad, no de oportunidad. Pero rompe
empates entre cuentas parecidas, y esos empates son frecuentes.

## Del score al veredicto

`build_report.py` aplica: **≥70 priorizar · 45-69 evaluar · <45 descartar**.

Los umbrales están puestos para que "priorizar" sea exigente. Si la mitad del listado
sale priorizado, casi seguro estás puntuando con optimismo: revisá `densidad_dolor` y
`accesibilidad`, que son donde más se infla.

Podés forzar el veredicto con el campo `veredicto` de la cuenta. Hacelo cuando sepas
algo que los ejes no capturan — una relación personal, un competidor que acaba de entrar,
una mala experiencia previa — y dejá el motivo escrito en el `resumen`.
