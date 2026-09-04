---
name: DevOps Professional System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#43474b'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#73787c'
  outline-variant: '#c3c7cc'
  surface-tint: '#4b6171'
  primary: '#324858'
  on-primary: '#ffffff'
  primary-container: '#4a6070'
  on-primary-container: '#c3daed'
  inverse-primary: '#b2c9dc'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#454645'
  on-tertiary: '#ffffff'
  tertiary-container: '#5c5e5d'
  on-tertiary-container: '#d7d7d5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cee6f9'
  primary-fixed-dim: '#b2c9dc'
  on-primary-fixed: '#051e2c'
  on-primary-fixed-variant: '#334959'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e3e1'
  tertiary-fixed-dim: '#c6c7c5'
  on-tertiary-fixed: '#1a1c1b'
  on-tertiary-fixed-variant: '#454746'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: IBM Plex Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  headline-xl-mobile:
    fontFamily: IBM Plex Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  section-padding: 120px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

This design system is engineered for the Cloud DevOps professional. The brand personality is rooted in **systematic reliability**, **technical precision**, and **architectural clarity**. It moves away from the "neon and dark mode" clichés of the tech industry, instead opting for a sophisticated, editorial approach that suggests enterprise-grade stability.

The visual style is **Corporate Modern**, leveraging high-density information layouts balanced by expansive whitespace. It draws inspiration from technical documentation and architectural blueprints, utilizing a rigid grid to convey order. The emotional response should be one of absolute trust and professional competence—less "startup disruptor" and more "infrastructure architect."

## Colors

The palette is intentionally restrained to maintain focus on technical content and architectural diagrams.

- **Background (#FAFAF8):** An off-white, warm-neutral canvas that reduces eye strain compared to pure white and provides a "paper" quality to the portfolio.
- **Primary Text (#1A1A1A):** A near-black for high-contrast legibility in headlines and body copy.
- **Accent (#4A6070):** A muted, desaturated slate-blue. This is used sparingly for interactive elements, active states, and focused technical highlights.
- **Neutral (#64748B):** A secondary slate-gray for captions, labels, and borders, ensuring a soft hierarchy that doesn't compete with the primary content.

Avoid any use of vibrant gradients or high-saturation blues. Interactive states should favor tonal shifts (e.g., darkening the accent color) rather than introducing new hues.

## Typography

The typography strategy pairs a structured, engineering-focused headline face with a globally recognized utilitarian body font.

- **Headlines (IBM Plex Sans):** Chosen for its "industrial" feel and distinct character shapes (notably the 'g' and 'a'), providing a professional, tech-forward aesthetic without being generic.
- **Body (Inter):** Provides maximum readability for long-form case studies and technical explanations.
- **Technical Accents (JetBrains Mono):** Used for code snippets, version numbers, and metadata labels to reinforce the DevOps context.

**Hierarchy Rules:**
- Use generous `line-height` (1.6) for body text to maintain an editorial feel.
- Headlines should use tighter `letter-spacing` as they scale up to maintain visual density.
- Use `label-caps` for section headers or small metadata above main titles.

## Layout & Spacing

The layout follows a **12-column fixed grid** on desktop, centered within the viewport. The philosophy is "Information Architecture First," meaning the layout should feel like a well-organized technical document.

**Spacing Rhythm:**
- **Vertical Rhythm:** A base 8px unit drives all spacing. Sections are separated by large 120px gaps (`section-padding`) to provide breathing room and signal content shifts.
- **Grid:** On desktop, use a 12-column grid with 24px gutters. Content should span spans of 4, 6, or 8 columns to create asymmetrical but balanced compositions.
- **Mobile:** Transition to a single-column layout with 20px side margins. Large headlines should scale down to `headline-xl-mobile`.

**Motion:**
Animations are restricted to subtle `fade-in-up` transitions (30px offset, 0.6s duration) triggered as elements enter the viewport. No stagger effects or bouncy easing; use a standard `cubic-bezier(0.4, 0, 0.2, 1)`.

## Elevation & Depth

This design system avoids traditional shadows in favor of **Tonal Layering** and **Low-Contrast Outlines**.

- **Surface Levels:** The base background is `#FAFAF8`. Primary cards or containers use a pure white `#FFFFFF` surface to subtly lift off the background.
- **Outlines:** Instead of shadows, use 1px solid borders in a very light gray (`#E2E8F0`) to define component boundaries.
- **Active State Depth:** When a card or element is interactive, do not use a "pop" effect. Instead, shift the border color to the accent slate-blue (`#4A6070`) or apply a very soft, diffused 10% opacity shadow of the accent color.
- **Diagrams:** Technical diagrams should be flat, using the design system's palette, and placed on a subtle `#F1F5F9` (cool gray) background to distinguish them from the "paper" background of the page.

## Shapes

The shape language is "Soft-Professional." By using `roundedness: 1`, we achieve a slight softening of the technical grid without moving into the "playful" territory of consumer apps.

- **Components (Buttons, Inputs):** 0.25rem (4px) corner radius. This is the standard for most interface elements.
- **Containers (Cards, Section Blocks):** 0.5rem (8px) corner radius. This creates a clear container for grouped content like "Skills" or "Certifications."
- **Media (Images, Diagrams):** Should maintain a sharp or 4px radius to keep the look precise and architectural.

> Note (project override, since revised in this project): the primary CTA button uses a **fully rounded / pill** shape instead of the 4px default above — this override was requested and applied to the hero "Find out more" button and should carry to any other primary CTA buttons.

## Components

### Buttons
- **Primary:** Solid `#4A6070` background with white text. 4px border radius (see pill-shape override note above for CTAs). No icons unless they are directional (e.g., an arrow for "View Case Study").
- **Secondary:** Transparent background with a 1px border of `#4A6070`. Text in the same slate-blue.

### Cards (Skills & Certifications)
- White background, 1px light gray border, 8px border radius.
- Minimalist iconography (use monochrome technical logos).
- Typography should be centered or left-aligned with ample internal padding (32px).

### Accordion (FAQ / Technical Details)
- Clean, horizontal lines separating items.
- Chevron icon in the accent color.
- Background remains transparent; only the active/expanded item may take on a very subtle light-gray tint.

### Input Fields
- Understated style. 1px border on all sides or just a bottom border for a more "form-like" feel.
- Focus state: Border color changes to `#4A6070`.

### Technical Chips (Tags)
- Small, uppercase `JetBrains Mono` text.
- Light gray background (`#F1F5F9`) with no border. Use for tagging tools like "Terraform," "AWS," or "Kubernetes."