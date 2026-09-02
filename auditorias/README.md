# Auditorías

Auditorías del sitio, una por archivo, en HTML autocontenido. Se abren haciendo doble clic — no necesitan servidor ni build.

## Archivos

| Archivo | Fecha | Estado |
|---|---|---|
| `2026-09-01-auditoria-inicial.html` | 2026-09-01 | **Cerrada** · 12 de 12 (11 resueltos, 1 descartado) |

Una auditoría **cerrada** no se reabre ni se sigue editando: si aparece algo
nuevo, va en una auditoría nueva. Queda como registro de en qué estado estaba el
sitio, qué se decidió y qué se hizo.

## Convención de nombres

`AAAA-MM-DD-nombre-corto.html`. La fecha es la de la medición, no la de la corrección.

## Cómo se hace el seguimiento

Cada hallazgo tiene un estado en el array `HALLAZGOS`, dentro del `<script>` al final del archivo:

```js
{ id:"b3", rank:"07", sev:2, done:false, title:"...", resuelto:"" }
```

- **`done`** es el estado canónico. Se commitea, así que el avance queda versionado en git y lo ven los dos.
- **`resuelto`** es la línea verde que aparece bajo el hallazgo cuando se cierra. Poner fecha y commit: `"Resuelto el 2026-09-01 · commit f9bb5d2"`.
- **`sev`** es `1` (crítico), `2` (alto) o `3` (medio). Define el color de la barra lateral.

Tachar la casilla en el navegador guarda el cambio en `localStorage`, que es **personal y temporal**: sirve para marcar mientras trabajás, pero no lo ve nadie más. Para que cuente para el equipo hay que editar `done` en el archivo y commitear.

## Cuándo hacer una nueva

Cuando haya cambiado lo suficiente como para que la anterior mienta. En la práctica: después de cerrar un bloque de trabajo, o cada dos o tres meses. Las viejas no se editan ni se borran — quedan como registro de en qué estado estaba el sitio y qué se decidió entonces.

Las mediciones de tráfico no van acá: van en [`../analytics/reporte.html`](../analytics/reporte.html), que es acumulativo.
