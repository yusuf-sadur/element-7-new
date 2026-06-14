"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  MessageSquare,
  Ruler,
  HardHat,
  Wrench,
  HeartHandshake,
} from "lucide-react";
import ConsultationCta from "@/components/ui/ConsultationCta";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/ui/RevealStagger";
import HeroVideoBackground from "@/components/home/HeroVideoBackground";
import { PROCESS_STEPS } from "@/lib/brand";
import heroSaunaImg from "@/assets/hero-sauna3.jpg";

const icons = [MessageSquare, Ruler, HardHat, Wrench, HeartHandshake];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="process-section relative isolate min-h-[100dvh] w-full overflow-hidden bg-ink"
      aria-labelledby="process-heading"
    >
      {/* Full-bleed video background */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <HeroVideoBackground
          poster={heroSaunaImg}
          overlay="none"
          imagePriority={false}
          imageSizes="100vw"
        />
        <div className="process-section-scrim absolute inset-0" />
      </div>

      <div className="container-e7 relative z-10 flex min-h-[100dvh] flex-col justify-center section-padding py-24 md:py-32">
        <Reveal variant="up" className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-label text-bronze">
            <span className="h-px w-8 bg-bronze/60" aria-hidden />
            Our Process
          </p>
          <h2
            id="process-heading"
            className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.1] tracking-tight text-stone"
          >
            From consultation to handover. One team, fixed scope.
          </h2>
          <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-stone/75 md:text-[17px]">
            We manage your project end to end — drawings, trades, construction, commissioning and
            documentation. No subcontracted scope-creep, no separate &ldquo;design&rdquo; company.
          </p>
        </Reveal>

        <RevealStagger
          className="mobile-carousel-track mt-12 md:mt-16 md:grid md:grid-cols-5 md:gap-3 lg:gap-4"
          stagger={0.08}
          delayChildren={0.1}
        >
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <RevealStaggerItem
                key={step.number}
                as="motion.article"
                className="process-step-card mobile-carousel-item"
              >
                <div className="flex h-9 w-9 items-center justify-center border border-white/15 bg-white/[0.06] text-stone/80">
                  <Icon size={17} strokeWidth={1} aria-hidden />
                </div>
                <span className="mt-5 block font-sans text-[10px] font-medium tabular-nums tracking-[0.28em] text-bronze">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-sm font-bold text-stone md:text-base">
                  {step.title}
                </h3>
                <p className="mt-3 text-[13px] font-light leading-relaxed text-stone/65 md:text-sm">
                  {step.description}
                </p>
                {"tag" in step && step.tag ? (
                  <span className="mt-3 inline-block border border-bronze/60 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.06em] text-bronze">
                    {step.tag}
                  </span>
                ) : null}
              </RevealStaggerItem>
            );
          })}
        </RevealStagger>

        <Reveal
          variant="fade"
          delay={0.16}
          className="mt-10 flex flex-col items-center justify-center gap-4 md:mt-14 md:flex-row md:flex-wrap md:justify-start"
        >
          <ConsultationCta id="process-cta" className="justify-center md:justify-start" />
          <Link
            href="/our-approach"
            className="link-line inline-flex text-[11px] text-stone/70 after:bg-bronze hover:text-stone"
          >
            How we work
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
