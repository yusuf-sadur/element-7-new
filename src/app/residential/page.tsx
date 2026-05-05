import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ConsultationForm from "@/components/ConsultationForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Wellness | Custom Home Saunas & Recovery Spaces Melbourne — Element 7",
  description:
    "Element 7 designs and builds bespoke residential wellness environments — custom saunas, steam rooms, cold plunge, and complete home recovery suites for luxury Melbourne homes.",
};

const features = [
  { title: "Indoor Wellness Rooms", description: "Transform a basement, bathroom annex, or dedicated room into a fully-realised wellness sanctuary — custom designed for your floor plan." },
  { title: "Outdoor Sanctuaries", description: "Freestanding outdoor saunas, barrel saunas, and wellness pavilions that become the architectural centrepiece of your garden or landscape." },
  { title: "Luxury Recovery Spaces", description: "Multi-modality recovery environments combining sauna, cold plunge, steam, and relaxation zones in a single integrated space." },
  { title: "Architectural Integration", description: "Every Element 7 residential build is designed to complement and enhance your home's architecture — not impose upon it." },
  { title: "Custom Design", description: "We design your wellness space from scratch — no stock solutions, no compromises. Your vision, engineered to perfection." },
  { title: "Sauna & Cold Plunge Combinations", description: "The ultimate contrast therapy setup — a premium sauna paired with a precision cold plunge pool, designed as one cohesive environment." },
];

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PageHero
        image="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1920&q=85"
        label="Residential"
        title="Your Personal" 
        titleAccent="Wellness Sanctuary"
        subtitle="Bespoke wellness environments designed around your life, your architecture, and your ambitions."
        height="100vh"
      />

      <section className="section-padding section-glass">
        <div className="container-e7">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="scroll-reveal">
            <p className="section-label">Luxury Home Wellness</p>
            <h2 className="font-display text-4xl font-light text-white leading-tight mb-6">
              Designed Around <span className="italic text-gold">Your Life</span>
            </h2>
            <div className="divider-gold" />
            <p className="text-white/55 text-sm leading-relaxed mt-6 mb-6">
              Your home is your sanctuary. Element 7 creates wellness environments that
              integrate seamlessly into your lifestyle and your architecture — delivering
              a daily ritual that supports your health, performance, and wellbeing.
            </p>
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              From a private sauna for two in a compact bathroom, to a full wellness
              wing with sauna, steam, cold plunge, and relaxation lounge — we design
              and build everything you need, with precision and luxury.
            </p>
            <Link href="/contact" className="btn-gold" id="residential-cta">
              Book Residential Consultation
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
            <p className="section-label">What We Offer</p>
            <h2 className="font-display text-3xl font-light text-white">
              Residential <span className="italic text-gold">Wellness Solutions</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
            {features.map((f, idx) => (
              <div
                key={f.title}
                className="group bg-obsidian p-8 hover:bg-white/[0.02] transition-all duration-500 scroll-reveal"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="w-8 h-px bg-gold mb-5 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-display text-xl font-light text-white mb-3 group-hover:text-gold transition-colors">
                  {f.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA + form */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-start">
          <div className="scroll-reveal">
            <p className="section-label">Ready to Start?</p>
            <h2 className="font-display text-3xl font-light text-white mb-4">
              Book Your Free <span className="italic text-gold">Consultation</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Our residential consultations are obligation-free. We&apos;ll visit your property,
              understand your goals, and provide a detailed design concept and indicative
              investment range.
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
