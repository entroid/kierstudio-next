"use client";
import { motion } from "motion/react";
import { Search, MessageSquare, BarChart2, ArrowRight, Check } from "lucide-react";

export interface LandingDiagnosticProps {
  tag: string;
  title1: string;
  titleHighlight: string;
  title2: string;
  description: string;
  ctaButton: string;
  items: { title: string; body: string }[];
  outcomes: {
    title: string;
    subtitle: string;
    items: string[];
  };
}

export function LandingDiagnostic({
  tag,
  title1,
  titleHighlight,
  title2,
  description,
  ctaButton,
  items,
  outcomes,
}: LandingDiagnosticProps) {
  const icons = [Search, MessageSquare, BarChart2];

  // SECTION: LANDING DIAGNOSTIC
  return (
    <section id="diagnostico" data-section="DIAGNOSTIC" className="py-24 md:py-32 bg-[#F5F5F5] dark:bg-[#111] transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[40%_1fr] gap-16 items-start mb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/50 dark:text-white/50 mb-8 block italic" style={{ fontWeight: 600 }}>
              {tag}
            </span>
            <h2 className="font-['Archivo',sans-serif] text-[2.5rem] md:text-[4rem] leading-[0.9] tracking-[-0.03em] text-[#28292D] dark:text-white mb-8 uppercase" style={{ fontWeight: 900 }}>
              {title1}<br />
              <span className="text-[#D52169]">{titleHighlight}</span><br />
              {title2}
            </h2>
            <p className="font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] text-[#28292D]/70 dark:text-white/60 leading-[1.8] mb-10" style={{ fontWeight: 400 }}>
              {description}
            </p>
          </motion.div>
          <div className="space-y-4">
            {items.map((item, i) => {
              const IconComponent = icons[i % icons.length];
              return (
                <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }} className="group flex gap-6 p-8 bg-white dark:bg-[#1a1a1a] border border-[#28292D]/8 dark:border-white/8 hover:border-[#D52169] transition-colors duration-300">
                  <div className="shrink-0 w-12 h-12 bg-[#D52169]/10 flex items-center justify-center group-hover:bg-[#D52169] transition-colors duration-300">
                    <IconComponent className="text-[#D52169] group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h3 className="font-['Archivo',sans-serif] text-[1.2rem] text-[#28292D] dark:text-white mb-2" style={{ fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <p className="font-['Archivo',sans-serif] text-[1rem] text-[#28292D]/60 dark:text-white/60 leading-[1.7]" style={{ fontWeight: 400 }}>
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-24 mb-24">
          <motion.a href="#form" whileHover={{ scale: 1.03, x: 5 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-3 bg-[#D52169] text-white px-8 py-5 font-['Archivo',sans-serif] text-[0.875rem] tracking-[0.1em] uppercase hover:bg-[#28292D] transition-all duration-300 cursor-pointer" style={{ fontWeight: 700 }}>
            {ctaButton} <ArrowRight size={18} />
          </motion.a>
        </div>

        {/* Outcomes Section (QUÉ TE LLEVÁS) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 md:p-16 relative overflow-hidden  bg-white/50 dark:bg-[#1a1a1a]/50"
        >

          <div className="relative z-10">
            <h3 className="font-['Archivo',sans-serif] text-[2rem] md:text-[3rem] leading-[1.2] text-center mb-4 text-[#D52169]" style={{ fontWeight: 800 }}>
              {outcomes.title}
            </h3>
            <p className="font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] text-[#28292D]/60 dark:text-white/60 text-center leading-[1.8] mb-10" style={{ fontWeight: 400 }}>
              {outcomes.subtitle}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {outcomes.items.map((item, index) => (
                <div key={index} className="flex gap-4 items-start p-8 bg-white dark:bg-[#1a1a1a] border border-[#28292D]/8 dark:border-white/8 hover:border-[#D52169] transition-colors duration-300">
                  <div className="w-6 h-6 rounded-full bg-[#D52169] flex items-center justify-center shrink-0 mt-1">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] text-[#28292D]/60 dark:text-white/60 leading-[1.5]" style={{ fontWeight: 500 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
