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
        "warm-black": {
          DEFAULT: "#0D0D0D",
          light: "#171717",
        },
        charcoal: {
          DEFAULT: "#171717",
          light: "#1F1F1F",
        },
        bronze: {
          DEFAULT: "#C29A63",
          light: "#D4B07A",
          dark: "#A67F4A",
        },
        stone: {
          DEFAULT: "#F2EEE8",
          warm: "#EAE4DB",
          deep: "#DFDBD3",
        },
        concrete: {
          DEFAULT: "#7E7E7A",
          light: "#9A9A96",
          dark: "#62625E",
        },
        timber: {
          DEFAULT: "#6F4E37",
          light: "#8A6548",
          dark: "#553A28",
        },
        cream: {
          DEFAULT: "#F2EEE8",
          warm: "#EAE4DB",
          deep: "#DFDBD3",
        },
        linen: {
          DEFAULT: "#E8E3DA",
          light: "#F0ECE5",
          dark: "#D4CEC3",
        },
        white: "#FFFFFF",
        obsidian: {
          DEFAULT: "#FAF8F4",
          light: "#FFFFFF",
          mid: "#F4F1EA",
        },
        bark: {
          DEFAULT: "#F4F1EA",
          light: "#FAF8F4",
          mid: "#EBE6DC",
        },
        ink: {
          DEFAULT: "#0D0D0D",
          muted: "#4A4A48",
          faint: "#7E7E7A",
        },
        sand: {
          DEFAULT: "#1C2118",
          light: "#2A3028",
          dark: "#7A8274",
          faint: "#9CA396",
        },
        sage: {
          DEFAULT: "#8FA67E",
          light: "#B8C9AB",
          muted: "#A8B99A",
          dark: "#6B8559",
        },
        olive: {
          DEFAULT: "#3D4A32",
          light: "#5A6B4A",
          dark: "#2A3322",
        },
        clay: {
          DEFAULT: "#C4896A",
          light: "#D9A88C",
          dark: "#A06E52",
        },
        terracotta: {
          DEFAULT: "#C17F5E",
          light: "#D49A7D",
          dark: "#A0684D",
        },
        wood: {
          DEFAULT: "#B8956E",
          light: "#D4BCA3",
          dark: "#967A58",
        },
        taupe: {
          DEFAULT: "#8B7E74",
          light: "#A89B90",
          dark: "#6E635A",
        },
        gold: {
          DEFAULT: "#B8956E",
          light: "#D4BCA3",
          dark: "#967A58",
          glow: "rgba(184, 149, 110, 0.18)",
        },
        line: "#E8E3DA",
        earth: {
          canopy: "#3D4A32",
          moss: "#8FA67E",
          grove: "#6B8559",
          charcoal: "#4A5244",
          clay: "#C4896A",
          olive: "#3D4A32",
          forest: "#2A3322",
          stone: "#A89B90",
          umber: "#FAF8F4",
        },
        silver: {
          DEFAULT: "#A89B90",
          light: "#C9C0B8",
          dark: "#8B7E74",
        },
        rust: {
          DEFAULT: "#9A6B58",
          light: "#B8846E",
          dark: "#6E4A3C",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
        hero: ["var(--font-hero)", "Georgia", "Times New Roman", "serif"],
      },
      letterSpacing: {
        editorial: "0.02em",
        nav: "0.14em",
        label: "0.32em",
        tight: "-0.03em",
      },
      maxWidth: {
        editorial: "76rem",
        prose: "42rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "hero-scroll-line": "heroScrollLine 2.2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        heroScrollLine: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateY(200%)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-wash":
          "linear-gradient(100deg, rgba(250,248,244,0.97) 0%, rgba(250,248,244,0.85) 35%, rgba(250,248,244,0.4) 60%, transparent 85%)",
        "image-overlay":
          "linear-gradient(to top, rgba(13,13,13,0.82) 0%, rgba(13,13,13,0.35) 45%, rgba(13,13,13,0.05) 100%)",
        "image-overlay-soft":
          "linear-gradient(to top, rgba(13,13,13,0.65) 0%, transparent 60%)",
        "mesh-accent":
          "radial-gradient(ellipse 80% 60% at 10% 0%, rgba(143,166,126,0.12) 0%, transparent 50%), radial-gradient(ellipse 60% 50% at 90% 100%, rgba(196,137,106,0.08) 0%, transparent 50%)",
        "dot-pattern":
          "radial-gradient(circle at 1px 1px, rgba(61,74,50,0.05) 1px, transparent 0)",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(28, 33, 24, 0.05)",
        card: "0 8px 40px rgba(28, 33, 24, 0.06)",
        elevated: "0 20px 60px rgba(28, 33, 24, 0.1)",
        image: "0 32px 80px rgba(28, 33, 24, 0.12)",
        inner: "inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
