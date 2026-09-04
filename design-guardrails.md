# Design Guardrails — check before presenting any section

Reference: `DESIGN.md` is the single source of truth for colors, type, spacing, and components. Before generating or presenting a section, verify against this checklist — these are mistakes that have recurred across multiple sections already:

## Colors
- [ ] Background is the light `background`/`paper` token (`#FAFAF8` range) — never a dark/near-black background.
- [ ] No gradient text, ever. Headlines are one solid color (`on-surface`).
- [ ] No per-word or per-phrase color highlighting inside a headline or sentence.
- [ ] The only accent color anywhere is the single muted slate-blue (`#4A6070` / `primary`/`accent` token) — no purple, no indigo, no neon.
- [ ] Cards/containers use white or light surface tokens with a thin `hairline` border — never dark translucent panels.

## Typographic chrome
- [ ] No small tracked-out ALL-CAPS "eyebrow" label above a section headline (e.g. "ABOUT", "PROJECTS", "CERTIFICATIONS") unless it was explicitly requested in the brief. This has been added by default and removed from every section so far.
- [ ] Numbered markers (01, 02, 03...) are only used where content is genuinely a sequence (e.g. project list order) — not as generic decoration.

## Components
- [ ] Buttons (CTA, primary/secondary) are pill-shaped/fully rounded, not sharp/4px corners.
- [ ] Every logo/icon (skill, certification, tech chip) has **no visible background plate/box** unless every single one in that group has the same treatment — check for inconsistency between items, not just presence.
- [ ] Logo/icon sizing is normalized to a fixed bounding box (e.g. 96×96 for certification badges, 40×40 for skill logos) with `object-fit: contain`, regardless of each source image's native size or aspect ratio.
- [ ] Full-bleed images (e.g. hero photo) have a hard clean edge — no blur/fade/gradient wash where the image meets the next column or section.

## Motion
- [ ] Only the `fade-in-up` scroll reveal defined in DESIGN.md (30px offset, 0.6s, standard easing) — no extra parallax, glow, or stagger effects.

If any box is unchecked, fix it before presenting the section for review.