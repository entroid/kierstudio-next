# Revisión del ciclo 01 — cierre 2026-10-26

**Estado: ciclo 01 cerrado definitivamente. Sin ciclo 02 abierto.**

Este archivo cierra el ciclo abierto en [`ciclo-2026-09.md`](./ciclo-2026-09.md), cuya
revisión del 2026-09-14 quedó incompleta porque faltaba la mitad de Search Console.
Hoy se leyó esa mitad con el navegador logueado en GSC y se cruzó con PostHog.

**Conclusión: la hipótesis del ciclo anterior se confirma y se puede dar por cerrada.
El cuello de botella es adquisición. No es conversión ni oferta, y no se arregla desde
dentro del sitio.**

---

## 1. Qué se pudo leer esta vez

Las dos fuentes, por fin juntas:

- **PostHog** — proyecto 551218 (`kierstudio.com`), leído vía MCP.
- **Search Console** — propiedad `sc-domain:kierstudio.com`, leída con sesión propia del
  navegador (el plugin de browser accede con el login del usuario). Los permisos los dio
  el usuario; no se importaron cookies ni credenciales de ningún tipo.

Ventana de GSC: **25/07/2026 → 24/10/2026** (3 meses). Última actualización del informe
de indexación: **22/10/26**.

---

## 2. Search Console

### Rendimiento

| Métrica | Valor | Ciclo anterior (90 d hasta 01/09) |
|---|---|---|
| Clics | **1** | 2 |
| Impresiones | 168 | 113 |
| CTR | 0,6 % | 1,8 % |
| Posición media | 7,4 | 7,3 |

Consultas (7 en total): `kier` 50 impr / 0 clics · `kier official website` 5 · `kier design`
2 · `esteticas cerca de mi` 1 · `estéticas cerca de mí` 1 · `no` 1 · `udo kier actor` 1.

**Ninguna consulta comercial ni del rubro.** Ni "automatización", ni "IA", ni "sistemas",
ni "facturas".

### Páginas con impresiones: sólo tres

| Página | Clics | Impresiones | Posición |
|---|---|---|---|
| `https://kierstudio.com/` | 1 | 164 | 6,6 |
| `https://kierstudio.com/contacto` | 0 | 12 | 17,8 |
| `https://www.kierstudio.com/accounting` | 0 | 4 | 7,3 |

Ninguna página de `/trabajos/` generó una sola impresión.

### Indexación (22/10/26)

| Estado | Cantidad |
|---|---|
| Indexadas | **2** (era 3 en septiembre) |
| Sin indexar | 19 |

| Motivo | Páginas | Fuente | Validación |
|---|---|---|---|
| Excluida por `noindex` | 4 | Sitio | No iniciada |
| Página con redirección | 3 | Sitio | No iniciada |
| No encontrada (404) | 2 | Sitio | No iniciada |
| Bloqueada por robots.txt | 2 | Sitio | No iniciada |
| **Descubierta: actualmente sin indexar** | **8** (era 6) | Google | **Iniciada** |
| Canónica alternativa | 0 | — | N/D |

Dos correcciones al informe anterior:

- **Las páginas indexadas bajaron de 3 a 2.** No avanzó: retrocedió.
- **La reindexación solicitada sí quedó registrada** ("Validación: Iniciada"), pero el
  grupo que debía reducirse **subió de 6 a 8** en el mismo período.

### Enlaces

| | Total | Composición |
|---|---|---|
| Externos | **286** | `expoagronea.com` **274**, `mbfoodsafety.com` **11**, `webflow.io` 1 |
| Internos | **6** | home 4, contacto 2 |

- **`mbfoodsafety.com` es nuevo** respecto de septiembre (donde había 248 de 254 de un
  solo dominio). Confirmado por el usuario: es un cliente.
- **Las 286 páginas enlazadas apuntan todas a la home.** Cero enlaces externos a una
  página de caso o de servicios.
- Los 6 enlaces internos detectados cubren sólo home y contacto: Google nunca terminó de
  rastrear el sitio a fondo.

---

## 3. PostHog (desde 2026-09-01)

| Evento | Eventos | Sesiones |
|---|---|---|
| `$pageview` | 182 | 100 |
| `seccion_vista` | 180 | 48 |
| `proyecto_abierto` | 30 | 21 |
| `contacto_iniciado` | 1 | 1 |
| `contacto_enviado` | 1 | 1 |
| `$rageclick` | 1 | 1 |
| `salida_externa` | **0** | — |

Sesiones por semana: 22, 14, 16, 8, 18, 4, 12, 4, 2. Sin tendencia.

### Advertencia sobre la composición del tráfico

100 sesiones **no son 100 personas**. Por país y referrer:

- Argentina directo: 44 sesiones (probablemente el propio dueño más algo local).
- Racimo de directos de Alemania 10, EE.UU. 10, Suecia 4, Países Bajos, Francia, China,
  República Checa, Dinamarca, Polonia: patrón consistente con bots o proxies.
- **Google: 2 sesiones de Argentina y 1 de España.**
- LinkedIn 1, `hernanainsa.webflow.io` 1, `expoagronea.com` 1.

Lectura (hipótesis, no conclusión): la audiencia humana real es de ~10 a 15 sesiones, y
sólo 2 entran desde Google.

### `proyecto_abierto` por origen

| Origen | Eventos | Sesiones |
|---|---|---|
| `directo` | 18 | 14 |
| `trabajos` | 10 | 8 |
| `caso` | 2 | 2 |

`directo` pasó de 0 a 14. **Pero eso no valida la hipótesis de indexación**: las páginas
de caso no tienen una sola impresión en Google (§2), así que esas 14 sesiones no pueden
venir de una búsqueda. Vienen de links compartidos o del racimo de directos descrito
arriba. El hallazgo de septiembre —`directo = 0` como prueba de que nadie encuentra los
casos— sigue vigente en su fondo.

### La conversión del 12/10

Sesión Edge/Windows, 22:29, entra a `/` y envía el formulario 13 s después, sin leer otra
sección, con un `$rageclick`, y sin `contacto_iniciado` (fue directo al formulario).
**El usuario no recuerda si la mandó él.** Se registra como **no verificada**: no cuenta
como lead.

Lo que sí prueba: **el formulario funciona de punta a punta** (`contacto_enviado` dispara).

El `contacto_iniciado` del 29/09 (Argentina, desde el nav) no llegó a enviarse: abandono.

---

## 4. Dos hallazgos de instrumentación

1. **`salida_externa` nunca disparó y no figura en el esquema de eventos.** O nadie tocó
   nunca el WhatsApp, o el cableado nunca se probó. **A verificar a mano.**
2. **`seccion_vista` marca 48 sesiones contra 100 de `$pageview` porque el componente sólo
   está montado en el home.** La profundidad de lectura se mide únicamente sobre quien
   entra por la raíz; quien cae en una página de caso no se mide.

---

## 5. Conclusión

**Se confirma el diagnóstico de 2026-09-14: el cuello de botella es adquisición.**

La evidencia nueva lo refuerza:

- 286 enlaces externos, de 2 dominios clientes, **todos apuntando a la home**.
- 0 impresiones para cualquier página que no sea la home, contacto o accounting.
- 1 clic en 3 meses, con posición media 7,4 — aparece en la página 1 y aun así no lo tocan.
- 168 impresiones con CTR 0,6 %: el problema no es dónde aparece, es que **casi nadie
  busca lo que vende**.

Y la corrección importante: **pedir reindexación no es palanca.** Se pidió el 01/09 y no
movió nada; se volvió a pedir y el índice bajó. Google conoce esas URLs desde el 02/09 y
elige no rastrearlas por falta de señal externa. Una tercera solicitud tampoco va a mover
el número.

---

## 6. Qué NO se deduce de esto

Para que no se sobre-interprete la conclusión:

- **No dice que la home no convierta.** Cinco sesiones que llegan no son muestra.
- **No dice que la oferta esté mal.** No hay nadie leyéndola: no se puede juzgar.
- **No dice que rediseñar sea inútil.** Dice que hoy sería inatribuible.

---

## 7. Dirección acordada el 2026-10-26

El usuario decidió cerrar la medición en este punto y pasar a los cambios, con un criterio
explícito: **lo que importa es que los clientes encuentren la home; que Google indexe las
páginas internas es secundario.**

Anotado con una observación al respecto: el dato no contradice esa decisión, pero tampoco
la respalda. Los casos dejan de ser un canal de descubrimiento y pasan a ser prueba de
confianza para quien ya llegó. Eso cambia qué conviene medir (ver `PENDIENTES.md` §1), no
si conviene hacer el cambio.

**Siguiente paso definido:** implementar la reestructuración de servicios (diagnóstico como
producto de entrada + tres servicios de ejecución), empezando por el modelo de datos en las
dos traducciones. Ver `PENDIENTES.md` §1.
