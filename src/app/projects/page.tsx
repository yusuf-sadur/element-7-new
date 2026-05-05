"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

const projects = [
  {
    id: 1,
    title: "Toorak Private Wellness Suite",
    category: "Residential",
    type: "Sauna",
    tags: ["Custom Sauna", "Steam Room", "Cold Plunge"],
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
    description: "A complete indoor wellness suite featuring a Finnish sauna, chromotherapy steam room, and precision cold plunge — seamlessly integrated into a luxury Melbourne home.",
    suburb: "Toorak, VIC",
  },
  {
    id: 2,
    title: "Mornington Peninsula Outdoor Sauna",
    category: "Residential",
    type: "Outdoor",
    tags: ["Outdoor Sauna", "Contrast Therapy"],
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    description: "A bespoke outdoor barrel sauna and cold plunge pod nestled within a coastal landscape.",
    suburb: "Mornington Peninsula, VIC",
  },
  {
    id: 3,
    title: "South Yarra Boutique Gym Recovery",
    category: "Commercial",
    type: "Recovery",
    tags: ["Commercial", "Recovery Room", "Infrared"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    description: "A complete gym recovery wing featuring infrared sauna pods, a contrast therapy pool, and a guided recovery lounge.",
    suburb: "South Yarra, VIC",
  },
  {
    id: 4,
    title: "Portsea Wellness Pavilion",
    category: "Residential",
    type: "Steam",
    tags: ["Steam Room", "Cold Plunge", "Outdoor"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    description: "A stunning freestanding wellness pavilion with internal steam room and external cold plunge, overlooking Port Phillip Bay.",
    suburb: "Portsea, VIC",
  },
  {
    id: 5,
    title: "Brighton Contrast Therapy Suite",
    category: "Residential",
    type: "Sauna",
    tags: ["Custom Sauna", "Contrast Therapy", "Recovery"],
    image: "https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=800&q=80",
    description: "A complete contrast therapy suite with custom sauna, cold plunge tub, and private relaxation lounge.",
    suburb: "Brighton, VIC",
  },
  {
    id: 6,
    title: "Fitzroy Wellness Studio Fit-Out",
    category: "Commercial",
    type: "Recovery",
    tags: ["Commercial", "Steam Room", "Sauna"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "A boutique wellness studio fit-out including a 3-person infrared sauna, private steam room, and cold shower station.",
    suburb: "Fitzroy, VIC",
  },
];

const categories = ["All", "Residential", "Commercial"];
const types = ["All", "Sauna", "Steam", "Recovery", "Outdoor"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeType, setActiveType] = useState("All");

  const filtered = projects.filter((p) => {
    const catMatch = activeCategory === "All" || p.category === activeCategory;
    const typeMatch = activeType === "All" || p.type === activeType;
    return catMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-transparent">
      <PageHero
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
        label="Portfolio"
        title="Our"
        titleAccent="Projects"
        subtitle="A curated selection of bespoke wellness environments we've designed and built across Melbourne."
        height="100vh"
      />

      <section className="section-padding section-glass">
        <div className="container-e7 mb-10">
        <div className="flex flex-wrap gap-6">
          <div className="flex gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gold text-black"
                    : "border border-white/10 text-white/40 hover:border-gold/30 hover:text-gold/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex gap-1">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  activeType === type
                    ? "bg-white/10 text-white border border-white/20"
                    : "border border-white/[0.06] text-white/30 hover:text-white/60"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container-e7 pb-20">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-white/30">
            No projects match the selected filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
            {filtered.map((project, idx) => (
              <div
                key={project.id}
                className="group relative overflow-hidden bg-obsidian scroll-reveal"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="badge-gold text-[10px]">{project.category}</span>
                    <span className="text-[10px] border border-white/20 text-white/60 px-2 py-1">{project.type}</span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] text-white/35 tracking-wider uppercase border border-white/[0.07] px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-lg font-light text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/35 text-xs mb-1">{project.suburb}</p>
                  <p className="text-white/45 text-xs leading-relaxed mb-5 line-clamp-2">{project.description}</p>
                  <div className="text-gold/50 hover:text-gold text-xs font-semibold tracking-wider uppercase flex items-center gap-2 transition-all duration-300 group/link cursor-pointer">
                    View Project
                    <ArrowRight size={12} className="translate-x-0 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
      </section>
    </div>
  );
}
