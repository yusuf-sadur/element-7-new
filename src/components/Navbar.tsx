"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

import { EASE_PREMIUM } from "@/lib/motion";
import { SPACES } from "@/lib/brand";
import { usePathname } from "next/navigation";

const navLinks = [
  { type: "link", name: "Projects", to: "/projects" },
  { type: "link", name: "Blog", to: "/blog" },
  { type: "link", name: "About", to: "/about" },
  { type: "link", name: "Contact", to: "/contact" },
] as const;

const linkBase =
  "relative py-2 font-sans text-[11px] font-medium uppercase tracking-nav transition-colors duration-300";

const SCROLL_THRESHOLD = 8;

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpacesDropdownOpen, setIsSpacesDropdownOpen] = useState(false);
  const [isMobileSpacesOpen, setIsMobileSpacesOpen] = useState(false);
  const pathname = usePathname();
  const isSpacesActive = pathname.startsWith("/services");
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
    setIsMobileSpacesOpen(false);
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

  const spacesButtonClass = isTransparent
    ? isSpacesActive
      ? "text-cream after:w-full"
      : "text-cream/75 hover:text-cream after:w-0"
    : isSpacesActive
      ? "text-ink"
      : "text-ink-muted";

  const underlineColor = isTransparent ? "after:bg-bronze-light" : "after:bg-bronze";

  const dropdownPanelClass = isTransparent
    ? "border-white/10 bg-warm-black shadow-[0_16px_48px_rgba(0,0,0,0.45)]"
    : "border-line bg-stone shadow-[0_4px_24px_rgba(13,13,13,0.06)]";

  return (
    <header
      ref={headerRef}
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ease-out ${
        isTransparent
          ? "border-b border-white/[0.08] bg-warm-black/30 backdrop-blur-[6px]"
          : "border-b border-line bg-stone shadow-[0_4px_24px_rgba(13,13,13,0.06)]"
      }`}
    >
      <div className="pointer-events-auto grid h-16 w-full max-w-none grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 lg:px-10 xl:px-12 md:h-[4.5rem]">
        <Link
          href="/"
          className={`col-start-1 justify-self-start font-display text-lg tracking-[0.2em] transition-colors duration-300 md:text-xl ${
            isTransparent ? "text-cream" : "text-ink"
          }`}
          aria-label="Element Seven — Home"
        >
          ELEMENT <span className={isTransparent ? "text-bronze-light" : "text-bronze"}>7</span>
        </Link>

        <nav
          className="col-start-2 hidden items-center justify-self-center gap-8 lg:flex"
          aria-label="Primary"
        >
          <Link
            href="/"
            className={`${linkBase} after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all ${underlineColor} ${activeLink("/")}`}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsSpacesDropdownOpen(true)}
            onMouseLeave={() => setIsSpacesDropdownOpen(false)}
          >
            <button
              type="button"
              className={`${linkBase} inline-flex items-center gap-1 after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all ${underlineColor} ${spacesButtonClass}`}
              aria-expanded={isSpacesDropdownOpen}
            >
              Builds
              <ChevronDown
                size={14}
                className={`transition-transform ${isSpacesDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {isSpacesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.28, ease: EASE_PREMIUM }}
                  className="absolute left-1/2 top-full z-50 w-[min(100vw-2rem,24rem)] -translate-x-1/2 pt-4"
                >
                  <motion.div
                    role="menu"
                    aria-label="Builds"
                    className={`overflow-hidden rounded-2xl border ${dropdownPanelClass}`}
                  >
                    <div
                      className={`border-b px-5 py-4 ${
                        isTransparent
                          ? "border-white/10 bg-charcoal"
                          : "border-line/50 bg-cream-warm/40"
                      }`}
                    >
                      <p
                        className={`font-sans text-[10px] font-semibold uppercase tracking-[0.22em] ${
                          isTransparent ? "text-bronze-light" : "text-bronze"
                        }`}
                      >
                        Recovery environments
                      </p>
                      <Link
                        href="/services"
                        role="menuitem"
                        className={`group mt-2.5 flex items-center justify-between gap-3 rounded-xl py-1 transition-colors ${
                          isTransparent ? "hover:text-bronze-light" : "hover:text-bronze"
                        }`}
                        onClick={() => setIsSpacesDropdownOpen(false)}
                      >
                        <span
                          className={`font-display text-xl font-light tracking-tight transition-colors ${
                            isTransparent
                              ? "text-cream group-hover:text-bronze-light"
                              : "text-ink group-hover:text-bronze"
                          }`}
                        >
                          All spaces
                        </span>
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            isTransparent
                              ? "border-white/20 bg-white/10 text-cream/80 group-hover:border-bronze-light/40 group-hover:bg-bronze-light/20 group-hover:text-cream"
                              : "border-line/80 bg-white/80 text-ink-muted group-hover:border-bronze/25 group-hover:bg-bronze group-hover:text-stone"
                          }`}
                        >
                          <ArrowUpRight size={14} strokeWidth={1.75} />
                        </span>
                      </Link>
                    </div>

                    <ul className="space-y-0.5 p-2">
                      {SPACES.map((space, index) => {
                        const href = `/services/${space.slug}`;
                        const isActive = pathname === href;
                        return (
                          <motion.li
                            key={space.slug}
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
                                  ? isTransparent
                                    ? "bg-white/[0.08] ring-1 ring-bronze-light/25"
                                    : "bg-cream-warm ring-1 ring-bronze/10"
                                  : isTransparent
                                    ? "hover:bg-white/[0.06]"
                                    : "hover:bg-white hover:shadow-[0_4px_20px_rgba(13,13,13,0.06)]"
                              }`}
                              onClick={() => setIsSpacesDropdownOpen(false)}
                            >
                              <span
                                className={`mt-0.5 w-14 shrink-0 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] ${
                                  isTransparent ? "text-bronze-light/80" : "text-bronze/75"
                                }`}
                              >
                                {space.label}
                              </span>
                              <span className="min-w-0 flex-1">
                                <span
                                  className={`block font-sans text-[13px] font-medium leading-snug transition-colors ${
                                    isActive
                                      ? isTransparent
                                        ? "text-bronze-light"
                                        : "text-bronze"
                                      : isTransparent
                                        ? "text-cream group-hover:text-bronze-light"
                                        : "text-ink group-hover:text-bronze"
                                  }`}
                                >
                                  {space.title}
                                </span>
                                <span
                                  className={`mt-0.5 block line-clamp-2 text-[11px] leading-relaxed ${
                                    isTransparent ? "text-cream/70" : "text-ink-faint"
                                  }`}
                                >
                                  {space.heading}
                                </span>
                              </span>
                              <ArrowUpRight
                                size={14}
                                strokeWidth={1.75}
                                className={`mt-1 shrink-0 transition-all duration-300 ${
                                  isActive
                                    ? isTransparent
                                      ? "text-bronze-light opacity-100"
                                      : "text-bronze opacity-100"
                                    : isTransparent
                                      ? "text-cream/40 opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:text-bronze-light group-hover:opacity-100"
                                      : "text-ink-faint opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:text-bronze group-hover:opacity-100"
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

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.to}
              className={`${linkBase} after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all ${underlineColor} ${activeLink(link.to)}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="col-start-3 flex items-center justify-self-end gap-4">
          <Link
            href="/contact"
            className="btn-accent btn-accent--nav hidden lg:inline-flex"
            id="nav-cta-desktop"
          >
            Book a consultation
            <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />
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
              className="fixed inset-x-0 bottom-0 z-40 bg-warm-black/10 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              tabIndex={-1}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: EASE_PREMIUM }}
              className="pointer-events-auto fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-line bg-stone lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">Menu</span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink transition-colors hover:bg-cream-warm"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-4" aria-label="Mobile">
                <div className="space-y-1">
                  <Link
                    href="/"
                    className={`block rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors ${
                      pathname === "/" ? "text-ink" : "text-ink-muted hover:text-ink"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>

                  <div className="border-t border-line">
                    <button
                      type="button"
                      onClick={() => setIsMobileSpacesOpen(!isMobileSpacesOpen)}
                      className="flex w-full items-center justify-between px-4 py-3.5 text-left text-sm uppercase tracking-nav text-ink"
                      aria-expanded={isMobileSpacesOpen}
                    >
                      Builds
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-ink-faint transition-transform duration-200 ${
                          isMobileSpacesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isMobileSpacesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="border-t border-line px-2 pb-3 pt-1">
                          <Link
                            href="/services"
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-bronze"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            All spaces
                          </Link>
                          {SPACES.map((space) => (
                            <Link
                              key={space.slug}
                              href={`/services/${space.slug}`}
                              className="block rounded-lg px-3 py-2 text-[14px] text-ink-muted transition-colors hover:text-ink"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {space.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.to}
                      className={`block rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors ${
                        pathname === link.to ? "text-ink" : "text-ink-muted hover:text-ink"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="border-t border-line p-5">
                <Link
                  href="/contact"
                  className="btn-accent w-full justify-center"
                  id="nav-cta-mobile"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a consultation
                  <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
