import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ConsultationForm from "@/components/ConsultationForm";
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
    <div className="min-h-screen bg-transparent">
      <PageHero
        image={Residential.src}
        label="Residential"
        title="Home"
        titleAccent="recovery architecture."
        subtitle="Luxury wellness integration — custom, low-tox, designed around how you live."
        height="100vh"
      />

      <section className="section-padding section-glass">
        <div className="container-e7">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="scroll-reveal">
            <p className="section-label">Luxury home wellness</p>
            <h2 className="font-display text-4xl font-light text-sand leading-tight mb-6">
              Wellness as <span className="italic text-gold">infrastructure.</span>
            </h2>
            <div className="divider-gold" />
            <p className="text-sand/55 text-sm leading-relaxed mt-6 mb-4">
              Private saunas, cold plunge, steam, and complete recovery suites —
              integrated into your architecture with calm, minimal refinement.
            </p>
            <p className="text-sand/55 text-sm leading-relaxed mb-8">
              From a compact bathroom sauna to a full wellness wing — consultation,
              design, construction, and delivery under one team.
            </p>
            <Link href="/contact" className="btn-gold" id="residential-cta">
              Begin consultation
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="scroll-reveal" style={{ transitionDelay: "200ms" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
              alt="Residential cold plunge and sauna"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Features */}
        <div className="scroll-reveal">
          <div className="text-center mb-12">
            <p className="section-label">What we create</p>
            <h2 className="font-display text-3xl font-light text-sand">
              Residential <span className="italic text-gold">environments.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sand/[0.05]">
            {features.map((f, idx) => (
              <div
                key={f.title}
                className="group bg-obsidian p-8 hover:bg-sand/[0.02] transition-all duration-500 scroll-reveal"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="w-8 h-px bg-gold mb-5 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-display text-xl font-light text-sand mb-3 group-hover:text-gold transition-colors">
                  {f.title}
                </h3>
                <p className="text-sand/40 text-xs leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA + form */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-start">
          <div className="scroll-reveal">
            <p className="section-label">Begin</p>
            <h2 className="font-display text-3xl font-light text-sand mb-4">
              Design your <span className="italic text-gold">home sanctuary.</span>
            </h2>
            <p className="text-sand/50 text-sm leading-relaxed">
              A quiet conversation about your property, rituals, and the recovery
              environment you want — no obligation.
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
