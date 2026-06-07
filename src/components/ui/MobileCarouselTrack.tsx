"use client";

import type { ReactNode } from "react";

import Reveal from "@/components/ui/Reveal";

interface MobileCarouselTrackProps {
  children: ReactNode;
  /** Tailwind grid classes at md+ e.g. `md:grid md:grid-cols-5` */
  className?: string;
  /** When false, children handle their own scroll reveals (e.g. staggered cards). */
  reveal?: boolean;
}

/**
 * Horizontal mobile carousel with a visible peek of the next slide.
 * Animates the track once — not each card (per-card Reveal hides off-screen items).
 */
export default function MobileCarouselTrack({
  children,
  className = "",
  reveal = true,
}: Readonly<MobileCarouselTrackProps>) {
  const track = <div className={`mobile-carousel-track ${className}`.trim()}>{children}</div>;

  if (!reveal) return track;

  return (
    <Reveal variant="fade" delay={0.05}>
      {track}
    </Reveal>
  );
}
