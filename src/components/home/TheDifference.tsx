"use client";

import { CheckCircle2 } from "lucide-react";

const differences = [
  {
    number: "01",
    title: "Fully Custom Designed",
    description:
      "Every project begins with your vision. We design each wellness environment from scratch — no templates, no off-the-shelf solutions.",
  },
  {
    number: "02",
    title: "End-to-End Delivery",
    description:
      "From initial consultation through design, construction, and installation — we manage every aspect with a single point of contact.",
  },
  {
    number: "03",
    title: "Premium Materials & Finishes",
    description:
      "We source only the finest cedar, thermally modified timber, premium stone, and architectural fixtures for lasting quality.",
  },
  {
    number: "04",
    title: "Residential & Commercial Expertise",
    description:
      "Whether a private home sanctuary or a commercial wellness precinct — our team has the expertise to deliver at any scale.",
  },
  {
    number: "05",
    title: "Wellness-Focused Design",
    description:
      "Our design philosophy is rooted in the science of recovery — every spatial decision is made to enhance the therapeutic experience.",
  },
  {
    number: "06",
    title: "Tailored Recovery Solutions",
    description:
      "We align each build with your performance, health and lifestyle goals — creating environments that work as hard as you do.",
  },
];

export default function TheDifference() {
  return (
    <section
      id="the-difference"
      className="section-padding section-glass overflow-hidden"
    >
      {/* Gold accent line */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="container-e7">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — content */}
          <div className="scroll-reveal">
            <p className="section-label">Why Element 7</p>
            <h2 className="font-display text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
              The Element 7{" "}
              <span className="italic text-gold">Difference</span>
            </h2>
            <div className="divider-gold" />
            <p className="text-white/55 leading-relaxed text-sm mt-6 mb-10">
              This is not a basic sauna installation company. Element 7 delivers
              high-end wellness and recovery environments tailored to lifestyle,
              performance, and wellbeing. We bring architectural thinking to
              every build.
            </p>

            {/* Feature list */}
            <div className="space-y-4">
              {["Premium-grade, hand-selected materials", "Licensed builders & wellness specialists", "Architect-reviewed designs", "5-year structural warranty"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                    <span className="text-white/65 text-sm">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right — difference cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differences.map((item, idx) => (
              <div
                key={item.number}
                className="group card-dark p-6 scroll-reveal"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="text-gold/20 font-light text-4xl font-display mb-3 group-hover:text-gold/40 transition-colors duration-300">
                  {item.number}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/45 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
