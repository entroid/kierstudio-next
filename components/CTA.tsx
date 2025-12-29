// Hybrid SSR Component for CTA section
import { en } from "@/translations";
import { CTAAnimated } from "./cta/CTAAnimated";
import { CTAContent } from "./cta/CTAContent";

const defaultCTA = en.cta;

export function CTA() {
  return (
    <>
      <noscript>
        <CTAContent
          tag={defaultCTA.tag}
          title1={defaultCTA.title1}
          title2={defaultCTA.title2}
          subtitle={defaultCTA.subtitle}
          emailLabel={defaultCTA.emailLabel}
          whatsappLabel={defaultCTA.whatsappLabel}
          instagramLabel={defaultCTA.instagramLabel}
        />
      </noscript>
      <CTAAnimated />
    </>
  );
}
