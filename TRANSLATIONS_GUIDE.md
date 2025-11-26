# Language Switch Implementation - How to Edit Translations

## Overview
Your website now supports **English (EN)** and **Spanish (ES)** with automatic browser language detection and a manual toggle in the floating controls.

---

## How It Works

1. **Browser Detection**: On first visit, the site detects the user's browser language
   - If browser language is Spanish → Shows Spanish content
   - Otherwise → Shows English content (default)

2. **Manual Toggle**: Users can switch languages using the EN/ES button in the bottom-right floating controls

3. **Persistence**: Language choice is saved in browser localStorage and remembered on return visits

---

## Translation File Structure

All translations are organized in a **modular folder structure** for easy editing:

```
translations/
├── en/                    # English translations
│   ├── common.ts         # SEO, navigation, footer, controls
│   ├── hero.ts           # Hero section
│   ├── services.ts       # Services section
│   ├── contact.ts        # Contact/CTA section
│   └── index.ts          # Combines all modules
├── es/                    # Spanish translations
│   ├── common.ts         # SEO, navegación, footer, controles
│   ├── hero.ts           # Sección Hero
│   ├── services.ts       # Sección Servicios
│   ├── contact.ts        # Sección Contacto/CTA
│   └── index.ts          # Combina todos los módulos
└── index.ts              # Main export
```

### **Why This Structure?**
- ✅ **Easy to find**: Want to edit Hero? Open `translations/en/hero.ts`
- ✅ **Smaller files**: Focused, less scrolling
- ✅ **Modular**: Edit one section without affecting others
- ✅ **Scalable**: Easy to add new sections (projects, process, etc.)

```typescript
export const en = {
  nav: {
    start: "Start",
    services: "Services",
    // ... more navigation items
  },
  
  hero: {
    location: "(Based in Rosario, Argentina)",
    title: "©KIER STUDIO",
    subtitle: "We craft impactful SaaS...",
    // ... more hero content
  },
  
  // ... more sections
};
```

---

## Quick Edit Guide

### Step 1: Choose the Section and Language

**Find the file you need to edit:**

| What to Edit | English File | Spanish File |
|--------------|-------------|--------------|
| SEO metadata, Navigation, Footer | `translations/en/common.ts` | `translations/es/common.ts` |
| Hero section (homepage top) | `translations/en/hero.ts` | `translations/es/hero.ts` |
| Services section | `translations/en/services.ts` | `translations/es/services.ts` |
| Contact form & CTA | `translations/en/contact.ts` | `translations/es/contact.ts` |

### Step 2: Open the File

Example: To edit the Hero section in English:
```bash
# Open this file
translations/en/hero.ts
```

### Step 3: Edit the Text

Simply change the text inside the quotes:

**Example - Changing Hero Subtitle:**
```typescript
// In translations/en/hero.ts
export const hero = {
  location: "(Based in Rosario, Argentina)",
  subtitle: "We craft impactful SaaS and Websites...", // ← Edit this
  ctaTalk: "Let's Talk →",
};
```

**Example - Changing Navigation:**
```typescript
// In translations/en/common.ts
export const common = {
  nav: {
    start: "Home",      // ← Changed from "Start"
    services: "Our Services", // ← Changed
  },
  // ... rest
};
```

### Step 4: Save and Test
1. Save your changes
2. Restart dev server: `npm run dev`
3. Test both languages (click EN/ES toggle)

---

## Common Editing Tasks

### 1. **Update Navigation Menu**
**Files**: `translations/en.ts` and `translations/es.ts`

```typescript
nav: {
  start: "Start",       // Change this
  services: "Services", // Change this
  work: "Work",
  process: "Process",
  contact: "Contact",
}
```

### 2. **Update Hero Section**
```typescript
hero: {
  location: "(Based in Rosario, Argentina)",
  subtitle: "We craft impactful SaaS and Websites for growth and success.",
  ctaTalk: "Let's Talk →",
  ctaWork: "View Work",
}
```

### 3. **Update Contact Form**
```typescript
cta: {
  formTitle: "Send us a message",
  formName: "Your Name",
  formEmail: "Email Address",
  formProject: "Project Type",
  formMessage: "Tell us about your project",
  formSubmit: "Send Message",
}
```

### 4. **Update Footer**
```typescript
footer: {
  description: "Comprehensive strategy crafting your digital product.",
  location: "Based in Argentina, working globally.",
  copyright: "© {year} Kier Studio. All rights reserved.",
  privacyPolicy: "Privacy Policy",
}
```

---

## Important Rules

### ✅ DO:
- **Keep structure identical** between en.ts and es.ts
- **Use straight quotes** `"text"` not curly quotes
- **Keep parameter placeholders** like `{year}`, `{bold}` exactly as they are
- **Save both files** after making changes
- **Test both languages** after editing

### ❌ DON'T:
- **Don't change keys** (the part before the colon)
- **Don't remove commas** between items
- **Don't change** `{year}`, `{bold}` or other placeholders
- **Don't translate email** addresses or URLs

---

## Examples

### ✅ CORRECT:
```typescript
cta: {
  emailLabel: "Email Us",  // Changed text, kept key
  phone: "+54 9 341 7211814", // Phone stays same
}
```

### ❌ INCORRECT:
```typescript
cta: {
  correoElectronico: "Envíanos un Email", // ❌ Changed key name
  phone: "+54 9 341 7211814" // ❌ Missing comma
}
```

---

## Testing Your Changes

1. **Save your changes** to both `en.ts` and `es.ts`
2. **Restart the development server**: `npm run dev`
3. **Test both languages**:
   - Click the EN/ES toggle in bottom-right
   - Verify all text changes correctly
4. **Check for errors** in the browser console

---

## Full Translation Files Location

```
kierstudio-next/
└── translations/
    ├── en.ts        ← Edit English text here
    ├── es.ts        ← Edit Spanish text here
    └── index.ts     ← Don't edit this file
```

---

## Parameter Placeholders

Some translations use placeholders that get replaced with dynamic content:

### `{year}` - Current Year
**Used in**: Footer copyright
```typescript
copyright: "© {year} Kier Studio. All rights reserved."
// Displays: © 2025 Kier Studio. All rights reserved.
```

### `{bold}` - Bold Text Insertion
**Used in**: Hero description
```typescript
descriptionBold: "We align your company's goals through {bold}."
descriptionBoldText: "strategic design and development"
// The {bold} gets replaced with the bold text
```

**⚠️ Never remove or modify these placeholders!**

---

## Service Items (Arrays)

Services have lists of items that appear as bullet points:

```typescript
services: {
  productDesign: {
    items: ["Strategy", "UX/UI", "Development", "Conversions"],
  },
  websites: {
    items: ["Website Design & Development", "Support"],
  },
}
```

To edit:
- Keep the square brackets `[ ]`
- Keep quotes `""` around each item
- Separate items with commas
- You can add/remove items

---

## Form Project Type Options

The contact form dropdown options:

```typescript
formProjectOptions: {
  saas: "SaaS",
  website: "Website",
  ecommerce: "E-commerce",
  mobileApp: "Mobile App",
  uxui: "UX/UI consulting",
  other: "Other",
}
```

---

## Need Help?

If you encounter errors after editing:

1. **Check for typos** - Missing quotes, commas, or brackets
2. **Compare with the other language file** - Structure should match exactly
3. **Check the browser console** for error messages
4. **Revert your changes** and try again

---

## Quick Reference: Where to Find What

| What to Edit | English File | Spanish File |
|--------------|--------------|--------------|
| SEO metadata (title, description) | `en/common.ts` → `seo` | `es/common.ts` → `seo` |
| Top navigation menu | `en/common.ts` → `nav` | `es/common.ts` → `nav` |
| Hero section text | `en/hero.ts` | `es/hero.ts` |
| Services section | `en/services.ts` | `es/services.ts` |
| Contact form & validation | `en/contact.ts` | `es/contact.ts` |
| Footer links & copyright | `en/common.ts` → `footer` | `es/common.ts` → `footer` |
| Floating controls | `en/common.ts` → `controls` | `es/common.ts` → `controls` |

### File Locations
```
translations/
├── en/
│   ├── common.ts       ← SEO, nav, footer, controls
│   ├── hero.ts         ← Hero section
│   ├── services.ts     ← Services section
│   └── contact.ts      ← Contact/CTA section
└── es/
    ├── common.ts       ← SEO, nav, footer, controles
    ├── hero.ts         ← Sección Hero
    ├── services.ts     ← Sección Servicios
    └── contact.ts      ← Sección Contacto/CTA
```

---

**That's it!** You can now easily edit all text on your website in both English and Spanish. 🎉
