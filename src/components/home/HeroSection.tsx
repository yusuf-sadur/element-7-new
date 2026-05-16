"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import heroSaunaImg from "@/assets/hero-sauna3.jpg";
import HeroVideoBackground from "@/components/home/HeroVideoBackground";

const ease = [0.16, 1, 0.3, 1] as const;

const modalities = [
  { label: "Sauna", href: "/services/custom-saunas" },
  { label: "Infrared", href: "/services/infrared-saunas" },
  { label: "Steam", href: "/services/steam-rooms" },
  { label: "Plunge", href: "/services/cold-plunge" },
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

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <section
      id="hero"
      className="hero-home relative min-h-[100dvh] overflow-x-hidden bg-ink md:h-[100svh] md:max-h-[100svh] md:overflow-hidden"
      aria-label="Element 7 — Recovery architecture"
    >
      <HeroVideoBackground poster={heroSaunaImg} />

      <span
        className="pointer-events-none absolute right-4 top-[4.75rem] z-[1] hidden font-display text-[clamp(4rem,12vw,8rem)] font-light leading-none text-white/[0.05] md:right-8 lg:block"
        aria-hidden
      >
        07
      </span>

      <motion.div className="container-e7 relative z-10 flex min-h-[100dvh] w-full min-w-0 max-w-full flex-col justify-end pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[4.25rem] md:h-full md:min-h-0 md:justify-center md:pb-5 md:pt-[5rem]">
        <motion.div
          className="hero-copy-panel min-w-0 w-full max-w-3xl lg:max-w-[42rem]"
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : ready ? "show" : "hidden"}
        >
          <span className="hero-copy-panel-shine" aria-hidden />
          <motion.div className="relative z-10 grid min-w-0 w-full gap-0 lg:grid-cols-[1fr_auto] lg:items-stretch lg:gap-0">
            <motion.div className="hero-copy-panel-body">
              <motion.div variants={reduceMotion ? undefined : item} className="hero-eyebrow-row">
                <span className="h-px w-8 shrink-0 bg-sage-light/80 sm:w-10" aria-hidden />
                <span className="hero-eyebrow">Wellness architecture · Australia</span>
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
              className="hero-lead mt-3 max-w-lg text-[14px] font-normal leading-relaxed sm:mt-4 sm:text-[15px]"
            >
              End-to-end wellness environments — designed, built, and delivered nationwide.
            </motion.p>

              <motion.div
                variants={reduceMotion ? undefined : item}
                className="mt-3 hidden flex-wrap items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-nav text-cream/70 sm:flex"
              >
                {modalities.map((m) => (
                  <Link key={m.href} href={m.href} className="hero-modality-pill">
                    {m.label}
                  </Link>
                ))}
              </motion.div>

              <motion.div
                variants={reduceMotion ? undefined : item}
                className="mt-4 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-4 sm:mt-5 sm:gap-4 sm:pt-5"
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
                  className="link-line px-0.5 text-[11px] text-cream after:bg-sage-light hover:text-white"
                  id="hero-cta-secondary"
                >
                  Book consultation
                </Link>
                <Link
                  href="/projects"
                  className="link-line ml-auto hidden px-0.5 text-[11px] text-cream/70 after:bg-sage-light hover:text-cream lg:inline-flex"
                >
                  Portfolio
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={reduceMotion ? undefined : item}
              className="hero-copy-panel-footer"
            >
              <div className="hero-footer-stats">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={reduceMotion ? undefined : item}
                    className="hero-footer-stat"
                  >
                    <span className="hero-footer-stat-value">{stat.value}</span>
                    <span className="hero-footer-stat-label">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
              <span className="hero-footer-location">Melbourne</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-10 hidden min-[420px]:block lg:hidden"
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
