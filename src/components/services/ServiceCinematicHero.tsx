"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { StaticImageData } from "next/image";
import { useParallaxMultiplier } from "@/components/home/parallax/useParallaxMultiplier";

const ease = [0.16, 1, 0.3, 1] as const;

export interface ServiceCinematicHeroProps {
  image: string | StaticImageData;
  label: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  eyebrowSuffix?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  showSecondary?: boolean;
  compact?: boolean;
  children?: ReactNode;
}

export default function ServiceCinematicHero({
  image,
  label,
  title,
  titleAccent,
  subtitle,
  eyebrowSuffix = "Design & Build",
  primaryHref = "/contact",
  primaryLabel = "Book a consultation",
  secondaryHref = "/services",
  secondaryLabel = "All spaces",
  showSecondary = true,
  compact = false,
  children,
}: Readonly<ServiceCinematicHeroProps>) {
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
    ["-5%", `${24 * multiplier}%`],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.08, 1.18],
  );

  const heightClass = compact
    ? "min-h-[62svh] md:min-h-[72svh]"
    : "min-h-[72svh] md:min-h-[88svh]";

  return (
    <section
      ref={heroRef}
      className={`relative overflow-hidden bg-warm-black ${heightClass}`}
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
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </div>
      <div className="cinematic-overlay absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(13,13,13,0.55) 0%, transparent 55%), linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 50%)",
        }}
      />

      <div
        className={`container-e7 relative z-10 flex flex-col justify-end pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-28 md:pb-16 md:pt-32 ${heightClass}`}
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="max-w-2xl"
        >
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-stone/60">
            {label} · {eyebrowSuffix}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.06] tracking-tight text-stone">
            {title}
            {titleAccent ? (
              <>
                {" "}
                <span className="italic text-bronze">{titleAccent}</span>
              </>
            ) : null}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-stone/60 md:text-[15px]">
              {subtitle}
            </p>
          ) : null}
          {children ? (
            <div className="mt-8 flex flex-wrap items-center gap-4">{children}</div>
          ) : (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href={primaryHref} className="btn-ghost-light group">
                {primaryLabel}
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              {showSecondary ? (
                <Link
                  href={secondaryHref}
                  className="link-line text-[11px] text-stone/55 after:bg-bronze hover:text-bronze"
                >
                  {secondaryLabel}
                  <ArrowUpRight size={14} />
                </Link>
              ) : null}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
