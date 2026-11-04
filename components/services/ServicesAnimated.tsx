"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useRef } from "react";
import { useLanguage } from "../LanguageContext";
import { CTAButton } from "@/components/cta/CTAButton";
import { ArrowRight } from "lucide-react";
import type { Producto } from "@/lib/analytics";

/**
 * Servicios: dos etapas de un mismo proceso y, a la vez, dos productos que se
 * contratan por separado.
 *
 * Primero el diagnóstico (bloque de entrada, con jerarquía distinta: es un
 * entregable, no una capacidad) y después las tres formas de ejecutar. El rótulo
 * "Etapa 1 / Etapa 2" marca la secuencia sin convertirla en un peaje: la etapa 2
 * aclara que cada servicio se contrata solo.
 *
 * Ojo con la numeración: las etapas van en texto y las fases internas del
 * diagnóstico en mono 01–04. Numerar las dos cosas con el mismo estilo las hacía
 * competir a la vista.
 */
export function ServicesAnimated() {
    const { t, translations } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    const { scrollYProgress: titleProgress } = useScroll({
        target: titleRef,
        offset: ["start 100%", "start 70%"],
    });
    const titleOpacity = useTransform(titleProgress, [0, 1], [0, 1]);

    const { etapa1, etapa2 } = translations.services;

    // El diagnóstico ocupa la imagen que antes tenía la tarjeta de consultoría:
    // no hay assets nuevos, sólo cambió de lugar.
    const diagnosticImage = "/services/02.jpg";

    // El orden es el argumento y el fondo alterna por posición, así que reordenar
    // no rompe el ritmo. Cada servicio lleva su `producto` para que el click se
    // pueda atribuir: sin él los tres comparten `origen: "servicios"`.
    const fondos = ["bg-[#F5F5F5] dark:bg-[#1a1a1a]", "bg-[#28292D] dark:bg-black"];
    const services = ([
        { key: "automation", image: "/services/automatizacion.png" },
        { key: "customapp", image: "/services/0000.jpg" },
        // Sitio y tienda online son un solo servicio: la tienda va adentro.
        { key: "websites", image: "/services/01.png" },
    ] as const).map(({ key, image }, index) => ({
        title: t(`services.${key}.title`),
        subtitle: t(`services.${key}.subtitle`),
        image,
        services: translations.services[key].items,
        tag: t(`services.${key}.tag`),
        producto: translations.services[key].producto as Producto,
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
                <motion.div className="mb-16 md:mb-20">
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
                        className="titulo text-[2.188rem] md:text-[4.375rem] lg:text-[4.812rem] text-[#28292D] dark:text-white mb-8 uppercase"
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

                {/* ETAPA 1 — el producto de entrada.
                    La foto dejó de ser una banda arriba del texto: ahora es el fondo
                    del encabezado (rótulo + título + tag + subtítulo) y el texto se
                    apoya encima. Antes banda y texto se sumaban (~600px en desktop);
                    ahora el alto del encabezado es el del texto, así que la sección
                    baja ~160px sin perder la imagen. El scrim va en dos capas porque
                    la foto tiene zonas claras: una plana fija el piso de contraste y
                    un degradé la funde con el bloque donde termina el encabezado.
                    Las tres fases y el pie siguen sobre el fondo plano del bloque. */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-[#28292D] dark:bg-black transition-colors duration-500 mb-16 md:mb-24"
                >
                    <div className="relative overflow-hidden">
                        <ImageWithFallback
                            src={diagnosticImage}
                            alt={`${etapa1.title} — Kier Studio`}
                            sizes="100vw"
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-[#28292D]/70 dark:bg-black/70" />
                        

                        <div className="relative px-6 pb-8 pt-10 md:px-12 md:pb-10 md:pt-12 lg:px-16 lg:pb-10 lg:pt-14">
                            <span
                                className="etiqueta text-[0.625rem] text-white/50 mb-5 block"
                                style={{ fontWeight: 400 }}
                            >
                                {etapa1.rotulo}
                            </span>

                            <h3 className="titulo text-[1.925rem] md:text-[2.75rem] lg:text-[3.25rem] text-white mb-3">
                                {etapa1.title}
                            </h3>

                            <p
                                className="font-archivo text-[0.9375rem] md:text-[1rem] text-[#D52169] mb-5"
                                style={{ fontWeight: 600 }}
                            >
                                {etapa1.tag}
                            </p>

                            <p
                                className="font-archivo text-[1rem] md:text-[1.0625rem] leading-[1.6] text-white/80 mb-6 max-w-[760px]"
                                style={{ fontWeight: 400 }}
                            >
                                {etapa1.subtitle}
                            </p>
                        </div>
                    </div>

                    <div className="px-6 pb-10 md:px-12 md:pb-12 lg:px-16 lg:pb-14">
                        {/* Las tres fases, horizontales en desktop y apiladas en mobile.
                            Mismo patrón número-mono que la sección Proceso. */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-0 mb-10">
                            {etapa1.fases.map((fase, faseIndex) => (
                                <motion.div
                                    key={fase.numero}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + faseIndex * 0.1 }}
                                    className="border-t border-white/15 pt-4"
                                >
                                    <div
                                        className="font-mono text-[1.375rem] leading-none text-[#D52169] mb-3"
                                        style={{ fontWeight: 500 }}
                                    >
                                        {fase.numero}
                                    </div>
                                    <h4
                                        className="font-archivo text-[0.75rem] tracking-[0.1em] uppercase text-white mb-2"
                                        style={{ fontWeight: 700 }}
                                    >
                                        {fase.title}
                                    </h4>
                                    <p
                                        className="font-archivo text-[0.8125rem] leading-[1.6] text-white/60"
                                        style={{ fontWeight: 400 }}
                                    >
                                        {fase.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pie alineado a la izquierda a propósito: el borde derecho del
                            bloque coincide con la columna donde viven los controles
                            flotantes (chat, ES, tema), y un CTA alineado a la derecha
                            quedaba tapado por ellos. */}
                        <div className="border-t border-white/15 pt-8">
                            <div className="flex flex-wrap gap-2 mb-7">
                                {etapa1.detalles.map((detalle, detalleIndex) => (
                                    <span
                                        key={detalleIndex}
                                        className="border border-white/15 px-3 py-1.5 font-archivo text-[0.625rem] tracking-[0.1em] uppercase text-white/70"
                                        style={{ fontWeight: 600 }}
                                    >
                                        {detalle}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                                <CTAButton
                                    href="#contacto"
                                    origen="servicios"
                                    producto="diagnostico"
                                    className="justify-between sm:justify-center w-full sm:w-auto shrink-0"
                                >
                                    {t('services.etapa1CTA')} <ArrowRight size={18} />
                                </CTAButton>
                                <p
                                    className="font-archivo text-[0.8125rem] leading-[1.5] text-white/50 lg:max-w-[320px]"
                                    style={{ fontWeight: 400 }}
                                >
                                    {etapa1.nota}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ETAPA 2 — el catálogo de ejecución. */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 md:mb-16"
                >
                    <span
                        className="etiqueta text-[0.6875rem] text-[#28292D]/60 dark:text-white/60 mb-6 block"
                    >
                        {etapa2.rotulo}
                    </span>
                    <p
                        className="font-archivo text-[1rem] md:text-[1.25rem] text-[#28292D] dark:text-white/90 max-w-[820px] leading-[1.5]"
                        style={{ fontWeight: 600 }}
                    >
                        {etapa2.subtitle}
                    </p>
                </motion.div>

                <div className="space-y-0">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.producto}
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
                                        className={`titulo text-[1.925rem] md:text-[3.5rem] lg:text-[1.859rem] xl:text-[2.406rem] mb-6 ${service.bgColor.includes("28292D") || service.bgColor.includes("black")
                                            ? "text-white"
                                            : "text-[#28292D] dark:text-white"
                                            }`}
                                    >
                                        {service.title}
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
                    className="mt-20 md:mt-28 mb-8 text-center"
                >
                    <CTAButton href="#contacto" origen="servicios" variant="secondary">
                        {t('services.ctaButton')} <ArrowRight size={18} />
                    </CTAButton>
                </motion.div>
            </div>
        </section>
    );
}
