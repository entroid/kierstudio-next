"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { CTAButton } from "@/components/cta/CTAButton";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

/**
 * Hero v2 — el mismo contenido que `HeroAnimated`, pero con el video de fondo a
 * pantalla completa y el texto centrado encima.
 *
 * La v1 sigue en el repo sin tocar. Para volver atrás alcanza con cambiar el
 * re-export de `components/hero/index.tsx`.
 *
 * Tres decisiones que no son obvias:
 *
 * 1. Dos codificaciones del mismo clip. En mobile la banda visible es casi
 *    vertical y `object-cover` recorta el encuadre hasta dejar el centro, así
 *    que 720p alcanza y pesa menos de la mitad; de tablet para arriba el video
 *    llena la pantalla completa y a esa escala el 720p se ve blando.
 *
 * 2. El corte entre los dos archivos está en `md` (768px), no en el `lg`
 *    (1180px) de la v1. Ahí el criterio ya no es el layout —el texto dejó de
 *    repartirse con una caja de video al costado— sino el encuadre: desde
 *    tablet el video es full-bleed.
 *
 * 3. `prefers-reduced-motion` no reproduce el video, deja el póster. El video
 *    es decoración en movimiento: para quien pide no moverse, un frame quieto
 *    cuenta lo mismo.
 *
 * Las alturas van en `svh` y no en `vh`: en iPad y iPhone `vh` se mide contra
 * el viewport grande, así que con la barra del navegador a la vista el hero
 * quedaría más alto que la pantalla. `svh` es la altura visible mínima y en
 * desktop coincide con `vh`.
 *
 * El `<video>` no se monta hasta después de hidratar, igual que en la v1: un
 * video empieza a descargar apenas existe en el DOM, así que hasta saber el
 * ancho de pantalla se muestra el póster. El póster es el primer frame del
 * clip, de modo que el cambio no se percibe.
 */
const VIDEO_MOBILE = "/hero-bg-720.mp4";
const VIDEO_DESKTOP = "/hero-bg-1080.mp4";
const POSTER = "/hero-bg-poster.jpg";

const CONSULTA_TABLET = "(min-width: 768px)";
const CONSULTA_SIN_MOVIMIENTO = "(prefers-reduced-motion: reduce)";

export function HeroAnimatedV2() {
    const { t } = useLanguage();

    const [fuente, setFuente] = useState<string | null>(null);
    const [sinMovimiento, setSinMovimiento] = useState(false);

    useEffect(() => {
        const tablet = window.matchMedia(CONSULTA_TABLET);
        const movimiento = window.matchMedia(CONSULTA_SIN_MOVIMIENTO);

        const aplicar = () => {
            setSinMovimiento(movimiento.matches);
            setFuente(tablet.matches ? VIDEO_DESKTOP : VIDEO_MOBILE);
        };

        aplicar();
        tablet.addEventListener("change", aplicar);
        movimiento.addEventListener("change", aplicar);
        return () => {
            tablet.removeEventListener("change", aplicar);
            movimiento.removeEventListener("change", aplicar);
        };
    }, []);

    const conVideo = fuente !== null && !sinMovimiento;

    return (
        <section
            id="inicio"
            className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#0b0b0d]"
        >
            {/* Fondo. El scrim existe para que el titular blanco no pelee con
                las líneas claras del clip, pero no hace falta más que un 15%:
                el material es blanco y negro y ya viene oscuro, así que subirlo
                solo apaga el video sin comprar contraste. Este es el número a
                mover si algún día se cambia por un clip claro. */}
            <div className="absolute inset-0 -z-10">
                {conVideo ? (
                    <video
                        key={fuente}
                        src={fuente}
                        poster={POSTER}
                        className="hero-video h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        disablePictureInPicture
                        tabIndex={-1}
                        aria-hidden="true"
                    />
                ) : (
                    <ImageWithFallback
                        src={POSTER}
                        alt=""
                        sizes="100vw"
                        priority
                        className="object-cover"
                    />
                )}

                <div className="absolute inset-0 bg-[#0a0a0a]/15" />
            </div>

            {/* Contenido. El padding no es aire: `pt-24` es el alto del header
                fixed (96px) y `md:pt-32` compensa el `pb-8` para que, en tablet
                y desktop, el texto quede centrado en el área visible —debajo del
                header— y no en la caja del section, que arranca en y=0 y queda
                tapada arriba. Sin esa corrección el bloque sube unos 40px y el
                hero se ve cargado hacia arriba.

                El ancho es 1200 y no 1100 por el titular: a 84px mide 1025px y
                con 1004 disponibles se partía dejando "MANO" sola en la segunda
                línea. La descripción tiene su propio `max-w` (680px), así que
                ensanchar acá no la estira. */}
            <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 pb-8 pt-24 text-center md:px-12 md:pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-4"
                >
                    <span className="etiqueta block text-[0.72rem] text-white/75">
                        {t('hero.location')}
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-4"
                >
                    <h1 className="titulo text-[12.25vw] text-white sm:text-[10.5vw] md:text-[4.594rem] lg:text-[4.812rem] xl:text-[5.25rem] 2xl:text-[5.25rem]">
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
                        className="font-archivo mb-4 text-[1.5rem] leading-[1.2] text-white/90 md:text-[1.5rem]"
                        style={{ fontWeight: 600 }}
                    >
                        {t('hero.subtitle')}
                    </h2>

                    <p
                        className="font-archivo mx-auto max-w-[680px] text-[1rem] leading-[1.7] text-white/80 md:text-[1.125rem]"
                        style={{ fontWeight: 400 }}
                    >
                        {t('hero.description')}
                        <b className="text-white">{t('hero.descriptionBoldText')}</b>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <CTAButton href="#contacto" variant="primary" className="shadow-xl" origen="hero">
                        {t('hero.ctaTalk')} <ArrowRight size={18} />
                    </CTAButton>
                    <CTAButton href="#proyectos" variant="onDark">
                        {t('hero.ctaWork')}
                    </CTAButton>
                </motion.div>
            </div>
        </section>
    );
}
