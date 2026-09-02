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
              className="inline-block mt-8 md:mt-10 mb-6 text-[#28292D]/60 hover:text-[#D52169] dark:text-white/70 dark:hover:text-[#D52169] transition-colors font-archivo text-[0.875rem]"
              style={{ fontWeight: 600 }}
            >
              ← {backLabel ?? "Back to Home"}
            </a>
          )}
          <h1
            className="font-archivo text-[3rem] md:text-[4rem] leading-[1] tracking-[-0.02em] text-[#28292D] dark:text-white mt-8 md:mt-10 mb-6"
            style={{ fontWeight: 900 }}
          >
            {title}
          </h1>
          <p
            className="font-archivo text-[0.875rem] text-[#28292D]/60 dark:text-white/60 mb-10"
            style={{ fontWeight: 400 }}
          >
            {lastUpdated}
          </p>
          {/* Los estilos van explícitos y no por `prose`: el plugin de typography
              de Tailwind no está instalado, así que esas clases no hacían nada y
              el preflight dejaba los <h2> del tamaño de un párrafo y las listas
              sin viñeta. */}
          <div
            className="max-w-none font-archivo text-[#28292D]/80 dark:text-white/75
                       [&_h2]:text-[1.5rem] [&_h2]:md:text-[1.75rem] [&_h2]:font-black [&_h2]:tracking-[-0.02em]
                       [&_h2]:text-[#28292D] [&_h2]:dark:text-white [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:first:mt-0
                       [&_p]:text-[1.0625rem] [&_p]:leading-[1.7] [&_p]:mb-4
                       [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2
                       [&_li]:text-[1.0625rem] [&_li]:leading-[1.7]
                       [&_a]:text-[#D52169] [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-[#28292D] [&_a]:dark:hover:text-white"
          >
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
