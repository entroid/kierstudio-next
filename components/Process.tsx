"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "./LanguageContext";

export function Process() {
  const { t, translations } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress: titleProgress } = useScroll({
    target: titleRef,
    offset: ["start 100%", "start 70%"],
  });
  const titleOpacity = useTransform(titleProgress, [0, 1], [0, 1]);
  const steps = [
    {
      number: translations.process.steps.discovery.number,
      title: translations.process.steps.discovery.title,
      description: translations.process.steps.discovery.description,
      services: translations.process.steps.discovery.services,
    },
    {
      number: translations.process.steps.design.number,
      title: translations.process.steps.design.title,
      description: translations.process.steps.design.description,
      services: translations.process.steps.design.services,
    },
    {
      number: translations.process.steps.develop.number,
      title: translations.process.steps.develop.title,
      description: translations.process.steps.develop.description,
      services: translations.process.steps.develop.services,
    },
    {
      number: translations.process.steps.deliver.number,
      title: translations.process.steps.deliver.title,
      description: translations.process.steps.deliver.description,
      services: translations.process.steps.deliver.services,
    },
  ];

  return (
    <section
      id="proceso"
      className="py-16 md:py-32 bg-[#F5F5F5] dark:bg-[#0f0f0f] transition-colors duration-500"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-20"
        >
          <span
            className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
            style={{ fontWeight: 600 }}
          >
            {t('process.tag')}
          </span>

          <motion.h2
            ref={titleRef}
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Archivo',sans-serif] text-[3.5rem] md:text-[7.5rem]  leading-[0.85] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8 uppercase"
            style={{ fontWeight: 900, opacity: titleOpacity }}
          >
            {t('process.title')}
          </motion.h2>

          <p
            className="font-['Archivo',sans-serif] text-[1.125rem] md:text-[1.5rem] text-[#28292D] dark:text-white/90 max-w-[1100px] leading-[1.4]"
            style={{ fontWeight: 600 }}
          >
            {t('process.subtitle')}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group border-b border-[#28292D]/10 dark:border-white/10 last:border-b-0"
            >
              <div className="grid lg:grid-cols-12 gap-8 py-8 md:py-16 lg:py-20 items-start">
                {/* Number */}
                <div className="lg:col-span-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="font-['Archivo',sans-serif] text-[3rem] md:text-[7.5rem] leading-[0.9] tracking-[-0.02em] text-[#D52169] group-hover:text-[#28292D] dark:group-hover:text-white transition-colors duration-300"
                    style={{ fontWeight: 900 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="lg:col-span-6">
                  <motion.h3
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="font-['Archivo',sans-serif] text-[1.875rem] md:text-[3.5rem] lg:text-[4rem] leading-[0.9] tracking-[-0.02em] text-[#28292D] dark:text-white mb-6"
                    style={{ fontWeight: 900 }}
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] text-[#28292D]/70 dark:text-white/70 leading-[1.7] max-w-[600px]"
                    style={{ fontWeight: 400 }}
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Services Tags */}
                <div className="lg:col-span-4 flex flex-wrap gap-3 items-start">
                  {step.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + serviceIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-white dark:bg-[#1a1a1a] border border-[#28292D]/10 dark:border-white/10 px-4 py-2 font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.1em] uppercase text-[#28292D] dark:text-white hover:border-[#D52169] hover:text-[#D52169] transition-all duration-300"
                      style={{ fontWeight: 600 }}
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D52169] text-white px-12 py-5 font-['Archivo',sans-serif] text-[0.8125rem] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#28292D] cursor-pointer"
            style={{ fontWeight: 700 }}
          >
            {t('process.ctaButton')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
