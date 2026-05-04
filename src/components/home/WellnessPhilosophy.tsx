"use client";

export default function WellnessPhilosophy() {
  const pillars = [
    {
      title: "Recovery",
      description:
        "Accelerate muscle repair, reduce inflammation, and restore the body through evidence-backed thermal therapy.",
    },
    {
      title: "Contrast Therapy",
      description:
        "The science of alternating heat and cold — stimulating circulation, boosting immunity, and elevating resilience.",
    },
    {
      title: "Longevity",
      description:
        "Regular sauna use is linked to cardiovascular health, reduced all-cause mortality, and extended healthspan.",
    },
    {
      title: "Performance",
      description:
        "Elite athletes and high-performers rely on structured recovery environments for sustained peak output.",
    },
    {
      title: "Relaxation",
      description:
        "Beyond the physical — your wellness space is a sanctuary for mental decompression and daily restoration.",
    },
    {
      title: "Holistic Wellbeing",
      description:
        "We design environments that unite body, mind and architecture into a single, transformative experience.",
    },
  ];

  return (
    <section
      id="philosophy"
      className="section-padding section-glass overflow-hidden"
    >
      {/* Decorative gold line */}
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      <div className="container-e7">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 scroll-reveal">
          <p className="section-label">Our Philosophy</p>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-6xl font-light text-white leading-tight mb-6">
            Engineered for{" "}
            <span className="italic text-gold">Human Performance</span>
          </h2>
          <div className="divider-gold mx-auto" />
          <blockquote className="mt-8 text-white/50 text-lg font-light leading-relaxed italic font-['Cormorant_Garamond',serif]">
            &ldquo;We believe the spaces we inhabit shape who we become. An
            Element 7 wellness environment is an investment in your health,
            your performance, and your quality of life — built to last a
            lifetime.&rdquo;
          </blockquote>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="group bg-obsidian p-10 hover:bg-white/[0.02] transition-all duration-500 scroll-reveal"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="w-8 h-px bg-gold mb-6 group-hover:w-16 transition-all duration-500" />
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-light text-white mb-3 group-hover:text-gold transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
