"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import MobileCarouselTrack from "@/components/ui/MobileCarouselTrack";
import ParallaxMedia from "@/components/home/parallax/ParallaxMedia";

const articles = [
  {
    slug: "specifying-custom-saunas",
    title: "How to Specify a Custom Sauna for Your Project",
    date: "April 2025",
    image: "https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=800&q=80",
  },
  {
    slug: "steam-room-construction",
    title: "Steam Room Construction: What Architects Need to Know",
    date: "March 2025",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
  },
  {
    slug: "plunge-pool-build-guide",
    title: "Plunge Pool Build Guide — Systems & Specification",
    date: "February 2025",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    slug: "contrast-suite-design",
    title: "Designing a Contrast Therapy Suite for Residential Builds",
    date: "January 2025",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
  },
];

export default function JournalPreview() {
  return (
    <section id="journal" className="bg-warm-black">
      <div className="container-e7 section-padding">
        <Reveal variant="up" className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-light uppercase leading-[1.12] tracking-tight text-stone">
              Build knowledge
            </h2>
            <p className="mt-3 max-w-lg text-sm font-light text-stone/50">
              Specification, construction, and recovery architecture — notes from our studio.
            </p>
          </div>
          <Link
            href="/journal"
            className="link-line shrink-0 text-[11px] text-stone/55 after:bg-bronze hover:text-bronze"
          >
            View all articles
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>

        <MobileCarouselTrack className="md:grid md:grid-cols-4 md:gap-4 md:pb-0">
          {articles.map((article) => (
            <div key={article.slug} className="mobile-carousel-item">
              <Link href="/journal" className="group block">
                <div className="cinematic-card relative aspect-[16/10] overflow-hidden">
                  <ParallaxMedia speed={0.2}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 78vw, 25vw"
                      className="object-cover transition-transform duration-[1.6s] ease-smooth group-hover:scale-[1.04]"
                    />
                  </ParallaxMedia>
                  <div className="cinematic-overlay absolute inset-0" />
                </div>
                <div className="mt-4 pr-2">
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-concrete">
                    {article.date}
                  </span>
                  <h3 className="mt-2 font-display text-lg leading-snug text-stone transition-colors group-hover:text-bronze md:text-xl">
                    {article.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </MobileCarouselTrack>
      </div>
    </section>
  );
}
