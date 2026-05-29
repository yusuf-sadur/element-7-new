"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { MOBILE_PARALLAX_SCALE } from "@/lib/parallax";

export function useParallaxMultiplier() {
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (reduceMotion) return 0;
  return isMobile ? MOBILE_PARALLAX_SCALE : 1;
}
