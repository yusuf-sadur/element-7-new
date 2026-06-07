"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import HeroImageBackground from "@/components/ui/HeroImageBackground";
import type { HeroVariant } from "@/lib/hero-variants";

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
  eyebrow,
  secondaryLink,
  variant = "mist",
}: Readonly<InteriorHeroProps>) {
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();
  const eyebrowText = eyebrow ?? `${label} · Australia`;
  const isCentered = variant === "invitation";

  useEffect(() => {
    setReady(true);
  }, []);

  const heightClass = compact
    ? "min-h-[72svh] md:min-h-[80svh]"
    : "min-h-[88svh] md:min-h-[92svh]";

  return (
    <section
      id="hero"
      className={`hero-home hero-home--editorial relative flex flex-col overflow-x-hidden bg-ink ${heightClass}`}
      aria-label={`${label} — Element 7`}
    >
      <div className="hero-home__media absolute z-0 overflow-hidden" aria-hidden>
        <HeroImageBackground image={image} variant={variant} />
        <div className="hero-video-scrim hero-home-scrim absolute inset-0" />
      </div>

      <div
        className={`hero-content-stage hero-content-stage--left hero-content-stage--flush container-e7 relative z-10 grid w-full min-h-0 flex-1 grid-cols-1 items-end pb-0 pt-[4.75rem] max-md:px-3 md:items-center md:pb-16 md:pt-[5.25rem] lg:grid-cols-12 ${isCentered ? "justify-center md:justify-center" : ""}`}
      >
        <motion.div
          className={`hero-editorial hero-editorial--mobile-panel w-full lg:col-span-6 lg:max-w-[38rem] xl:col-span-6 ${isCentered ? "hero-editorial--centered mx-auto text-center" : ""}`}
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : ready ? "show" : "hidden"}
        >
          <div className="hero-editorial__glass" aria-hidden />
          <div
            className={`hero-editorial__content ${isCentered ? "flex flex-col items-center" : ""}`}
          >
            <motion.p
              variants={reduceMotion ? undefined : item}
              className="hero-editorial__eyebrow mb-0"
            >
              {eyebrowText}
            </motion.p>

            <motion.h1
              variants={reduceMotion ? undefined : item}
              className="hero-editorial__title hero-editorial__title--service mt-4"
            >
              {title}
              {accent ? (
                <>
                  {" "}
                  <span className="font-hero font-light normal-case text-sage-light">
                    {accent}
                  </span>
                </>
              ) : null}
            </motion.h1>

            {subtitle ? (
              <motion.p
                variants={reduceMotion ? undefined : item}
                className={`hero-editorial__lead mt-5 max-w-lg ${isCentered ? "mx-auto" : ""}`}
              >
                {subtitle}
              </motion.p>
            ) : null}

            {children ? (
              <motion.div variants={reduceMotion ? undefined : item} className="hero-editorial__actions">
                {children}
              </motion.div>
            ) : secondaryLink ? (
              <motion.div variants={reduceMotion ? undefined : item} className="hero-editorial__actions">
                <Link href={secondaryLink.href} className="hero-editorial__link">
                  {secondaryLink.label}
                </Link>
              </motion.div>
            ) : null}
          </div>
        </motion.div>

        {!isCentered ? <div className="hidden lg:col-span-6 lg:block" aria-hidden /> : null}
      </div>
    </section>
  );
}
