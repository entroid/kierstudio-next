import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingControls } from "@/components/FloatingControls";
import { Botpress } from "@/components/Botpress";
import { HashScroll } from "@/components/HashScroll";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* GLOBAL: RESOLUCIÓN DE ANCLAS (#servicios, #contacto) POST-HIDRATACIÓN */}
      <HashScroll />

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
