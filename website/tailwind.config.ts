import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        pixel: ["var(--font-pixel)", "monospace"],
      },
      colors: {
        background: "#0A0A0A",
        foreground: "#ededed",
        brand: {
          amber: "#f59e0b",
          gold: "#fbbf24",
          glow: "rgba(245, 158, 11, 0.15)",
        },
        panel: {
          bg: "#121212",
          border: "#262626",
        }
      },
    },
  },
  plugins: [],
};
export default config;
