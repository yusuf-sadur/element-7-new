"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

import { EASE_PREMIUM } from "@/lib/motion";
import { usePathname } from "next/navigation";

const services = [
  {
    title: "Custom Saunas",
    slug: "custom-saunas",
    label: "Dry heat",
    tagline: "Timber, heat, and airflow tailored to your rituals",
  },
  {
    title: "Infrared Saunas",
    slug: "infrared-saunas",
    label: "Heat therapy",
    tagline: "Gentle deep warmth for everyday recovery",
  },
  {
    title: "Steam & Hammam",
    slug: "steam-rooms",
    label: "Hammam",
    tagline: "Steam culture with stone, moisture, and calm",
  },
  {
    title: "Cold Plunge",
    slug: "cold-plunge",
    label: "Cold therapy",
    tagline: "Precision chilled contrast and clarity",
  },
];

const navLinks = [
  { type: "link", name: "About", to: "/about" },
  { type: "dropdown", name: "Services", to: "/services" },
  { type: "link", name: "Residential", to: "/residential" },
  { type: "link", name: "Commercial", to: "/commercial" },
  { type: "link", name: "Projects", to: "/projects" },
  { type: "link", name: "Journal", to: "/journal" },
] as const;

const linkBase =
  "relative py-2 font-sans text-[11px] font-medium uppercase tracking-nav transition-colors duration-300";

const SCROLL_THRESHOLD = 8;

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isServicesActive = pathname.startsWith("/services");
  const isTransparent = !isScrolled && !isMobileMenuOpen;

  const updateScrollState = useCallback(() => {
    const hero = document.getElementById("hero");
    const navHeight = headerRef.current?.offsetHeight ?? 72;

    if (hero) {
      setIsScrolled(hero.getBoundingClientRect().bottom <= navHeight + 4);
      return;
    }

    setIsScrolled(globalThis.scrollY > SCROLL_THRESHOLD);
  }, [pathname]);

  useEffect(() => {
    updateScrollState();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        globalThis.requestAnimationFrame(() => {
          updateScrollState();
          ticking = false;
        });
        ticking = true;
      }
    };

    globalThis.addEventListener("scroll", onScroll, { passive: true });
    globalThis.addEventListener("resize", onScroll, { passive: true });
    return () => {
      globalThis.removeEventListener("scroll", onScroll);
      globalThis.removeEventListener("resize", onScroll);
    };
  }, [updateScrollState]);

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

  const activeLink = (path: string) => {
    if (isTransparent) {
      return pathname === path
        ? "text-cream after:w-full"
        : "text-cream/75 hover:text-cream after:w-0 hover:after:w-full";
    }
    return pathname === path
      ? "text-ink after:w-full"
      : "text-ink-muted hover:text-ink after:w-0 hover:after:w-full";
  };

  const servicesButtonClass = isTransparent
    ? isServicesActive
      ? "text-cream after:w-full"
      : "text-cream/75 hover:text-cream after:w-0"
    : isServicesActive
      ? "text-ink"
      : "text-ink-muted";

  const underlineColor = isTransparent ? "after:bg-sage-light" : "after:bg-olive";

  return (
    <header
      ref={headerRef}
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ease-out ${
        isTransparent
          ? "border-b border-white/[0.08] bg-ink/30 backdrop-blur-[6px]"
          : "border-b border-line bg-white shadow-[0_4px_24px_rgba(28,33,24,0.06)]"
      }`}
    >
      <div className="pointer-events-auto container-e7 flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link
          href="/"
          className={`font-display text-lg tracking-[0.2em] transition-colors duration-300 md:text-xl ${
            isTransparent ? "text-cream" : "text-ink"
          }`}
          aria-label="Element 7 — Home"
        >
          ELEMENT <span className={isTransparent ? "text-sage-light" : "text-olive"}>7</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            if (link.type === "dropdown") {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className={`${linkBase} inline-flex items-center gap-1 after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all ${underlineColor} ${servicesButtonClass}`}
                    aria-expanded={isServicesDropdownOpen}
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isServicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.28, ease: EASE_PREMIUM }}
                        className="absolute left-1/2 top-full z-50 w-[min(100vw-2rem,22rem)] -translate-x-1/2 pt-4"
                      >
                        <motion.div
                          role="menu"
                          aria-label="Services"
                          className="overflow-hidden rounded-2xl border border-line/70 bg-cream/95 shadow-[0_24px_60px_rgba(28,33,24,0.14)] ring-1 ring-white/80 backdrop-blur-xl"
                        >
                          <div className="border-b border-line/50 bg-gradient-to-br from-cream-warm/90 to-cream/40 px-5 py-4">
                            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-olive">
                              Wellness modalities
                            </p>
                            <Link
                              href="/services"
                              role="menuitem"
                              className="group mt-2.5 flex items-center justify-between gap-3 rounded-xl py-1 transition-colors hover:text-olive"
                              onClick={() => setIsServicesDropdownOpen(false)}
                            >
                              <span className="font-display text-xl font-light tracking-tight text-ink group-hover:text-olive">
                                All services
                              </span>
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line/80 bg-white/80 text-ink-muted transition-all duration-300 group-hover:border-olive/25 group-hover:bg-olive group-hover:text-cream">
                                <ArrowUpRight size={14} strokeWidth={1.75} />
                              </span>
                            </Link>
                          </div>

                          <ul className="space-y-0.5 p-2">
                            {services.map((service, index) => {
                              const href = `/services/${service.slug}`;
                              const isActive = pathname === href;
                              return (
                                <motion.li
                                  key={service.slug}
                                  initial={{ opacity: 0, x: -6 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.22,
                                    delay: 0.04 + index * 0.04,
                                    ease: EASE_PREMIUM,
                                  }}
                                >
                                  <Link
                                    href={href}
                                    role="menuitem"
                                    className={`group flex items-start gap-3 rounded-xl px-3 py-3 transition-all duration-300 ${
                                      isActive
                                        ? "bg-cream-warm ring-1 ring-olive/10"
                                        : "hover:bg-white hover:shadow-[0_4px_20px_rgba(28,33,24,0.06)]"
                                    }`}
                                    onClick={() => setIsServicesDropdownOpen(false)}
                                  >
                                    <span className="mt-0.5 w-14 shrink-0 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-olive/75">
                                      {service.label}
                                    </span>
                                    <span className="min-w-0 flex-1">
                                      <span
                                        className={`block font-sans text-[13px] font-medium leading-snug transition-colors ${
                                          isActive ? "text-olive" : "text-ink group-hover:text-olive"
                                        }`}
                                      >
                                        {service.title}
                                      </span>
                                      <span className="mt-0.5 block text-[11px] leading-relaxed text-ink-faint line-clamp-2">
                                        {service.tagline}
                                      </span>
                                    </span>
                                    <ArrowUpRight
                                      size={14}
                                      strokeWidth={1.75}
                                      className={`mt-1 shrink-0 transition-all duration-300 ${
                                        isActive
                                          ? "text-olive opacity-100"
                                          : "text-ink-faint opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:text-olive group-hover:opacity-100"
                                      }`}
                                    />
                                  </Link>
                                </motion.li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.to ?? "/"}
                className={`${linkBase} after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all ${underlineColor} ${activeLink(link.to ?? "/")}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className={
              isTransparent
                ? "btn-primary hidden !border !border-cream/25 !bg-cream/10 !px-6 !py-3 !text-cream !shadow-none backdrop-blur-sm hover:!border-cream/40 hover:!bg-cream/20 lg:inline-flex"
                : "btn-primary hidden !py-3 !px-6 lg:inline-flex"
            }
            id="nav-cta-desktop"
          >
            Contact Us
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`inline-flex h-10 w-10 items-center justify-center border transition-colors duration-300 lg:hidden ${
              isTransparent
                ? "border-white/25 text-cream hover:bg-white/10"
                : "border-line text-ink hover:bg-cream-warm"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ top: headerHeight }}
              className="fixed inset-x-0 bottom-0 z-40 bg-ink/10 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              tabIndex={-1}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: EASE_PREMIUM }}
              className="pointer-events-auto fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-line bg-cream lg:hidden"
            >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-olive">Menu</span>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-sand/[0.1] text-ink transition-colors hover:bg-sand/[0.05]"
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
                  <div key={link.name} className="border-t border-line">
                    <button
                      type="button"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex w-full items-center justify-between px-4 py-3.5 text-left text-sm uppercase tracking-nav text-ink"
                      aria-expanded={isMobileServicesOpen}
                    >
                      {link.name}
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-sand/45 transition-transform duration-200 ${
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
                        <div className="border-t border-line px-2 pb-3 pt-1">
                          <Link
                            href="/services"
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-olive"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            All services
                          </Link>
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block rounded-lg px-3 py-2 text-[14px] text-ink-muted transition-colors hover:text-ink"
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
                    pathname === link.to ? "text-ink" : "text-ink-muted hover:text-ink"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-line p-5">
          <Link
            href="/contact"
            className="btn-primary w-full justify-center"
            id="nav-cta-mobile"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book consultation
          </Link>
</div>
      </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
