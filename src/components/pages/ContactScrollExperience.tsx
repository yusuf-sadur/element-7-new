"use client";

import PageHero from "@/components/PageHero";
import PageScrollShell from "@/components/scroll/PageScrollShell";
import ContactSection from "@/components/ui/ContactSection";
import heroSaunaImg from "@/assets/hero-sauna.jpg";

export default function ContactScrollExperience() {
  return (
    <PageScrollShell className="bg-cream" snap={false} smoothScroll={false}>
      <PageHero
        variant="invitation"
        image={heroSaunaImg}
        label="Contact"
        title="Begin your"
        titleAccent="project."
        subtitle="A consultation about your property, scope, and the sauna or recovery installation you need designed and built."
        secondaryHref="/services"
        secondaryLabel="Explore spaces"
      />

      <ContactSection />
    </PageScrollShell>
  );
}
