"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Mail, Phone, CheckCircle, XCircle, Instagram, Loader2 } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function CTA() {
  const { t } = useLanguage();
  const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  return (
    <section
      id="contacto"
      className="py-16 md:py-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-500"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: [null, 100, -100],
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute h-[2px] w-32 bg-[#D52169]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="font-['Archivo',sans-serif] text-[11px] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
              style={{ fontWeight: 600 }}
            >
              {t('cta.tag')}
            </span>

            <h2
              className="font-['Archivo',sans-serif] text-[56px] md:text-[96px] lg:text-[100px] leading-[1] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8"
              style={{ fontWeight: 900 }}
            >
              {t('cta.title1')}
              <br />
              <span className="text-[#D52169]">{t('cta.title2')}</span>
            </h2>

            <p
              className="font-['Archivo',sans-serif] text-[18px] md:text-[24px] text-[#28292D]/70 dark:text-white/70 leading-[1.6] mb-12 max-w-[600px]"
              style={{ fontWeight: 400 }}
            >
              {t('cta.subtitle')}
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              <motion.a
                href="mailto:kierstudio.info@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#D52169] group-hover:bg-[#28292D] rounded-full flex items-center justify-center transition-colors">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p
                    className="font-['Archivo',sans-serif] text-[11px] tracking-[0.2em] uppercase text-[#28292D]/50 dark:text-white/50"
                    style={{ fontWeight: 600 }}
                  >
                    {t('cta.emailLabel')}
                  </p>
                  <p
                    className="font-['Archivo',sans-serif] text-[18px] text-[#28292D] dark:text-white"
                    style={{ fontWeight: 600 }}
                  >
                    kierstudio.info@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/5493417211814?text=Hi%20Kier%20Studio.%20I%20am%20contacting%20through%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#25D366] group-hover:bg-[#1ea955] rounded-full flex items-center justify-center transition-colors">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p
                    className="font-['Archivo',sans-serif] text-[11px] tracking-[0.2em] uppercase text-[#28292D]/50 dark:text-white/50"
                    style={{ fontWeight: 600 }}
                  >
                    {t('cta.whatsappLabel')}
                  </p>
                  <p
                    className="font-['Archivo',sans-serif] text-[18px] text-[#28292D] dark:text-white"
                    style={{ fontWeight: 600 }}
                  >
                    +54 9 341 7211814
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/kierstudio_"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#D52169] group-hover:bg-[#28292D] rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="text-white" size={20} />
                </div>
                <div>
                  <p
                    className="font-['Archivo',sans-serif] text-[11px] tracking-[0.2em] uppercase text-[#28292D]/50 dark:text-white/50"
                    style={{ fontWeight: 600 }}
                  >
                    {t('cta.instagramLabel')}
                  </p>
                  <p
                    className="font-['Archivo',sans-serif] text-[18px] text-[#28292D] dark:text-white"
                    style={{ fontWeight: 600 }}
                  >
                    @kierstudio_
                  </p>
                </div>
              </motion.a>
            </div>

            {/* CTA Buttons (temporarily hidden) */}
            <div className="hidden flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D52169] text-white px-10 py-5 font-['Archivo',sans-serif] text-[13px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#28292D] flex items-center justify-center gap-3 group cursor-pointer"
                style={{ fontWeight: 700 }}
              >
                Schedule a Call
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-[#28292D] dark:text-white border-2 border-[#28292D] dark:border-white px-10 py-5 hover:bg-[#28292D] dark:hover:bg-white hover:text-white dark:hover:text-[#28292D] font-['Archivo',sans-serif] text-[13px] tracking-[0.1em] uppercase transition-all duration-300 cursor-pointer"
                style={{ fontWeight: 700 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-[#F5F5F5] dark:bg-[#1a1a1a] p-10 lg:p-12 rounded-xl border border-[#28292D]/5 dark:border-white/5"
          >
            <h3
              className="font-['Archivo',sans-serif] text-[32px] md:text-[42px] text-[#28292D] dark:text-white mb-8"
              style={{ fontWeight: 800 }}
            >
              {t('cta.formTitle')}
            </h3>

            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                if (!form.checkValidity()) {
                  const firstInvalid = form.querySelector(":invalid") as HTMLElement | null;
                  if (firstInvalid) {
                    firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
                    (firstInvalid as HTMLElement).focus();
                  }
                  return;
                }
                try {
                  setSubmitting(true);
                  const data = new FormData(form);
                  const res = await fetch("https://formsubmit.co/ajax/kierstudio.info@gmail.com", {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: data,
                  });
                  const json = await res.json().catch(() => ({}) as any);
                  if (res.ok) {
                    setResult({
                      type: "success",
                      message: t('cta.formSuccess.message'),
                    });
                    form.reset();
                  } else {
                    setResult({
                      type: "error",
                      message: (json && (json.message || json.error)) || t('cta.formError.message'),
                    });
                  }
                } catch (err) {
                  setResult({ type: "error", message: t('cta.formError.message') });
                }
              }}
            >
              <input type="hidden" name="_subject" value="New message from Kier Studio website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="text"
                name="_honey"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <div>
                <label
                  htmlFor="name"
                  className="font-['Archivo',sans-serif] text-[11px] tracking-[0.15em] uppercase text-[#28292D]/70 dark:text-white/70 mb-2 block"
                  style={{ fontWeight: 600 }}
                >
                  {t('cta.formName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white dark:bg-[#28292D] border-2 border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] px-5 py-4 font-['Archivo',sans-serif] text-[14px] text-[#28292D] dark:text-white outline-none transition-colors"
                  required
                  onInvalid={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.setCustomValidity(target.validity.valueMissing ? t('cta.formValidation.nameRequired') : "");
                  }}
                  onInput={(e) => (e.currentTarget as HTMLInputElement).setCustomValidity("")}
                  placeholder={t('cta.formNamePlaceholder')}
                  style={{ fontWeight: 400 }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="font-['Archivo',sans-serif] text-[11px] tracking-[0.15em] uppercase text-[#28292D]/70 dark:text-white/70 mb-2 block"
                  style={{ fontWeight: 600 }}
                >
                  {t('cta.formEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white dark:bg-[#28292D] border-2 border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] px-5 py-4 font-['Archivo',sans-serif] text-[14px] text-[#28292D] dark:text-white outline-none transition-colors"
                  required
                  onInvalid={(e) => {
                    const target = e.target as HTMLInputElement;
                    const msg = target.validity.valueMissing
                      ? t('cta.formValidation.emailRequired')
                      : target.validity.typeMismatch
                        ? t('cta.formValidation.emailInvalid')
                        : "";
                    target.setCustomValidity(msg);
                  }}
                  onInput={(e) => (e.currentTarget as HTMLInputElement).setCustomValidity("")}
                  placeholder={t('cta.formEmailPlaceholder')}
                  style={{ fontWeight: 400 }}
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="font-['Archivo',sans-serif] text-[11px] tracking-[0.15em] uppercase text-[#28292D]/70 dark:text-white/70 mb-2 block"
                  style={{ fontWeight: 600 }}
                >
                  {t('cta.formProject')}
                </label>
                <select
                  id="project"
                  name="project"
                  className="w-full bg-white dark:bg-[#28292D] border-2 border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] px-5 py-4 font-['Archivo',sans-serif] text-[14px] text-[#28292D] dark:text-white outline-none transition-colors"
                  required
                  defaultValue=""
                  onInvalid={(e) => {
                    const target = e.target as HTMLSelectElement;
                    target.setCustomValidity(
                      target.validity.valueMissing ? t('cta.formValidation.projectRequired') : "",
                    );
                  }}
                  onInput={(e) => (e.currentTarget as HTMLSelectElement).setCustomValidity("")}
                  style={{ fontWeight: 400 }}
                >
                  <option value="" disabled>
                    {t('cta.formProjectPlaceholder')}
                  </option>
                  <option>{t('cta.formProjectOptions.saas')}</option>
                  <option>{t('cta.formProjectOptions.website')}</option>
                  <option>{t('cta.formProjectOptions.ecommerce')}</option>
                  <option>{t('cta.formProjectOptions.mobileApp')}</option>
                  <option>{t('cta.formProjectOptions.uxui')}</option>
                  <option>{t('cta.formProjectOptions.other')}</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-['Archivo',sans-serif] text-[11px] tracking-[0.15em] uppercase text-[#28292D]/70 dark:text-white/70 mb-2 block"
                  style={{ fontWeight: 600 }}
                >
                  {t('cta.formMessage')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-white dark:bg-[#28292D] border-2 border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] px-5 py-4 font-['Archivo',sans-serif] text-[14px] text-[#28292D] dark:text-white outline-none transition-colors resize-none"
                  required
                  onInvalid={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.setCustomValidity(target.validity.valueMissing ? t('cta.formValidation.messageRequired') : "");
                  }}
                  onInput={(e) => (e.currentTarget as HTMLTextAreaElement).setCustomValidity("")}
                  placeholder={t('cta.formMessagePlaceholder')}
                  style={{ fontWeight: 400 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitting}
                aria-busy={submitting}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#D52169] text-white px-10 py-5 font-[' Archivo',sans-serif] text-[13px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#28292D] flex items-center justify-center gap-3 group cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontWeight: 700 }}
              >
                {t('cta.formSubmit')}
                {submitting ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                )}
              </motion.button>
            </form>
            {result && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-20">
                <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-8 max-w-md mx-auto text-center border border-[#28292D]/10 dark:border-white/10">
                  {result.type === "success" ? (
                    <CheckCircle className="text-[#22c55e] w-12 h-12 mx-auto mb-4" />
                  ) : (
                    <XCircle className="text-[#ef4444] w-12 h-12 mx-auto mb-4" />
                  )}
                  <h4
                    className="font-['Archivo',sans-serif] text-[20px] text-[#28292D] dark:text-white mb-2"
                    style={{ fontWeight: 700 }}
                  >
                    {result.type === "success"
                      ? t('cta.formSuccess.title')
                      : t('cta.formError.title')}
                  </h4>
                  <p
                    className="font-['Archivo',sans-serif] text-[14px] text-[#28292D]/70 dark:text-white/70 mb-6"
                    style={{ fontWeight: 400 }}
                  >
                    {result.message}
                  </p>
                  <button
                    onClick={() => {
                      setResult(null);
                      setSubmitting(false);
                    }}
                    className="bg-[#D52169] text-white px-6 py-3 font-['Archivo',sans-serif] text-[12px] tracking-[0.1em] uppercase rounded-md hover:bg-[#28292D] transition-colors"
                    style={{ fontWeight: 700 }}
                    type="button"
                  >
                    {t('cta.close')}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
