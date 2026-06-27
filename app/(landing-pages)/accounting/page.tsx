"use client";

import { useLanguage } from "@/components/LanguageContext";
import { LandingHeader } from "@/components/landing-pages/LandingHeader";
import { LandingHero } from "@/components/landing-pages/LandingHero";
import { LandingProblems } from "@/components/landing-pages/LandingProblems";
import { LandingReframe } from "@/components/landing-pages/LandingReframe";
import { LandingDiagnostic } from "@/components/landing-pages/LandingDiagnostic";
import { LandingGatekeeper } from "@/components/landing-pages/LandingGatekeeper";
import { LandingCTA } from "@/components/landing-pages/LandingCTA";

export default function AccountingLandingPage() {
  const { translations } = useLanguage();

  // Use a type assertion to safely access the accounting property 
  // since the LanguageContext interface in components/LanguageContext.tsx 
  // might not have been fully updated with the new property types yet.
  const data = (translations as any).accounting;

  if (!data) return null; // Safe fallback while translations load

  return (
    <div className="bg-white  min-h-screen">
      {/* SECTION: HEADER — variant="light" for dark hero background */}
      <LandingHeader variant="light" />

      {/* SECTION: HERO */}
      <LandingHero {...data.hero} />

      {/* SECTION: PROBLEMS */}
      <LandingProblems {...data.problems} />

      {/* SECTION: REFRAME (Optional) */}
      {/* <LandingReframe {...data.reframe} /> */}

      {/* SECTION: DIAGNOSTIC */}
      <LandingDiagnostic {...data.diagnostic} />

      {/* SECTION: GATEKEEPER (Optional) */}
      {/*<LandingGatekeeper {...data.gatekeeper} />*/}

      {/* SECTION: CTA */}
      <LandingCTA {...data.cta} />
    </div>
  );
}
