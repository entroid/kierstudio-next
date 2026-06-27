"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { en } from "@/translations";
import { CTAButton } from "@/components/cta/CTAButton";

// Custom SVG WhatsApp icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.17-1.355a9.95 9.95 0 0 0 4.837 1.256h.005c5.507 0 9.991-4.479 9.992-9.986.002-2.668-1.037-5.176-2.931-7.07a9.92 9.92 0 0 0-7.061-2.925zm0 1.662c2.22 0 4.306.864 5.877 2.435a8.29 8.29 0 0 1 2.446 5.885c-.002 4.583-3.731 8.31-8.31 8.31a8.28 8.28 0 0 1-4.223-1.152l-.303-.18-3.138.823.837-3.06-.197-.314a8.28 8.28 0 0 1-1.266-4.426c.002-4.582 3.733-8.31 8.314-8.31zm4.786 11.793c-.262-.13-1.554-.767-1.793-.854-.24-.087-.414-.13-.588.13-.173.26-.673.854-.825 1.028-.152.173-.305.195-.567.065-.262-.13-1.107-.408-2.11-1.3a8.16 8.16 0 0 1-1.46-1.815c-.152-.26-.016-.401.115-.53.118-.117.262-.304.393-.456.13-.152.174-.26.262-.434.087-.174.043-.326-.022-.456-.065-.13-.588-1.414-.805-1.936-.212-.51-.424-.44-.588-.44-.152-.007-.327-.008-.501-.008a.96.96 0 0 0-.7.327c-.24.26-.914.89-.914 2.17 0 1.28.936 2.518 1.066 2.69 1.152 1.54 2.585 2.378 4.743 3.21.614.237 1.144.385 1.536.51.616.196 1.185.168 1.638.1.505-.075 1.554-.634 1.774-1.246.22-.613.22-1.139.152-1.247-.067-.108-.244-.173-.506-.304z" />
    </svg>
  );
}

export default function ContactoLandingPage() {
  const { translations } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Guarantee hydration matching by rendering from a known fallback on SSR, 
  // then shifting to active language on the client side.
  const data = mounted
    ? ((translations as any).contacto || en.contacto)
    : en.contacto;

  return (
    <div
      className="relative min-h-[90vh] flex flex-col justify-center items-center text-white transition-colors duration-500 overflow-hidden px-6 lg:px-12 pt-32 pb-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bkg-contact.jpg')"
      }}
    >
      {/* Dark Overlay to make text pop and not distract */}
      <div className="absolute inset-0 bg-[#0a0a0a]/75 pointer-events-none" />

      {/* Decorative Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative Radial Glowing Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#D52169] opacity-[0.07] rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1000px] mx-auto w-full flex flex-col items-center text-center z-10">
        {/* Category Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 bg-[#D52169]/20 border border-[#D52169]/40 text-[#ff4d91] px-4 py-2 font-['Archivo',sans-serif] text-[0.75rem] tracking-[0.2em] uppercase"
            style={{ fontWeight: 600 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d91] animate-pulse" />
            {data.tag}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Archivo',sans-serif] text-[2rem] sm:text-[3.25rem] lg:text-[4.25rem] leading-[1.1] tracking-[-0.03em] uppercase max-w-[900px] mb-8 text-white"
          style={{ fontWeight: 900 }}
        >
          {data.title}
          <span className="text-[#ff4d91]">{data.title2}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-['Archivo',sans-serif] text-[1rem] sm:text-[1.125rem] text-white/85 max-w-[620px] leading-[1.6] mb-12 whitespace-pre-line"
          style={{ fontWeight: 400 }}
        >
          {data.subtitle}
        </motion.p>

        {/* Big WhatsApp CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <CTAButton
            href={data.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="!bg-[#25D366] hover:!bg-[#20ba59] !border-transparent text-white shadow-xl shadow-[#25D366]/20 py-6 px-12 text-[0.9375rem] font-bold tracking-[0.1em]"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            {data.whatsappButton}
          </CTAButton>
        </motion.div>

        {/* Infinite Scrolling Marquee Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full mt-20 overflow-hidden py-5 border-y border-white/10 bg-black/20 backdrop-blur-sm"
        >
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[
              ...data.marqueeItems,
              ...data.marqueeItems,
              ...data.marqueeItems,
              ...data.marqueeItems,
            ].map((item: string, index: number) => (
              <span
                key={index}
                className="font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] text-white/70 tracking-[0.15em] uppercase font-bold"
                style={{ fontWeight: 800 }}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
