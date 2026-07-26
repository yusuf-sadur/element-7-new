"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import MobileCarouselTrack from "@/components/ui/MobileCarouselTrack";
import ParallaxMedia from "@/components/home/parallax/ParallaxMedia";
import type { SpaceDefinition } from "@/lib/brand";
import { BRAND, SPACES } from "@/lib/brand";

const HOME_SLUGS = [
  "traditional-dry-sauna",
  "infrared-sauna",
  "hybrid-sauna",
  "hammam-steam",
  "stainless-steel-plunge",
  "recovery-pools",
] as const;

const GALLERY_COPY: Record<string, string> = {
  "traditional-dry-sauna":
    "Custom-framed timber saunas built on site to your space — wood-fired or electric heaters, vapour-rated construction. Including barrel sauna builds.",
  "infrared-sauna":
    "Panel-system infrared builds with custom cabinetry — engineered for heat performance without synthetic off-gassing in the heated zone.",
  "hybrid-sauna":
    "Dual-system builds combining traditional heat and infrared in one structure — one fit-out, one materials spec, two heat systems integrated.",
  "hammam-steam":
    "Fully waterproofed and tiled steam environments — vapour-open lime and clay render systems where possible, fully commissioned and pressure-tested.",
  "recovery-pools":
    "Structural pool construction with stone finishes and full systems install — built as part of a complete recovery suite alongside sauna and steam.",
  "stainless-steel-plunge":
    "Marine-grade stainless fabrication with chilling plant supply and on-site commissioning — no PVC liners or plastic-bodied components.",
};

const PAGE_MODALITIES = [
  {
    title: "Heat",
    text: "Dry, infrared, and hybrid saunas — timber craft and thermal engineering.",
  },
  {
    title: "Breath",
    text: "Steam and hammam — waterproof construction, stone, and steam plant.",
  },
  {
    title: "Cold & water",
    text: "Plunge pools and recovery pools — steel, stone, and systems integration.",
  },
] as const;

type SpacesCinematicGridProps = {
  id?: string;
  kicker?: string;
  heading?: string;
  subheading?: string;
  spaces?: SpaceDefinition[];
  variant?: "home" | "page";
  ctaLabel?: string;
  className?: string;
};

function SpaceCard({
  space,
  idx,
  ctaLabel,
  variant,
}: {
  space: SpaceDefinition;
  idx: number;
  ctaLabel: string;
  variant: "home" | "page";
}) {
  const isPage = variant === "page";
  const index = String(idx + 1).padStart(2, "0");

  return (
    <Link
      href={`/services/${space.slug}`}
      className={`cinematic-card group relative block overflow-hidden ${
        isPage
          ? "aspect-[4/5] min-h-[300px] md:min-h-[340px]"
          : "aspect-[4/5] min-h-[300px] sm:min-h-[320px] md:aspect-[4/5] md:min-h-[340px] lg:min-h-[380px]"
      }`}
    >
      <div className="cinematic-card-media">
        <ParallaxMedia speed={isPage ? 0.2 : 0.24} className="!absolute !inset-0">
          <Image
            src={space.image}
            alt={space.title}
            fill
            sizes={
              isPage
                ? "(max-width: 768px) 100vw, 33vw"
                : "(max-width: 768px) 72vw, (max-width: 1024px) 50vw, 33vw"
            }
            className="object-cover transition-transform duration-[1.6s] ease-smooth group-hover:scale-[1.05]"
            priority={idx < 3}
          />
        </ParallaxMedia>
      </div>
      <div className="cinematic-card-gradient-bottom" aria-hidden />
      <div className="cinematic-card-hover-dim" aria-hidden />

      {isPage ? (
        <div className="absolute left-4 top-4 z-10 md:left-5 md:top-5">
          <span className="inline-block border border-stone/20 bg-warm-black/50 px-2.5 py-1 font-sans text-[9px] font-medium uppercase tracking-[0.2em] text-stone/80 backdrop-blur-sm transition-colors duration-500 group-hover:border-stone/35 group-hover:bg-warm-black/80 group-hover:text-stone">
            {space.label}
          </span>
        </div>
      ) : null}

      <div
        className={`cinematic-card-caption absolute inset-x-0 bottom-0 ${
          isPage ? "p-5 md:p-6" : "p-6 md:p-7"
        }`}
      >
        {isPage ? (
          <span className="font-sans text-[10px] font-medium tabular-nums tracking-[0.28em] text-bronze/80 transition-colors duration-500 group-hover:text-bronze">
            {index}
          </span>
        ) : null}
        <h3
          className={`font-sans font-semibold uppercase tracking-[0.2em] text-stone/90 transition-colors duration-500 group-hover:text-stone ${
            isPage ? "mt-2 text-[12px] md:text-[13px]" : "text-[12px] md:text-[13px]"
          }`}
        >
          {space.shortTitle}
        </h3>
        {isPage ? (
          <p className="mt-1 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-stone/45 transition-colors duration-500 group-hover:text-stone/75">
            {space.tagline}
          </p>
        ) : null}
        <p
          className={`font-light leading-relaxed text-stone/55 transition-colors duration-500 group-hover:text-stone/90 ${
            isPage
              ? "mt-3 line-clamp-2 text-[13px] md:line-clamp-3 md:text-[12px]"
              : "mt-3 line-clamp-4 text-[13px] md:text-sm"
          }`}
        >
          {GALLERY_COPY[space.slug] ?? space.subtitle}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-stone/70 transition-colors duration-500 group-hover:text-bronze">
          {ctaLabel}
          <ArrowUpRight
            size={12}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

export default function SpacesCinematicGrid({
  id,
  kicker,
  heading = "Designed for how you live, work & recover.",
  subheading,
  spaces,
  variant = "home",
  ctaLabel = "Explore",
  className = "",
}: Readonly<SpacesCinematicGridProps>) {
  const items =
    spaces ??
    (variant === "home"
      ? HOME_SLUGS.map((slug) => SPACES.find((s) => s.slug === slug)!)
      : SPACES);

  const isPage = variant === "page";

  if (isPage) {
    return (
      <section
        id={id}
        className={`border-t border-stone/10 bg-warm-black ${className}`.trim()}
      >
        <div className="container-e7 section-padding !pt-20 md:!pt-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-16 xl:gap-20">
            <Reveal variant="up" className="lg:col-span-7">
              <p className="section-label lg:justify-start">Six build types</p>
              <h2 className="max-w-3xl font-display text-[clamp(2rem,4.2vw,3.25rem)] font-light uppercase leading-[1.08] tracking-tight text-stone">
                {heading}
              </h2>
              {subheading ? (
                <p className="mt-6 max-w-xl text-base font-light leading-[1.85] text-stone/55 md:text-[17px]">
                  {subheading}
                </p>
              ) : null}
            </Reveal>

            <Reveal
              variant="fade"
              delay={0.1}
              className="lg:col-span-5 lg:border-l lg:border-stone/10 lg:pl-12 xl:pl-16"
            >
              <ul className="divide-y divide-stone/10">
                {PAGE_MODALITIES.map((modality) => (
                  <li key={modality.title} className="py-5 first:pt-0 last:pb-0">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-bronze">
                      {modality.title}
                    </p>
                    <p className="mt-2 text-sm font-light leading-relaxed text-stone/50">
                      {modality.text}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {items.map((space, idx) => (
              <Reveal key={space.slug} variant="up" delay={idx * 0.06}>
                <SpaceCard space={space} idx={idx} ctaLabel={ctaLabel} variant="page" />
              </Reveal>
            ))}
          </div>

          <Reveal
            variant="fade"
            delay={0.12}
            className="mt-14 flex flex-col gap-6 border-t border-stone/10 pt-10 sm:flex-row sm:items-center sm:justify-between md:mt-16"
          >
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-stone/40">
              <span className="text-stone/70">6 spaces</span>
              <span className="mx-3 text-stone/20" aria-hidden>
                ·
              </span>
              Design, build & handover
              <span className="mx-3 text-stone/20" aria-hidden>
                ·
              </span>
              {BRAND.coverage}
            </p>
            <Link
              href="/contact"
              className="link-line shrink-0 text-[11px] text-stone/55 after:bg-bronze hover:text-bronze"
            >
              Discuss your project
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className={`spaces-build-section ${className}`.trim()}>
      <div className="spaces-build-section__ambient" aria-hidden />
      <div className="container-e7 relative section-padding">
        <div className="mb-12 md:mb-14 lg:mb-16">
          {kicker ? (
            <Reveal variant="blur" delay={0}>
              <p className="section-label !text-bronze-light/90">{kicker}</p>
            </Reveal>
          ) : null}
          <Reveal variant="up" delay={kicker ? 0.06 : 0}>
            <h2 className="max-w-4xl font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.12] tracking-tight text-stone">
              {heading}
            </h2>
          </Reveal>
          {subheading ? (
            <Reveal variant="fade" delay={0.12}>
              <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-stone/55 md:text-[17px] md:leading-[1.75]">
                {subheading}
              </p>
            </Reveal>
          ) : null}
        </div>

        <MobileCarouselTrack
          reveal={false}
          className="gap-4 md:grid md:grid-cols-2 md:gap-5 md:pb-0 lg:grid-cols-3 lg:gap-6"
        >
          {items.map((space, idx) => (
            <div key={space.slug} className="mobile-carousel-item h-full">
              <Reveal variant="up" delay={(idx % 3) * 0.08} className="h-full">
                <SpaceCard space={space} idx={idx} ctaLabel={ctaLabel} variant="home" />
              </Reveal>
            </div>
          ))}
        </MobileCarouselTrack>
      </div>
    </section>
  );
}
