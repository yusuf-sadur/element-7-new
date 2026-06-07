"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { MATERIALS } from "@/lib/brand";

const GALLERY_ORDER = [
  "Natural Timber",
  "Stone & Marble",
  "Precision Lighting",
  "Concrete & Plaster",
  "Custom Detailing",
] as const;

const galleryMaterials = GALLERY_ORDER.map(
  (title) => MATERIALS.find((m) => m.title === title)!,
).filter(Boolean);

/** Tall portrait panels need a large width hint — 14vw was serving ~250px images stretched to ~900px tall. */
const MATERIALS_IMAGE_SIZES = "(max-width: 1024px) 55vw, 1400px";

export default function MaterialsSection() {
  return (
    <section
      id="materials"
      className="materials-editorial relative flex min-h-[min(100svh,960px)] flex-col bg-warm-black lg:min-h-[88vh] lg:flex-row"
    >
      <div className="materials-editorial-copy flex w-full shrink-0 flex-col justify-between px-6 py-12 sm:px-10 sm:py-14 lg:w-[min(34%,420px)] lg:max-w-[440px] lg:px-12 lg:py-16 xl:px-16">
        <Reveal variant="left">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-stone/45">
            Materials & craftsmanship
          </p>
          <h2 className="mt-8 font-display text-[clamp(1.65rem,2.6vw,2.5rem)] font-light uppercase leading-[1.18] tracking-[0.08em] text-stone">
            Built to last.
            <br />
            Crafted to inspire.
          </h2>
          <p className="mt-8 max-w-[18rem] text-[13px] font-light leading-[1.75] text-stone/55 sm:max-w-xs sm:text-sm">
            We use only the highest quality natural materials, chosen for their beauty,
            performance, and longevity. Every detail is considered. Every element has
            purpose.
          </p>
        </Reveal>

        <Reveal variant="fade" delay={0.12}>
          <Link
            href="/our-approach"
            className="materials-editorial-cta mt-10 inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-stone transition-colors duration-500 hover:text-bronze lg:mt-0"
          >
            Our materials
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </Reveal>
      </div>

      <div className="materials-editorial-gallery flex min-h-[52vh] flex-1 lg:min-h-0">
        {galleryMaterials.map((material, idx) => (
          <article
            key={material.title}
            className="materials-editorial-panel group relative min-w-[38vw] flex-1 overflow-hidden sm:min-w-[32vw] lg:min-w-0"
          >
            <div className="absolute inset-0">
              <Image
                src={material.image}
                alt={`${material.title} — architectural material`}
                fill
                sizes={MATERIALS_IMAGE_SIZES}
                quality={92}
                className="object-cover transition-transform duration-[1.4s] ease-smooth will-change-transform group-hover:scale-[1.03]"
                priority={idx < 2}
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-warm-black/75 via-warm-black/10 to-transparent"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 bg-warm-black/0 transition-colors duration-500 group-hover:bg-warm-black/25" />
            <h3 className="absolute inset-x-0 bottom-0 z-10 px-3 pb-5 text-center font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-stone sm:pb-6 sm:text-[10px] md:tracking-[0.24em]">
              {material.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
