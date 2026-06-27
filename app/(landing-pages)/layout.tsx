import { LandingFooter } from "@/components/landing-pages/LandingFooter";
import { LandingFloatingControls } from "@/components/landing-pages/LandingFloatingControls";

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
