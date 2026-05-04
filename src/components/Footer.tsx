"use client";

import Link from "next/link";
import Image from "next/image";
import logoSrc from "@/assets/logo.jpeg";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

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
  { name: "Steam Rooms", href: "/services/steam-rooms" },
  { name: "Cold Plunge Systems", href: "/services/cold-plunge" },
  { name: "Contrast Therapy", href: "/services/contrast-therapy" },
  { name: "Recovery Rooms", href: "/services/recovery-rooms" },
  { name: "Outdoor Wellness", href: "/services/outdoor-wellness" },
  { name: "Commercial Wellness", href: "/services/commercial-wellness" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/[0.06] relative z-10">
      {/* Main content */}
      <div className="container-e7 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={logoSrc}
                alt="Element Seven — Engineered Environments for Human Performance"
                width={94}
                height={94}
                className="object-contain h-auto"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Melbourne&apos;s premier wellness and recovery company. We design and build
              bespoke sauna, steam, cold plunge, and contrast therapy environments
              for discerning residential and commercial clients.
            </p>
            <div className="flex gap-3">
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
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/40 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/50 hover:text-gold transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+611300000000"
                  className="flex items-start gap-3 text-white/50 hover:text-gold transition-colors group"
                >
                  <Phone
                    size={16}
                    className="flex-shrink-0 mt-0.5 group-hover:animate-pulse"
                  />
                  <div>
                    <div className="text-xs text-white/30 mb-0.5">Phone</div>
                    <div className="text-sm">1300 000 000</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@element7.com.au"
                  className="flex items-start gap-3 text-white/50 hover:text-gold transition-colors"
                >
                  <Mail size={16} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-white/30 mb-0.5">Email</div>
                    <div className="text-sm">hello@element7.com.au</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-white/30 mb-0.5">Location</div>
                  <div className="text-sm">Melbourne, VIC</div>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-gold w-full justify-center text-xs"
                id="footer-cta"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container-e7 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <div>© {year} Element Seven. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gold transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
