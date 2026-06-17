"use client";

import Reveal from "@/components/ui/Reveal";
import CountUpStat from "@/components/ui/CountUpStat";

type CountStat = {
  type: "count";
  end: number;
  suffix: string;
  label: string;
};

type TextStat = {
  type: "text";
  value: string;
  label: string;
};

type StatItem = CountStat | TextStat;

const stats: StatItem[] = [
  { type: "count", end: 120, suffix: "+", label: "Builds delivered" },
  { type: "count", end: 20, suffix: "+", label: "Years on the tools" },
  { type: "count", end: 100, suffix: "%", label: "Design & build, one team" },
  { type: "text", value: "AU", label: "Australia-wide" },
];

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden border-y border-white/[0.06] bg-charcoal"
      aria-label="Studio credentials"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at 50% 50%, rgba(194,154,99,0.1) 0%, transparent 62%), radial-gradient(ellipse 40% 50% at 0% 100%, rgba(242,238,232,0.04) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 100% 0%, rgba(242,238,232,0.04) 0%, transparent 55%)",
        }}
      />

      <div className="container-e7 relative flex justify-center py-16 md:py-20 lg:py-24">
        <ul className="trust-stats mx-auto grid w-full max-w-5xl grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-y-0">
          {stats.map((stat, idx) => (
            <Reveal
              key={stat.label}
              as="li"
              variant="up"
              delay={idx * 0.08}
              className="trust-stats__item flex flex-col items-center px-4 text-center sm:px-6 md:px-8"
            >
              <span className="mb-4 block h-px w-8 bg-bronze/45" aria-hidden />
              <div className="font-display text-[clamp(2.5rem,5vw,3.35rem)] font-extrabold tabular-nums leading-none tracking-tight text-stone">
                {stat.type === "count" ? (
                  <CountUpStat end={stat.end} suffix={stat.suffix} delay={idx * 0.1} />
                ) : (
                  <span className="text-bronze-light">{stat.value}</span>
                )}
              </div>
              <p className="mt-3 max-w-[10rem] font-sans text-[10px] font-medium uppercase leading-relaxed tracking-label text-bronze/75">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
