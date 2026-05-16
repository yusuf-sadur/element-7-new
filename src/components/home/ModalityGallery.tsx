"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import customSaunaImg from "@/assets/hero-sauna.jpg";
import infraredSaunasImg from "@/assets/infrared Saunas.png";
import steamRoomsImg from "@/assets/steam rooms.png";
import coldPlungeImg from "@/assets/cold plunge.png";
import Reveal from "@/components/ui/Reveal";

const modalities = [
  {
    index: "01",
    title: "Custom saunas",
    subtitle: "Timber · dry heat",
    href: "/services/custom-saunas",
    image: customSaunaImg,
    span: "lg:col-span-6 lg:row-span-2",
    tall: true,
  },
  {
    index: "02",
    title: "Infrared saunas",
    subtitle: "Heat · deep warmth",
    href: "/services/infrared-saunas",
    image: infraredSaunasImg,
    span: "lg:col-span-6",
    tall: false,
  },
  {
    index: "03",
    title: "Steam & hammam",
    subtitle: "Stone · moisture",
    href: "/services/steam-rooms",
    image: steamRoomsImg,
    span: "lg:col-span-6",
    tall: false,
  },
  {
    index: "04",
    title: "Cold plunge",
    subtitle: "Concrete · contrast",
    href: "/services/cold-plunge",
    image: coldPlungeImg,
    span: "lg:col-span-12",
    tall: false,
  },
];

export default function ModalityGallery() {
  return (
    <section id="modalities" className="bg-cream-warm">
      <div className="container-e7 section-padding">
        <Reveal variant="blur" className="mb-14 md:mb-20">
          <p className="section-label">What we create</p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="display-lg max-w-2xl">
              Sauna. Infrared. Steam.{" "}
              <span className="italic text-olive">Plunge.</span>
            </h2>
            <p className="max-w-sm text-base font-light leading-relaxed text-ink-muted">
              Architectural sanctuaries in timber, marble, and concrete — composed
              for ritual and recovery.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {modalities.map((item, idx) => (
            <Reveal
              key={item.href}
              variant={idx === 0 ? "scale" : "up"}
              delay={idx * 0.1}
              className={item.span}
            >
              <Link
                href={item.href}
                className={`image-card group block h-full ${item.tall ? "min-h-[420px] lg:min-h-[640px]" : "min-h-[280px] lg:min-h-[300px]"}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.4s] ease-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-image-overlay transition-opacity duration-500 group-hover:opacity-95" />

                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                  <span className="font-sans text-[11px] font-medium uppercase tracking-label text-cream/70">
                    {item.index} — {item.subtitle}
                  </span>
                  <h3 className="mt-3 font-display text-3xl text-cream md:text-4xl lg:text-[2.75rem]">
                    {item.title}
                  </h3>
                  <span className="mt-6 inline-flex items-center gap-2 font-sans text-[12px] font-medium uppercase tracking-nav text-cream/80 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
                    View project
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
