"use client";

import { motion } from "motion/react";
import clsx from "clsx";
import type { ReactNode } from "react";
import { contactoIniciado, type Canal, type Origen } from "@/lib/analytics";

export type CTAButtonProps = {
  /**
   * Link destination. If provided, renders an <a> tag. If omitted, renders a <button>.
   */
  href?: string;
  /**
   * Optional click handler.
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * Optional aria-label or alt text for accessibility.
   */
  alt?: string;
  /**
   * Extra Tailwind / CSS classes to merge with the default styling.
   */
  className?: string;
  /**
   * Visual variant – "primary" matches the pink CTA used on the hero, "secondary"
   * matches the outlined dark CTA.
   */
  variant?: "primary" | "secondary";
  /**
   * Content inside the button – can be text, icons, or any JSX.
   */
  children: ReactNode;
  /**
   * Link target attribute (e.g., "_blank" for opening in new tab).
   */
  target?: string;
  /**
   * Link rel attribute (e.g., "noopener noreferrer" for external links).
   */
  rel?: string;
  /**
   * Sección desde la que se hizo el click. Si está presente, el botón reporta
   * `contacto_iniciado` a analytics — es lo que después permite saber qué parte
   * del argumento genera contactos.
   */
  origen?: Origen;
  /**
   * Canal por el que se intenta contactar. Por defecto "form", que es a donde
   * llevan los CTA que bajan a la sección de contacto.
   */
  canal?: Canal;
  /**
   * Slug del caso, cuando el botón vive en una página de trabajo. Permite
   * saber qué caso genera contactos, y no sólo que los casos los generan.
   */
  proyecto?: string;
};

/**
 * Re‑usable animated CTA button built with the Motion library.
 * It mirrors the existing hero CTA styles while exposing flexible props.
 */
export function CTAButton({
  href,
  onClick,
  alt,
  className = "",
  variant = "primary",
  children,
  target,
  rel,
  origen,
  canal = "form",
  proyecto,
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-3 px-10 py-5 font-archivo text-[0.8125rem] leading-[0.8125rem] tracking-[0.1em] uppercase border-2 transition-all duration-300 cursor-pointer";

  const variantMap: Record<"primary" | "secondary", string> = {
    primary:
      "bg-[#D52169] text-white border-transparent hover:bg-[#28292D] hover:border-[#28292D]",
    secondary:
      "bg-transparent text-[#28292D] border-[#28292D] hover:bg-[#28292D] hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#28292D]",
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (origen) contactoIniciado(origen, canal, proyecto);
    onClick?.(e);
  };

  // Hover offset (x) only for the primary pink button – matches original design.
  const hoverProps =
    variant === "primary"
      ? { whileHover: { scale: 1.05, x: 5 } }
      : { whileHover: { scale: 1.05 } };

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={alt}
        target={target}
        rel={rel}
        onClick={handleClick}
        whileTap={{ scale: 0.95 }}
        {...hoverProps}
        className={clsx(baseClasses, variantMap[variant], className)}
        style={{ fontWeight: 700 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      aria-label={alt}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      {...hoverProps}
      className={clsx(baseClasses, variantMap[variant], className)}
      style={{ fontWeight: 700 }}
    >
      {children}
    </motion.button>
  );
}
