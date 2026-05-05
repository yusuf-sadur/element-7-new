"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import heroSaunaImg from "@/assets/hero-sauna3.jpg";

const HERO_IMAGE = heroSaunaImg;

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setLoaded(true);

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollRatio = Math.min(scrollY / 800, 1);
  const blurValue = scrollRatio * 4;
  const brightnessValue = 1 - scrollRatio * 0.3;
  const opacityValue = 1 - scrollRatio * 0.1;

  const pagePad =
    "px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[clamp(2.5rem,7vw,6rem)]";

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-0 w-full items-center justify-start bg-transparent"
    >
      {/* ── Background: photo + vignette + dots ── */}
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
          src={HERO_IMAGE}
          alt="Premium Wellness Environments"
          fill
          priority
          className="object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: loaded ? 1 : 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-obsidian/20" />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(100%,480px)] bg-gradient-to-r from-black/40 to-transparent opacity-90"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute left-[-10%] top-[40%] z-[2] h-[min(65vh,420px)] w-[min(100vw,720px)] max-w-[700px] -translate-y-1/2 bg-[radial-gradient(ellipse_72%_58%_at_28%_50%,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.1)_58%,transparent_80%)] blur-[40px] sm:top-[42%]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
        aria-hidden
      />

      <div
        className={`relative z-10 w-full max-w-[1600px] py-10 text-left md:mx-auto md:py-12 lg:py-14 ${pagePad}`}
      >
        <div className="relative max-w-xl lg:max-w-2xl xl:max-w-[42rem]">
            <div
              className="pointer-events-none absolute -left-1 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/15 to-transparent sm:-left-2"
              aria-hidden
            />

            <div
              className={`relative border border-white/[0.07] bg-black/25 p-5 backdrop-blur-md transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-6 md:p-7 ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              style={{ transitionDelay: "40ms" }}
            >
              <div className="pointer-events-none absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent md:left-7 md:right-7" />

              <p
                className={`mb-4 text-[9px] font-semibold uppercase tracking-[0.38em] text-gold/95 transition-all duration-1000 sm:text-[10px] ${loaded ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: "100ms" }}
              >
                Melbourne — bespoke wellness
              </p>

              <h1
                className={`font-display font-light tracking-[-0.04em] text-white transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                style={{
                  transitionDelay: "160ms",
                  textShadow:
                    "0 3px 36px rgba(0,0,0,0.35), 0 1px 0 rgba(0,0,0,0.15)",
                }}
              >
                <span className="block text-balance text-[clamp(1.85rem,5vw,3.35rem)] leading-[1.08]">
                  Create a tranquil haven
                </span>
                <span className="mt-2 block text-[clamp(1.95rem,5.4vw,3.5rem)] leading-[1.05] sm:mt-2.5">
                  <span className="inline-block bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text font-display italic text-transparent">
                    in your home.
                  </span>
                </span>
              </h1>

              <p
                className={`mt-4 max-w-lg border-l border-gold/25 pl-4 text-[13px] font-light leading-snug text-white/55 transition-all duration-1000 sm:mt-5 sm:pl-5 sm:text-sm ${loaded ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                style={{ transitionDelay: "240ms" }}
              >
                Sauna, steam & cold plunge — engineered and commissioned for
                homes and commercial spaces.
              </p>

              <div
                className={`mt-5 flex flex-wrap gap-1.5 transition-all duration-1000 sm:mt-6 ${loaded ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: "300ms" }}
              >
                {["Residential", "Commercial", "Turnkey"].map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/[0.09] bg-white/[0.03] px-2 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-white/45"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className={`mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center sm:gap-5 ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                style={{ transitionDelay: "380ms" }}
              >
                <Link
                  href="/services"
                  className="btn-gold justify-center px-8 py-3.5 text-[10px] sm:min-w-[180px]"
                  id="hero-cta-primary"
                >
                  Explore saunas
                </Link>
                <Link
                  href="/contact"
                  className="group/ghost inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/65 transition-colors hover:text-gold"
                  id="hero-cta-secondary"
                >
                  Book consultation
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.75}
                    className="transition-transform duration-300 group-hover/ghost:-translate-y-0.5 group-hover/ghost:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 border-t border-white/[0.06] bg-black/35 backdrop-blur-md transition-opacity duration-500 ${scrollY > 100 ? "opacity-0" : "opacity-100"}`}
      >
        <div
          className={`mx-auto flex max-w-[1600px] items-center justify-between gap-4 py-3 ${pagePad}`}
        >
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex shrink-0 flex-col gap-1.5">
              <span className="text-[8px] font-semibold uppercase tracking-[0.36em] text-white/35">
                Scroll
              </span>
              <span
                className="relative flex h-6 w-px overflow-hidden rounded-full bg-white/[0.1]"
                aria-hidden
              >
                <span className="absolute left-0 top-0 h-1.5 w-full animate-hero-scroll-line rounded-full bg-gradient-to-b from-gold from-40% to-transparent" />
              </span>
            </div>
            <p className="hidden truncate text-[10px] font-light tracking-wide text-white/30 sm:block md:max-w-[min(40vw,280px)]">
              Recovery & calm — engineered.
            </p>
          </div>
          <p className="shrink-0 text-[9px] font-medium uppercase tracking-[0.28em] text-white/25">
            Element Seven · Melbourne
          </p>
        </div>
      </div>
    </section>
  );
}
