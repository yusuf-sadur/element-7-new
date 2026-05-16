"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const services = [
  { title: "Custom Saunas", slug: "custom-saunas" },
  { title: "Infrared Saunas", slug: "infrared-saunas" },
  { title: "Steam Rooms", slug: "steam-rooms" },
  { title: "Cold Plunge Systems", slug: "cold-plunge" },
];

const navLinks = [
  { type: "link", name: "Home", to: "/" },
  { type: "link", name: "About", to: "/about" },
  { type: "dropdown", name: "Services", to: "/services" },
  { type: "link", name: "Residential", to: "/residential" },
  { type: "link", name: "Commercial", to: "/commercial" },
  { type: "link", name: "Projects", to: "/projects" },
  { type: "link", name: "Blogs", to: "/blogs" },
  { type: "link", name: "Contact", to: "/contact" },
] as const;

const linkBase =
  "relative py-2 text-[13px] font-medium tracking-tight transition-colors duration-200";

/** Matches `HeroSection` content gutter so the nav aligns with the hero. */
const pagePad =
  "px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[clamp(2.5rem,7vw,6rem)]";

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isServicesActive = pathname.startsWith("/services");

  const handleScroll = useCallback(() => {
    setIsScrolled(globalThis.scrollY > 24);
  }, []);

  useEffect(() => {
    handleScroll();
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        globalThis.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    globalThis.addEventListener("scroll", onScroll, { passive: true });
    return () => globalThis.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => setHeaderHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isMobileMenuOpen, isScrolled]);

  const activeLink = (path: string) =>
    pathname === path ? "text-white" : "text-white/55 hover:text-white/90";

  return (
    <header ref={headerRef} className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4 md:pt-5">
      {/* Same width + horizontal padding as HeroSection content wrapper */}
      <div className={`pointer-events-auto mx-auto w-full max-w-[1600px] ${pagePad}`}>
        <div
          className={`relative z-[55] flex items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 shadow-2xl shadow-bark/30 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 sm:gap-4 sm:px-5 sm:py-3 md:rounded-[1.35rem] md:px-6 ${
            isScrolled
              ? "border-white/[0.09] bg-obsidian/85 shadow-[0_12px_48px_rgba(14,18,12,0.55)] backdrop-blur-2xl"
              : "border-white/[0.06] bg-bark/35 backdrop-blur-xl"
          }`}
        >
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-xl outline-offset-4 transition-opacity hover:opacity-90"
            aria-label="Element 7 — Home"
          >
            <span
              className={`font-display font-light uppercase tracking-[0.32em] text-white transition-all duration-300 ${
                isScrolled ? "text-[13px] sm:text-sm" : "text-sm sm:text-[15px]"
              }`}
            >
              ELEMENT <span className="text-gold">7</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
            <nav className="flex items-center gap-1 xl:gap-1.5" aria-label="Primary">
              {navLinks.map((link) => {
                if (link.type === "dropdown") {
                  return (
                    <div
                      key={link.name}
                      className="relative px-1.5 py-0.5"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        className={`${linkBase} inline-flex items-center gap-1 ${isServicesActive ? "text-white" : "text-white/55 hover:text-white/90"}`}
                        aria-expanded={isServicesDropdownOpen}
                        aria-haspopup="true"
                        aria-controls="services-menu"
                        id="services-trigger"
                      >
                        {link.name}
                        <ChevronDown
                          size={15}
                          strokeWidth={2}
                          className={`opacity-60 transition-transform duration-200 ${
                            isServicesDropdownOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden
                        />
                      </button>
                      {isServicesActive && (
                        <span
                          className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gold"
                          aria-hidden
                        />
                      )}

                      <div
                        id="services-menu"
                        role="menu"
                        aria-labelledby="services-trigger"
                        className={`absolute left-1/2 top-[calc(100%+10px)] z-50 w-[min(22rem,calc(100vw-3rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/[0.08] bg-bark-light/95 shadow-[0_20px_50px_rgba(14,18,12,0.65)] ring-1 ring-white/[0.03] backdrop-blur-2xl transition-all duration-200 ease-out ${
                          isServicesDropdownOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-1.5 opacity-0"
                        }`}
                      >
                        <div className="border-b border-white/[0.06] px-5 py-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                            Browse
                          </p>
                          <Link
                            href="/services"
                            role="menuitem"
                            className="mt-2 block text-sm font-medium text-gold transition-colors hover:text-gold-light"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            View all services →
                          </Link>
                        </div>
                        <div className="max-h-[min(52vh,380px)] overflow-y-auto overscroll-contain py-2">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              role="menuitem"
                              className="block px-5 py-2.5 text-[13px] text-white/65 transition-colors hover:bg-white/[0.04] hover:text-white"
                              onClick={() => setIsServicesDropdownOpen(false)}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.to ?? "/"}
                    className={`${linkBase} px-1.5 ${activeLink(link.to ?? "/")}`}
                  >
                    {link.name}
                    {pathname === link.to && (
                      <span
                        className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gold"
                        aria-hidden
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-gradient-to-r from-gold to-gold-light px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-black shadow-[0_4px_24px_rgba(201,168,76,0.28)] transition-all duration-300 hover:shadow-[0_6px_32px_rgba(201,168,76,0.4)] lg:inline-flex lg:items-center"
              id="nav-cta-desktop"
            >
              Book consultation
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-white transition-colors hover:border-white/20 hover:bg-white/[0.07] lg:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        style={{ top: headerHeight }}
        className={`fixed inset-x-0 bottom-0 z-40 bg-bark/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        tabIndex={-1}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(100%,400px)] max-w-full flex-col border-l border-white/[0.08] bg-obsidian shadow-[-16px_0_48px_rgba(14,18,12,0.55)] transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto translate-x-0"
            : "pointer-events-none translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Menu</span>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.1] text-white/80 transition-colors hover:bg-white/[0.05]"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-4" aria-label="Mobile">
          <div className="space-y-1">
            {navLinks.map((link) => {
              if (link.type === "dropdown") {
                return (
                  <div key={link.name} className="rounded-xl bg-white/[0.03]">
                    <button
                      type="button"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex w-full items-center justify-between px-4 py-3.5 text-left text-[15px] font-medium text-white"
                      aria-expanded={isMobileServicesOpen}
                    >
                      {link.name}
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-white/45 transition-transform duration-200 ${
                          isMobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isMobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="border-t border-white/[0.06] px-2 pb-3 pt-1">
                          <Link
                            href="/services"
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gold"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            All services
                          </Link>
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block rounded-lg px-3 py-2 text-[14px] text-white/55 transition-colors hover:bg-white/[0.04] hover:text-white"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.to ?? "/"}
                  className={`block rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors ${
                    pathname === link.to ? "bg-white/[0.06] text-white" : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-white/[0.06] p-5">
          <Link
            href="/contact"
            className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-light py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-black shadow-lg shadow-gold/25"
            id="nav-cta-mobile"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
