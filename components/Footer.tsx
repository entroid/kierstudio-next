"use client";

import { motion } from "motion/react";
import { Camera, Users, MapPin, Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageContext";
import { contactoIniciado, salidaExterna } from "@/lib/analytics";
import { enlaceSeccion } from "@/lib/enlaces";

// lucide ya no trae íconos de marcas: el de LinkedIn va como SVG propio, con
// la misma firma (className, size) para usarse igual que los demás.
function LinkedinIcon({ className, size = 18 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Ver Navigation: estos enlaces también van a secciones del home.
  const pathname = usePathname();
  const enlace = (href: string) => enlaceSeccion(href, pathname);

  const socialLinks = [
    { icon: Camera, label: "Instagram", href: "https://www.instagram.com/kierstudio_" },
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/kier-studio/" },
    { icon: Users, label: "Facebook", href: "https://www.facebook.com/kierstudio" },
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
              className="titulo text-[3.5rem] md:text-[5.25rem] text-white mb-8"
            >
              ©KIER
              <br />
              STUDIO
            </motion.h2>

            <p
              className="font-archivo text-[1rem] md:text-[1.125rem] text-white/70 leading-[1.7] mb-8 max-w-[500px]"
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
                  className="font-archivo text-[0.875rem]"
                  style={{ fontWeight: 400 }}
                >
                  {t('footer.locationText')}
                </span>
              </motion.a>

              <motion.a
                href="mailto:kierstudio.info@gmail.com"
                onClick={() => { contactoIniciado("footer", "email"); salidaExterna("email", "footer"); }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/60 hover:text-[#D52169] transition-colors cursor-pointer"
              >
                <Mail size={18} />
                <span
                  className="font-archivo text-[0.875rem]"
                  style={{ fontWeight: 400 }}
                >
                  kierstudio.info@gmail.com
                </span>
              </motion.a>

              <motion.a
                href="https://wa.me/5493417211814?text=Hi%20Kier%20Studio.%20I%20am%20contacting%20through%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { contactoIniciado("footer", "whatsapp"); salidaExterna("whatsapp", "footer"); }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/60 hover:text-[#D52169] transition-colors cursor-pointer"
              >
                <Phone size={18} />
                <span
                  className="font-archivo text-[0.875rem]"
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
                  aria-label={social.label}
                  onClick={() => {
                    if (social.label === "Instagram") salidaExterna("instagram", "footer");
                    if (social.label === "LinkedIn") salidaExterna("linkedin", "footer");
                  }}
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
                  className="font-archivo text-[0.8125rem] tracking-[0.15em] uppercase text-white mb-6 lg:text-right"
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
                          href={enlace(item.href)}
                          className="font-archivo text-[0.875rem] text-white/60 hover:text-[#D52169] transition-colors cursor-pointer"
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
                className="etiqueta text-[0.6875rem] text-[#28292D]/60 dark:text-white/60 mb-8 block"
              >
                (Stay Updated)
              </span>
              <h3
                className="titulo text-[1.75rem] md:text-[2.625rem] text-white mb-3"
              >
                Subscribe to our newsletter
              </h3>
              <p
                className="font-archivo text-[0.875rem] text-white/60"
                style={{ fontWeight: 400 }}
              >
                Get the latest updates on design trends and our work.
              </p>
            </div>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border-2 border-white/20 focus:border-[#D52169] px-6 py-4 font-archivo text-[0.875rem] text-white placeholder:text-white/40 outline-none transition-colors"
                style={{ fontWeight: 400 }}
              />
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D52169] text-white px-8 py-4 font-archivo text-[0.75rem] tracking-[0.1em] uppercase hover:bg-white hover:text-[#28292D] transition-all duration-300 cursor-pointer"
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
            className="font-archivo text-[0.75rem] text-white/40"
            style={{ fontWeight: 400 }}
          >
            {t('footer.copyright', { year: currentYear })}
          </p>

          <div className="flex gap-6">
            <motion.a
              href="/privacy"
              whileHover={{ y: -2 }}
              className="font-archivo text-[0.75rem] text-white/40 hover:text-[#D52169] transition-colors cursor-pointer"
              style={{ fontWeight: 400 }}
            >
              {t('footer.privacyPolicy')}
            </motion.a>
            <motion.a
              href="/terms"
              whileHover={{ y: -2 }}
              className="font-archivo text-[0.75rem] text-white/40 hover:text-[#D52169] transition-colors"
              style={{ fontWeight: 400 }}
            >
              {t('footer.termsOfService')}
            </motion.a>
            <motion.a
              href="/cookies"
              whileHover={{ y: -2 }}
              className="font-archivo text-[0.75rem] text-white/40 hover:text-[#D52169] transition-colors"
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
