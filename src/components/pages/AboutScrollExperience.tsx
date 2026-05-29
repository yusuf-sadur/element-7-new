"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import CountUpStat from "@/components/ui/CountUpStat";
import SectionHeader from "@/components/ui/SectionHeader";
import PageScrollShell, { SnapSection } from "@/components/scroll/PageScrollShell";
import { BRAND } from "@/lib/brand";
import heroSauna3Img from "@/assets/hero-sauna3.jpg";

const values = [
  { title: "Craft", text: "Premium materials, precise installation, and architectural detailing on every build." },
  { title: "Integrity", text: "Clear scope, honest programmes, and one accountable team from drawings to handover." },
  { title: "Technical rigour", text: "Ventilation, waterproofing, thermal performance — engineered before construction starts." },
  { title: "Bespoke", text: "No catalogue kits. Every installation is designed and built for its property and brief." },
];

const capabilities = [
  "Site consultation & architectural design",
  "Custom sauna design & construction",
  "Infrared & hybrid sauna builds",
  "Steam room & hammam construction",
  "Recovery pool & plunge pool installation",
  "Complete recovery suite delivery",
];

const stats = [
  { type: "count" as const, end: 50, suffix: "+", label: "Builds delivered" },
  { type: "count" as const, end: 15, suffix: "+", label: "Years constructing" },
  { type: "count" as const, end: 100, suffix: "%", label: "Design & build" },
  { type: "text" as const, value: "AU", label: "Nationwide" },
];

export default function AboutScrollExperience() {
  return (
    <PageScrollShell>
      <SnapSection>
        <PageHero
          image={heroSauna3Img}
          label="About"
          title="A studio that"
          titleAccent="builds."
          subtitle="Element Seven designs and constructs recovery environments — custom saunas, steam rooms, plunge pools, and complete wellness architecture across Australia."
          secondaryHref="/our-approach"
          secondaryLabel="Our approach"
        />
      </SnapSection>

      <SnapSection>
        <section className="section-padding bg-white">
          <div className="container-e7">
            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
              <Reveal variant="left">
                <SectionHeader
                  label="Who we are"
                  title={
                    <>
                      Not a spa. <span className="italic text-bronze">A build studio.</span>
                    </>
                  }
                  description={BRAND.studioIdentity}
                />
                <p className="mt-6 text-base font-light leading-relaxed text-ink-muted">
                  We work with homeowners, architects, boutique studios, and developers
                  who need a specialist team to design and construct saunas, steam rooms,
                  plunge pools, and integrated recovery suites.
                </p>
                <Link href="/contact" className="btn-primary mt-10 inline-flex" id="about-cta">
                  Discuss your project
                  <ArrowRight size={16} />
                </Link>
              </Reveal>

              <Reveal variant="right" delay={0.15}>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <Reveal key={stat.label} variant="scale" delay={0.1 * i} className="card-modern !p-6 text-center">
                      <div className="font-display text-4xl text-ink">
                        {stat.type === "count" ? (
                          <CountUpStat end={stat.end} suffix={stat.suffix} delay={i * 0.1} />
                        ) : (
                          stat.value
                        )}
                      </div>
                      <div className="mt-2 font-sans text-[11px] uppercase tracking-nav text-concrete">
                        {stat.label}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </SnapSection>

      <SnapSection>
        <section className="section-padding bg-stone">
          <div className="container-e7">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal variant="left" className="order-2 lg:order-1">
                <div className="image-card aspect-[4/3]">
                  <Image
                    src={heroSauna3Img}
                    alt="Sauna construction on site"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
              <Reveal variant="right" className="order-1 lg:order-2" delay={0.1}>
                <SectionHeader
                  label="What we build"
                  title={
                    <>
                      Drawings to <span className="italic text-bronze">handover.</span>
                    </>
                  }
                  description="One integrated build path — design, specification, on-site construction, commissioning, and documentation."
                />
                <ul className="mt-8 space-y-3">
                  {capabilities.map((item, idx) => (
                    <Reveal
                      key={item}
                      variant="up"
                      delay={idx * 0.04}
                      as="li"
                      className="flex items-center gap-3 text-[15px] text-ink-muted"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                      {item}
                    </Reveal>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      </SnapSection>

      <SnapSection>
        <section className="section-padding bg-white">
          <div className="container-e7">
            <Reveal variant="up" className="mb-16">
              <SectionHeader
                align="center"
                label="Principles"
                title={
                  <>
                    How we <span className="italic text-bronze">deliver.</span>
                  </>
                }
              />
            </Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, idx) => (
                <Reveal key={v.title} variant="up" delay={idx * 0.08} className="card-modern group">
                  <span className="block h-px w-8 bg-bronze/30 transition-all duration-500 group-hover:w-14 group-hover:bg-bronze" />
                  <h3 className="mt-6 font-display text-xl text-ink transition-colors group-hover:text-bronze">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-ink-muted">{v.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SnapSection>
    </PageScrollShell>
  );
}
