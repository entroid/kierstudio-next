"use client";

import "./tailwind.css";
import { ThemeProvider } from "@/components/ThemeContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingControls } from "@/components/FloatingControls";
import { Botpress } from "@/components/Botpress"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <FloatingControls />  
          <Botpress />
        </ThemeProvider>
      </body>
    </html>
  );
} 
