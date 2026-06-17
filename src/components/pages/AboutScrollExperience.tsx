"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SevenElements from "@/components/home/SevenElements";
import ProcessSection from "@/components/home/ProcessSection";
import MaterialsSection from "@/components/home/MaterialsSection";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactSection from "@/components/ui/ContactSection";
import PageScrollShell, { SnapSection } from "@/components/scroll/PageScrollShell";
import { BRAND } from "@/lib/brand";
import heroSauna2Img from "@/assets/hero-sauna2.jpg";

const principles = [
  { title: "Design & Build Studio", text: "We are not a spa operator or product retailer. We are an architectural studio that designs and constructs recovery environments on your property." },
  { title: "On-Site Construction", text: "Every project is built on site — timber, waterproofing, electrical, and systems installation coordinated by one team." },
  { title: "Technical Specification", text: "Ventilation, thermal performance, moisture control, and structural integration — resolved in drawings before construction begins." },
  { title: "Bespoke Delivery", text: "No catalogue kits. No prefabricated shortcuts. Every build is specified for your floor plan, services, and architectural context." },
];

const STUDIO_INTRO =
  "Element Seven was founded on a simple belief — that recovery spaces should be built from materials that support your health, not compromise it. We're a Melbourne-based design and build studio specialising in saunas, steam rooms, plunge pools, and recovery suites.";

export default function AboutScrollExperience() {
  return (
    <PageScrollShell>
      <SnapSection>
        <PageHero
          image={heroSauna2Img}
          label="About"
          eyebrowSuffix="Element Seven"
          title="Who we are. How we"
          titleAccent="build."
          subtitle={BRAND.supportingLine}
          secondaryHref="/services"
          secondaryLabel="Explore spaces"
        />
      </SnapSection>

      <SnapSection>
        <section className="section-padding bg-white">
          <div className="container-e7">
            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
              <Reveal variant="left">
                <SectionHeader
                  label="Studio"
                  title={
                    <>
                      Recovery architecture,{" "}
                      <span className="text-bronze">built on site.</span>
                    </>
                  }
                  description={BRAND.description}
                />
                <p className="mt-6 text-base font-light leading-relaxed text-ink-muted">
                  {BRAND.studioIdentity} We work with homeowners, architects, developers,
                  and commercial operators who need a specialist build team for saunas,
                  steam, plunge, and complete recovery suites.
                </p>
                <Link href="/contact" className="btn-primary mt-10 inline-flex" id="about-cta">
                  Discuss your project
                  <ArrowRight size={16} />
                </Link>
              </Reveal>
              <Reveal variant="right" delay={0.12}>
                <p className="mb-6 text-base font-light leading-relaxed text-ink-muted">
                  {STUDIO_INTRO}
                </p>
                <div className="grid gap-4">
                  {principles.map((item, idx) => (
                    <Reveal key={item.title} variant="up" delay={idx * 0.08} className="card-modern !p-6 md:!p-8">
                      <span className="font-sans text-[10px] font-semibold tabular-nums text-bronze">
                        0{idx + 1}
                      </span>
                      <h3 className="mt-3 font-display text-xl text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm font-light leading-relaxed text-ink-muted">{item.text}</p>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </SnapSection>

      <SnapSection>
        <MaterialsSection />
      </SnapSection>

      <SnapSection>
        <SevenElements />
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
