"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/ui/RevealStagger";
import { MATERIALS } from "@/lib/brand";

const GALLERY_ORDER = [
  "Natural Timber",
  "Hemp & Wool Insulation",
  "Marine-Grade Stainless Steel",
  "Lime & Clay Render",
  "Low-VOC Finishes",
] as const;

const galleryMaterials = GALLERY_ORDER.map(
  (title) => MATERIALS.find((m) => m.title === title)!,
).filter(Boolean);

const MATERIALS_IMAGE_SIZES = "(max-width: 1024px) 55vw, 1400px";

export default function MaterialsSection() {
  return (
    <section
      id="materials"
      className="materials-editorial relative flex min-h-[min(100svh,960px)] flex-col bg-warm-black lg:min-h-[88vh] lg:flex-row"
    >
      <div className="materials-editorial-copy flex w-full shrink-0 flex-col justify-between px-6 py-12 sm:px-10 sm:py-14 lg:w-[min(34%,420px)] lg:max-w-[440px] lg:px-12 lg:py-16 xl:px-16">
        <Reveal variant="left">
          <p className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-stone/45">
            Materials & craftsmanship
          </p>
          <h2 className="mt-8 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.12] tracking-tight text-stone">
            Built to last.
            <br />
            Crafted with purpose.
          </h2>
          <p className="mt-8 max-w-xs text-[15px] font-light leading-[1.75] text-stone/55 sm:max-w-xs sm:text-base">
            We use only natural materials chosen for their beauty, performance, and longevity —
            specified low-VOC as standard, on every build.
          </p>
        </Reveal>

        <Reveal variant="fade" delay={0.12}>
          <Link
            href="/about"
            className="materials-editorial-cta mt-10 inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-stone transition-colors duration-500 hover:text-bronze lg:mt-0"
          >
            Our materials
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </Reveal>
      </div>

      <RevealStagger
        className="materials-editorial-gallery flex min-h-[52vh] flex-1 lg:min-h-0"
        stagger={0.1}
        delayChildren={0.05}
      >
        {galleryMaterials.map((material, idx) => (
          <RevealStaggerItem
            key={material.title}
            as="motion.article"
            className="materials-editorial-panel group relative min-w-[38vw] flex-1 overflow-hidden sm:min-w-[32vw] lg:min-w-0"
          >
            <div className="absolute inset-0">
              <Image
                src={material.image}
                alt={`${material.title} — ${material.text}`}
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
            <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-5 text-center sm:pb-6">
              <h3 className="font-display text-sm font-bold text-stone sm:text-base">
                {material.title}
              </h3>
              <p className="mt-1.5 text-[11px] leading-snug text-stone/60 sm:text-xs">
                {material.text}
              </p>
            </div>
          </RevealStaggerItem>
        ))}
      </RevealStagger>
    </section>
  );
}
