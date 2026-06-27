"use client";

import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { CTAButton } from "@/components/cta/CTAButton";
import { ArrowRight } from "lucide-react";

export function AboutAnimated() {
    const { t, translations } = useLanguage();

    return (
        <section id="about" className="pt-16 md:pt-32 pb-16 md:pb-32  bg-[#F5F5F5] dark:bg-[#0f0f0f] transition-colors duration-500">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span
                        className="font-['Archivo',sans-serif] text-[12px] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
                        style={{ fontWeight: 600 }}
                    >
                        {t('about.tag')}
                    </span>

                    <h2
                        className="font-['Archivo',sans-serif] text-[2.5rem] md:text-[5rem] lg:text-[6rem] leading-[1.1] tracking-[-0.03em] text-[#28292D] dark:text-white mb-8 uppercase"
                        style={{ fontWeight: 900 }}
                    >
                        {t('about.title1')}
                        <br />
                        <span className="text-[#D52169] text-[2.5rem] md:text-[6rem] lg:text-[7.3rem]">{t('about.title2')} </span>
                        {/* {t('about.title3')} */}
                    </h2>

                    <h3 className="pb-8  text-[1.125rem] md:text-[1.5rem]"><b>{t('about.description1Tag')}</b></h3>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-[1170px]">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <p
                                className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7] mb-4"
                                style={{ fontWeight: 400 }}
                            >
                                {t('about.description1')}
                            </p>

                            <p
                                className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7]"
                                style={{ fontWeight: 400 }}
                            >
                                {t('about.description1b').split(t('about.description1Bold'))[0]}
                                <b>{t('about.description1Bold')}</b>
                                {t('about.description1').split(t('about.description1Bold'))[1]}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <p
                                className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7]"
                                style={{ fontWeight: 400 }}
                            >
                                {t('about.description2')}
                            </p>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="md:col-start-2"
                        >
                            <p
                                className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7] mb-10"
                                style={{ fontWeight: 600 }}
                            >
                                {t('about.description3')}
                            </p>

                            <h4
                                className="font-['Archivo',sans-serif] text-[18px] md:text-[20px] uppercase text-[#D52169] mb-2"
                                style={{ fontWeight: 700 }}
                            >
                                {translations.about.benefitsTitle}
                            </h4>

                            <ul className="flex flex-col gap-4 mb-4">
                                {translations.about.benefits.map((benefit: string, index: number) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                                        className="font-['Archivo',sans-serif] text-[15px] md:text-[16px] text-[#28292D]/80 dark:text-white/80 leading-[1.5] flex items-start gap-3"
                                        style={{ fontWeight: 500 }}
                                    >
                                        <span className="text-[#D52169] text-[16px] md:text-[18px] select-none flex-shrink-0">✦</span>
                                        <span>{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>



                            <CTAButton href="#contacto" alt={t('about.ctaText')} className="mt-8">{t('about.ctaText')} <ArrowRight size={18} /></CTAButton>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
