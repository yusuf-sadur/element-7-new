"use client";

import { useEffect } from "react";

const revealTransforms: Record<string, string> = {
  left: "translate3d(-28px, 0, 0)",
  right: "translate3d(28px, 0, 0)",
  up: "translate3d(0, 24px, 0)",
  scale: "translate3d(0, 12px, 0) scale(0.97)",
  blur: "translate3d(0, 16px, 0)",
};

/**
 * Scroll-reveal via IntersectionObserver; complements Framer Motion `Reveal` components.
 */
export default function ScrollRevealInit() {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: "0px 0px -48px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const applyInitialTransform = (el: Element) => {
      const htmlEl = el as HTMLElement;
      const mode = el.getAttribute("data-reveal");
      if (mode && revealTransforms[mode]) {
        htmlEl.style.transform = revealTransforms[mode];
      }
      const delay = el.getAttribute("data-reveal-delay");
      if (delay) {
        htmlEl.style.setProperty("--reveal-delay", delay);
      }
    };

    const observeElements = () => {
      document.querySelectorAll(".scroll-reveal:not(.revealed)").forEach((el) => {
        applyInitialTransform(el);
        observer.observe(el);
      });
    };

    observeElements();

    let rafId: number | null = null;
    const mutationObserver = new MutationObserver(() => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        observeElements();
        rafId = null;
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
