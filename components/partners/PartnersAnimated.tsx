"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface Marca {
    nombre: string;
    src: string;
    srcDark: string;
}

/**
 * Nuestra red: el socio en automatización arriba, destacado, y los
 * colaboradores abajo, más chicos.
 *
 * Nuvia va aparte porque es quien respalda el servicio principal; el resto es
 * la red creativa que suma sobre todo a los sitios web. Antes eran seis logos
 * iguales y el socio quedaba cuarto, sin decir qué hacía.
 */
export function PartnersAnimated() {
    const { t } = useLanguage();

    const socio: Marca & { href: string } = {
        nombre: "Nuvia",
        src: "/partners/logo_nuv.png",
        srcDark: "/partners/logo_nuv-dark.png",
        href: "https://nuviait.com/",
    };

    // Sin `href` la tarjeta no es un link: un "#" con target _blank abría una
    // pestaña en blanco.
    const colaboradores: (Marca & { rubro: string; href?: string })[] = [
        {
            nombre: "Mercurio Group",
            src: "/partners/logo-mercurio-group-web.png",
            srcDark: "/partners/logo-mercurio-group-web-dark.png",
            rubro: t("partners.marketingCommunication"),
            href: "https://mercurio.group/",
        },
        {
            nombre: "Agrosapiens",
            src: "/partners/agrosapiens-logo.png",
            srcDark: "/partners/agrosapiens-logo-dark.png",
            rubro: t("partners.advertising"),
            href: "https://www.agrosapiens.com.ar",
        },
        {
            nombre: "Cuenca d'Amico",
            src: "/partners/cuencadamico-logo.png",
            srcDark: "/partners/cuencadamico-logo-dark.png",
            rubro: t("partners.packagingDesign"),
            href: "https://cuencadamico.com.ar/",
        },
        {
            nombre: "Diego Ramos",
            src: "/partners/diego-ramos.png",
            srcDark: "/partners/diego-ramos-dark.png",
            rubro: t("partners.branding"),
            href: "https://www.linkedin.com/in/diego-cristian-ramos-23405494/",
        },
        {
            nombre: "Barba",
            src: "/partners/logo-barba.svg",
            srcDark: "/partners/logo-barba.svg",
            rubro: t("partners.branding"),
        },
    ];

    const tarjeta =
        "bg-white dark:bg-[#1a1a1a] border border-[#28292D]/5 dark:border-white/5 transition-colors duration-500";

    return (
        <section
            id="partners"
            className="relative py-16 md:py-32 bg-[#F5F5F5] dark:bg-[#0f0f0f] transition-colors duration-500"
        >
            <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <span
                        className="font-archivo text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
                        style={{ fontWeight: 600 }}
                    >
                        {t("partners.partnersTag")}
                    </span>

                    {/* ---------- Socio ---------- */}
                    <div className={`${tarjeta} grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 md:gap-12 items-center p-8 md:p-12`}>
                        <div className="flex items-center justify-center md:border-r border-[#28292D]/10 dark:border-white/10 md:pr-12">
                            <Logo marca={socio} className="max-h-[80px] md:max-h-[96px]" />
                        </div>
                        <div>
                            <span
                                className="font-archivo text-[0.75rem] tracking-[0.2em] uppercase text-[#D52169] block mb-4"
                                style={{ fontWeight: 700 }}
                            >
                                {t("partners.partnerTag")}
                            </span>
                            <p
                                className="font-archivo text-[1.125rem] md:text-[1.375rem] text-[#28292D] dark:text-white/90 leading-[1.5] mb-6 max-w-[720px]"
                                style={{ fontWeight: 600 }}
                            >
                                {t("partners.partnerText")}
                            </p>
                            <a
                                href={socio.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-archivo text-[0.75rem] tracking-[0.15em] uppercase text-[#28292D]/70 dark:text-white/70 hover:text-[#D52169] dark:hover:text-[#D52169] transition-colors"
                                style={{ fontWeight: 700 }}
                            >
                                {t("partners.partnerLink")} <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>

                    {/* ---------- Colaboradores ---------- */}
                    <h3
                        className="font-archivo text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mt-16 mb-6"
                        style={{ fontWeight: 600 }}
                    >
                        {t("partners.collaboratorsTitle")}
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
                        {colaboradores.map((c) => {
                            const contenido = (
                                <>
                                    <Logo marca={c} className="max-h-[56px]" />
                                    <p
                                        className="font-archivo text-[0.625rem] tracking-[0.15em] uppercase text-[#28292D]/60 dark:text-white/65 mt-3 text-center"
                                        style={{ fontWeight: 500 }}
                                    >
                                        {c.rubro}
                                    </p>
                                </>
                            );
                            const clase = `${tarjeta} h-[130px] p-4 md:p-6 flex flex-col items-center justify-center`;

                            return c.href ? (
                                <a
                                    key={c.nombre}
                                    href={c.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${clase} hover:border-[#D52169]/40 dark:hover:border-[#D52169]/50`}
                                >
                                    {contenido}
                                </a>
                            ) : (
                                <div key={c.nombre} className={clase}>
                                    {contenido}
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/**
 * Los logos quedan como <img> a propósito: pesan entre 6 y 47 KB, así que
 * optimizarlos no mueve la aguja, y uno es SVG — next/image lo rechaza salvo
 * que se habilite dangerouslyAllowSVG, que es un riesgo real a cambio de nada.
 * Se difieren y se les fija tamaño para que no provoquen saltos de layout.
 *
 * El alt es el nombre de la marca: antes decía el rubro ("Logo de Branding"),
 * y dos logos distintos terminaban con el mismo texto.
 */
function Logo({ marca, className }: { marca: Marca; className: string }) {
    return (
        <div className="flex items-center justify-center w-full dark:bg-white dark:p-1">
            {/* eslint-disable @next/next/no-img-element */}
            <img
                src={marca.src}
                alt={marca.nombre}
                width={160}
                height={90}
                loading="lazy"
                decoding="async"
                className={`block dark:hidden w-full h-auto object-contain ${className}`}
            />
            <img
                src={marca.srcDark}
                alt={marca.nombre}
                width={160}
                height={90}
                loading="lazy"
                decoding="async"
                className={`hidden dark:block w-full h-auto object-contain ${className}`}
            />
            {/* eslint-enable @next/next/no-img-element */}
        </div>
    );
}
