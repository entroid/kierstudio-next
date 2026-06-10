"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, Mail, Phone, CheckCircle, XCircle, Camera, Loader2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function CTAAnimated() {
    const { t } = useLanguage();
    const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setResult(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Client-side validation
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const projectType = formData.get("projectType") as string;
        const message = formData.get("message") as string;

        if (!name.trim()) {
            setResult({ type: "error", message: t('cta.formValidation.nameRequired') });
            setSubmitting(false);
            return;
        }
        if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
            setResult({ type: "error", message: t('cta.formValidation.emailInvalid') });
            setSubmitting(false);
            return;
        }
        /* if (!projectType || projectType === "") {
            setResult({ type: "error", message: t('cta.formValidation.projectRequired') });
            setSubmitting(false);
            return;
        } */
        if (!message.trim()) {
            setResult({ type: "error", message: t('cta.formValidation.messageRequired') });
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
                    projectType,
                    message,
                    _subject: `New Project Inquiry from ${name}`,
                    _template: "table",
                }),
            });

            const json = await response.json();

            if (response.ok) {
                setResult({ type: "success", message: t('cta.formSuccess.message') });
                form.reset();
            } else {
                setResult({ type: "error", message: json.message || t('cta.formError.message') });
            }
        } catch (error) {
            console.error(error);
            setResult({ type: "error", message: t('cta.formError.message') });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="contacto"
            className="py-16 md:py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
            style={{ boxShadow: "inset 0 0 50px 20px rgba(255, 215, 0, 0.18)" }}
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-12">
                            <span
                                className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
                                style={{ fontWeight: 600 }}
                            >
                                {t('cta.tag')}
                            </span>

                            <h2
                                className="font-['Archivo',sans-serif] text-[2rem] md:text-[4.5rem] lg:text-[5.2rem] leading-[1.1] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8 uppercase"
                                style={{ fontWeight: 900 }}
                            >
                                {t('cta.title1')}
                                <br />
                                <span className="text-[#D52169] text-[2.5rem] md:text-[5.5rem] lg:text-[6.5rem]">{t('cta.title2')}</span>
                            </h2>

                            <p
                                className="font-['Archivo',sans-serif] text-[1.125rem] md:text-[1.5rem] text-[#28292D] dark:text-white/90 leading-[1.4]"
                                style={{ fontWeight: 600 }}
                            >
                                {t('cta.subtitle')}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <motion.a
                                href="mailto:kierstudio.info@gmail.com"
                                whileHover={{ x: 10 }}
                                className="group flex items-center gap-4 p-6 border border-[#28292D]/10 dark:border-white/10 hover:border-[#D52169] transition-colors duration-300 backdrop-blur-sm"
                            >
                                <div className="w-12 h-12 bg-[#28292D]/5 dark:bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#D52169] transition-colors duration-300">
                                    <Mail className="text-[#28292D] dark:text-white group-hover:text-white" size={24} />
                                </div>
                                <div>
                                    <div
                                        className="font-['Archivo',sans-serif] text-[0.75rem] tracking-[0.1em] uppercase text-[#28292D]/50 dark:text-white/50 mb-1"
                                        style={{ fontWeight: 600 }}
                                    >
                                        {t('cta.emailLabel')}
                                    </div>
                                    <div
                                        className="font-['Archivo',sans-serif] text-[1.125rem] text-[#28292D] dark:text-white"
                                        style={{ fontWeight: 500 }}
                                    >
                                        kierstudio.info@gmail.com
                                    </div>
                                </div>
                            </motion.a>

                            <motion.a
                                href="https://wa.me/5493417211814"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 10 }}
                                className="group flex items-center gap-4 p-6 border border-[#28292D]/10 dark:border-white/10 hover:border-[#D52169] transition-colors duration-300 backdrop-blur-sm"
                            >
                                <div className="w-12 h-12 bg-[#28292D]/5 dark:bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#D52169] transition-colors duration-300">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#28292D] dark:text-white group-hover:text-white">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div>
                                    <div
                                        className="font-['Archivo',sans-serif] text-[0.75rem] tracking-[0.1em] uppercase text-[#28292D]/50 dark:text-white/50 mb-1"
                                        style={{ fontWeight: 600 }}
                                    >
                                        {t('cta.whatsappLabel')}
                                    </div>
                                    <div
                                        className="font-['Archivo',sans-serif] text-[1.125rem] text-[#28292D] dark:text-white"
                                        style={{ fontWeight: 500 }}
                                    >
                                        +54 9 341 721 1814
                                    </div>
                                </div>
                            </motion.a>

                            <motion.a
                                href="https://www.instagram.com/kierstudio_"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 10 }}
                                className="group flex items-center gap-4 p-6 border border-[#28292D]/10 dark:border-white/10 hover:border-[#D52169] transition-colors duration-300 backdrop-blur-sm"
                            >
                                <div className="w-12 h-12 bg-[#28292D]/5 dark:bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#D52169] transition-colors duration-300">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#28292D] dark:text-white group-hover:text-white">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                                <div>
                                    <div
                                        className="font-['Archivo',sans-serif] text-[0.75rem] tracking-[0.1em] uppercase text-[#28292D]/50 dark:text-white/50 mb-1"
                                        style={{ fontWeight: 600 }}
                                    >
                                        {t('cta.instagramLabel')}
                                    </div>
                                    <div
                                        className="font-['Archivo',sans-serif] text-[1.125rem] text-[#28292D] dark:text-white"
                                        style={{ fontWeight: 500 }}
                                    >
                                        @kierstudio_
                                    </div>
                                </div>
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#F5F5F5] dark:bg-[#1a1a1a] p-8 md:p-12"
                    >
                        <h3
                            className="font-['Archivo',sans-serif] text-[1.5rem] text-[#28292D] dark:text-white mb-8"
                            style={{ fontWeight: 700 }}
                        >
                            {t('cta.formTitle')}
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D] dark:text-white mb-2"
                                    style={{ fontWeight: 600 }}
                                >
                                    {t('cta.formName')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder={t('cta.formNamePlaceholder')}
                                    className="w-full bg-white dark:bg-black border border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] outline-none px-4 py-3 text-[#28292D] dark:text-white transition-colors"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D] dark:text-white mb-2"
                                    style={{ fontWeight: 600 }}
                                >
                                    {t('cta.formEmail')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder={t('cta.formEmailPlaceholder')}
                                    className="w-full bg-white dark:bg-black border border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] outline-none px-4 py-3 text-[#28292D] dark:text-white transition-colors"
                                />
                            </div>

                            {/* <div>
                                <label
                                    htmlFor="projectType"
                                    className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D] dark:text-white mb-2"
                                    style={{ fontWeight: 600 }}
                                >
                                    {t('cta.formProject')}
                                </label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    defaultValue=""
                                    className="w-full bg-white dark:bg-black border border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] outline-none px-4 py-3 text-[#28292D] dark:text-white transition-colors"
                                >
                                    <option value="" disabled>
                                        {t('cta.formProjectPlaceholder')}
                                    </option>
                                    <option value="SaaS">{t('cta.formProjectOptions.saas')}</option>
                                    <option value="Website">{t('cta.formProjectOptions.website')}</option>
                                    <option value="E-commerce">{t('cta.formProjectOptions.ecommerce')}</option>
                                    <option value="Mobile App">{t('cta.formProjectOptions.mobileApp')}</option>
                                    <option value="UX/UI">{t('cta.formProjectOptions.uxui')}</option>
                                    <option value="Other">{t('cta.formProjectOptions.other')}</option>
                                </select>
                            </div> */}

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D] dark:text-white mb-2"
                                    style={{ fontWeight: 600 }}
                                >
                                    {t('cta.formMessage')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder={t('cta.formMessagePlaceholder')}
                                    className="w-full bg-white dark:bg-black border border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] outline-none px-4 py-3 text-[#28292D] dark:text-white transition-colors resize-none"
                                />
                            </div>

                            <AnimatePresence>
                                {result && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`flex items-center gap-2 text-[0.875rem] font-medium ${result.type === "success" ? "text-green-500" : "text-red-500"
                                            }`}
                                    >
                                        {result.type === "success" ? (
                                            <CheckCircle size={16} />
                                        ) : (
                                            <XCircle size={16} />
                                        )}
                                        {result.message}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={submitting}
                                className="w-full bg-[#D52169] text-white py-4 font-['Archivo',sans-serif] text-[0.875rem] tracking-[0.1em] uppercase hover:bg-[#28292D] transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
                                style={{ fontWeight: 700 }}
                            >
                                {submitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={18} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        {t('cta.formSubmit')} <ArrowRight size={18} />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
