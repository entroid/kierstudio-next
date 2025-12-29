"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  accessibility: AccessibilitySettings;
  updateAccessibility: (settings: Partial<AccessibilitySettings>) => void;
}

export interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>({
    fontSize: 100,
    highContrast: false,
    reducedMotion: false,
    screenReader: false,
  });

  // Prevent hydration mismatch: do not render until mounted
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (!mounted) return;

    try {
      const stored = localStorage.getItem("theme");
      const isSystemDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      const initialDark = stored ? stored === "dark" : isSystemDark;
      setDarkMode(initialDark);
    } catch { }
  }, [mounted]);

  // Reflect theme on <html> and persist
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch { }
    } else {
      root.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch { }
    }
  }, [darkMode, mounted]);

  // Accessibility settings
  useEffect(() => {
    if (!mounted) return;

    document.documentElement.style.fontSize = `${accessibility.fontSize}%`;

    if (accessibility.reducedMotion) {
      document.documentElement.style.setProperty("--animation-duration", "0s");
    } else {
      document.documentElement.style.setProperty("--animation-duration", "0.3s");
    }
  }, [accessibility, mounted]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const updateAccessibility = (settings: Partial<AccessibilitySettings>) => {
    setAccessibility((prev) => ({ ...prev, ...settings }));
  };

  // While waiting for mount, we render children to allow SSR.
  // The useEffects will handle client-side updates without blocking initial render.

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        accessibility,
        updateAccessibility,
      }}
    >
      {/* 
        We use a wrapper to avoid flash of unstyled content if necessary, 
        but for SSR we want content to be visible immediately. 
        Theme application (dark mode) happens in useEffect.
      */}
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
