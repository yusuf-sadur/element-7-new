"use client";

import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import ServiceCinematicHero from "@/components/services/ServiceCinematicHero";
import type { HeroVariant } from "@/lib/hero-variants";

interface PageHeroProps {
  image: string | StaticImageData;
  label: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  compact?: boolean;
  children?: ReactNode;
  variant?: HeroVariant;
  eyebrowSuffix?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  showSecondary?: boolean;
}

export default function PageHero({
  image,
  label,
  title,
  titleAccent,
  subtitle,
  compact,
  children,
  variant,
  eyebrowSuffix,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  showSecondary,
}: Readonly<PageHeroProps>) {
  const resolvedEyebrow =
    eyebrowSuffix ?? (variant === "invitation" ? "Consultation" : "Design & Build");

  return (
    <ServiceCinematicHero
      image={image}
      label={label}
      title={title}
      titleAccent={titleAccent}
      subtitle={subtitle}
      compact={compact}
      eyebrowSuffix={resolvedEyebrow}
      primaryHref={primaryHref}
      primaryLabel={primaryLabel}
      secondaryHref={secondaryHref}
      secondaryLabel={secondaryLabel}
      showSecondary={showSecondary}
    >
      {children}
    </ServiceCinematicHero>
  );
}
