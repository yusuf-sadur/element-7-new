import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import WellnessPhilosophy from "@/components/home/WellnessPhilosophy";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Wellness & Recovery Architecture — Element 7",
  description:
    "Element 7 designs and builds complete wellness and recovery environments across Australia — custom, low-tox, end-to-end.",
};

const values = [
  { title: "Craft", text: "Premium materials, precise installation, architectural detailing — no shortcuts." },
  { title: "Integrity", text: "Honest timelines, transparent scope, one team from consultation to handover." },
  { title: "Health", text: "Low-tox construction and ethical materials — spaces built for how you live." },
  { title: "Custom", text: "Every environment is bespoke. No templates. No prefabricated solutions." },
];

const capabilities = [
  "Wellness consultation & custom design",
  "Custom sauna & dry heat construction",
  "Cold plunge & contrast therapy",
  "Steam rooms & hammam",
  "Recovery lounges & complete fit-outs",
  "Residential & commercial delivery",
];

const stats = [
  { value: "25+", label: "Years in construction" },
  { value: "100%", label: "Custom designed" },
  { value: "AU", label: "& international" },
  { value: "1", label: "Integrated team" },
];

export default function AboutPage() {
  return (
<div className="min-h-screen bg-cream">
      <PageHero
        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=85"
        label="About"
        title="Wellness"
        titleAccent="architecture."
        subtitle="A design and build practice devoted entirely to recovery environments — across Australia."
      />

      <section className="section-padding bg-white">
        <div className="container-e7">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal variant="left">
              <SectionHeader
                label="Who we are"
                title={
                  <>
                    Not a supplier. <span className="italic text-olive">A studio.</span>
                  </>
                }
                description="Element 7 designs and builds complete wellness and recovery environments. We are among the few companies in Australia focused entirely on wellness, recovery, longevity, and low-tox construction."
              />
              <p className="mt-6 text-base font-light leading-relaxed text-ink-muted">
                Our clients are homeowners, athletes, boutique studios, architects, and
                hospitality brands who treat wellness as long-term health infrastructure.
              </p>
              <Link href="/contact" className="btn-primary mt-10 inline-flex" id="about-cta">
                Begin a conversation
                <ArrowRight size={16} />
              </Link>
            </Reveal>

            <Reveal variant="right" delay={0.15}>
<div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <Reveal key={stat.label} variant="scale" delay={0.1 * i} className="card-modern !p-6 text-center"><div className="font-display text-4xl text-ink">{stat.value}</div>
                    <div className="mt-2 font-sans text-[11px] uppercase tracking-nav text-sand-faint">
                      {stat.label}
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WellnessPhilosophy />

      <section className="section-padding bg-cream-warm">
        <div className="container-e7">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal variant="left" className="order-2 lg:order-1">
              <div className="image-card aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
                  alt="Element 7 wellness build"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal variant="right" className="order-1 lg:order-2" delay={0.1}>
              <SectionHeader
                label="What we do"
                title={
                  <>
                    Consultation to <span className="italic text-olive">delivery.</span>
                  </>
                }
                description="One integrated path — design, specification, construction, and handover."
              />
              <ul className="mt-8 space-y-3">
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

      <section className="section-padding bg-white">
        <div className="container-e7">
          <Reveal variant="up" className="mb-16">
            <SectionHeader
              align="center"
              label="Principles"
              title={
                <>
                  How we <span className="italic text-olive">work.</span>
                </>
              }
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <Reveal key={v.title} variant="up" delay={idx * 0.08} className="card-modern group">
                <span className="block h-px w-8 bg-olive/30 transition-all duration-500 group-hover:w-14 group-hover:bg-sage" />
                <h3 className="mt-6 font-display text-xl text-ink transition-colors group-hover:text-olive">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-ink-muted">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
