"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import ConsultationCta from "@/components/ui/ConsultationCta";
import { BRAND, SPACES } from "@/lib/brand";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Builds", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const spaceLinks = SPACES.map((space) => ({
  name: space.shortTitle,
  href: `/services/${space.slug}`,
}));

const socials = [
  { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", Icon: Linkedin, label: "LinkedIn" },
] as const;

const linkClass =
  "group flex w-full items-center justify-between gap-2 font-sans text-sm font-light text-stone/60 transition-colors hover:text-bronze sm:inline-flex sm:w-auto sm:justify-start";

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
      <h3 className="footer-col-label-dark">{title}</h3>
      <ul className="footer-link-list">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className={linkClass}>
              <span className="truncate">{link.name}</span>
              <ArrowUpRight
                size={14}
                className="shrink-0 text-bronze/35 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bronze group-hover:opacity-100 sm:opacity-0"
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
    <footer className="relative z-10 overflow-hidden border-t border-stone/10 bg-warm-black">
      <div className="relative">
        <div className="container-e7 border-b border-stone/10 py-9 sm:py-12 md:py-14 lg:py-16">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl scroll-reveal" data-reveal="left">
              <p className="font-display text-[1.35rem] font-light leading-snug text-stone sm:text-[1.65rem] md:text-3xl">
                Ready to build your{" "}
                <span className="text-bronze">recovery space?</span>
              </p>
              <p className="mt-2.5 font-sans text-[13px] font-light leading-relaxed text-stone/55 sm:mt-3 sm:text-sm">
                {BRAND.description}
              </p>
            </div>
            <div
              className="flex shrink-0 flex-col gap-2.5 sm:gap-3 lg:items-end scroll-reveal"
              style={{ "--reveal-delay": "120ms" } as CSSProperties}
              data-reveal="scale"
            >
              <ConsultationCta
                id="footer-cta"
                className="w-full justify-center sm:w-auto lg:min-w-[280px]"
              />
              <p className="text-center font-sans text-[10px] uppercase tracking-label text-stone/35 lg:text-right">
                Melbourne based · {BRAND.coverage}
              </p>
            </div>
          </div>
        </div>

        <div className="container-e7 py-10 sm:py-14 md:py-16 lg:py-20">
          <div className="flex flex-col gap-10 sm:gap-12 lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className="scroll-reveal border-b border-stone/10 pb-10 sm:pb-0 lg:col-span-4 lg:border-0 lg:pb-0" data-reveal="up">
              <div className="flex items-start justify-between gap-4">
                <Link
                  href="/"
                  className="group inline-block min-w-0 transition-opacity hover:opacity-90"
                >
                  <span className="font-display block text-xl tracking-[0.18em] text-stone sm:text-2xl sm:tracking-[0.2em]">
                    ELEMENT <span className="text-bronze">7</span>
                  </span>
                  <span className="mt-1 block max-w-xs font-sans text-[11px] font-light leading-relaxed text-bronze/85 sm:text-xs">
                    Custom sauna, steam room, and plunge pool builders. Natural, non-toxic materials as standard.
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
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-stone/15 text-stone/60 transition-colors hover:border-bronze/30 hover:text-bronze"
                    >
                      <Icon size={15} strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>
              <p className="mt-4 max-w-sm font-sans text-[13px] font-light leading-relaxed text-stone/55 sm:mt-5 sm:text-sm">
                {BRAND.slogan}
              </p>
              <div className="mt-6 hidden flex-wrap gap-2.5 sm:flex">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-stone/15 text-stone/60 transition-colors hover:border-bronze/30 hover:text-bronze"
                  >
                    <Icon size={17} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-5 sm:gap-x-10 lg:col-span-4 lg:gap-x-12">
              <FooterLinkColumn title="Navigate" links={quickLinks} revealDelay="80ms" />
              <FooterLinkColumn title="Spaces" links={spaceLinks} revealDelay="140ms" />
            </div>

            <div
              className="scroll-reveal lg:col-span-4"
              style={{ "--reveal-delay": "200ms" } as CSSProperties}
              data-reveal="right"
            >
              <h3 className="footer-col-label-dark lg:!mb-6">Studio</h3>
              <div className="footer-contact-card-dark">
                <p className="relative font-sans text-[10px] font-medium uppercase tracking-label text-bronze sm:text-[11px]">
                  {BRAND.studio} studio
                </p>
                <p className="relative mt-0.5 font-display text-base font-light text-stone sm:mt-1 sm:text-lg">
                  Discuss your build
                </p>

                <ul className="relative mt-4 sm:mt-6">
                  <li>
                    <a href="tel:+61422797790" className="footer-contact-row-dark group">
                      <span className="footer-contact-icon-dark group-hover:bg-bronze group-hover:text-warm-black">
                        <Phone size={17} strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="footer-contact-label-dark">Phone</div>
                        <div className="font-sans text-sm font-medium text-stone group-hover:text-bronze">
                          0422 797 790
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="footer-contact-row-dark group"
                    >
                      <span className="footer-contact-icon-dark group-hover:bg-bronze group-hover:text-warm-black">
                        <Mail size={17} strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="footer-contact-label-dark">Email</div>
                        <div className="truncate font-sans text-sm font-medium text-stone group-hover:text-bronze">
                          {BRAND.email}
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="footer-contact-row-dark">
                      <span className="footer-contact-icon-dark bg-bronze/10">
                        <MapPin size={17} strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="footer-contact-label-dark">Location</div>
                        <p className="font-sans text-sm font-medium leading-snug text-stone">
                          Melbourne, VIC
                          <span className="text-stone/50"> · Australia-wide</span>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone/10 bg-charcoal">
          <div className="container-e7 scroll-reveal py-6 sm:py-8">
            <p className="text-center font-sans text-[11px] font-light text-stone/45">
              © {year} Element Seven. {BRAND.studio} · {BRAND.coverage}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
