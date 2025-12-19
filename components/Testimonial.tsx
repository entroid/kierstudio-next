"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Quote } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  website?: string;
  image?: string;
}

export function Testimonial() {
  const { t, translations } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = translations.testimonials.items;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-32 bg-[#28292D] dark:bg-black relative overflow-hidden transition-colors duration-500">
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
            className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
            style={{ fontWeight: 400 }}
          >
            {t('testimonials.tag')}
          </span>

          <h2
            className="font-['Archivo',sans-serif] text-[2.625rem] md:text-[6.25rem] lg:text-[7.5rem] leading-[0.85] tracking-[-0.04em] text-white mb-8"
            style={{ fontWeight: 900 }}
          >
            {t('testimonials.title')}
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
                <Quote className="text-[#D52169]" size={50} />
              </motion.div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-['Archivo',sans-serif] text-[1.375rem] md:text-[2.25rem] lg:text-[2.5rem] leading-[1.3] text-white mb-12"
                style={{ fontWeight: 500 }}
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
                    className="font-['Archivo',sans-serif] text-[1.5rem] text-white"
                    style={{ fontWeight: 900 }}
                  >
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                </div>

                <div>
                  <p
                    className="font-['Archivo',sans-serif] text-[1.25rem] text-white mb-1"
                    style={{ fontWeight: 700 }}
                  >
                    {testimonials[currentIndex].author}
                  </p>
                  <p
                    className="font-['Archivo',sans-serif] text-[0.875rem] text-white/60 mb-1"
                    style={{ fontWeight: 400 }}
                  >
                    {testimonials[currentIndex].role} {t('testimonials.atLabel')} {testimonials[currentIndex].company}
                  </p>
                  {testimonials[currentIndex].website && (
                    <motion.a
                      href={testimonials[currentIndex].website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="font-['Archivo',sans-serif] text-[0.875rem] text-[#D52169] hover:text-[#E54079] transition-colors duration-300"
                      style={{ fontWeight: 600 }}
                    >
                      Visit Website →
                    </motion.a>
                  )}
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
                  aria-label={t('testimonials.prevTestimonial')}
                >
                  <span className="text-white text-[1.5rem] group-hover:-translate-x-1 transition-transform">
                    ←
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="w-14 h-14 border-2 border-white/20 hover:border-[#D52169] hover:bg-[#D52169] rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer"
                  aria-label={t('testimonials.nextTestimonial')}
                >
                  <span className="text-white text-[1.5rem] group-hover:translate-x-1 transition-transform">
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? "bg-[#D52169] w-8" : "bg-white/20 hover:bg-white/40"
                    }`}
                  aria-label={`${t('testimonials.goToTestimonial')} ${index + 1}`}
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
            { number: "50+", label: t('testimonials.stats.projectsCompleted') },
            { number: "+32%", label: t('testimonials.stats.conversionRates') },
            { number: "10+", label: t('testimonials.stats.yearsExperience') },
            { number: "100%", label: t('testimonials.stats.clientSatisfaction') },
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
                className="font-['Archivo',sans-serif] text-[3rem] md:text-[4rem] text-[#D52169] mb-2"
                style={{ fontWeight: 900 }}
              >
                {stat.number}
              </div>
              <div
                className="font-['Archivo',sans-serif] text-[0.75rem] tracking-[0.1em] uppercase text-white/60"
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
