"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { marcarOrigenCaso } from "@/lib/analytics";
import { CTAButton } from "@/components/cta/CTAButton";

import { Project } from "@/types/project";

/**
 * Grilla de trabajos del home.
 *
 * Cada tarjeta lleva a /trabajos/[slug]. Antes abría un modal: no cambiaba la
 * URL, no se podía compartir y no se indexaba, así que los tres casos que
 * sostienen el argumento de venta eran invisibles para un buscador.
 */
export function ProjectsAnimated() {
    const { t, translations } = useLanguage();
    const [showAll, setShowAll] = useState(false);

    const projects: Project[] = translations.projectsData;

    const isMockImage = (imagePath: string) => imagePath.toLowerCase().includes('-mock');
    const visibleProjects = showAll ? projects : projects.slice(0, 4);

    return (
        <section
            id="proyectos"
            className="py-16 md:py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span
                        className="font-archivo text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
                        style={{ fontWeight: 600 }}
                    >
                        {t('projects.tag')}
                    </span>

                    <h2
                        className="font-archivo text-[#D52169] text-[3rem] md:text-[6rem] lg:text-[7.3rem] leading-[1] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8 uppercase"
                        style={{ fontWeight: 900 }}
                    >
                        {t('projects.title')}
                    </h2>

                    <p
                        className="font-archivo text-[1.125rem] md:text-[1.5rem] text-[#28292D] dark:text-white/90 max-w-[900px] leading-[1.4]"
                        style={{ fontWeight: 600 }}
                    >
                        {t('projects.subtitle')}
                    </p>
                </motion.div>

                <motion.div layout className="grid md:grid-cols-2 gap-8">
                    <AnimatePresence initial={false}>
                        {visibleProjects.map((project, index) => (
                            <motion.div
                                key={`${project.id}-${index}`}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.5 }}
                                className="group relative overflow-hidden"
                            >
                                <Link
                                    href={`/trabajos/${project.slug}`}
                                    // El evento lo dispara la página de caso, que es
                                    // el único lugar por el que pasan todas las visitas.
                                    // Acá sólo dejamos anotado de dónde salió.
                                    onClick={() => marcarOrigenCaso("trabajos")}
                                    className="block cursor-pointer"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a] min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
                                        <ImageWithFallback
                                            src={project.image}
                                            alt={`${project.title} project by Kier Studio - ${project.category}`}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {isMockImage(project.image) ? (
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                        ) : (
                                            <div className="absolute inset-0 bg-black/30 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                                        )}

                                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <motion.div initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }}>
                                                <span
                                                    className="font-archivo text-[0.625rem] tracking-[0.3em] uppercase text-white/60 mb-2 block italic"
                                                    style={{ fontWeight: 400 }}
                                                >
                                                    ({project.category} - {project.year})
                                                </span>
                                                <h3
                                                    className="font-archivo text-[2.625rem] md:text-[3.25rem] leading-[0.9] tracking-[-0.02em] text-white mb-2"
                                                    style={{ fontWeight: 900 }}
                                                >
                                                    {project.title}
                                                </h3>
                                            </motion.div>

                                            {/* Señal visual, no un control: el link es la tarjeta entera. */}
                                            <CTAButton variant="primary" className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">{t('projects.viewProject')} </CTAButton>
                                        </div>

                                        <div className="absolute top-8 right-8">
                                            <span
                                                className="font-archivo text-[4rem] text-white/10 group-hover:text-white/20 transition-colors"
                                                style={{ fontWeight: 900 }}
                                            >
                                                {String(project.id).padStart(2, "0")}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {projects.length > 4 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-10 py-5 bg-transparent text-[#28292D] dark:text-white border-2 border-[#28292D] dark:border-white  hover:bg-[#28292D] dark:hover:bg-white hover:text-white dark:hover:text-[#28292D] font-archivo text-[0.8125rem] tracking-[0.1em] uppercase transition-all duration-300 cursor-pointer"
                            style={{ fontWeight: 700 }}
                            onClick={() => setShowAll((prev) => !prev)}
                            aria-expanded={showAll}
                        >
                            {showAll ? t('projects.closeProjects') : t('projects.viewAll')}
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
