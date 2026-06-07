"use client";

import ConsultationCta from "@/components/ui/ConsultationCta";
import ServiceCinematicHero from "@/components/services/ServiceCinematicHero";
import SpacesCinematicGrid from "@/components/services/SpacesCinematicGrid";
import ProcessSection from "@/components/home/ProcessSection";
import Reveal from "@/components/ui/Reveal";
import PageScrollShell, { SnapSection } from "@/components/scroll/PageScrollShell";
import { BRAND, ourServicesImg } from "@/lib/brand";

export default function ServicesScrollExperience() {
  return (
    <PageScrollShell className="bg-warm-black">
      <SnapSection>
        <ServiceCinematicHero
          image={ourServicesImg}
          label="Spaces"
          title="Recovery environments, designed and built."
          subtitle="Saunas, steam rooms, plunge pools, and complete recovery suites — architecturally specified and constructed for residential and commercial properties across Australia."
          secondaryHref="#spaces-grid"
          secondaryLabel="Explore spaces"
        />
      </SnapSection>

      <SnapSection>
        <SpacesCinematicGrid
          id="spaces-grid"
          variant="page"
          heading="Designed for how you live, work & recover."
          subheading="From dry saunas and hammam suites to plunge pools and full recovery environments — each space is architecturally specified, built on site, and commissioned by one studio."
          ctaLabel="View space"
        />
      </SnapSection>

      <SnapSection>
        <section className="border-t border-stone/10 bg-stone">
          <div className="container-e7 section-padding !py-20 md:!py-28">
            <Reveal variant="up" className="mx-auto max-w-3xl text-center">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-concrete">
                Recovery Architecture
              </p>
              <p className="mt-6 font-display text-[clamp(1.35rem,2.5vw,1.85rem)] font-light leading-relaxed text-ink">
                {BRAND.studioIdentity}
              </p>
              <p className="mt-5 text-sm font-light leading-relaxed text-ink-muted">
                {BRAND.description}
              </p>
              <ConsultationCta
                id="services-page-cta"
                className="mt-10 justify-center"
              />
            </Reveal>
          </div>
        </section>
      </SnapSection>

      <SnapSection>
        <ProcessSection />
      </SnapSection>

      <SnapSection>
        <section className="border-t border-stone/10 bg-warm-black">
          <div className="container-e7 section-padding !py-20 md:!py-28">
            <Reveal variant="up" className="flex flex-col items-center text-center">
              <h2 className="max-w-2xl font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-light uppercase leading-[1.12] tracking-tight text-stone">
                Let&apos;s create your recovery space.
              </h2>
              <p className="mt-5 max-w-lg text-sm font-light text-stone/50">
                Complete recovery suites, contrast installations, and commercial
                fit-outs — designed and built end to end.
              </p>
              <ConsultationCta className="mt-10 justify-center" />
            </Reveal>
          </div>
        </section>
      </SnapSection>
    </PageScrollShell>
  );
}
