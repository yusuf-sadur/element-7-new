import localFont from "next/font/local";
import { Cormorant_Garamond, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/** Fallback hero serif when licensed Canela files are not available at build time. */
export const canelaSubstitute = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-canela-substitute",
  display: "swap",
});

/**
 * Licensed Canela — hero typography only.
 * Files are synced into src/assets/fonts/canela/ by scripts/prepare-hero-fonts.mjs before dev/build.
 */
export const canela = localFont({
  src: [
    {
      path: "../assets/fonts/canela/Canela-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/canela/Canela-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/canela/Canela-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/canela/Canela-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/canela/Canela-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-canela",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});
