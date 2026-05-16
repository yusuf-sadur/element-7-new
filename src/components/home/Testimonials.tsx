"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section-padding section-glass overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="container-e7 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
          <p className="section-label">Client voices</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-sand leading-tight">
            Spaces that{" "}
            <span className="italic text-gold">endure.</span>
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        {/* Minimalist Slider */}
        <div className="relative max-w-5xl mx-auto bg-white p-10 shadow-card md:p-20 rounded-[32px] card-dark scroll-reveal">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4 md:px-12 text-center">
                  <div className="flex justify-center gap-1.5 mb-8">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={18} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-2xl md:text-4xl text-sand/90 leading-relaxed mb-12 font-display font-light italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-sand tracking-wide text-lg">{t.name}</div>
                    <div className="text-gold/60 text-[10px] md:text-xs tracking-[0.25em] uppercase mt-3">
                      {t.location} — {t.project}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-8 mt-16">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-sand/10 text-sand/50 hover:text-gold hover:border-gold/40 transition-all duration-500 hover:bg-gold/5"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    currentIndex === idx ? "bg-gold scale-150" : "bg-sand/20 hover:bg-sand/50"
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full border border-sand/10 text-sand/50 hover:text-gold hover:border-gold/40 transition-all duration-500 hover:bg-gold/5"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-24 pt-12 border-t border-sand/[0.06] scroll-reveal" style={{ transitionDelay: "300ms" }}>
          <p className="text-center text-xs text-sand/30 tracking-widest uppercase mb-8">
            Trusted Partners & Certifications
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            {["HIA Member", "Master Builders", "SPASA Australia", "Licensed Builder VIC", "Sauna Society Australia"].map(
              (badge) => (
                <div key={badge} className="text-sm font-light text-sand tracking-widest uppercase">
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
