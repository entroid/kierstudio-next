"use client";

import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LogoCompact } from "./Logo";
import { useLanguage } from "./LanguageContext";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.start'), href: "#inicio" },
    { label: t('nav.services'), href: "#servicios" },
    { label: t('nav.work'), href: "#proyectos" },
    { label: t('nav.process'), href: "#proceso" },
    { label: t('nav.contact'), href: "#contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm border-b border-black/10"
    >
      <nav
        className="max-w-[1440px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        <motion.a
          href="#inicio"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="flex items-center cursor-pointer"
        >
          <LogoCompact className="h-12 w-auto" />
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <a
                href={item.href}
                className="font-['Archivo',sans-serif] text-[14px] tracking-[0.05em] uppercase text-[#28292D] hover:text-[#D52169] transition-colors duration-300 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D52169] group-hover:w-full transition-all duration-300" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-[#F5F5F5] rounded transition-colors cursor-pointer"
          aria-label={mobileMenuOpen ? t('nav.menuClose') : t('nav.menuOpen')}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-24 left-0 right-0 bg-white border-b border-black/10 md:hidden"
          >
            <ul className="flex flex-col p-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 font-['Archivo',sans-serif] text-[14px] tracking-[0.05em] uppercase text-[#28292D] hover:text-[#D52169] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
