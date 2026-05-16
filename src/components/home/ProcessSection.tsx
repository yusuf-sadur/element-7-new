"use client";

import { MessageSquare, Ruler, HardHat, Wrench, HeartHandshake } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/ui/RevealStagger";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation",
    description:
      "Your space, lifestyle, and recovery goals — mapped with calm, expert guidance.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Design",
    description:
      "Custom plans, material specification, and architectural detailing — no templates.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Construction",
    description:
      "Low-tox build, thermal performance, ventilation — executed by licensed specialists.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Delivery",
    description:
      "Sauna, steam, cold plunge, and recovery systems — installed, commissioned, complete.",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Handover",
    description:
      "Training, care guidance, and support — spaces built to perform for decades.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-olive-dark">
      <div className="bg-mesh pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="container-e7 relative section-padding">
        <Reveal variant="left" className="mb-16 max-w-xl md:mb-24">
          <p className="section-label text-sage-light [&::before]:bg-sage/50">End to end</p>
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.08] tracking-tight text-cream">
            Consultation to{" "}
            <span className="italic text-sage-light">delivery.</span>
          </h2>
          <div className="mt-8 h-px w-16 bg-sage/40" />
        </Reveal>

        <Reveal variant="fade" delay={0.1}>
          <div className="relative">
            <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-cream/10 lg:block" aria-hidden />

            <RevealStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5" stagger={0.07}>
              {steps.map((step) => (
                <RevealStaggerItem
                  key={step.number}
                  as="motion.article"
                  className="group rounded-3xl border border-cream/10 bg-cream/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-sage/30 hover:bg-cream/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream/10 text-sage-light transition-all duration-500 group-hover:scale-105 group-hover:bg-sage/20">
                    <step.icon size={20} strokeWidth={1.25} />
                  </div>
                  <span className="mt-8 block font-sans text-[11px] font-semibold tabular-nums text-wood/80">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-cream">{step.title}</h3>
                  <p className="mt-3 font-sans text-sm font-light leading-relaxed text-cream/60">
                    {step.description}
                  </p>
                </RevealStaggerItem>
              ))}
            </RevealStagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
