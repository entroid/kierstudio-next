"use client";

import { motion, AnimatePresence, useAnimation } from "motion/react";
import {
  Moon,
  Sun,
  Accessibility,
  Plus,
  Minus,
  Eye,
  EyeOff,
  Maximize,
  Volume2,
  VolumeX,
  ArrowUp,
  MessageSquare,
  Languages,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";

export function FloatingControls() {
  const { darkMode, toggleDarkMode, accessibility, updateAccessibility } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);

  const increaseFontSize = () => {
    if (accessibility.fontSize < 150) {
      updateAccessibility({ fontSize: accessibility.fontSize + 10 });
    }
  };

  const decreaseFontSize = () => {
    if (accessibility.fontSize > 80) {
      updateAccessibility({ fontSize: accessibility.fontSize - 10 });
    }
  };

  const resetFontSize = () => {
    updateAccessibility({ fontSize: 100 });
  };

  const toggleHighContrast = () => {
    updateAccessibility({ highContrast: !accessibility.highContrast });
    if (!accessibility.highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  };

  const toggleReducedMotion = () => {
    updateAccessibility({ reducedMotion: !accessibility.reducedMotion });
  };

  const toggleScreenReader = () => {
    setScreenReaderEnabled(!screenReaderEnabled);
    updateAccessibility({ screenReader: !accessibility.screenReader });
  };

  // Animation controls for the chat button
  const chatControls = useAnimation();

  useEffect(() => {
    const pulseAnimation = async () => {
      while (true) {
        await chatControls.start({
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 25px 50px -12px rgba(213, 33, 105, 0.1)',
            '0 25px 50px -12px rgba(213, 33, 105, 0.3)',
            '0 25px 50px -12px rgba(213, 33, 105, 0.1)'
          ],
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        });
        // Wait 5 seconds before next pulse
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    };

    pulseAnimation();
  }, [chatControls]);

  return (
    <>
      {/* Fixed container for stacked floating buttons */}
      <div id="floating-controls" className="fixed bottom-8 right-4 md:right-8 z-50 flex flex-col items-end gap-5">
        {/* Chat Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <motion.button
            id="bp-toggle-chat"
            initial={{ scale: 1 }}
            animate={chatControls}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 25px 50px -12px rgba(213, 33, 105, 0.4)'
            }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-[#D52169] hover:bg-[#28292D] rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300 cursor-pointer"
            aria-label="Toggle chat"
          >
            <MessageSquare className="text-white" size={24} />
          </motion.button>
        </motion.div>

        {/* Scroll to top */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }}
          className="hidden md:block"
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-[#D52169] hover:bg-[#28292D] rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300 group cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="text-white" size={24} />
          </motion.button>
        </motion.div>

        {/* Accessibility Menu - Hidden */}
        {false && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
            className="relative"
          >
            <motion.button
              onClick={() => setAccessibilityOpen(!accessibilityOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-[#28292D] hover:bg-[#D52169] rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300 cursor-pointer"
              aria-label="Abrir menú de accesibilidad"
              aria-expanded={accessibilityOpen}
            >
              <Accessibility className="text-white" size={24} />
            </motion.button>


            {/* Accessibility Panel */}
            <AnimatePresence>
              {accessibilityOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 100, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 100, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-20 right-0 w-[320px] bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl border border-[#28292D]/10 dark:border-white/10 p-6"
                >
                  <h3
                    className="font-['Archivo',sans-serif] text-[18px] text-[#28292D] dark:text-white mb-6"
                    style={{ fontWeight: 700 }}
                  >
                    Opciones de Accesibilidad
                  </h3>

                  {/* Font Size */}
                  <div className="mb-6 pb-6 border-b border-[#28292D]/10 dark:border-white/10">
                    <label
                      className="font-['Archivo',sans-serif] text-[12px] tracking-[0.1em] uppercase text-[#28292D]/70 dark:text-white/60 mb-3 block"
                      style={{ fontWeight: 600 }}
                    >
                      Tamaño de fuente
                    </label>
                    <div className="flex items-center justify-between gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={decreaseFontSize}
                        className="w-10 h-10 bg-[#F5F5F5] dark:bg-[#28292D] rounded-lg flex items-center justify-center hover:bg-[#D52169] hover:text-white transition-colors cursor-pointer"
                        aria-label="Reducir tamaño de fuente"
                      >
                        <Minus size={16} />
                      </motion.button>
                      <span
                        className="font-['Archivo',sans-serif] text-[14px] text-[#28292D] dark:text-white min-w-[60px] text-center"
                        style={{ fontWeight: 600 }}
                      >
                        {accessibility.fontSize}%
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={increaseFontSize}
                        className="w-10 h-10 bg-[#F5F5F5] dark:bg-[#28292D] rounded-lg flex items-center justify-center hover:bg-[#D52169] hover:text-white transition-colors cursor-pointer"
                        aria-label="Aumentar tamaño de fuente"
                      >
                        <Plus size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={resetFontSize}
                        className="px-3 py-2 bg[#F5F5F5] dark:bg-[#28292D] rounded-lg font-['Archivo',sans-serif] text-[11px] hover:bg-[#D52169] hover:text-white transition-colors cursor-pointer"
                        style={{ fontWeight: 600 }}
                      >
                        Reset
                      </motion.button>
                    </div>
                  </div>

                  {/* High Contrast */}
                  <div className="mb-4">
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={toggleHighContrast}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer ${accessibility.highContrast
                        ? "bg-[#D52169] text-white"
                        : "bg-[#F5F5F5] dark:bg-[#28292D] text-[#28292D] dark:text-white hover:bg-[#D52169]/10"
                        }`}
                      aria-label="Alternar alto contraste"
                      aria-pressed={accessibility.highContrast}
                    >
                      <span
                        className="font-['Archivo',sans-serif] text-[13px] flex items-center gap-3"
                        style={{ fontWeight: 600 }}
                      >
                        {accessibility.highContrast ? <Eye size={18} /> : <EyeOff size={18} />}
                        Alto Contraste
                      </span>
                      <div
                        className={`w-10 h-6 rounded-full transition-colors ${accessibility.highContrast ? "bg-white" : "bg-[#28292D]/20"}`}
                      >
                        <motion.div
                          animate={{ x: accessibility.highContrast ? 16 : 0 }}
                          className={`w-6 h-6 rounded-full ${accessibility.highContrast ? "bg-[#D52169]" : "bg-white"}`}
                        />
                      </div>
                    </motion.button>
                  </div>

                  {/* Reduced Motion */}
                  <div className="mb-4">
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={toggleReducedMotion}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer ${accessibility.reducedMotion
                        ? "bg-[#D52169] text-white"
                        : "bg-[#F5F5F5] dark:bg-[#28292D] text-[#28292D] dark:text-white hover:bg-[#D52169]/10"
                        }`}
                      aria-label="Reducir movimiento"
                      aria-pressed={accessibility.reducedMotion}
                    >
                      <span
                        className="font-['Archivo',sans-serif] text-[13px] flex items-center gap-3"
                        style={{ fontWeight: 600 }}
                      >
                        <Maximize size={18} />
                        Reducir Movimiento
                      </span>
                      <div
                        className={`w-10 h-6 rounded-full transition-colors ${accessibility.reducedMotion ? "bg-white" : "bg-[#28292D]/20"}`}
                      >
                        <motion.div
                          animate={{ x: accessibility.reducedMotion ? 16 : 0 }}
                          className={`w-6 h-6 rounded-full ${accessibility.reducedMotion ? "bg-[#D52169]" : "bg-white"}`}
                        />
                      </div>
                    </motion.button>
                  </div>

                  {/* Screen Reader */}
                  <div>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={toggleScreenReader}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer ${screenReaderEnabled
                        ? "bg-[#D52169] text-white"
                        : "bg-[#F5F5F5] dark:bg-[#28292D] text-[#28292D] dark:text-white hover:bg-[#D52169]/10"
                        }`}
                      aria-label="Activar lector de pantalla"
                      aria-pressed={screenReaderEnabled}
                    >
                      <span
                        className="font-['Archivo',sans-serif] text-[13px] flex items-center gap-3"
                        style={{ fontWeight: 600 }}
                      >
                        {screenReaderEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                        Lector de Pantalla
                      </span>
                      <div
                        className={`w-10 h-6 rounded-full transition-colors ${screenReaderEnabled ? "bg-white" : "bg-[#28292D]/20"}`}
                      >
                        <motion.div
                          animate={{ x: screenReaderEnabled ? 16 : 0 }}
                          className={`w-6 h-6 rounded-full ${screenReaderEnabled ? "bg-[#D52169]" : "bg-white"}`}
                        />
                      </div>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Language Toggle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.3 }}
        >
          <motion.button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-[#D52169] hover:bg-[#28292D] rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300 group cursor-pointer"
            aria-label={t('controls.language.toggle')}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={language}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="font-['Archivo',sans-serif] text-white text-[13px] font-bold tracking-wider"
              >
                {language === "en" ? "EN" : "ES"}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Dark Mode Toggle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.3 }}
        >
          <motion.button
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-[#D52169] hover:bg-[#28292D] rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300 group cursor-pointer"
            aria-label={darkMode ? t('controls.activateLightMode') : t('controls.activateDarkMode')}
          >
            <AnimatePresence mode="wait">
              {darkMode ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="text-white" size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="text-white" size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}
