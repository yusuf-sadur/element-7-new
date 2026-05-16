"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

import customSaunaImg from "@/assets/hero-sauna.jpg";
import infraredSaunasImg from "@/assets/infrared Saunas.png";
import steamRoomsImg from "@/assets/steam rooms.png";
import coldPlungeImg from "@/assets/cold plunge.png";

const services = [
  {
    image: customSaunaImg,
    label: "Dry heat",
    title: "Custom Saunas",
    description: "Architecture-led dry heat — timber, lighting, and airflow tuned to your rituals.",
    href: "/services/custom-saunas",
  },
  {
    image: infraredSaunasImg,
    label: "Heat therapy",
    title: "Infrared Saunas",
    description: "Gentle deep warmth for everyday recovery and nervous system regulation.",
    href: "/services/infrared-saunas",
  },
  {
    image: steamRoomsImg,
    label: "Hammam",
    title: "Steam & Hammam",
    description: "Steam culture refined — moisture control, stone, and calm hydrothermal design.",
    href: "/services/steam-rooms",
  },
  {
    image: coldPlungeImg,
    label: "Cold therapy",
    title: "Cold Plunge",
    description: "Integrated ice baths and contrast therapy — precision chilled, architecturally composed.",
    href: "/services/cold-plunge",
  },
];

type ServicesOverviewProps = {
  showCatalogueFooter?: boolean;
};

export default function ServicesOverview({
  showCatalogueFooter = true,
}: Readonly<ServicesOverviewProps>) {
  return (
    <section id="services-overview" className="section-padding relative overflow-hidden bg-white">
      <div className="bg-mesh pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      <div className="container-e7 relative">
        <div className="mb-14 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            label="What we create"
            title={
              <>
                Wellness ecosystems,{" "}
                <span className="italic text-olive">not products alone.</span>
              </>
            }
          />
          <Reveal
            variant="fade"
            delay={0.12}
            className="max-w-md text-base font-light leading-relaxed text-ink-muted lg:text-right"
          >
            Custom saunas, cold plunge, steam & hammam, recovery lounges, and complete fit-outs
            — indoor, outdoor, residential, and commercial.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-7 lg:grid-cols-2 lg:gap-8">
          {services.map((service, idx) => {
            const n = String(idx + 1).padStart(2, "0");
            return (
              <Reveal
                key={service.href}
                variant={idx % 2 === 0 ? "left" : "right"}
                delay={idx * 0.08}
              >
                <Link href={service.href} className="service-card group">
                  <div className="service-card-media">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      priority={idx < 2}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.25s] ease-smooth group-hover:scale-[1.04]"
                    />
                    <div className="service-card-media-scrim" aria-hidden />
                    <span className="service-card-index" aria-hidden>
                      {n}
                    </span>
                    <span className="service-card-label">{service.label}</span>
                  </div>
                  <div className="service-card-body">
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.description}</p>
                    <span className="service-card-cta">
                      <span>Explore modality</span>
                      <span className="service-card-cta-icon" aria-hidden>
                        <ArrowUpRight size={15} strokeWidth={1.75} />
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {showCatalogueFooter && (
          <Reveal variant="up" delay={0.2} className="mt-16 border-t border-line/80 pt-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-lg">
                <p className="section-label">Full catalogue</p>
                <p className="text-lg font-light leading-snug text-ink md:text-xl">
                  Recovery lounges, outdoor wellness, and commercial fit-outs — end to end.
                </p>
              </div>
              <Link href="/services" className="btn-primary shrink-0" id="services-overview-all">
                View all services
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
