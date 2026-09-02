"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import {
    cargarMetaPixel,
    guardarConsentimiento,
    leerConsentimiento,
} from "@/lib/consentimiento";

/**
 * Banner de consentimiento de cookies de terceros.
 *
 * Aparece una sola vez, hasta que el visitante decide. Mientras no haya decidido
 * —y si decide que no— el Meta Pixel no se carga: la decisión se toma antes del
 * primer disparo, no después.
 *
 * No bloquea la página. Con este tráfico, un modal a pantalla completa costaría
 * más visitas de las que valdría el dato.
 */
export function ConsentBanner() {
    const { t } = useLanguage();
    const [visible, setVisible] = useState(false);
    const [saliendo, setSaliendo] = useState(false);

    useEffect(() => {
        const decision = leerConsentimiento();

        // Ya aceptó en una visita anterior: se respeta sin volver a preguntar.
        if (decision === "otorgado") {
            cargarMetaPixel();
            return;
        }

        // Ya rechazó: no se carga nada y no se vuelve a molestar.
        if (decision === "rechazado") return;

        setVisible(true);
    }, []);

    /**
     * El desmontaje es explícito y no depende de `AnimatePresence`: con exit
     * animado, el nodo terminaba la animación pero se quedaba en el DOM —
     * invisible, fijo al fondo y comiéndose los clicks de esa franja, que es
     * justo donde viven los controles flotantes.
     */
    const cerrar = () => {
        setSaliendo(true);
        setTimeout(() => setVisible(false), 300);
    };

    const aceptar = () => {
        guardarConsentimiento("otorgado");
        cargarMetaPixel();
        cerrar();
    };

    const rechazar = () => {
        guardarConsentimiento("rechazado");
        cerrar();
    };

    if (!visible) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={saliendo ? { opacity: 0, y: 24 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-live="polite"
            aria-label={t("consent.title")}
            className={`fixed bottom-0 left-0 right-0 z-[90] p-4 sm:p-6 ${saliendo ? "pointer-events-none" : ""}`}
        >
            <div className="max-w-[1100px] mx-auto bg-[#28292D] dark:bg-[#1a1a1a] border border-white/10 shadow-2xl p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
                <p
                    className="font-archivo text-[0.9375rem] text-white/80 leading-[1.6] flex-1"
                    style={{ fontWeight: 400 }}
                >
                    {t("consent.text")}{" "}
                    <Link
                        href="/cookies"
                        className="text-[#D52169] hover:text-white underline underline-offset-2 transition-colors"
                    >
                        {t("consent.link")}
                    </Link>
                </p>

                {/* "Rechazar" primero y con el mismo peso visual que "aceptar":
                    un rechazo escondido no es una elección. */}
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <button
                        onClick={rechazar}
                        className="px-7 py-3 bg-transparent text-white border-2 border-white/40 hover:border-white hover:bg-white hover:text-[#28292D] font-archivo text-[0.75rem] tracking-[0.1em] uppercase transition-all duration-300 cursor-pointer"
                        style={{ fontWeight: 700 }}
                    >
                        {t("consent.reject")}
                    </button>
                    <button
                        onClick={aceptar}
                        className="px-7 py-3 bg-[#D52169] text-white border-2 border-transparent hover:bg-white hover:text-[#28292D] font-archivo text-[0.75rem] tracking-[0.1em] uppercase transition-all duration-300 cursor-pointer"
                        style={{ fontWeight: 700 }}
                    >
                        {t("consent.accept")}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
