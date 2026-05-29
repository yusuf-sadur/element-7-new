"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ConsultationPanel from "@/components/ui/ConsultationPanel";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import PageScrollShell, { SnapSection } from "@/components/scroll/PageScrollShell";
import Residential from "@/assets/Residential.png";
import heroSauna2Img from "@/assets/hero-sauna2.jpg";

const features = [
  { title: "Indoor builds", description: "Basement, annex, or dedicated suite — designed around your floor plan and structural constraints." },
  { title: "Outdoor construction", description: "Architectural saunas and wellness pavilions — built and weatherproofed for your site." },
  { title: "Recovery suites", description: "Sauna, plunge, and steam — multiple rooms constructed as one integrated installation." },
  { title: "Architectural integration", description: "Materials and detailing aligned with your home's design language and existing trades." },
  { title: "Fully custom", description: "No kits. Every build is drawn, specified, and constructed for your property." },
  { title: "Contrast installations", description: "Heat and cold zones engineered and built as a single system on site." },
];

export default function ResidentialScrollExperience() {
  return (
    <PageScrollShell>
      <SnapSection>
        <PageHero
          image={Residential}
          label="Residential"
          title="Home"
          titleAccent="builds."
          subtitle="Custom sauna, steam, and plunge construction — designed and built for residential properties across Australia."
          secondaryHref="/projects"
          secondaryLabel="View projects"
        />
      </SnapSection>

      <SnapSection>
        <section className="section-padding bg-white">
          <div className="container-e7">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <Reveal variant="left">
                <SectionHeader
                  label="Residential construction"
                  title={<>Recovery architecture, <span className="italic text-bronze">built in.</span></>}
                  description="Private saunas, plunge pools, steam rooms, and complete recovery suites — designed and constructed within your home with architectural precision."
                />
                <p className="mt-6 text-base font-light text-ink-muted">
                  From a compact bathroom sauna to a full wellness wing — consultation,
                  drawings, construction, and handover under one studio.
                </p>
                <Link href="/contact" className="btn-primary mt-10 inline-flex" id="residential-cta">
                  Discuss your project
                  <ArrowRight size={16} />
                </Link>
              </Reveal>
              <Reveal variant="right" delay={0.12}>
                <div className="image-card aspect-[4/5]">
                  <Image src={heroSauna2Img} alt="Residential sauna build" fill className="object-cover" sizes="50vw" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </SnapSection>

      <SnapSection>
        <section className="section-padding bg-stone">
          <div className="container-e7">
            <Reveal variant="up" className="mb-14">
              <SectionHeader align="center" label="Build types" title={<>What we <span className="italic text-bronze">construct.</span></>} />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, idx) => (
                <Reveal key={f.title} variant="up" delay={idx * 0.06} className="card-modern group">
                  <span className="block h-px w-8 bg-bronze/30 transition-all group-hover:w-14" />
                  <h3 className="mt-6 font-display text-xl text-ink group-hover:text-bronze">{f.title}</h3>
                  <p className="mt-3 text-sm font-light text-ink-muted">{f.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SnapSection>

      <SnapSection>
        <section className="section-padding bg-white">
          <div className="container-e7">
            <Reveal variant="up">
              <ConsultationPanel
                title={<>Scope your <span className="italic text-bronze">home build.</span></>}
                compact
              />
            </Reveal>
          </div>
        </section>
      </SnapSection>
    </PageScrollShell>
  );
}
