"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { LogoCompact } from "@/components/Logo";

export interface LandingCTAProps {
  title1: string;
  titleHighlight: string;
  title2: string;
  description: string;
  steps: { title: string; description: string }[];
  serviceBy: string;
  formTitle: string;
  formName: string;
  formNamePlaceholder: string;
  formEmail: string;
  formEmailPlaceholder: string;
  formWebsite: string;
  formWebsitePlaceholder: string;
  formChallenge: string;
  formChallengePlaceholder: string;
  formSubmit: string;
  formProcessing: string;
  formSuccess: string;
  formError: string;
  formValidationRequired: string;
  whatsappLabel: string;
  whatsappLink: string;
}

export function LandingCTA(props: LandingCTAProps) {
  const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

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

    if (!name.trim() || !email.trim() || !website.trim()) {
      setResult({ type: "error", message: props.formValidationRequired });
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6262442e-161b-4340-9856-4277c0d7ace1",
          name,
          email,
          website,
          challenge,
          subject: `Landing Page Diagnostic Request: ${name}`,
          from_name: "Kier Studio Landing Page",
        }),
      });

      const json = await response.json();

      if (response.status === 200) {
        setResult({ type: "success", message: props.formSuccess });
        form.reset();
      } else {
        setResult({ type: "error", message: json.message || props.formError });
      }
    } catch (error) {
      console.error(error);
      setResult({ type: "error", message: props.formError });
    } finally {
      setSubmitting(false);
    }
  };

  // SECTION: LANDING CTA
  return (
    <section id="form" data-section="CTA" className="py-24 md:py-32 bg-[#28292D] dark:bg-black transition-colors duration-500 overflow-hidden relative" style={{ boxShadow: "inset 0 0 100px 20px rgba(213, 33, 105, 0.05)" }}>
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#D52169]/10 to-transparent pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-['Archivo',sans-serif] text-[3rem] md:text-[5rem] leading-[0.9] tracking-[-0.03em] text-white mb-8 uppercase" style={{ fontWeight: 900 }}>
              {props.title1}<br />
              <span className="text-[#D52169]">{props.titleHighlight}</span><br />
              {props.title2}
            </h2>
            <p className="font-['Archivo',sans-serif] text-[1.125rem] text-white/70 leading-[1.6] mb-8 max-w-[500px]" style={{ fontWeight: 400 }}>
              {props.description}
            </p>

            <div className="space-y-6">
              {props.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D52169]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#D52169] font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-['Archivo',sans-serif] text-[1rem] text-white mb-1" style={{ fontWeight: 700 }}>{step.title}</h4>
                    <p className="font-['Archivo',sans-serif] text-[0.875rem] text-white/50" style={{ fontWeight: 400 }}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 btn">
              <motion.a
                href={props.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 text-white transition-colors mb-12 font-['Archivo',sans-serif] text-[1rem]"
                style={{ fontWeight: 400 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/20  text-[#25D366] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                {props.whatsappLabel}
              </motion.a>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-6">
              <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2">
                  <LogoCompact className="w-full h-full text-black" />
                </div>
                <div>
                  <p className="font-['Archivo',sans-serif] text-[0.75rem] text-white/50 uppercase tracking-widest" style={{ fontWeight: 700 }}>{props.serviceBy}</p>
                  <p className="font-['Archivo',sans-serif] text-[1rem] text-white group-hover:text-[#D52169] transition-colors" style={{ fontWeight: 900 }}>Kier Studio</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white dark:bg-[#1a1a1a] p-8 md:p-12 shadow-2xl">
            <h3 className="font-['Archivo',sans-serif] text-[1.5rem] text-[#28292D] dark:text-white mb-8" style={{ fontWeight: 700 }}>
              {props.formTitle}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D] dark:text-white mb-2" style={{ fontWeight: 600 }}>
                  {props.formName}
                </label>
                <input type="text" id="name" name="name" placeholder={props.formNamePlaceholder} className="w-full bg-[#F5F5F5] dark:bg-black border border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] outline-none px-4 py-3 text-[#28292D] dark:text-white transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D] dark:text-white mb-2" style={{ fontWeight: 600 }}>
                  {props.formEmail}
                </label>
                <input type="email" id="email" name="email" placeholder={props.formEmailPlaceholder} className="w-full bg-[#F5F5F5] dark:bg-black border border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] outline-none px-4 py-3 text-[#28292D] dark:text-white transition-colors" />
              </div>
              <div>
                <label htmlFor="website" className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D] dark:text-white mb-2" style={{ fontWeight: 600 }}>
                  {props.formWebsite}
                </label>
                <input type="url" id="website" name="website" placeholder={props.formWebsitePlaceholder} className="w-full bg-[#F5F5F5] dark:bg-black border border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] outline-none px-4 py-3 text-[#28292D] dark:text-white transition-colors" />
              </div>
              <div>
                <label htmlFor="challenge" className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D] dark:text-white mb-2" style={{ fontWeight: 600 }}>
                  {props.formChallenge}
                </label>
                <textarea id="challenge" name="challenge" rows={3} placeholder={props.formChallengePlaceholder} className="w-full bg-[#F5F5F5] dark:bg-black border border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] outline-none px-4 py-3 text-[#28292D] dark:text-white transition-colors resize-none" />
              </div>
              <AnimatePresence>
                {result && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className={`flex items-center gap-2 text-[0.875rem] font-medium ${result.type === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                    {result.type === "success" ? <CheckCircle size={16} /> : <XCircle size={16} />}
                    {result.message}
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={submitting} className="w-full bg-[#D52169] text-white py-4 font-['Archivo',sans-serif] text-[0.875rem] tracking-[0.1em] uppercase hover:bg-[#28292D] transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer" style={{ fontWeight: 700 }}>
                {submitting ? (
                  <><Loader2 className="animate-spin" size={18} /> {props.formProcessing}</>
                ) : (
                  <>{props.formSubmit} <ArrowRight size={18} /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
