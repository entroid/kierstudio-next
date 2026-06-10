"use client";

import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { CTAButton } from "@/components/cta/CTAButton";
import { ArrowRight } from "lucide-react";

// Client component that adds animations on top of server-rendered content
// Uses CSS animations or Framer Motion for entrance effects
export function HeroAnimated() {
    const { t } = useLanguage();

    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center py-16 md:pb-0 pt-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
        >
            <div className="mx-auto w-full">
                <div className="grid lg:grid-cols-2 min-h-[calc(100vh-6rem)]">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative bg-white dark:bg-black overflow-hidden min-h-[200px] sm:min-h-[240px] md:min-h-[280px]"
                    >
                        <div className="absolute inset-0">
                            <video
                                className="w-full h-full object-cover object-right opacity-80"
                                poster="/hero-img.jpg"
                                src="/kierstudio-hero.webm"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex items-center justify-center px-6 lg:px-20 bg-white dark:bg-[#0a0a0a]"
                        style={{ boxShadow: "inset 0 0 50px 20px rgba(255, 215, 0, 0.17)" }}
                    >
                        <div className="max-w-[700px]">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mb-4"
                            >
                                <span
                                    className="font-['Archivo',sans-serif] text-[0.72rem] line-height-[0.75rem] tracking-[0.1em] uppercase text-[#28292D]/60 dark:text-white/60 block italic"
                                    style={{ fontWeight: 600 }}
                                >
                                    {t('hero.location')}
                                </span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mb-4"
                            >
                                <h1
                                    className="font-['Archivo',sans-serif] text-[14vw] line-height-[14vw] sm:text-[12vw] sm:line-height-[12vw] md:text-[5.875rem] md:line-height-[5.875rem] xl:text-[6.875rem] xl:line-height-[6.875rem] leading-[0.85] tracking-[-0.03em] text-[#28292D] dark:text-white"
                                    style={{ fontWeight: 900 }}
                                >
                                    {t('hero.title')}
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="mb-8"
                            >
                                <h2
                                    className="font-['Archivo',sans-serif] text-[1.5rem] md:text-[1.5rem] leading-[1.2] text-[#28292D] dark:text-white/90 mb-4"
                                    style={{ fontWeight: 600 }}
                                >
                                    {t('hero.subtitle')}
                                </h2>

                                <p
                                    className="font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] text-[#28292D]/70 dark:text-white/60 leading-[1.7]"
                                    style={{ fontWeight: 400 }}
                                >
                                    {t('hero.description')}
                                    <b>{t('hero.descriptionBoldText')}</b>
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <CTAButton href="#contacto" variant="primary" className="shadow-xl">
                                    {t('hero.ctaTalk')} <ArrowRight size={18} />
                                </CTAButton>
                                <CTAButton href="#proyectos" variant="secondary">
                                    {t('hero.ctaWork')}
                                </CTAButton>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
