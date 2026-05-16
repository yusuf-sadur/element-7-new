"use client";

const priorities = [
  {
    title: "Low-tox construction",
    description:
      "Low VOC finishes and healthy airflow — spaces built for how you breathe.",
  },
  {
    title: "Ethical materials",
    description:
      "Natural timbers and sustainably sourced stone — selected with care.",
  },
  {
    title: "Longevity",
    description:
      "Moisture control, thermal performance, and detailing that endures.",
  },
];

const keywords = [
  "Recovery architecture",
  "Dry sauna",
  "Hammam culture",
  "Earth tone design",
  "Heat therapy spaces",
  "Performance wellness",
];

export default function MaterialsPhilosophy() {
  return (
    <section
      id="materials"
      className="section-padding section-glass relative overflow-hidden"
    >
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      <div className="container-e7">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div className="scroll-reveal">
            <p className="section-label">Materials & build</p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.1] tracking-[-0.03em] text-sand">
              Sauna from{" "}
              <span className="italic text-gold">design to build.</span>
            </h2>
            <div className="divider-gold mt-6" />
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-sand/50">
              We avoid chemical-heavy construction. Every specification serves
              air quality, safety, and spaces that age with grace.
            </p>
            <ul className="mt-8 space-y-2 text-xs font-light text-sand/40">
              {[
                "Natural timbers & earth-tone palettes",
                "Low VOC finishes",
                "Healthy ventilation systems",
                "Sustainable sourcing",
              ].map((item) => (
                <li key={item} className="border-l border-gold/20 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-px bg-sand/[0.05] scroll-reveal">
            {priorities.map((item, idx) => (


              <div
                key={item.title}
                className="bg-obsidian p-8 transition-colors duration-500 hover:bg-sand/[0.02]"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <h3 className="font-display text-xl font-light text-sand">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs font-light leading-relaxed text-sand/45">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-reveal mt-16 border-t border-sand/[0.08] pt-10">
          <p className="text-[9px] font-semibold uppercase tracking-[0.38em] text-sand/30">
            Design language
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {keywords.map((word) => (
              <span
                key={word}
                className="font-display text-sm font-light italic text-sand/35"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
