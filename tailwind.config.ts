import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // ─── Color Palette ────────────────────────────────────────────────
      colors: {
        // ── Light theme (Hero) ─────────────────────────────────────────
        surface: {
          bg:      "#FAFAF8", // page / hero background — warm off-white
          paper:   "#F4F3F0", // slightly warmer card surface
          border:  "#E2E0DB", // subtle warm-gray border
          overlay: "#ECEAE5", // hover state
        },
        // ── Primary ink (light theme text) ────────────────────────────
        ink: {
          DEFAULT: "#1A1A1A", // on-surface headings — near-black
          secondary: "#5C5C5C", // body text
          muted:     "#737373", // captions
        },
        // ── Brand primary — muted slate-blue (light theme accent) ─────
        primary: {
          DEFAULT: "#4A6070", // button fill, hover states
          hover:   "#3A5060", // darker on hover
          subtle:  "#EEF1F3", // tinted pill background
        },
      },

      // ─── Typography ───────────────────────────────────────────────────
      fontFamily: {
        // body text
        sans:     ["Inter", "system-ui", "-apple-system", "sans-serif"],
        // headlines — IBM Plex Sans 600
        heading:  ["IBM Plex Sans", "system-ui", "-apple-system", "sans-serif"],
        // technical labels / metadata
        mono:     ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        // display
        "display-2xl": ["4.5rem",  { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-xl":  ["3.75rem", { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg":  ["3rem",    { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "600" }],
        // headline
        "headline-xl": ["2.25rem", { lineHeight: "1.2",  letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-lg": ["1.875rem",{ lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-md": ["1.5rem",  { lineHeight: "1.3",  letterSpacing: "-0.005em",fontWeight: "600" }],
        "headline-sm": ["1.25rem", { lineHeight: "1.35", letterSpacing: "0",        fontWeight: "600" }],
        // body
        "body-xl":  ["1.125rem", { lineHeight: "1.7" }],
        "body-lg":  ["1rem",     { lineHeight: "1.7" }],
        "body-md":  ["0.9375rem",{ lineHeight: "1.6" }],
        "body-sm":  ["0.875rem", { lineHeight: "1.6" }],
        "body-xs":  ["0.75rem",  { lineHeight: "1.5" }],
        // label
        "label-lg": ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.02em",  fontWeight: "500" }],
        "label-md": ["0.8125rem",{ lineHeight: "1.4", letterSpacing: "0.02em",  fontWeight: "500" }],
        "label-sm": ["0.75rem",  { lineHeight: "1.4", letterSpacing: "0.04em",  fontWeight: "500" }],
      },

      // ─── Spacing ──────────────────────────────────────────────────────
      spacing: {
        "4xs":  "2px",
        "3xs":  "4px",
        "2xs":  "6px",
        xs:     "8px",
        sm:     "12px",
        md:     "16px",
        lg:     "24px",
        xl:     "32px",
        "2xl":  "48px",
        "3xl":  "64px",
        "4xl":  "96px",
        "5xl":  "128px",
        "6xl":  "192px",
        // section padding
        "section-y":  "96px",
        "section-sm": "64px",
      },

      // ─── Border Radius ────────────────────────────────────────────────
      borderRadius: {
        none:    "0px",
        sm:      "4px",   // generic small component
        DEFAULT: "8px",   // default card
        md:      "12px",  // medium card
        lg:      "16px",  // large card
        xl:      "24px",  // feature card
        "2xl":   "32px",  // hero elements
        full:    "9999px",// pill / buttons
      },

      // ─── Box Shadow (elevation) ───────────────────────────────────────
      boxShadow: {
        // light-mode elevation
        "elev-light-1": "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)",
        "elev-light-2": "0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)",
      },

      // ─── Animation ────────────────────────────────────────────────────
      keyframes: {
        "fade-in-up": {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in":    "fade-in 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },

      // ─── Max Width ────────────────────────────────────────────────────
      maxWidth: {
        "content-sm":  "640px",
        "content-md":  "768px",
        "content-lg":  "1024px",
        "content-xl":  "1280px",
        "content-2xl": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
