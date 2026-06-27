"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  Loader2,
  Heart,
  Compass,
  ShieldCheck,
  Layers,
  Sparkles,
  AlertCircle,
  Smile,
  Search,
  LogIn,
  HouseHeart
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { LogoCompact } from "@/components/Logo";
import { en } from "@/translations";
import { CTAButton } from "@/components/cta/CTAButton";
import { LandingHeader } from "@/components/landing-pages/LandingHeader";


// Helper icons array for the 4 simple pillars of help
const helperIcons = [Search, LogIn, HouseHeart, Sparkles];

export default function SaludYBienestarLandingPage() {
  const { t, translations } = useLanguage();
  const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Force English on initial render (SSR + Hydration) to guarantee 100% hydration matching.
  // Smoothly transition to active language (Spanish/English) after mounting.
  const data = mounted ? ((translations as any).saludybienestar || en.saludybienestar) : en.saludybienestar;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const website = formData.get("website") as string;
    const challenge = formData.get("challenge") as string;

    // Validation matching Kier Studio patterns
    if (!name.trim() || !email.trim() || !website.trim()) {
      setResult({ type: "error", message: data.cta.formValidationRequired });
      setSubmitting(false);
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setResult({ type: "error", message: data.cta.formValidationRequired });
      setSubmitting(false);
      return;
    }

    if (website.includes(" ") || (!website.includes(".") && website.length < 5)) {
      setResult({ type: "error", message: data.cta.formInvalidUrl });
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/kierstudio.info@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          website,
          challenge,
          _subject: `Diagnostic Request (Salud y Bienestar): ${name} (${website})`,
          _template: "table",
        }),
      });

      const json = await response.json();

      if (response.ok) {
        setResult({ type: "success", message: data.cta.formSuccess });
        form.reset();
      } else {
        setResult({ type: "error", message: json.message || data.cta.formError });
      }
    } catch (error) {
      console.error(error);
      setResult({ type: "error", message: data.cta.formError });
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <div id="salud-y-bienestar-page" className="bg-white text-[#28292D] min-h-screen transition-colors duration-500 overflow-x-hidden">

      {/* SECTION: HEADER — variant="dark" for light/warm hero background */}
      <LandingHeader variant="dark" />

      {/* SECTION 1: HERO - VALIDACIÓN INMEDIATA */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-32 pb-24 border-b border-[#28292D]/5  bg-[#FEF4EB]  transition-colors duration-500 bg-[right_center]"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(254,244,235,0.9), rgba(254,244,235,0.1)), url('/landing/saludybienestar/0001hero.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
        }}
      >
        <div className="absolute inset-0 md:hidden " style={{ backgroundColor: "rgba(254,244,235,0.6)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 bg-[#D52169]/10  border border-[#D52169]/10 text-[#D52169] px-4 py-2 font-['Archivo',sans-serif] text-[0.75rem] tracking-[0.2em] uppercase" style={{ fontWeight: 600 }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D52169] animate-pulse" />
              {data.hero.tag}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Bodoni+Moda',serif] text-[2.5rem] sm:text-[3.5rem] lg:text-[5.5rem] leading-[1.0] tracking-[-0.03em] text-[#28292D] mb-8 md:max-w-[800px] lg:max-w-[1100px]"
            style={{ fontWeight: 900 }}
          >
            {data.hero.title1}  <span className="text-[#D52169] font-black">{data.hero.titleHighlight} </span> {data.hero.title2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className=" text-[1.125rem] md:text-[1.375rem] text-[#28292D]/70  max-w-[720px] leading-[1.6] mb-12"
            style={{ fontWeight: 400 }}
          >
            {data.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-5 items-start mb-24"
          >
            <CTAButton href="#form" className="shadow-xl">
              {data.hero.ctaButton} <ArrowRight size={18} />
            </CTAButton>

            {/* <CTAButton className="" variant="secondary" href="#como-ayudamos">
              {data.hero.scrollText} <ArrowDown size={18} />
            </CTAButton> */}
          </motion.div>

          {/* ELEMENTO CLAVE DEL HERO - OBSERVACIONES REALES */}
          <motion.div
            id="hero-observations"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-2"
          >
            {/* <h3 className="font-['Archivo',sans-serif] text-[0.8125rem] tracking-[0.15em] text-[#28292D]/40 dark:text-white/40 uppercase mb-6" style={{ fontWeight: 700 }}>
              {data.hero.observationsTitle}
            </h3> 

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 xl:gap-30">
              {data.hero.observations.map((obs: string, idx: number) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-white/60 dark:bg-[#151515] p-5 border border-[#28292D]/5 dark:border-white/5 shadow-sm flex items-center justify-center transition-all duration-100"
                >
                  <p className="font-['Archivo',sans-serif] text-[0.9375rem] text-[#28292D]/80 dark:text-white/80 text-center leading-[1.4] italic" style={{ fontWeight: 500 }}>
                    {obs}
                  </p>
                </motion.div>
              ))}
            </div>*/}

            <div className="bg-white/50 flex flex-col md:flex-row justify-center py-3 px-8 shadow-sm">
              {data.hero.observations.map((obs: string, idx: number) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className={`py-3 md:p-5 flex items-center md:justify-center transition-all duration-100 ${idx > 0 ? 'border-t md:border-t-0 md:border-l border-[#28292D]/5 ' : ''}`}
                >
                  <p className="font-['Archivo',sans-serif] text-[0.9375rem] text-[#28292D]/70 md:text-center leading-[1.4] italic" style={{ fontWeight: 600 }}>
                    {obs}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: "LO QUE SOLEMOS ENCONTRAR" - PROBLEMAS FRECUENTES */}
      <section
        id="problemas"
        className="py-24 md:py-32 px-6 lg:px-12 bg-white transition-colors duration-500"
      >
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[800px]"
          >
            <span className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/40  mb-6 block" style={{ fontWeight: 600 }}>
              {data.problems.tag}
            </span>
            <h2 className="font-['Bodoni+Moda',serif] text-[2.25rem] md:text-[3.75rem] leading-[1.05] tracking-[-0.03em] text-[#28292D]  mb-8" style={{ fontWeight: 900 }}>
              {data.problems.title1} <span className="text-[#D52169] font-black">{data.problems.titleHighlight}</span>
            </h2>
            <p className="font-['Archivo',sans-serif] text-[1.125rem] text-[#28292D]/60  leading-[1.5]" style={{ fontWeight: 400 }}>
              {data.problems.subTitleSection}
            </p>
          </motion.div>

          <div id="problemas-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.problems.items.map((item: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-[#F5F5F5]/50  p-6 border border-[#28292D]/5  hover:border-[#D52169]/30 transition-all duration-300 flex flex-col md:flex-row  justify-between gap-4"
              >

                {/* <div className="shrink-0 w-12 h-12 bg-[#D52169]/8 rounded-full dark:bg-[#D52169]/10 text-[#D52169] flex items-center justify-center mb-2">
                     <AlertCircle size={24} strokeWidth={1.5} /> 
                  </div> */}

                <div>
                  <h3 className="text-[1.125rem] text-[#28292D]  mb-2" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p className="font-['Archivo',sans-serif] text-[0.9375rem] text-[#28292D]/60  leading-[1.6]" style={{ fontWeight: 400 }}>
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SECTION NEW: FRICCIÓN CARD */}

          <div className="max-w-[1400px] mx-auto w-full flex justify-center mt-20">
            <div className="w-full max-w-[600px] bg-[#D52169]/10  border border-[#28292D]/5  shadow-lg p-6 flex flex-col md:flex-row items-center gap-5">
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-12 h-12 bg-[#D52169]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <AlertCircle className="text-[#D52169]" size={24} />
                </div>
                <p className="flex-1 font-['Archivo',sans-serif] text-[1rem] text-[#28292D]   mb-4 md:mb-0">
                  {data.frictionCard.text}
                </p>
              </div>

              <CTAButton href="#form" className="flex-shrink-0 !py-3 !px-6">
                {data.frictionCard.cta} <ArrowRight size={18} />
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: "NUESTRO ENFOQUE" */}
      < section
        id="enfoque"
        className="py-20 md:py-28 px-6 lg:px-12 bg-[#F5F5F5]  transition-colors duration-500"
      >
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-16 items-center">
          <motion.div
            id="enfoque-text"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/40   mb-6 block" style={{ fontWeight: 600 }}>
              {data.approach.tag}
            </span>
            <h2 className="font-['Bodoni+Moda',serif]  text-[2.25rem] md:text-[3.75rem] leading-[1.05] tracking-[-0.03em] text-[#28292D]   mb-8" style={{ fontWeight: 900 }}>
              {data.approach.title1}
              <span className="text-[#D52169] font-black"> {data.approach.titleHighlight}</span>
            </h2>
            <p className="text-[1.125rem] text-[#28292D]/90  leading-[1.6] mb-6" style={{ fontWeight: 600 }}>
              {data.approach.subtitle}
            </p>
            <p className="text-[1rem] text-[#28292D]/60  leading-[1.7]" style={{ fontWeight: 400 }}>
              {data.approach.description}
            </p>
          </motion.div>

          <div id="enfoque-bullets" className="grid  grid-cols-2 lg:grid-cols-1 gap-4 md:gap-8 pt-8">
            {data.approach.bullets.map((bullet: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-center gap-5 p-4 md:p-6 bg-white shadow-xs  border border-[#28292D]/5  flex-col md:flex-row"
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-[#D52169]/10  text-[#D52169] flex items-center justify-center ">
                  <Check size={14} />
                </div>
                <p className="font-['Archivo',sans-serif] text-[0.875rem] md:text-[1rem] text-[#28292D]/80   break-words word-wrap-anywhere" style={{ fontWeight: 500, wordBreak: 'break-word' }}>
                  {bullet}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section >


      {/* SECTION 4: "CÓMO AYUDAMOS" */}
      <section
        id="como-ayudamos"
        className="py-24 md:py-32 px-6 lg:px-12 bg-white  transition-colors duration-500 border-b border-[#28292D]/5"
      >
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-[900px]"
          >
            <span className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/40  mb-6 block" style={{ fontWeight: 600 }}>
              {data.howWeHelp.tag}
            </span>
            <h2 className="font-['Bodoni+Moda',serif] text-[2.25rem] md:text-[3.75rem] leading-[1.05] tracking-[-0.03em] text-[#28292D]  mb-6" style={{ fontWeight: 900 }}>
              {data.howWeHelp.title1} <span className="text-[#D52169] font-black">{data.howWeHelp.titleHighlight}</span>
            </h2>
            <p className="font-['Archivo',sans-serif] text-[1.125rem] text-[#28292D]/60  leading-[1.7]" style={{ fontWeight: 400 }}>
              {data.howWeHelp.subTitleSection}
            </p>
          </motion.div>

          <div id="como-ayudamos-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.howWeHelp.items.map((item: any, idx: number) => {
              const IconComponent = helperIcons[idx % helperIcons.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`${idx === 0 ? 'bg-[#D52169]/10  shadow-lg border-[#D52169]' : 'bg-white  shadow-sm border-[#28292D]/10'} p-8 border   hover:shadow-md transition-all duration-300 flex flex-col gap-6`}
                >
                  <div className="shrink-0 w-14 h-14 bg-[#D52169]/8  text-[#D52169] flex items-center justify-center rounded-full">
                    <IconComponent size={34} strokeWidth={1.3} />
                  </div>
                  <div>
                    <h3 className=" text-[1.25rem] text-[#28292D]  mb-3" style={{ fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <p className="font-['Archivo',sans-serif] text-[0.9375rem] text-[#28292D]/60  leading-[1.4]" style={{ fontWeight: 400 }}>
                      {item.body}
                    </p>
                    <h4 className="text-[#28292D] mt-6 text-[0.875rem]" style={{ fontWeight: 600 }} >
                      {item.subtitle}
                    </h4>
                    <div className="mt-2 space-y-2">
                      {item.subitems.map((sub: string, subIdx: number) => (
                        <div key={subIdx} className="flex items-start gap-2 text-[0.875rem] text-[#28292D]/80  leading-[1.4]">
                          <div className="shrink-0 w-5 h-5 rounded-full text-[#D52169] flex items-center justify-center mt-0.5">
                            <Check size={18} strokeWidth={2.5} />
                          </div>
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#FEF4EB]  p-3 text-[#28292D] text-[0.8rem] ">
                      <Smile size={26} strokeWidth={1.5} className="shrink-0 text-[#D52169]" />
                      <p className="font-['Archivo',sans-serif]  leading-[1.2]" >
                        <span className="font-bold">{item.result.bold}</span>{item.result.text}
                      </p>
                    </div>

                    {idx === 0 && (
                      <CTAButton href="#form" className="!px-6 !py-3 w-full !text-[0.7rem] justify-between shadow-xl mt-6">
                        {data.howWeHelp.helpCTA} <ArrowRight size={18} />
                      </CTAButton>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section >


      {/* SECTION 5: "A QUIÉN AYUDAMOS" / "TIPOS DE ORGANIZACIONES" */}
      < section
        id="organizaciones"
        className="py-24 md:py-32 px-6 lg:px-12 bg-[#F5F5F5]  transition-colors duration-500 hidden"
      >
        <div className="max-w-[1400px] mx-auto w-full text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-[800px] mx-auto"
          >
            <span className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/40  mb-6 block" style={{ fontWeight: 600 }}>
              {data.organizations.tag}
            </span>
            <h2 className="font-['Bodoni+Moda',serif] text-[2.25rem] md:text-[3.75rem] leading-[1.05] tracking-[-0.03em] text-[#28292D]  mb-6" style={{ fontWeight: 900 }}>
              {data.organizations.title1} <span className="text-[#D52169] font-black">{data.organizations.titleHighlight}</span>
            </h2>
            <p className="font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] text-[#28292D]/60  leading-[1.7]" style={{ fontWeight: 400 }}>
              {data.organizations.subtitle}
            </p>
          </motion.div>
        </div>

        <div id="organizaciones-grid" className="max-w-[1200px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.organizations.items.map((org: string, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="bg-white  p-8 border border-[#28292D]/5  shadow-sm text-center flex flex-col justify-center items-center"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#D52169] mb-4" />
              <p className="font-['Archivo',sans-serif] text-[1.0625rem] text-[#28292D]  " style={{ fontWeight: 600 }}>
                {org}
              </p>
            </motion.div>
          ))}
        </div>
      </section >

      {/* SECTION 6: "DIAGNÓSTICO / ENTRY OFFER" */}
      < section
        id="diagnostico"
        className="py-24 md:py-32 px-6 lg:px-12 bg-white border-b border-[#28292D]/5   transition-colors duration-500 hidden"
      >
        <div className="max-w-[1400px] mx-auto w-full">
          <div id="diagnostico-main-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <motion.div
              id="diagnostico-info"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/40  mb-6 block" style={{ fontWeight: 600 }}>
                {data.diagnostic.tag}
              </span>
              <h2 className="font-['Archivo',sans-serif] text-[2.25rem] md:text-[3.75rem] leading-[1.05] tracking-[-0.03em] text-[#28292D]  mb-8" style={{ fontWeight: 900 }}>
                {data.diagnostic.title1}<br />
                <span className="text-[#D52169] font-black">{data.diagnostic.titleHighlight}</span>
              </h2>
              <p className="font-['Archivo',sans-serif] text-[1.125rem] text-[#28292D]/80  leading-[1.6] mb-6" style={{ fontWeight: 500 }}>
                {data.diagnostic.subtitle}
              </p>
              <p className="font-['Archivo',sans-serif] text-[1rem] text-[#28292D]/60  leading-[1.7]" style={{ fontWeight: 400 }}>
                {data.diagnostic.description}
              </p>

              <div className="mt-10 hidden lg:block">
                <CTAButton href="#form" className="animate-pulse">
                  {data.diagnostic.ctaButton} <ArrowRight size={18} />
                </CTAButton>
              </div>
            </motion.div>

            <motion.div
              id="diagnostico-points"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#F5F5F5]/60 p-8 md:p-12 border border-[#28292D]/5 "
            >
              <h3 className="font-['Archivo',sans-serif] text-[1.125rem] tracking-[0.15em] text-[#28292D]/50  uppercase mb-8" style={{ fontWeight: 700 }}>
                {data.diagnostic.pointsTitle}
              </h3>

              <div className="space-y-6">
                {data.diagnostic.points.map((pt: string, idx: number) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-[#D52169]/10  text-[#D52169] flex items-center justify-center mt-1">
                      <Check size={12} />
                    </div>
                    <p className="font-['Archivo',sans-serif] text-[0.9375rem] md:text-[1rem] text-[#28292D]/80  leading-[1.5]" style={{ fontWeight: 500 }}>
                      {pt}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* DELIVERABLES - QUÉ TE LLEVAS */}
          <motion.div
            id="diagnostico-deliverables"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F5F5F5]/30  p-8 md:p-16 border border-[#28292D]/5  mt-16"
          >
            <h3 className="font-['Archivo',sans-serif] text-[1.75rem] md:text-[2.25rem] text-center text-[#D52169] mb-12" style={{ fontWeight: 800 }}>
              {data.diagnostic.deliverablesTitle}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.diagnostic.deliverables.map((del: any, idx: number) => (
                <div key={idx} className="bg-white  p-8 border border-[#28292D]/5  flex flex-col items-center text-center shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#D52169]/5   text-[#D52169] flex items-center justify-center mb-6">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="font-['Archivo',sans-serif] text-[1.125rem] text-[#28292D]  mb-3" style={{ fontWeight: 700 }}>
                    {del.title}
                  </h4>
                  <p className="font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D]/60   leading-[1.6]" style={{ fontWeight: 400 }}>
                    {del.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-12 text-center lg:hidden">
            <CTAButton href="#form">
              {data.diagnostic.ctaButton} <ArrowRight size={18} />
            </CTAButton>
          </div>
        </div>
      </section >

      {/* SECTION 7: CTA FINAL & FORMULARIO */}
      < section
        id="form"
        className="py-24 md:py-32 px-6 lg:px-12 bg-[#28292D]  text-white relative transition-colors duration-500 overflow-hidden"
        style={{ boxShadow: "inset 0 0 100px 20px rgba(213, 33, 105, 0.03)" }
        }
      >
        <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-[#D52169]/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D52169] opacity-[0.02] rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            id="contacto-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Bodoni+Moda',serif] text-[2.5rem] md:text-[4rem] leading-[1.0] tracking-[-0.03em] text-white mb-8" style={{ fontWeight: 900 }}>
              {data.cta.title1} <span className="text-[#D52169] font-black">{data.cta.titleHighlight}</span><br />
              {data.cta.title2}
            </h2>
            <p className="font-['Archivo',sans-serif] text-[1.125rem] text-white/70 leading-[1.6] mb-12 max-w-[550px]" style={{ fontWeight: 400 }}>
              {data.cta.description}
            </p>

            <div className="space-y-8 mb-16">
              {data.cta.steps.map((step: any, idx: number) => (
                <div key={idx} className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#D52169]/10 text-[#D52169] border border-[#D52169]/25 flex items-center justify-center shrink-0 font-bold font-['Archivo',sans-serif]">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-['Archivo',sans-serif] text-[1rem] text-white mb-1.5" style={{ fontWeight: 700 }}>
                      {step.title}
                    </h4>
                    <p className="font-['Archivo',sans-serif] text-[0.875rem] text-white/50 leading-[1.5]" style={{ fontWeight: 400 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="mb-12">
              <motion.a
                href={data.cta.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-all cursor-pointer font-['Archivo',sans-serif]"
                style={{ fontWeight: 500 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span>{data.cta.whatsappLabel}</span>
              </motion.a>
            </div>

            {/* Service Brand Overlay */}
            <div className="pt-8 border-t border-white/10 flex items-center gap-6">
              <a href="/" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2">
                  <LogoCompact className="w-full h-full text-black" />
                </div>
                <div>
                  <p className="font-['Archivo',sans-serif] text-[0.75rem] text-white/40 uppercase tracking-widest" style={{ fontWeight: 700 }}>
                    {data.cta.serviceBy}
                  </p>
                  <p className="font-['Archivo',sans-serif] text-[1.125rem] text-white group-hover:text-[#D52169] transition-colors" style={{ fontWeight: 900 }}>
                    Kier Studio
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            id="contacto-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white  text-[#28292D]   p-8 md:p-12 shadow-2xl"
          >
            <h3 className="font-['Archivo',sans-serif] text-[1.5rem] text-[#28292D]  mb-8" style={{ fontWeight: 700 }}>
              {data.cta.formTitle}
            </h3>

            <form id="contacto-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D]   mb-2" style={{ fontWeight: 600 }}>
                  {data.cta.formName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={data.cta.formNamePlaceholder}
                  className="w-full bg-[#F5F5F5]    focus:border-[#D52169] outline-none px-4 py-3 text-[#28292D]     transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D]    mb-2" style={{ fontWeight: 600 }}>
                  {data.cta.formEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={data.cta.formEmailPlaceholder}
                  className="w-full bg-[#F5F5F5]  focus:border-[#D52169] outline-none px-4 py-3 text-[#28292D]    transition-colors"
                />
              </div>

              <div>
                <label htmlFor="website" className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D]    mb-2" style={{ fontWeight: 600 }}>
                  {data.cta.formWebsite}
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  required
                  placeholder={data.cta.formWebsitePlaceholder}
                  className="w-full bg-[#F5F5F5]     focus:border-[#D52169] outline-none px-4 py-3 text-[#28292D]     transition-colors"
                />
              </div>

              <div>
                <label htmlFor="challenge" className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D]   mb-2" style={{ fontWeight: 600 }}>
                  {data.cta.formChallenge}
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={3}
                  placeholder={data.cta.formChallengePlaceholder}
                  className="w-full bg-[#F5F5F5]   focus:border-[#D52169] outline-none px-4 py-3 text-[#28292D]   transition-colors resize-none"
                />
              </div>

              <AnimatePresence>
                {result && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`flex items-start gap-2.5 text-[0.875rem] font-medium leading-[1.4] ${result.type === "success" ? "text-green-600 " : "text-red-600 "}`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {result.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                    </div>
                    <span>{result.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitting}
                className="w-full bg-[#D52169] text-white border-2 border-black py-4 font-['Archivo',sans-serif] text-[0.875rem] tracking-[0.1em] uppercase hover:bg-[#28292D] transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                style={{ fontWeight: 700 }}
              >
                {submitting ? (
                  <><Loader2 className="animate-spin" size={18} /> {data.cta.formProcessing}</>
                ) : (
                  <>{data.cta.formSubmit} <ArrowRight size={18} /></>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section >

    </div >
  );
}
