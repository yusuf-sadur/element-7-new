import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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

export { canela, heroFontsReady } from "./canela-font.generated";
