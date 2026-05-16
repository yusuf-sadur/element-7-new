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

const socials = [
  { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
  { href: "https://youtube.com", Icon: Youtube, label: "YouTube" },
] as const;

const linkClass =
  "group flex w-full items-center justify-between gap-2 font-sans text-sm font-light text-ink-muted transition-colors hover:text-olive sm:inline-flex sm:w-auto sm:justify-start";

function FooterLinkColumn({
  title,
  links,
  revealDelay,
}: {
  title: string;
  links: readonly { name: string; href: string }[];
  revealDelay: string;
}) {
  return (
    <div
      className="min-w-0 scroll-reveal"
      style={{ "--reveal-delay": revealDelay } as CSSProperties}
      data-reveal="up"
    >
      <h3 className="footer-col-label">{title}</h3>
      <ul className="footer-link-list">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className={linkClass}>
              <span className="truncate">{link.name}</span>
              <ArrowUpRight
                size={14}
                className="shrink-0 text-olive/35 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-olive group-hover:opacity-100 sm:opacity-0"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 overflow-hidden border-t border-line bg-cream">
      <div className="relative">
        <div className="container-e7 border-b border-line py-9 sm:py-12 md:py-14 lg:py-16">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl scroll-reveal" data-reveal="left">
              <p className="font-display text-[1.35rem] font-light leading-snug text-ink sm:text-[1.65rem] md:text-3xl">
                Recovery architecture,{" "}
                <span className="italic text-olive">built for life.</span>
              </p>
              <p className="mt-2.5 font-sans text-[13px] font-light leading-relaxed text-ink-muted sm:mt-3 sm:text-sm">
                Complete wellness environments — consultation, design, construction,
                and delivery across Australia.
              </p>
            </div>
            <div
              className="flex shrink-0 flex-col gap-2.5 sm:gap-3 lg:items-end scroll-reveal"
              style={{ "--reveal-delay": "120ms" } as CSSProperties}
              data-reveal="scale"
            >
              <Link
                href="/contact"
                className="btn-primary w-full justify-center sm:w-auto lg:min-w-[240px]"
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

        <div className="container-e7 py-10 sm:py-14 md:py-16 lg:py-20">
          <div className="flex flex-col gap-10 sm:gap-12 lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className="scroll-reveal border-b border-line/50 pb-10 sm:pb-0 lg:col-span-4 lg:border-0 lg:pb-0" data-reveal="up">
              <div className="flex items-start justify-between gap-4">
                <Link
                  href="/"
                  className="group inline-block min-w-0 transition-opacity hover:opacity-90"
                >
                  <span className="font-display block text-xl tracking-[0.18em] text-ink sm:text-2xl sm:tracking-[0.2em]">
                    ELEMENT <span className="text-olive">7</span>
                  </span>
                  <span className="mt-0.5 block font-sans text-[10px] uppercase tracking-label text-wood">
                    Melbourne
                  </span>
                </Link>
                <div className="flex shrink-0 gap-2 sm:hidden">
                  {socials.map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-line/80 bg-white/60 text-ink-muted transition-colors hover:border-olive/30 hover:text-olive"
                    >
                      <Icon size={15} strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>
              <p className="mt-4 max-w-sm font-sans text-[13px] font-light leading-relaxed text-ink-muted sm:mt-5 sm:text-sm">
                Wellness & recovery design studio — low-tox, custom, end to end.
              </p>
              <div className="mt-6 hidden flex-wrap gap-2.5 sm:flex">
                {socials.map(({ href, Icon, label }) => (
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

            <div className="grid grid-cols-2 gap-x-5 sm:gap-x-10 lg:col-span-4 lg:gap-x-12">
              <FooterLinkColumn title="Explore" links={quickLinks} revealDelay="80ms" />
              <FooterLinkColumn title="Services" links={services} revealDelay="140ms" />
            </div>

            <div
              className="scroll-reveal lg:col-span-4"
              style={{ "--reveal-delay": "200ms" } as CSSProperties}
              data-reveal="right"
            >
              <h3 className="footer-col-label lg:!mb-6">Contact Us</h3>
              <div className="footer-contact-card">
                <div
                  className="pointer-events-none absolute -right-12 -top-12 hidden h-40 w-40 rounded-full bg-sage/15 blur-2xl sm:block"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 hidden h-px bg-gradient-to-r from-transparent via-olive/35 to-transparent sm:block"
                  aria-hidden
                />

                <p className="relative font-sans text-[10px] font-medium uppercase tracking-label text-olive sm:text-[11px]">
                  Melbourne studio
                </p>
                <p className="relative mt-0.5 font-display text-base font-light text-ink sm:mt-1 sm:text-lg">
                  Let&apos;s plan your space
                </p>

                <ul className="relative mt-4 sm:mt-6">
                  <li>
                    <a href="tel:+611300000000" className="footer-contact-row group">
                      <span className="footer-contact-icon group-hover:bg-olive group-hover:text-cream">
                        <Phone size={17} strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="footer-contact-label">Phone</div>
                        <div className="font-sans text-sm font-medium text-ink group-hover:text-olive">
                          1300 000 000
                        </div>
                      </div>
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 text-olive/30 sm:text-sand-faint sm:opacity-0 sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5 sm:group-hover:text-olive sm:group-hover:opacity-100"
                        aria-hidden
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@element7.com.au"
                      className="footer-contact-row group"
                    >
                      <span className="footer-contact-icon group-hover:bg-olive group-hover:text-cream">
                        <Mail size={17} strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="footer-contact-label">Email</div>
                        <div className="truncate font-sans text-sm font-medium text-ink group-hover:text-olive">
                          hello@element7.com.au
                        </div>
                      </div>
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 text-olive/30 sm:text-sand-faint sm:opacity-0 sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5 sm:group-hover:text-olive sm:group-hover:opacity-100"
                        aria-hidden
                      />
                    </a>
                  </li>
                  <li>
                    <div className="footer-contact-row">
                      <span className="footer-contact-icon bg-sage/15">
                        <MapPin size={17} strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="footer-contact-label">Studio</div>
                        <p className="font-sans text-sm font-medium leading-snug text-ink">
                          Melbourne, VIC
                          <span className="text-ink-muted"> · Australia-wide</span>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="relative mt-4 hidden border-t border-line/60 pt-4 sm:mt-5 sm:block sm:pt-5">
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
          <div className="container-e7 flex scroll-reveal flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-8">
            <p className="text-center font-sans text-[11px] font-light text-ink-muted sm:text-left">
              © {year} Element Seven. Crafted in Melbourne.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 font-sans text-[11px] uppercase tracking-nav text-ink-muted sm:gap-x-8">
              <Link href="/privacy-policy" className="transition-colors hover:text-olive">
                Privacy Policy
              </Link>
              <span className="text-line/80" aria-hidden>
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
