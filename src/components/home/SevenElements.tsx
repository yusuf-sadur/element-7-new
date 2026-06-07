"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Flame, Snowflake, Wind, Moon, TrendingUp, Leaf, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/ui/RevealStagger";
import { BRAND, SEVEN_ELEMENTS } from "@/lib/brand";
import { EASE_PREMIUM } from "@/lib/motion";

const icons = [Flame, Snowflake, Wind, Moon, TrendingUp, Leaf, Users];

function ElementIcon({
  element,
  Icon,
  className = "",
}: {
  element: (typeof SEVEN_ELEMENTS)[number];
  Icon: (typeof icons)[number];
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`philosophy-element group flex flex-col items-center text-center ${className}`}>
      <span className="philosophy-element__num font-sans text-[9px] font-medium tabular-nums tracking-[0.32em] text-bronze/90 sm:text-[10px]">
        {element.num}
      </span>
      <motion.div
        className="philosophy-element__icon mt-4 text-ink/40 sm:mt-5"
        whileHover={reduceMotion ? undefined : { scale: 1.12, y: -2 }}
        transition={{ duration: 0.4, ease: EASE_PREMIUM }}
      >
        <Icon size={22} strokeWidth={1} aria-hidden className="sm:h-6 sm:w-6" />
      </motion.div>
      <h3 className="philosophy-element__title mt-4 font-sans text-[9px] font-semibold uppercase leading-tight tracking-[0.18em] text-ink sm:mt-5 sm:text-[10px] sm:tracking-[0.22em]">
        {element.title}
      </h3>
    </div>
  );
}

export default function SevenElements() {
  return (
    <section id="philosophy" className="relative bg-stone">
      <div className="container-e7 section-padding">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-center lg:gap-16 xl:gap-24">
          {/* Left — editorial copy */}
          <Reveal variant="up" className="max-w-xl lg:max-w-none">
            <p className="section-label lg:justify-start">Our Philosophy</p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light uppercase leading-[1.08] tracking-tight text-ink">
              The Seven Elements of Recovery
            </h2>
            <p className="mt-6 text-base font-light leading-[1.85] text-ink-muted">
              {BRAND.supportingLine}
            </p>
            <Link
              href="/our-approach"
              className="link-line mt-10 inline-flex text-[11px] text-ink-muted hover:text-bronze"
            >
              Our approach
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>

          {/* Right — minimal icon strip (desktop) */}
          <RevealStagger
            className="hidden items-start justify-between gap-3 lg:flex xl:gap-4"
            delayChildren={0.14}
            stagger={0.07}
          >
            {SEVEN_ELEMENTS.map((element, idx) => {
              const Icon = icons[idx];
              return (
                <RevealStaggerItem key={element.num} className="min-w-0 flex-1">
                  <ElementIcon element={element} Icon={Icon} />
                </RevealStaggerItem>
              );
            })}
          </RevealStagger>
        </div>

        {/* Mobile & tablet — airy horizontal strip */}
        <RevealStagger
          className="-mx-1 mt-12 flex gap-6 overflow-x-auto px-1 pb-2 scrollbar-none sm:gap-8 lg:hidden"
          delayChildren={0.08}
          stagger={0.06}
        >
          {SEVEN_ELEMENTS.map((element, idx) => {
            const Icon = icons[idx];
            return (
              <RevealStaggerItem
                key={element.num}
                className="w-[4.5rem] shrink-0 sm:w-[5.25rem]"
              >
                <ElementIcon element={element} Icon={Icon} />
              </RevealStaggerItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
