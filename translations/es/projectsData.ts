import { Project } from "@/types/project";

export const projectsData: Project[] = [
    {
        id: 1,
        slug: "carga-automatica-de-facturas",
        title: "Carga automática de facturas",
        category: "Automatización con IA · Oil & Gas",
        description:
            "Automatizamos la recepción, lectura y validación de comprobantes de proveedores en el área de cuentas a pagar de una empresa de la industria Oil & Gas. Con IA y lectura de documentos, el sistema extrae los datos de cada factura, los controla contra el sistema de gestión y deriva a una persona sólo las excepciones.",
        summary:
            "Una empresa de Oil & Gas recibía miles de facturas de proveedores por mes, en PDF y en foto, y cada una la cargaba y controlaba una persona. Hoy el sistema las lee, las compara con lo que ya estaba registrado y sólo le pasa a una persona las que no cierran.",
        problema:
            "El área de cuentas a pagar procesaba miles de comprobantes por mes, de una base amplia de proveedores y desde una operación repartida en distintos lugares. Llegaban en PDF o como imagen, cada proveedor con su formato y con calidad muy variable. Alguien tenía que leer cada uno, pasar los datos al sistema de gestión y controlar que coincidieran. Los errores de tipeo y las diferencias aparecían tarde, cada persona controlaba a su manera y cumplir los plazos de pago dependía de cuánta gente hubiera disponible.",
        solucion: [
            "Juntamos en un solo circuito los comprobantes que llegaban por mail, por carpetas compartidas y por el propio sistema de gestión.",
            "Pusimos a la IA a leer cada documento como lo haría una persona, aunque venga escaneado o como foto, y sin depender de una plantilla por proveedor.",
            "Lo conectamos con el sistema de gestión que la empresa ya usaba: no hubo que reemplazar nada.",
            "Definimos que lo dudoso no se carga solo: los comprobantes incompletos o con diferencias pasan a una persona.",
        ],
        proceso: [
            { titulo: "Recibe", detalle: "Toma los comprobantes del mail, de carpetas compartidas o del sistema de gestión, y los separa por tipo de documento." },
            { titulo: "Lee", detalle: "Digitaliza el documento y la IA identifica los datos clave: fecha, número, CUIT, importe y moneda." },
            { titulo: "Controla", detalle: "Compara cada dato contra el sistema de gestión y el padrón de proveedores, y detecta duplicados e inconsistencias." },
            { titulo: "Registra", detalle: "Deja los datos listos en el sistema, avisa qué se procesó y guarda el historial de cada comprobante. Lo que no cierra, va a revisión." },
        ],
        resultado: [
            "El equipo dejó de tipear comprobantes y pasó a revisar sólo las excepciones.",
            "Menos errores de carga: los datos que llegan al sistema son más confiables.",
            "Un proveedor nuevo o un formato distinto no obliga a reconfigurar nada.",
            "El mismo equipo tiene más capacidad, y los plazos de pago se cumplen mejor.",
            "Cada comprobante tiene su historia registrada —qué llegó, qué se controló y qué se hizo—, lista para una auditoría.",
        ],
        metrics: [
            { value: ">90%", label: "de los comprobantes leídos correctamente" },
        ],
        metricsNota: "Estimación basada en el feedback del cliente.",
        services: ["Automatización con IA", "Lectura de documentos", "Integración con sistema de gestión"],
        image: "/projects/automatizacion-facturas/portada.png",
        images: [],
        url: "",
    },
    {
        id: 2,
        slug: "seguimiento-de-ordenes-de-compra",
        title: "Seguimiento de órdenes de compra",
        category: "Automatización de compras · Oil & Gas",
        description:
            "Automatizamos el seguimiento de órdenes de compra y la gestión de proveedores para el área de compras de una empresa industrial de Oil & Gas: detección de pedidos vencidos o por vencer, consulta a proveedores, actualización de fechas y reporte de desvíos.",
        summary:
            "El equipo de compras de una empresa de Oil & Gas pasaba horas persiguiendo proveedores para saber si iban a entregar a tiempo. Hoy el sistema detecta qué pedidos están en riesgo, le consulta al proveedor y actualiza el estado solo.",
        problema:
            "Con muchas órdenes de compra abiertas, muchos proveedores y fechas de entrega críticas, saber qué iba a llegar tarde era trabajo manual: revisar el sistema, armar listas de pendientes, escribirle a cada proveedor, esperar la respuesta y volver a cargarla. Le consumía horas al equipo de compras, la información quedaba dispersa y los atrasos se descubrían cuando ya eran un problema. En una operación con obras y depósitos, lo que importa es que el material esté cuando se lo necesita.",
        solucion: [
            "Tomamos un proceso repetitivo y ordenado —revisar, preguntar, actualizar— y lo convertimos en un circuito que corre solo.",
            "Lo conectamos con el sistema de gestión y los demás sistemas internos que ya existían, sin reemplazarlos.",
            "Le dimos al proveedor una forma simple de responder: un formulario o un mail con sus órdenes pendientes.",
            "Dejamos las decisiones en manos del equipo: los incumplimientos y los casos críticos se escalan a una persona.",
        ],
        proceso: [
            { titulo: "Detecta", detalle: "Revisa el sistema de gestión y marca las órdenes vencidas o por vencer, teniendo en cuenta las nuevas fechas ya pactadas." },
            { titulo: "Ordena", detalle: "Suma las novedades de recepciones y pedidos nuevos, y agrupa todo por proveedor, material, lugar y fecha requerida." },
            { titulo: "Pregunta", detalle: "Le envía a cada proveedor un formulario o un mail pidiéndole que confirme fechas y cantidades." },
            { titulo: "Actualiza", detalle: "Lee y clasifica las respuestas, y actualiza el estado, la nueva fecha y los comentarios de cada orden." },
            { titulo: "Avisa", detalle: "Arma un reporte de avance, pendientes y casos críticos, y escala los incumplimientos para que los gestione una persona." },
        ],
        resultado: [
            "El equipo de compras dejó de perseguir proveedores y pasó a decidir qué hacer con los atrasos.",
            "Los pedidos críticos se detectan antes de que venzan, no cuando el material ya falta.",
            "El estado de cada pedido se ve en tiempo real.",
            "Mejoró el cumplimiento de las entregas.",
            "La respuesta de cada proveedor queda registrada por pedido, para seguimiento y auditoría.",
        ],
        metrics: [
            { value: "+200 h", label: "por mes de trabajo manual evitado: más que una persona de jornada completa" },
        ],
        metricsNota: "Estimación basada en el feedback del cliente.",
        services: ["Automatización de procesos", "Integración con sistema de gestión", "Reportes automáticos"],
        image: "/projects/seguimiento-oc/portada.png",
        images: [],
        url: "",
    },
    {
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
