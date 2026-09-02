export interface ProjectMetric {
    /** El número, ya formateado: "70%", "2 semanas". */
    value: string;
    /** Qué mide. Corto, en minúscula. */
    label: string;
}

export interface Project {
    id: number;
    /**
     * Identificador de la URL: /trabajos/[slug]. Es el mismo en los dos
     * idiomas a propósito — la página es una sola y el idioma se elige en el
     * cliente, así que un slug por idioma partiría el SEO en dos.
     */
    slug: string;
    title: string;
    category: string;
    year: string;
    description: string;
    services: string[];
    image: string;
    images: string[];
    url?: string;

    /* --- Caso de estudio (página propia) --------------------------------
     * Escrito para quien decide en una PyME, no para otro diseñador: qué
     * dolía, qué se hizo y qué cambió. Sin jerga de proceso.
     */

    /** Una o dos frases. Es también la meta description de la página. */
    summary: string;
    /** La situación previa, en los términos del negocio. */
    problema: string;
    /** Qué hicimos. Frases cortas, una idea por ítem. */
    solucion: string[];
    /** Qué cambió después. Sólo lo que se puede sostener. */
    resultado: string[];
    /** Números medidos. Se omite cuando no los hay: no se inventan. */
    metrics?: ProjectMetric[];
    /**
     * De dónde salen esos números y con qué reserva hay que leerlos. Se
     * muestra al pie de las métricas. Un número sin origen no se publica.
     */
    metricsNota?: string;
}
