"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import heroSaunaImg from "@/assets/hero-sauna4.png";
import HeroVideoBackground from "@/components/home/HeroVideoBackground";
import ConsultationCta from "@/components/ui/ConsultationCta";
import { BRAND } from "@/lib/brand";

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

  useEffect(() => {
    setReady(true);
  }, []);

  const headlineLines = BRAND.heroHeadlineLines;
  const leadLines = BRAND.heroLeadLines;

  return (
    <section
      id="hero"
      className="hero-home hero-home--editorial relative flex min-h-[100dvh] flex-col overflow-x-hidden bg-ink md:h-[100svh] md:max-h-[100svh] md:overflow-hidden"
      aria-label={`${BRAND.name} — ${BRAND.tagline}`}
    >
      <div className="hero-home__media absolute z-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0">
          <HeroVideoBackground
            poster={heroSaunaImg}
            mp4Src="/videos/main-hero.mp4"
            overlay="none"
            imagePriority
            imageSizes="100vw"
          />
        </div>
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
            <ConsultationCta
              id="hero-cta-primary"
              href="/services"
              label={BRAND.heroCtaLabel}
              className="hero-editorial__cta"
            />
          </motion.div>
          </div>
        </motion.div>

        <div className="hidden lg:col-span-6 lg:block" aria-hidden />
      </div>
    </section>
  );
}
