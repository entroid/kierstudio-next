"use client";

import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";

export function Partners() {
  const { t } = useLanguage();
  const partners = [
    {
      src: "/partners/agrosapiens-logo.png",
      srcDark: "/partners/agrosapiens-logo-dark.png",
      tagline: "Advertising",
      href: "https://www.agrosapiens.com.ar",
    },
    {
      src: "/partners/cuencadamico-logo.png",
      srcDark: "/partners/cuencadamico-logo-dark.png",
      tagline: "Packaging Design",
      href: "https://cuencadamico.com.ar/",
    },
    {
      src: "/partners/diego-ramos.png",
      srcDark: "/partners/diego-ramos-dark.png",
      tagline: "Branding",
      href: "https://www.linkedin.com/in/diego-cristian-ramos-23405494/",
    },
    {
      src: "/partners/logo_nuv.png",
      srcDark: "/partners/logo_nuv-dark.png",
      tagline: "AI Automation",
      href: "https://nuviait.com/",
    },
    {
      src: "/partners/logo-mercurio-group-web.png",
      srcDark: "/partners/logo-mercurio-group-web-dark.png",
      tagline: "Marketing - Comunication",
      href: "https://mercurio.group/",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-32 bg-[#F5F5F5] dark:bg-[#0f0f0f] transition-colors duration-500"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span
            className="font-['Archivo',sans-serif] text-[11px] tracking-[0.3em] uppercase text-[#28292D]/50 dark:text-white/50 mb-8 block italic"
            style={{ fontWeight: 400 }}
          >
            {t('partners.tag')}
          </span>

          <h2
            className="font-['Archivo',sans-serif] text-[42px] md:text-[96px] lg:text-[120px] leading-[0.9] tracking-[-0.03em] text-[#28292D] dark:text-white mb-12"
            style={{ fontWeight: 900 }}
          >
            {t('partners.title1')}
            <br />
            {t('partners.title2')}
            <br />
            {t('partners.title3')}
            <br />
            {t('partners.title4')}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-[1100px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p
                className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7]"
                style={{ fontWeight: 400 }}
              >
                {t('partners.description1').split(t('partners.description1Bold'))[0]}
                <b>{t('partners.description1Bold')}</b>
                {t('partners.description1').split(t('partners.description1Bold'))[1]}
                <br />
                {t('partners.description1Tag')}
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
                {t('partners.description2')}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-20 border-t border-[#28292D]/10 dark:border-white/10"
        >
          <span
            className="font-['Archivo',sans-serif] text-[11px] tracking-[0.3em] uppercase text-[#28292D]/50 dark:text-white/50 mb-12 block italic"
            style={{ fontWeight: 400 }}
          >
            {t('partners.partnersTag')}
          </span>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group cursor-pointer"
              >
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white dark:bg-[#1a1a1a] p-4 md:p-10 rounded-xl border border-[#28292D]/5 dark:border-white/5 hover:border-[#D52169]/30 dark:hover:border-[#D52169]/50 transition-all duration-500 h-[160px] flex flex-col justify-center items-center relative overflow-hidden">
                    {/* Animated background */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.4, opacity: 0.05 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 bg-[#D52169]"
                    />

                    {/* Logo/Name */}
                    <motion.div
                      className="relative z-10 text-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <div className="mb-2 flex items-center justify-center">
                        <img
                          src={partner.src}
                          alt="Partner logo"
                          className="block dark:hidden h-auto md:h-14 w-auto opacity-90"
                          loading="lazy"
                        />
                        <img
                          src={partner.srcDark}
                          alt="Partner logo"
                          className="hidden dark:block h-12 md:h-14 w-auto opacity-100"
                          loading="lazy"
                        />
                      </div>
                      <p
                        className="font-['Archivo',sans-serif] text-[10px] tracking-[0.15em] uppercase text-[#28292D]/40 dark:text-white/30 group-hover:text-[#D52169]/60 transition-colors duration-300"
                        style={{ fontWeight: 500 }}
                      >
                        {partner.tagline}
                      </p>
                    </motion.div>

                    {/* Hover line decoration */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "80%" }}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#D52169]"
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Infinite scroll animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 overflow-hidden"
          >
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 whitespace-nowrap"
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <span
                  key={index}
                  className="font-['Archivo',sans-serif] text-[18px] text-[#28292D]/20 dark:text-white/10 tracking-[0.2em] uppercase"
                  style={{ fontWeight: 700 }}
                >
                  {partner.tagline}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
