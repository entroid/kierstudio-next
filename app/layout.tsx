"use client";

import "./tailwind.css";
import { ThemeProvider } from "@/components/ThemeContext";
import { LanguageProvider } from "@/components/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingControls } from "@/components/FloatingControls";
import { Botpress } from "@/components/Botpress"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <FloatingControls />
            <Botpress />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 
