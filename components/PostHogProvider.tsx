"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { usePathname, useSearchParams } from "next/navigation";
import { registrarCliente } from "@/lib/analytics";
import { useEffect, Suspense } from "react";

/**
 * Sólo medimos producción. El tráfico de desarrollo y el de los previews de
 * Vercel entraban al mismo proyecto: sobre un volumen de decenas de sesiones,
 * unas pocas visitas nuestras alcanzan para torcer cualquier lectura.
 */
function esEntornoMedible(): boolean {
  if (typeof window === "undefined") return false;
  if (process.env.NODE_ENV !== "production") return false;

  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return false;
  if (host.endsWith(".vercel.app")) return false;

  return true;
}

if (esEntornoMedible()) {
  const key = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN || process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

  if (key) {
    posthog.init(key, {
      api_host: host,
      person_profiles: "identified_only",
      capture_pageview: false, // Handled manually below on route change
      capture_pageleave: true,
    });

    // lib/analytics no importa posthog-js para no inflar los bundles de ruta:
    // le pasamos el cliente ya inicializado.
    registrarCliente(posthog);
  }
}

function PostHogPageView(): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // __loaded es la única señal de que init() corrió: si estamos en desarrollo
    // o en un preview, no hay nada que capturar.
    if (pathname && typeof window !== "undefined" && posthog.__loaded) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export function PostHogPageViewWrapper() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  );
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
