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
  { type: "count", end: 50, suffix: "+", label: "Builds delivered" },
  { type: "count", end: 15, suffix: "+", label: "Years constructing" },
  { type: "count", end: 100, suffix: "%", label: "Design & build" },
  { type: "text", value: "AU", label: "Australia wide" },
];

export default function TrustSection() {
  return (
    <section id="trust" className="relative overflow-hidden bg-charcoal">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 0% 50%, rgba(194,154,99,0.08) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 100% 80%, rgba(242,238,232,0.03) 0%, transparent 50%)",
        }}
      />

      <div className="container-e7 relative section-padding !py-20 md:!py-28">
        <Reveal variant="up">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-0">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`md:px-8 ${idx > 0 ? "md:border-l md:border-white/[0.06]" : ""} ${idx === 0 ? "md:pl-0" : ""}`}
              >
                <div className="font-display text-[clamp(2.25rem,4.5vw,3rem)] font-light tabular-nums leading-none tracking-tight text-stone">
                  {stat.type === "count" ? (
                    <CountUpStat end={stat.end} suffix={stat.suffix} delay={idx * 0.1} />
                  ) : (
                    stat.value
                  )}
                </div>
                <p className="mt-3 font-sans text-[10px] font-medium uppercase leading-relaxed tracking-[0.18em] text-stone/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
