// Hybrid SSR Component for About section
import { en } from "@/translations";
import { AboutAnimated } from "./about/AboutAnimated";
import { AboutContent } from "./about/AboutContent";

const defaultAbout = en.about;

export function About() {
  return (
    <>
      <noscript>
        <AboutContent
          tag={defaultAbout.tag}
          title1={defaultAbout.title1}
          title2={defaultAbout.title2}
          title3={defaultAbout.title3}
          description1Tag={defaultAbout.description1Tag}
          description1={defaultAbout.description1}
          description1b={defaultAbout.description1b}
          description1Bold={defaultAbout.description1Bold}
          description2={defaultAbout.description2}
          description3={defaultAbout.description3}
          ctaText={defaultAbout.ctaText}
        />
      </noscript>
      <AboutAnimated />
    </>
  );
}
