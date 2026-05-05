"use client";

import { motion } from "motion/react";
import { LogoCompact } from "@/components/Logo";

export function LandingHeader() {
  // SECTION: LANDING HEADER
  return (
    <motion.header
      data-section="HEADER"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="flex items-center cursor-pointer"
        >
          {/* Using a solid color logo or white based on dark mode usually, 
              but since hero is dark we might need to force the logo colors */}
          <LogoCompact className="h-10 w-auto text-white" />
        </motion.a>

        <motion.a
          href="#form"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-black px-6 py-3 rounded-full font-['Archivo',sans-serif] text-[0.75rem] tracking-[0.1em] uppercase transition-all duration-300"
          style={{ fontWeight: 700 }}
        >
          Get Diagnostic
        </motion.a>
      </nav>
    </motion.header>
  );
}
