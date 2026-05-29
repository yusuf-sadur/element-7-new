"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { StaticImageData } from "next/image";
import InteriorHero from "@/components/ui/InteriorHero";

interface ServicePageHeroProps {
  image: string | StaticImageData;
  label: string;
  title: string;
  tagline: string;
  lead: string;
}

export default function ServicePageHero({
  image,
  label,
  title,
  tagline,
  lead,
}: Readonly<ServicePageHeroProps>) {
  return (
    <InteriorHero
      image={image}
      label={label}
      title={title}
      accent={tagline}
      subtitle={lead}
      variant="mist"
      imageAlt={`${title} — ${tagline}`}
      eyebrow={`${label} · Design & Construction`}
      secondaryLink={{ href: "/services", label: "All spaces" }}
    >
      <Link href="/contact" className="btn-primary hero-btn group" id="service-hero-cta-primary">
        Book a consultation
        <ArrowUpRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
      <Link
        href="/services"
        className="link-line hidden px-0.5 text-[11px] after:bg-bronze-light sm:inline-flex"
        id="service-hero-cta-secondary"
      >
        All spaces
        <ArrowUpRight size={14} />
      </Link>
    </InteriorHero>
  );
}
