export const process = {
    tag: "Cómo Trabajamos",
    title: "Proceso",
    subtitle: "Entender antes de construir, empezar chico y ampliar lo que funciona.",

    ctaButton: "¿Empezamos?",

    // Process steps. `services` son las etiquetas de la derecha: lo que el
    // cliente se lleva de cada etapa.
    steps: {
        discovery: {
            number: "01",
            title: "ENTENDEMOS",
            description: "Vemos cómo se trabaja hoy en tu empresa —no cómo está escrito— y detectamos dónde se pierden horas y dónde aparecen los errores.",
            services: ["Relevamiento", "Cuellos de botella"],
        },
        design: {
            number: "02",
            title: "PLANIFICAMOS",
            description: "Te decimos qué conviene resolver primero, con qué tecnología y qué impacto esperar. Antes de construir, ves cómo va a funcionar.",
            services: ["Hoja de ruta", "Prioridades"],
        },
        develop: {
            number: "03",
            title: "EMPEZAMOS CHICO",
            description: "Arrancamos por lo que más impacto tiene —un proceso piloto, una primera versión del sistema o del sitio— conectado a lo que ya usás, y lo probamos con tu equipo.",
            services: ["Piloto", "Medición"],
        },
        deliver: {
            number: "04",
            title: "AMPLIAMOS",
            description: "Con lo primero funcionando, lo extendemos a más procesos, capacitamos a tu equipo y seguimos cerca después del lanzamiento.",
            services: ["Escalado", "Capacitación", "Soporte"],
        },
    },
};
