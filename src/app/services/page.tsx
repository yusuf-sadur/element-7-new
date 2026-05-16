import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesOverview from "@/components/home/ServicesOverview";
import Reveal from "@/components/ui/Reveal";
import ourServices from "@/assets/our Services.png";

export const metadata: Metadata = {
  title: "Services | Wellness & Recovery Architecture — Element 7",
  description:
    "Custom saunas, infrared, steam & hammam, cold plunge, recovery lounges, and complete wellness fit-outs — end-to-end design and construction.",
};

const extended = [
  "Recovery lounges",
  "Outdoor wellness spaces",
  "Luxury home integration",
  "Gym + sauna combinations",
  "Commercial wellness fit-outs",
  "End-to-end design & construction",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageHero
        image={ourServices.src}
        label="Services"
        title="Wellness"
        titleAccent="ecosystems."
        subtitle="Sauna, cold plunge, steam, hammam, and complete recovery environments — designed and built end to end."
      >
        <Link href="/contact" className="btn-primary hero-btn group inline-flex" id="services-cta">
          Book consultation
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </PageHero>

      <ServicesOverview showCatalogueFooter={false} />

      <section className="section-padding bg-olive-dark">
        <div className="container-e7 relative">
          <div className="bg-mesh pointer-events-none absolute inset-0 opacity-30" aria-hidden />
          <Reveal variant="up" className="relative mx-auto max-w-2xl text-center">
            <p className="section-label justify-center text-sage-light [&::before]:bg-sage/50">
              Full scope
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-light text-cream">
              Beyond the <span className="italic text-sage-light">four modalities.</span>
            </h2>
            <p className="mt-6 text-base font-light text-cream/60">
              We design complete wellness ecosystems — not isolated products.
            </p>
          </Reveal>
          <ul className="relative mt-12 grid gap-3 sm:grid-cols-2 lg:max-w-3xl lg:mx-auto">
            {extended.map((item, idx) => (
              <Reveal key={item} variant="scale" delay={idx * 0.06}>
                <li className="rounded-2xl border border-cream/10 bg-cream/5 px-5 py-4 text-center font-sans text-sm text-cream/80 backdrop-blur-sm">
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
