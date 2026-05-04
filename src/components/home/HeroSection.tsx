"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=2400&q=90";

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

  // Advanced scroll-driven effects
  // We want the blur and darkening to happen over the first 800px of scroll
  const scrollRatio = Math.min(scrollY / 800, 1);
  const blurValue = scrollRatio * 0.1; // Max 8px blur (softer)
  const brightnessValue = 1 - (scrollRatio * 0.0003); // Darken by up to 30% (lighter)
  const opacityValue = 1 - (scrollRatio * 0.0002); // Fade slightly

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-transparent"
    >
      {/* ── Advanced Cinematic Parallax Background ── */}
      <div
        className="fixed inset-0 z-0 will-change-transform"
        style={{
          filter: `blur(${blurValue}px) brightness(${brightnessValue})`,
          opacity: opacityValue,
          transition: "filter 0.1s ease-out, opacity 0.1s ease-out",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover scale-[1.05]"
        />
        {/* Dark gradient overlays integrated into the fixed layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-obsidian" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      </div>

      {/* Static overlay to ensure content remains readable even as bg blurs */}
      <div className="absolute inset-0 z-[1] bg-obsidian/20 pointer-events-none" />

      {/* ── Hero Content ── */}
      <div className="container-e7 relative z-10 pt-36 pb-24 text-center">
        {/* Location badge */}
        <div
          className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="badge-gold mb-10 inline-flex">
            Melbourne — Premium Wellness Environments
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`font-['Cormorant_Garamond',serif] text-5xl sm:text-7xl md:text-[96px] font-light text-white leading-[1.02] tracking-tight mb-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "250ms" }}
        >
          Bespoke Wellness{" "}
          <span className="italic text-gold-shimmer font-light">&amp; Recovery</span>
          <br />
          <span className="font-light">Spaces</span>
        </h1>

        {/* Sub-heading */}
        <p
          className={`text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "400ms" }}
        >
          Melbourne-based specialists in custom saunas, steam rooms, cold
          plunges, and complete wellness environments — engineered for
          performance, longevity and luxury living.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "550ms" }}
        >
          <Link href="/contact" className="btn-gold" id="hero-cta-primary">
            Book Consultation
            <ArrowRight size={16} />
          </Link>
          <Link href="/projects" className="btn-outline" id="hero-cta-secondary">
            View Projects
          </Link>
        </div>

        {/* Stats strip */}
        <div
          className={`mt-24 pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-8 max-w-lg mx-auto transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "700ms" }}
        >
          {[
            { value: "100+", label: "Projects Completed" },
            { value: "5★", label: "Client Rating" },
            { value: "10+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-light text-gold mb-1">{stat.value}</div>
              <div className="text-xs text-white/40 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity duration-500 ${scrollY > 100 ? "opacity-0" : "opacity-100"}`}
      >
        <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase mb-2">
          Scroll
        </span>
        <ChevronDown size={18} className="text-gold animate-bounce" />
      </div>
    </section>
  );
}
