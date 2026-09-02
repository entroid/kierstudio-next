import type { Metadata } from "next";
import Cookies from "@/components/pages/Cookies";

/**
 * Página legal. Tiene que existir y ser accesible —la política de cookies la
 * referencia el banner de consentimiento— pero no aporta nada a quien busca en
 * Google, así que se sirve con `noindex`.
 *
 * `follow: true` y sin bloqueo en robots.txt es deliberado: si se bloqueara el
 * rastreo, Google no podría leer este `noindex` y terminaría indexando la URL
 * igual, sin descripción. Para sacar una página del índice hay que dejar que la
 * lean. Tampoco va en el sitemap: ofrecerla y pedir que no se indexe son señales
 * contradictorias.
 */
export const metadata: Metadata = {
  title: "Política de cookies | Kier Studio",
  robots: { index: false, follow: true },
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return <Cookies />;
}
