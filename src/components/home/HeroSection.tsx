"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import heroMainImg from "@/assets/Hero Main Image.png";
import CountUpStat from "@/components/ui/CountUpStat";
import { BRAND } from "@/lib/brand";
import { EASE_PREMIUM } from "@/lib/motion";

const ease = EASE_PREMIUM;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.14 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

const statsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.48 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const HERO_STATS = [
  { type: "count" as const, end: 120, suffix: "+", label: "Builds delivered" },
  { type: "count" as const, end: 20, suffix: "+", label: "Years on the tools" },
  { type: "count" as const, end: 100, suffix: "%", label: "Design & build, one team" },
  { type: "text" as const, value: "AU", label: "Australia-wide" },
];

export default function HeroSection() {
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <section id="hero" className="hero-ref" aria-label={`${BRAND.name} — ${BRAND.tagline}`}>
      <div className="hero-ref__bg" aria-hidden>
        <div className="hero-ref__media">
          <Image src={heroMainImg} alt="" fill priority sizes="100vw" />
        </div>
      </div>

      <motion.div
        className="hero-ref__body"
        variants={reduceMotion ? undefined : container}
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : ready ? "show" : "hidden"}
      >
        <div className="hero-ref__content">
          <div className="hero-ref__copy">
            <motion.p variants={reduceMotion ? undefined : item} className="hero-ref__eyebrow">
              {BRAND.heroEyebrow}
            </motion.p>

            <motion.h1 variants={reduceMotion ? undefined : item} className="hero-ref__title">
              {BRAND.heroHeadlineBefore}
              <br />
              <em>{BRAND.heroHeadlineAccent}</em>
            </motion.h1>

            <motion.p variants={reduceMotion ? undefined : item} className="hero-ref__sub">
              {BRAND.heroLead}
            </motion.p>

            <motion.div variants={reduceMotion ? undefined : item} className="hero-ref__actions">
              <Link href="#contact" className="hero-ref__btn hero-ref__btn--primary">
                {BRAND.heroCtaLabel}
              </Link>
              <Link href="#services" className="hero-ref__btn hero-ref__btn--secondary">
                {BRAND.heroSecondaryCtaLabel}
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hero-ref__stats"
            variants={reduceMotion ? undefined : statsContainer}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? undefined : ready ? "show" : "hidden"}
          >
            {HERO_STATS.map((stat, idx) => (
              <motion.div key={stat.label} variants={reduceMotion ? undefined : statItem} className="hero-ref__stat">
                <span className="hero-ref__stat-num">
                  {stat.type === "count" ? (
                    <CountUpStat end={stat.end} suffix={stat.suffix} delay={0.55 + idx * 0.08} />
                  ) : (
                    stat.value
                  )}
                </span>
                <span className="hero-ref__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
