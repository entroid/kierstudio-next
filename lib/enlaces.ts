/**
 * Enlaces a secciones del home desde cualquier página.
 *
 * El sitio nació como one-pager, así que la navegación y el footer apuntan a
 * `#servicios`, `#contacto`, etc. Un hash suelto es relativo a la página actual:
 * desde `/trabajos/muu`, `#contacto` resuelve a `/trabajos/muu#contacto`, que no
 * existe — el link no hace nada. Mientras todo vivía en `/` el error era
 * invisible; apareció al haber una segunda página.
 *
 * Fuera del home hay que anteponer la barra. Dentro del home NO hay que
 * hacerlo: `/#contacto` provocaría una navegación en vez de un salto dentro de
 * la misma página.
 *
 * Del scroll se encarga HashScroll, que resuelve el ancla después de hidratar.
 */
export function enlaceSeccion(href: string, pathname: string): string {
  if (!href.startsWith("#")) return href;
  return pathname === "/" ? href : `/${href}`;
}
