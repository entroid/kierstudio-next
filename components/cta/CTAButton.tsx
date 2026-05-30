"use client";

import { motion } from "motion/react";
import clsx from "clsx";
import type { ReactNode } from "react";

export type CTAButtonProps = {
  href: string;
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
};

/**
 * Re‑usable animated CTA button built with the Motion library.
 * It mirrors the existing hero CTA styles while exposing flexible props.
 */
export function CTAButton({
  href,
  alt,
  className = "",
  variant = "primary",
  children,
  target,
  rel,
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-3 px-10 py-5 font-['Archivo',sans-serif] text-[0.8125rem] leading-[0.8125rem] tracking-[0.1em] uppercase border-2 transition-all duration-300 cursor-pointer";

  const variantMap: Record<"primary" | "secondary", string> = {
    primary:
      "bg-[#D52169] text-white border-transparent hover:bg-[#28292D] hover:border-[#28292D]",
    secondary:
      "bg-transparent text-[#28292D] border-[#28292D] hover:bg-[#28292D] hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#28292D]",
  };

  // Hover offset (x) only for the primary pink button – matches original design.
  const hoverProps =
    variant === "primary"
      ? { whileHover: { scale: 1.05, x: 5 } }
      : { whileHover: { scale: 1.05 } };

  return (
    <motion.a
      href={href}
      aria-label={alt}
      target={target}
      rel={rel}
      whileTap={{ scale: 0.95 }}
      {...hoverProps}
      className={clsx(baseClasses, variantMap[variant], className)}
      style={{ fontWeight: 700 }}
    >
      {children}
    </motion.a>
  );
}
