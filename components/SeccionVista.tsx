"use client";

import { useEffect } from "react";
import { ID_A_SECCION, seccionVista } from "@/lib/analytics";

/**
 * Dispara `seccion_vista` cuando una sección entra en pantalla.
 *
 * En un one-pager los pageviews no miden interés: todas las sesiones tienen
 * uno solo. La profundidad de lectura hay que instrumentarla a propósito o no
 * existe como dato — esto es lo que después dice dónde muere el scroll.
 *
 * Observa por id, así no hay que tocar cada componente de sección.
 */
export function SeccionVista() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;

          // Dos criterios, porque varias secciones son más altas que la
          // pantalla y con esas el ratio nunca llegaría a 0,5:
          //   a) se ve la mitad de la sección, o
          //   b) la sección ocupa media pantalla.
          const mitadDeLaSeccion = entrada.intersectionRatio >= 0.5;
          const mediaPantalla =
            entrada.intersectionRect.height >= window.innerHeight * 0.5;
          if (!mitadDeLaSeccion && !mediaPantalla) return;

          const seccion = ID_A_SECCION[entrada.target.id];
          if (seccion) seccionVista(seccion);
          // Una vez contada, la sección deja de observarse.
          observer.unobserve(entrada.target);
        });
      },
      // Umbrales finos a propósito: el observer sólo avisa cuando el ratio
      // cruza uno de la lista, y una sección tres veces más alta que la
      // pantalla nunca supera un ratio de ~0,33. Con saltos de 0,02 seguimos
      // recibiendo llamadas y el criterio de "media pantalla" puede evaluarse.
      { threshold: Array.from({ length: 51 }, (_, i) => i / 50) }
    );

    const observadas: Element[] = [];
    Object.keys(ID_A_SECCION).forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observadas.push(el);
      }
    });

    if (!observadas.length) {
      observer.disconnect();
      return;
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
