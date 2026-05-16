"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";

const pagePad =
  "px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[clamp(2.5rem,7vw,6rem)]";

const easeHero = "ease-[cubic-bezier(0.16,1,0.3,1)]";

interface ServicePageHeroProps {
  image: string | StaticImageData;
  label: string;
  title: string;
  tagline: string;
  lead: string;
}

/**
 * Service detail hero: interior split copy + same fixed-bg scroll treatment as
 * `HeroSection` / `PageHero` (blur, brightness, opacity fade on scroll).
 */
export default function ServicePageHero({
  image,
  label,
  title,
  tagline,
  lead,
}: Readonly<ServicePageHeroProps>) {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setLoaded(true);

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        globalThis.requestAnimationFrame(() => {
          setScrollY(globalThis.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    globalThis.addEventListener("scroll", onScroll, { passive: true });
    return () => globalThis.removeEventListener("scroll", onScroll);
  }, []);

  const scrollRatio = Math.min(scrollY / 800, 1);
  const blurValue = scrollRatio * 4;
  const brightnessValue = 1 - scrollRatio * 0.3;
  const opacityValue = 1 - scrollRatio * 0.1;

  return (
    <section
      id="service-hero"
      ref={sectionRef}
      className="relative flex min-h-[min(100svh,1040px)] w-full flex-col overflow-hidden bg-transparent lg:min-h-[min(96svh,1200px)]"
    >
      <div
        className="pointer-events-none fixed inset-0 z-0 will-change-transform"
        style={{
          filter: `blur(${blurValue}px) brightness(${brightnessValue})`,
          opacity: opacityValue,
          transform: `scale(${1 + scrollRatio * 0.05})`,
          transition:
            "filter 0.1s ease-out, opacity 0.1s ease-out, transform 0.1s ease-out",
        }}
      >
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: loaded ? 1 : 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/50 via-transparent to-bark/80" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      </div>

      <div className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-r from-bark/69 via-bark/34 to-transparent" />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-obsidian/26" />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col lg:grid lg:min-h-0 lg:grid-cols-[min(52%,640px)_minmax(0,1fr)] lg:items-stretch">
        <div
          className={`relative flex w-full flex-1 flex-col justify-center border-sand/[0.07] bg-earth-umber/91 backdrop-blur-xl max-lg:border-x max-lg:border-b max-lg:border-sand/[0.09] max-lg:shadow-[0_28px_90px_rgba(24,32,22,0.52)] max-lg:ring-1 max-lg:ring-inset max-lg:ring-sand/[0.06] lg:min-h-full lg:flex-none lg:border-x-0 lg:border-b-0 lg:border-r lg:shadow-none lg:ring-0 ${pagePad} pb-12 pt-16 sm:pb-14 sm:pt-20 lg:pb-16 lg:pt-24 xl:pb-20`}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.45]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(201,168,76,0.042) 0%, transparent 42%), linear-gradient(to bottom, transparent 0%, rgba(24,32,22,0.43) 100%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-gradient-to-t from-bark/74 via-bark/26 to-transparent lg:hidden"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-6 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent lg:hidden"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-8 left-0 top-8 hidden w-px bg-gradient-to-b from-gold/45 via-gold/15 to-transparent md:bottom-10 md:top-10 lg:block"
            aria-hidden
          />

          <div className="relative z-[2] max-lg:text-center lg:text-left">
            <div
              className={`mb-6 flex items-center gap-4 max-lg:justify-center lg:justify-start transition-all duration-700 max-lg:duration-[780ms] ${easeHero} ${loaded ? "translate-x-0 opacity-100 max-lg:translate-x-0" : "-translate-x-3 opacity-0 max-lg:translate-x-0"}`}
            >
              <span
                className={`interior-hero-label-line h-px w-10 shrink-0 bg-gradient-to-r from-gold to-gold/30 transition-transform duration-700 ease-out max-lg:origin-center max-lg:duration-1000 lg:origin-left md:w-14 ${loaded ? "scale-x-100" : "scale-x-0"}`}
              />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.26em] text-gold drop-shadow-[0_1px_14px_rgba(24,32,22,0.9)]">
                {label}
              </span>
            </div>

            <h1 className="font-display font-light tracking-[-0.03em] text-sand max-lg:text-center lg:text-left">
              <span
                className={`block text-balance text-[clamp(1.85rem,4.5vw,3.15rem)] leading-[1.06] transition-all duration-700 max-lg:duration-[880ms] max-lg:delay-[90ms] lg:delay-[75ms] ${easeHero} ${loaded ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0 max-lg:translate-y-8"}`}
              >
                {title}
              </span>
              <span className="mt-3 block text-[clamp(1.5rem,3.6vw,2.5rem)] leading-[1.1] max-lg:text-center lg:text-left">
                <span
                  className={`inline-block bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text font-display italic text-transparent transition-all duration-700 max-lg:duration-[880ms] max-lg:delay-[210ms] lg:delay-[150ms] ${easeHero} ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
                >
                  {tagline}
                </span>
              </span>
            </h1>

            <p
              className={`mt-7 max-w-md border-l-2 border-gold/35 pl-5 text-[14px] font-light leading-relaxed text-sand/55 transition-all duration-700 max-lg:mx-auto max-lg:border-l-0 max-lg:pl-0 max-lg:duration-[820ms] max-lg:delay-[300ms] sm:text-[15px] lg:delay-[150ms] ${easeHero} ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0 max-lg:translate-y-6"}`}
            >
              {lead}
            </p>

            <div
              className={`mt-10 flex flex-col gap-3 max-lg:items-center transition-all duration-700 max-lg:duration-[820ms] max-lg:delay-[410ms] sm:flex-row sm:items-center sm:gap-6 lg:delay-[200ms] ${easeHero} ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0 max-lg:translate-y-6"}`}
            >
              <Link
                href="/contact"
                className="btn-gold justify-center px-8 py-3.5 text-[10px] sm:min-w-[200px]"
                id="service-hero-cta-primary"
              >
                Book consultation
              </Link>
              <Link
                href="/services"
                className="group/ghost inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-sand/55 transition-colors hover:text-gold"
                id="service-hero-cta-secondary"
              >
                All services
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.75}
                  className="transition-transform duration-300 group-hover/ghost:-translate-y-0.5 group-hover/ghost:translate-x-0.5"
                />
              </Link>
            </div>

            <div
              className={`mt-12 flex items-center gap-3 max-lg:justify-center transition-all duration-1000 max-lg:delay-[530ms] lg:delay-[300ms] ${easeHero} ${loaded ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
            >
              <span className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-sand/25 to-transparent" />
              <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-sand/25">
                Melbourne
              </span>
            </div>
          </div>
        </div>

        <div className="relative hidden min-h-0 lg:block" aria-hidden />
      </div>

      <p className="pointer-events-none absolute bottom-6 right-6 z-10 hidden max-w-[220px] text-right font-mono text-[9px] uppercase leading-relaxed tracking-[0.26em] text-sand/35 lg:block">
        Specifications below · Element Seven
      </p>
    </section>
  );
}
