# Kier Studio — Project Context for AI Agents

> **Last updated**: rewrite of `AGENTS.md` against the verified state of the repo.
> The previous version described the pre-repositioning site (Archivo fonts, the old
> flat folder layout, English as the render language). None of that was true anymore.
> If something here disagrees with the code, the code wins — and then fix this file.

**Purpose**: everything an agent needs to work on this repo without re-reading it, plus
the project's own working rules, which are not optional.

---

## Table of Contents

1. [What this business is](#1-what-this-business-is)
2. [How to work in this repo (project rules)](#2-how-to-work-in-this-repo-project-rules)
3. [Tech stack](#3-tech-stack)
4. [Project structure](#4-project-structure)
5. [Routing](#5-routing)
6. [Design system](#6-design-system)
7. [Internationalization](#7-internationalization)
8. [State management](#8-state-management)
9. [Analytics & consent](#9-analytics--consent)
10. [Component patterns](#10-component-patterns)
11. [Styling guidelines](#11-styling-guidelines)
12. [Documentation map](#12-documentation-map)
13. [Build, deploy & verification](#13-build-deploy--verification)
14. [Known debt & traps](#14-known-debt--traps)

---

## 1. What this business is

**Kier Studio** — an **AI automation and custom-applications consultancy for PyMEs**,
based in Rosario, Argentina, working globally.

The pitch is "menos tareas a mano": find the repetitive work eating a small company's
hours — loading invoices, re-keying WhatsApp orders, chasing suppliers — and automate it
**without replacing the systems the client already uses**. Plus custom internal systems,
and websites/e-commerce when that's what the client needs.

**This repositioning is recent and still in progress.** The work samples are mixed:
automation cases (`carga-automatica-de-facturas`, `seguimiento-de-ordenes-de-compra`,
both Oil & Gas) sit beside the older design/development portfolio (Hard Rock, Muu, MIRAI
Fleet, Barrivell, HOLY, TEAMIE). Residual "design studio" language still exists in some
copy — see [§14](#14-known-debt--traps). Treat the automation positioning as the target.

Contact: `kierstudio.info@gmail.com` · `+54 9 341 7211814` · `kierstudio.com` (apex, not www).

---

## 2. How to work in this repo (project rules)

These come from the repo's own internal docs and are enforced by convention, not tooling.

### 2.1 Measurement governs site changes

`analytics/ciclo-2026-09.md` is the hand-off between work sessions. Read it before
changing the site. As of its last entry:

- The measurement cycle is **closed, and the next one is paused** — not because the
  site failed, but because the diagnosis was **acquisition, not conversion**.
- Evidence: 0 clicks, 24 impressions, 3 pages indexed, 6 pages in Google's
  "Discovered: currently not indexed", and 248 of 254 backlinks from a single domain.
  URL inspection showed `Último rastreo: N/D` — Google never even crawled the case pages.
- **The rule while a cycle is open**: no changes to copy, design or structure, and no
  A/B testing (at this traffic volume nothing reaches significance). If you must change
  something, **log it with a date in the "Cortes registrados" section** — it resets the
  counting window.
- If you're asked to make a site change, check the cycle's status first and mention the
  consequence rather than silently contaminating the window.

### 2.2 No invented data — ever

This is the deepest rule in the project, and it appears in three places
(`auditorias/`, `analytics/`, and the `contact-xray` skill):

- **A number without a source is not published.** If it isn't measured, it doesn't go on
  the site. The old homepage's "50+ proyectos", "+32% en conversión" and "100% de
  satisfacción" were removed precisely for being unfounded.
- Project metrics carry `metricsNota` describing where they come from and how to read
  them. `types/project.ts` omits optional fields (`year`, `metrics`) rather than filling
  them with something plausible.
- The same discipline applies to anything you write: leave the gap and say it's a gap.

### 2.3 Closed documents are immutable

An audit marked **cerrada** is never reopened or edited. New findings go in a new,
dated file (`auditorias/README.md`). Findings are tracked by the `done` flag in the
file's `HALLAZGOS` array and **committed** — the localStorage checkbox is personal and
doesn't count for the team.

### 2.4 Analytics events need a question behind them

Every custom event exists to answer a specific question. An event without a question is
debt. Don't add one speculatively — see [§9](#9-analytics--consent).

### 2.5 Writing & code conventions

- **Comments and internal docs are in Spanish**, and they explain **why**, not what.
  Many comments document a decision that was tried and reversed, or a trap that cost
  time. Match that register: a comment is for the next person's reasoning, not a
  restatement of the line below it.
- **Commit messages**: Conventional Commits, in Spanish, lowercase, describing the
  user-visible outcome — e.g. `fix(trabajos): cada caso pasa a tener su propia URL`,
  `perf: las imágenes y las fuentes dejan de viajar enteras`.
- **Audio/visual assets and legal text** are content, not code: never fabricate a metric,
  a client name, or a testimonial.

---

## 3. Tech stack

| Area | Choice | Notes |
|---|---|---|
| Framework | **Next.js 14.2.0**, App Router | Not Pages Router. Static-first. |
| UI | **React 18.3.1** | Almost everything is `"use client"`. |
| Language | **TypeScript 5.7**, `strict: true` | Path alias `@/*` → repo root. |
| Styling | **Tailwind CSS 4.1** + PostCSS 8 | CSS-first config in `app/tailwind.css`. |
| Animation | **Motion 11** | Import from `"motion/react"` — **not** `framer-motion`. |
| Headless UI | **Radix UI** (30 packages) + shadcn-style wrappers | Unstyled, styled with Tailwind. |
| Forms | React Hook Form 7 + native `FormData` | Contact form posts via `fetch` to formsubmit.co. |
| Icons | `lucide-react` | `optimizePackageImports` enabled in `next.config.mjs`. |
| Analytics | **PostHog** (`posthog-js`) | Production only — see [§9](#9-analytics--consent). |
| Chat | **Botpress** | Loaded by `components/Botpress.tsx`. |
| Misc | `clsx`, `tailwind-merge`, `class-variance-authority`, `embla-carousel-react`, `recharts`, `sonner` | |

**Not installed, on purpose**: Google Analytics. `analytics/README.md` records this as a
decision, not an oversight — PostHog covers the role, and a third source means three
numbers for the same question.

---

## 4. Project structure

```
kierstudio-next/
├── app/
│   ├── layout.tsx                    # Root: metadata, JSON-LD, providers, fonts
│   ├── tailwind.css                  # Tailwind 4 theme, tokens, @utility titulo/etiqueta
│   ├── performance.css               # Scroll-behavior, scroll-margin, reduced-motion
│   ├── robots.ts / sitemap.ts        # Generated route handlers
│   ├── providers.tsx                 # ⚠ UNUSED — see §14
│   ├── (main)/                       # Main site (Nav + Footer + FloatingControls + Botpress)
│   │   ├── layout.tsx
│   │   ├── page.tsx                  # The one-pager home
│   │   ├── trabajos/[slug]/page.tsx  # Prerendered case pages
│   │   └── cookies/ privacy/ terms/  # Legal (noindex)
│   └── (landing-pages)/              # Isolated campaign landings — noindex
│       ├── layout.tsx                # Own header/footer/controls, robots noindex
│       └── accounting/ contacto/ saludybienestar/
├── components/
│   ├── <section>/                    # hero/, about/, services/, projects/, partners/,
│   │                                 # process/, testimonial/, cta/ — each with index.tsx
│   ├── landing-pages/                # LandingHeader/Hero/Problems/Reframe/Diagnostic/…
│   ├── pages/                        # Cookies, PrivacyPolicy, Terms bodies
│   ├── ui/                           # ~50 shadcn/Radix primitives
│   ├── LanguageContext.tsx           # i18n state
│   ├── ThemeContext.tsx              # Dark mode + accessibility settings
│   ├── Navigation.tsx  Footer.tsx  FloatingControls.tsx  HashScroll.tsx
│   ├── ConsentBanner.tsx  PostHogProvider.tsx  SeccionVista.tsx  Botpress.tsx
│   └── projects/ProjectCase.tsx      # Case-study page body
├── translations/
│   ├── en/ es/                       # 15 modules each — see §7
│   └── index.ts
├── lib/
│   ├── analytics.ts                  # The five custom events + typed properties
│   ├── consentimiento.ts             # Cookie consent gate for the Meta Pixel
│   └── enlaces.ts                    # Hash links that work from non-home pages
├── types/project.ts                  # Project / ProjectMetric / ProjectStep
├── analytics/                        # Measurement report + cycle hand-off (see §12)
├── auditorias/                       # Dated, self-contained HTML audits (see §12)
├── .agents/skills/contact-xray/      # Internal commercial-prospecting skill
└── public/                           # Images, video, og.png, schema/*.json
```

`analytics/` and `auditorias/` contain **no build output** — they're standalone HTML
files opened by double-click, versioned in git, and they are part of the product's
working method. Don't "clean them up".

---

## 5. Routing

| Route | File | Notes |
|---|---|---|
| `/` | `app/(main)/page.tsx` | One-pager: Hero → About → Services → Projects → Partners → Process → Testimonial → CTA |
| `/trabajos/[slug]` | `app/(main)/trabajos/[slug]/page.tsx` | **SSG**, `dynamicParams = false`, 8 pages, in the sitemap |
| `/accounting`, `/contacto`, `/saludybienestar` | `app/(landing-pages)/*` | Campaign landings, `noindex`, reachable from nav dropdown |
| `/cookies`, `/privacy`, `/terms` | `app/(main)/*` | `noindex` and deliberately **out of the sitemap** |
| `/robots.txt`, `/sitemap.xml` | `app/robots.ts`, `app/sitemap.ts` | Generated |

**Case pages are fully data-driven.** `generateStaticParams`, the metadata, the sitemap
and the page body all derive from `translations/*/projectsData.ts`. Adding a case = adding
an object there; the slug is identical in both languages on purpose (the language is
chosen client-side, so a per-language slug would split the SEO).

Note `robots.ts` allows everything and blocks nothing: `noindex` is declared in each
page's metadata instead. Blocking the crawl would prevent Google from reading that
`noindex` and lead to the URL being indexed anyway — the opposite of the intent.

---

## 6. Design system

### Typography (three families)

| Role | Family | How it's loaded | Utility |
|---|---|---|---|
| Headings | **Josefin Sans 700** | `next/font/google` → `--fuente-josefin` | `@utility titulo` |
| Body | **Geist Sans** 400/600/700 | `geist/font/sans` → `--font-geist-sans` | `font-archivo` (legacy alias) |
| Detail / labels | **Geist Mono** 500 | `geist/font/mono` → `--font-geist-mono` | `font-mono` |

`@utility titulo` = Josefin Sans 700, `line-height: 100%`, `letter-spacing: -0.03em`.
`@utility etiqueta` = mono, uppercase, `letter-spacing: 0.12em`, with a pink `// `
prefix injected via `::before`.

> **Trap**: the class `font-archivo` is still used everywhere for body text, but
> `--font-archivo` is now aliased to **Geist Sans** in `app/tailwind.css`. Archivo is no
> longer loaded. Don't reintroduce it.

> **Trap (fuentes)**: next/font registra cada familia con un nombre **interno y hasheado**
> (`@font-face { font-family: __Josefin_Sans_xxxx }`) y expone una variable
> (`--fuente-josefin`) cuyo valor es esa lista interna. Los nombres planos —`Josefin Sans`,
> `Geist Sans`— **no quedan registrados**: pedirlos en un `font-family` cae a `sans-serif`
> sin ningún error. Verificado midiendo el ancho de un mismo texto: interno 729px, plano
> 706px (idéntico a sans-serif). Por eso `titulo`, `etiqueta`, `body` y los `@theme` usan
> `var(--fuente-*)` / `var(--font-geist-*)`, y **nada redeclara esas variables en `:root`**:
> hacerlo pisa el valor que next/font monta en `<html>` y los títulos vuelven al fallback
> en silencio. Los `@theme` son `inline` para que el `var()` llegue tal cual al navegador.

### Color tokens

```css
--primary: #D52169        /* brand pink/magenta */
--dark-gray: #28292D      /* near-black — text and dark surfaces */
--background: #ffffff     /* light bg */    .dark → #0a0a0a
--foreground: #171717     /* light fg */    .dark → #ededed
--ring: #D52169
```

Dark mode is a `.dark` class on `<html>` (`@variant dark (&:where(.dark, .dark *))`).
Inline hex usage (`bg-[#D52169]`, `dark:bg-[#0a0a0a]`) is common and expected — follow
the surrounding file's style rather than introducing tokens mid-component.

### Breakpoints — **custom, do not assume Tailwind defaults**

```css
sm: 580px   md: 768px   lg: 1180px   xl: 1360px   2xl: 1536px
```

`lg` at **1180px** is load-bearing: `HeroAnimated` switches video source on exactly this
breakpoint via `matchMedia`. Changing it changes which video gets downloaded.

### Motion

- Entrance: `initial={{ opacity: 0, y: 30 }}` → `animate`/`whileInView={{ opacity: 1, y: 0 }}`
- Hover: `whileHover={{ scale: 1.05 }}` (primary CTAs also `x: 5`) · Tap: `whileTap={{ scale: 0.95 }}`
- Scroll animations use `viewport={{ once: true }}`, durations 0.3–0.6s.
- **Rule learned the hard way** (audit finding 07): if a text block is taller than the
  viewport, it must not depend on entering the viewport to become visible. Nested
  `whileInView` on an over-tall element leaves it at `opacity: 0` forever.

---

## 7. Internationalization

**Spanish is the language of the render.** This was the #1 audit finding: the server used
to emit `<html lang="en">` with English headings while the metadata was Spanish, because
`LanguageContext` started in `en`. A crawler never runs the client logic, so the site was
invisible for Spanish queries.

- `LanguageContext.tsx` → `DEFAULT_LANGUAGE = "es"`, unconditionally.
- `app/layout.tsx` → `<html lang="es">`.
- On mount, an **explicit** stored preference wins; otherwise it moves to `en` **only if
  the browser is clearly not Spanish-speaking**. A Spanish-speaking visitor never sees a
  switch.
- The toggle only changes text client-side — **the URL and the server metadata stay
  Spanish**. Case-page metadata is read from `es.projectsData` for this reason.

### Structure

`translations/{en,es}/` each hold 15 modules combined by `index.ts`:
`common` (nav/footer/controls), `hero`, `services`, `contact` (exported as `cta`), `about`,
`partners`, `projects`, `process`, `testimonials`, `projectsData`, `accounting`,
`saludybienestar`, `presentacion`, `consent`, `legal`.

### Rules

- **The two trees must stay structurally identical.** Keep keys, commas and placeholders
  (`{year}`, `{bold}`) intact; never translate emails, URLs or placeholders.
- **Use `t()` for strings, `translations.*` for arrays.** `t()` returns a string only and
  warns + returns the key if you point it at an array or object.
- Landing pages read their data defensively (`(translations as any).accounting`) because
  they predate the typed context; if you touch one, prefer tightening it.
- **Dead**: `translations/*/common.ts → seo` is never read — real metadata lives in
  `app/layout.tsx`. See [§14](#14-known-debt--traps).

---

## 8. State management

Two React contexts, both with SSR-safe mount guards (`mounted` state), so children render
during SSR and client state applies after hydration. Don't read `window`/`localStorage`
during render.

**`ThemeContext`** — `darkMode` + `toggleDarkMode`, and an `accessibility` object
(`fontSize`, `highContrast`, `reducedMotion`, `screenReader`) with `updateAccessibility`.
Persists theme to `localStorage["theme"]`; falls back to `prefers-color-scheme`. Applies
`fontSize` to `<html>`. The accessibility panel exists in `FloatingControls` but is a
secondary surface, not a core path.

**`LanguageContext`** — `language`, `setLanguage`, `t`, `translations`. Persists to
`localStorage["language"]`. See [§7](#7-internationalization).

There is no global store, no server state layer, no data fetching. Content is static.

---

## 9. Analytics & consent

### PostHog

Production only. `components/PostHogProvider.tsx` refuses to initialize when
`NODE_ENV !== "production"`, on `localhost`/`127.0.0.1`, or on `*.vercel.app` — preview
traffic used to pollute a project whose whole dataset is a few dozen sessions.
Pageviews are captured manually on route change (`capture_pageview: false`), inside a
`<Suspense>` boundary.

Env: `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`, `NEXT_PUBLIC_POSTHOG_HOST` (in `.env.local`).

### The five events — `lib/analytics.ts`

Deliberately **five**. Each answers one question; a new event needs a new question.

| Event | Properties | Question |
|---|---|---|
| `seccion_vista` | `seccion` | How far down the argument do people get? |
| `contacto_iniciado` | `origen`, `canal`, `producto?`, `proyecto?` | Which part generates contacts, by which channel and for which product? |
| `contacto_enviado` | `origen` | How many finish? |
| `proyecto_abierto` | `proyecto`, `origen` | Which case is seen, and how did they arrive? |
| `salida_externa` | `canal`, `origen` | Who left to write on WhatsApp? |

Implementation notes that aren't obvious:

- **`lib/analytics.ts` must not import `posthog-js`.** A static import dragged ~79 kB into
  every route that has a CTA. `PostHogProvider` calls `registrarCliente()` after init
  instead. With no client registered, capture is a silent no-op.
- **In development, events log to console and are not sent.** That is the only way to
  verify wiring without polluting production data.
- `seccion_vista` fires once per section per session, deduped via `sessionStorage`.
  `components/SeccionVista.tsx` observes sections by DOM id using `ID_A_SECCION`.
- `proyecto_abierto` fires **on page mount, not on the card click**, because a case can be
  reached from search or a shared link where there is no click to catch. The click only
  writes the origin into `sessionStorage` (`marcarOrigenCaso`), because
  `document.referrer` doesn't update under client-side navigation.
- `proyecto_abierto.origen` is `trabajos | caso | directo` — **not** a section.
  `directo` is the row that matters: it's the only proof the case pages live outside the
  home. It was still 0 at the last review.
- `proyecto` travels only from a case page, and the slug (not the title) is used, since
  titles change with language and would split one case into two values.

### Consent — `lib/consentimiento.ts` + `components/ConsentBanner.tsx`

The Meta Pixel (`2551501831869054`) used to fire in `<head>`, before any choice was
possible, while the site published a cookie policy. Now it is loaded **only** by the
banner, **only** after an explicit accept, and the accept is persisted. There is no grey
area: no accept means no pixel. The `noscript` tracking `<img>` was removed for the same
reason. "Rechazar" is rendered first with equal visual weight to "Aceptar".

---

## 10. Component patterns

Every section is a client component. The conventional shape:

```tsx
"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/components/LanguageContext";

export function Section() {
  const { t } = useLanguage();
  return (
    <section id="section-id" className="py-16 md:py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">{/* … */}</div>
    </section>
  );
}
```

Conventions:

- Section folders export through `index.tsx` (e.g. `export { CTAAnimated as CTA } from "./CTAAnimated"`).
- Section `id`s must match `ID_A_SECCION` in `lib/analytics.ts` for `seccion_vista` to fire.
- Section label = `<span className="etiqueta …">`; heading = `<h2 className="titulo …">`.
- Section max widths in play: `1400px` (most), `1600px` (footer/services).
- **`CTAButton` is the analytics-carrying button.** Pass `origen` (and `canal`, `proyecto`)
  or the click won't be measured. It renders `<a>` with `href`, `<button>` without.
- **Hash links must go through `enlaceSeccion(href, pathname)`** from `lib/enlaces.ts`.
  A bare `#contacto` resolves relative to the current path and silently does nothing on
  any page that isn't `/`.
- `ImageWithFallback` wraps `next/image` with a fallback; all images go through the
  Next Image pipeline (webp/avif configured in `next.config.mjs`).
- Accessibility: `aria-label` on every icon-only control, alt text on images, `aria-expanded`
  on disclosure buttons.

---

## 11. Styling guidelines

- Prefer **explicit arbitrary values** over Tailwind size shorthands, matching the codebase:
  `text-[0.875rem]`, `tracking-[0.05em]`, `max-w-[1400px]`, `text-[2.625rem] md:text-[5.25rem]`.
- Font weight is often set inline (`style={{ fontWeight: 700 }}`) because the base class
  doesn't carry it. Follow the file you're editing.
- Always ship both themes: `text-[#28292D] dark:text-white`,
  `bg-white dark:bg-[#0a0a0a]`, `border-black/10 dark:border-white/10`, plus
  `transition-colors duration-500`.
- Mobile-first, `md:` and `lg:` (1180px) breakpoints.
- Reduced motion is honored globally in `app/performance.css`.
- Sections carry `scroll-margin-top: 6rem` to clear the fixed 96px header — keep it in
  mind before adding fixed elements.

---

## 12. Documentation map

| File | What it is | How to use it |
|---|---|---|
| `AGENTS.md` | This file | Entry point for any agent |
| `PENDIENTES.md` | Backlog de frentes abiertos, en orden | Read before starting new work; it defines what goes first |
| `analytics/README.md` | How measurement works: sources, reading rules | Read before interpreting numbers |
| `analytics/ciclo-2026-09.md` | **Session hand-off** — baseline, what to check, hypothesis, result | Read before touching the site |
| `analytics/ciclo-2026-10-revision.md` | Cierre del ciclo 01: las dos fuentes leídas juntas (PostHog + GSC) | El diagnóstico vigente y completo |
| `analytics/reporte.html` | Accumulating measurements; add an object to the `mediciones` JSON array | Don't touch the HTML to add a measurement |
| `auditorias/README.md` | Audit conventions and tracking | Read before writing an audit |
| `auditorias/2026-09-01-auditoria-inicial.html` | Audits 1–12, all closed | Immutable record |
| `cerebro/` | **Second brain del estudio** — empresa, oferta y precio, clientes, SOPs, decisiones | **No versionado** (`.gitignore`): el repo es público. Sólo copia local. Empezá por `cerebro/AGENTS.md`. |
| `TRANSLATIONS_GUIDE.md` | i18n editing guide | ⚠ Partly stale — see §14 |
| `.agents/skills/contact-xray/` | Internal prospecting skill (scoring, research, report builder) | Load via the skill tool, not by hand |

**Reading rules for numbers** (`analytics/README.md`): never a percentage without its N
("3 de 18", not "17%"); quantitative for *where*, qualitative (session replay) for *why*;
no A/B testing at this volume; one change at a time, two weeks minimum.

---

## 13. Build, deploy & verification

```bash
npm install
npm run dev      # localhost:3000
npm run build    # production build, must pass before any commit
npm start
npm run lint
```

- **Deploy**: Vercel, auto-deploys from `main`, Node 20.x. No CI/CD beyond that.
- **Prerendering**: 22 routes; the 8 case pages are SSG.
- **Verify with**: `npx tsc --noEmit` (fast, clean) and `npm run build`.
- ⚠ **`next build` cannot run inside the confined file sandbox** — Next's jest-workers
  fork child processes with piped stdio and the sandbox rejects it (`spawn EPERM`). The
  build is not broken; it needs full access. `tsc` runs fine either way.

---

## 14. Known debt & traps

Accumulated from the audit, the git history, and the current file tree. Nothing here is
hypothetical.

1. **`translations/*/common.ts → seo` is dead code.** Nothing reads it (verified by
   search); real metadata is hardcoded in `app/layout.tsx`. It still contains the old
   positioning ("Kier Studio | SaaS & Web Development Agency"). Either wire metadata to it
   or delete it — leaving it means a stale, misleading copy lives in the repo.
2. **`app/providers.tsx` is unused.** `app/layout.tsx` imports `ThemeProvider` directly.
3. **Residual "design studio" copy** in `translations/{en,es}/presentacion.ts` ("CREATIVE
   STUDIO", marquee of Websites/Applications/Strategy) and `common.ts → footer.description`
   ("crafting your digital product"). This is the `/contacto` landing. Either update it or
   accept it as legacy.
4. **`FloatingControls` chat pulse is an un-cleaned `while(true)` loop** — flagged in audit
   finding 05 and explicitly deferred ("los cuatro flotantes siguen ahí — es un cambio
   aparte"). It never stops, including after unmount.
5. **The accessibility panel** is wired through `ThemeContext` but is a secondary surface.
   Changing accessibility state has no test coverage.
6. **`TRANSLATIONS_GUIDE.md` is stale.** It documents the old flat `translations/en.ts`
   layout and doesn't mention `projectsData` or the landing-page modules.
7. **`build.log` is still committed** (a build artifact), and `.tmp-shot/` — five working
   screenshots, ~1.5 MB — landed in `0b9c526` on 2026-10-27. `tsconfig.tsbuildinfo` is
   already covered by `*.tsbuildinfo` in `.gitignore`. `.tmp-shot/` is **not** ignored,
   so it will keep coming back until it is added.
8. **The remote org is spelled `entroid`, not `entroid`** — full URL
   `github.com/entroid/kierstudio-next.git`. Easy to mistype when copying. Current
   working branch: `hernan`; `main` is deploy.
9. **Section order changed recently** (Partners moved after Projects). If you compare
   `seccion_vista` across time, the drop between consecutive sections depends on the order
   in force during each period — use the order in `app/(main)/page.tsx` for the current one.
10. **`analytics/` and `auditorias/` are product artifacts**, not scratch space. Never
    delete, "regenerate", or reformat them.
11. **`cerebro/` is a local, gitignored second brain** — company notes, clients, pricing,
    decisions. The repo is **public**, so it must never be added to git, not even
    "temporarily", and no committed file may quote its contents. Entry point:
    `cerebro/AGENTS.md`. It has no git history, so it needs its own backup.

---

## Quick checklist for a new feature

- [ ] Checked `analytics/ciclo-2026-09.md` for an open cycle; logged the change if needed
- [ ] `"use client"` where hooks/animation are used
- [ ] All text comes from `translations` (both `en` and `es`, structurally identical)
- [ ] Dark mode classes on every new surface
- [ ] Responsive at 580 / 768 / 1180 / 1360 / 1536
- [ ] CTAs pass `origen` (and `canal`/`proyecto`) so the click is measured
- [ ] Hash links go through `enlaceSeccion`
- [ ] No number is published without a source; no placeholder data
- [ ] `npx tsc --noEmit` clean, `npm run build` green
- [ ] Tested in ES and EN, light and dark, and on mobile
