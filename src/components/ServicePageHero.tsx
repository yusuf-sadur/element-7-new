"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";

const pagePad =
  "px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[clamp(2.5rem,7vw,6rem)]";

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
      className="relative min-h-[min(100svh,1040px)] w-full overflow-hidden bg-transparent lg:min-h-[min(96svh,1200px)]"
    >
      <div
        className="fixed inset-0 z-0 will-change-transform"
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
      <div className="pointer-events-none fixed inset-0 z-[1] bg-obsidian/20" />

      {/* pt-* clears fixed navbar so the eyebrow label stays visible */}
      <div className="relative z-10 flex min-h-[inherit] w-full flex-col pt-16 sm:pt-20 lg:flex-row lg:pt-24">
        <div
          className={`relative flex w-full flex-col justify-center border-white/[0.07] bg-[#060606]/85 py-14 backdrop-blur-xl lg:w-[min(52%,640px)] lg:max-w-[640px] lg:flex-none lg:border-r lg:py-16 xl:py-20 ${pagePad}`}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 42%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.35) 100%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-8 left-0 w-px bg-gradient-to-b from-gold/45 via-gold/15 to-transparent md:inset-y-10"
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
              className={`font-display font-light tracking-[-0.03em] text-white transition-all duration-700 delay-75 ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            >
              <span className="block text-balance text-[clamp(1.85rem,4.5vw,3.15rem)] leading-[1.06]">
                {title}
              </span>
              <span className="mt-3 block text-[clamp(1.5rem,3.6vw,2.5rem)] leading-[1.1]">
                <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text font-display italic text-transparent">
                  {tagline}
                </span>
              </span>
            </h1>

            <p
              className={`mt-7 max-w-md border-l-2 border-gold/35 pl-5 text-[14px] font-light leading-relaxed text-white/55 transition-all duration-700 delay-150 sm:text-[15px] ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
            >
              {lead}
            </p>

            <div
              className={`mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} transition-all duration-700 delay-200`}
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
                className="group/ghost inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/55 transition-colors hover:text-gold"
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
              className={`mt-12 flex items-center gap-3 transition-all duration-1000 delay-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            >
              <span className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-white/25 to-transparent" />
              <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/25">
                Melbourne
              </span>
            </div>
          </div>
        </div>

        <div className="relative hidden flex-1 lg:block" aria-hidden />

        <p className="pointer-events-none absolute bottom-6 right-6 z-10 hidden max-w-[220px] text-right font-mono text-[9px] uppercase leading-relaxed tracking-[0.26em] text-white/35 lg:block">
          Specifications below · Element Seven
        </p>

        <div className="min-h-[42vh] shrink-0 lg:hidden" aria-hidden />
      </div>
    </section>
  );
}
