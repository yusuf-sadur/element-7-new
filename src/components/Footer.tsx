"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Residential", href: "/residential" },
  { name: "Commercial", href: "/commercial" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Custom Saunas", href: "/services/custom-saunas" },
  { name: "Infrared Saunas", href: "/services/infrared-saunas" },
  { name: "Steam & Hammam", href: "/services/steam-rooms" },
  { name: "Cold Plunge", href: "/services/cold-plunge" },
];

const linkClass =
  "group inline-flex items-center gap-1 font-sans text-sm font-light text-ink-muted transition-colors hover:text-olive";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 overflow-hidden border-t border-line bg-cream">
      <div className="relative">
        <div className="container-e7 border-b border-line py-12 md:py-14 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl scroll-reveal" data-reveal="left">
              <p className="font-display text-2xl font-light leading-snug text-ink md:text-3xl">
                Recovery architecture,{" "}
                <span className="italic text-olive">built for life.</span>
              </p>
              <p className="mt-3 font-sans text-sm font-light leading-relaxed text-ink-muted">
                Complete wellness environments — consultation, design, construction,
                and delivery across Australia.
              </p>
            </div>
            <div
              className="flex shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-end scroll-reveal"
              style={{ "--reveal-delay": "120ms" } as CSSProperties}
              data-reveal="scale"
            >
              <Link
                href="/contact"
                className="btn-primary justify-center lg:min-w-[240px]"
                id="footer-cta"
              >
                Book consultation
              </Link>
              <p className="text-center font-sans text-[10px] uppercase tracking-label text-sand-faint lg:text-right">
                Response within one business day
              </p>
            </div>
          </div>
        </div>

        <div className="container-e7 py-14 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className="scroll-reveal lg:col-span-4" data-reveal="up">
              <Link
                href="/"
                className="group mb-8 inline-block transition-opacity hover:opacity-90"
              >
                <span className="font-display block text-2xl tracking-[0.2em] text-ink">
                  ELEMENT <span className="text-olive">7</span>
                </span>
                <span className="mt-1 block font-sans text-[10px] uppercase tracking-label text-wood">
                  Melbourne
                </span>
              </Link>
              <p className="max-w-sm font-sans text-sm font-light leading-relaxed text-ink-muted">
                Wellness & recovery design studio — low-tox, custom, end to end.
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
                  { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
                  { href: "https://youtube.com", Icon: Youtube, label: "YouTube" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-olive/30 hover:bg-white hover:text-olive"
                  >
                    <Icon size={17} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            <div
              className="scroll-reveal lg:col-span-2"
              style={{ "--reveal-delay": "80ms" } as CSSProperties}
              data-reveal="up"
            >
              <h3 className="section-label !mb-6">Explore</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={linkClass}>
                      <span>{link.name}</span>
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="scroll-reveal lg:col-span-2"
              style={{ "--reveal-delay": "140ms" } as CSSProperties}
              data-reveal="up"
            >
              <h3 className="section-label !mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name} className="min-w-0">
                    <Link href={service.href} className={linkClass}>
                      <span className="truncate">{service.name}</span>
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="scroll-reveal lg:col-span-4"
              style={{ "--reveal-delay": "200ms" } as CSSProperties}
              data-reveal="right"
            >
              <h3 className="section-label !mb-6">Contact Us</h3>
              <div className="relative overflow-hidden rounded-2xl border border-line/70 bg-gradient-to-br from-white via-white to-cream-warm/60 p-6 shadow-card sm:rounded-3xl sm:p-7">
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sage/15 blur-2xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-olive/35 to-transparent"
                  aria-hidden
                />

                <p className="relative font-sans text-[11px] font-medium uppercase tracking-label text-olive">
                  Melbourne studio
                </p>
                <p className="relative mt-1 font-display text-lg font-light text-ink">
                  Let&apos;s plan your space
                </p>

                <ul className="relative mt-6 space-y-1">
                  <li>
                    <a
                      href="tel:+611300000000"
                      className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-cream-warm/90"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-olive/10 text-olive transition-colors group-hover:bg-olive group-hover:text-cream">
                        <Phone size={18} strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0">
                        <div className="font-sans text-[10px] uppercase tracking-label text-sand-faint">
                          Phone
                        </div>
                        <div className="font-sans text-sm font-medium tracking-wide text-ink group-hover:text-olive">
                          1300 000 000
                        </div>
                      </div>
                      <ArrowUpRight
                        size={15}
                        className="ml-auto shrink-0 text-sand-faint opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-olive group-hover:opacity-100"
                        aria-hidden
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@element7.com.au"
                      className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-cream-warm/90"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-olive/10 text-olive transition-colors group-hover:bg-olive group-hover:text-cream">
                        <Mail size={18} strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="font-sans text-[10px] uppercase tracking-label text-sand-faint">
                          Email
                        </div>
                        <div className="truncate font-sans text-sm font-medium tracking-wide text-ink group-hover:text-olive">
                          hello@element7.com.au
                        </div>
                      </div>
                      <ArrowUpRight
                        size={15}
                        className="ml-auto shrink-0 text-sand-faint opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-olive group-hover:opacity-100"
                        aria-hidden
                      />
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center gap-4 rounded-xl px-3 py-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage/15 text-olive">
                        <MapPin size={18} strokeWidth={1.5} />
                      </span>
                      <div>
                        <div className="font-sans text-[10px] uppercase tracking-label text-sand-faint">
                          Studio
                        </div>
                        <div className="font-sans text-sm font-medium tracking-wide text-ink">
                          Melbourne, VIC · Australia-wide
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="relative mt-5 border-t border-line/60 pt-5">
                  <Link href="/contact" className="link-line text-[11px] text-ink-muted hover:text-olive">
                    Book a consultation
                  </Link>
                  <p className="mt-2 font-sans text-[10px] text-sand-faint">
                    We respond within one business day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-line bg-white">
          <div className="container-e7 flex scroll-reveal flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between md:gap-6">
            <p className="text-center font-sans text-[11px] font-light text-ink-muted md:text-left">
              © {year} Element Seven. Crafted in Melbourne.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-sans text-[11px] uppercase tracking-nav text-ink-muted">
              <Link href="/privacy-policy" className="transition-colors hover:text-olive">
                Privacy Policy
              </Link>
              <span className="hidden text-line sm:inline" aria-hidden>
                ·
              </span>
              <Link href="/terms" className="transition-colors hover:text-olive">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
