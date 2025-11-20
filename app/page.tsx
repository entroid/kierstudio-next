import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Services } from "../components/Services";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Testimonial } from "@/components/Testimonial";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <Projects />
      <Process />
      <Testimonial />
      <CTA />
    </>
  );
}
