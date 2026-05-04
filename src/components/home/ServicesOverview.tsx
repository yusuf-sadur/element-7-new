"use client";

import Link from "next/link";
import {
  Flame,
  Zap,
  CloudFog,
  Droplets,
  ArrowLeftRight,
  Dumbbell,
  Trees,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Custom Saunas",
    description:
      "Bespoke Finnish and dry heat saunas designed around your space, aesthetic, and wellness goals.",
    href: "/services/custom-saunas",
    accent: "from-orange-900/40 to-red-900/20",
  },
  {
    icon: Zap,
    title: "Infrared Saunas",
    description:
      "Far-infrared technology delivering deep tissue recovery at lower temperatures for extended sessions.",
    href: "/services/infrared-saunas",
    accent: "from-amber-900/40 to-orange-900/20",
  },
  {
    icon: CloudFog,
    title: "Steam Rooms",
    description:
      "Custom steam environments with chromotherapy, aromatherapy, and architectural tile finishes.",
    href: "/services/steam-rooms",
    accent: "from-sky-900/40 to-blue-900/20",
  },
  {
    icon: Droplets,
    title: "Cold Plunge Systems",
    description:
      "Precision-cooled cold immersion pools for optimal recovery, circulation and mental resilience.",
    href: "/services/cold-plunge",
    accent: "from-blue-900/40 to-cyan-900/20",
  },
  {
    icon: ArrowLeftRight,
    title: "Contrast Therapy",
    description:
      "Integrated hot-cold environments engineered to maximise recovery through thermal contrast.",
    href: "/services/contrast-therapy",
    accent: "from-violet-900/40 to-purple-900/20",
  },
  {
    icon: Dumbbell,
    title: "Recovery Rooms",
    description:
      "Dedicated recovery sanctuaries combining multiple modalities in a single curated environment.",
    href: "/services/recovery-rooms",
    accent: "from-emerald-900/40 to-green-900/20",
  },
  {
    icon: Trees,
    title: "Outdoor Wellness Areas",
    description:
      "Architecturally integrated outdoor saunas, cold plunges and wellness areas for premium landscapes.",
    href: "/services/outdoor-wellness",
    accent: "from-stone-800/40 to-neutral-900/20",
  },
  {
    icon: Building2,
    title: "Commercial Wellness",
    description:
      "End-to-end wellness fit-outs for gyms, hotels, studios and performance facilities.",
    href: "/services/commercial-wellness",
    accent: "from-slate-800/40 to-gray-900/20",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services-overview" className="section-padding section-glass overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />

      <div className="container-e7 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
          <p className="section-label">Our Services</p>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light text-white mb-5 leading-tight">
            Wellness Environments{" "}
            <span className="italic text-gold">Designed for You</span>
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="text-white/55 text-sm leading-relaxed mt-5">
            From single custom saunas to complete multi-room wellness suites — we
            deliver every element with precision craftsmanship and premium
            materials.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
          {services.map((service, idx) => (
            <Link
              key={service.title}
              href={service.href}
              id={`service-card-${idx}`}
              className={`group relative p-8 bg-obsidian hover:bg-gradient-to-br ${service.accent} transition-all duration-500 scroll-reveal`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {/* Icon */}
              <div className="mb-5">
                <div className="w-12 h-12 border border-gold/20 flex items-center justify-center group-hover:border-gold/60 group-hover:bg-gold/10 transition-all duration-300">
                  <service.icon size={22} className="text-gold/70 group-hover:text-gold transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-semibold text-white text-base mb-2.5 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/45 text-xs leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-5 text-gold/0 group-hover:text-gold/80 transition-all duration-300 flex items-center gap-1.5 text-xs tracking-wider font-medium">
                Learn More
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
