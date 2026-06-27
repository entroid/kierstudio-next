"use client";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";

export interface LandingGatekeeperProps {
  tag: string;
  title: string;
  notForTitle: string;
  notForItems: string[];
  forTitle: string;
  forItems: string[];
}

export function LandingGatekeeper({
  tag,
  title,
  notForTitle,
  notForItems,
  forTitle,
  forItems,
}: LandingGatekeeperProps) {
  // SECTION: LANDING GATEKEEPER
  return (
    <section data-section="GATEKEEPER" className="py-24 md:py-32 bg-white border-t border-b border-[#28292D]/10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <span className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#D52169] mb-6 block" style={{ fontWeight: 700 }}>
            {tag}
          </span>
          <h2 className="font-['Archivo',sans-serif] text-[2rem] md:text-[3rem] leading-[1.1] tracking-[-0.03em] text-[#28292D] uppercase max-w-[950px] mx-auto" style={{ fontWeight: 900 }}>
            {title}
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 text-left max-w-[900px] mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-red-50/50 border border-red-100 p-8">
            <h3 className="font-['Archivo',sans-serif] text-[1.25rem] text-[#28292D] mb-6 flex items-center gap-3" style={{ fontWeight: 700 }}>
              <X className="text-red-500" />
              {notForTitle}
            </h3>
            <ul className="space-y-4">
              {notForItems.map((item, i) => (
                <li key={i} className="font-['Archivo',sans-serif] text-[0.9375rem] text-[#28292D]/70 flex items-start gap-3" style={{ fontWeight: 400 }}>
                  <span className="text-red-500 mt-1 shrink-0 text-xs">■</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-[#D52169]/5 border border-[#D52169]/20 p-8">
            <h3 className="font-['Archivo',sans-serif] text-[1.25rem] text-[#28292D] mb-6 flex items-center gap-3" style={{ fontWeight: 700 }}>
              <Check className="text-[#D52169]" />
              {forTitle}
            </h3>
            <ul className="space-y-4">
              {forItems.map((item, i) => (
                <li key={i} className="font-['Archivo',sans-serif] text-[0.9375rem] text-[#28292D]/70 flex items-start gap-3" style={{ fontWeight: 400 }}>
                  <span className="text-[#D52169] mt-1 shrink-0 text-xs">■</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
