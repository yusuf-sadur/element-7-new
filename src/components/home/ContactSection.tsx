"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import ConsultationShell from "@/components/ui/ConsultationShell";
import { BRAND } from "@/lib/brand";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-main relative overflow-hidden border-t border-line/60 bg-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 0% 0%, rgba(143,166,126,0.1) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(196,137,106,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="container-e7 relative section-padding !py-16 md:!py-20 lg:!py-24">
        <Reveal variant="up" className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="section-label justify-center">Contact us</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-tight tracking-tight text-ink">
            Ready to build your <span className="text-bronze">recovery space?</span>
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-ink-muted">
            Planning a sauna, steam room, plunge pool, or complete recovery suite — share your
            brief below and we&apos;ll respond within one business day.
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <Reveal variant="left" className="lg:col-span-4">
            <div className="contact-channel-card">
              <p className="section-label !mb-5">Direct lines</p>
              <ul className="space-y-1">
                <li>
                  <a href={BRAND.phoneTel} className="contact-channel-row group">
                    <span className="contact-channel-icon">
                      <Phone size={18} strokeWidth={1.25} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="contact-channel-label">Phone</span>
                      <span className="contact-channel-value">{BRAND.phone}</span>
                      <span className="contact-channel-hint">Mon–Fri, 9am–5pm AEST</span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-ink-faint opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-olive group-hover:opacity-100"
                    />
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@element7.com.au" className="contact-channel-row group">
                    <span className="contact-channel-icon">
                      <Mail size={18} strokeWidth={1.25} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="contact-channel-label">Email</span>
                      <span className="contact-channel-value">hello@element7.com.au</span>
                      <span className="contact-channel-hint">We reply within one business day</span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-ink-faint opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-olive group-hover:opacity-100"
                    />
                  </a>
                </li>
              </ul>
              <p className="mt-6 font-sans text-[10px] uppercase tracking-label text-ink-faint">
                {BRAND.studio} based · {BRAND.coverage}
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={0.08} className="lg:col-span-8">
            <ConsultationShell
              reveal={false}
              label="Your enquiry"
              title={
                <>
                  Tell us about your <span className="text-olive">space</span>
                </>
              }
              description="Property details, build scope, and timeline — the more context you share, the better we can prepare for your consultation."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
