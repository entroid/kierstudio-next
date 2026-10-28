# Pendientes — Kier Studio

**Estado: frentes 0 y 1 cerrados. El siguiente es 1b.** Este archivo es la
lista de frentes abiertos y el orden en que se van a atacar. No es un plan cerrado:
si algo cambia de prioridad, se cambia acá y se anota la fecha.

Regla que gobierna todo lo de abajo: **nada se publica sin fuente** (`AGENTS.md`
§2.2) y **no se toca el sitio con un ciclo de medición abierto** sin registrarlo en
`analytics/ciclo-2026-09.md` → "Cortes registrados".

| # | Frente | Estado | Depende de |
|---|---|---|---|
| 0 | Cerrar la medición del ciclo 01 | **cerrado 2026-10-26** | — |
| 1 | Oferta: el diagnóstico como producto de entrada | **cerrado 2026-10-27 — ver §1** | — |
| 1b | **Qué busca la gente (incluido buscador agéntico / LLMs)** | **siguiente — sin empezar** | — (1 cerrado) |
| 2 | Captación de clientes | sin empezar | 1, 1b |
| 3 | SOPs internos + autoaplicación del diagnóstico | sin empezar | 1 |
| 4 | Header "tech" + video full screen + hero centrado | anotado, al final | 1, 2 |
| 5 | Deuda técnica heredada | oportunista | — |

---

## 0. Cerrar la medición del ciclo 01 — ✅ cerrado 2026-10-26

Se leyó la mitad que faltaba (Search Console) con sesión propia del navegador y se
cruzó con PostHog. **Resultado completo en
[`analytics/ciclo-2026-10-revision.md`](analytics/ciclo-2026-10-revision.md).**

Resumen: la hipótesis se confirma. Cuello de botella = **adquisición**.

- 1 clic en 3 meses, 168 impresiones, CTR 0,6 %, posición media 7,4.
- Ninguna consulta comercial. Ninguna página de `/trabajos/` con impresiones.
- Páginas indexadas: **bajaron de 3 a 2**. "Descubierto sin indexar": **subió de 6 a 8**.
- 286 enlaces externos, de 2 dominios clientes, **todos a la home**.
- **Pedir reindexación no es palanca**: ya se probó dos veces y no movió el índice.

Estado de cuentas pendientes de este frente:

- [x] PostHog leído (vía MCP).
- [x] Search Console leído (navegador con login propio).
- [x] **`salida_externa` verificado el 2026-10-27: no era un bug de cableado, son cero
      clicks.** El cableado está bien: `Footer` y `CTAAnimated` disparan `contactoIniciado`
      y `salidaExterna` en el mismo `onClick`. PostHog lo confirma — el evento no existe
      en la taxonomía porque **sólo crea la definición al primer envío**. La prueba de que
      nadie clickeó: en 120 días no hay **ni un** `contacto_iniciado` con `origen: footer`
      ni `contacto: "contacto"`, que son justamente los que disparan también la salida. Lo
      único registrado es 1 `contacto_enviado` (formulario) y 1 `contacto_iniciado` desde
      `nav`. El evento va a aparecer solo cuando alguien toque WhatsApp o email — no hay
      nada que arreglar acá.
- [ ] Consulta del 12/10 (Edge, 13 s): el usuario **no recuerda** si la envió. Queda
      como no verificada, no cuenta como lead. Cierra el tema del formulario: funciona.

---

## 1. Oferta: el diagnóstico como producto de entrada — ✅ cerrado 2026-10-27

Lo que había: `services` eran cuatro tarjetas en el mismo plano, y `strategy` —que ya
era el diagnóstico— estaba tercera, con cuatro bullets genéricos. Lo que se hizo fue
**promover, no agregar**: `strategy` salió del catálogo y pasó a ser el bloque de
entrada; quedaron 1 bloque + 3 filas (automatización, aplicación a medida, sitios).
La sección no creció, se acortó.

### Definición del servicio (lo que dice el sitio hoy)

**Diagnóstico inicial** — analizamos los procesos que elijamos juntos para decidir
qué conviene automatizar, qué conviene construir y **qué no conviene tocar**.

Entregable: un documento de **tres partes**, presentado en reunión.

1. **Mapa de procesos** — cómo se trabaja hoy, dibujado en estándar BPMN, con cuellos de botella.
2. **Oportunidades** — qué solución encaja, cómo se integraría y el impacto esperado.
3. **Hoja de ruta** — qué ahora y qué después, con los supuestos con los que se calcula.

*(La propuesta original tenía una cuarta parte, "Riesgos". Hoy no está en el entregable y
la tabla "Entra" todavía la menciona: ver el gap al final de esta sección.)*

Cómo se hace (interno):

1. Reunión inicial: objetivos, sector, elegir 2-3 procesos a analizar.
2. Relevamiento: entrevistas con quien ejecuta cada proceso + los documentos que existan.
3. Mapa de procesos.
4. Oportunidades y hoja de ruta.
5. Presentación del roadmap en reunión.

Entregables: reunión de presentación + informe en PDF **incluido**.
El documento es del cliente, ejecute con nosotros o no.

Duración: **2 a 3 semanas** según alcance y disponibilidad del equipo del cliente.

### Qué entra y qué no

| Entra | No entra |
|---|---|
| Automatización de procesos | Marketing digital |
| Sistemas internos / aplicaciones a medida | Gestión de pauta ni redes |
| Sitios y tiendas online como oportunidad de captación | Campañas, contenidos, SEO mensual |
| Riesgos de datos al integrar IA | Auditoría de seguridad formal |

"Captación" aparece como **oportunidad detectada**, no como servicio vendido: si
el cliente necesita marketing, se le dice y se lo deriva.

### Decisiones comerciales — cerradas (precio el 2026-10-27)

- [x] **Duración**: "2 a 3 semanas", ya en el sitio (`etapa1.detalles`). Son semanas de
      calendario, no de esfuerzo: incluyen la disponibilidad del cliente.
- [x] **¿Opcional siempre?** Sí. `etapa2.subtitle` lo dice explícito: "Cada una se
      contrata sola, sin pasar por el diagnóstico".
- [x] **PDF**: incluido en el precio, no es extra (`etapa1.detalles`).
- [x] **Precio**: no se publica en el sitio. Ver abajo.

### Precio — decisión del 2026-10-27: no se publica

Rango interno aceptado: **desde USD 200** (PyME chica, ~3 procesos) **hasta USD 2000**
(empresa grande, muchos procesos y más complejos), y **siempre cotizado después de
evaluar el alcance**. El sitio no lleva número.

Por qué no se publica:

- Un rango publicado crea expectativa de presupuesto y después obliga a explicar por qué
  este caso cae en el extremo alto. El precio depende del alcance, y el alcance se define
  hablando.
- En pesos no sirve: con inflación el número envejece en semanas. Si alguna vez se
  publica, es en dólares y como piso.
- La sección ya tiene anclas que no son precio: 2 a 3 semanas, reunión de presentación,
  informe en PDF y "el documento es tuyo".

Riesgo que queda abierto, dicho por este mismo archivo: un "consultar precio" sin ancla
convierte mal. La contra-lectura es que el diagnóstico no es un commodity que se compre
por precio — es el producto que *justifica* una llamada. **Si a los 5-10 presupuestos
reales la fricción es el precio, se publica "desde USD 200" sin tope.** Queda como
decisión reversible, no como pendiente.

Falta un dato para saber si el piso es correcto: **cuántas horas lleva de verdad**. El
método del kit de Divisual (cuestionario → generación → revisión) baja el costo de
semanas a horas, pero ese número no está medido. Se obtiene de la primera corrida real
(§3, autoaplicación), no de una estimación.

### Implementación — ✅ completa 2026-10-27 (commit `0b9c526`)

- [x] 1. `translations/{es,en}/services.ts` — `etapa1`/`etapa2`, `diagnostico` con
      `fases[]` y un `producto` por servicio.
- [x] 2. `components/services/ServicesAnimated.tsx` — bloque diagnóstico + rótulo de
      etapa 2 + las tres filas.
- [x] 3. `lib/analytics.ts` + `CTAButton` — `producto?` en `contacto_iniciado`.
- [x] 4. Verificación + corte registrado: `npx tsc --noEmit` limpio; corte con fecha
      2026-10-27 en `analytics/ciclo-2026-09.md` → "Cortes registrados".

### Gap de copy a decidir: el documento tiene 3 partes, pero el alcance promete riesgos

La propuesta original de este frente definía **cuatro** partes (mapa, oportunidades,
**riesgos**, hoja de ruta). Lo implementado tiene **tres** (`etapa1.fases`), mientras la
tabla "Entra/No entra" sigue listando "Riesgos de datos al integrar IA" como parte del
servicio.

El video de Divisual también propone cuatro, pero su cuarta pata es un **estudio de
vulnerabilidad de ciberseguridad**, que nuestra tabla excluye a propósito ("Auditoría de
seguridad formal" → No entra).

O sea: sacar "riesgos" de las fases fue probablemente lo correcto —no prometemos
auditoría de seguridad— pero entonces la tabla "Entra" quedó prometiendo algo que el
entregable no lista. **Decidir una de dos**: (a) vuelve una fase 04 de riesgos *de datos
al integrar IA*, no de seguridad; o (b) "Riesgos de datos al integrar IA" sale de la
columna "Entra".

### Cómo se produce — insumo del video de Divisual (2026-10-27)

El video describe el mismo servicio producido con un kit que corre en Claude: el cliente
llena un cuestionario y el kit dibuja los procesos en BPMN, con carril por persona y
manual de pasos. **Es candidato directo para §3 (SOPs + autoaplicación)**, no para el
copy: convertiría el mapa de procesos de semanas de trabajo a horas.

No está verificado por nosotros y es contenido con embudo de venta propio (lista de
espera, grupo de WhatsApp, mentorías). Los precios que menciona —"cientos o miles de
euros"— **no son fuente** y no se publican.

---

## 1b. Qué busca la gente — y qué de eso busca en un LLM

**Anotado el 2026-10-26. Va después del frente 1, no antes.** Nace de un dato del
cierre del ciclo 01: `kier` tiene 50 impresiones y las consultas del rubro tienen
cero. Hay dos explicaciones posibles y todavía no se distinguen:

- **A) No buscan lo que vendemos** (o lo buscan con otras palabras).
- **B) Sí lo buscan, pero no estamos posicionados** para esas consultas.

### Qué hay que averiguar

1. **El vocabulario real del cliente.** Cómo nombra una PyME el problema: ¿"cargar
   facturas", "automatizar Excel", "sistema de gestión", "digitalizar", "que el
   WhatsApp no me coma el día"? Nuestra copy usa "automatización de procesos" y
   "aplicaciones a medida", que probablemente no es cómo lo dice el dueño.
2. **Volumen vs. intención.** Hay palabras con buscador de competencia altísima
   ("desarrollo web") y palabras con volumen casi nulo pero que convierten. Con
   nuestro tamaño, la segunda categoría es la única jugable.
3. **La Search Console como fuente indirecta.** Si hay consultas a las que aparecemos
   en posición 30+, es señal de que la gente busca algo parecido y nuestro copy no
   matchea. Requiere exportar más consultas de las 7 que se ven hoy.

### La capa agéntica (búsqueda vía LLM)

El usuario lo planteó explícitamente y es una pregunta legítima: cada vez más gente
pide a un asistente "conseguime alguien que automatice las facturas de mi PyME" en
vez de teclear en Google. Eso cambia el juego de un modo que conviene tener claro.

**Lo que se sabe:** los modelos arman respuestas con lo que encuentran en fuentes
que pueden leer y citar. Un sitio que Google no rastreó apenas existe para ellos.
**Lo que NO se puede afirmar todavía** y no se debe escribir en ninguna parte:

- Que exista un volumen medible de esa búsqueda para PyMEs argentinas. **No hay dato.**
- Que un `llms.txt` o una estructura concreta mejore la aparición. Está en discusión
  y no hay evidencia de efecto; tratarlo como solución sería inventar.
- Que `kierstudio.com` aparezca o no en respuestas de ChatGPT/Gemini/Perplexity.
  **Es medible a mano** (preguntarle a los asistentes por el rubro y ver si
  aparecemos), pero una consulta puntual no es una medición.

Conexión con el frente 0: **el problema que bloquea a Google es el mismo que bloquearía
a un LLM.** 286 enlaces externos, todos a la home, de dos dominios clientes; 2 páginas
indexadas de 19. Un crawler de IA se alimenta de lo mismo que Google no está visitando.
Así que el hallazgo de este frente probablemente no sea "hay que optimizar para LLMs"
sino "hay que volverse legible primero".

### Cómo se mide, sin inventar

- Herramienta de keywords con volumen real (no impresiones de GSC, que son nuestras).
- Export ampliado de Search Console, ordenado por consultas de distinto nivel.
- Prueba manual y registrada con fecha: 3-4 prompts reales a los asistentes, guardando
  captura de si aparecemos, quién aparece y con qué palabra. Se repite después de
  cada cambio grande y se compara.

**No se escribe en el sitio ninguna promesa sobre "aparecer en ChatGPT"** hasta tener
la medición del frente 0 repetida en el tiempo.

---

## 2. Captación de clientes

El cuello de botella según el ciclo 01. Hay sitio y hay casos, pero no hay tráfico
con intención comercial: **1 clic en 3 meses**, 2 páginas indexadas de 19, y **286
enlaces externos de 2 dominios clientes, todos apuntando a la home.**

Frentes posibles, sin decidir todavía: backlinks reales y diversos apuntando a
páginas internas (lo que el ciclo ya pidió, y lo único con evidencia a favor:
`mbfoodsafety.com` apareció como dominio nuevo en seis semanas), contenido indexable
por fuera del home, embudo de venta, y canales directos (prospección con
`contact-xray`, que ya existe y no se está usando como sistema).

**Depende de 1b:** la estrategia de captación cambia según si el problema es "no nos
buscan" o "nos buscan con otras palabras". Elegir canal antes de saberlo es apostar.

### Insumo externo: los tres canales del video de Divisual (2026-10-27)

Ordenados por efectividad según quien los usa: **marca personal** (YouTube + LinkedIn +
Instagram), **llamadas en frío** y **puerta a puerta**, con la tesis de que el canal más
incómodo es el que más convierte. Agrega además un nicho concreto que hoy no está en el
copy: negocios "blue-collar" (construcción, plomería, jardinería, servicios del hogar).

Se anota como hipótesis a contrastar en este frente, no como plan: es contenido de
marketing con embudo propio y no trae números verificables. Lo que sí muerde el
diagnóstico actual es que **abre canales donde no dependemos de que Google nos indexe**,
que es exactamente lo que el ciclo 01 dejó bloqueado.

---

## 3. SOPs internos

Hoy no hay nada estandarizado: si entra un cliente, cada proyecto se improvisa.
Este frente es escribir, para cada servicio, el procedimiento real —entradas,
pasos, entregables, criterio de terminado— y usarlo primero en casa.

Dos partes:

1. **SOPs de servicio**: diagnóstico, automatización, aplicación a medida, sitios.
2. **SOPs de operación de la agencia**: propuesta, alta de cliente, gestión de
   proyecto, cierre y traspaso.

**Autoaplicación:** correr el diagnóstico sobre Kier Studio y decidir qué se
automatiza y qué no. Sirve como caso propio y como prueba del método antes de
venderlo.

Empieza **después** del frente 1: primero se define qué se promete, después cómo
se cumple.

---

## 4. Header "tech" + video full screen + hero centrado

Anotado para el final, por decisión explícita. Cambia el look and feel a algo más
tech, con background full screen de video (ya existe el asset) y el Hero más
centrado.

**Atención:** `HeroAnimated` cambia la fuente del video según `matchMedia` en
`lg` (1180px). Tocar el hero afecta qué video se descarga. Y es el cambio más
caro de medir de toda la lista: si la medición no está cerrada, cualquier
movimiento en el hero es inatribuible.

---

## 5. Deuda técnica heredada

De `AGENTS.md` §14, sin tocar:

- `translations/*/common.ts → seo` es código muerto y dice el posicionamiento viejo.
- `app/providers.tsx` no se usa.
- `FloatingControls`: el pulso del chat es un `while(true)` que nunca se limpia.
- `TRANSLATIONS_GUIDE.md` está desactualizado.
- `build.log` sigue commiteado. `tsconfig.tsbuildinfo` ya no: quedó cubierto por
  `*.tsbuildinfo` en `.gitignore`.
- **`.tmp-shot/` — 5 PNG, ~1,5 MB, commiteados el 2026-10-27** en `0b9c526`. Son capturas
  de trabajo de sesión, sin valor de producto. Se sacan del índice con
  `git rm --cached -r .tmp-shot` y se agregan al `.gitignore`; si no, vuelven en el
  próximo commit.

Se resuelven de paso, cuando se toque el archivo que corresponde. No son un frente.

---

## Reglas que aplican a todo

- Un número sin fuente no se publica. Si no está medido, se deja el hueco y se dice.
- Un cambio a la vez, dos semanas mínimo, y se anota en "Cortes registrados".
- Los documentos cerrados (`auditorias/`) no se reabren: hallazgo nuevo, archivo nuevo.
- Los SOPs y la copy interna van en español; el sitio en los dos idiomas.
- `npx tsc --noEmit` limpio y `npm run build` verde antes de cualquier commit.
