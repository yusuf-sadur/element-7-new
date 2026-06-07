"use client";

import { CircleCheck, Ruler } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type ServiceScopeSectionProps = {
  features: string[];
  benefits: string[];
};

function ScopePanel({
  label,
  title,
  titleAccent,
  items,
  icon: Icon,
  variant,
}: Readonly<{
  label: string;
  title: string;
  titleAccent: string;
  items: string[];
  icon: typeof Ruler;
  variant: "left" | "right";
}>) {
  return (
    <Reveal variant={variant === "left" ? "left" : "right"} delay={variant === "right" ? 0.08 : 0}>
      <article className="service-scope-panel h-full">
        <div className="flex items-start gap-4 border-b border-line/50 pb-7">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line/60 bg-cream-warm/80 text-bronze"
            aria-hidden
          >
            <Icon size={18} strokeWidth={1.25} />
          </div>
          <div className="min-w-0">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-concrete">
              {label}
            </p>
            <h3 className="mt-2 font-display text-[clamp(1.35rem,2.2vw,1.75rem)] font-light leading-snug text-ink">
              {title}{" "}
              <span className="text-bronze">{titleAccent}</span>
            </h3>
          </div>
        </div>

        <ul className="mt-2">
          {items.map((item, idx) => (
            <Reveal key={item} variant="up" delay={0.04 + idx * 0.04} as="li">
              <div className="service-scope-item">
                <span className="service-scope-index" aria-hidden>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-[14px] font-light leading-[1.65] text-ink-muted">{item}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export default function ServiceScopeSection({
  features,
  benefits,
}: Readonly<ServiceScopeSectionProps>) {
  return (
    <section className="border-t border-line/60 bg-white">
      <div className="container-e7 section-padding">
        <Reveal variant="up" className="mb-10 max-w-2xl md:mb-14">
          <p className="section-label">What we deliver</p>
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-light uppercase leading-[1.1] tracking-tight text-ink">
            Scope & <span className="text-bronze">outcomes.</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-ink-muted">
            Every build is specified in drawings, constructed on site, and handed over with
            documentation — one studio from first line to final commission.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <ScopePanel
            label="Specification"
            title="Construction"
            titleAccent="scope."
            items={features}
            icon={Ruler}
            variant="left"
          />
          <ScopePanel
            label="Delivery"
            title="Build"
            titleAccent="outcomes."
            items={benefits}
            icon={CircleCheck}
            variant="right"
          />
        </div>
      </div>
    </section>
  );
}
