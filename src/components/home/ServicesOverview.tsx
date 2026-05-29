"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { SPACES } from "@/lib/brand";

type ServicesOverviewProps = {
  showCatalogueFooter?: boolean;
};

export default function ServicesOverview({
  showCatalogueFooter = true,
}: Readonly<ServicesOverviewProps>) {
  return (
    <section id="services-overview" className="section-padding relative overflow-hidden bg-white">
      <div className="container-e7 relative">
        <div className="mb-14 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            label="Build scope"
            title={
              <>
                What we design &{" "}
                <span className="italic text-bronze">construct.</span>
              </>
            }
          />
          <Reveal
            variant="fade"
            delay={0.12}
            className="max-w-md text-base font-light leading-relaxed text-ink-muted lg:text-right"
          >
            Six recovery modalities — each architecturally designed, specified, and
            built on site for residential and commercial properties.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-7 lg:grid-cols-2 lg:gap-8">
          {SPACES.map((space, idx) => {
            const n = String(idx + 1).padStart(2, "0");
            return (
              <Reveal
                key={space.slug}
                variant={idx % 2 === 0 ? "left" : "right"}
                delay={idx * 0.08}
              >
                <Link href={`/services/${space.slug}`} className="service-card group">
                  <div className="service-card-media">
                    <Image
                      src={space.image}
                      alt={space.title}
                      fill
                      priority={idx < 2}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.25s] ease-smooth group-hover:scale-[1.04]"
                    />
                    <div className="service-card-media-scrim" aria-hidden />
                    <span className="service-card-index" aria-hidden>
                      {n}
                    </span>
                    <span className="service-card-label">{space.label}</span>
                  </div>
                  <div className="service-card-body">
                    <h3 className="service-card-title">{space.title}</h3>
                    <p className="service-card-desc">{space.subtitle}</p>
                    <span className="service-card-cta">
                      <span>View build scope</span>
                      <span className="service-card-cta-icon" aria-hidden>
                        <ArrowUpRight size={15} strokeWidth={1.75} />
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {showCatalogueFooter && (
          <Reveal variant="up" delay={0.2} className="mt-16 border-t border-line/80 pt-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-lg">
                <p className="section-label">Complete builds</p>
                <p className="text-lg font-light leading-snug text-ink md:text-xl">
                  Multi-room recovery suites, outdoor pavilions, and commercial fit-outs
                  — designed and constructed end to end.
                </p>
              </div>
              <Link href="/services" className="btn-primary shrink-0" id="services-overview-all">
                View all spaces
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
