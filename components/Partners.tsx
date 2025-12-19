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
      id="partners"
      className="py-16 md:py-32 bg-[#F5F5F5] dark:bg-[#0f0f0f] transition-colors duration-500"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
            style={{ fontWeight: 600 }}
          >
            {t('partners.partnersTag')}
          </span>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
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
                  <div className="bg-white dark:bg-[#1a1a1a] p-4 md:p-6 rounded-xl border border-[#28292D]/5 dark:border-white/5 hover:border-[#D52169]/30 dark:hover:border-[#D52169]/50 transition-all duration-500 h-[160px] flex flex-col justify-center items-center relative overflow-hidden">
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
                          className="block dark:hidden h-auto w-auto max-h-[90px]"
                          loading="lazy"
                        />
                        <img
                          src={partner.srcDark}
                          alt="Partner logo"
                          className="hidden dark:block h-auto w-auto max-h-[90px]"
                          loading="lazy"
                        />
                      </div>
                      <p
                        className="font-['Archivo',sans-serif] text-[0.625rem] tracking-[0.15em] uppercase text-[#28292D]/60 dark:text-white/65 group-hover:text-[#D52169]/100 transition-colors duration-300"
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
                  className="font-['Archivo',sans-serif] text-[0.85rem] text-[#28292D]/40 dark:text-white/40 tracking-[0.2em] uppercase"
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
