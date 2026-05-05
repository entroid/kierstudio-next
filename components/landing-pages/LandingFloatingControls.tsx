"use client";

import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";
import { useLanguage } from "@/components/LanguageContext";

export function LandingFloatingControls() {
  const { language, setLanguage, t } = useLanguage();

  // SECTION: LANDING FLOATING CONTROLS
  return (
    <div id="landing-floating-controls" className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Language Toggle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <motion.button
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-[#28292D] hover:bg-[#D52169] rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300 group cursor-pointer"
          aria-label={t('controls.language.toggle')}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={language}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="font-['Archivo',sans-serif] text-white text-[0.75rem] font-bold tracking-wider"
            >
              {language === "en" ? "EN" : "ES"}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </div>
  );
}
