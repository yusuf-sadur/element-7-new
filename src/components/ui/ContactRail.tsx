"use client";

import { useState } from "react";
import { ArrowUpRight, Clock, Globe, Mail, MapPin, Phone, Shield } from "lucide-react";

import CoverageModal from "@/components/ui/CoverageModal";
import { BRAND, SERVICE_AREA_REGIONS } from "@/lib/brand";

const COVERAGE_SUBURB_COUNT = SERVICE_AREA_REGIONS.reduce(
  (total, { suburbs }) => total + suburbs.length,
  0,
);

type ContactRailProps = {
  className?: string;
};

export default function ContactRail({ className = "" }: Readonly<ContactRailProps>) {
  const [coverageOpen, setCoverageOpen] = useState(false);

  return (
    <aside className={`contact-rail ${className}`.trim()}>
      <div className="contact-rail__glow" aria-hidden />

      <p className="contact-rail__eyebrow">Direct contact</p>
      <p className="contact-rail__brand">
        ELEMENT <span className="contact-rail__brand-accent">7</span>
      </p>

      <a href={BRAND.phoneTel} className="contact-rail__phone group" aria-label={`Call ${BRAND.phone}`}>
        <span className="contact-rail__phone-label">Call the studio</span>
        <span className="contact-rail__phone-value">{BRAND.phone}</span>
        <span className="contact-rail__phone-hint">Mon–Fri · 9am–5pm AEST</span>
        <ArrowUpRight
          size={18}
          className="contact-rail__phone-arrow"
          aria-hidden
        />
      </a>

      <a href="mailto:hello@element7.com.au" className="contact-rail__channel group">
        <span className="contact-rail__channel-icon" aria-hidden>
          <Mail size={17} strokeWidth={1.25} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="contact-rail__channel-label">Email</span>
          <span className="contact-rail__channel-value">hello@element7.com.au</span>
        </span>
        <ArrowUpRight size={15} className="contact-rail__channel-arrow" aria-hidden />
      </a>

      <div className="contact-rail__channel contact-rail__channel--static">
        <span className="contact-rail__channel-icon" aria-hidden>
          <MapPin size={17} strokeWidth={1.25} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="contact-rail__channel-label">Studio</span>
          <span className="contact-rail__channel-value">
            {BRAND.studio} · {BRAND.coverage}
          </span>
        </span>
      </div>

      <div className="contact-rail__assurances">
        <div className="contact-rail__assurance">
          <Clock size={14} strokeWidth={1.5} aria-hidden />
          <span>Reply within one business day</span>
        </div>
        <div className="contact-rail__assurance">
          <Shield size={14} strokeWidth={1.5} aria-hidden />
          <span>No-obligation consultation</span>
        </div>
      </div>

      <div className="contact-rail__coverage-wrap">
        <p className="contact-rail__coverage-eyebrow">Melbourne &amp; beyond</p>
        <button
          type="button"
          className="contact-rail__coverage group"
          onClick={() => setCoverageOpen(true)}
          aria-haspopup="dialog"
          aria-label={`View ${BRAND.serviceAreasHeadline}`}
        >
          <span className="contact-rail__coverage-glow" aria-hidden />

          <span className="contact-rail__coverage-main">
            <span className="contact-rail__coverage-icon" aria-hidden>
              <Globe size={18} strokeWidth={1.2} />
            </span>
            <span className="min-w-0 flex-1 text-left">
              <span className="contact-rail__coverage-title">{BRAND.serviceAreasHeadline}</span>
              <span className="contact-rail__coverage-hint">
                {SERVICE_AREA_REGIONS.length} regions · {COVERAGE_SUBURB_COUNT} suburbs ·{" "}
                {BRAND.coverage}
              </span>
            </span>
          </span>

          <span className="contact-rail__coverage-cta">
            View
            <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden />
          </span>
        </button>
      </div>

      <CoverageModal open={coverageOpen} onClose={() => setCoverageOpen(false)} />
    </aside>
  );
}
