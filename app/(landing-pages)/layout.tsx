import type { Metadata } from "next";
import { LandingFooter } from "@/components/landing-pages/LandingFooter";
import { LandingFloatingControls } from "@/components/landing-pages/LandingFloatingControls";

// Landings de campañas de nicho, hoy en desuso. Siguen accesibles por URL
// directa para cuando se reactiven, pero fuera del índice: sin metadata propia
// compiten con el home y diluyen la autoridad del dominio.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function LandingPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* LANDING: PAGE CONTENT (header included in each page) */}
      <main>{children}</main>

      {/* LANDING: FOOTER */}
      <LandingFooter />

      {/* LANDING: FLOATING CONTROLS */}
      <LandingFloatingControls />
    </>
  );
}
