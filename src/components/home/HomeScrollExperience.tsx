"use client";

import HeroSection from "@/components/home/HeroSection";
import SevenElements from "@/components/home/SevenElements";
import ModalityGallery from "@/components/home/ModalityGallery";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import MaterialsSection from "@/components/home/MaterialsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ContactSection from "@/components/home/ContactSection";
import TrustSection from "@/components/home/TrustSection";
import PageScrollShell, { SnapSection } from "@/components/scroll/PageScrollShell";

export default function HomeScrollExperience() {
  return (
    <PageScrollShell className="bg-stone">
      <SnapSection>
        <HeroSection />
      </SnapSection>
      <SnapSection>
        <TrustSection />
      </SnapSection>
      <SnapSection>
        <SevenElements />
      </SnapSection>
      <SnapSection>
        <ModalityGallery />
      </SnapSection>
      <SnapSection>
        <MaterialsSection />
      </SnapSection>
      <SnapSection>
        <FeaturedProjects />
      </SnapSection>
      <SnapSection>
        <ProcessSection />
      </SnapSection>
      <SnapSection>
        <ContactSection />
      </SnapSection>
    </PageScrollShell>
  );
}
