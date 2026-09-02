# Analytics

Un solo archivo, `reporte.html`, que acumula todas las mediciones. Se abre haciendo doble clic — no necesita servidor ni build.

No es un panel en vivo: un HTML del repo no puede consultar PostHog ni Search Console por su cuenta. Es una serie de fotos, y el valor está en la serie.

## Ciclo abierto

[`ciclo-2026-09.md`](./ciclo-2026-09.md) — línea de base congelada el 2026-09-01,
revisión el **2026-09-15**. Mientras esté abierto, no se toca el sitio. Ese archivo
tiene el traspaso completo: qué se instrumentó, contra qué se compara y las consultas
exactas para la revisión.

## Cómo agregar una medición

**No hace falta tocar el HTML.** Se agrega un objeto al array `mediciones` del bloque `<script id="mediciones" type="application/json">`, al principio del archivo. La página se dibuja sola a partir del último elemento y compara automáticamente contra el anterior.

Copiar el último objeto, cambiarle la fecha y reemplazar los números. Las claves tienen que quedar iguales: si falta una, esa tarjeta o tabla queda vacía.

El historial queda versionado en git, así que el diff entre reportes muestra exactamente qué se movió.

## De dónde sale cada número

**PostHog** — proyecto `551218` (org Kier Studio). Todas las consultas filtran `properties.$host = 'kierstudio.com'` para excluir `localhost`. Ejemplo del resumen semanal:

```sql
SELECT toStartOfWeek(timestamp, 1) AS semana,
       countIf(event = '$pageview') AS pageviews,
       uniqIf(person_id, event = '$pageview') AS visitantes,
       uniqIf(properties.$session_id, event = '$pageview') AS sesiones
FROM events
WHERE timestamp >= now() - INTERVAL 12 WEEK
  AND properties.$host = 'kierstudio.com'
GROUP BY semana ORDER BY semana DESC
```

**Google Search Console** — propiedad de dominio `kierstudio.com`, verificada por DNS. Los clics, impresiones, CTR y posición salen de *Rendimiento*; el conteo de indexación y los motivos, de *Indexación → Páginas*.

**Meta Pixel** — no tiene acceso programático desde acá. El estado de instalación se verifica en el navegador (`window.fbq.version`); si algún día hay pauta, los números se leen en el Administrador de Eventos y se cargan a mano.

## Google Analytics

**No está instalado, y es una decisión, no un olvido** (2026-09-01). PostHog ya cubre ese rol para este sitio. Una tercera fuente significa tres números distintos para la misma pregunta y tiempo gastado en reconciliarlos en vez de decidir. Si algún día entra pauta que lo justifique, se revisa.

## Los eventos propios

Cinco, definidos en [`../lib/analytics.ts`](../lib/analytics.ts). Cada uno existe
para responder una pregunta concreta; si un evento no tiene pregunta atrás, es deuda.

| Evento | Propiedades | Pregunta que responde |
|---|---|---|
| `seccion_vista` | `seccion` | ¿Hasta dónde del argumento llegan? |
| `contacto_iniciado` | `origen`, `canal`, `proyecto?` | ¿Qué parte genera contactos, y por qué canal? |
| `contacto_enviado` | `origen` | ¿Cuántos completan? |
| `proyecto_abierto` | `proyecto`, `origen` | ¿Qué caso se ve, y por dónde entraron? |
| `salida_externa` | `canal`, `origen` | ¿Quién se fue a escribir por WhatsApp? |

Dos detalles que no se deducen del nombre:

- **`proyecto_abierto.origen` no es una sección**, es `trabajos` \| `caso` \|
  `directo`. Dice si la visita al caso vino de la grilla del home, del link
  "siguiente trabajo" de otro caso, o de afuera del sitio.
- **`contacto_iniciado.proyecto` sólo viaja desde una página de caso.** En los CTA
  del home no está, y esa ausencia es informativa: distingue un contacto nacido de
  un caso de uno nacido del argumento del home.

## La regla de lectura

- **Ningún porcentaje sin su N al lado.** "3 de 18", no "17%".
- **Cuantitativo para la dirección, cualitativo para la causa.** El embudo dice dónde se pierde la atención; las grabaciones dicen por qué.
- **Nada de A/B testing** mientras el tráfico siga en este orden de magnitud: ningún test alcanzaría significancia.
- **Un cambio por vez, dos semanas mínimo**, contra la medición anterior.

Los hallazgos cualitativos sobre el sitio no van acá: van en [`../auditorias/`](../auditorias/).
