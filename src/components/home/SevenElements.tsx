"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/ui/RevealStagger";
import { BRAND, SEVEN_ELEMENTS } from "@/lib/brand";

const ELEMENT_ICONS = [
  <svg key="heat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24" aria-hidden>
    <path d="M12 2c0 6-6 8-6 13a6 6 0 0012 0c0-5-6-7-6-13z" />
    <path d="M12 22v-4" />
  </svg>,
  <svg key="cold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24" aria-hidden>
    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    <circle cx="12" cy="12" r="4" />
  </svg>,
  <svg key="breath" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24" aria-hidden>
    <path d="M4 12c0-4 8-9 8-9s8 5 8 9a8 8 0 01-16 0z" />
    <path d="M12 3v18" />
  </svg>,
  <svg key="rest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24" aria-hidden>
    <path d="M12 3a6 6 0 009 9 9 9 0 11-9-9z" />
  </svg>,
  <svg key="movement" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24" aria-hidden>
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v8m-4 4h8M8 11l-2 4m10-4l2 4" />
  </svg>,
  <svg key="nature" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24" aria-hidden>
    <path d="M12 22V12M12 12C12 7 7 4 2 6M12 12C12 7 17 4 22 6" />
  </svg>,
  <svg key="connection" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24" aria-hidden>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>,
] as const;

export default function SevenElements() {
  return (
    <section id="philosophy" className="philosophy-ref">
      <div className="philosophy-ref__wrap">
        <div className="philosophy-ref__head">
          <Reveal variant="up">
            <div>
              <p className="philosophy-ref__tag">Our Philosophy</p>
              <h2 className="philosophy-ref__title">The Seven Elements of Recovery</h2>
              <p className="philosophy-ref__sub">{BRAND.supportingLine}</p>
            </div>
          </Reveal>
          <Reveal variant="fade" delay={0.1}>
            <Link href="/our-approach" className="philosophy-ref__link">
              Our approach →
            </Link>
          </Reveal>
        </div>

        <RevealStagger className="philosophy-ref__grid" stagger={0.06} delayChildren={0.08}>
          {SEVEN_ELEMENTS.map((element, idx) => (
            <RevealStaggerItem key={element.num} as="motion.article" className="philosophy-ref__card">
              <span className="philosophy-ref__num">{element.num}</span>
              <span className="philosophy-ref__icon">{ELEMENT_ICONS[idx]}</span>
              <p className="philosophy-ref__name">{element.title}</p>
              <p className="philosophy-ref__desc">{element.text}</p>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
