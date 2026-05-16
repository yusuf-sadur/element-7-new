import Link from "next/link";
import { ArrowRight, Building2, Hotel, Dumbbell, Activity } from "lucide-react";
import PageHero from "@/components/PageHero";
import ConsultationPanel from "@/components/ui/ConsultationPanel";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Metadata } from "next";
import WellnessTrends from "@/assets/Wellness Trends.png";

export const metadata: Metadata = {
  title: "Commercial Wellness | Recovery Architecture — Element 7",
  description:
    "Commercial wellness fit-outs for gyms, hotels, studios, and developers — end-to-end design and construction across Australia.",
};

const targetClients = [
  { Icon: Dumbbell, title: "Gyms & fitness", description: "Recovery wings and contrast therapy — gym + sauna combinations, specified for throughput and durability." },
  { Icon: Hotel, title: "Hospitality & resorts", description: "Elegant recovery environments that elevate guest experience and brand positioning." },
  { Icon: Activity, title: "Wellness studios", description: "Sauna, steam, hammam, and cold plunge — designed as architectural centrepieces." },
  { Icon: Building2, title: "Developers & architects", description: "Wellness precincts within residential and mixed-use — collaborative specification from concept." },
];

const capabilities = [
  "End-to-end design & construction",
  "Commercial-grade specification",
  "Ventilation & moisture control",
  "Compliance & certification",
  "Integration with existing facilities",
  "Low-tox material selection",
  "Single integrated team",
];

export default function CommercialPage() {
  return (
<div className="min-h-screen bg-cream">
      <PageHero
        image={WellnessTrends.src}
        label="Commercial"
        title="Recovery"
        titleAccent="at scale."
        subtitle="Commercial wellness fit-outs — designed, built, and delivered end to end."
      />

      <section className="section-padding bg-white">
        <div className="container-e7">
<div className="grid gap-16 lg:grid-cols-2">
            <Reveal variant="left">
              <SectionHeader
                label="Commercial wellness"
                title={
                  <>
                    Performance <span className="italic text-olive">wellness design.</span>
                  </>
                }
                description="The same architectural rigour we bring to private homes — applied to gyms, hotels, studios, and hospitality brands."
              />
              <p className="mt-6 text-base font-light text-ink-muted">
                Durability, ventilation, compliance, and low-tox materials — environments built
                for daily use and long-term performance.
              </p>
              <Link href="/contact" className="btn-primary mt-10 inline-flex" id="commercial-cta">
                Discuss your project
                <ArrowRight size={16} />
              </Link>
            </Reveal>
            <Reveal variant="right" delay={0.12} className="card-modern">
              <ul className="space-y-4">
                {capabilities.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-ink-muted">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-warm">
        <div className="container-e7">
          <Reveal variant="up" className="mb-14">
            <SectionHeader
              align="center"
              label="Who we work with"
              title={
                <>
                  Commercial <span className="italic text-olive">partners.</span>
                </>
              }
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {targetClients.map((client, idx) => (
              <Reveal key={client.title} variant="scale" delay={idx * 0.08} className="card-modern group">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream-warm text-olive transition-colors group-hover:bg-olive group-hover:text-cream">
                  <client.Icon size={22} strokeWidth={1.25} />
                </div>
                <h3 className="mt-6 font-display text-xl text-ink group-hover:text-olive">{client.title}</h3>
                <p className="mt-3 text-sm font-light text-ink-muted">{client.description}</p>
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
                Design your <span className="italic text-olive">commercial space.</span>
              </>
            }
            description="Recovery architecture for hospitality, fitness, and mixed-use — consultation through delivery."
            compact
          />
        </div>
      </section>
    </div>
  );
}
