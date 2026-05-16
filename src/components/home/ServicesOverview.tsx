"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import customSaunaImg from "@/assets/hero-sauna.jpg";
import infraredSaunasImg from "@/assets/infrared Saunas.png";
import steamRoomsImg from "@/assets/steam rooms.png";
import coldPlungeImg from "@/assets/cold plunge.png";

type ServiceItem = {
  image: typeof customSaunaImg;
  label: string;
  title: string;
  description: string;
  href: string;
};

const services: ServiceItem[] = [
  {
    image: customSaunaImg,
    label: "Dry heat",
    title: "Custom Saunas",
    description:
      "Architecture-led dry heat — timber, lighting, and airflow tuned to your rituals.",
    href: "/services/custom-saunas",
  },
  {
    image: infraredSaunasImg,
    label: "Recovery",
    title: "Infrared Saunas",
    description:
      "Gentle deep-tissue warmth for longer sessions and everyday recovery.",
    href: "/services/infrared-saunas",
  },
  {
    image: steamRoomsImg,
    label: "Hydrothermal",
    title: "Steam Rooms",
    description:
      "Quiet steam performance with refined finishes and sensory integration.",
    href: "/services/steam-rooms",
  },
  {
    image: coldPlungeImg,
    label: "Cold therapy",
    title: "Cold Plunge Systems",
    description:
      "Precision chilled immersion for contrast therapy and mental clarity.",
    href: "/services/cold-plunge",
  },
];

type ServicesOverviewProps = {
  /** When false, hides the bottom “View all services” strip (e.g. on `/services`). Default true. */
  showCatalogueFooter?: boolean;
};

export default function ServicesOverview({
  showCatalogueFooter = true,
}: Readonly<ServicesOverviewProps>) {
  return (
    <section
      id="services-overview"
      className="section-padding relative isolate overflow-hidden border-t border-white/[0.07] bg-gradient-to-b from-obsidian via-obsidian-light/80 to-obsidian"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.22]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.08)_0%,transparent_65%)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_68%)] blur-3xl"
        aria-hidden
      />

      <div className="container-e7 relative z-10">
        {/* Header — editorial split */}
        <header className="scroll-reveal mb-14 grid gap-10 lg:mb-20 lg:grid-cols-12 lg:gap-12 lg:gap-x-16">
          <div className="relative lg:col-span-7">
            <div
              className="pointer-events-none absolute -left-4 bottom-2 top-2 w-px bg-gradient-to-b from-gold/45 via-gold/15 to-transparent sm:-left-5"
              aria-hidden
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold/90">
              Signature offerings
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,4.8vw,3.75rem)] font-light leading-[1.08] tracking-[-0.035em] text-white">
              <span className="block">Wellness environments</span>
              <span className="mt-2 inline-block bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text font-display italic text-transparent">
                composed for your life.
              </span>
            </h2>
          </div>
          <div className="flex flex-col justify-end border-t border-white/[0.07] pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0 xl:pl-12">
            <p className="text-[15px] font-light leading-relaxed text-white/45">
              Every modality is engineered as part of a whole — thermal
              performance, acoustic discipline, and materials that carry forward
              for decades.
            </p>
            <div className="mt-8 h-px w-12 bg-gradient-to-r from-gold/60 to-transparent" />
          </div>
        </header>

        {/* Premium card grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          {services.map((service, idx) => {
            const n = String(idx + 1).padStart(2, "0");

            return (
              <Link
                key={service.href}
                href={service.href}
                className="scroll-reveal group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-bark/25 shadow-[0_24px_80px_rgba(24,32,22,0.45)] ring-1 ring-inset ring-white/[0.03] transition-all duration-500 hover:border-gold/25 hover:shadow-[0_32px_100px_rgba(24,32,22,0.55)] hover:ring-gold/10"
              >
                <div className="relative aspect-[16/11] overflow-hidden sm:aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-[transform,filter] duration-[1.1s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bark/85 via-bark/25 to-bark/10" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold/15 via-transparent to-transparent" />
                  </div>

                  <div className="absolute left-5 top-5 flex items-baseline gap-3 sm:left-6 sm:top-6">
                    <span className="font-display text-4xl font-extralight leading-none text-white/25 sm:text-5xl">
                      {n}
                    </span>
                    <span className="rounded-full border border-white/15 bg-bark/40 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-gold/95 backdrop-blur-md">
                      {service.label}
                    </span>
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col border-t border-white/[0.06] bg-gradient-to-b from-bark/40 to-bark/55 p-7 backdrop-blur-sm sm:p-8">
                  <div className="pointer-events-none absolute left-0 top-0 h-px w-16 bg-gradient-to-r from-gold/50 to-transparent" />

                  <h3 className="font-display text-2xl font-light tracking-[-0.02em] text-white sm:text-[1.65rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md flex-1 text-sm font-light leading-relaxed text-white/50 sm:text-[15px]">
                    {service.description}
                  </p>

                  <span className="mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55 transition-colors duration-300 group-hover:text-gold">
                    <span>Discover</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 group-hover:border-gold/40 group-hover:bg-gold group-hover:text-black">
                      <ArrowUpRight size={16} strokeWidth={1.75} />
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer strip */}
        {showCatalogueFooter && (
          <div className="scroll-reveal mt-16 border-t border-white/[0.08] pt-12 md:mt-20 md:pt-14">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-lg">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold/80">
                  Full catalogue
                </p>
                <p className="mt-3 text-lg font-light leading-snug text-white/80 md:text-xl">
                  Contrast therapy, recovery suites, outdoor wellness, and
                  commercial programmes — all specified to the same standard.
                </p>
              </div>
              <Link
                href="/services"
                className="btn-gold shrink-0 px-10 py-4 text-[11px]"
                id="services-overview-all"
              >
                View all services
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
