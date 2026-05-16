"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { EASE_PREMIUM } from "@/lib/motion";

const variants = {
  up: {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  blur: {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
} satisfies Record<string, Variants>;

export type RevealVariant = keyof typeof variants;
type RevealElement = "div" | "section" | "article" | "li";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: RevealElement;
}

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.85,
  className,
  as = "div",
}: Readonly<RevealProps>) {
  const reduceMotion = useReducedMotion();

  const Component =
    as === "section"
      ? motion.section
      : as === "article"
        ? motion.article
        : as === "li"
          ? motion.li
          : motion.div;

  if (reduceMotion) {
    if (as === "section") {
      return <section className={className}>{children}</section>;
    }
    if (as === "article") {
      return <article className={className}>{children}</article>;
    }
    if (as === "li") {
      return <li className={className}>{children}</li>;
    }
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "-60px" }}
      transition={{ duration, delay, ease: EASE_PREMIUM }}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </Component>
  );
}
