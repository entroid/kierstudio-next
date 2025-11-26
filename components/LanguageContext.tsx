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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize language from localStorage or browser preference
  useEffect(() => {
    if (!mounted) return;

    try {
      // Check localStorage first
      const stored = localStorage.getItem("language") as Language | null;

      if (stored && (stored === "en" || stored === "es")) {
        setLanguageState(stored);
      } else {
        // Detect browser language
        const browserLang = navigator.language.toLowerCase();
        const detectedLang = browserLang.startsWith("es") ? "es" : "en";
        setLanguageState(detectedLang);
        localStorage.setItem("language", detectedLang);
      }
    } catch (error) {
      // Fallback to English if error
      setLanguageState("en");
    }
  }, [mounted]);

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

  // While waiting for mount, render nothing to avoid mismatches
  if (!mounted) return null;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        translations: translations[language],
      }}
    >
      {children}
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
