"use client";

import { MessageSquare, Ruler, HardHat, Wrench, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation",
    description:
      "We begin with a detailed consultation to understand your space, lifestyle, health goals, and design preferences. No pressure — just expert guidance.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Design & Planning",
    description:
      "Our design team creates detailed plans and 3D renders tailored to your space. We specify materials, finishes, and all technical requirements.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Custom Build",
    description:
      "Our licensed builders construct every element to the highest standard, using premium materials sourced for quality and longevity.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Installation",
    description:
      "Professional installation of all wellness systems — sauna, steam, cold plunge, electrical, plumbing — managed and guaranteed.",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "We provide comprehensive handover, user training, and ongoing maintenance support to ensure your wellness space performs for years.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding section-glass overflow-hidden">
      {/* Connection line (desktop) */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent pointer-events-none" />

      <div className="container-e7">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
          <p className="section-label">Our Process</p>
          <h2 className="font-display text-5xl md:text-7xl font-light text-white leading-tight">
            How We{" "}
            <span className="italic text-gold">Bring It To Life</span>
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/[0.04]">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="group bg-[#080808] p-8 hover:bg-white/[0.025] transition-all duration-500 relative scroll-reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Number */}
              <div className="font-display text-6xl font-light text-gold/8 group-hover:text-gold/15 transition-colors duration-300 absolute top-6 right-6 leading-none">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 border border-gold/20 flex items-center justify-center mb-6 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300">
                <step.icon size={20} className="text-gold/60 group-hover:text-gold transition-colors duration-300" />
              </div>

              <h3 className="font-semibold text-white text-sm mb-3 group-hover:text-gold transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
