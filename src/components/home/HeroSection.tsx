"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import heroSaunaImg from "@/assets/hero-sauna4.png";
import HeroVideoBackground from "@/components/home/HeroVideoBackground";
import { BRAND } from "@/lib/brand";
import { useParallaxMultiplier } from "@/components/home/parallax/useParallaxMultiplier";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.14 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export default function HeroSection() {
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();
  const multiplier = useParallaxMultiplier();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-6%", `${28 * multiplier}%`],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.08, 1.18],
  );

  useEffect(() => {
    setReady(true);
  }, []);

  const headlineLines = BRAND.heroHeadlineLines;
  const leadLines = BRAND.heroLeadLines;

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero-home hero-home--editorial relative flex min-h-[100dvh] flex-col overflow-x-hidden bg-ink md:h-[100svh] md:max-h-[100svh] md:overflow-hidden"
      aria-label={`${BRAND.name} — ${BRAND.tagline}`}
    >
      <div className="hero-home__media absolute z-0 overflow-hidden" aria-hidden>
        <motion.div
          className="parallax-layer absolute inset-0 will-change-transform"
          style={
            reduceMotion
              ? undefined
              : {
                  y: imageY,
                  scale: imageScale,
                }
          }
        >
          <HeroVideoBackground
            poster={heroSaunaImg}
            mp4Src="/videos/main-hero.mp4"
            overlay="none"
            imagePriority
            imageSizes="100vw"
          />
        </motion.div>
        <div className="hero-video-scrim hero-home-scrim absolute inset-0" />
      </div>

      <div className="hero-content-stage hero-content-stage--left hero-content-stage--flush container-e7 relative z-10 grid w-full min-h-0 flex-1 grid-cols-1 items-end pb-0 pt-[4.75rem] max-md:px-3 md:items-center md:pb-16 md:pt-[5.25rem] lg:grid-cols-12">
        <motion.div
          className="hero-editorial hero-editorial--mobile-panel w-full lg:col-span-6 lg:max-w-[38rem] xl:col-span-6"
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : ready ? "show" : "hidden"}
        >
          <div className="hero-editorial__glass" aria-hidden />
          <div className="hero-editorial__content">
          <motion.p variants={reduceMotion ? undefined : item} className="hero-brand-mark">
            ELEMENT <span className="hero-brand-mark__accent">7</span>
          </motion.p>

          <motion.h1
            variants={reduceMotion ? undefined : container}
            className="hero-editorial__title"
          >
            {headlineLines.map((line) => (
              <motion.span
                key={line}
                variants={reduceMotion ? undefined : item}
                className="hero-editorial__line"
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p variants={reduceMotion ? undefined : item} className="hero-editorial__lead">
            {leadLines.map((line) => (
              <span key={line} className="hero-editorial__lead-line">
                {line}
              </span>
            ))}
          </motion.p>

          <motion.div variants={reduceMotion ? undefined : item} className="hero-editorial__actions">
            <Link
              href="/services"
              className="hero-editorial__cta btn-accent btn-accent--hero"
              id="hero-cta-primary"
            >
              {BRAND.heroCtaLabel}
              <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />
            </Link>
          </motion.div>
          </div>
        </motion.div>

        <div className="hidden lg:col-span-6 lg:block" aria-hidden />
      </div>
    </section>
  );
}
