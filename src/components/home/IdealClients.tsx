"use client";

const clientTypes = [
  {
    title: "Private residences",
    caption: "Luxury home wellness integration",
  },
  {
    title: "Athletes & performers",
    caption: "Performance recovery environments",
  },
  {
    title: "Wellness professionals",
    caption: "Long-term health infrastructure",
  },
  {
    title: "Boutique studios",
    caption: "Gym + sauna combinations",
  },
  {
    title: "Architects & developers",
    caption: "Collaborative specification",
  },
  {
    title: "Hospitality & resorts",
    caption: "Commercial wellness fit-outs",
  },
];

const values = [
  "Premium craftsmanship",
  "Architectural design",
  "Natural materials",
  "Customisation",
  "Minimal, refined aesthetics",
  "Long-term health & recovery",
];

export default function IdealClients() {
  return (
    <section
      id="clients"
      className="section-padding relative overflow-hidden border-t border-sand/[0.07] bg-obsidian"
    >
      <div className="container-e7 relative z-10">
        <header className="scroll-reveal mb-14 grid gap-10 lg:mb-20 lg:grid-cols-12 lg:gap-x-16">
          <div className="relative lg:col-span-6">


            <div
              className="pointer-events-none absolute -left-4 bottom-2 top-2 w-px bg-gradient-to-b from-gold/45 via-gold/15 to-transparent sm:-left-5"
              aria-hidden
            />
            <p className="section-label">Who we work with</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.1] tracking-[-0.03em] text-sand">
              For those who treat wellness as{" "}
              <span className="text-gold">infrastructure.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end border-t border-sand/[0.07] pt-8 lg:col-span-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <p className="text-[15px] font-light leading-relaxed text-sand/45">
              Our clients value design, longevity, and spaces that perform —
              quietly, every day.
            </p>
          </div>
        </header>

        <div className="scroll-reveal grid grid-cols-1 gap-px bg-sand/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {clientTypes.map((client, idx) => (
            <div
              key={client.title}
              className="group bg-cream-warm/50 p-8 transition-colors duration-500 hover:bg-sand/[0.02]"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-gold/70">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-light text-sand transition-colors duration-300 group-hover:text-gold">
                {client.title}
              </h3>
              <p className="mt-2 text-xs font-light leading-relaxed text-sand/40">
                {client.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="scroll-reveal mt-16 border-t border-sand/[0.08] pt-12 md:mt-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold/75">
            What they value
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {values.map((value) => (
              <li
                key={value}
                className="border border-sand/[0.08] bg-sand/[0.02] px-4 py-2 text-[11px] font-light tracking-wide text-sand/55"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
