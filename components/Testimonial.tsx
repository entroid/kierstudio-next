// Hybrid SSR Component for Testimonial section
import { en } from "@/translations";
import { TestimonialAnimated } from "./testimonial/TestimonialAnimated";
import { TestimonialContent } from "./testimonial/TestimonialContent";

const defaultTestimonials = en.testimonials;

export function Testimonial() {
  const statsData = [
    { number: "50+", label: defaultTestimonials.stats.projectsCompleted },
    { number: "+32%", label: defaultTestimonials.stats.conversionRates },
    { number: "10+", label: defaultTestimonials.stats.yearsExperience },
    { number: "100%", label: defaultTestimonials.stats.clientSatisfaction },
  ];

  return (
    <>
      <noscript>
        <TestimonialContent
          tag={defaultTestimonials.tag}
          title={defaultTestimonials.title}
          testimonials={defaultTestimonials.items}
          stats={statsData}
        />
      </noscript>
      <TestimonialAnimated />
    </>
  );
}
