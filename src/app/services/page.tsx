import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Services | Custom Saunas, Steam Rooms & Cold Plunge — Element 7",
  description:
    "Element 7 designs and builds custom saunas, infrared saunas, steam rooms and cold plunge systems for residential and commercial spaces in Melbourne.",
};

const services = [
  {
    title: "Custom Saunas Melbourne",
    slug: "custom-saunas",
    desc: "Bespoke Finnish dry heat saunas — fully custom designed, premium cedar and thermally modified timber.",
  },
  {
    title: "Infrared Saunas",
    slug: "infrared-saunas",
    desc: "Far-infrared technology for deep tissue recovery at comfortable lower temperatures.",
  },
  {
    title: "Steam Rooms",
    slug: "steam-rooms",
    desc: "Custom wet steam environments with chromotherapy, aromatherapy and premium tile finishes.",
  },
  {
    title: "Cold Plunge Systems",
    slug: "cold-plunge",
    desc: "Precision-cooled immersion pools engineered for recovery and contrast therapy protocols.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PageHero
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85"
        label="Services"
        title="Everything You Need for"
        titleAccent="Wellness"
        subtitle="Custom saunas, infrared, steam and cold plunge — designed and commissioned for your space."
        height="100vh"
      >
        <Link href="/contact" className="btn-gold" id="services-cta">
          Book Consultation
          <ArrowRight size={16} />
        </Link>
      </PageHero>

      <section className="section-padding section-glass">
        <div className="container-e7">
          <div className="scroll-reveal mb-14 max-w-2xl">
            <h2 className="font-display text-3xl font-light text-white md:text-4xl">
              Our <span className="italic text-gold">services</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/45">
              Four core offerings — each tailored to your architecture, lifestyle and performance goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/[0.05] md:grid-cols-2">
            {services.map((service, idx) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                id={`service-${idx}`}
                className="group bg-obsidian p-8 transition-all duration-400 hover:bg-white/[0.025] md:p-10"
              >
                <div className="mb-4 h-px w-6 bg-gold/30 transition-all duration-400 group-hover:w-12 group-hover:bg-gold" />
                <h3 className="mb-2.5 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-gold">
                  {service.title}
                </h3>
                <p className="mb-6 text-xs leading-relaxed text-white/40">{service.desc}</p>
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold/40 transition-all duration-300 group-hover:text-gold">
                  Learn more
                  <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
