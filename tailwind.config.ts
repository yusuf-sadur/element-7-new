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
          charcoal: "#3A463C",
          brown: "#4A5844",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E2C070",
          dark: "#A07832",
          glow: "rgba(201,168,76,0.3)",
        },
        /* Olive dark surfaces — deep forest, moss, grove (slightly lifted) */
        obsidian: {
          DEFAULT: "#212B21",
          light: "#2B362B",
          mid: "#344234",
        },
        /* Deepest olive overlay / vignette */
        bark: {
          DEFAULT: "#181F1A",
          light: "#2A3630",
          mid: "#212A24",
        },
        earth: {
          canopy: "#212B21",
          moss: "#2B362B",
          grove: "#344234",
          charcoal: "#3E4E42",
          clay: "#5C665C",
          olive: "#505E50",
          forest: "#2C3A2C",
          stone: "#828A7C",
          umber: "#1D271E",
        },
        silver: {
          DEFAULT: "#C0C4B6",
          light: "#DCE0D0",
          dark: "#848C80",
        },
        /* Warm light tones (replaces pure white in UI) */
        sand: {
          DEFAULT: "#D8DCD0",
          light: "#E8ECE2",
          dark: "#A8AE9E",
          faint: "#7A8274",
        },
        /* Earthy accent for form errors */
        rust: {
          DEFAULT: "#9A6B58",
          light: "#B8846E",
          dark: "#6E4A3C",
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
