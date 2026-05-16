"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const pagePad =
  "px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[clamp(2.5rem,7vw,6rem)]";

const easeHero = "ease-[cubic-bezier(0.16,1,0.3,1)]";

interface PageHeroProps {
  image: string;
  label: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  height?: string;
  children?: React.ReactNode;
}

/**
 * Interior split layout over a fixed cinematic background.
 * Scroll blur / brightness / opacity / scale match `HeroSection` so the photo
 * opens up (reads more transparent) as you scroll.
 */
export default function PageHero({
  image,
  label,
  title,
  titleAccent,
  subtitle,
  height = "min(92svh,880px)",
  children,
}: Readonly<PageHeroProps>) {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

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
      className="relative flex w-full flex-col overflow-hidden bg-transparent"
      style={{ minHeight: height }}
    >
      {/* Fixed fullscreen photo — same scroll physics as home hero */}
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

      {/* Mobile: flex-1 so frosted rail fills hero height (no separate empty band). Desktop: two-column grid. */}
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
          {/* Mobile: soft fade into the next section */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-gradient-to-t from-bark/74 via-bark/26 to-transparent lg:hidden"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-6 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent lg:hidden"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-8 left-0 top-8 hidden w-px bg-gradient-to-b from-gold/40 via-gold/10 to-transparent md:bottom-10 md:top-10 lg:block"
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

            <h1 className="font-display text-[clamp(2.15rem,5vw,3.75rem)] font-light leading-[1.06] tracking-[-0.03em] text-sand max-lg:text-center lg:text-left">
              <span
                className={`block text-balance transition-all duration-700 max-lg:duration-[880ms] max-lg:delay-[90ms] lg:delay-[75ms] ${easeHero} ${loaded ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0 max-lg:translate-y-8"}`}
              >
                {title}
              </span>
              {titleAccent && (
                <span
                  className={`mt-2 block text-[clamp(1.75rem,4.2vw,3rem)] font-light italic text-gold transition-all duration-700 max-lg:duration-[880ms] max-lg:delay-[210ms] lg:delay-[150ms] ${easeHero} ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
                >
                  {titleAccent}
                </span>
              )}
            </h1>

            {subtitle && (
              <p
                className={`mt-6 max-w-md border-l-2 border-gold/35 pl-5 text-[15px] font-light leading-relaxed text-sand/55 transition-all duration-700 max-lg:mx-auto max-lg:border-l-0 max-lg:pl-0 max-lg:duration-[820ms] max-lg:delay-[290ms] md:text-base lg:delay-[150ms] ${easeHero} ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0 max-lg:translate-y-6"}`}
              >
                {subtitle}
              </p>
            )}

            {children && (
              <div
                className={`relative mt-10 max-lg:flex max-lg:flex-col max-lg:items-center transition-all duration-700 max-lg:duration-[820ms] max-lg:delay-[390ms] lg:delay-[200ms] ${easeHero} ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0 max-lg:translate-y-6"}`}
              >
                {children}
              </div>
            )}

            <div
              className={`mt-10 flex items-center gap-3 max-lg:justify-center transition-all duration-1000 max-lg:delay-[510ms] lg:delay-[300ms] ${easeHero} ${loaded ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
            >
              <span className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-sand/25 to-transparent" />
              <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-sand/25">
                Element 7
              </span>
            </div>
          </div>
        </div>

        <div className="relative hidden min-h-0 lg:block" aria-hidden />
      </div>
    </section>
  );
}
