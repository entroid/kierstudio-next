"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export interface LandingHeroProps {
  tag: string;
  title1: string;
  titleHighlight: string;
  title2: string;
  subtitle: string;
  ctaButton: string;
  scrollText: string;
  stats: { number: string; text: string }[];
}

export function LandingHero({
  tag,
  title1,
  titleHighlight,
  title2,
  subtitle,
  ctaButton,
  scrollText,
  stats,
}: LandingHeroProps) {
  // SECTION: LANDING HERO
  return (
    <section
      id="hero"
      data-section="HERO"
      className="relative min-h-screen flex flex-col justify-center bg-[#28292D] overflow-hidden px-6 lg:px-12 pt-24 pb-16"
    >
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D52169] opacity-10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8">
          <span className="inline-flex items-center gap-2 bg-[#D52169]/10 border border-[#D52169]/20 text-[#D52169] px-4 py-2 font-['Archivo',sans-serif] text-[0.75rem] tracking-[0.2em] uppercase" style={{ fontWeight: 600 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D52169] animate-pulse" />
            {tag}
          </span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-['Archivo',sans-serif] text-[3rem] sm:text-[4rem] lg:text-[6rem] leading-[0.9] tracking-[-0.03em] text-white mb-8 uppercase" style={{ fontWeight: 900 }}>
          {title1}<br />
          <span className="text-[#D52169]">{titleHighlight}</span><br />
          {title2}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="font-['Archivo',sans-serif] text-[1.125rem] md:text-[1.375rem] text-white/80 max-w-[620px] leading-[1.6] mb-12" style={{ fontWeight: 400 }}>
          {subtitle}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} className="flex flex-col sm:flex-row gap-4 items-start">
          <motion.a href="#form" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-3 bg-[#D52169] hover:bg-white hover:text-[#28292D] text-white px-8 py-5 font-['Archivo',sans-serif] text-[0.875rem] tracking-[0.1em] uppercase transition-all duration-300 cursor-pointer" style={{ fontWeight: 700 }}>
            {ctaButton} <ArrowRight size={18} />
          </motion.a>
          <a href="#diagnostico" className="inline-flex items-center gap-2 text-white/50 hover:text-white font-['Archivo',sans-serif] text-[0.875rem] tracking-[0.05em] uppercase transition-colors py-5 cursor-pointer" style={{ fontWeight: 600 }}>
            {scrollText}
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-wrap gap-8 mt-20 pt-12 border-t border-white/10">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="font-['Archivo',sans-serif] text-[2rem] text-[#D52169]" style={{ fontWeight: 900 }}>{s.number}</span>
              <span className="font-['Archivo',sans-serif] text-[0.8125rem] text-white/50 max-w-[200px] leading-[1.5]" style={{ fontWeight: 400 }}>{s.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
