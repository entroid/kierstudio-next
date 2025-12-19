"use client";

import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="pt-16 md:pt-32 bg-[#F5F5F5] dark:bg-[#0f0f0f] transition-colors duration-500 "
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            className="font-['Archivo',sans-serif] text-[12px] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
            style={{ fontWeight: 600 }}
          >
            {t('about.tag')}
          </span>

          <h2
            className="font-['Archivo',sans-serif] text-[42px] md:text-[88px] lg:text-[100px] leading-[0.9] tracking-[-0.03em] text-[#28292D] dark:text-white mb-12"
            style={{ fontWeight: 900 }}
          >
            {t('about.title1')}
            <br />
            <span className="text-[#D52169]">{t('about.title2')}</span>
            <br />
            {t('about.title3')}
            <br />
            {t('about.title4')}
          </h2>

          <h3 className="pb-4"><b>{t('about.description1Tag')}</b></h3>

          <div className="grid md:grid-cols-2 gap-12 max-w-[1100px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
                <p
                className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7] mb-4"
                style={{ fontWeight: 400 }}
              >
                {t('about.description1')}    
              </p>

              <p
                className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7]"
                style={{ fontWeight: 400 }}
              >
                {t('about.description1b').split(t('about.description1Bold'))[0]}
                <b>{t('about.description1Bold')}</b>
                {t('about.description1').split(t('about.description1Bold'))[1]}                
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p
                className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7]"
                style={{ fontWeight: 400 }}
              >
                {t('about.description2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className=" md:col-start-2"
            >
              <p
                className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7]"
                style={{ fontWeight: 600 }}
              >
                {t('about.description3')}
              </p>

              <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#D52169] text-white mt-10 px-10 py-5 font-['Archivo',sans-serif] text-[13px] leading-[13px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#28292D] cursor-pointer display: inline-block" 
                  style={{ fontWeight: 700 }}
                >
                  {t('about.ctaText')}
                </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <div className="pb-16 md:pb-32 border-b border-[#28292D]/10 dark:border-white/10"></div>
      </div>
    </section>
  );
}
