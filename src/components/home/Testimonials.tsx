"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James K.",
    location: "Toorak, VIC",
    rating: 5,
    text: "Element 7 transformed our basement into a world-class wellness suite. The attention to detail, premium materials, and seamless installation exceeded every expectation. We use it daily.",
    project: "Residential Wellness Suite",
  },
  {
    name: "Sarah M.",
    location: "Mornington Peninsula, VIC",
    rating: 5,
    text: "Our outdoor sauna and cold plunge have become the centrepiece of our property. Element 7 understood our vision perfectly and delivered something truly exceptional.",
    project: "Outdoor Wellness Space",
  },
  {
    name: "Marcus T.",
    location: "South Yarra, VIC",
    rating: 5,
    text: "For our boutique gym, Element 7 designed and installed a complete recovery wing. Our members love it and it's become our biggest point of difference in the market.",
    project: "Commercial Gym Recovery",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding section-glass overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="container-e7 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
          <p className="section-label">Testimonials</p>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light text-white leading-tight">
            What Our{" "}
            <span className="italic text-gold">Clients Say</span>
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05]">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="group bg-obsidian p-10 hover:bg-white/[0.025] transition-all duration-500 scroll-reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote size={28} className="text-gold/20 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/60 text-sm leading-relaxed mb-8 font-light italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/30 mb-5" />

              {/* Author */}
              <div>
                <div className="font-semibold text-white text-sm">{t.name}</div>
                <div className="text-gold/50 text-xs tracking-wider mt-0.5">
                  {t.location}
                </div>
                <div className="text-white/30 text-xs mt-1">{t.project}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-10 border-t border-white/[0.06] scroll-reveal" style={{ transitionDelay: "300ms" }}>
          <p className="text-center text-xs text-white/30 tracking-widest uppercase mb-6">
            Trusted Partners & Certifications
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-40">
            {["HIA Member", "Master Builders", "SPASA Australia", "Licensed Builder VIC", "Sauna Society Australia"].map(
              (badge) => (
                <div key={badge} className="text-xs font-semibold text-white tracking-wider">
                  {badge}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
