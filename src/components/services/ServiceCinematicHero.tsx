"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import ConsultationCta from "@/components/ui/ConsultationCta";

export interface ServiceCinematicHeroProps {
  image: string | StaticImageData;
  label: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  eyebrowSuffix?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  showSecondary?: boolean;
  compact?: boolean;
  children?: ReactNode;
}

export default function ServiceCinematicHero({
  image,
  label,
  title,
  titleAccent,
  subtitle,
  eyebrowSuffix = "Design & Build",
  primaryHref = "/contact",
  primaryLabel = "Book a consultation",
  secondaryHref = "/services",
  secondaryLabel = "All spaces",
  showSecondary = true,
  compact = false,
  children,
}: Readonly<ServiceCinematicHeroProps>) {
  const heightClass = compact
    ? "min-h-[72svh] md:min-h-[80svh]"
    : "min-h-[88svh] md:min-h-[92svh]";

  return (
    <section
      id="hero"
      className={`hero-home hero-home--editorial relative flex flex-col overflow-x-hidden bg-ink ${heightClass}`}
      aria-label={`${label} — Element 7`}
    >
      <div className="hero-home__media absolute z-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover object-[center_38%] md:object-[52%_center] lg:object-[58%_center]"
            sizes="100vw"
          />
        </div>
        <div className="hero-video-scrim hero-home-scrim absolute inset-0" />
      </div>

      <div className="hero-content-stage hero-content-stage--left hero-content-stage--flush container-e7 relative z-10 grid w-full min-h-0 flex-1 grid-cols-1 items-end pb-0 pt-[4.75rem] max-md:px-3 md:items-center md:pb-16 md:pt-[5.25rem] lg:grid-cols-12">
        <div className="hero-editorial hero-editorial--mobile-panel w-full lg:col-span-6 lg:max-w-[38rem] xl:col-span-6">
          <div className="hero-editorial__glass" aria-hidden />
          <div className="hero-editorial__content">
            <p className="hero-editorial__eyebrow mb-0">
              {label} · {eyebrowSuffix}
            </p>
            <h1 className="hero-editorial__title hero-editorial__title--service mt-4">
              {title}
              {titleAccent ? (
                <>
                  {" "}
                  <span className="font-hero font-light normal-case text-sage-light">
                    {titleAccent}
                  </span>
                </>
              ) : null}
            </h1>
            {subtitle ? (
              <p className="hero-editorial__lead mt-5 max-w-lg">{subtitle}</p>
            ) : null}
            {children ? (
              <div className="hero-editorial__actions">{children}</div>
            ) : (
              <div className="hero-editorial__actions">
                <ConsultationCta
                  href={primaryHref}
                  label={primaryLabel}
                  className="hero-editorial__cta"
                />
                {showSecondary ? (
                  <Link href={secondaryHref} className="hero-editorial__link">
                    {secondaryLabel}
                  </Link>
                ) : null}
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:col-span-6 lg:block" aria-hidden />
      </div>
    </section>
  );
}
