"use client";

import { useEffect, useState } from "react";

/**
 * Thin gold progress bar at the top of the viewport reflecting scroll depth.
 * Respects prefers-reduced-motion (hidden).
 */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const mq = globalThis.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReduce = () => setHide(mq.matches);
    syncReduce();
    mq.addEventListener("change", syncReduce);

    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      const next = total > 0 ? (el.scrollTop / total) * 100 : 0;
      setPct(Math.min(100, Math.max(0, next)));
    };

    onScroll();
    globalThis.addEventListener("scroll", onScroll, { passive: true });
    globalThis.addEventListener("resize", onScroll, { passive: true });

    return () => {
      mq.removeEventListener("change", syncReduce);
      globalThis.removeEventListener("scroll", onScroll);
      globalThis.removeEventListener("resize", onScroll);
    };
  }, []);

  if (hide) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] overflow-hidden bg-bark/20"
      aria-hidden
    >
      <div
        className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light shadow-[0_0_12px_rgba(201,168,76,0.35)] transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
