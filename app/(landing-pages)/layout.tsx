import { LandingHeader } from "@/components/landing-pages/LandingHeader";
import { LandingFooter } from "@/components/landing-pages/LandingFooter";
import { LandingFloatingControls } from "@/components/landing-pages/LandingFloatingControls";

export default function LandingPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* LANDING: HEADER */}
      <LandingHeader />

      {/* LANDING: PAGE CONTENT */}
      <main>{children}</main>

      {/* LANDING: FOOTER */}
      <LandingFooter />

      {/* LANDING: FLOATING CONTROLS */}
      <LandingFloatingControls />
    </>
  );
}
