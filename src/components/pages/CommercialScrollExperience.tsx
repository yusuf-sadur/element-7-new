"use client";

import Link from "next/link";
import { ArrowRight, Building2, Hotel, Dumbbell, Activity } from "lucide-react";
import PageHero from "@/components/PageHero";
import ConsultationPanel from "@/components/ui/ConsultationPanel";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import PageScrollShell, { SnapSection } from "@/components/scroll/PageScrollShell";
import WellnessTrends from "@/assets/Wellness Trends.png";

const targetClients = [
  { Icon: Dumbbell, title: "Gyms & fitness", description: "Recovery wing construction — sauna, plunge, and contrast suites built for daily commercial use." },
  { Icon: Hotel, title: "Hospitality", description: "Wellness facility fit-outs designed and constructed to complement your property's architecture." },
  { Icon: Activity, title: "Wellness studios", description: "Sauna, steam, and plunge installations built as architectural centrepieces for studio operators." },
  { Icon: Building2, title: "Developers & architects", description: "Recovery precinct specification and construction within residential and mixed-use projects." },
];

const capabilities = [
  "End-to-end design & construction",
  "Commercial-grade specification",
  "Ventilation & moisture engineering",
  "Compliance & certification",
  "Integration with existing buildings",
  "Single integrated build team",
];

export default function CommercialScrollExperience() {
  return (
    <PageScrollShell>
      <SnapSection>
        <PageHero
          image={WellnessTrends}
          label="Commercial"
          title="Commercial"
          titleAccent="builds."
          subtitle="Sauna, steam, plunge, and recovery suite construction for commercial properties — designed, built, and commissioned on site."
          secondaryHref="/projects"
          secondaryLabel="View projects"
        />
      </SnapSection>

      <SnapSection>
        <section className="section-padding bg-white">
          <div className="container-e7">
            <div className="grid gap-16 lg:grid-cols-2">
              <Reveal variant="left">
                <SectionHeader
                  label="Commercial construction"
                  title={<>Built for <span className="italic text-bronze">throughput.</span></>}
                  description="The same architectural rigour we bring to private homes — applied to gyms, hotels, studios, and mixed-use developments."
                />
                <p className="mt-6 text-base font-light text-ink-muted">
                  Durability, ventilation, compliance, and systems engineering —
                  commercial recovery environments constructed for daily operation.
                </p>
                <Link href="/contact" className="btn-primary mt-10 inline-flex" id="commercial-cta">
                  Discuss your project
                  <ArrowRight size={16} />
                </Link>
              </Reveal>
              <Reveal variant="right" delay={0.12} className="card-modern">
                <ul className="space-y-4">
                  {capabilities.map((item, idx) => (
                    <Reveal key={item} variant="up" delay={idx * 0.05} as="li" className="flex items-center gap-3 text-[15px] text-ink-muted">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                      {item}
                    </Reveal>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      </SnapSection>

      <SnapSection>
        <section className="section-padding bg-stone">
          <div className="container-e7">
            <Reveal variant="up" className="mb-14">
              <SectionHeader align="center" label="Who we build for" title={<>Commercial <span className="italic text-bronze">clients.</span></>} />
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {targetClients.map((client, idx) => (
                <Reveal key={client.title} variant="scale" delay={idx * 0.08} className="card-modern group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone text-bronze transition-colors group-hover:bg-warm-black group-hover:text-stone">
                    <client.Icon size={22} strokeWidth={1.25} />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-ink group-hover:text-bronze">{client.title}</h3>
                  <p className="mt-3 text-sm font-light text-ink-muted">{client.description}</p>
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
                title={<>Scope your <span className="italic text-bronze">commercial build.</span></>}
                description="Recovery architecture for hospitality, fitness, and mixed-use — consultation through construction and handover."
                compact
              />
            </Reveal>
          </div>
        </section>
      </SnapSection>
    </PageScrollShell>
  );
}
