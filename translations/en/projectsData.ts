import { Project } from "@/types/project";

export const projectsData: Project[] = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
