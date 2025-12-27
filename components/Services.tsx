"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef } from "react";
import { useLanguage } from "./LanguageContext";

export function Services() {
  const { t, translations } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Drive title opacity based on its own position: from 80% to 50% of viewport -> 0 -> 1
  const { scrollYProgress: titleProgress } = useScroll({
    target: titleRef,
    // Reach 100% opacity earlier (when the title's top hits ~70% of viewport)
    offset: ["start 100%", "start 70%"],
  });
  const titleOpacity = useTransform(titleProgress, [0, 1], [0, 1]);

  const services = [
    {
      title: t('services.productDesign.title'),
      subtitle: t('services.productDesign.subtitle'),
      image: "/services/product-design3.jpg",
      services: translations.services.productDesign.items,
      tag: t('services.productDesign.tag'),
      bgColor: "bg-[#F5F5F5] dark:bg-[#1a1a1a]",
    },
    {
      title: t('services.websites.title'),
      subtitle: t('services.websites.subtitle'),
      image: "/services/website2.jpg",
      services: translations.services.websites.items,
      tag: t('services.websites.tag'),
      bgColor: "bg-[#28292D] dark:bg-black",
    },
    {
      title: t('services.ecommerce.title'),
      subtitle: t('services.ecommerce.subtitle'),
      image: "/services/ecommerce.jpg",
      services: translations.services.ecommerce.items,
      tag: t('services.ecommerce.tag'),
      bgColor: "bg-[#F5F5F5] dark:bg-[#1a1a1a]",
    },
    {
      title: t('services.development.title'),
      subtitle: t('services.development.subtitle'),
      image: "/services/dev.jpg",
      services: translations.services.development.items,
      tag: t('services.development.tag'),
      bgColor: "bg-[#28292D] dark:bg-black",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="py-16 md:pt-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-500"
    >
      {/* Animated background elements */}
      <motion.div
        style={{ opacity: titleOpacity }}
        className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#D52169]/5 rounded-full blur-3xl"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div className="mb-20">
          <span
            className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
            style={{ fontWeight: 600 }}
          >
            {t('services.tag')}
          </span>

          <motion.h2
            ref={titleRef}
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Archivo',sans-serif] text-[3.5rem] md:text-[7.5rem] leading-[0.85] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8 uppercase"
            style={{ fontWeight: 900, opacity: titleOpacity }}
          >
            {t('services.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="font-['Archivo',sans-serif] text-[1.125rem] md:text-[1.5rem] text-[#28292D] dark:text-white/90 max-w-[900px] leading-[1.4]"
            style={{ fontWeight: 600 }}
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-0 min-h-[600px] mb-0"
            >
              {/* Image Side */}
              <motion.div
                className={`relative overflow-hidden min-h-[200px] sm:min-h-[240px] md:min-h-[280px] ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D52169]/30 to-transparent" />
                </div>
              </motion.div>

              {/* Content Side */}
              <div
                className={`${service.bgColor} px-3 py-12 md:p-12 lg:p-16 flex flex-col justify-center transition-colors duration-500 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <span
                    className={`font-['Archivo',sans-serif] text-[0.625rem] tracking-[0.3em] uppercase mb-8 block italic ${service.bgColor.includes("28292D") || service.bgColor.includes("black")
                      ? "text-white/50"
                      : "text-[#28292D]/50 dark:text-white/50"
                      }`}
                    style={{ fontWeight: 400 }}
                  >
                    ({service.tag})
                  </span>

                  {/* Animated Title */}
                  <h3
                    className={`font-['Archivo',sans-serif] text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[0.9] tracking-[-0.02em] mb-6 ${service.bgColor.includes("28292D") || service.bgColor.includes("black")
                      ? "text-white"
                      : "text-[#28292D] dark:text-white"
                      }`}
                    style={{ fontWeight: 900 }}
                  >
                    {service.title.split(" ").map((word, wordIndex) => (
                      <div key={wordIndex}>
                        <motion.div
                          initial={{ y: 100 }}
                          whileInView={{ y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + wordIndex * 0.1, duration: 0.6 }}
                        >
                          {word}
                        </motion.div>
                      </div>
                    ))}
                  </h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className={`font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] leading-[1.7] mb-10 ${service.bgColor.includes("28292D") || service.bgColor.includes("black")
                      ? "text-white/80"
                      : "text-[#28292D]/70 dark:text-white/70"
                      }`}
                    style={{ fontWeight: 400 }}
                  >
                    {service.subtitle}
                  </motion.p>

                  {/* Services List */}
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {service.services.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + itemIndex * 0.1 }}
                        className={`font-['Archivo',sans-serif] text-[0.8125rem] tracking-[0.05em] flex items-center gap-2 ${service.bgColor.includes("28292D") || service.bgColor.includes("black")
                          ? "text-white/60"
                          : "text-[#28292D]/60 dark:text-white/60"
                          }`}
                        style={{ fontWeight: 500 }}
                      >
                        <span className="text-[#D52169]">▸</span>
                        {item}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  {false && (
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`font-['Archivo',sans-serif] text-[0.75rem] tracking-[0.1em] uppercase px-8 py-4 border-2 transition-colors duration-300 ${service.bgColor.includes("28292D") || service.bgColor.includes("black")
                        ? "border-white text-white hover:bg-white hover:text-[#28292D]"
                        : "border-[#28292D] dark:border-white text-[#28292D] dark:text-white hover:bg-[#28292D] dark:hover:bg-white hover:text-white dark:hover:text-[#28292D]"
                        }`}
                      style={{ fontWeight: 700 }}
                    >
                      Learn More →
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D52169] text-white px-12 py-5 font-['Archivo',sans-serif] text-[0.8125rem] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#28292D] cursor-pointer"
            style={{ fontWeight: 700 }}
          >
            {t('services.ctaButton')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
