"use client";

import { InfoPage } from "@/components/InfoPage";
import { useLanguage } from "@/components/LanguageContext";

/**
 * Política de cookies.
 *
 * Se sirve en español —el idioma del render— con el inglés como preferencia,
 * igual que el resto del sitio. Antes estaba sólo en inglés y con un mail de
 * contacto que no existe.
 *
 * El contenido describe lo que el sitio hace de verdad: es la página que
 * enlaza el banner de consentimiento, así que si se desincroniza del código
 * el consentimiento deja de significar algo. Ver lib/consentimiento.ts.
 */
export default function Cookies() {
  const { translations } = useLanguage();
  const { legal } = translations;
  const c = legal.cookies;

  return (
    <InfoPage
      title={c.title}
      backHref="/"
      backLabel={legal.backHome}
      lastUpdatedLabel={legal.lastUpdated}
    >
      <h2>{c.whatTitle}</h2>
      <p>{c.whatText}</p>

      <h2>{c.ownTitle}</h2>
      <p>{c.ownText}</p>
      <ul>
        {c.ownItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>{c.thirdTitle}</h2>
      <p>{c.thirdText}</p>

      <h2>{c.changeTitle}</h2>
      <p>{c.changeText}</p>

      <h2>{c.contactTitle}</h2>
      <p>
        {c.contactText}{" "}
        <a href={`mailto:${legal.contactEmail}`}>{legal.contactEmail}</a>.
      </p>
    </InfoPage>
  );
}
