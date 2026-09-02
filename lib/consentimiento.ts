/**
 * Consentimiento de cookies de terceros.
 *
 * Hoy sólo gobierna el Meta Pixel, que antes disparaba en el `<head>` —es decir,
 * antes de que el visitante pudiera decidir nada— mientras el sitio publicaba una
 * política de cookies. Eso era la contradicción del punto 12 de la auditoría.
 *
 * La regla es simple y no admite grises: **sin un "sí" explícito, el Pixel no se
 * carga**. Ni al entrar, ni mientras el banner está en pantalla, ni si la persona
 * lo ignora. Sólo un "aceptar" guardado dispara la carga.
 */

export type Consentimiento = "otorgado" | "rechazado";

const CLAVE = "kier:consentimiento";

/** Lo que decidió el visitante, o `null` si todavía no decidió. */
export function leerConsentimiento(): Consentimiento | null {
  try {
    const valor = localStorage.getItem(CLAVE);
    if (valor === "otorgado" || valor === "rechazado") return valor;
  } catch {
    // Sin localStorage (modo privado, storage bloqueado) no hay decisión que
    // recordar. Se pregunta de nuevo, que es el lado seguro: nunca asumir un sí.
  }
  return null;
}

export function guardarConsentimiento(valor: Consentimiento) {
  try {
    localStorage.setItem(CLAVE, valor);
  } catch {
    // Si no se puede persistir, la decisión igual vale para esta visita: el
    // estado en memoria del banner ya la aplicó.
  }
}

const PIXEL_ID = "2551501831869054";

/** La forma que el snippet de Meta le da a `window.fbq`. */
type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded: boolean;
  version: string;
  push: unknown;
};

type VentanaConPixel = Window & { fbq?: Fbq; _fbq?: Fbq };

let pixelCargado = false;

/**
 * Inyecta el Meta Pixel. Sólo la llama el banner, y sólo tras un "aceptar".
 *
 * Es idempotente: si el visitante acepta y después navega, no se carga dos veces.
 */
export function cargarMetaPixel() {
  if (typeof window === "undefined" || pixelCargado) return;

  const w = window as VentanaConPixel;

  if (w.fbq) {
    pixelCargado = true;
    return;
  }

  // El snippet oficial de Meta, escrito como código en vez de como string
  // inyectado: así lo revisa el compilador y no queda un `dangerouslySetInnerHTML`
  // más en el árbol.
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;

  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.push = fbq;

  w.fbq = fbq;
  w._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  fbq("init", PIXEL_ID);
  fbq("track", "PageView");

  pixelCargado = true;
}
