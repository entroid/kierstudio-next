/**
 * Eventos propios del sitio.
 *
 * Cada evento existe para responder una pregunta concreta; si un evento no
 * tiene pregunta atrás, es deuda. Los valores de las propiedades viven acá
 * como tipos y no como strings sueltos: un `origen` mal escrito no rompe nada
 * en runtime pero parte el embudo en dos en silencio.
 *
 * Ver docs del plan de medición y analytics/README.md.
 */

/** Secciones del home, en el orden en que aparecen. */
export const SECCIONES = [
  "hero",
  "que-hacemos",
  "servicios",
  "partners",
  "trabajos",
  "proceso",
  "testimonios",
  "contacto",
] as const;

export type Seccion = (typeof SECCIONES)[number];

/**
 * De dónde salió el click. Son las secciones, más los dos lugares que están
 * en todas las páginas y no son una sección del argumento.
 */
export type Origen = Seccion | "nav" | "footer";

/** Por dónde intenta contactar la persona. */
export type Canal = "form" | "whatsapp" | "email" | "instagram";

/** Mapa de id del DOM → nombre de sección para analytics. */
export const ID_A_SECCION: Record<string, Seccion> = {
  inicio: "hero",
  about: "que-hacemos",
  servicios: "servicios",
  partners: "partners",
  proyectos: "trabajos",
  proceso: "proceso",
  testimonios: "testimonios",
  contacto: "contacto",
};

/**
 * Cliente de captura. Deliberadamente NO importamos posthog-js acá: este módulo
 * lo toca casi todo componente con un CTA, y un import estático arrastraba la
 * librería entera (~79 kB) al bundle de cada ruta. En vez de eso, PostHogProvider
 * —que ya la carga— registra el cliente después de inicializar.
 */
type ClienteAnalytics = {
  capture: (evento: string, propiedades?: Record<string, unknown>) => void;
};

let cliente: ClienteAnalytics | null = null;

/** La llama PostHogProvider una vez que init() corrió. */
export function registrarCliente(c: ClienteAnalytics) {
  cliente = c;
}

/**
 * PostHog sólo se inicializa en producción (ver PostHogProvider). Si no hay
 * cliente registrado, capturar es un no-op silencioso: así los componentes no
 * necesitan saber nada del entorno.
 */
function capturar(evento: string, propiedades?: Record<string, unknown>) {
  try {
    if (typeof window === "undefined") return;

    // En desarrollo no se envía nada, pero el evento se ve en consola: es la
    // única forma de comprobar que el disparo está bien cableado sin ensuciar
    // los datos de producción.
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.debug("[analytics]", evento, propiedades ?? {});
      return;
    }

    if (!cliente) return;
    cliente.capture(evento, propiedades);
  } catch {
    // Nunca romper la interfaz por un problema de analytics.
  }
}

/**
 * La sección entró en pantalla. Se dispara una sola vez por sesión y por
 * sección: es el proxy de profundidad de lectura que un one-pager no da por
 * pageviews.
 */
export function seccionVista(seccion: Seccion) {
  const clave = `kier:seccion_vista:${seccion}`;
  try {
    if (sessionStorage.getItem(clave)) return;
    sessionStorage.setItem(clave, "1");
  } catch {
    // Sin sessionStorage preferimos duplicar el evento antes que perderlo.
  }
  capturar("seccion_vista", { seccion });
}

/**
 * Alguien hizo click en algo que lleva a contactar. Responde la pregunta
 * central: qué parte del argumento genera contactos, y por qué canal.
 */
export function contactoIniciado(origen: Origen, canal: Canal) {
  capturar("contacto_iniciado", { origen, canal });
}

/** El formulario se envió correctamente. Es la conversión. */
export function contactoEnviado(origen: Origen) {
  capturar("contacto_enviado", { origen });
}

/** Se abrió el detalle de un trabajo. */
export function proyectoAbierto(proyecto: string, origen: Origen) {
  capturar("proyecto_abierto", { proyecto, origen });
}

/**
 * La persona se fue del sitio por un canal de contacto. Sin esto, quien
 * escribe por WhatsApp en vez de usar el formulario es invisible.
 */
export function salidaExterna(canal: Canal, origen: Origen) {
  capturar("salida_externa", { canal, origen });
}
