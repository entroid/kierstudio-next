"use client";

import { useEffect } from "react";

// El contenido de las secciones se monta al hidratar, así que cuando el
// navegador resuelve el ancla de la URL (#servicios, #contacto) el elemento
// todavía no existe y el scroll queda arriba de todo.
// Esto lo resuelve después de montar y sigue corrigiendo mientras el layout
// se mueve (imágenes, video y fuentes que terminan de cargar).
export function HashScroll() {
  useEffect(() => {
    const rawHash = window.location.hash;
    if (!rawHash || rawHash === "#") return;

    let id: string;
    try {
      id = decodeURIComponent(rawHash.slice(1));
    } catch {
      id = rawHash.slice(1);
    }
    if (!id) return;

    let cancelled = false;
    let lastTarget: number | null = null;
    let stableFrames = 0;
    const startedAt = Date.now();

    // Offset del header fixed (h-24 = 6rem), en px reales.
    const headerOffset =
      6 * parseFloat(getComputedStyle(document.documentElement).fontSize || "16");

    const align = () => {
      const el = document.getElementById(id);
      if (!el) return null;

      const target = Math.max(
        0,
        Math.round(el.getBoundingClientRect().top + window.scrollY - headerOffset)
      );

      // "instant" es deliberado: html tiene scroll-behavior:smooth, y con scroll
      // suave cada corrección reinicia la animación y nunca llega al destino.
      if (Math.abs(window.scrollY - target) > 1) {
        window.scrollTo({ top: target, behavior: "instant" as ScrollBehavior });
      }
      return target;
    };

    const tick = () => {
      if (cancelled) return;

      // Ventana de corrección: 2,5s desde el montaje.
      if (Date.now() - startedAt > 2500) return;

      const target = align();
      if (target === null) {
        window.requestAnimationFrame(tick);
        return;
      }

      // ~10 frames seguidos con el mismo destino = el layout se quedó quieto.
      if (lastTarget !== null && target === lastTarget) {
        stableFrames += 1;
        if (stableFrames >= 10) return;
      } else {
        stableFrames = 0;
      }
      lastTarget = target;

      window.requestAnimationFrame(tick);
    };

    // Última corrección cuando terminan de cargar imágenes y video: es el
    // momento en que el layout suele dar el salto más grande.
    const onLoad = () => {
      if (!cancelled) align();
    };

    // Si la persona scrollea a mano, dejamos de pelearle.
    const stop = () => {
      cancelled = true;
    };

    window.requestAnimationFrame(tick);
    window.addEventListener("load", onLoad);
    window.addEventListener("wheel", stop, { passive: true, once: true });
    window.addEventListener("touchstart", stop, { passive: true, once: true });
    window.addEventListener("keydown", stop, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", onLoad);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("keydown", stop);
    };
  }, []);

  return null;
}
