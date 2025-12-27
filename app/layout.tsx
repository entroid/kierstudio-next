import type { Metadata } from "next";
import "./tailwind.css";
import "./performance.css";
import { ThemeProvider } from "@/components/ThemeContext";
import { LanguageProvider } from "@/components/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingControls } from "@/components/FloatingControls";
import { Botpress } from "@/components/Botpress";

// SEO Metadata
export const metadata: Metadata = {
  title: "Kier Studio | SaaS & Web Development Agency",
  description: "We craft impactful SaaS and Websites for growth and success. Strategic design and development services based in Rosario, Argentina.",
  keywords: "SaaS development, web development, React, Next.js, Argentina, Rosario, digital agency, product design",
  authors: [{ name: "Kier Studio" }],
  creator: "Kier Studio",
  publisher: "Kier Studio",
  metadataBase: new URL("https://kierstudio.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "es": "/es",
      "x-default": "/"
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kierstudio.com",
    title: "Kier Studio | SaaS & Web Development Agency",
    description: "We craft impactful SaaS and Websites for growth and success. Strategic design and development services based in Rosario, Argentina.",
    siteName: "Kier Studio",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Kier Studio - SaaS & Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kier Studio | SaaS & Web Development Agency",
    description: "We craft impactful SaaS and Websites for growth and success. Strategic design and development services based in Rosario, Argentina.",
    images: ["/hero.png"],
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
    <html lang="en" suppressHydrationWarning>
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
              "description": "We craft impactful SaaS and Websites for growth and success. Strategic design and development services based in Rosario, Argentina.",
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
      </head>
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
