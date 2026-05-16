"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

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
    <section id="philosophy" className="section-padding relative overflow-hidden bg-cream-warm">
<div className="bg-mesh pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="container-e7 relative">
        <Reveal variant="up" className="mb-16 md:mb-24">
          <SectionHeader
            align="center"
            label="Philosophy"
            title={
              <>
                Wellness is <span className="italic text-olive">infrastructure.</span>
              </>
            }
            description="Not a trend — long-term health, designed into the architecture of how you live."
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
          {outcomes.map((item, idx) => (
            <Reveal
              key={item.title}
              variant="scale"
              delay={idx * 0.06}
              className="card-modern !p-6 text-center md:!p-8"
            >
              <h3 className="font-display text-lg text-ink md:text-xl">{item.title}</h3>
              <p className="mt-2 text-xs font-light leading-relaxed text-ink-muted">{item.line}</p>
            </Reveal>
          ))}
</div>

        <Reveal variant="fade" delay={0.2} className="mt-16 border-t border-line/80 pt-14 text-center">
          <p className="font-sans text-[11px] uppercase tracking-label text-wood">Environments for</p>
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {purpose.map((phrase, i) => (
              <span
                key={phrase}
                className="font-display text-2xl italic text-ink-muted md:text-3xl"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {phrase}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
