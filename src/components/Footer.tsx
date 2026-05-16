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
  "group inline-flex items-center gap-1 text-[13px] font-light tracking-wide text-sand/55 hover:text-gold transition-colors duration-300";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 overflow-hidden border-t border-sand/[0.07] bg-obsidian text-sand">
      {/* Ambient layers */}
      <div
        className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.35]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[min(90vw,720px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.12)_0%,transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
        aria-hidden
      />

      <div className="relative">
        {/* Top band: positioning + primary CTA */}
        <div className="container-e7 border-b border-sand/[0.06] py-12 md:py-14 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl scroll-reveal" data-reveal="left">
              <p className="font-display text-2xl font-light leading-snug tracking-tight text-sand/95 md:text-3xl">
                Recovery architecture,{" "}
                <span className="text-gold/95">built for life.</span>
              </p>
              <p className="mt-3 text-sm font-light leading-relaxed text-sand/45">
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
                className="btn-gold justify-center px-10 text-xs lg:min-w-[240px]"
                id="footer-cta"
              >
                Book consultation
              </Link>
              <p className="text-center text-[11px] font-medium uppercase tracking-[0.28em] text-sand/35 lg:text-right">
                Response within one business day
              </p>
            </div>
          </div>
        </div>

        <div className="container-e7 py-14 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            {/* Brand */}
            <div className="scroll-reveal lg:col-span-4" data-reveal="up">
              <Link
                href="/"
                className="group mb-8 inline-block rounded-2xl outline-none ring-offset-2 ring-offset-obsidian transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span className="font-display block text-2xl font-light uppercase tracking-[0.28em] text-sand transition-colors group-hover:text-sand/90">
                  ELEMENT <span className="text-gold">7</span>
                </span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.35em] text-gold/80">
                  Melbourne
                </span>
              </Link>
              <p className="max-w-sm text-sm font-light leading-relaxed text-sand/45">
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-sand/[0.08] bg-sand/[0.02] text-sand/45 transition-all duration-300 hover:border-gold/35 hover:bg-gold/5 hover:text-gold hover:shadow-[0_0_24px_rgba(201,168,76,0.12)]"
                  >
                    <Icon size={17} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
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

            {/* Services — single column so Contact can use more width */}
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

            {/* Contact */}
            <div
              className="scroll-reveal lg:col-span-4"
              style={{ "--reveal-delay": "200ms" } as CSSProperties}
              data-reveal="right"
            >
              <h3 className="section-label !mb-6">Contact</h3>
              <div className="rounded-2xl border border-sand/[0.08] bg-sand/[0.02] p-6 shadow-[0_16px_48px_rgba(24,32,22,0.35)] backdrop-blur-md">
                <ul className="space-y-5">
                  <li>
                    <a
                      href="tel:+611300000000"
                      className="group flex gap-4 text-sand/55 transition-colors hover:text-gold"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sand/[0.06] bg-sand/[0.03] text-gold/90 transition-colors group-hover:border-gold/30">
                        <Phone size={17} strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sand/35">
                          Phone
                        </div>
                        <div className="text-sm font-light tracking-wide">1300 000 000</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@element7.com.au"
                      className="group flex gap-4 text-sand/55 transition-colors hover:text-gold"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sand/[0.06] bg-sand/[0.03] text-gold/90 transition-colors group-hover:border-gold/30">
                        <Mail size={17} strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sand/35">
                          Email
                        </div>
                        <div className="truncate text-sm font-light tracking-wide">
                          hello@element7.com.au
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="flex gap-4 text-sand/55">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sand/[0.06] bg-sand/[0.03] text-gold/90">
                      <MapPin size={17} strokeWidth={1.5} />
                    </span>
                    <div className="pt-0.5">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sand/35">
                        Studio
                      </div>
                      <div className="text-sm font-light tracking-wide">Melbourne, VIC</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-sand/[0.06] bg-bark/40 backdrop-blur-sm">
          <div className="container-e7 flex scroll-reveal flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between md:gap-6">
            <p className="text-center text-[11px] font-light tracking-wide text-sand/35 md:text-left">
              © {year} Element Seven. Crafted in Melbourne.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] font-medium uppercase tracking-[0.22em] text-sand/40">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-gold"
              >
                Privacy
              </Link>
              <span className="hidden text-sand/15 sm:inline" aria-hidden>
                ·
              </span>
              <Link href="/terms" className="transition-colors hover:text-gold">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
