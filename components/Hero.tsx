// Hybrid SSR Component
// Server-side: Renders static HTML with all text content for SEO/crawlers
// Client-side: Enhances with animations via HeroAnimated
import { en } from "@/translations";
import { HeroAnimated } from "./hero/HeroAnimated";
import { HeroContent } from "./hero/HeroContent";

// Get default translations for SSR (crawler sees this)
const defaultHero = en.hero;

export function Hero() {
  return (
    <>
      {/* 
        Noscript fallback: Pure server-rendered content for:
        - JavaScript-disabled browsers
        - Crawlers that don't execute JS
        - AI agents indexing the page
      */}
      <noscript>
        <HeroContent
          location={defaultHero.location}
          title={defaultHero.title}
          subtitle={defaultHero.subtitle}
          description={defaultHero.description}
          descriptionBoldText={defaultHero.descriptionBoldText}
          ctaTalk={defaultHero.ctaTalk}
          ctaWork={defaultHero.ctaWork}
        />
      </noscript>

      {/* 
        Client-enhanced version with animations
        This replaces the noscript content when JS is available
      */}
      <HeroAnimated />
    </>
  );
}
