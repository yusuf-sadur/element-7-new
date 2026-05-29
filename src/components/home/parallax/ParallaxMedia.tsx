"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

import { useParallaxMultiplier } from "@/components/home/parallax/useParallaxMultiplier";

type ParallaxMediaProps = {
  children: ReactNode;
  /** Drift strength — 0.14 subtle, 0.22 medium, 0.3 strong */
  speed?: number;
  className?: string;
};

export default function ParallaxMedia({
  children,
  speed = 0.2,
  className = "",
}: Readonly<ParallaxMediaProps>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const multiplier = useParallaxMultiplier();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const travel = speed * multiplier * 100;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${travel}%`, `${travel}%`],
  );

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`.trim()}
    >
      {reduceMotion ? (
        children
      ) : (
        <motion.div
          className="parallax-layer absolute inset-x-0 h-[130%] -top-[15%]"
          style={{ y }}
        >
          <div className="relative h-full w-full">{children}</div>
        </motion.div>
      )}
    </div>
  );
}
