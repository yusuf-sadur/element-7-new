import type { Metadata } from "next";
import JournalScrollExperience from "@/components/pages/JournalScrollExperience";
import type { JournalArticle } from "@/components/JournalGrid";
import Journal from "@/assets/hero-sauna2.jpg";
import { MATERIAL_IMAGES } from "@/lib/material-images";

export const metadata: Metadata = {
  title: "Journal | Build Knowledge — Element Seven",
  description:
    "Notes on sauna construction, steam room specification, plunge pool builds, and recovery architecture — from Element Seven.",
};

const articles: JournalArticle[] = [
  { slug: "specifying-custom-saunas", title: "How to Specify a Custom Sauna for Your Project", category: "Specification", readTime: "6 min", date: "April 2025", image: MATERIAL_IMAGES.detailing, excerpt: "Ventilation, heater sizing, timber specification, and electrical requirements — what to resolve before construction begins." },
  { slug: "steam-room-construction", title: "Steam Room Construction: What Architects Need to Know", category: "Construction", readTime: "5 min", date: "March 2025", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80", excerpt: "Waterproofing, generator sizing, fall ratios, and ventilation — the technical differences in hydrothermal construction." },
  { slug: "plunge-pool-build-guide", title: "Plunge Pool Build Guide — Systems & Specification", category: "Build Guide", readTime: "7 min", date: "February 2025", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", excerpt: "Stainless fabrication, chilling plant, filtration, and commissioning — how plunge pools are designed and installed on site." },
  { slug: "contrast-suite-design", title: "Designing a Contrast Therapy Suite for Residential Builds", category: "Architecture", readTime: "6 min", date: "January 2025", image: "https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=800&q=80", excerpt: "Coordinating sauna, plunge, and services in one recovery suite — layout, trades, and build sequencing." },
  { slug: "sauna-ventilation-guide", title: "Sauna Ventilation: Engineering for Performance and Longevity", category: "Technical", readTime: "5 min", date: "December 2024", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", excerpt: "Why ventilation design matters in sauna construction — moisture management, air exchange, and timber preservation." },
  { slug: "timber-specification-saunas", title: "Timber Specification for Architectural Sauna Builds", category: "Materials", readTime: "4 min", date: "November 2024", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", excerpt: "Cedar, thermo timber, and bench detailing — material selection for builds that perform for decades." },
];

export default function JournalPage() {
  return (
    <JournalScrollExperience
      image={Journal}
      articles={articles}
      basePath="/journal"
      title="Build"
      titleAccent="knowledge."
      subtitle="Construction notes, specification guidance, and recovery architecture — from our studio."
      secondaryHref="/our-approach"
      secondaryLabel="Our approach"
    />
  );
}
