# Kier Studio - Project Context Guide for AI Agents

> **Last Updated**: November 2025  
> **Purpose**: Quick reference for AI agents to understand project architecture, tech stack, conventions, and implementation status.

---

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Design System](#design-system)
4. [Implemented Features](#implemented-features)
5. [State Management](#state-management)
6. [Internationalization (i18n)](#internationalization-i18n)
7. [Component Patterns](#component-patterns)
8. [Styling Guidelines](#styling-guidelines)
9. [Documentation](#documentation)
10. [Development Workflow](#development-workflow)
11. [Important Notes](#important-notes)

---

## Tech Stack

### Core Framework
- **Next.js** `14.2.0` - App Router (not Pages Router)
- **React** `18.3.1` - Client-side rendering (`"use client"`)
- **TypeScript** `5.7.0` - Strict mode enabled

### Styling
- **Tailwind CSS** `4.1.16` - Utility-first CSS framework
- **PostCSS** `8.5.6` - CSS processing
- **Autoprefixer** `10.4.21` - Vendor prefixes

### Animation & Motion
- **Motion** `11.0.0` (Framer Motion successor) - All animations
  - Use `motion` from `"motion/react"` (NOT `framer-motion`)
  - Common patterns: `initial`, `animate`, `whileHover`, `whileTap`, `transition`

### UI Components
- **Radix UI** - Headless accessible components
  - Dialog, Dropdown, Navigation Menu, Scroll Area, Tabs, etc.
  - Always unstyled - style with Tailwind
  
### Forms & Validation
- **React Hook Form** `7.55.0` - Form state management
- **Email.js** `4.4.1` - Contact form submissions
  - Endpoint: `formsubmit.co`

### Utilities
- **class-variance-authority** - Component variants
- **clsx** / **tailwind-merge** - Conditional className handling
- **lucide-react** `0.487.0` - Icon library

---

## Project Structure

```
kierstudio-next/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Homepage
│   ├── tailwind.css            # Global styles + Tailwind
│   └── [routes]/               # Additional routes (cookies, privacy, terms)
├── components/
│   ├── LanguageContext.tsx     # i18n state management
│   ├── ThemeContext.tsx        # Dark/light mode state
│   ├── Navigation.tsx          # Header navigation
│   ├── Hero.tsx                # Hero section
│   ├── Services.tsx            # Services showcase
│   ├── Projects.tsx            # Portfolio/projects
│   ├── Process.tsx             # Process/methodology
│   ├── Testimonial.tsx         # Client testimonials
│   ├── CTA.tsx                 # Contact section with form
│   ├── Footer.tsx              # Site footer
│   ├── FloatingControls.tsx    # Fixed bottom-right controls
│   ├── Botpress.tsx            # Chat integration
│   └── ui/                     # Reusable UI components (48 files)
├── translations/
│   ├── en/                     # English translations (modular)
│   │   ├── common.ts           # SEO, nav, footer, controls
│   │   ├── hero.ts             # Hero section
│   │   ├── services.ts         # Services section
│   │   ├── contact.ts          # Contact/CTA section
│   │   └── index.ts            # Combines all modules
│   ├── es/                     # Spanish translations (modular)
│   │   ├── common.ts           # SEO, nav, footer, controles
│   │   ├── hero.ts             # Hero section
│   │   ├── services.ts         # Services section
│   │   ├── contact.ts          # Contact/CTA section
│   │   └── index.ts            # Combines all modules
│   └── index.ts                # Main export
├── public/                     # Static assets
├── .next/                      # Build output (gitignored)
└── node_modules/               # Dependencies (gitignored)
```

---

## Design System

### Typography
- **Font Family**: `Archivo` (sans-serif)
- **Font Weights**: 
  - 400 (Regular)
  - 600 (Semi-bold)
  - 700 (Bold)
  - 800 (Extra-bold)
  - 900 (Black)
- **Font Loading**: Google Fonts (configured in layout)

### Color Palette
```css
/* Primary */
--primary: #D52169        /* Pink/Magenta - primary brand color */
--dark: #28292D           /* Near-black - text and dark elements */
--white: #FFFFFF          /* Pure white */

/* Backgrounds */
--bg-light: #FFFFFF       /* Light mode background */
--bg-dark: #0a0a0a        /* Dark mode background */
--bg-accent: #F5F5F5      /* Light gray accent */
--bg-dark-accent: #1a1a1a /* Dark gray accent */

/* Semantic Colors */
--success: #22c55e        /* Green - success states */
--error: #ef4444          /* Red - error states */
--whatsapp: #25D366       /* WhatsApp green */
```

### Spacing & Layout
- **Max Width**: `1800px` (hero), `1600px` (services/footer), `1440px` (navigation)
- **Padding**: `px-6 lg:px-12` (horizontal), `py-32` (section vertical)
- **Border Radius**: Minimal - mostly square corners
- **Transitions**: `duration-300` or `duration-500` for smooth color changes

### Animation Principles
- **Entrance**: `initial={{ opacity: 0, y: 30 }}` → `animate={{ opacity: 1, y: 0 }}`
- **Delays**: Stagger with `delay: index * 0.1`
- **Hover**: `whileHover={{ scale: 1.05 }}` or `whileHover={{ x: 5 }}`
- **Tap**: `whileTap={{ scale: 0.95 }}`
- **Easing**: `ease: "easeOut"` or `ease: "easeInOut"`

---

## Implemented Features

### ✅ Core Features
- [x] Responsive navigation with mobile menu
- [x] Dark/Light mode toggle (persistent via localStorage)
- [x] Bilingual support (English/Spanish) with browser detection
- [x] Hero section with video background
- [x] Services showcase (4 services)
- [x] Portfolio/projects section
- [x] Process methodology section
- [x] Client testimonials carousel
- [x] Contact form with validation & success/error states
- [x] Footer with social links
- [x] Floating controls (chat, scroll-to-top, language, dark mode)
- [x] Botpress chat integration
- [x] SEO metadata (title, description)

### 🎨 Design Features
- [x] Smooth scroll animations (Motion library)
- [x] Scroll-based opacity transitions
- [x] Hover effects and micro-interactions
- [x] Responsive images with fallbacks
- [x] Video backgrounds with posters
- [x] Glassmorphism effects (backdrop-blur)
- [x] Gradient overlays

### ♿ Accessibility
- [x] Aria labels on interactive elements
- [x] Keyboard navigation support
- [x] Screen reader considerations
- [x] Semantic HTML structure
- [x] Focus states
- [x] Alt text for images

---

## State Management

### Theme Context (`ThemeContext.tsx`)
**Purpose**: Manage dark/light mode and accessibility settings

```typescript
interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  accessibility: AccessibilitySettings;
  updateAccessibility: (settings: Partial<AccessibilitySettings>) => void;
}
```

**Usage**:
```tsx
import { useTheme } from "@/components/ThemeContext";

const { darkMode, toggleDarkMode } = useTheme();
```

**Features**:
- Persists to `localStorage` as `"theme"` (`"light"` | `"dark"`)
- Detects system preference on first visit
- Syncs with `<html>` class (`dark` class added/removed)
- Accessibility settings (font size, high contrast, reduced motion, screen reader)

---

### Language Context (`LanguageContext.tsx`)
**Purpose**: Manage bilingual content (English/Spanish)

```typescript
interface LanguageContextType {
  language: "en" | "es";
  setLanguage: (lang: "en" | "es") => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  translations: typeof en | typeof es;
}
```

**Usage**:
```tsx
import { useLanguage } from "@/components/LanguageContext";

const { t, language, translations } = useLanguage();

// For strings
<h1>{t('hero.title')}</h1>

// For arrays (access directly)
const items = translations.services.productDesign.items;
```

**Features**:
- Detects browser language on first visit (defaults to English)
- Persists to `localStorage` as `"language"` (`"en"` | `"es"`)
- Parameter interpolation: `t('footer.copyright', { year: 2025 })`
- Nested keys: `t('services.productDesign.title')`
- Returns key if translation missing (helps debugging)

**Translation Files**: See [TRANSLATIONS_GUIDE.md](./TRANSLATIONS_GUIDE.md)

---

## Internationalization (i18n)

### Overview
Bilingual website supporting **English (default)** and **Spanish**.

### Translation Structure
**Modular folder-based organization** for easy editing:

```
translations/
├── en/                    # English (modular files)
│   ├── common.ts         # SEO, nav, footer, controls
│   ├── hero.ts           # Hero section
│   ├── services.ts       # Services section
│   ├── contact.ts        # Contact/CTA section
│   └── index.ts          # Combines all modules
├── es/                    # Spanish (modular files)
│   ├── common.ts         # SEO, nav, footer, controles
│   ├── hero.ts           # Sección Hero
│   ├── services.ts       # Sección Servicios
│   ├── contact.ts        # Sección Contacto/CTA
│   └── index.ts          # Combina todos los módulos
└── index.ts              # Main export
```

### File Contents Example
```typescript
// translations/en/hero.ts
export const hero = {
  location: "(Based in Rosario, Argentina)",
  title: "©KIER STUDIO",
  subtitle: "We craft impactful SaaS...",
  // ...
};

// translations/en/index.ts
import { common } from './common';
import { hero } from './hero';
import { services } from './services';
import { contact } from './contact';

export const en = {
  seo: common.seo,
  nav: common.nav,
  footer: common.footer,
  controls: common.controls,
  hero,
  services,
  cta: contact,
};
```

### How to Add New Translations
1. Create new files in both `en/` and `es/` folders (e.g., `projects.ts`)
2. Export from corresponding `index.ts` files
3. Use `t('your.new.key')` in component OR access via `translations.your.new.key` for arrays

**Detailed Guide**: [TRANSLATIONS_GUIDE.md](./TRANSLATIONS_GUIDE.md)

---

## Component Patterns

### 1. All Components Are Client Components
```tsx
"use client";  // Always at the top
```

### 2. Standard Import Order
```tsx
// External libraries
import { motion } from "motion/react";
import { useState } from "react";

// Lucide icons
import { ArrowRight, Mail } from "lucide-react";

// Internal components
import { useLanguage } from "@/components/LanguageContext";
import { useTheme } from "@/components/ThemeContext";
```

### 3. Component Structure Template
```tsx
"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/components/LanguageContext";

export function ComponentName() {
  const { t } = useLanguage();
  
  return (
    <section
      id="section-id"
      className="py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Content */}
      </div>
    </section>
  );
}
```

### 4. Motion Patterns

**Fade In on Appear**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3, duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

**Button with Hover**:
```tsx
<motion.button
  whileHover={{ scale: 1.05, x: 5 }}
  whileTap={{ scale: 0.95 }}
  className="bg-[#D52169] text-white px-10 py-5..."
>
  Click Me
</motion.button>
```

**Scroll-Based Opacity**:
```tsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start 100%", "start 70%"],
});
const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

<motion.div style={{ opacity }}>
  {/* Content */}
</motion.div>
```

---

## Styling Guidelines

### Class Naming Conventions

**DO**:
```tsx
className="font-['Archivo',sans-serif] text-[14px] tracking-[0.05em] uppercase"
```

**DON'T**:
```tsx
className="text-sm uppercase"  // Avoid Tailwind size utilities
```

### Font Styling Pattern
**Always explicit**:
```tsx
<h1
  className="font-['Archivo',sans-serif] text-[80px] leading-[0.85] tracking-[-0.03em]"
  style={{ fontWeight: 900 }}
>
```

### Dark Mode Classes
```tsx
className="text-[#28292D] dark:text-white"
className="bg-white dark:bg-[#0a0a0a]"
className="border-[#28292D]/10 dark:border-white/10"
```

### Responsive Breakpoints
```tsx
className="text-[28px] md:text-[36px] lg:text-[42px]"
className="grid lg:grid-cols-2"
className="px-6 lg:px-12"
```

### Accessibility
```tsx
<button aria-label="Close menu">
<img alt="Product design showcase" />
<nav aria-label="Main navigation">
```

---

## Documentation

### Available Guides
1. **[TRANSLATIONS_GUIDE.md](./TRANSLATIONS_GUIDE.md)** - Complete i18n editing guide
2. **[README.md](./README.md)** - Getting started & development setup
3. **This file (AGENTS.md)** - Project context for AI agents

### Code Comments
- Use JSX comments for sections: `{/* Section Title */}`
- Document complex logic with inline comments
- Keep comments concise and relevant

---

## Development Workflow

### Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Development Server
- **URL**: http://localhost:3000
- **Port**: 3000 (default)
- **Hot Reload**: Enabled

### File Watching
Next.js watches all files in:
- `app/`
- `components/`
- `translations/`
- `public/`

### Making Changes
1. Edit files
2. Save (auto-reload)
3. Check browser for updates
4. Check console for errors

---

## Important Notes

### ⚠️ Common Pitfalls

1. **Don't use `t()` for arrays**
   ```tsx
   // ❌ WRONG
   const items = t('services.items') as unknown as string[];
   
   // ✅ CORRECT
   const { translations } = useLanguage();
   const items = translations.services.productDesign.items;
   ```

2. **Always use "use client"**
   ```tsx
   // All components need this at the top
   "use client";
   ```

3. **Import Motion correctly**
   ```tsx
   // ✅ CORRECT
   import { motion } from "motion/react";
   
   // ❌ WRONG
   import { motion } from "framer-motion";
   ```

4. **Dark mode transitions**
   ```tsx
   // Always add transition classes
   className="bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
   ```

5. **Hydration errors**
   - Both `ThemeContext` and `LanguageContext` have hydration protection
   - They render `null` until mounted
   - Don't access `window`/`localStorage` directly in render

### 🎯 Best Practices

1. **Animations**: Keep transitions under 1 second (0.3s - 0.6s typical)
2. **Accessibility**: Always add `aria-label` to icon-only buttons
3. **Responsive**: Mobile-first approach, use `md:` and `lg:` breakpoints
4. **Images**: Always provide `alt` text and fallback images
5. **Forms**: Use `required`, `onInvalid`, `placeholder` for better UX
6. **Dark Mode**: Test both light and dark themes
7. **i18n**: Test both English and Spanish languages
8. **Performance**: Use `viewport={{ once: true }}` for scroll animations

### 📋 Quick Checklist for New Features

- [ ] Component exported from file
- [ ] `"use client"` at top
- [ ] Uses `useLanguage()` for text
- [ ] Dark mode classes included
- [ ] Responsive breakpoints added
- [ ] Animations with Motion
- [ ] Accessibility attributes
- [ ] Tested in both languages
- [ ] Tested in light/dark modes
- [ ] Tested on mobile

---

## Environment & Configuration

### TypeScript Config
- **Target**: ES2017
- **Strict mode**: Enabled
- **Path aliases**: `@/*` maps to project root

### ESLint
- Next.js recommended rules
- Prettier integration (eslint-config-prettier)

### Tailwind
- **Version**: 4.x (new syntax)
- **PostCSS**: Custom configuration
- **Content**: Watches `app/**`, `components/**`, `pages/**`

### Environment Variables
- **Current**: None configured yet
- **Environments**: Development (`npm run dev`) vs. Production (Vercel)
- **Future**: May add analytics, API keys as needed

---

## Git Workflow

### Branch Strategy
- **Main Branch**: `main`
- **Feature Branches**: Create from `main`, name descriptively
- **PR Process**: Required for merging into `main`
- **Commit Messages**: Descriptive, present tense

### Example Workflow
```bash
# Create feature branch
git checkout -b feature/new-component

# Make changes, commit
git add .
git commit -m "Add new hero variant component"

# Push and create PR
git push origin feature/new-component
# Then create PR to main via GitHub/GitLab
```

---

## Deployment

### Platform: Vercel
- **Production**: Auto-deploys from `main` branch
- **Preview**: Auto-generated for PRs
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 20.x (default)

### Environments
- **Development**: `npm run dev` (localhost:3000)
- **Production**: Deployed on Vercel

### No CI/CD Pipeline
- Vercel handles build and deployment automatically
- No additional CI/CD tools configured

---

## Content Strategy

### Static Only
- **No CMS**: All content managed in code
- **Translations**: Static files in `translations/` directory
- **Assets**: Images/videos in `public/` directory
- **Updates**: Edit code directly, commit, deploy

### Future Scalability
If dynamic content needed:
- Consider headless CMS (Strapi, Contentful, Sanity)
- Would require API integration
- Not currently planned

---

## Performance & SEO

### SEO Optimizations
- [x] Meta tags (title, description) in translation files
- [x] Semantic HTML structure
- [x] Proper heading hierarchy (h1 → h2 → h3)
- [x] Alt text on images
- [x] Descriptive link text
- [ ] Open Graph tags (social sharing)
- [ ] Sitemap.xml
- [ ] Robots.txt

### Performance Optimizations
- [x] Next.js automatic code splitting
- [x] Motion library for smooth animations
- [x] Lazy loading with `viewport={{ once: true }}`
- [x] Responsive images
- [x] Video with poster images
- [ ] Next.js Image component (currently using `<img>`)
- [ ] Web font optimization
- [ ] Asset compression

### Accessibility
- [x] Aria labels on interactive elements
- [x] Keyboard navigation
- [x] Semantic HTML
- [x] Focus states
- [x] Screen reader considerations
- [x] Color contrast (WCAG AA compliant)
- [ ] Skip to content link
- [ ] ARIA live regions for dynamic content

### Targets
- **Goal**: Good Lighthouse scores (80+)
- **Focus**: SEO, Accessibility, Performance basics
- **Not Required**: Perfect 100 scores, advanced optimizations

---

## API Integrations

### Current Integrations
1. **Email.js** (FormSubmit.co)
   - Contact form submissions
   - Endpoint: `https://formsubmit.co/ajax/kierstudio.info@gmail.com`
   - No API key required

2. **Botpress**
   - Chat widget integration
   - Script loaded in `Botpress.tsx` component
   - Configuration in component file

### Future APIs
- Analytics (Google Analytics, Plausible, etc.) - TBD
- No other APIs planned at this time

---

## Known TODOs & Future Enhancements

### Content Enhancements
- [ ] Newsletter subscription (currently hidden in Footer)
- [ ] Blog section
- [ ] Case studies/portfolio detail pages
- [ ] Expanded project types in contact form

### Feature Enhancements  
- [ ] Accessibility panel in FloatingControls (currently hidden)
- [ ] Additional languages (French, Portuguese?)
- [ ] Client testimonials carousel
- [ ] Animation on scroll library upgrade

### Technical Improvements
- [ ] Open Graph meta tags for social sharing
- [ ] Sitemap generation
- [ ] Robots.txt file
- [ ] Next.js Image component migration
- [ ] Analytics integration

---

## Contact & Support

**Project**: Kier Studio Website  
**Based in**: Rosario, Argentina  
**Tech Support**: Review this document first, then check specific guides

---

**Last Updated**: November 2025  
**Maintained by**: AI Agents & Development Team
