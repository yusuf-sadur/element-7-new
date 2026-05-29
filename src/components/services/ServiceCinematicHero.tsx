"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
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
    ["-6%", `${28 * multiplier}%`],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.08, 1.18],
  );

  const heightClass = compact
    ? "min-h-[72svh] md:min-h-[80svh]"
    : "min-h-[88svh] md:min-h-[92svh]";

  return (
    <section
      ref={heroRef}
      id="hero"
      className={`hero-home hero-home--editorial relative flex flex-col overflow-x-hidden bg-ink ${heightClass}`}
      aria-label={`${label} — Element 7`}
    >
      <div className="hero-home__media absolute z-0 overflow-hidden" aria-hidden>
        <motion.div
          className="parallax-layer absolute right-0 h-[115%] -top-[8%] will-change-transform"
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
            className="object-cover object-[center_38%] md:object-[52%_center] lg:object-[58%_center]"
            sizes="100vw"
          />
        </motion.div>
        <div className="hero-video-scrim hero-home-scrim absolute inset-0" />
      </div>

      <div className="hero-content-stage hero-content-stage--left hero-content-stage--flush container-e7 relative z-10 grid w-full min-h-0 flex-1 grid-cols-1 items-end pb-0 pt-[4.75rem] max-md:px-3 md:items-center md:pb-16 md:pt-[5.25rem] lg:grid-cols-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease }}
          className="hero-editorial hero-editorial--mobile-panel w-full lg:col-span-6 lg:max-w-[38rem] xl:col-span-6"
        >
          <div className="hero-editorial__glass" aria-hidden />
          <div className="hero-editorial__content">
            <p className="hero-editorial__eyebrow mb-0">
              {label} · {eyebrowSuffix}
            </p>
            <h1 className="hero-editorial__title hero-editorial__title--service mt-4">
              {title}
              {titleAccent ? (
                <>
                  {" "}
                  <span className="font-hero font-light italic normal-case text-sage-light">
                    {titleAccent}
                  </span>
                </>
              ) : null}
            </h1>
            {subtitle ? (
              <p className="hero-editorial__lead mt-5 max-w-lg">{subtitle}</p>
            ) : null}
            {children ? (
              <div className="hero-editorial__actions">{children}</div>
            ) : (
              <div className="hero-editorial__actions">
                <Link href={primaryHref} className="hero-editorial__cta">
                  {primaryLabel}
                </Link>
                {showSecondary ? (
                  <Link href={secondaryHref} className="hero-editorial__link">
                    {secondaryLabel}
                  </Link>
                ) : null}
              </div>
            )}
          </div>
        </motion.div>

        <div className="hidden lg:col-span-6 lg:block" aria-hidden />
      </div>
    </section>
  );
}
