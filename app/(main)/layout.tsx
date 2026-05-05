import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingControls } from "@/components/FloatingControls";
import { Botpress } from "@/components/Botpress";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* GLOBAL: NAVIGATION */}
      <Navigation />

      {/* PAGE CONTENT */}
      {children}

      {/* GLOBAL: FOOTER */}
      <Footer />

      {/* GLOBAL: FLOATING CONTROLS */}
      <FloatingControls />

      {/* GLOBAL: BOTPRESS CHAT */}
      <Botpress />
    </>
  );
}
