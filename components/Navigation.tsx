"use client";

import { motion } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { LogoCompact } from "./Logo";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.start'), href: "#inicio", rel: "noopener" },
    { label: t('nav.services'), href: "#servicios", rel: "noopener" },
    { label: t('nav.work'), href: "#proyectos", rel: "noopener" },
    { label: t('nav.process'), href: "#proceso", rel: "noopener" },
    {
      label: t('nav.moreDetails'),
      dropdown: [
        { label: t('nav.accounting'), href: "/accounting" },
        { label: t('nav.healthAndWellness'), href: "/saludybienestar" }
      ]
    },
    { label: t('nav.contact'), href: "#contacto", rel: "noopener" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-sm border-b border-black/10 dark:border-white/10"
    >
      <nav
        className="max-w-[1400px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between"
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
              className={item.dropdown ? "relative group" : ""}
            >
              {item.dropdown ? (
                <>
                  <span className="font-['Archivo',sans-serif] text-[0.875rem] tracking-[0.05em] uppercase text-[#28292D] dark:text-white hover:text-[#D52169] transition-colors duration-300 relative cursor-pointer flex items-center gap-1 group">
                    {item.label}
                    <ChevronDown size={14} className="mt-0.5" />
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D52169] group-hover:w-full transition-all duration-300" />
                  </span>
                  <div className="absolute left-0 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <ul className="bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-md shadow-lg overflow-hidden w-48 flex flex-col">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.label}>
                          <a
                            href={subItem.href}
                            className="block px-4 py-3 font-['Archivo',sans-serif] text-[0.875rem] tracking-[0.05em] uppercase text-[#28292D] dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#1a1a1a] hover:text-[#D52169] transition-colors"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  rel={item.rel}
                  className="font-['Archivo',sans-serif] text-[0.875rem] tracking-[0.05em] uppercase text-[#28292D] dark:text-white hover:text-[#D52169] transition-colors duration-300 relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D52169] group-hover:w-full transition-all duration-300" />
                </a>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-[#F5F5F5] dark:hover:bg-[#1a1a1a] rounded transition-colors cursor-pointer"
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
            className="absolute top-24 left-0 right-0 bg-white dark:bg-[#0a0a0a] border-b border-black/10 dark:border-white/10 md:hidden"
          >
            <ul className="flex flex-col p-6">
              {navItems.map((item) => (
                <li key={item.label} className="py-1">
                  {item.dropdown ? (
                    <div className="flex flex-col">
                      <span className="font-['Archivo',sans-serif] text-[0.875rem] tracking-[0.05em] uppercase text-[#28292D] dark:text-white py-3 flex items-center gap-2 ">
                        {item.label}
                        <ChevronDown size={14} />
                      </span>
                      <ul className="pl-4 flex flex-col border-l border-black/10 dark:border-white/10 ml-2 mb-2">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                            <a
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-3 font-['Archivo',sans-serif] text-[0.875rem] tracking-[0.05em] uppercase text-[#28292D]/70 dark:text-white/70 hover:text-[#D52169] transition-colors cursor-pointer"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 font-['Archivo',sans-serif] text-[0.875rem] tracking-[0.05em] uppercase text-[#28292D] dark:text-white hover:text-[#D52169] transition-colors cursor-pointer"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
