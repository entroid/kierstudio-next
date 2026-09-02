"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { marcarOrigenCaso, proyectoAbierto } from "@/lib/analytics";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { CTAButton } from "@/components/cta/CTAButton";
import type { Project } from "@/types/project";

/**
 * Página de un trabajo. Es un template: recibe el slug y arma la página con la
 * data del idioma activo, así que agregar un caso es agregar un objeto a
 * `projectsData` — no hay que tocar este archivo.
 *
 * El slug se resuelve en el cliente porque el idioma vive en el cliente. La
 * data existe en los dos idiomas con el mismo slug, así que el contenido que
 * indexa el buscador es el del render (español) y el toggle sólo cambia el
 * texto, nunca la URL.
 */
export function ProjectCase({ slug }: { slug: string }) {
    const { t, translations } = useLanguage();
    const projects: Project[] = translations.projectsData;

    const index = projects.findIndex((p) => p.slug === slug);
    const project = projects[index];

    // `proyecto_abierto` se dispara acá y no en el link de origen: a un caso se
    // puede llegar desde un buscador o un link compartido, y esos caminos no
    // pasan por ningún click nuestro. La dependencia es el slug, no el idioma:
    // cambiar de idioma no es ver el caso de nuevo.
    //
    // El guard es necesario porque el origen se consume al leerlo: si el efecto
    // corre dos veces —StrictMode en desarrollo lo hace— el segundo disparo ya
    // no encuentra la marca y reporta "directo" una visita que vino del home.
    const reportado = useRef<string | null>(null);
    useEffect(() => {
        if (reportado.current === slug) return;
        reportado.current = slug;
        proyectoAbierto(slug);
    }, [slug]);

    // No debería pasar —la ruta se genera desde esta misma lista— pero si un
    // slug queda huérfano preferimos una página vacía a un crash.
    if (!project) return null;

    const next = projects[(index + 1) % projects.length];

    return (
        <article className="bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
            {/* ---------- Encabezado ---------- */}
            <header className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 md:pt-40 pb-12">
                <Link
                    href="/#proyectos"
                    className="inline-flex items-center gap-2 font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.2em] uppercase text-[#28292D]/60 dark:text-white/60 hover:text-[#D52169] dark:hover:text-[#D52169] transition-colors mb-12"
                    style={{ fontWeight: 600 }}
                >
                    <ArrowLeft size={14} />
                    {t("projects.caseBack")}
                </Link>

                <span
                    className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-6 block italic"
                    style={{ fontWeight: 600 }}
                >
                    ({project.category} - {project.year})
                </span>

                <h1
                    className="font-['Archivo',sans-serif] text-[2.75rem] md:text-[6rem] lg:text-[7.3rem] leading-[0.95] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8 uppercase"
                    style={{ fontWeight: 900 }}
                >
                    {project.title}
                </h1>

                <p
                    className="font-['Archivo',sans-serif] text-[1.25rem] md:text-[1.75rem] text-[#28292D] dark:text-white/90 max-w-[900px] leading-[1.35]"
                    style={{ fontWeight: 600 }}
                >
                    {project.summary}
                </p>

                <div className="flex flex-wrap gap-3 mt-10">
                    {project.services.map((service) => (
                        <span
                            key={service}
                            className="bg-[#F5F5F5] dark:bg-[#28292D] text-[#28292D] dark:text-white px-4 py-2 font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.05em] uppercase"
                            style={{ fontWeight: 600 }}
                        >
                            {service}
                        </span>
                    ))}
                </div>
            </header>

            {/* ---------- Imagen principal ---------- */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#1a1a1a]">
                    <ImageWithFallback
                        src={project.image}
                        alt={`${project.title} — ${project.category}`}
                        className="w-full h-full object-cover"
                        style={{ height: "100%" }}
                    />
                </div>
            </div>

            {/* ---------- Métricas ----------
                Sólo cuando hay números medidos. La nota de origen va siempre:
                un número sin de dónde salió no se publica. */}
            {project.metrics && project.metrics.length > 0 && (
                <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-24">
                    <div className="grid sm:grid-cols-3 gap-8 border-y border-[#28292D]/10 dark:border-white/10 py-12">
                        {project.metrics.map((metric) => (
                            <div key={metric.label}>
                                <span
                                    className="font-['Archivo',sans-serif] block text-[3rem] md:text-[4rem] leading-[1] tracking-[-0.04em] text-[#D52169] mb-3"
                                    style={{ fontWeight: 900 }}
                                >
                                    {metric.value}
                                </span>
                                <span
                                    className="font-['Archivo',sans-serif] text-[0.9375rem] text-[#28292D]/70 dark:text-white/70 leading-[1.4] block"
                                    style={{ fontWeight: 600 }}
                                >
                                    {metric.label}
                                </span>
                            </div>
                        ))}
                    </div>
                    {project.metricsNota && (
                        <p
                            className="font-['Archivo',sans-serif] text-[0.75rem] text-[#28292D]/50 dark:text-white/50 mt-4 italic"
                            style={{ fontWeight: 400 }}
                        >
                            {project.metricsNota}
                        </p>
                    )}
                </section>
            )}

            {/* ---------- Problema / Qué hicimos / Qué cambió ---------- */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_2fr] gap-x-16 gap-y-6 mb-24">
                <Bloque titulo={t("projects.caseProblem")}>
                    <p
                        className="font-['Archivo',sans-serif] text-[1.0625rem] md:text-[1.1875rem] text-[#28292D]/80 dark:text-white/75 leading-[1.7]"
                        style={{ fontWeight: 400 }}
                    >
                        {project.problema}
                    </p>
                </Bloque>

                <Bloque titulo={t("projects.caseSolution")}>
                    <Lista items={project.solucion} />
                </Bloque>

                <Bloque titulo={t("projects.caseResult")}>
                    <Lista items={project.resultado} />
                </Bloque>
            </div>

            {/* ---------- Galería ---------- */}
            {project.images.length > 0 && (
                <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-24">
                    <Titulo>{t("projects.caseGallery")}</Titulo>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {project.images.map((src, i) => (
                            <motion.div
                                key={src}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.4 }}
                                className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]"
                            >
                                <ImageWithFallback
                                    src={src}
                                    alt={`${project.title} — ${i + 1}`}
                                    className="w-full h-full object-cover"
                                    style={{ height: "100%" }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {project.url && project.url.trim() !== "" && (
                        <div className="mt-10">
                            <CTAButton
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                            >
                                {t("projects.visitWebsite")} <ArrowRight size={18} />
                            </CTAButton>
                        </div>
                    )}
                </section>
            )}

            {/* ---------- Cierre: contacto + siguiente trabajo ---------- */}
            <section className="border-t border-[#28292D]/10 dark:border-white/10">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2
                            className="font-['Archivo',sans-serif] text-[2rem] md:text-[3rem] leading-[1] tracking-[-0.03em] text-[#28292D] dark:text-white mb-4 uppercase"
                            style={{ fontWeight: 900 }}
                        >
                            {t("projects.caseCtaTitle")}
                        </h2>
                        <p
                            className="font-['Archivo',sans-serif] text-[1.0625rem] text-[#28292D]/70 dark:text-white/70 leading-[1.6] mb-8 max-w-[520px]"
                            style={{ fontWeight: 400 }}
                        >
                            {t("projects.caseCtaText")}
                        </p>
                        {/* origen "trabajos" dice que el contacto nació de un caso;
                            `proyecto` dice de cuál, que es la pregunta útil. */}
                        <CTAButton
                            href="/#contacto"
                            variant="primary"
                            origen="trabajos"
                            proyecto={project.slug}
                        >
                            {t("projects.caseCtaButton")} <ArrowRight size={18} />
                        </CTAButton>
                    </div>

                    <Link
                        href={`/trabajos/${next.slug}`}
                        onClick={() => marcarOrigenCaso("caso")}
                        className="group block lg:justify-self-end"
                    >
                        <span
                            className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/50 dark:text-white/50 mb-3 block italic"
                            style={{ fontWeight: 600 }}
                        >
                            {t("projects.caseNext")}
                        </span>
                        <span
                            className="font-['Archivo',sans-serif] text-[2rem] md:text-[3rem] leading-[1] tracking-[-0.03em] text-[#28292D] dark:text-white group-hover:text-[#D52169] transition-colors uppercase block"
                            style={{ fontWeight: 900 }}
                        >
                            {next.title}
                        </span>
                    </Link>
                </div>
            </section>
        </article>
    );
}

function Titulo({ children }: { children: React.ReactNode }) {
    return (
        <h2
            className="font-['Archivo',sans-serif] text-[0.75rem] tracking-[0.25em] uppercase text-[#D52169] mb-4"
            style={{ fontWeight: 700 }}
        >
            {children}
        </h2>
    );
}

/** Título a la izquierda, contenido a la derecha; apilado en mobile. */
function Bloque({ titulo, children }: { titulo: string; children: React.ReactNode }) {
    return (
        <>
            <div className="lg:col-start-1 pt-2 border-t border-[#28292D]/10 dark:border-white/10 lg:border-0">
                <Titulo>{titulo}</Titulo>
            </div>
            <div className="lg:col-start-2 pb-10 lg:pb-14">{children}</div>
        </>
    );
}

function Lista({ items }: { items: string[] }) {
    return (
        <ul className="space-y-4">
            {items.map((item) => (
                <li
                    key={item}
                    className="font-['Archivo',sans-serif] text-[1.0625rem] md:text-[1.1875rem] text-[#28292D]/80 dark:text-white/75 leading-[1.6] pl-6 relative"
                    style={{ fontWeight: 400 }}
                >
                    <span className="absolute left-0 top-[0.6em] w-2 h-2 bg-[#D52169] rounded-full" />
                    {item}
                </li>
            ))}
        </ul>
    );
}
