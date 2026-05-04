"use client";

import { useState, useEffect } from "react";

interface PageHeroProps {
  /** Background image URL */
  image: string;
  /** Small all-caps label above the headline (e.g. "About") */
  label: string;
  /** Plain portion of the h1 headline */
  title: string;
  /** Gold italic portion of the headline (renders after title) */
  titleAccent?: string;
  /** Optional subtitle / description */
  subtitle?: string;
  /** Height of the hero — defaults to 65vh */
  height?: string;
  /** Optional content below subtitle */
  children?: React.ReactNode;
}

export default function PageHero({
  image,
  label,
  title,
  titleAccent,
  subtitle,
  height = "65vh",
  children,
}: PageHeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

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
  const scrollRatio = Math.min(scrollY / 600, 1);
  const blurValue = scrollRatio * 8;
  const brightnessValue = 1 - (scrollRatio * 0.3);
  const opacityValue = 1 - (scrollRatio * 0.15);

  return (
    <div
      className="relative bg-transparent"
      style={{ height, minHeight: "380px" }}
    >
      {/* ── Fixed-style Cinematic Background ── */}
      <div
        className={`fixed inset-0 z-0 will-change-transform transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{
          filter: `blur(${blurValue}px) brightness(${brightnessValue})`,
          opacity: opacityValue * (loaded ? 1 : 0),
          transform: `scale(${1 + scrollRatio * 0.05})`, // Subtle zoom on scroll
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-obsidian" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      </div>

      {/* Gradient overlays — left-heavy to give text room */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/65 to-obsidian/20 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-black/40 z-[1]" />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 z-[1] bg-dot-pattern opacity-20" />

      {/* Content — sits at the bottom-left like Supreme Town */}
      <div className="absolute inset-0 z-10 flex items-end pb-14">
        <div className="container-custom2">
          <p className={`section-label mb-3 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {label}
          </p>
          <h1
            className={`font-['Cormorant_Garamond',serif] text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] tracking-tight transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="italic text-gold-shimmer">{titleAccent}</span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className={`mt-4 text-white/55 text-sm md:text-base max-w-xl leading-relaxed font-light transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {subtitle}
            </p>
          )}
          {children && <div className={`mt-8 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>{children}</div>}
          {/* Gold accent line */}
          <div className={`mt-6 w-16 h-px bg-gold transition-all duration-1000 delay-500 ${loaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"} origin-left`} />
        </div>
      </div>
    </div>
  );
}
