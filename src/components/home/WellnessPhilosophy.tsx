"use client";

const outcomes = [
  { title: "Recovery", line: "Muscle repair, inflammation, restoration." },
  { title: "Sleep", line: "Circadian rhythm and deep rest." },
  { title: "Circulation", line: "Heat, cold, and contrast therapy." },
  { title: "Clarity", line: "Stress reduction and mental focus." },
  { title: "Regulation", line: "Nervous system balance, daily." },
];

const purpose = ["Slowing down", "Resetting", "Living better, daily"];

export default function WellnessPhilosophy() {
  return (
    <section
      id="philosophy"
      className="section-padding section-glass overflow-hidden"
    >
<div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      <div className="container-e7">
        <div className="scroll-reveal mx-auto mb-20 max-w-3xl text-center">
          <p className="section-label">Philosophy</p>
          <h2 className="mb-6 font-display text-5xl font-light leading-tight text-sand md:text-7xl">
            Wellness is{" "}
            <span className="italic text-gold">infrastructure.</span>
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="mt-8 text-lg font-light leading-relaxed text-sand/50">
            Not a trend — long-term health, designed into the architecture of
            how you live.
          </p>
        </div>

        <div className="scroll-reveal grid grid-cols-2 gap-px bg-sand/[0.05] md:grid-cols-5">
          {outcomes.map((item, idx) => (
            <div
              key={item.title}
              className="group bg-obsidian p-6 text-center transition-all duration-500 hover:bg-sand/[0.02] md:p-8"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <h3 className="font-display text-lg font-light text-sand transition-colors duration-300 group-hover:text-gold md:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-[11px] font-light leading-relaxed text-sand/40">
                {item.line}
              </p>
            </div>
          ))}
        </div>

        <div className="scroll-reveal mt-16 flex flex-col items-center border-t border-sand/[0.08] pt-12 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold/70">
            Environments for
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {purpose.map((phrase) => (
              <span
                key={phrase}
                className="font-display text-xl font-light italic text-sand/60 md:text-2xl"
              >
                {phrase}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
