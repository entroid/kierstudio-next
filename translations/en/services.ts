export const services = {
    tag: "Services",
    title: "Our ",
    title2: "Solutions",

    // The order of this section is the sales argument: the map first, then the work.
    // `strategy` stopped being a catalogue card and became `diagnostico`, the entry
    // product. Adapted from how large AI consultancies sell the diagnostic, but for
    // a small business: no SOPs required (most have nothing written down), no digital
    // marketing (we don't do it) and no ROI promise (that would be a number without a
    // source — see AGENTS.md §2.2).
    subtitle: "You can start with the map or with the work. If you still don't know where your hours go, we start with the diagnostic: you get the blueprint of your operation and then you decide. If you already know what you need, we go straight there.",

    etapa1: {
        rotulo: "Stage 1 · Starting point",
        title: "INITIAL DIAGNOSTIC",
        tag: "The map before the journey",
        subtitle: "We walk through how your company works today to spot improvement opportunities. Three parts, in this order:",
        fases: [
            {
                numero: "01",
                title: "PROCESS MAP",
                text: "How work happens today, drawn in standard BPMN, with the bottlenecks in plain sight.",
            },
            {
                numero: "02",
                title: "OPPORTUNITIES",
                text: "Which solutions fit best, how they'd integrate and the expected impact.",
            },
            {
                numero: "03",
                title: "ROADMAP",
                text: "What now and what later, with the expected impact and the assumptions behind it.",
            },
        ],
        // Commercial facts decided on 2026-10-26. If they change, they change here.
        detalles: ["2 to 3 weeks", "Presentation meeting", "PDF report included"],
        // The line that keeps the diagnostic from reading as a mandatory toll.
        nota: "Afterwards you can execute with us or not. The document is yours.",
    },

    etapa2: {
        rotulo: "Stage 2 · If you already know what you need",
        subtitle: "Three ways to execute. Each one is contracted on its own, without going through the diagnostic.",
    },

    automation: {
        title: "AI PROCESS AUTOMATION",
        tag: "Let the system handle the repetitive work",
        subtitle: "Invoices someone types in by hand, orders arriving over WhatsApp that need to be entered into the system, suppliers you have to chase to find out when they'll deliver. We automate those tasks without replacing the system you already use: what's clear gets processed automatically, and anything uncertain goes to a person.",
        items: ["Invoice and receipt entry", "WhatsApp and email orders", "Supplier follow-up", "Automatic alerts and reports"],
        producto: "automatizacion",
    },

    customapp: {
        title: "CUSTOM APPLICATIONS",
        tag: "Your operation, in one place",
        subtitle: "Does your team rely on Excel spreadsheets only one person understands? Do you manage appointments, orders or clients over WhatsApp? We build the tool your business needs —an internal system, a dashboard, a client portal—, easy to use and designed around how you actually work.",
        items: ["Internal management systems", "Dashboards", "Client portals", "Bookings and appointments"],
        producto: "aplicacion",
    },

    websites: {
        title: "WEBSITES",
        tag: "Your digital presence, working 24/7",
        subtitle: "Your first point of contact with new clients. We design websites that build trust and turn visitors into inquiries. And if you sell online, we set up your complete store —design, configuration, payments and launch—, with no technical hassle on your end.",
        items: ["Custom design", "Fast and optimized", "Redesigns", "Online stores", "Shopify, Tiendanube and WooCommerce", "Payment gateways"],
        producto: "sitio",
    },

    ctaButton: "Tell us about your project",
    etapa1CTA: "Request the diagnostic",
};
