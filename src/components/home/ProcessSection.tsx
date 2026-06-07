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
import Reveal from "@/components/ui/Reveal";
import MobileCarouselTrack from "@/components/ui/MobileCarouselTrack";
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
            className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light uppercase leading-[1.06] tracking-tight text-stone"
          >
            From consultation to handover.
          </h2>
          <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-stone/75 md:text-[15px]">
            One studio manages your project — drawings, trades, construction,
            commissioning, and documentation through to completion.
          </p>
        </Reveal>

        <MobileCarouselTrack className="mt-12 md:mt-16 md:grid md:grid-cols-5 md:gap-3 lg:gap-4">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = icons[idx];
              return (
                <article
                  key={step.number}
                  className="process-step-card mobile-carousel-item"
                >
                  <div className="flex h-9 w-9 items-center justify-center border border-white/15 bg-white/[0.06] text-stone/80">
                    <Icon size={17} strokeWidth={1} aria-hidden />
                  </div>
                  <span className="mt-5 block font-sans text-[10px] font-medium tabular-nums tracking-[0.28em] text-bronze">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-stone">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[12px] font-light leading-relaxed text-stone/65 md:text-[13px]">
                    {step.description}
                  </p>
                </article>
              );
            })}
        </MobileCarouselTrack>

        <Reveal
          variant="fade"
          delay={0.16}
          className="mt-10 flex flex-col items-center justify-center gap-4 md:mt-14 md:flex-row md:flex-wrap md:justify-start"
        >
          <Link href="/contact" className="btn-accent" id="process-cta">
            Book a consultation
            <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />
          </Link>
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
