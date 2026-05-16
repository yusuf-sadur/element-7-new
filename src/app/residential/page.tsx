import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ConsultationPanel from "@/components/ui/ConsultationPanel";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Metadata } from "next";
import Residential from "@/assets/Residential.png";

export const metadata: Metadata = {
  title: "Residential Wellness | Home Recovery Architecture — Element 7",
  description:
    "Custom home wellness environments — saunas, cold plunge, steam, hammam, and complete recovery suites. Designed and built end to end across Australia.",
};

const features = [
  { title: "Indoor wellness rooms", description: "Basement, annex, or dedicated suite — composed for your floor plan and daily rituals." },
  { title: "Outdoor sanctuaries", description: "Architectural saunas and wellness pavilions — integrated into garden and landscape." },
  { title: "Recovery suites", description: "Sauna, cold plunge, steam, and lounge — one calm, connected environment." },
  { title: "Architectural integration", description: "Earth-tone materials and minimal lines that honour your home's design language." },
  { title: "Fully custom", description: "No templates. Every space tailored to lifestyle, property, and vision." },
  { title: "Contrast therapy", description: "Heat and cold, designed as one system — precision thermal performance throughout." },
];

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageHero
        image={Residential.src}
        label="Residential"
        title="Home"
        titleAccent="recovery architecture."
        subtitle="Luxury wellness integration — custom, low-tox, designed around how you live."
      />

      <section className="section-padding bg-white">

<div className="container-e7">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal variant="left">
              <SectionHeader
                label="Luxury home wellness"
                title={
                  <>
                    Wellness as <span className="italic text-olive">infrastructure.</span>
                  </>
                }
                description="Private saunas, cold plunge, steam, and complete recovery suites — integrated into your architecture with calm, minimal refinement."
              />
              <p className="mt-6 text-base font-light text-ink-muted">
                From a compact bathroom sauna to a full wellness wing — consultation, design,
                construction, and delivery under one team.
              </p>
              <Link href="/contact" className="btn-primary mt-10 inline-flex" id="residential-cta">
                Begin consultation
                <ArrowRight size={16} />
              </Link>
            </Reveal>
            <Reveal variant="right" delay={0.12}>
              <div className="image-card aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                  alt="Residential cold plunge and sauna"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-warm">
        <div className="container-e7">
          <Reveal variant="up" className="mb-14">
            <SectionHeader
              align="center"
              label="What we create"
              title={
                <>
                  Residential <span className="italic text-olive">environments.</span>
                </>
              }
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, idx) => (
              <Reveal key={f.title} variant="up" delay={idx * 0.06} className="card-modern group">
                <span className="block h-px w-8 bg-olive/30 transition-all group-hover:w-14" />
                <h3 className="mt-6 font-display text-xl text-ink group-hover:text-olive">{f.title}</h3>
                <p className="mt-3 text-sm font-light text-ink-muted">{f.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-e7">
          <ConsultationPanel
            title={
              <>
                Design your <span className="italic text-olive">home sanctuary.</span>
              </>
            }
            compact
          />
        </div>
      </section>
    </div>
  );
}
