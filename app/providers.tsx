"use client";

import { ThemeProvider } from "@/components/ThemeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
