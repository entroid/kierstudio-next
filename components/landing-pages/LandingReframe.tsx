"use client";
import { motion } from "motion/react";

export interface LandingReframeProps {
  tag: string;
  title1: string;
  titleHighlight1: string;
  title2: string;
  titleHighlight2: string;
  paragraph1: string;
  paragraph2: string;
  comparisons: { wrong: string; right: string }[];
}

export function LandingReframe({
  tag,
  title1,
  titleHighlight1,
  title2,
  titleHighlight2,
  paragraph1,
  paragraph2,
  comparisons,
}: LandingReframeProps) {
  // SECTION: LANDING REFRAME
  return (
    <section data-section="REFRAME" className="py-24 md:py-32 bg-[#28292D] dark:bg-black transition-colors duration-500 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
            <span className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-white/40 mb-8 block italic" style={{fontWeight:600}}>
              {tag}
            </span>
            <h2 className="font-['Archivo',sans-serif] text-[2.25rem] md:text-[3.5rem] leading-[0.95] tracking-[-0.03em] text-white mb-8 uppercase" style={{fontWeight:900}}>
              {title1}<br/>
              <span className="text-[#D52169]">{titleHighlight1}</span><br/>
              {title2}<br/>
              <span className="text-[#D52169]">{titleHighlight2}</span>
            </h2>
            <p className="font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] text-white/60 leading-[1.8] mb-6" style={{fontWeight:400}}>
              {paragraph1}
            </p>
            <p className="font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] text-white/60 leading-[1.8]" style={{fontWeight:400}}>
              {paragraph2}
            </p>
          </motion.div>
          <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.15}} className="space-y-4">
            {comparisons.map((row,i)=>(
              <div key={i} className="grid grid-cols-2 gap-px">
                <div className="bg-white/5 p-5 flex items-start gap-3">
                  <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                  <span className="font-['Archivo',sans-serif] text-[0.875rem] text-white/50 leading-[1.5]" style={{fontWeight:400}}>{row.wrong}</span>
                </div>
                <div className="bg-[#D52169]/10 border border-[#D52169]/20 p-5 flex items-start gap-3">
                  <span className="text-[#D52169] mt-0.5 shrink-0">✓</span>
                  <span className="font-['Archivo',sans-serif] text-[0.875rem] text-white/80 leading-[1.5]" style={{fontWeight:500}}>{row.right}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
