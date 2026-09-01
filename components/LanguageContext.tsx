"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en, es } from "@/translations";

type Language = "en" | "es";
type TranslationKey = string;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
  translations: typeof en | typeof es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en,
  es,
};

// El español es el idioma del render: es lo que sirve el servidor y, por lo
// tanto, lo único que indexan los buscadores. El inglés existe como preferencia
// del visitante (toggle o navegador), nunca como estado inicial.
const DEFAULT_LANGUAGE: Language = "es";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize language from localStorage or browser preference
  useEffect(() => {
    if (!mounted) return;

    try {
      // La preferencia explícita del visitante gana siempre.
      const stored = localStorage.getItem("language") as Language | null;

      if (stored === "en" || stored === "es") {
        setLanguageState(stored);
        return;
      }

      // Sin preferencia guardada: sólo nos movemos del español si el navegador
      // claramente no es hispanohablante. Así el visitante hispanohablante —que
      // es el primario— nunca ve un cambio de idioma en pantalla.
      const browserLang = (navigator.language || "").toLowerCase();
      if (browserLang && !browserLang.startsWith("es")) {
        setLanguageState("en");
      }
    } catch (error) {
      // Ante cualquier error, nos quedamos en el idioma del render.
      setLanguageState(DEFAULT_LANGUAGE);
    }
  }, [mounted]);

  // Mantener <html lang> en sincronía con el idioma que se está mostrando.
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = language;
  }, [language, mounted]);

  // Persist language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("language", lang);
    } catch (error) {
      console.error("Failed to save language preference:", error);
    }
  };

  // Translation function with nested key support and parameter interpolation
  const t = (key: TranslationKey, params?: Record<string, string | number>): string => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    if (typeof value !== "string") {
      console.warn(`Translation value is not a string: ${key}`);
      return key;
    }

    // Replace parameters in the string
    if (params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return paramKey in params ? String(params[paramKey]) : match;
      });
    }

    return value;
  };

  // While waiting for mount, we render children to allow SSR. 
  // The useEffects will handle client-side updates without blocking initial render.

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        translations: translations[language],
      }}
    >
      <div style={{ visibility: mounted ? 'visible' : 'visible' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
