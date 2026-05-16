import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        drip: {
          beige: "#F4F1EA",
          sand: "#E8E4D9",
          charcoal: "#2A3228",
          brown: "#3A4534",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E2C070",
          dark: "#A07832",
          glow: "rgba(201,168,76,0.3)",
        },
        /* Olive dark surfaces — deep forest, moss, grove */
        obsidian: {
          DEFAULT: "#151C14",
          light: "#1C2418",
          mid: "#243020",
        },
        /* Deepest olive overlay / vignette */
        bark: {
          DEFAULT: "#0E120C",
          light: "#1A2218",
          mid: "#141A12",
        },
        earth: {
          canopy: "#151C14",
          moss: "#1C2418",
          grove: "#243020",
          charcoal: "#2E3828",
          clay: "#4A5244",
          olive: "#3D4A38",
          forest: "#1E2A1C",
          stone: "#6B7364",
          umber: "#121810",
        },
        silver: {
          DEFAULT: "#B4B8A8",
          light: "#D0D4C4",
          dark: "#737A6A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "slide-right": "slideRight 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "hero-scroll-line": "heroScrollLine 2.2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideRight: {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGold: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(201,168,76,0)" },
          "50%": { boxShadow: "0 0 30px 8px rgba(201,168,76,0.35)" },
        },
        heroScrollLine: {
          "0%": { transform: "translateY(-140%)", opacity: "0" },
          "18%": { opacity: "1" },
          "82%": { opacity: "1" },
          "100%": { transform: "translateY(220%)", opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold":
          "linear-gradient(135deg, #C9A84C 0%, #E2C070 50%, #C9A84C 100%)",
        "dot-pattern":
          "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.15) 1px, transparent 0)",
      },
      backgroundSize: {
        "dot-sm": "32px 32px",
        "dot-lg": "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
