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
      <div className="max-w-[1800px] mx-auto w-full">
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
                className="mb-8"
              >
                <span
                  className="font-['Archivo',sans-serif] text-[11px] tracking-[0.3em] uppercase text-[#28292D]/50 dark:text-white/50 italic"
                  style={{ fontWeight: 400 }}
                >
                  {t('hero.location')}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-10"
              >
                <h1
                  className="font-['Archivo',sans-serif] text-[80px] md:text-[120px] lg:text-[140px] leading-[0.85] tracking-[-0.03em] text-[#28292D] dark:text-white mb-6"
                  style={{ fontWeight: 900 }}
                >
                  ©KIER
                  <br />
                  STUDIO
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <h2
                  className="font-['Archivo',sans-serif] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] text-[#28292D] dark:text-white/90 mb-6"
                  style={{ fontWeight: 600 }}
                >
                  {t('hero.subtitle')}
                </h2>
                <p
                  className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7] max-w-[550px]"
                  style={{ fontWeight: 400 }}
                >
                  {t('hero.description')}
                  <br />
                  {t('hero.descriptionBold', { bold: "" }).split('{bold}')[0]}
                  <b>{t('hero.descriptionBoldText')}</b>
                  {t('hero.descriptionBold', { bold: "" }).split('{bold}')[1]}
                </p>
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
                  className="bg-[#D52169] text-white px-10 py-5 font-['Archivo',sans-serif] text-[13px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#28292D] cursor-pointer"
                  style={{ fontWeight: 700 }}
                >
                  {t('hero.ctaTalk')}
                </motion.a>
                <motion.a
                  href="#proyectos"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 font-['Archivo',sans-serif] text-[13px] tracking-[0.1em] uppercase border-2 text-[#28292D] border-[#28292D] hover:bg-[#28292D] hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#28292D] transition-colors duration-300 cursor-pointer"
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
