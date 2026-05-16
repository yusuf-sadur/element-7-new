"use client";



import InteriorHero from "@/components/ui/InteriorHero";

import type { HeroVariant } from "@/lib/hero-variants";



interface PageHeroProps {

  image: string;

  label: string;

  title: string;

  titleAccent?: string;

  subtitle?: string;

  compact?: boolean;

  children?: React.ReactNode;

  variant?: HeroVariant;

}



export default function PageHero({

  image,

  label,

  title,

  titleAccent,

  subtitle,

  compact,

  children,

  variant = "mist",

}: Readonly<PageHeroProps>) {

  return (

    <InteriorHero

      image={image}

      label={label}

      title={title}

      accent={titleAccent}

      subtitle={subtitle}

      compact={compact}

      variant={variant}

      imageAlt={`${title}${titleAccent ? ` ${titleAccent}` : ""} — Element 7`}

    >

      {children}

    </InteriorHero>

  );

}

