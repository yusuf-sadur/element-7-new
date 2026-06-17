"use client";

import HeroSection from "@/components/home/HeroSection";
import SevenElements from "@/components/home/SevenElements";
import ModalityGallery from "@/components/home/ModalityGallery";
import MaterialsSpecSection from "@/components/home/MaterialsSpecSection";
import MaterialsSection from "@/components/home/MaterialsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ContactSection from "@/components/ui/ContactSection";
import PageScrollShell, { SnapSection } from "@/components/scroll/PageScrollShell";

export default function HomeScrollExperience() {
  return (
    <PageScrollShell className="bg-stone">
      <SnapSection>
        <HeroSection />
      </SnapSection>
      <SnapSection>
        <SevenElements />
      </SnapSection>
      <SnapSection>
        <ModalityGallery />
      </SnapSection>
      <SnapSection>
        <MaterialsSpecSection />
      </SnapSection>
      <SnapSection>
        <MaterialsSection />
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
