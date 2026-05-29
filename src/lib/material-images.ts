import type { StaticImageData } from "next/image";

import naturalTimberImg from "@/assets/Natural Timber.jpg";
import stoneMarbleImg from "@/assets/Stone & Marble.jpg";
import concretePlasterImg from "@/assets/Concrete & Plaster.jpg";
import stainlessSteelImg from "@/assets/Stainless Steel.jpg";
import precisionLightingImg from "@/assets/Precision Lighting.jpg";
import customDetailingImg from "@/assets/custom detailing sauna.jpg";

export const MATERIAL_IMAGES: Record<
  "timber" | "stoneMarble" | "concretePlaster" | "stainlessSteel" | "lighting" | "detailing",
  StaticImageData
> = {
  timber: naturalTimberImg,
  stoneMarble: stoneMarbleImg,
  concretePlaster: concretePlasterImg,
  stainlessSteel: stainlessSteelImg,
  lighting: precisionLightingImg,
  detailing: customDetailingImg,
};
