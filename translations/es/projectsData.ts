import { Project } from "@/types/project";

export const projectsData: Project[] = [
    {
        id: 1,
        slug: "hard-rock-marketing-planner",
        title: "Hard Rock Marketing Planner",
        category: "Sistema de planificación de ofertas",
        year: "2026",
        description:
            "Lideramos el diseño y la experiencia de usuario (UX/UI) de esta herramienta web interna que centraliza y automatiza la planificación de campañas de marketing para múltiples casinos de Hard Rock International. Auditamos y rediseñamos flujos de trabajo complejos basados en Excel, transformándolos en un sistema escalable e intuitivo, con automatizaciones que reducen significativamente el tiempo de creación de campañas y los errores operativos. [Realizado a través de OZ Digital Agency]",
        summary:
            "Un equipo de marketing armaba sus campañas en planillas de Excel que sólo dos personas sabían mantener. Lo convertimos en un sistema donde cualquiera del equipo puede crear una campaña sin romper nada.",
        problema:
            "La planificación de campañas para varios casinos vivía en hojas de cálculo y scripts SQL sostenidos por un puñado de expertos en Excel. Cada campaña era manual, tardaba, y un error de tipeo se propagaba sin que nadie lo viera hasta que ya estaba publicado. El conocimiento no estaba en la empresa: estaba en la cabeza de dos personas.",
        solucion: [
            "Auditamos el proceso real —no el que estaba documentado— y lo mapeamos entero antes de diseñar una sola pantalla.",
            "Ordenamos la lógica dispersa en una jerarquía clara: Plan → Trabajos → Campañas → Ofertas. Lo que antes era una planilla distinta por casino pasó a ser una estructura reutilizable.",
            "Automatizamos importar, duplicar y publicar, que era donde se iba la mayor parte del tiempo manual.",
            "Construimos un sistema de diseño compartido entre el archivo de diseño y el código, para que la herramienta pueda crecer sin rehacerse.",
        ],
        resultado: [
            "Crear una campaña dejó de ser tarea de especialista y pasó a ser algo que hace el equipo de marketing.",
            "Los errores operativos que antes se descubrían publicados ahora se frenan en el formulario.",
            "El proceso quedó documentado dentro del producto: si alguien se va, la operación sigue.",
        ],
        metrics: [
            { value: "70%", label: "menos tiempo para crear una campaña" },
            { value: "65%", label: "más ofertas lanzadas el primer mes" },
            { value: "82%", label: "menos errores reportados" },
        ],
        metricsNota:
            "Impacto estimado por el cliente comparando el proceso manual anterior con el nuevo flujo.",
        services: ["Diseño de Producto", "Sistema de Diseño", "Auditoría de Flujos de Trabajo"],
        image: "/projects/hardrock/hr-mp-00.jpg",
        images: [
            "/projects/hardrock/000.png",
            "/projects/hardrock/004.png",
            "/projects/hardrock/003.png",
            "/projects/hardrock/001.png",
            "/projects/hardrock/005.png",
        ],
        url: "",
    },
    {
        id: 2,
        slug: "muu",
        title: "Muu",
        category: "App Móvil para Marketplace Ganadero",
        year: "2026",
        description:
            "Rediseño completo de Muu, una aplicación móvil de compra y venta de ganado. Actualizamos su aspecto visual antiguo y optimizamos los flujos de publicación de lotes, añadiendo además nuevas funciones de gestión. Al simplificar estos flujos de trabajo críticos e introducir una identidad visual profesional de alto contraste, optimizada para entornos rurales al aire libre, transformamos una experiencia obsoleta y frustrante en una plataforma móvil moderna e intuitiva.",
        summary:
            "Una app de compraventa de ganado que se usaba en el campo, con sol de frente, y estaba diseñada como si se usara en una oficina. La rediseñamos para el lugar donde realmente se abre.",
        problema:
            "Publicar un lote era lento y ambiguo: el usuario no sabía en qué paso estaba ni qué le faltaba. A eso se sumaba que la app se usa a la intemperie, donde una interfaz de bajo contraste directamente no se lee. El resultado era gente que abandonaba a mitad de la publicación y una plataforma que no transmitía profesionalismo.",
        solucion: [
            "Trabajamos sobre el feedback de usuarios que el negocio ya tenía, en vez de arrancar una investigación desde cero: era un rediseño acotado, no una app nueva.",
            "Simplificamos los dos flujos que importan —publicar un lote y gestionar ofertas— reduciendo pasos y haciendo visible en qué punto está la persona.",
            "Definimos una identidad visual de alto contraste, pensada para leerse al aire libre.",
            "Agregamos un onboarding de cinco pantallas para que un usuario nuevo entienda la plataforma sin que alguien se la explique.",
        ],
        resultado: [
            "Los usuarios deciden más rápido: la información que necesitan para comparar lotes está donde la buscan.",
            "La plataforma pasó a verse confiable, que en una operación de compraventa entre desconocidos es parte del producto.",
            "Se mantuvo toda la funcionalidad existente: no hubo que reentrenar a quien ya la usaba.",
        ],
        services: ["Diseño de App Móvil", "UX/UI"],
        image: "/projects/muu/001.jpg",
        images: [
            "/projects/muu/002.png",
            "/projects/muu/003.png",
            "/projects/muu/004.png",
        ],
        url: "https://www.muumercadoganadero.com/",
    },
    {
        id: 3,
        slug: "mirai-fleet",
        title: "MIRAI FLEET",
        category: "Sistema de gestión de flotas",
        year: "2023",
        description:
            "La plataforma SaaS y app móvil de MIRAI Fleet necesitaba un rediseño para mejorar la experiencia del usuario y optimizar las operaciones. El nuevo diseño presenta una estética moderna y profesional con foco en la usabilidad y la eficiencia. También implementamos una sección de catálogo personalizado impulsado por Strapi CMS.",
        summary:
            "Una plataforma de gestión de flotas con web y app móvil que había crecido sin diseño. La ordenamos y le dimos al equipo una forma de publicar contenido sin depender de programadores.",
        problema:
            "La plataforma funcionaba, pero cada pantalla resolvía su problema a su manera: el usuario tenía que reaprender la lógica en cada sección. Además, cualquier cambio de contenido del catálogo pasaba por el equipo técnico, lo que convertía una tarea de minutos en un pedido con cola de espera.",
        solucion: [
            "Unificamos los criterios de la plataforma web y la app móvil para que sean el mismo producto y no dos.",
            "Rediseñamos las pantallas de operación priorizando la tarea frecuente por encima de la excepción.",
            "Montamos el catálogo sobre Strapi CMS, para que el equipo publique y edite sin tocar código.",
        ],
        resultado: [
            "El equipo gestiona su propio contenido, sin depender del área técnica para cada cambio.",
            "El catálogo pasó a ser contenido indexable, que antes no existía como tal.",
            "La operación diaria se hace en menos pasos y con menos ambigüedad.",
        ],
        services: ["Plataforma SaaS", "App Móvil", "UX/UI", "Diseño de Producto"],
        image: "/projects/mrai/mrai-mock.jpg",
        images: [
            "/projects/mrai/04project.jpg",
            "/projects/mrai/02-project.jpg",
            "/projects/mrai/03project.jpg",
            "/projects/mrai/01project.jpg",
        ],
        url: "https://miraifleet.com",
    },
    {
        id: 4,
        slug: "barrivell",
        title: "Barrivell",
        category: "Tienda online de moda",
        year: "2024",
        description:
            "Rediseñamos el sitio web de e-commerce de Barrivell para mejorar la experiencia del usuario y optimizar sus operaciones. El nuevo diseño cuenta con una estética moderna y profesional enfocada en la usabilidad, conversión y eficiencia. También implementamos una sección de catálogo personalizado con Strapi CMS.",
        summary:
            "Una tienda de moda online donde el proceso de compra perdía gente en el camino. Rediseñamos el recorrido completo y dejamos el catálogo en manos del equipo.",
        problema:
            "El sitio mostraba los productos pero no acompañaba la decisión: faltaba jerarquía, el camino hasta el carrito tenía fricción y la carga de productos dependía de asistencia técnica. Para una tienda, cada paso de más es una venta menos.",
        solucion: [
            "Rediseñamos el recorrido de compra completo, del listado al checkout, sacando los pasos que no aportaban.",
            "Ordenamos la ficha de producto alrededor de lo que la persona necesita saber para decidir.",
            "Implementamos el catálogo con Strapi CMS, para que el equipo cargue y edite productos por su cuenta.",
        ],
        resultado: [
            "El equipo administra la tienda sin intermediarios técnicos.",
            "El catálogo quedó estructurado para ser encontrado en buscadores, no sólo para verse bien.",
            "La marca pasó a presentarse a la altura de sus productos.",
        ],
        services: ["Configuración y Lanzamiento de Ecommerce", "Diseño Web", "Estrategia"],
        image: "/projects/barriv/barri-mock.jpg",
        images: [
            "/projects/barriv/01.png",
            "/projects/barriv/02.jpg",
            "/projects/barriv/03.jpg",
        ],
        url: "https://barrivell.com.ar/",
    },
    {
        id: 5,
        slug: "holy-beer-hotel",
        title: "HOLY Beer Hotel",
        category: "Landing page para hostel temático",
        year: "2025",
        description:
            "Rediseñamos la landing page de Holy Beer Hotel para elevar su presencia digital e impulsar mayores conversiones. El nuevo diseño combina una estética refinada, una interfaz intuitiva y una estructura de contenido estratégica que guía a los visitantes a través de la historia de la marca hacia la reserva.",
        summary:
            "Un hotel temático con una identidad fuerte y un sitio que no la contaba. Reescribimos la página como un recorrido que termina en la reserva.",
        problema:
            "La página mostraba el hotel pero no construía el argumento: quien entraba no terminaba de entender qué lo hacía distinto, y el camino hasta reservar quedaba librado a que la persona lo buscara. Un hotel temático que no transmite su tema compite sólo por precio.",
        solucion: [
            "Ordenamos el contenido como un recorrido: qué es el lugar, por qué es distinto, y recién ahí reservar.",
            "Diseñamos una interfaz que sostiene el carácter de la marca sin estorbar la lectura.",
            "Optimizamos las imágenes, que en un sitio de hotelería son el argumento principal y también el mayor peso de carga.",
        ],
        resultado: [
            "La página cuenta la historia de la marca en vez de sólo listar servicios.",
            "El camino a la reserva quedó explícito en cada tramo del recorrido.",
        ],
        services: ["Diseño Web", "UX/UI", "Estrategia"],
        image: "/projects/holy/holy-mock.png",
        images: [
            "/projects/holy/01.png",
            "/projects/holy/02.png",
        ],
        url: "https://beerhoteles.com/",
    },
    {
        id: 6,
        slug: "teamie",
        title: "TEAMIE.",
        category: "Landing page de presentación de producto",
        year: "2024",
        description:
            "Diseñamos y desarrollamos la landing page de Teamie. para apoyar el lanzamiento de esta nueva startup de colaboración en equipo. El sitio cuenta con un diseño moderno orientado a startups, con foco en la claridad, la confianza y la conversión. Además, implementamos una sección de blog con Strapi CMS.",
        summary:
            "Una startup que salía al mercado sin nada que mostrar todavía. Le construimos la identidad y el sitio con los que se presentó el primer día.",
        problema:
            "Un producto nuevo, sin clientes ni casos, tiene un solo problema: que le crean. Teamie. necesitaba explicar qué hace en pocos segundos y parecer una empresa seria antes de tener el historial que lo respalde.",
        solucion: [
            "Definimos la identidad visual desde cero, buscando que se lea como producto establecido y no como prueba.",
            "Escribimos y estructuramos la página alrededor de una sola idea clara del producto, sin desviarse a las funcionalidades.",
            "Montamos un blog con Strapi CMS, para que el equipo publique y empiece a construir presencia en buscadores desde el lanzamiento.",
        ],
        resultado: [
            "Salieron al mercado con una presencia coherente en vez de un sitio provisorio.",
            "El equipo puede publicar contenido sin depender de nosotros.",
        ],
        services: ["Identidad Visual", "Sitio Web", "CMS para Blog"],
        image: "/projects/teamie/01-mock.jpg",
        images: [
            "/projects/teamie/01.png",
            "/projects/teamie/02.png",
            "/projects/teamie/05.png",
        ],
        url: "https://teamie-show.webflow.io/",
    },
];
