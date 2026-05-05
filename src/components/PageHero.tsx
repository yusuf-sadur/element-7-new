"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const pagePad =
  "px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[clamp(2.5rem,7vw,6rem)]";

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
      className="relative w-full overflow-hidden bg-transparent"
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      </div>

      <div className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-obsidian/12" />

      {/* Grid: left rail stretches full hero height from viewport top; nav clearance only on inner copy */}
      <div className="relative z-10 grid min-h-[inherit] w-full grid-cols-1 lg:grid-cols-[min(52%,640px)_minmax(0,1fr)] lg:items-stretch">
        <div
          className={`relative flex min-h-full w-full flex-col justify-center border-white/[0.07] bg-[#080808]/72 backdrop-blur-xl lg:border-r lg:border-b-0 ${pagePad} pt-16 sm:pt-20 lg:pt-24 pb-14 lg:pb-16 xl:pb-20`}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.30]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 42%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.26) 100%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-8 left-0 top-8 w-px bg-gradient-to-b from-gold/40 via-gold/10 to-transparent md:bottom-10 md:top-10"
            aria-hidden
          />

          <div className="relative">
            <div
              className={`mb-6 flex items-center gap-4 transition-all duration-700 ${loaded ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"}`}
            >
              <span className="h-px w-10 shrink-0 bg-gradient-to-r from-gold to-gold/30 md:w-14" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.26em] text-gold drop-shadow-[0_1px_14px_rgba(0,0,0,0.9)]">
                {label}
              </span>
            </div>

            <h1
              className={`font-display text-[clamp(2.15rem,5vw,3.75rem)] font-light leading-[1.06] tracking-[-0.03em] text-white transition-all duration-700 delay-75 ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            >
              <span className="block text-balance">{title}</span>
              {titleAccent && (
                <span className="mt-2 block text-[clamp(1.75rem,4.2vw,3rem)] font-light italic text-gold">
                  {titleAccent}
                </span>
              )}
            </h1>

            {subtitle && (
              <p
                className={`mt-6 max-w-md border-l-2 border-gold/35 pl-5 text-[15px] font-light leading-relaxed text-white/55 transition-all duration-700 delay-150 md:text-base ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
              >
                {subtitle}
              </p>
            )}

            {children && (
              <div
                className={`relative mt-10 transition-all duration-700 delay-200 ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
              >
                {children}
              </div>
            )}

            <div
              className={`mt-10 flex items-center gap-3 transition-all duration-1000 delay-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            >
              <span className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-white/25 to-transparent" />
              <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/25">
                Element 7
              </span>
            </div>
          </div>
        </div>

        <div className="relative hidden min-h-0 lg:block" aria-hidden />

        {/* Mobile: reserve height so hero feels immersive over fixed bg */}
        <div className="col-span-full min-h-[36vh] lg:hidden" aria-hidden />
      </div>
    </section>
  );
}
