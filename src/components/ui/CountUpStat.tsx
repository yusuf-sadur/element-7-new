"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

type CountUpStatProps = {
  end: number;
  suffix?: string;
  delay?: number;
  className?: string;
};

export default function CountUpStat({
  end,
  suffix = "",
  delay = 0,
  className = "",
}: Readonly<CountUpStatProps>) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.45 });
  const motionVal = useMotionValue(reduceMotion ? end : 0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const [display, setDisplay] = useState(reduceMotion ? end : 0);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  useEffect(() => {
    if (reduceMotion || !isInView) return;

    let controls: ReturnType<typeof animate> | undefined;
    const timeout = window.setTimeout(() => {
      controls = animate(motionVal, end, {
        duration: 1.85,
        ease: EASE_PREMIUM,
      });
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      controls?.stop();
    };
  }, [isInView, end, motionVal, delay, reduceMotion]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`.trim()}>
      {display}
      {suffix}
    </span>
  );
}
