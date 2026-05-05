import Link from "next/link";
import { ArrowRight, Building2, Hotel, Dumbbell, Activity } from "lucide-react";
import PageHero from "@/components/PageHero";
import ConsultationForm from "@/components/ConsultationForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Wellness | Gym & Hotel Sauna & Recovery Fit-Outs Melbourne — Element 7",
  description:
    "Element 7 delivers commercial wellness environments for gyms, hotels, wellness studios and recovery centres across Melbourne. End-to-end design and installation.",
};

const targetClients = [
  { Icon: Dumbbell, title: "Gyms & Fitness Centres", description: "Recovery zones that retain members, justify premium pricing, and differentiate your facility in a competitive market." },
  { Icon: Hotel, title: "Hotels & Hospitality", description: "Wellness amenities that attract the premium travel segment, increase average room rates, and build brand loyalty." },
  { Icon: Activity, title: "Wellness Studios", description: "Dedicated sauna, steam and contrast therapy facilities that expand your service offering and revenue streams." },
  { Icon: Building2, title: "Developers & Architects", description: "Wellness precincts within residential and mixed-use developments that command premium pricing and attract high-net-worth buyers." },
];

export default function CommercialPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PageHero
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85"
        label="Commercial"
        title="Wellness at"
        titleAccent="Commercial Scale"
        subtitle="End-to-end wellness fit-outs for gyms, hotels, studios and performance facilities across Melbourne."
        height="100vh"
      />

      <section className="section-padding section-glass">
        <div className="container-e7">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="scroll-reveal">
            <p className="section-label">Commercial Wellness Design</p>
            <h2 className="font-display text-4xl font-light text-white leading-tight mb-6">
              Built for <span className="italic text-gold">Business</span>
            </h2>
            <div className="divider-gold" />
            <p className="text-white/55 text-sm leading-relaxed mt-6 mb-5">
              The commercial wellness sector is booming. Consumers are willing to pay
              premium prices for access to high-quality recovery environments — and the
              businesses that invest in these facilities are seeing the returns.
            </p>
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              Element 7 brings the same design integrity and craftsmanship to commercial
              projects as we do to private residences. We understand the unique requirements
              of high-throughput environments — durability, compliance, ease of maintenance,
              and commercial grade equipment.
            </p>
            <Link href="/contact" className="btn-gold" id="commercial-cta">
              Discuss Your Commercial Project
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="scroll-reveal" style={{ transitionDelay: "200ms" }}>
            <div className="space-y-3">
              {["End-to-end project management", "Commercial-grade equipment specification", "Compliance & certification management", "Ventilation & HVAC design", "Integration with existing facilities", "Maintenance contracts available", "Single point of contact throughout"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/55">
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
            <p className="section-label">Who We Work With</p>
            <h2 className="font-display text-3xl font-light text-white">
              Our <span className="italic text-gold">Commercial Clients</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05]">
            {targetClients.map((client, idx) => (
              <div
                key={client.title}
                className="group bg-obsidian p-10 hover:bg-white/[0.025] transition-all duration-500 scroll-reveal"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="w-12 h-12 border border-gold/20 flex items-center justify-center mb-6 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300">
                  <client.Icon size={20} className="text-gold/60 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-light text-white mb-3 group-hover:text-gold transition-colors">
                  {client.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{client.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wellness trends + form */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="scroll-reveal">
            <p className="section-label">Market Context</p>
            <h2 className="font-display text-3xl font-light text-white mb-6">
              Wellness Trends in <span className="italic text-gold">Hospitality & Fitness</span>
            </h2>
            <div className="divider-gold" />
            <div className="mt-6 space-y-4 text-sm text-white/55 leading-relaxed">
              <p>The global wellness economy is valued at over $6 trillion. In Australia, we are seeing accelerating demand for sauna, cold plunge, and contrast therapy across every sector — from boutique gyms to five-star hotels.</p>
              <p>Facilities with recovery amenities are commanding 20–40% premium membership pricing. Hotels with wellness suites report significantly higher RevPAR and guest satisfaction scores.</p>
              <p>Element 7 is uniquely positioned to help you capitalise on this trend — with the design expertise to create environments that are beautiful, functional, and revenue-generating from day one.</p>
            </div>
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
