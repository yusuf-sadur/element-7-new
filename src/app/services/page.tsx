import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Custom Saunas, Steam Rooms & Wellness Environments — Element 7",
  description:
    "Element 7 offers custom saunas, infrared saunas, steam rooms, cold plunge pools, contrast therapy, recovery rooms and commercial wellness environments in Melbourne.",
};

const serviceCategories = [
  {
    category: "Sauna Services",
    description: "Premium Finnish and infrared sauna environments, custom designed for your space.",
    services: [
      { title: "Custom Saunas Melbourne", slug: "custom-saunas", desc: "Bespoke Finnish dry heat saunas — fully custom designed, premium cedar and thermally modified timber." },
      { title: "Infrared Saunas", slug: "infrared-saunas", desc: "Far-infrared technology for deep tissue recovery at comfortable lower temperatures." },
      { title: "Traditional Finnish Saunas", slug: "custom-saunas", desc: "Authentic Finnish löyly experience with kiuas stove and quality birch whisks." },
      { title: "Outdoor Saunas", slug: "outdoor-wellness", desc: "Architecturally integrated outdoor structures built for Australian climates." },
      { title: "Barrel Saunas", slug: "outdoor-wellness", desc: "Classic barrel designs in premium timber for residential gardens and coastal properties." },
    ],
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
  },
  {
    category: "Recovery & Wellness",
    description: "Complete recovery environments that combine multiple modalities for maximum therapeutic benefit.",
    services: [
      { title: "Steam Rooms", slug: "steam-rooms", desc: "Custom wet steam environments with chromotherapy, aromatherapy and premium tile finishes." },
      { title: "Cold Plunge Pools", slug: "cold-plunge", desc: "Precision-cooled immersion pools for optimal recovery and circulation stimulation." },
      { title: "Contrast Therapy Systems", slug: "contrast-therapy", desc: "Integrated hot-cold environments engineered for maximum therapeutic benefit." },
      { title: "Recovery Rooms", slug: "recovery-rooms", desc: "Dedicated recovery sanctuaries combining multiple modalities under one roof." },
      { title: "Meditation & Relaxation Spaces", slug: "recovery-rooms", desc: "Mindful environments designed for deep rest, breathwork and mental recovery." },
      { title: "Aromatherapy Rooms", slug: "steam-rooms", desc: "Therapeutic spaces incorporating essential oil diffusion and controlled humidity." },
    ],
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
  },
  {
    category: "Commercial Services",
    description: "End-to-end wellness fit-outs for gyms, hotels, studios and performance facilities.",
    services: [
      { title: "Gym Recovery Areas", slug: "commercial-wellness", desc: "High-throughput recovery zones for boutique gyms and large fitness facilities alike." },
      { title: "Hotel Wellness Spaces", slug: "commercial-wellness", desc: "Spa and wellness environments that elevate guest experience and hotel positioning." },
      { title: "Wellness Studio Fit-Outs", slug: "commercial-wellness", desc: "Bespoke environments for wellness studios, yoga centres and health practices." },
      { title: "Commercial Sauna Installations", slug: "commercial-wellness", desc: "High-capacity sauna and steam installations for commercial environments." },
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    category: "Maintenance & Upgrades",
    description: "Expert servicing, repairs and retrofits to keep your wellness environment performing at its best.",
    services: [
      { title: "Sauna Servicing", slug: "maintenance", desc: "Regular scheduled maintenance to ensure your sauna performs safely and efficiently." },
      { title: "Repairs", slug: "maintenance", desc: "Expert repair services for sauna heaters, steam generators, cold plunge chillers and more." },
      { title: "Upgrades", slug: "maintenance", desc: "Upgrade your existing wellness space with new technology, materials or modalities." },
      { title: "Retrofit Projects", slug: "maintenance", desc: "Transform existing rooms or structures into premium wellness environments." },
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];
import PageHero from "@/components/PageHero";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PageHero
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85"
        label="Services"
        title="Everything You Need for"
        titleAccent="Wellness"
        subtitle="End-to-end design, construction and maintenance of premium recovery environments."
        height="100vh"
      >
        <Link href="/contact" className="btn-gold" id="services-cta">
          Book Consultation
          <ArrowRight size={16} />
        </Link>
      </PageHero>

      {/* Service categories */}
      <section className="section-padding section-glass">
        <div className="container-e7 space-y-20">
        {serviceCategories.map((cat, catIdx) => (
          <div key={cat.category} className="scroll-reveal" style={{ transitionDelay: `${catIdx * 100}ms` }}>
            {/* Category header */}
            <div className="grid lg:grid-cols-3 gap-12 mb-8">
              <div className="lg:col-span-2">
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl font-light text-white mb-3">
                  {cat.category}
                </h2>
                <p className="text-white/45 text-sm leading-relaxed">{cat.description}</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cat.image}
                alt={cat.category}
                className="hidden lg:block w-full h-32 object-cover"
              />
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
              {cat.services.map((service, idx) => (
                <Link
                  key={service.title}
                  href={`/services/${service.slug}`}
                  id={`service-${catIdx}-${idx}`}
                  className="group bg-obsidian p-7 hover:bg-white/[0.025] transition-all duration-400 border-b border-r border-transparent"
                >
                  <div className="w-6 h-px bg-gold/30 mb-4 group-hover:w-12 group-hover:bg-gold transition-all duration-400" />
                  <h3 className="font-semibold text-white text-sm mb-2.5 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <div className="text-gold/40 group-hover:text-gold text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-all duration-300">
                    Learn More
                    <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
        </div>
      </section>
    </div>
  );
}
