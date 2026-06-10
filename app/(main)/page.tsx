import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Partners } from "@/components/partners";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Process } from "@/components/process";
import { Testimonial } from "@/components/testimonial";
import { CTA } from "@/components/cta";

export default function HomePage() {
  return (
    <main>
      {/* SECTION: HERO */}
      <Hero />

      {/* SECTION: ABOUT */}
      <About />

      {/* SECTION: SERVICES */}
      <Services />

      {/* SECTION: PARTNERS */}
      <Partners />

      {/* SECTION: PROJECTS */}
      <Projects />

      {/* SECTION: PROCESS */}
      <Process />

      {/* SECTION: TESTIMONIAL */}
      <Testimonial />

      {/* SECTION: CTA */}
      <CTA />
    </main>
  );
}
