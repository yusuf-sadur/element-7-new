"use client";

import ServiceCinematicHero from "@/components/services/ServiceCinematicHero";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import PageScrollShell, { SnapSection } from "@/components/scroll/PageScrollShell";
import type { SpaceDefinition } from "@/lib/brand";

export default function ServiceDetailScrollExperience({
  space,
}: Readonly<{ space: SpaceDefinition }>) {
  return (
    <PageScrollShell className="bg-warm-black">
      <SnapSection>
        <ServiceCinematicHero
          image={space.image}
          label={space.shortTitle}
          title={space.heading}
          subtitle={space.subtitle}
        />
      </SnapSection>
      <ServiceDetailContent space={space} snap />
    </PageScrollShell>
  );
}
