"use client";

import Link from "next/link";
import { ArrowUpRight, Flame, Snowflake, Wind, Moon, TrendingUp, Leaf, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { BRAND, SEVEN_ELEMENTS } from "@/lib/brand";

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
  return (
    <div className={`group flex flex-col items-center text-center ${className}`}>
      <span className="font-sans text-[9px] font-medium tabular-nums tracking-[0.32em] text-bronze/90 sm:text-[10px]">
        {element.num}
      </span>
      <div className="mt-4 text-ink/40 transition-colors duration-500 group-hover:text-bronze sm:mt-5">
        <Icon size={22} strokeWidth={1} aria-hidden className="sm:h-6 sm:w-6" />
      </div>
      <h3 className="mt-4 font-sans text-[9px] font-semibold uppercase leading-tight tracking-[0.18em] text-ink sm:mt-5 sm:text-[10px] sm:tracking-[0.22em]">
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
          <Reveal variant="fade" delay={0.12} className="hidden lg:block">
            <div className="flex items-start justify-between gap-3 xl:gap-4">
              {SEVEN_ELEMENTS.map((element, idx) => {
                const Icon = icons[idx];
                return (
                  <ElementIcon
                    key={element.num}
                    element={element}
                    Icon={Icon}
                    className="min-w-0 flex-1"
                  />
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Mobile & tablet — airy horizontal strip */}
        <Reveal variant="fade" delay={0.1} className="mt-12 lg:hidden">
          <div className="-mx-1 flex gap-6 overflow-x-auto px-1 pb-2 scrollbar-none sm:gap-8">
            {SEVEN_ELEMENTS.map((element, idx) => {
              const Icon = icons[idx];
              return (
                <ElementIcon
                  key={element.num}
                  element={element}
                  Icon={Icon}
                  className="w-[4.5rem] shrink-0 sm:w-[5.25rem]"
                />
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
