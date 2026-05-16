"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { staggerContainer, staggerItem } from "@/lib/motion";

interface RevealStaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}

export function RevealStagger({
  children,
  className,
  stagger = 0.09,
  delayChildren = 0.06,
}: Readonly<RevealStaggerProps>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-48px" }}
      variants={
        reduceMotion
          ? undefined
          : {
              ...staggerContainer,
              visible: {
                transition: { staggerChildren: stagger, delayChildren },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

interface RevealStaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: "motion.div" | "motion.article" | "motion.li";
}

export function RevealStaggerItem({
  children,
  className,
  as = "motion.div",
}: Readonly<RevealStaggerItemProps>) {
  const reduceMotion = useReducedMotion();
  const Component = as === "motion.article" ? motion.article : as === "motion.li" ? motion.li : motion.div;

  return (
    <Component
      className={className}
      variants={reduceMotion ? undefined : staggerItem}
    >
      {children}
    </Component>
  );
}
