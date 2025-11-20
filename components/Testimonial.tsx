"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "Excellent experience working with Kier Studio. They perfectly captured my vision and the style I was looking for. Impeccable. 100% recommended!",
      author: "Alejandro C.",
      role: "OWNER",
      company: "Barrivell Gafas",
    },
    /*{
      id: 2,
      quote:
        "El equipo de Kier Studio no solo creó un sitio web hermoso, sino que también entendió profundamente nuestro negocio y audiencia. Su experiencia en UX/UI se refleja en cada pixel del diseño final.",
      author: "Carlos Martínez",
      role: "Founder",
      company: "Kanba SaaS",
    },
    {
      id: 3,
      quote:
        "La profesionalidad y creatividad de Kier Studio es incomparable. Transformaron nuestra visión en una realidad digital impresionante que ha generado un impacto significativo en nuestro crecimiento.",
      author: "Ana Rodríguez",
      role: "Marketing Director",
      company: "Goldline",
    },*/
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-[#28292D] dark:bg-black relative overflow-hidden transition-colors duration-500">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-[400px] h-[400px] border border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] border border-white rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span
            className="font-['Archivo',sans-serif] text-[11px] tracking-[0.3em] uppercase text-white/50 mb-6 block italic"
            style={{ fontWeight: 400 }}
          >
            (Client Stories)
          </span>

          <h2
            className="font-['Archivo',sans-serif] text-[80px] md:text-[120px] lg:text-[180px] leading-[0.85] tracking-[-0.04em] text-white mb-8"
            style={{ fontWeight: 900 }}
          >
            TESTIMONIALS
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="max-w-[1100px]"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-8"
              >
                <Quote className="text-[#D52169]" size={80} />
              </motion.div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-['Archivo',sans-serif] text-[28px] md:text-[42px] lg:text-[48px] leading-[1.3] text-white mb-12"
                style={{ fontWeight: 600 }}
              >
                "{testimonials[currentIndex].quote}"
              </motion.blockquote>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-6"
              >
                <div className="w-16 h-16 bg-[#D52169] rounded-full flex items-center justify-center">
                  <span
                    className="font-['Archivo',sans-serif] text-[24px] text-white"
                    style={{ fontWeight: 900 }}
                  >
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                </div>

                <div>
                  <p
                    className="font-['Archivo',sans-serif] text-[20px] text-white mb-1"
                    style={{ fontWeight: 700 }}
                  >
                    {testimonials[currentIndex].author}
                  </p>
                  <p
                    className="font-['Archivo',sans-serif] text-[14px] text-white/60"
                    style={{ fontWeight: 400 }}
                  >
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-16">
            {testimonials.length > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="w-14 h-14 border-2 border-white/20 hover:border-[#D52169] hover:bg-[#D52169] rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <span className="text-white text-[24px] group-hover:-translate-x-1 transition-transform">
                    ←
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="w-14 h-14 border-2 border-white/20 hover:border-[#D52169] hover:bg-[#D52169] rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <span className="text-white text-[24px] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </motion.button>
              </>
            )}

            {/* Dots */}
            <div className="flex gap-3 ml-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex ? "bg-[#D52169] w-8" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 pt-20 border-t border-white/10"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "+32%", label: "Conversion Rates" },
            { number: "10+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div
                className="font-['Archivo',sans-serif] text-[48px] md:text-[64px] text-[#D52169] mb-2"
                style={{ fontWeight: 900 }}
              >
                {stat.number}
              </div>
              <div
                className="font-['Archivo',sans-serif] text-[12px] tracking-[0.1em] uppercase text-white/60"
                style={{ fontWeight: 600 }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
