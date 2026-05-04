"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "@/assets/logo.jpeg";

import { Menu, X, ChevronDown, Mail, Phone } from "lucide-react";
import { usePathname } from "next/navigation";


const services = [
  { title: "Custom Saunas", slug: "custom-saunas" },
  { title: "Infrared Saunas", slug: "infrared-saunas" },
  { title: "Steam Rooms", slug: "steam-rooms" },
  { title: "Cold Plunge Systems", slug: "cold-plunge" },
  { title: "Contrast Therapy", slug: "contrast-therapy" },
  { title: "Recovery Rooms", slug: "recovery-rooms" },
  { title: "Outdoor Wellness", slug: "outdoor-wellness" },
  { title: "Commercial Spaces", slug: "commercial-wellness" },
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
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out bg-obsidian/95 backdrop-blur-xl border-b border-white/[0.06] ${
        isScrolled ? "py-0 shadow-lg shadow-black/20" : "py-0"
      }`}
    >
      {/* Main nav */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-24 relative">
          {/* Logo - Left */}
          <div className="z-10">
            <Link
              href="/"
              className="flex-shrink-0 group transition-opacity hover:opacity-90"
              aria-label="Element Seven — Home"
            >
              <Image src={logoSrc} alt="Element Seven" width={94} height={94} className="object-contain h-auto max-h-20" />
            </Link>
          </div>

          {/* Desktop nav links - Center */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-7">
            {navLinks.map((link) => {
              if (link.type === "dropdown") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button className="nav-link flex items-center gap-1 pb-1">
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          isServicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-obsidian border border-white/[0.08] shadow-2xl shadow-black/60 transition-all duration-200 ${
                        isServicesDropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <Link
                        href="/services"
                        className="block px-5 py-3.5 text-gold text-xs font-semibold tracking-widest uppercase hover:bg-gold/10 border-b border-white/[0.06] transition-colors"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        All Services
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block px-5 py-3 text-white/75 hover:bg-gold/5 hover:text-gold transition-colors text-sm border-b border-white/[0.04] last:border-b-0"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.to ?? "/"}
                  className={`nav-link pb-1 ${
                    pathname === link.to ? "text-gold after:w-full" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right: CTA button */}
          <div className="hidden lg:flex z-10">
            <Link
              href="/contact"
              className="btn-gold text-xs"
              id="nav-cta-desktop"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gold transition-colors z-10"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[800px]" : "max-h-0"
        } bg-obsidian border-t border-white/[0.06]`}
      >
        <div className="container-e7 py-6 space-y-1">
          {navLinks.map((link) => {
            if (link.type === "dropdown") {
              return (
                <div key={link.name}>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center justify-between w-full py-3 text-white/80 hover:text-gold transition-colors font-medium text-sm tracking-wider"
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isMobileServicesOpen ? "max-h-[400px] mt-1" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 space-y-1 border-l border-gold/20 ml-2">
                      <Link
                        href="/services"
                        className="block py-2 text-gold text-xs font-semibold tracking-widest uppercase"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        All Services
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block py-2 text-white/60 hover:text-gold transition-colors text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
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
                className={`block py-3 text-white/80 hover:text-gold transition-colors font-medium text-sm tracking-wider ${
                  pathname === link.to ? "text-gold" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4">
            <Link
              href="/contact"
              className="btn-gold w-full text-center justify-center text-xs"
              id="nav-cta-mobile"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
