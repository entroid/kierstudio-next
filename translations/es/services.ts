export const services = {
    tag: "Servicios",
    title: "Nuestras ",
    title2: "Soluciones",

    // El orden de esta sección es el argumento comercial: primero el mapa, después
    // la obra. `strategy` dejó de ser una tarjeta del catálogo y pasó a ser
    // `diagnostico`, el producto de entrada. El cambio se inspiró en cómo venden el
    // diagnóstico las consultoras de IA grandes, pero adaptado a PyME: sin exigir
    // SOPs (la mayoría no tiene nada escrito), sin marketing digital (no lo hacemos)
    // y sin prometer ROI (sería un número sin fuente — ver AGENTS.md §2.2).
    subtitle: "Se puede empezar por el mapa o por la obra. Si todavía no sabés dónde se te van las horas, arrancamos por el diagnóstico: te llevás el plano de tu operación y después decidís. Si ya sabés qué necesitás, vamos directo.",

    etapa1: {
        rotulo: "Etapa 1 · Punto de partida",
        title: "DIAGNÓSTICO INICIAL",
        tag: "El mapa antes del viaje",
        subtitle: "Recorremos cómo trabaja hoy tu empresa para identificar oportunidades de mejora. Tres partes, en este orden:",
        fases: [
            {
                numero: "01",
                title: "MAPA DE PROCESOS",
                text: "Cómo se trabaja hoy, dibujado en  estándar BPMN, con los cuellos de botella a la vista.",
            },
            {
                numero: "02",
                title: "OPORTUNIDADES",
                text: "Qué soluciones encajan mejor, cómo se integrarían y el impacto esperado.",
            },
            {
                numero: "03",
                title: "HOJA DE RUTA",
                text: "Qué ahora y qué después, con el impacto esperado y los supuestos con los que lo calculamos.",
            },
        ],
        // Datos comerciales decididos el 2026-10-26. Si cambia el precio, se cambia acá.
        detalles: ["2 a 3 semanas", "Reunión de presentación", "Informe en PDF incluido"],
        // La frase que evita que el diagnóstico se lea como un peaje obligatorio.
        nota: "Después podés ejecutar con nosotros o no. El documento es tuyo.",
    },

    etapa2: {
        rotulo: "Etapa 2 · Si ya sabés qué necesitás",
        subtitle: "Tres formas de ejecutar. Cada una se contrata sola, sin pasar por el diagnóstico.",
    },

    automation: {
        title: "AUTOMATIZACIÓN DE PROCESOS CON IA",
        tag: "Lo repetitivo, que lo haga el sistema",
        subtitle: "Facturas que alguien carga a mano, pedidos que llegan por WhatsApp y hay que pasar al sistema, proveedores a los que hay que perseguir para saber cuándo entregan. Automatizamos esas tareas sin cambiar el sistema que ya usás: lo que está claro se procesa solo, y lo dudoso lo revisa una persona.",
        items: ["Carga de facturas y comprobantes", "Pedidos por WhatsApp y email", "Seguimiento de proveedores", "Alertas y reportes automáticos"],
        producto: "automatizacion",
    },

    customapp: {
        title: "APLICACIONES A MEDIDA",
        tag: "Tu operación, en un solo lugar",
        subtitle: "¿Tu equipo trabaja con planillas de Excel que sólo una persona entiende? ¿Manejás turnos, pedidos o clientes por WhatsApp? Construimos la herramienta que tu negocio necesita —un sistema interno, un panel, un portal para clientes—, simple de usar y pensada para cómo trabajás de verdad.",
        items: ["Sistemas de gestión internos", "Paneles de control", "Portales para clientes", "Turnos y reservas"],
        producto: "aplicacion",
    },

    websites: {
        title: "SITIOS WEB",
        tag: "Tu presencia digital, trabajando 24/7",
        subtitle: "Tu primer punto de contacto con clientes nuevos. Diseñamos sitios que generan confianza y convierten visitas en consultas. Y si vendés online, armamos tu tienda completa —diseño, configuración, medios de pago y lanzamiento—, sin complicaciones técnicas de tu lado.",
        items: ["Diseño a medida", "Rápidos y optimizados", "Rediseños", "Tiendas online", "Shopify, Tiendanube y WooCommerce", "Pasarelas de pago"],
        producto: "sitio",
    },

    ctaButton: "Contanos tu proyecto",
    etapa1CTA: "Pedir el diagnóstico",
};
