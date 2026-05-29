"use client";

import ConsultationShell from "@/components/ui/ConsultationShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import PageScrollShell, { SnapSection } from "@/components/scroll/PageScrollShell";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import heroSaunaImg from "@/assets/hero-sauna.jpg";

const contactItems = [
  { Icon: Phone, label: "Phone", value: "1300 000 000", href: "tel:+611300000000", hint: "Mon–Fri, 9am–5pm AEST" },
  { Icon: Mail, label: "Email", value: "hello@element7.com.au", href: "mailto:hello@element7.com.au", hint: "We reply within one business day" },
  { Icon: MapPin, label: "Studio", value: "Melbourne · Australia-wide", href: null, hint: "Residential & commercial projects nationally" },
];

const trustPoints = [
  { Icon: Clock, label: "One business day", detail: "Thoughtful response, not automation" },
  { Icon: Shield, label: "No obligation", detail: "A calm discovery conversation first" },
  { Icon: MessageCircle, label: "Design & build studio", detail: "Architectural wellness environments — consultation through delivery" },
];

const processSteps = [
  { step: "01", title: "Share your vision", text: "Tell us about your property, brief, and the recovery installation you want built." },
  { step: "02", title: "Discovery call", text: "A quiet conversation to understand scope, constraints, and possibilities." },
  { step: "03", title: "Tailored direction", text: "We outline design intent, programme, and next steps — without pressure." },
];

const areas = [
  "Melbourne CBD", "Inner East", "Inner West", "Bayside", "Mornington Peninsula",
  "Yarra Valley", "Dandenong Ranges", "Surf Coast", "All Victoria",
];

export default function ContactScrollExperience() {
  return (
    <PageScrollShell className="bg-cream">
      <SnapSection>
        <PageHero
          variant="invitation"
          image={heroSaunaImg}
          label="Contact"
          title="Begin your"
          titleAccent="project."
          subtitle="A consultation about your property, scope, and the sauna or recovery installation you need designed and built."
          secondaryHref="/services"
          secondaryLabel="Explore spaces"
        />
      </SnapSection>

      <SnapSection>
        <section className="border-b border-line/60 bg-white" aria-label="Contact assurances">
          <div className="container-e7 py-8 md:py-10">
            <div className="contact-trust-grid">
              {trustPoints.map(({ Icon, label, detail }, i) => (
                <Reveal key={label} variant="up" delay={0.06 * i} className="contact-trust-item">
                  <span className="contact-trust-icon" aria-hidden>
                    <Icon size={18} strokeWidth={1.25} />
                  </span>
                  <div>
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-nav text-olive">{label}</p>
                    <p className="mt-1 text-sm font-light leading-relaxed text-ink-muted">{detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SnapSection>

      <SnapSection>
        <section className="contact-main relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 0% 0%, rgba(143,166,126,0.1) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(196,137,106,0.06) 0%, transparent 50%)",
            }}
          />
          <div className="container-e7 relative section-padding !pt-20 md:!pt-28">
            <Reveal variant="up" className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
              <p className="section-label justify-center">Enquire</p>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-tight tracking-tight text-ink">
                Tell us about your <span className="italic text-bronze">build</span>
              </h2>
              <p className="mt-4 text-base font-light leading-relaxed text-ink-muted">
                Planning a sauna, steam room, plunge pool, or complete recovery suite —
                we design and construct on site, end to end.
              </p>
            </Reveal>

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
              <div className="space-y-6 lg:col-span-5">
                <Reveal variant="left" className="contact-channel-card">
                  <p className="section-label !mb-5">Direct lines</p>
                  <ul className="space-y-1">
                    {contactItems.map(({ Icon, label, value, href, hint }) => (
                      <li key={label}>
                        {href ? (
                          <a href={href} className="contact-channel-row group">
                            <span className="contact-channel-icon">
                              <Icon size={18} strokeWidth={1.25} />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="contact-channel-label">{label}</span>
                              <span className="contact-channel-value">{value}</span>
                              <span className="contact-channel-hint">{hint}</span>
                            </span>
                            <ArrowUpRight size={16} className="shrink-0 text-ink-faint opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-olive group-hover:opacity-100" />
                          </a>
                        ) : (
                          <div className="contact-channel-row">
                            <span className="contact-channel-icon">
                              <Icon size={18} strokeWidth={1.25} />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="contact-channel-label">{label}</span>
                              <span className="contact-channel-value">{value}</span>
                              <span className="contact-channel-hint">{hint}</span>
                            </span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal variant="left" delay={0.08} className="contact-process-card">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-nav text-olive">What happens next</p>
                  <ol className="mt-6 space-y-6">
                    {processSteps.map((step, idx) => (
                      <Reveal key={step.step} variant="up" delay={idx * 0.06} as="li" className="contact-process-step">
                        <span className="contact-process-num">{step.step}</span>
                        <div>
                          <h3 className="font-display text-lg font-light text-ink">{step.title}</h3>
                          <p className="mt-1.5 text-sm font-light leading-relaxed text-ink-muted">{step.text}</p>
                        </div>
                      </Reveal>
                    ))}
                  </ol>
                </Reveal>

                <Reveal variant="left" delay={0.12} className="contact-map-card">
                  <div className="contact-map-frame">
                    <iframe
                      title="Element 7 Melbourne"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d144.9630576!3d-37.8136276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full"
                    />
                    <div className="contact-map-chip">
                      <MapPin size={12} strokeWidth={1.5} />
                      Melbourne studio · AU-wide delivery
                    </div>
                  </div>
                </Reveal>

                <Reveal variant="left" delay={0.16} className="contact-areas-card">
                  <h3 className="font-sans text-[11px] font-semibold uppercase tracking-nav text-olive">Victoria service areas</h3>
                  <p className="mt-2 text-sm font-light text-ink-muted">Based in Melbourne — projects delivered across Australia.</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {areas.map((area, idx) => (
                      <Reveal key={area} variant="scale" delay={idx * 0.03} className="contact-area-pill">
                        {area}
                      </Reveal>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal variant="right" delay={0.1} className="lg:col-span-7">
                <ConsultationShell
                  className="lg:sticky lg:top-28"
                  reveal={false}
                  title={
                    <>
                      Tell us about your <span className="italic text-olive">space</span>
                    </>
                  }
                />
              </Reveal>
            </div>
          </div>
        </section>
      </SnapSection>
    </PageScrollShell>
  );
}
