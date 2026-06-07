"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";
import ServiceScopeSection from "@/components/services/ServiceScopeSection";
import Reveal from "@/components/ui/Reveal";
import MobileCarouselTrack from "@/components/ui/MobileCarouselTrack";
import type { SpaceDefinition } from "@/lib/brand";
import { SPACES } from "@/lib/brand";
import { SnapSection } from "@/components/scroll/PageScrollShell";

interface ServiceDetailContentProps {
  space: SpaceDefinition;
  snap?: boolean;
}

function serviceTypeForForm(title: string): string {
  const map: Record<string, string> = {
    "Hammam & Steam Rooms": "Hammam & Steam Room",
    "Recovery Pools": "Recovery Pool",
    "Stainless Steel Plunge Pools": "Stainless Steel Plunge Pool",
  };
  return map[title] ?? title;
}

function SectionWrap({
  snap,
  children,
}: {
  snap?: boolean;
  children: ReactNode;
}) {
  return snap ? <SnapSection>{children}</SnapSection> : <>{children}</>;
}

export default function ServiceDetailContent({
  space,
  snap = false,
}: Readonly<ServiceDetailContentProps>) {
  const otherSpaces = SPACES.filter((s) => s.slug !== space.slug).slice(0, 4);

  return (
    <>
      <SectionWrap snap={snap}>
      <section className="bg-stone">
        <div className="container-e7 section-padding">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal variant="left" className="lg:col-span-5">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-concrete">
                Build overview
              </p>
              <h2 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-[1.1] tracking-tight text-ink">
                Designed and constructed for your property.
              </h2>
              <p className="mt-3 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-bronze">
                {space.mood}
              </p>
            </Reveal>
            <Reveal variant="right" delay={0.08} className="lg:col-span-7">
              <p className="text-base font-light leading-[1.8] text-ink-muted md:text-[17px]">
                {space.longDescription}
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      </SectionWrap>

      <SectionWrap snap={snap}>
      <section className="relative min-h-[50vh] overflow-hidden bg-warm-black md:min-h-[60vh]">
        <Image
          src={space.image}
          alt={`${space.title} construction detail`}
          fill
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="cinematic-overlay absolute inset-0" />
        <div className="container-e7 relative z-10 flex min-h-[50vh] items-end section-padding md:min-h-[60vh]">
          <Reveal variant="up" className="max-w-xl pb-4">
            <p className="font-display text-2xl font-light text-stone/90 md:text-3xl">
              {space.heading}
            </p>
          </Reveal>
        </div>
      </section>
      </SectionWrap>

      <SectionWrap snap={snap}>
        <ServiceScopeSection features={space.features} benefits={space.benefits} />
      </SectionWrap>

      {space.faqs.length > 0 && (
        <SectionWrap snap={snap}>
          <section className="bg-warm-black">
            <div className="container-e7 section-padding">
              <Reveal variant="up" className="mb-12 md:mb-16">
                <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-light uppercase tracking-tight text-stone">
                  Common questions
                </h2>
              </Reveal>
              <div className="grid gap-0 divide-y divide-stone/10 border-y border-stone/10">
                {space.faqs.map((faq, idx) => (
                  <Reveal key={faq.q} variant="up" delay={idx * 0.06}>
                    <div className="grid gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                      <h3 className="font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-stone md:col-span-5">
                        {faq.q}
                      </h3>
                      <p className="font-sans text-sm font-light leading-relaxed text-stone/55 md:col-span-7">
                        {faq.a}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </SectionWrap>
      )}

      <SectionWrap snap={snap}>
      <section className="bg-stone">
        <div className="container-e7 section-padding">
          <Reveal variant="up" className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-light uppercase tracking-tight text-ink">
              Other spaces we build
            </h2>
            <Link
              href="/services"
              className="link-line shrink-0 text-[11px] text-ink-muted hover:text-bronze"
            >
              View all
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>

          <MobileCarouselTrack className="md:grid md:grid-cols-4 md:gap-4">
            {otherSpaces.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="mobile-carousel-item cinematic-card group relative block aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 70vw, 25vw"
                  className="object-cover transition-transform duration-[1.4s] ease-smooth group-hover:scale-[1.04]"
                />
                <div className="cinematic-card-gradient-bottom" aria-hidden />
                <div className="cinematic-card-hover-dim" aria-hidden />
                <div className="cinematic-card-caption absolute inset-x-0 bottom-0 p-4">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-stone">
                    {item.shortTitle}
                  </span>
                </div>
              </Link>
            ))}
          </MobileCarouselTrack>
        </div>
      </section>
      </SectionWrap>

      <SectionWrap snap={snap}>
        <section className="border-t border-line/50 bg-stone">
          <div className="container-e7 section-padding !py-12 md:!py-16">
            <Reveal variant="up">
              <div className="service-enquiry-panel mx-auto grid max-w-4xl overflow-hidden rounded-2xl border border-line/60 bg-white shadow-[0_12px_40px_rgba(28,33,24,0.06)] lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:rounded-[1.65rem]">
                <div className="flex flex-col justify-center border-b border-line/50 bg-cream-warm/50 px-7 py-8 lg:border-b-0 lg:border-r lg:px-9 lg:py-9">
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-bronze">
                    Enquire
                  </p>
                  <h2 className="mt-4 font-display text-[clamp(1.35rem,2.2vw,1.75rem)] font-light leading-snug text-ink">
                    Your{" "}
                    <span className="text-bronze">{space.shortTitle.toLowerCase()}</span>{" "}
                    build
                  </h2>
                  <p className="mt-3 text-[13px] font-light leading-relaxed text-ink-muted">
                    Consultation, design, and construction — one studio from drawings to
                    handover.
                  </p>
                  <p className="mt-5 font-sans text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                    Response within one business day
                  </p>
                </div>
                <div className="px-7 py-7 lg:px-8 lg:py-8">
                  <ConsultationForm
                    theme="light"
                    embedded
                    compact
                    showHeader={false}
                    defaultServiceType={serviceTypeForForm(space.title)}
                    lockServiceType
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </SectionWrap>
    </>
  );
}
