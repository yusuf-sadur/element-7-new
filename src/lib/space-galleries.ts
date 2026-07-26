import type { StaticImageData } from "next/image";
import type { SpaceSlug } from "@/lib/brand";

// Traditional Dry Sauna
import drySauna1 from "@/assets/Traditional Dry Sauna/Traditional Dry Saunas  1.jpg";
import drySauna2 from "@/assets/Traditional Dry Sauna/Traditional Dry Saunas  2.jpg";
import drySauna3 from "@/assets/Traditional Dry Sauna/Traditional Dry Saunas  3.jpg";
import drySauna4 from "@/assets/Traditional Dry Sauna/Traditional Dry Saunas  4.jpg";
import drySauna5 from "@/assets/Traditional Dry Sauna/Traditional Dry Saunas  5.jpg";
import drySauna6 from "@/assets/Traditional Dry Sauna/Traditional Dry Saunas  6.jpg";
import drySauna7 from "@/assets/Traditional Dry Sauna/Traditional Dry Saunas  7.jpg";

// Infrared Sauna
import infrared1 from "@/assets/Infrared Sauna/Infrared Sauna 1.jpg";
import infrared2 from "@/assets/Infrared Sauna/Infrared Sauna 2.jpg";
import infrared3 from "@/assets/Infrared Sauna/Infrared Sauna 3.jpg";
import infrared4 from "@/assets/Infrared Sauna/Infrared Sauna 4.jpg";
import infrared5 from "@/assets/Infrared Sauna/Infrared Sauna 5.jpg";
import infrared6 from "@/assets/Infrared Sauna/Infrared Sauna 6.jpg";

// Hybrid Sauna
import hybrid1 from "@/assets/Hybrid Sauna/Hybrid Sauna 1.jpg";
import hybrid2 from "@/assets/Hybrid Sauna/Hybrid Sauna 2.jpg";
import hybrid3 from "@/assets/Hybrid Sauna/Hybrid Sauna 3.jpg";

// Steam room & Hammams
import steam1 from "@/assets/Steam room & Hammams/Steam 1.jpg";
import steam2 from "@/assets/Steam room & Hammams/Steam 2.jpg";
import steam3 from "@/assets/Steam room & Hammams/Steam 3.jpg";
import steam4 from "@/assets/Steam room & Hammams/Steam 4.jpg";
import steam5 from "@/assets/Steam room & Hammams/Steam 5.jpg";
import steam6 from "@/assets/Steam room & Hammams/Steam 6.jpg";
import steam7 from "@/assets/Steam room & Hammams/Steam 7.jpg";

// Stainless Steel Plunge Pools
import plunge1 from "@/assets/Stainless Steel Plunge Pools/stainless steal plunge pools 1.jpg";
import plunge2 from "@/assets/Stainless Steel Plunge Pools/stainless steal plunge pools 2.jpg";
import plunge4 from "@/assets/Stainless Steel Plunge Pools/stainless steal plunge pools 4.jpg";
import plunge5 from "@/assets/Stainless Steel Plunge Pools/stainless steal plunge pools 5.jpg";
import plunge6 from "@/assets/Stainless Steel Plunge Pools/stainless steal plunge pools 6.jpg";
import plunge7 from "@/assets/Stainless Steel Plunge Pools/stainless steal plunge pools 7.jpg";

// Recovery Pools & Suites
import recovery1 from "@/assets/Recovery Pools & Suites/Recovery Pool 1.jpg";
import recovery2 from "@/assets/Recovery Pools & Suites/Recovery Pool 2.jpg";
import recovery3 from "@/assets/Recovery Pools & Suites/Recovery Pool 3.jpg";
import recovery4 from "@/assets/Recovery Pools & Suites/Recovery Pool 4.jpg";
import recovery5 from "@/assets/Recovery Pools & Suites/Recovery Pool 5.jpg";

export const SPACE_GALLERIES: Record<SpaceSlug, StaticImageData[]> = {
  "traditional-dry-sauna": [drySauna1, drySauna2, drySauna3, drySauna4, drySauna5, drySauna6, drySauna7],
  "infrared-sauna": [infrared1, infrared2, infrared3, infrared4, infrared5, infrared6],
  "hybrid-sauna": [hybrid1, hybrid2, hybrid3],
  "hammam-steam": [steam1, steam2, steam3, steam4, steam5, steam6, steam7],
  "stainless-steel-plunge": [plunge1, plunge2, plunge4, plunge5, plunge6, plunge7],
  "recovery-pools": [recovery1, recovery2, recovery3, recovery4, recovery5],
};
