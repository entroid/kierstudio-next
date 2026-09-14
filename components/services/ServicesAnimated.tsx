"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useRef } from "react";
import { useLanguage } from "../LanguageContext";
import { CTAButton } from "@/components/cta/CTAButton";
import { ArrowRight } from "lucide-react";

export function ServicesAnimated() {
    const { t, translations } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    const { scrollYProgress: titleProgress } = useScroll({
        target: titleRef,
        offset: ["start 100%", "start 70%"],
    });
    const titleOpacity = useTransform(titleProgress, [0, 1], [0, 1]);

    // El orden es el argumento: primero lo que la consultora vende —automatizar
    // y construir a medida—, después la presencia digital. El fondo alterna
    // claro/oscuro según la posición, así que reordenar no rompe el ritmo.
    const fondos = ["bg-[#F5F5F5] dark:bg-[#1a1a1a]", "bg-[#28292D] dark:bg-black"];
    const services = ([
        { key: "automation", image: "/services/automatizacion.png" },
        { key: "customapp", image: "/services/0000.jpg" },
        { key: "strategy", image: "/services/02.jpg" },
        // Sitio y tienda online son un solo servicio: la tienda va adentro.
        { key: "websites", image: "/services/01.png" },
    ] as const).map(({ key, image }, index) => ({
        title: t(`services.${key}.title`),
        subtitle: t(`services.${key}.subtitle`),
        image,
        services: translations.services[key].items,
        tag: t(`services.${key}.tag`),
        bgColor: fondos[index % 2],
    }));

    return (
        <section
            ref={sectionRef}
            id="servicios"
            className="py-16 md:pt-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-500"
        >
            <motion.div
                style={{ opacity: titleOpacity }}
                className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#D52169]/5 rounded-full blur-3xl"
            />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <motion.div className="mb-20">
                    <span
                        className="etiqueta text-[0.6875rem] text-[#28292D]/60 dark:text-white/60 mb-8 block"
                    >
                        {t('services.tag')}
                    </span>

                    <motion.h2
                        ref={titleRef}
                        initial={{ y: 30 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="titulo text-[2.188rem] md:text-[4.375rem] lg:text-[4.812rem] leading-[0.85] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8 uppercase"
                        style={{ opacity: titleOpacity }}
                    >
                        {t('services.title')}
                        <br />
                        <span className="text-[#D52169] text-[2.188rem] md:text-[4.812rem] lg:text-[5.469rem]">{t('services.title2')} </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="font-archivo text-[1.125rem] md:text-[1.5rem] text-[#28292D] dark:text-white/90 max-w-[900px] leading-[1.4]"
                        style={{ fontWeight: 600 }}
                    >
                        {t('services.subtitle')}
                    </motion.p>
                </motion.div>

                <div className="space-y-0">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="grid lg:grid-cols-2 gap-0 min-h-[600px] mb-0"
                        >
                            <motion.div
                                className={`relative overflow-hidden h-full min-h-[200px] sm:min-h-[240px] md:min-h-[280px] ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
                            >
                                <ImageWithFallback
                                    src={service.image}
                                    alt={`${service.title} - ${service.tag} service by Kier Studio`}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#D52169]/30 to-transparent" />
                            </motion.div>

                            <div
                                className={`${service.bgColor} px-4 py-12 md:p-12 lg:p-16 flex flex-col justify-center transition-colors duration-500 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                                    }`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    <span
                                        className={`etiqueta text-[0.625rem] mb-8 block ${service.bgColor.includes("28292D") || service.bgColor.includes("black")
                                            ? "text-white/50"
                                            : "text-[#28292D]/50 dark:text-white/50"
                                            }`}
                                        style={{ fontWeight: 400 }}
                                    >
                                        {service.tag}
                                    </span>

                                    <h3
                                        className={`titulo text-[1.925rem] md:text-[3.5rem] lg:text-[1.859rem] xl:text-[2.406rem] leading-[1] tracking-[-0.02em] mb-6 ${service.bgColor.includes("28292D") || service.bgColor.includes("black")
                                            ? "text-white"
                                            : "text-[#28292D] dark:text-white"
                                            }`}
                                    >
                                        {service.title}
                                        {/* {service.title.split(" ").map((word, wordIndex) => (
                                            <div key={wordIndex}>
                                                <motion.div
                                                    initial={{ y: 100 }}
                                                    whileInView={{ y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.4 + wordIndex * 0.1, duration: 0.6 }}
                                                >
                                                    {word}
                                                </motion.div>
                                            </div>
                                        ))} */}
                                    </h3>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 }}
                                        className={`font-archivo text-[1rem] md:text-[1.125rem] leading-[1.7] mb-10 ${service.bgColor.includes("28292D") || service.bgColor.includes("black")
                                            ? "text-white/80"
                                            : "text-[#28292D]/70 dark:text-white/70"
                                            }`}
                                        style={{ fontWeight: 400 }}
                                    >
                                        {service.subtitle}
                                    </motion.p>

                                    <div className="grid grid-cols-2 gap-4">
                                        {service.services.map((item, itemIndex) => (
                                            <motion.div
                                                key={itemIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.7 + itemIndex * 0.1 }}
                                                className={`font-archivo text-[0.8125rem] tracking-[0.05em] flex items-center gap-2 ${service.bgColor.includes("28292D") || service.bgColor.includes("black")
                                                    ? "text-white/60"
                                                    : "text-[#28292D]/60 dark:text-white/60"
                                                    }`}
                                                style={{ fontWeight: 500 }}
                                            >
                                                <span className="text-[#D52169]">▸</span>
                                                {item}
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 mb-8 text-center"
                >
                    <CTAButton href="#contacto" origen="servicios">{t('services.ctaButton')} <ArrowRight size={18} /></CTAButton>
                </motion.div>
            </div>
        </section>
    );
}
