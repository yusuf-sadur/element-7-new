import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Melbourne's Premium Wellness Builder — Element 7",
  description:
    "Element 7 is Melbourne's next-generation wellness company. We design and build luxury recovery environments for residential and commercial clients.",
};

const values = [
  { title: "Craftsmanship", text: "Every element of every build is executed to the highest standard — premium materials, precision installation, zero shortcuts." },
  { title: "Innovation", text: "We continuously research emerging wellness science and design trends to deliver environments that are ahead of their time." },
  { title: "Integrity", text: "Honest timelines, transparent pricing, and a single point of contact from first consultation to handover." },
  { title: "Excellence", text: "We do not build standard installations. Every Element 7 environment is a luxury, bespoke creation tailored to you." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PageHero
        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=85"
        label="About"
        title="Built for"
        titleAccent="Excellence"
        subtitle="Melbourne's next-generation wellness design and build practice — engineered for performance, longevity and luxury."
        height="100vh"
      />

      <section className="section-padding section-glass">
        <div className="container-e7">
        {/* Our Vision */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="scroll-reveal">
            <p className="section-label">Our Vision</p>
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-white leading-tight mb-6">
              Redefining What&apos;s Possible in <span className="italic text-gold">Wellness Design</span>
            </h2>
            <div className="divider-gold" />
            <p className="text-white/55 text-sm leading-relaxed mt-6 mb-6">
              Element 7 was founded on a singular belief: that premium wellness environments
              should be engineered with the same precision and intentionality as the world&apos;s
              finest architecture. We are not a product supplier — we are a design and build practice
              specialising exclusively in human performance environments.
            </p>
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              Our clients are discerning homeowners, elite athletes, boutique hotel operators,
              and commercial developers who understand that a great wellness space is transformative —
              for health, lifestyle, and property value.
            </p>
            <Link href="/contact" className="btn-gold" id="about-cta">
              Start Your Project
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="scroll-reveal" style={{ transitionDelay: "200ms" }}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100+", label: "Projects Delivered" },
                { value: "5★", label: "Client Satisfaction" },
                { value: "10+", label: "Years Experience" },
                { value: "100%", label: "Custom Designed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.03] border border-white/[0.07] p-8 text-center hover:border-gold/30 transition-all duration-300"
                >
                  <div className="font-['Cormorant_Garamond',serif] text-4xl font-light text-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 tracking-wider uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
              <p className="section-label">What We Do</p>
              <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-white leading-tight mb-6">
                End-to-End <span className="italic text-gold">Wellness Design</span>
              </h2>
              <div className="divider-gold" />
              <p className="text-white/55 text-sm leading-relaxed mt-6">
                We manage every phase of your project — from the initial consultation and
                architectural design, through engineering, construction, and final installation.
                You engage one team and we take full responsibility for the outcome.
              </p>
              <div className="mt-8 space-y-3">
                {["Custom sauna & steam room design", "Cold plunge and hydrotherapy systems", "Contrast therapy environments", "Outdoor wellness structures", "Commercial wellness fit-outs", "Retrofit and upgrade projects"].map(
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
        </div>

        {/* Values */}
        <div className="scroll-reveal">
          <div className="text-center mb-12">
            <p className="section-label">Our Values</p>
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-white">
              The Principles That <span className="italic text-gold">Guide Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
            {values.map((v, idx) => (
              <div
                key={v.title}
                className="group bg-obsidian p-8 hover:bg-white/[0.02] transition-all duration-500 scroll-reveal"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="w-8 h-px bg-gold mb-5 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-white mb-3 group-hover:text-gold transition-colors">
                  {v.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
      </section>
    </div>
  );
}
