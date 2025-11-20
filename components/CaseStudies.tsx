"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CaseStudies() {
  const cases = [
    {
      title: "Rediseño de dashboard - SaaS",
      results: ["+40% en retención de usuarios.", "+40% en tasa de conversion."],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
    {
      title: "Rediseño de dashboard - SaaS",
      results: ["+40% en retención de usuarios.", "+40% en tasa de conversion."],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
    {
      title: "Rediseño de dashboard - SaaS",
      results: ["+40% en retención de usuarios.", "+40% en tasa de conversion."],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    },
    {
      title: "Rediseño de dashboard - SaaS",
      results: ["+40% en retención de usuarios.", "+40% en tasa de conversion."],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&q=80",
    },
    {
      title: "Rediseño de dashboard - SaaS",
      results: ["+40% en retención de usuarios.", "+40% en tasa de conversion."],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    },
    {
      title: "Rediseño de dashboard - SaaS",
      results: ["+40% en retención de usuarios.", "+40% en tasa de conversion."],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
    },
    {
      title: "Rediseño de dashboard - SaaS",
      results: ["+40% en retención de usuarios.", "+40% en tasa de conversion."],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
    },
  ];

  return (
    <section id="uxui" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Anton',sans-serif] text-[64px] text-[#000000] mb-16 text-center tracking-tight"
        >
          Casos de éxito
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-lg group"
            >
              <motion.div
                className="h-[164px] bg-[#8c8c8c] overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <ImageWithFallback
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="font-['Inter',sans-serif] mb-4 text-[#000000]">{caseStudy.title}</h3>
                <ul className="space-y-2 font-['Inter',sans-serif] text-[14px] text-[#000000]">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#000000] mt-1">→</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
