"use client";

import { useEffect, type RefObject } from "react";
import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import Snap from "lenis/snap";

const ROOT_CLASS = "home-smooth-scroll";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function useHomeScrollEngine(
  containerRef: RefObject<HTMLElement | null>,
) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const root = document.documentElement;

    if (reduceMotion) {
      root.classList.remove(ROOT_CLASS);
      return;
    }

    root.classList.add(ROOT_CLASS);

    let lenis: Lenis | null = null;
    let snap: Snap | null = null;
    let frame = 0;
    const removeSnaps: (() => void)[] = [];

    const setup = () => {
      const container = containerRef.current;
      if (!container || lenis) return;

      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 1.15,
        autoResize: true,
      });

      snap = new Snap(lenis, {
        type: "proximity",
        duration: 1.15,
        easing: easeOutCubic,
        velocityThreshold: 0.55,
        debounce: 220,
      });

      container
        .querySelectorAll<HTMLElement>("[data-snap-section]")
        .forEach((section) => {
          removeSnaps.push(
            snap!.addElement(section, { align: ["start"] }),
          );
        });

      const footer = document.querySelector<HTMLElement>("footer");
      if (footer) {
        removeSnaps.push(snap.addElement(footer, { align: ["start"] }));
      }

      const loop = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    };

    setup();
    if (!lenis) {
      frame = requestAnimationFrame(setup);
    }

    return () => {
      cancelAnimationFrame(frame);
      removeSnaps.forEach((remove) => remove());
      snap?.destroy();
      lenis?.destroy();
      root.classList.remove(ROOT_CLASS);
    };
  }, [reduceMotion, containerRef]);
}
