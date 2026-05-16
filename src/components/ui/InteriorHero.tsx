"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import HeroImageBackground from "@/components/ui/HeroImageBackground";
import {
  HERO_VARIANTS,
  heroTextClasses,
  type HeroVariant,
} from "@/lib/hero-variants";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

interface InteriorHeroProps {
  image: string | StaticImageData;
  label: string;
  title: string;
  accent?: string;
  subtitle?: string;
  children?: React.ReactNode;
  compact?: boolean;
  imageAlt?: string;
  eyebrow?: string;
  secondaryLink?: { href: string; label: string };
  variant?: HeroVariant;
}

export default function InteriorHero({
  image,
  label,
  title,
  accent,
  subtitle,
  children,
  compact = false,
  imageAlt,
  eyebrow,
  secondaryLink,
  variant = "mist",
}: Readonly<InteriorHeroProps>) {
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();
  const config = HERO_VARIANTS[variant];
  const text = heroTextClasses(config.theme);
  const eyebrowText = eyebrow ?? `${label} · Australia`;
  const isCentered = variant === "invitation";

  useEffect(() => {
    setReady(true);
  }, []);

  const heightClass = compact
    ? "h-[min(58svh,440px)] max-h-[min(62svh,480px)] md:h-[min(100svh,720px)] md:max-h-[min(100svh,720px)]"
    : "h-[min(68svh,520px)] max-h-[min(72svh,560px)] md:h-[100svh] md:max-h-[100svh]";

  return (
    <section
      id="hero"
      className={`hero-density-compact relative ${heightClass} overflow-hidden bg-ink`}
      aria-label={`${label} — Element 7`}
    >
      <HeroImageBackground image={image} variant={variant} />

      {config.watermark && (
        <span
          className="pointer-events-none absolute right-4 top-[4.75rem] z-[1] hidden font-display text-[clamp(4rem,12vw,8rem)] font-light leading-none text-white/[0.05] md:right-8 lg:block"
          aria-hidden
        >
          07
        </span>
      )}

      {config.decor === "frame" && (
        <div className="hero-decor-frame pointer-events-none absolute inset-0 z-[1]" aria-hidden />
      )}

      <motion.div
        className={`interior-hero-stage container-e7 relative z-10 flex h-full min-w-0 w-full ${config.layout} pb-3 pt-[4rem] sm:pb-6 sm:pt-[4.75rem] md:pb-6 md:pt-[5rem]`}
      >
        <motion.div
          className={`interior-hero-panel hero-copy-panel min-w-0 w-full sm:w-auto ${config.panelMax}`}
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : ready ? "show" : "hidden"}
        >
          <span className="hero-copy-panel-shine" aria-hidden />
          <div
            className={`hero-copy-panel-body ${isCentered ? "flex flex-col items-center text-center" : ""}`}
          >
            <div
              className={`hero-eyebrow-row ${isCentered ? "justify-center" : ""}`}
            >
              <span className={`h-px w-8 shrink-0 sm:w-10 ${text.rule}`} aria-hidden />
              <span className={`hero-eyebrow ${text.eyebrow}`}>{eyebrowText}</span>
              {isCentered && (
                <span className={`h-px w-8 sm:w-10 ${text.rule}`} aria-hidden />
              )}
            </div>

            <motion.h1
              variants={reduceMotion ? undefined : item}
              className={`hero-display-compact text-balance ${text.title}`}
            >
              {title}
              {accent && (
                <>
                  {" "}
                  <span className={text.accent}>{accent}</span>
                </>
              )}
            </motion.h1>

            {subtitle && (
              <motion.p
                variants={reduceMotion ? undefined : item}
                className={`hero-lead mt-3 max-w-lg text-[14px] font-normal leading-relaxed sm:mt-4 sm:text-[15px] ${text.lead} ${isCentered ? "mx-auto" : ""}`}
              >
                {subtitle}
              </motion.p>
            )}

            {children && (
              <motion.div
                variants={reduceMotion ? undefined : item}
                className={`mt-4 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-4 sm:mt-5 sm:gap-4 sm:pt-5 ${isCentered ? "justify-center" : ""}`}
              >
                {children}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {secondaryLink && (
        <motion.div
          className="absolute bottom-4 right-4 z-10 lg:hidden"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : ready ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            href={secondaryLink.href}
            className={`inline-flex items-center gap-1.5 font-sans text-[10px] font-medium uppercase tracking-nav transition-colors ${text.mobileLink}`}
          >
            {secondaryLink.label}
            <ArrowUpRight size={12} />
          </Link>
        </motion.div>
      )}
    </section>
  );
}
