"use client";

import { useEffect } from "react";

/**
 * Initialises the scroll-reveal IntersectionObserver globally —
 * mirrors the Supreme Town App.tsx implementation exactly.
 */
export default function ScrollRevealInit() {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.08,
      /* Slightly earlier reveals than a deep -50px inset */
      rootMargin: "0px 0px -36px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const revealElements = document.querySelectorAll(
        ".scroll-reveal:not(.revealed)"
      );
      revealElements.forEach((el) => observer.observe(el));
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

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
