// Hybrid SSR Component for Partners section
import { en } from "@/translations";
import { PartnersAnimated } from "./partners/PartnersAnimated";
import { PartnersContent } from "./partners/PartnersContent";

const defaultPartners = en.partners;

// Static partner data for SSR
const partnersData = [
  {
    src: "/partners/agrosapiens-logo.png",
    srcDark: "/partners/agrosapiens-logo-dark.png",
    tagline: "Advertising",
    href: "https://www.agrosapiens.com.ar",
  },
  {
    src: "/partners/cuencadamico-logo.png",
    srcDark: "/partners/cuencadamico-logo-dark.png",
    tagline: "Packaging Design",
    href: "https://cuencadamico.com.ar/",
  },
  {
    src: "/partners/diego-ramos.png",
    srcDark: "/partners/diego-ramos-dark.png",
    tagline: "Branding",
    href: "https://www.linkedin.com/in/diego-cristian-ramos-23405494/",
  },
  {
    src: "/partners/logo_nuv.png",
    srcDark: "/partners/logo_nuv-dark.png",
    tagline: "AI Automation",
    href: "https://nuviait.com/",
  },
  {
    src: "/partners/logo-mercurio-group-web.png",
    srcDark: "/partners/logo-mercurio-group-web-dark.png",
    tagline: "Marketing - Comunication",
    href: "https://mercurio.group/",
  },
];

export function Partners() {
  return (
    <>
      <noscript>
        <PartnersContent
          partnersTag={defaultPartners.partnersTag}
          partners={partnersData}
        />
      </noscript>
      <PartnersAnimated />
    </>
  );
}

