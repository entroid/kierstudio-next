import { Project } from "@/types/project";

export const projectsData: Project[] = [
    {
        id: 1,
        slug: "carga-automatica-de-facturas",
        title: "Automated invoice entry",
        category: "AI Automation · Oil & Gas",
        description:
            "We automated the intake, reading and validation of supplier invoices for the accounts payable team of an Oil & Gas company. Using AI and document reading, the system extracts each invoice's data, checks it against the management system and only sends the exceptions to a person.",
        summary:
            "An Oil & Gas company received thousands of supplier invoices a month, as PDFs and photos, and a person entered and checked each one. Now the system reads them, compares them against what's already on record, and only hands a person the ones that don't add up.",
        problema:
            "The accounts payable team processed thousands of documents a month, from a broad supplier base and an operation spread across several sites. They arrived as PDFs or images, each supplier with its own format and very uneven quality. Someone had to read every one, key the data into the management system and check that it matched. Typos and discrepancies surfaced late, everyone checked things their own way, and meeting payment deadlines depended on how many people were available.",
        solucion: [
            "We brought documents arriving by email, through shared folders and from the management system itself into a single flow.",
            "We set AI to read each document the way a person would, even when it's scanned or a photo, without needing a template per supplier.",
            "We connected it to the management system the company already used: nothing had to be replaced.",
            "We decided that anything uncertain isn't entered automatically: incomplete documents or ones with discrepancies go to a person.",
        ],
        proceso: [
            { titulo: "Receives", detalle: "Picks up documents from email, shared folders or the management system, and sorts them by document type." },
            { titulo: "Reads", detalle: "Digitizes the document, and AI identifies the key data: date, number, tax ID, amount and currency." },
            { titulo: "Checks", detalle: "Compares every field against the management system and the supplier registry, and flags duplicates and inconsistencies." },
            { titulo: "Records", detalle: "Leaves the data ready in the system, reports what was processed and keeps a history of each document. Anything that doesn't add up goes to review." },
        ],
        resultado: [
            "The team stopped typing in documents and now only reviews the exceptions.",
            "Fewer entry errors: the data reaching the system is more reliable.",
            "A new supplier or a different format doesn't require reconfiguring anything.",
            "The same team has more capacity, and payment deadlines are met more consistently.",
            "Every document has its history on record —what arrived, what was checked and what was done—, ready for an audit.",
        ],
        metrics: [
            { value: ">90%", label: "of documents read correctly" },
        ],
        metricsNota: "Estimate based on client feedback.",
        services: ["AI Automation", "Document Reading", "Management System Integration"],
        image: "/projects/automatizacion-facturas/portada.png",
        images: [],
        url: "",
    },
    {
        id: 2,
        slug: "seguimiento-de-ordenes-de-compra",
        title: "Purchase order follow-up",
        category: "Procurement automation · Oil & Gas",
        description:
            "We automated purchase order tracking and supplier management for the procurement team of an industrial Oil & Gas company: detecting overdue or soon-to-be-due orders, contacting suppliers, updating dates and reporting deviations.",
        summary:
            "The procurement team at an Oil & Gas company spent hours chasing suppliers to find out whether they'd deliver on time. Now the system spots which orders are at risk, asks the supplier and updates the status on its own.",
        problema:
            "With many open purchase orders, many suppliers and critical delivery dates, knowing what would arrive late was manual work: checking the system, building lists of pending orders, writing to each supplier, waiting for the answer and entering it again. It ate up the procurement team's hours, the information was scattered, and delays were discovered once they were already a problem. In an operation with sites and warehouses, what matters is having the material when it's needed.",
        solucion: [
            "We took a repetitive, well-defined process —check, ask, update— and turned it into a flow that runs on its own.",
            "We connected it to the existing management system and other internal systems, without replacing them.",
            "We gave suppliers a simple way to respond: a form or an email listing their pending orders.",
            "We left the decisions with the team: breaches and critical cases are escalated to a person.",
        ],
        proceso: [
            { titulo: "Detects", detalle: "Checks the management system and flags overdue or soon-to-be-due orders, taking already agreed new dates into account." },
            { titulo: "Organizes", detalle: "Adds recent receipts and new orders, and groups everything by supplier, material, location and required date." },
            { titulo: "Asks", detalle: "Sends each supplier a form or an email asking them to confirm dates and quantities." },
            { titulo: "Updates", detalle: "Reads and classifies the replies, and updates each order's status, new date and comments." },
            { titulo: "Reports", detalle: "Builds a report of progress, pending items and critical cases, and escalates breaches for a person to handle." },
        ],
        resultado: [
            "The procurement team stopped chasing suppliers and now decides what to do about delays.",
            "Critical orders are spotted before they're due, not once the material is already missing.",
            "The status of every order is visible in real time.",
            "On-time deliveries improved.",
            "Every supplier's reply is recorded per order, for follow-up and audit.",
        ],
        metrics: [
            { value: "+200 h", label: "of manual work avoided per month: more than one full-time person" },
        ],
        metricsNota: "Estimate based on client feedback.",
        services: ["Process Automation", "Management System Integration", "Automated Reports"],
        image: "/projects/seguimiento-oc/portada.png",
        images: [],
        url: "",
    },
    {
        id: 3,
        slug: "hard-rock-marketing-planner",
        title: "Hard Rock Marketing Planner",
        category: "Offer planning system",
        year: "2026",
        description:
            "We designed and led the UX/UI of this internal web application tool that centralized and automated marketing campaign planning across multiple casino properties, for Hard Rock International. We audited and redesigned complex, Excel-based workflows into a scalable system with structured flows and automations, significantly reducing campaign creation time and operational errors while increasing overall campaign output. [Done through OZ Digital Agency]",
        summary:
            "A marketing team was building its campaigns in Excel sheets only two people knew how to maintain. We turned it into a system where anyone on the team can create a campaign without breaking anything.",
        problema:
            "Campaign planning across several casino properties lived in spreadsheets and SQL scripts held together by a handful of Excel experts. Every campaign was manual, slow, and a single typo spread unnoticed until it was already published. The knowledge wasn't in the company: it was in two people's heads.",
        solucion: [
            "We audited the actual process —not the documented one— and mapped it end to end before designing a single screen.",
            "We reorganized the scattered logic into a clear hierarchy: Plan → Jobs → Campaigns → Offers. What used to be a separate spreadsheet per property became a reusable structure.",
            "We automated importing, duplicating and publishing, which is where most of the manual time went.",
            "We built a design system shared between the design file and the code, so the tool can grow without being rebuilt.",
        ],
        resultado: [
            "Creating a campaign stopped being a specialist's job and became something the marketing team does.",
            "Operational errors that used to surface after publishing are now caught in the form.",
            "The process is documented inside the product: if someone leaves, the operation keeps running.",
        ],
        metrics: [
            { value: "70%", label: "less time to create a campaign" },
            { value: "65%", label: "more offers launched in the first month" },
            { value: "82%", label: "fewer reported errors" },
        ],
        metricsNota:
            "Impact estimated by the client, comparing the previous manual process against the new flow.",
        services: ["Product Design", "Design System", "Workflow Audit"],
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
        category: "Mobile App for Livestock Marketplace",
        year: "2026",
        description:
            "Complete redesign of Muu, a livestock marketplace mobile app, by updating old look & feel and streamlining complex batch publishing while adding new management features. By simplifying these critical workflows and introducing a high-contrast, professional visual identity optimized for outdoor farm environments, we transformed a frustrating legacy experience into a modern, intuitive mobile platform.",
        summary:
            "A livestock trading app used out in the field, in direct sunlight, designed as if it were used at a desk. We redesigned it for the place where it actually gets opened.",
        problema:
            "Publishing a lot was slow and ambiguous: users couldn't tell what step they were on or what was missing. On top of that, the app is used outdoors, where a low-contrast interface simply can't be read. The result was people abandoning halfway through, and a platform that didn't feel professional.",
        solucion: [
            "We worked from the user feedback the business already had instead of starting research from scratch: this was a scoped redesign, not a new app.",
            "We simplified the two flows that matter —publishing a lot and managing offers— cutting steps and making the current stage visible.",
            "We defined a high-contrast visual identity, built to be read outdoors.",
            "We added a five-screen onboarding so a new user understands the platform without anyone explaining it.",
        ],
        resultado: [
            "Users decide faster: the information they need to compare lots is where they look for it.",
            "The platform reads as trustworthy, which in a trade between strangers is part of the product.",
            "All existing functionality was preserved: nobody had to be retrained.",
        ],
        services: ["Mobile App Design", "UX/UI"],
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
        category: "Fleet management system",
        year: "2023",
        description:
            "The MIRAI Fleet SaaS platform and mobile app needed a new design to enhance user experience and streamline operations. The new design features a modern, professional aesthetic with a focus on usability and efficiency. We also implemented a custom catalog section powered by Strapi CMS.",
        summary:
            "A fleet management platform with a web app and a mobile app that had grown without design. We brought order to it and gave the team a way to publish content without going through developers.",
        problema:
            "The platform worked, but every screen solved its problem its own way: users had to relearn the logic in each section. On top of that, any catalog content change went through the technical team, turning a minutes-long task into a queued request.",
        solucion: [
            "We unified the criteria across the web platform and the mobile app so they read as one product, not two.",
            "We redesigned the operational screens, prioritizing the frequent task over the exception.",
            "We built the catalog on Strapi CMS so the team can publish and edit without touching code.",
        ],
        resultado: [
            "The team manages its own content, with no dependency on the technical team for each change.",
            "The catalog became indexable content, which previously didn't exist as such.",
            "Day-to-day operation takes fewer steps and leaves less room for doubt.",
        ],
        services: ["SaaS Platform", "Mobile App", "UX/UI", "Product Design"],
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
        category: "Fashion online store",
        year: "2024",
        description:
            "We redesigned the Barrivell ecommerce website to enhance user experience and streamline operations. The new design features a modern, professional aesthetic with a focus on usability, conversion and efficiency. We also implemented a custom catalog section powered by Strapi CMS.",
        summary:
            "An online fashion store losing people along the way to checkout. We redesigned the whole path and put the catalog in the team's hands.",
        problema:
            "The site showed the products but didn't support the decision: hierarchy was missing, the path to the cart had friction, and loading products depended on technical help. For a store, every extra step is a lost sale.",
        solucion: [
            "We redesigned the full purchase path, from listing to checkout, removing the steps that added nothing.",
            "We reorganized the product page around what a person needs to know in order to decide.",
            "We implemented the catalog with Strapi CMS so the team can load and edit products on their own.",
        ],
        resultado: [
            "The team runs the store without technical intermediaries.",
            "The catalog is structured to be found in search, not just to look good.",
            "The brand now presents itself at the level of its products.",
        ],
        services: ["Ecommerce Setup & Launch", "Website Design", "Strategy"],
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
        category: "Themed hostel landing page",
        year: "2025",
        description:
            "We redesigned the Holy Beer Hotel landing page to elevate its digital presence and drive higher conversions. The new design blends refined aesthetics, intuitive UI, and a strategic content structure that guides visitors through the brand story toward booking and engagement.",
        summary:
            "A themed hotel with a strong identity and a site that didn't tell it. We rewrote the page as a journey that ends at the booking.",
        problema:
            "The page showed the hotel but never built the argument: visitors couldn't quite tell what made it different, and finding the way to book was left up to them. A themed hotel that doesn't convey its theme ends up competing on price alone.",
        solucion: [
            "We structured the content as a journey: what the place is, why it's different, and only then, booking.",
            "We designed an interface that carries the brand's character without getting in the way of reading.",
            "We optimized the images, which in hospitality are both the main argument and the biggest load cost.",
        ],
        resultado: [
            "The page tells the brand's story instead of just listing services.",
            "The path to booking is explicit at every stage of the journey.",
        ],
        services: ["Website Design", "UX/UI", "Strategy"],
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
        category: "Product presentation landing page",
        year: "2024",
        description:
            "We designed and developed the Teamie. landing page to support the launch of this new team collaboration startup. The site features a modern, startup-oriented design, with a strong focus on clarity, trust, and conversion. Additionally, we implemented a custom blog section powered by Strapi CMS.",
        summary:
            "A startup going to market with nothing to show yet. We built the identity and the site it introduced itself with on day one.",
        problema:
            "A new product with no clients and no case studies has exactly one problem: being believed. Teamie. needed to explain what it does in seconds and look like a serious company before having the track record to back it up.",
        solucion: [
            "We defined the visual identity from scratch, aiming for it to read as an established product rather than an experiment.",
            "We wrote and structured the page around a single clear idea of the product, without drifting into a feature list.",
            "We set up a blog with Strapi CMS so the team can publish and start building search presence from launch.",
        ],
        resultado: [
            "They went to market with a coherent presence instead of a placeholder site.",
            "The team can publish content without depending on us.",
        ],
        services: ["Visual Identity", "Website", "Blog CMS"],
        image: "/projects/teamie/01-mock.jpg",
        images: [
            "/projects/teamie/01.png",
            "/projects/teamie/02.png",
            "/projects/teamie/05.png",
        ],
        url: "https://teamie-show.webflow.io/",
    },
];
