import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./tailwind.css";
import "./performance.css";
import { ThemeProvider } from "@/components/ThemeContext";
import { LanguageProvider } from "@/components/LanguageContext";
import { PHProvider, PostHogPageViewWrapper } from "@/components/PostHogProvider";
import { ConsentBanner } from "@/components/ConsentBanner";

/**
 * Archivo es la única fuente que el sitio usa de verdad (207 usos; las demás
 * familias que aparecen en las clases vienen de exportar desde Figma con nombres
 * tipo `Inter:Regular`, que no son CSS válido y nunca cargaron nada).
 *
 * Se carga con next/font en vez de un `@import` de CSS: el `@import` bloqueaba
 * el render —el navegador tenía que ir a Google Fonts antes de pintar— y traía
 * los nueve pesos. Esto la auto-hospeda, la sirve desde el mismo dominio y sólo
 * con los pesos que se usan.
 */
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  // Variable con el eje de ancho: los títulos usan la versión expandida
  // (font-stretch 125%), que como archivo estático no existe.
  axes: ["wdth"],
  variable: "--fuente-archivo",
});

// Geist y Geist Mono no están en los datos de next/font/google de Next 14.2,
// así que vienen del paquete `geist`, que también las auto-hospeda.
// Exponen --font-geist-sans y --font-geist-mono.

// SEO Metadata
export const metadata: Metadata = {
  title: "Automatización con IA y aplicaciones a medida | Kier Studio",
  description: "Automatizamos las tareas repetitivas de tu PyME —facturas, pedidos, proveedores— con IA y sin cambiar tu sistema. Consultanos sin cargo.",
  keywords: "automatización de procesos, automatización con IA, automatización para pymes, carga automática de facturas, automatizar pedidos de WhatsApp, seguimiento de proveedores, aplicaciones a medida, sistemas de gestión a medida, consultora de automatización Argentina, desarrollo de software a medida",
  authors: [{ name: "Kier Studio" }],
  creator: "Kier Studio",
  publisher: "Kier Studio",
  metadataBase: new URL("https://kierstudio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://kierstudio.com",
    title: "Kier Studio — Automatización con IA y aplicaciones a medida para PyMEs",
    description: "Detectamos las tareas que le comen horas a tu equipo —facturas, pedidos, proveedores— y las automatizamos con IA, sin cambiar el sistema que ya usás. Consultanos sin cargo.",
    siteName: "Kier Studio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kier Studio — Automatización y aplicaciones a medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kier Studio — Automatización con IA y aplicaciones a medida para PyMEs",
    description: "Detectamos las tareas que le comen horas a tu equipo —facturas, pedidos, proveedores— y las automatizamos con IA, sin cambiar el sistema que ya usás. Consultanos sin cargo.",
    images: ["/og.png"],
    creator: "@kierstudio_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${archivo.variable} ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/k-logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/k-logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kier Studio",
              "url": "https://kierstudio.com",
              "logo": "https://kierstudio.com/k-logo.svg",
              "description": "Consultora de automatización con IA y aplicaciones a medida para PyMEs. Automatizamos tareas repetitivas —facturas, pedidos, seguimiento de proveedores— sin reemplazar los sistemas que la empresa ya usa. Con sede en Rosario, Argentina.",
              "inLanguage": "es-AR",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rosario",
                "addressCountry": "Argentina"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "kierstudio.info@gmail.com",
                "telephone": "+54 9 341 7211814",
                "contactType": "customer service",
                "availableLanguage": ["English", "Spanish"]
              },
              "sameAs": [
                "https://www.instagram.com/kierstudio_",
                "https://www.facebook.com/kierstudio"
              ],
              "founder": {
                "@type": "Person",
                "name": "Kier Studio Team"
              }
            })
          }}
        />
        {/* El Meta Pixel ya no vive acá.
            Disparaba en el <head>, es decir antes de que el visitante pudiera
            decidir nada, mientras el sitio publicaba una política de cookies.
            Ahora lo carga <ConsentBanner /> y sólo después de un "aceptar"
            explícito. Ver lib/consentimiento.ts.

            El <img> de <noscript> se eliminó por lo mismo: disparaba sin
            consentimiento posible y sin forma de condicionarlo. */}
      </head>
      <body>
        <PHProvider>
          <ThemeProvider>
            <LanguageProvider>
              <PostHogPageViewWrapper />
              {children}
              <ConsentBanner />
            </LanguageProvider>
          </ThemeProvider>
        </PHProvider>
      </body>
    </html>
  );
} 
