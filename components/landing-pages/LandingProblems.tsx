"use client";
import { motion } from "motion/react";
import { AlertTriangle, TrendingDown, Users } from "lucide-react";

export interface LandingProblemsProps {
  tag: string;
  title1: string;
  titleHighlight: string;
  subTitleSection: string;
  items: { title: string; body: string }[];
}

export function LandingProblems({
  tag,
  title1,
  titleHighlight,
  subTitleSection,
  items,
}: LandingProblemsProps) {
  // Using generic icons since this is a template, but we could make this dynamic if needed
  const icons = [TrendingDown, Users, AlertTriangle];

  // SECTION: LANDING PROBLEMS
  return (
    <section id="problemas" data-section="PROBLEMS" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <span className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/50 mb-6 block italic" style={{ fontWeight: 600 }}>
            {tag}
          </span>
          <h2 className="font-['Archivo',sans-serif] text-[2.5rem] md:text-[4rem] leading-[0.9] tracking-[-0.03em] text-[#28292D] uppercase" style={{ fontWeight: 900 }}>
            {title1}<br />
            <span className="text-[#D52169]">{titleHighlight}</span>
          </h2>

          <p className="font-['Archivo',sans-serif] text-[1.2rem] text-[#28292D]/60 leading-[1.7] mt-6" style={{ fontWeight: 400 }}>
            {subTitleSection}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((p, i) => {
            const IconComponent = icons[i % icons.length];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }} className="group p-8 border border-[#28292D]/10 hover:border-[#D52169] transition-colors duration-300">
                <div className="w-12 h-12 bg-[#D52169]/10 flex items-center justify-center mb-6 group-hover:bg-[#D52169] transition-colors duration-300">
                  <IconComponent className="text-[#D52169] group-hover:text-white transition-colors duration-300" size={22} />
                </div>
                <h3 className="font-['Archivo',sans-serif] text-[1.125rem] text-[#28292D] mb-4 leading-[1.3]" style={{ fontWeight: 700 }}>
                  {p.title}
                </h3>
                <p className="font-['Archivo',sans-serif] text-[0.9375rem] text-[#28292D]/60 leading-[1.7]" style={{ fontWeight: 400 }}>
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
