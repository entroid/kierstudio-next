"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface InfoPageProps {
  title: string;
  children: ReactNode;
  lastUpdatedLabel?: string;
  backHref?: string;
  backLabel?: string;
}

export function InfoPage({
  title,
  children,
  lastUpdatedLabel,
  backHref,
  backLabel,
}: InfoPageProps) {
  const lastUpdated = lastUpdatedLabel ?? `Last updated: ${new Date().toLocaleDateString()}`;
  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {backHref && (
            <a
              href={backHref}
              className="inline-block mt-8 md:mt-10 mb-6 text-[#28292D]/60 hover:text-[#D52169] dark:text-white/70 dark:hover:text-[#D52169] transition-colors font-['Archivo',sans-serif] text-[14px]"
              style={{ fontWeight: 600 }}
            >
              ← {backLabel ?? "Back to Home"}
            </a>
          )}
          <h1
            className="font-['Archivo',sans-serif] text-[48px] md:text-[64px] leading-[1] tracking-[-0.02em] text-[#28292D] dark:text-white mt-8 md:mt-10 mb-6"
            style={{ fontWeight: 900 }}
          >
            {title}
          </h1>
          <p
            className="font-['Archivo',sans-serif] text-[14px] text-[#28292D]/60 dark:text-white/60 mb-10"
            style={{ fontWeight: 400 }}
          >
            {lastUpdated}
          </p>
          <div className="prose prose-neutral dark:prose-invert max-w-none">{children}</div>
        </motion.div>
      </div>
    </section>
  );
}
