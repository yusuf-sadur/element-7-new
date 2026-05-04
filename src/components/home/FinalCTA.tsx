"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="section-padding section-glass overflow-hidden"
    >
      {/* Ambient gold glow */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="container-e7 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div className="scroll-reveal">
            <p className="section-label">Get Started</p>
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light text-white leading-tight mb-6">
              Create Your{" "}
              <span className="italic text-gold">Wellness Space</span>
            </h2>
            <div className="divider-gold" />
            <p className="text-white/55 text-sm leading-relaxed mt-6 mb-8">
              Every Element 7 project begins with a conversation. Tell us about
              your vision, your space, and your goals — and we&apos;ll show you
              exactly how we can bring it to life.
            </p>

            {/* Quick links */}
            <div className="space-y-3">
              {[
                { label: "Explore Residential Projects", href: "/residential" },
                { label: "View Commercial Capabilities", href: "/commercial" },
                { label: "Browse All Services", href: "/services" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-white/50 hover:text-gold text-sm transition-colors duration-300 group"
                >
                  <ArrowRight
                    size={14}
                    className="text-gold/50 group-hover:translate-x-1 transition-transform duration-300"
                  />
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-10 pt-8 border-t border-white/[0.08] space-y-3">
              <a
                href="tel:+611300000000"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-gold transition-colors"
              >
                <span className="text-xs text-white/25 tracking-widest uppercase w-12">
                  Phone
                </span>
                1300 000 000
              </a>
              <a
                href="mailto:hello@element7.com.au"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-gold transition-colors"
              >
                <span className="text-xs text-white/25 tracking-widest uppercase w-12">
                  Email
                </span>
                hello@element7.com.au
              </a>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <span className="text-xs text-white/25 tracking-widest uppercase w-12">
                  Based
                </span>
                Melbourne, Victoria
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="scroll-reveal" style={{ transitionDelay: "200ms" }}>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
