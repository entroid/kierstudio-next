"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { CTAButton } from "@/components/cta/CTAButton";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

// Client component that adds animations on top of server-rendered content
// Uses CSS animations or Framer Motion for entrance effects
export function HeroAnimated() {
    const { t } = useLanguage();

    /**
     * En mobile se sirve el mp4 (789 KB) y en desktop el webm (2,1 MB). Es la
     * misma pieza en dos calidades: en mobile ocupa una banda decorativa de
     * 220px, y es justo donde peor está la conexión — Instagram y WhatsApp, que
     * es de donde llega el tráfico, son 100% mobile.
     *
     * La elección se hace después de montar y no con CSS ni con dos <source>:
     * un `<video>` empieza a descargar apenas existe en el DOM, así que
     * esconderlo con `hidden` no ahorraría un solo byte. `fuente` arranca en
     * `null` para no bajar nada antes de saber qué pantalla es; hasta entonces
     * se ve el poster. El breakpoint es el `lg` del proyecto (1180px).
     */
    const [fuente, setFuente] = useState<string | null>(null);

    useEffect(() => {
        const consulta = window.matchMedia("(min-width: 1180px)");
        const aplicar = () =>
            setFuente(consulta.matches ? "/kierstudio-hero.webm" : "/kierstudio-hero.mp4");
        aplicar();
        consulta.addEventListener("change", aplicar);
        return () => consulta.removeEventListener("change", aplicar);
    }, []);

    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center py-16 md:pb-0 pt-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
        >
            <div className="mx-auto w-full">
                <div className="grid lg:grid-cols-2 lg:min-h-[calc(100vh-6rem)]">
                    {/* Video.
                        En mobile va DEBAJO del texto (order-2): arriba ocupaba el 40%
                        del primer viewport y empujaba titular, subtítulo y los dos
                        botones fuera de pantalla, así que el CTA principal dependía de
                        que la persona scrollease. En desktop vuelve a la izquierda.
                        La banda de 220px es deliberada: es decoración, no argumento. */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="order-2 lg:order-1 relative bg-white dark:bg-black overflow-hidden h-[220px] sm:h-[280px] lg:h-auto lg:min-h-[280px]"
                    >
                        <div className="absolute inset-0">
                            {fuente ? (
                                <video
                                    key={fuente}
                                    className="w-full h-full object-cover object-right opacity-80"
                                    poster="/hero-img.jpg"
                                    src={fuente}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            ) : (
                                <ImageWithFallback
                                    src="/hero-img.jpg"
                                    alt=""
                                    sizes="100vw"
                                    priority
                                    className="object-cover object-right opacity-80"
                                />
                            )}
                        </div>
                    </motion.div>

                    {/* Texto: primero en mobile, a la derecha en desktop. */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="order-1 lg:order-2 flex items-center justify-center px-6 py-10 lg:py-0 lg:px-20 bg-white dark:bg-[#0a0a0a]"
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
                                    className="font-archivo text-[0.72rem] line-height-[0.75rem] tracking-[0.1em] uppercase text-[#28292D]/60 dark:text-white/60 block italic"
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
                                    className="font-archivo text-[14vw] line-height-[14vw] sm:text-[12vw] sm:line-height-[12vw] md:text-[5.875rem] md:line-height-[5.875rem] xl:text-[6.875rem] xl:line-height-[6.875rem] leading-[0.85] tracking-[-0.03em] text-[#28292D] dark:text-white"
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
                                    className="font-archivo text-[1.5rem] md:text-[1.5rem] leading-[1.2] text-[#28292D] dark:text-white/90 mb-4"
                                    style={{ fontWeight: 600 }}
                                >
                                    {t('hero.subtitle')}
                                </h2>

                                <p
                                    className="font-archivo text-[1rem] md:text-[1.125rem] text-[#28292D]/70 dark:text-white/60 leading-[1.7]"
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
                                <CTAButton href="#contacto" variant="primary" className="shadow-xl" origen="hero">
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
