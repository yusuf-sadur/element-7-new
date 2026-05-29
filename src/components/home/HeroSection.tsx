"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import heroSaunaImg from "@/assets/hero-sauna4.png";
import { useParallaxMultiplier } from "@/components/home/parallax/useParallaxMultiplier";

const ease = [0.16, 1, 0.3, 1] as const;

const buildTypes = [
  { label: "Dry sauna", href: "/services/traditional-dry-sauna" },
  { label: "Infrared", href: "/services/infrared-sauna" },
  { label: "Hybrid", href: "/services/hybrid-sauna" },
  { label: "Steam", href: "/services/hammam-steam" },
  { label: "Plunge", href: "/services/stainless-steel-plunge" },
];

const stats = [
  { value: "25+", label: "Years" },
  { value: "100%", label: "Custom" },
  { value: "AU", label: "Nationwide" },
];

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
    [1.1, 1.22],
  );
  const decorY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${40 * multiplier}%`],
  );

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero-home relative flex min-h-[100dvh] flex-col overflow-x-hidden bg-ink md:h-[100svh] md:max-h-[100svh] md:overflow-hidden"
      aria-label="Element 7 — Recovery architecture"
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <motion.div
          className="parallax-layer absolute inset-x-0 h-[120%] -top-[10%] will-change-transform"
          style={
            reduceMotion
              ? undefined
              : {
                  y: imageY,
                  scale: imageScale,
                }
          }
        >
          <Image
            src={heroSaunaImg}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="hero-video-scrim hero-home-scrim absolute inset-0" />
        <div className="hero-video-vignette hero-home-vignette absolute inset-0" />
      </div>

      <motion.span
        className="pointer-events-none absolute right-4 top-[4.75rem] z-[1] hidden font-display text-[clamp(4rem,12vw,8rem)] font-light leading-none text-white/[0.05] md:right-8 lg:block"
        aria-hidden
        style={reduceMotion ? undefined : { y: decorY }}
      >
        07
      </motion.span>

      <div className="hero-content-stage container-e7 relative z-10 flex w-full min-h-0 flex-1 flex-col items-center justify-center pb-8 pt-[4.5rem] md:pb-10 md:pt-[5rem]">
        <motion.article
          className="hero-copy-open mx-auto w-full max-w-xl shrink-0 text-center sm:max-w-2xl lg:max-w-[40rem]"
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : ready ? "show" : "hidden"}
        >
          <div className="hero-copy-open__veil" aria-hidden />
          <span className="hero-copy-open__corner hero-copy-open__corner--tl" aria-hidden />
          <span className="hero-copy-open__corner hero-copy-open__corner--br" aria-hidden />

          <div className="hero-copy-open__inner">
            <motion.div variants={reduceMotion ? undefined : item} className="hero-eyebrow-row justify-center">
              <span className="h-px w-8 shrink-0 bg-bronze/80 sm:w-10" aria-hidden />
              <span className="hero-eyebrow">Design & build studio · Australia</span>
            </motion.div>

            <motion.h1
              variants={reduceMotion ? undefined : item}
              className="hero-display-compact text-balance text-cream"
            >
              Recovery architecture,{" "}
              <span className="italic text-sage-light">built for life.</span>
            </motion.h1>

            <motion.p
              variants={reduceMotion ? undefined : item}
              className="hero-lead mt-3 max-w-md text-[14px] font-normal leading-relaxed sm:mt-4 sm:max-w-lg sm:text-[15px]"
            >
              Custom saunas, steam rooms, and plunge pools — architecturally specified and
              constructed on your property, nationwide.
            </motion.p>

            <motion.div variants={reduceMotion ? undefined : item} className="hero-env-rail mt-5 sm:mt-6">
              <span className="hero-env-rail__label">We build</span>
              <ul className="hero-env-rail__list justify-center">
                {buildTypes.map((type, idx) => (
                  <li key={type.href} className="hero-env-rail__item">
                    {idx > 0 ? (
                      <span className="hero-env-rail__sep" aria-hidden>
                        /
                      </span>
                    ) : null}
                    <Link href={type.href} className="hero-env-rail__link group">
                      {type.label}
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-px group-hover:-translate-y-px group-hover:opacity-80"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={reduceMotion ? undefined : item}
              className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6 sm:gap-4"
            >
              <Link href="/services" className="btn-primary hero-btn group" id="hero-cta-primary">
                Explore environments
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/contact"
                className="link-line px-0.5 text-[11px] text-cream after:bg-bronze hover:text-white"
                id="hero-cta-secondary"
              >
                Book consultation
              </Link>
            </motion.div>

            <motion.div
              variants={reduceMotion ? undefined : item}
              className="hero-open-stats mt-6 border-t border-white/10 pt-5 sm:mt-7"
            >
              <ul className="hero-open-stats__list justify-center">
                {stats.map((stat) => (
                  <li key={stat.label} className="hero-open-stats__item">
                    <span className="hero-open-stats__value">{stat.value}</span>
                    <span className="hero-open-stats__label">{stat.label}</span>
                  </li>
                ))}
                <li className="hero-open-stats__item hero-open-stats__item--place">
                  <span className="hero-open-stats__value">Melbourne</span>
                  <span className="hero-open-stats__label">Studio</span>
                </li>
              </ul>
              <Link
                href="/projects"
                className="link-line mx-auto mt-4 inline-flex text-[11px] text-cream/70 after:bg-bronze hover:text-cream"
              >
                View portfolio
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </div>
        </motion.article>
      </div>

      <motion.div
        className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-10 lg:hidden"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? undefined : ready ? { opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 font-sans text-[10px] font-medium uppercase tracking-nav text-cream/80 transition-colors hover:text-cream"
        >
          Portfolio
          <ArrowUpRight size={12} />
        </Link>
      </motion.div>
    </section>
  );
}
