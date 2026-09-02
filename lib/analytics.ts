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
 *
 * `proyecto` sólo viaja cuando el click sale de una página de caso. Sin él,
 * los seis trabajos caen todos en `origen: "trabajos"` y la pregunta pasa a
 * ser "¿los casos generan contactos?" en vez de "¿cuál?", que es la útil.
 */
export function contactoIniciado(origen: Origen, canal: Canal, proyecto?: string) {
  capturar("contacto_iniciado", proyecto ? { origen, canal, proyecto } : { origen, canal });
}

/** El formulario se envió correctamente. Es la conversión. */
export function contactoEnviado(origen: Origen) {
  capturar("contacto_enviado", { origen });
}

/* --- Casos: /trabajos/[slug] ------------------------------------------- */

/**
 * De dónde salió la visita a un caso. No es un `Origen`: un caso no se abre
 * desde una sección del argumento, se abre desde una página.
 *
 * - `trabajos`: desde la grilla del home.
 * - `caso`: desde el link "siguiente trabajo" de otro caso.
 * - `directo`: buscador, link compartido, o cualquier entrada que no pasó por
 *   el sitio. Es el caso que justifica que estas páginas existan, así que es
 *   el que no se puede perder.
 */
export type OrigenCaso = "trabajos" | "caso" | "directo";

const CLAVE_ORIGEN_CASO = "kier:origen_caso";

/**
 * Se llama al hacer click en un link a un caso, antes de navegar.
 *
 * El origen no se puede deducir en destino: con navegación de cliente
 * `document.referrer` no se actualiza, así que una entrada desde el home
 * quedaría indistinguible de una entrada desde Google. Por eso lo dejamos
 * escrito antes de irnos.
 */
export function marcarOrigenCaso(origen: OrigenCaso) {
  try {
    sessionStorage.setItem(CLAVE_ORIGEN_CASO, origen);
  } catch {
    // Sin sessionStorage la visita cuenta como directa. Preferimos un origen
    // impreciso antes que perder el evento.
  }
}

/** Lee y limpia la marca. Sin marca previa, la entrada fue directa. */
function consumirOrigenCaso(): OrigenCaso {
  try {
    const valor = sessionStorage.getItem(CLAVE_ORIGEN_CASO);
    sessionStorage.removeItem(CLAVE_ORIGEN_CASO);
    if (valor === "trabajos" || valor === "caso") return valor;
  } catch {
    // Ver marcarOrigenCaso.
  }
  return "directo";
}

/**
 * Se vio un caso. Dispara al montarse la página, no en el click del link:
 * desde que los casos tienen URL propia se puede llegar desde un buscador o
 * un link compartido, y contar sólo los clicks del home mediría justo el
 * camino viejo. Una vez por visita a la página, venga de donde venga.
 */
export function proyectoAbierto(proyecto: string) {
  capturar("proyecto_abierto", { proyecto, origen: consumirOrigenCaso() });
}

/**
 * La persona se fue del sitio por un canal de contacto. Sin esto, quien
 * escribe por WhatsApp en vez de usar el formulario es invisible.
 */
export function salidaExterna(canal: Canal, origen: Origen) {
  capturar("salida_externa", { canal, origen });
}
