import Link from "next/link";
import { ArrowRight, Building2, Hotel, Dumbbell, Activity } from "lucide-react";
import PageHero from "@/components/PageHero";
import ConsultationForm from "@/components/ConsultationForm";
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

export default function CommercialPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PageHero
        image={WellnessTrends.src}
        label="Commercial"
        title="Recovery"
        titleAccent="at scale."
        subtitle="Commercial wellness fit-outs — designed, built, and delivered end to end."
        height="100vh"
      />

      <section className="section-padding section-glass">
        <div className="container-e7">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="scroll-reveal">
            <p className="section-label">Commercial wellness</p>
            <h2 className="font-display text-4xl font-light text-sand leading-tight mb-6">
              Performance <span className="italic text-gold">wellness design.</span>
            </h2>
            <div className="divider-gold" />
            <p className="text-sand/55 text-sm leading-relaxed mt-6 mb-4">
              The same architectural rigour we bring to private homes — applied to
              gyms, hotels, studios, and hospitality brands.
            </p>
            <p className="text-sand/55 text-sm leading-relaxed mb-8">
              Durability, ventilation, compliance, and low-tox materials — environments
              built for daily use and long-term performance.
            </p>
            <Link href="/contact" className="btn-gold" id="commercial-cta">
              Discuss your project
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="scroll-reveal" style={{ transitionDelay: "200ms" }}>
            <div className="space-y-3">
              {["End-to-end design & construction", "Commercial-grade specification", "Ventilation & moisture control", "Compliance & certification", "Integration with existing facilities", "Low-tox material selection", "Single integrated team"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-sand/55">
                    <div className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Target clients */}
        <div className="mb-20 scroll-reveal">
          <div className="text-center mb-12">
            <p className="section-label">Who we work with</p>
            <h2 className="font-display text-3xl font-light text-sand">
              Commercial <span className="italic text-gold">partners.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sand/[0.05]">
            {targetClients.map((client, idx) => (
              <div
                key={client.title}
                className="group bg-obsidian p-10 hover:bg-sand/[0.025] transition-all duration-500 scroll-reveal"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="w-12 h-12 border border-gold/20 flex items-center justify-center mb-6 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300">
                  <client.Icon size={20} className="text-gold/60 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-light text-sand mb-3 group-hover:text-gold transition-colors">
                  {client.title}
                </h3>
                <p className="text-sand/40 text-sm leading-relaxed">{client.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wellness trends + form */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="scroll-reveal">
            <p className="section-label">Begin</p>
            <h2 className="font-display text-3xl font-light text-sand mb-6">
              Design your <span className="italic text-gold">commercial space.</span>
            </h2>
            <div className="divider-gold" />
            <p className="mt-6 text-sm font-light leading-relaxed text-sand/50">
              Recovery architecture for hospitality, fitness, and mixed-use —
              consultation through delivery.
            </p>
            <p className="mt-4 text-sm font-light leading-relaxed text-sand/40">
              Tell us about your facility, throughput, and vision. We&apos;ll map
              the path from concept to handover.
            </p>
          </div>
          <div className="scroll-reveal" style={{ transitionDelay: "200ms" }}>
            <ConsultationForm compact />
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
