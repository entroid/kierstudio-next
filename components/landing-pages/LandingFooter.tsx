"use client";

import { motion } from "motion/react";
import { LogoCompact } from "@/components/Logo";

export function LandingFooter() {
  const currentYear = new Date().getFullYear();

  // SECTION: LANDING FOOTER
  return (
    <footer data-section="FOOTER" className="bg-black text-white pt-16 pb-8 transition-colors duration-500 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <LogoCompact className="h-8 w-auto text-white" />
          </motion.a>

          <div className="flex gap-6">
            <motion.a
              href="/privacy"
              whileHover={{ y: -2 }}
              className="font-['Archivo',sans-serif] text-[0.75rem] text-white/60 hover:text-[#D52169] transition-colors"
              style={{ fontWeight: 400 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="/terms"
              whileHover={{ y: -2 }}
              className="font-['Archivo',sans-serif] text-[0.75rem] text-white/60 hover:text-[#D52169] transition-colors"
              style={{ fontWeight: 400 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center md:text-left">
          <p
            className="font-['Archivo',sans-serif] text-[0.75rem] text-white/60"
            style={{ fontWeight: 400 }}
          >
            © {currentYear} Kier Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
