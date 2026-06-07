"use client";

import Link from "next/link";
import type { StaticImageData } from "next/image";
import ConsultationCta from "@/components/ui/ConsultationCta";
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
    >
      <div className="hero-editorial__actions">
        <ConsultationCta id="service-hero-cta-primary" className="hero-editorial__cta" />
        <Link href="/services" className="hero-editorial__link" id="service-hero-cta-secondary">
          All spaces
        </Link>
      </div>
    </InteriorHero>
  );
}
