import type { Config } from "tailwindcss";

/* Phase 0 design-system lock.
   Colors and fonts map to the CSS variables defined in app/globals.css,
   so tokens live in one place and Tailwind utilities (bg-paper, text-ink,
   border-line, text-mark, font-display, ...) read straight from them.
   Loaded by Tailwind v4 via `@config` in app/globals.css. */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        card: "var(--card)",
        primary: {
          DEFAULT: "var(--primary)",
          ink: "var(--primary-ink)",
        },
        mark: {
          DEFAULT: "var(--mark)",
          ink: "var(--mark-ink)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
