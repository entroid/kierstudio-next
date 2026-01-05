"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, Mail, Phone, CheckCircle, XCircle, Instagram, Loader2 } from "lucide-react";
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
        if (!projectType || projectType === "") {
            setResult({ type: "error", message: t('cta.formValidation.projectRequired') });
            setSubmitting(false);
            return;
        }
        if (!message.trim()) {
            setResult({ type: "error", message: t('cta.formValidation.messageRequired') });
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
                    access_key: "6262442e-161b-4340-9856-4277c0d7ace1", // Public Web3Forms key
                    name,
                    email,
                    projectType,
                    message,
                    subject: `New Project Inquiry from ${name}`,
                    from_name: "Kier Studio Website",
                }),
            });

            const json = await response.json();

            if (response.status === 200) {
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
                                className="font-['Archivo',sans-serif] text-[3.5rem] md:text-[6rem] lg:text-[7rem] leading-[0.85] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8 uppercase"
                                style={{ fontWeight: 900 }}
                            >
                                {t('cta.title1')}
                                <br />
                                <span className="text-[#D52169]">{t('cta.title2')}</span>
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
                                    <Mail className="text-[#28292D] dark:text-white group-hover:text-white" size={20} />
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
                                    <Phone
                                        className="text-[#28292D] dark:text-white group-hover:text-white"
                                        size={20}
                                    />
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
                                    <Instagram
                                        className="text-[#28292D] dark:text-white group-hover:text-white"
                                        size={20}
                                    />
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

                            <div>
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
                                    className="w-full bg-white dark:bg-black border border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] outline-none px-4 py-3 text-[#28292D] dark:text-white transition-colors"
                                >
                                    <option value="" disabled selected>
                                        {t('cta.formProjectPlaceholder')}
                                    </option>
                                    <option value="SaaS">{t('cta.formProjectOptions.saas')}</option>
                                    <option value="Website">{t('cta.formProjectOptions.website')}</option>
                                    <option value="E-commerce">{t('cta.formProjectOptions.ecommerce')}</option>
                                    <option value="Mobile App">{t('cta.formProjectOptions.mobileApp')}</option>
                                    <option value="UX/UI">{t('cta.formProjectOptions.uxui')}</option>
                                    <option value="Other">{t('cta.formProjectOptions.other')}</option>
                                </select>
                            </div>

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
