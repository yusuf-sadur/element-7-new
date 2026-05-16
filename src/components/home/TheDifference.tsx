"use client";

import { CheckCircle2 } from "lucide-react";

const differences = [
  {
    number: "01",
    title: "Complete environments",
    description:
      "Not a sauna supplier. We design and build full wellness and recovery spaces — integrated, architectural, intentional.",
  },
  {
    number: "02",
    title: "Australia-focused",
    description:
      "Among the few companies here devoted entirely to wellness, recovery, longevity, and low-tox construction.",
  },
  {
    number: "03",
    title: "End-to-end delivery",
    description:
      "Consultation through design, construction, and handover — one team, one vision.",
  },
  {
    number: "04",
    title: "Fully custom",
    description:
      "No templates. No prefabricated shortcuts. Every space tailored to lifestyle, property, and vision.",
  },
  {
    number: "05",
    title: "Technical mastery",
    description:
      "Structural design, thermal performance, ventilation, moisture control — built for longevity.",
  },
  {
    number: "06",
    title: "25+ years experience",
    description:
      "Decades in construction across Australia and internationally — applied to recovery architecture.",
  },
];

const proofPoints = [
  "Wellness consultation & custom design",
  "Low-tox material specification",
  "Licensed builders & wellness specialists",
  "Projects across Australia & abroad",
];

export default function TheDifference() {
  return (
    <section
      id="the-difference"
      className="section-padding section-glass overflow-hidden"
    >
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="container-e7">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="scroll-reveal">
            <p className="section-label">What makes us different</p>
            <h2 className="mb-6 font-display text-5xl font-light leading-tight text-sand md:text-7xl">
              A wellness architecture{" "}
              <span className="italic text-gold">studio.</span>
            </h2>
            <div className="divider-gold" />
            <p className="mb-4 mt-6 text-sm font-light leading-relaxed text-sand/55">
              We are not general contractors. We create elegant recovery
              environments — saunas, cold plunge, steam, hammam, and complete
              wellness fit-outs.
            </p>
            <p className="mb-10 text-sm font-light leading-relaxed text-sand/45">
              Performance wellness design for homes, studios, and hospitality —
              specified with the same rigour as the architecture around them.
            </p>

            <div className="space-y-4">
              {proofPoints.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={16}
                    className="flex-shrink-0 text-gold"
                  />
                  <span className="text-sm text-sand/65">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {differences.map((item, idx) => (
              <div
                key={item.number}
                className="group card-dark scroll-reveal p-6"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >

<div className="mb-3 font-display text-4xl font-light text-gold/20 transition-colors duration-300 group-hover:text-gold/40">
                  {item.number}
                </div>
                <h3 className="mb-2 text-sm font-semibold text-sand transition-colors duration-300 group-hover:text-gold">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-sand/45">
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
