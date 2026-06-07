"use client";

import { useCallback, useEffect, useState } from "react";
import { Phone } from "lucide-react";

import { BRAND } from "@/lib/brand";

const MOBILE_MAX_WIDTH = 1023;
const HERO_CLEARANCE = 96;

export default function FloatingCallButton() {
  const [pastHero, setPastHero] = useState(false);

  const updateVisibility = useCallback(() => {
    const isMobile = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`).matches;
    if (!isMobile) {
      setPastHero(true);
      return;
    }

    const hero = document.getElementById("hero");
    if (!hero) {
      setPastHero(true);
      return;
    }

    const heroBottom = hero.getBoundingClientRect().bottom;
    setPastHero(heroBottom <= window.innerHeight - HERO_CLEARANCE);
  }, []);

  useEffect(() => {
    updateVisibility();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateVisibility]);

  return (
    <a
      href={`tel:${BRAND.phoneTel}`}
      className="floating-call"
      id="floating-call"
      data-past-hero={pastHero ? "" : undefined}
      aria-label={`Call ${BRAND.phone}`}
      aria-hidden={!pastHero ? true : undefined}
      tabIndex={pastHero ? undefined : -1}
    >
      <Phone size={22} strokeWidth={1.75} aria-hidden />
    </a>
  );
}
