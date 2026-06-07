"use client";

import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/ui/RevealStagger";

const pillars = [
  {
    num: "01",
    title: "Complete environments",
    text: "Full wellness and recovery spaces — not products off the shelf.",
  },
  {
    num: "02",
    title: "Australia-focused",
    text: "Devoted to wellness, recovery, longevity, and low-tox construction.",
  },
  {
    num: "03",
    title: "End-to-end",
    text: "Consultation, design, construction, and handover — one studio.",
  },
  {
    num: "04",
    title: "Fully custom",
    text: "No templates. Every space tailored to property and vision.",
  },
  {
    num: "05",
    title: "Technical mastery",
    text: "Thermal performance, ventilation, moisture — built to endure.",
  },
  {
    num: "06",
    title: "25+ years",
    text: "Construction expertise across Australia and internationally.",
  },
];

export default function CorePillars() {
  return (
    <section id="pillars" className="relative bg-white">
      <div className="container-e7 section-padding">
        <Reveal variant="up" className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="section-label">What defines us</p>
            <h2 className="display-lg text-balance">
              Six principles of{" "}
              <span className="text-olive">recovery architecture</span>
            </h2>
          </div>
          <p className="max-w-sm text-base font-light leading-relaxed text-ink-muted md:text-right">
            How we approach every residential and commercial wellness commission.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {pillars.map((item) => (
            <RevealStaggerItem key={item.num} as="motion.article" className="card-modern group">
              <div className="flex items-start justify-between">
                <span className="font-sans text-[11px] font-semibold tabular-nums text-wood">
                  {item.num}
                </span>
                <span className="h-px w-8 bg-line transition-all duration-500 group-hover:w-12 group-hover:bg-sage" />
              </div>
              <h3 className="mt-8 font-display text-2xl leading-snug text-ink transition-colors group-hover:text-olive">
                {item.title}
              </h3>
              <p className="mt-4 font-sans text-[15px] font-light leading-relaxed text-ink-muted">
                {item.text}
              </p>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

