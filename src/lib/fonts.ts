import { Cormorant_Garamond, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Loads immediately until Canela WOFF2 files are added under public/fonts/.
 * Once @font-face "Canela" files exist, they take priority in --font-hero.
 */
export const canelaSubstitute = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-canela-substitute",
  display: "swap",
});
