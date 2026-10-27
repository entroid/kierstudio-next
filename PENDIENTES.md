# Pendientes — Kier Studio

**Estado: el frente 0 está cerrado; el frente 1 está en curso.** Este archivo es la
lista de frentes abiertos y el orden en que se van a atacar. No es un plan cerrado:
si algo cambia de prioridad, se cambia acá y se anota la fecha.

Regla que gobierna todo lo de abajo: **nada se publica sin fuente** (`AGENTS.md`
§2.2) y **no se toca el sitio con un ciclo de medición abierto** sin registrarlo en
`analytics/ciclo-2026-09.md` → "Cortes registrados".

| # | Frente | Estado | Depende de |
|---|---|---|---|
| 0 | Cerrar la medición del ciclo 01 | **cerrado 2026-10-26** | — |
| 1 | Oferta: el diagnóstico como producto de entrada | **en curso — siguiente paso** | — |
| 1b | **Qué busca la gente (incluido buscador agéntico / LLMs)** | anotado, después del 1 | 1 |
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
- [ ] **Verificar `salida_externa`**: nunca disparó y no figura en el esquema. Es
      cableado, no dato — se resuelve cuando se toque `lib/analytics.ts` en el frente 1.
- [ ] Consulta del 12/10 (Edge, 13 s): el usuario **no recuerda** si la envió. Queda
      como no verificada, no cuenta como lead. Cierra el tema del formulario: funciona.

---

## 1. Oferta: el diagnóstico como producto de entrada

Hoy `services` son cuatro tarjetas en el mismo plano, y `strategy` —que ya es el
diagnóstico— es la tercera, con cuatro bullets genéricos. La propuesta es
**promover, no agregar**: `strategy` sale del catálogo y pasa a ser el bloque de
entrada; quedan 1 bloque + 3 filas (automatización, aplicación a medida, sitios).
La sección no crece, se acorta.

### Definición del servicio (propuesta, a validar)

**Diagnóstico inicial** — analizamos los procesos que elijamos juntos para decidir
qué conviene automatizar, qué conviene construir y **qué no conviene tocar**.

Entregable: un documento con cuatro partes, presentado en reunión.

1. **Mapa de procesos** — cómo se trabaja hoy, dibujado, con cuellos de botella.
2. **Oportunidades** — qué automatizar o construir, y qué no. La lista incluye las dos cosas.
3. **Riesgos** — cómo hacerlo sin romper lo que funciona ni exponer datos.
4. **Hoja de ruta** — qué ahora y qué después, con impacto esperado y **supuestos declarados**.

Cómo se hace (interno):

1. Reunión inicial: objetivos, sector, elegir 2-3 procesos a analizar.
2. Relevamiento: entrevistas con quien ejecuta cada proceso + los documentos que existan.
3. Mapa de procesos.
4. Oportunidades y riesgos (dos listas).
5. Presentación del roadmap en reunión.

Entregables: reunión de presentación + informe en PDF **si lo piden**.
El documento es del cliente, ejecute con nosotros o no.

Duración: 1 a 4 semanas según alcance y disponibilidad del equipo del cliente.

### Qué entra y qué no

| Entra | No entra |
|---|---|
| Automatización de procesos | Marketing digital |
| Sistemas internos / aplicaciones a medida | Gestión de pauta ni redes |
| Sitios y tiendas online como oportunidad de captación | Campañas, contenidos, SEO mensual |
| Riesgos de datos al integrar IA | Auditoría de seguridad formal |

"Captación" aparece como **oportunidad detectada**, no como servicio vendido: si
el cliente necesita marketing, se le dice y se lo deriva.

### Decisiones que faltan (bloquean el copy final)

- [ ] Duración comercial: ¿se promete "1 a 4 semanas" o un rango más corto?
- [ ] Precio: ¿fijo por alcance acotado (ej. hasta N procesos) o siempre a medida?
      Un "consultar precio" sin ancla convierte mal; un rango declarado filtra mejor.
- [ ] ¿El diagnóstico es opcional siempre, o requisito para proyectos grandes?
- [ ] ¿El PDF es parte del precio o un extra?

### Implementación (4 pasos, ya detallados en la sesión)

1. `translations/{es,en}/services.ts` — agregar `etapa1`/`etapa2`, reemplazar
   `strategy` por `diagnostico` con `fases[]`. Verificado: nadie más lee esa clave.
2. `components/services/ServicesAnimated.tsx` — bloque diagnóstico + rótulo etapa 2
   + las 3 filas existentes (el `map` ya sirve; cambia el array de keys).
3. `lib/analytics.ts` + `CTAButton` — `producto?` en `contacto_iniciado`, para saber
   qué producto genera el contacto (mismo precedente que `proyecto` en los casos).
4. Verificación + registro del corte con fecha.

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
- `build.log` y `tsconfig.tsbuildinfo` están commiteados.

Se resuelven de paso, cuando se toque el archivo que corresponde. No son un frente.

---

## Reglas que aplican a todo

- Un número sin fuente no se publica. Si no está medido, se deja el hueco y se dice.
- Un cambio a la vez, dos semanas mínimo, y se anota en "Cortes registrados".
- Los documentos cerrados (`auditorias/`) no se reabren: hallazgo nuevo, archivo nuevo.
- Los SOPs y la copy interna van en español; el sitio en los dos idiomas.
- `npx tsc --noEmit` limpio y `npm run build` verde antes de cualquier commit.
