import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesOverview from "@/components/home/ServicesOverview";
import ourServices from "@/assets/our Services.png";

export const metadata: Metadata = {
  title: "Services | Wellness & Recovery Architecture — Element 7",
  description:
    "Custom saunas, infrared, steam & hammam, cold plunge, recovery lounges, and complete wellness fit-outs — end-to-end design and construction.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PageHero
        image={ourServices.src}
        label="Services"
        title="Wellness"
        titleAccent="ecosystems."
        subtitle="Sauna, cold plunge, steam, hammam, and complete recovery environments — designed and built end to end."
        height="100vh"
      >
        <Link href="/contact" className="btn-gold" id="services-cta">
          Book Consultation
          <ArrowRight size={16} />
        </Link>
      </PageHero>

      <ServicesOverview showCatalogueFooter={false} />

      <section className="section-padding border-t border-sand/[0.07] bg-obsidian">
        <div className="container-e7">
          <div className="scroll-reveal mx-auto max-w-3xl text-center">
            <p className="section-label">Full scope</p>
            <h2 className="font-display text-3xl font-light text-sand md:text-4xl">
              Beyond the <span className="italic text-gold">four modalities.</span>
            </h2>
            <div className="divider-gold mx-auto mt-6" />
            <p className="mt-6 text-sm font-light leading-relaxed text-sand/45">
              We design complete wellness ecosystems — not isolated products.
            </p>
          </div>
          <ul className="scroll-reveal mx-auto mt-12 grid max-w-2xl gap-3 sm:grid-cols-2">
            {[
              "Recovery lounges",
              "Outdoor wellness spaces",
              "Luxury home integration",
              "Gym + sauna combinations",
              "Commercial wellness fit-outs",
              "End-to-end design & construction",
            ].map((item) => (
              <li
                key={item}
                className="border border-sand/[0.08] bg-sand/[0.02] px-4 py-3 text-center text-xs font-light tracking-wide text-sand/55"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
