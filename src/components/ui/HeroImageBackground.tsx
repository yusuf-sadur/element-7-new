"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import type { HeroVariant } from "@/lib/hero-variants";
import { HERO_VARIANTS } from "@/lib/hero-variants";

const ease = [0.16, 1, 0.3, 1] as const;

type Props = {
  image: string | StaticImageData;
  variant?: HeroVariant;
};

export default function HeroImageBackground({ image, variant = "story" }: Props) {
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const { scrim, vignette } = HERO_VARIANTS[variant];

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <motion.div className="absolute inset-0 z-0" aria-hidden initial={false}>
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.05 }}
        animate={reduceMotion ? undefined : ready ? { scale: 1 } : {}}
        transition={{ duration: 1.8, ease }}
      >
        <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      </motion.div>
      <div className={scrim} />
      <motion.div className={vignette} />
    </motion.div>
  );
}
