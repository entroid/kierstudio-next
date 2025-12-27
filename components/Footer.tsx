"use client";

import { motion } from "motion/react";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/kierstudio_" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/kierstudio" },
  ];

  const footerLinks = {
    [t('footer.company')]: [
      { label: t('footer.aboutUs'), href: "#about" },
      { label: t('nav.services'), href: "#servicios" },
      { label: t('footer.ourWork'), href: "#proyectos" },
      { label: t('footer.ourProcess'), href: "#proceso" },
      { label: t('footer.contactUs'), href: "#contacto" },
    ],
  } as const;

  return (
    <footer className="bg-[#28292D] dark:bg-black text-white pt-32 pb-8 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 pb-20 border-b border-white/10">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-['Archivo',sans-serif] text-[4rem] md:text-[6rem] leading-[0.85] tracking-[-0.03em] text-white mb-8"
              style={{ fontWeight: 900 }}
            >
              ©KIER
              <br />
              STUDIO
            </motion.h2>

            <p
              className="font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] text-white/70 leading-[1.7] mb-8 max-w-[500px]"
              style={{ fontWeight: 400 }}
            >
              {t('footer.description')}
              <br />
              {t('footer.location')}
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=Rosario%2C%20Argentina"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/60 hover:text-[#D52169] transition-colors cursor-pointer"
              >
                <MapPin size={18} />
                <span
                  className="font-['Archivo',sans-serif] text-[0.875rem]"
                  style={{ fontWeight: 400 }}
                >
                  {t('footer.locationText')}
                </span>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/60 hover:text-[#D52169] transition-colors cursor-pointer"
              >
                <Mail size={18} />
                <span
                  className="font-['Archivo',sans-serif] text-[0.875rem]"
                  style={{ fontWeight: 400 }}
                >
                  kierstudio.info@gmail.com.com
                </span>
              </motion.div>

              <motion.a
                href="https://wa.me/5493417211814?text=Hi%20Kier%20Studio.%20I%20am%20contacting%20through%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/60 hover:text-[#D52169] transition-colors cursor-pointer"
              >
                <Phone size={18} />
                <span
                  className="font-['Archivo',sans-serif] text-[0.875rem]"
                  style={{ fontWeight: 400 }}
                >
                  +54 9 341 7211814
                </span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <social.icon className="text-white" size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-end gap-8 lg:gap-12 md:w-auto"
          >
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <div key={categoryIndex} className="text-right lg:w-auto">
                <h3
                  className="font-['Archivo',sans-serif] text-[0.8125rem] tracking-[0.15em] uppercase text-white mb-6 lg:text-right"
                  style={{ fontWeight: 700 }}
                >
                  {category}
                </h3>
                <ul className="space-y-3 lg:text-right">
                  {links.map((link: any, linkIndex: number) => {
                    const item = typeof link === "string" ? { label: link, href: "#" } : link;
                    return (
                      <motion.li key={linkIndex} whileHover={{ x: 5 }}>
                        <a
                          href={item.href}
                          className="font-['Archivo',sans-serif] text-[0.875rem] text-white/60 hover:text-[#D52169] transition-colors cursor-pointer"
                          style={{ fontWeight: 400 }}
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Newsletter (temporarily hidden) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden py-16 border-b border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div>
              <span
                className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
                style={{ fontWeight: 400 }}
              >
                (Stay Updated)
              </span>
              <h3
                className="font-['Archivo',sans-serif] text-[2rem] md:text-[3rem] text-white leading-[1.1] mb-3"
                style={{ fontWeight: 800 }}
              >
                Subscribe to our newsletter
              </h3>
              <p
                className="font-['Archivo',sans-serif] text-[0.875rem] text-white/60"
                style={{ fontWeight: 400 }}
              >
                Get the latest updates on design trends and our work.
              </p>
            </div>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border-2 border-white/20 focus:border-[#D52169] px-6 py-4 font-['Archivo',sans-serif] text-[0.875rem] text-white placeholder:text-white/40 outline-none transition-colors"
                style={{ fontWeight: 400 }}
              />
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D52169] text-white px-8 py-4 font-['Archivo',sans-serif] text-[0.75rem] tracking-[0.1em] uppercase hover:bg-white hover:text-[#28292D] transition-all duration-300 cursor-pointer"
                style={{ fontWeight: 700 }}
              >
                Subscribe →
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="font-['Archivo',sans-serif] text-[0.75rem] text-white/40"
            style={{ fontWeight: 400 }}
          >
            {t('footer.copyright', { year: currentYear })}
          </p>

          <div className="flex gap-6">
            <motion.a
              href="/privacy"
              whileHover={{ y: -2 }}
              className="font-['Archivo',sans-serif] text-[0.75rem] text-white/40 hover:text-[#D52169] transition-colors cursor-pointer"
              style={{ fontWeight: 400 }}
            >
              {t('footer.privacyPolicy')}
            </motion.a>
            <motion.a
              href="/terms"
              whileHover={{ y: -2 }}
              className="font-['Archivo',sans-serif] text-[0.75rem] text-white/40 hover:text-[#D52169] transition-colors"
              style={{ fontWeight: 400 }}
            >
              {t('footer.termsOfService')}
            </motion.a>
            <motion.a
              href="/cookies"
              whileHover={{ y: -2 }}
              className="font-['Archivo',sans-serif] text-[0.75rem] text-white/40 hover:text-[#D52169] transition-colors"
              style={{ fontWeight: 400 }}
            >
              {t('footer.cookiePolicy')}
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
