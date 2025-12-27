"use client";

import { motion } from "motion/react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";

export function Hero() {
  const { accessibility } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center py-16 md:pb-0 pt-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
    >
      <div className=" mx-auto w-full">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-6rem)]">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative bg-white dark:bg-black overflow-hidden min-h-[200px] sm:min-h-[240px] md:min-h-[280px]"
          >
            <div className="absolute inset-0">
              <video
                className="w-full h-full object-cover object-right opacity-80"
                poster="/hero-img.jpg"
                src="/kierstudio-hero.webm"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center justify-center px-6 lg:px-20 bg-white dark:bg-[#0a0a0a]"
          >
            <div className="max-w-[700px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4"
              >
                <span
                  className="font-['Archivo',sans-serif] text-[0.75rem] line-height-[0.75rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 block italic"
                  style={{ fontWeight: 600 }}
                >
                  {t('hero.location')}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-4"
              >
                <h1
                  className="font-['Archivo',sans-serif] text-[14vw] line-height-[14vw] sm:text-[12vw] sm:line-height-[12vw] md:text-[5.875rem] md:line-height-[5.875rem] xl:text-[6.875rem] xl:line-height-[6.875rem] leading-[0.85] tracking-[-0.03em] text-[#28292D] dark:text-white"
                  style={{ fontWeight: 900 }}
                >
                  {t('hero.title')}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-8"
              >
                <h2
                  className="font-['Archivo',sans-serif] text-[1.625rem] md:text-[1.5rem] leading-[1.2] text-[#28292D] dark:text-white/90 mb-4"
                  style={{ fontWeight: 600 }}
                >
                  {t('hero.subtitle')}
                </h2>

                <p
                  className="font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] text-[#28292D]/70 dark:text-white/60 leading-[1.7] "
                  style={{ fontWeight: 400 }}
                >
                  {t('hero.description')}
                  <b>{t('hero.descriptionBoldText')}</b>
                </p>

                {/* <p
                  className="font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] text-[#28292D]/70 dark:text-white/60 leading-[1.7] max-w-[550px]"
                  style={{ fontWeight: 400 }}
                >
                  {t('hero.description')}
                  <br />
                  {t('hero.descriptionBold', { bold: "" }).split('{bold}')[0]}
                  <b>{t('hero.descriptionBoldText')}</b>
                  {t('hero.descriptionBold', { bold: "" }).split('{bold}')[1]}
                </p> */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#D52169] text-white px-10 py-5 font-['Archivo',sans-serif] text-[0.8125rem] leading-[0.8125rem] tracking-[0.1em] uppercase border-2 border-transparent transition-all duration-300 hover:bg-[#28292D] hover:border-[#28292D] cursor-pointer"
                  style={{ fontWeight: 700 }}
                >
                  {t('hero.ctaTalk')}
                </motion.a>
                <motion.a
                  href="#proyectos"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 font-['Archivo',sans-serif] text-[0.8125rem] leading-[0.8125rem] tracking-[0.1em] uppercase border-2 text-[#28292D] border-[#28292D] hover:bg-[#28292D] hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#28292D] transition-all duration-300 cursor-pointer"
                  style={{ fontWeight: 700 }}
                >
                  {t('hero.ctaWork')}
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
