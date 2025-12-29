// Re-export for clean imports
// Uses the animated version for full client-side experience
// but provides static content for SEO through noscript fallback in parent

export { HeroAnimated as Hero } from "./HeroAnimated";
export { HeroContent } from "./HeroContent";
export type { HeroContentProps } from "./HeroContent";
