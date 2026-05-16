import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import WellnessPhilosophy from "@/components/home/WellnessPhilosophy";
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PageHero
        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=85"
        label="About"
        title="Wellness"
        titleAccent="architecture."
        subtitle="A design and build practice devoted entirely to recovery environments — across Australia."
        height="100vh"
      />

      <section className="section-padding section-glass">
        <div className="container-e7">
        {/* Our Vision */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="scroll-reveal">
            <p className="section-label">Who we are</p>
            <h2 className="font-display text-4xl font-light text-sand leading-tight mb-6">
              Not a supplier. <span className="italic text-gold">A studio.</span>
            </h2>
            <div className="divider-gold" />
            <p className="text-sand/55 text-sm leading-relaxed mt-6 mb-4">
              Element 7 designs and builds complete wellness and recovery environments.
              We are among the few companies in Australia focused entirely on wellness,
              recovery, longevity, and low-tox construction.
            </p>
            <p className="text-sand/55 text-sm leading-relaxed mb-8">
              Our clients are homeowners, athletes, boutique studios, architects, and
              hospitality brands who treat wellness as long-term health infrastructure.
            </p>
            <Link href="/contact" className="btn-gold" id="about-cta">
              Begin a conversation
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="scroll-reveal" style={{ transitionDelay: "200ms" }}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "25+", label: "Years in construction" },
                { value: "100%", label: "Custom designed" },
                { value: "AU", label: "& international" },
                { value: "1", label: "Integrated team" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-sand/[0.03] border border-sand/[0.07] p-8 text-center hover:border-gold/30 transition-all duration-300"
                >
                  <div className="font-display text-4xl font-light text-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-sand/40 tracking-wider uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <WellnessPhilosophy />

        {/* What We Do */}
        <div className="mb-24 scroll-reveal">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
                alt="Element 7 wellness build"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-label">What we do</p>
              <h2 className="font-display text-4xl font-light text-sand leading-tight mb-6">
                Consultation to <span className="italic text-gold">delivery.</span>
              </h2>
              <div className="divider-gold" />
              <p className="text-sand/55 text-sm leading-relaxed mt-6">
                One integrated path — design, specification, construction, and handover.
                Sauna from design to build.
              </p>
              <div className="mt-8 space-y-3">
                {capabilities.map(
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
        </div>

        {/* Values */}
        <div className="scroll-reveal">
          <div className="text-center mb-12">
            <p className="section-label">Principles</p>
            <h2 className="font-display text-4xl font-light text-sand">
              How we <span className="italic text-gold">work.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-sand/[0.05]">
            {values.map((v, idx) => (
              <div
                key={v.title}
                className="group bg-obsidian p-8 hover:bg-sand/[0.02] transition-all duration-500 scroll-reveal"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="w-8 h-px bg-gold mb-5 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-display text-xl font-light text-sand mb-3 group-hover:text-gold transition-colors">
                  {v.title}
                </h3>
                <p className="text-sand/40 text-xs leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
      </section>
    </div>
  );
}
