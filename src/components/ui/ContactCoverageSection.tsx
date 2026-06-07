"use client";

import { Globe, MapPin } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import { BRAND, SERVICE_AREA_REGIONS } from "@/lib/brand";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d144.9630576!3d-37.8136276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1234567890";

export default function ContactCoverageSection() {
  const suburbCount = SERVICE_AREA_REGIONS.reduce((total, { suburbs }) => total + suburbs.length, 0);

  const stats = [
    { value: String(SERVICE_AREA_REGIONS.length), label: "Regions" },
    { value: String(suburbCount), label: "Suburbs" },
    { value: BRAND.coverage, label: "Delivery" },
  ];

  return (
    <section className="contact-coverage-suite" aria-label={BRAND.serviceAreasHeadline}>
      <header className="contact-coverage-suite__header bg-mesh">
        <Reveal variant="up" className="contact-coverage-suite__intro">
          <p className="section-label !mb-3">Coverage</p>
          <h2 className="contact-coverage-suite__title">
            Areas we <span className="text-bronze">service</span>
          </h2>
          <p className="contact-coverage-suite__subline">{BRAND.serviceAreasSubline}</p>
        </Reveal>

        <ul className="contact-coverage-suite__stats" aria-label="Coverage summary">
          {stats.map(({ value, label }, idx) => (
            <Reveal
              key={label}
              as="li"
              variant="up"
              delay={idx * 0.07}
              className="contact-coverage-suite__stat"
            >
              <span className="contact-coverage-suite__stat-value">{value}</span>
              <span className="contact-coverage-suite__stat-label">{label}</span>
            </Reveal>
          ))}
        </ul>
      </header>

      <div className="contact-coverage-suite__body">
        <div className="contact-coverage-suite__regions">
          <ul className="contact-coverage-suite__grid">
            {SERVICE_AREA_REGIONS.map(({ region, suburbs }, index) => (
              <Reveal
                key={region}
                as="li"
                variant="up"
                delay={(index % 3) * 0.06}
                className="contact-coverage-suite__region"
              >
                <span className="contact-coverage-suite__index" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="contact-coverage-suite__region-name">{region}</h3>
                  <p className="contact-coverage-suite__suburbs">{suburbs.join(" · ")}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal variant="fade" delay={0.15}>
            <p className="contact-coverage-suite__note">{BRAND.serviceAreasNote}</p>
          </Reveal>
        </div>

        <Reveal variant="right" delay={0.1} className="contact-coverage-suite__map" aria-label="Studio location">
          <div className="contact-coverage-suite__map-header">
            <span className="contact-coverage-suite__map-icon" aria-hidden>
              <MapPin size={15} strokeWidth={1.25} />
            </span>
            <div>
              <p className="contact-coverage-suite__map-label">Studio</p>
              <p className="contact-coverage-suite__map-title">{BRAND.studio}</p>
            </div>
            <span className="contact-coverage-suite__map-badge">
              <Globe size={11} strokeWidth={1.5} aria-hidden />
              {BRAND.coverage}
            </span>
          </div>

          <div className="contact-coverage-suite__map-frame">
            <iframe
              title="Element 7 Melbourne"
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
            <div className="contact-coverage-suite__map-vignette" aria-hidden />
            <div className="contact-coverage-suite__map-chip">
              <MapPin size={12} strokeWidth={1.5} />
              Melbourne studio · AU-wide delivery
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
