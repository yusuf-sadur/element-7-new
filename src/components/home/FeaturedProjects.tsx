"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Toorak Private Wellness Suite",
    category: "Residential",
    tags: ["Custom Sauna", "Steam Room", "Cold Plunge"],
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
    description:
      "A complete indoor wellness suite featuring a Finnish sauna, chromotherapy steam room, and precision cold plunge — seamlessly integrated into a luxury Melbourne home.",
  },
  {
    id: 2,
    title: "Mornington Peninsula Outdoor Sauna",
    category: "Residential",
    tags: ["Outdoor Sauna", "Contrast Therapy"],
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    description:
      "A bespoke outdoor barrel sauna and cold plunge pod nestled within a coastal landscape — designed for year-round use and architectural harmony.",
  },
  {
    id: 3,
    title: "South Yarra Boutique Gym Recovery",
    category: "Commercial",
    tags: ["Commercial", "Recovery Room", "Infrared"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    description:
      "A complete gym recovery wing featuring infrared sauna pods, a contrast therapy pool, and a guided recovery lounge for a premium South Yarra fitness studio.",
  },
  {
    id: 4,
    title: "Portsea Wellness Pavilion",
    category: "Residential",
    tags: ["Steam Room", "Cold Plunge", "Outdoor"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    description:
      "A stunning freestanding wellness pavilion with internal steam room and external cold plunge, overlooking Port Phillip Bay.",
  },
];

const categories = ["All", "Residential", "Commercial"];

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding section-glass overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="container-e7 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="scroll-reveal">
            <p className="section-label">Portfolio</p>
            <h2 className="font-display text-5xl md:text-7xl font-light text-sand leading-tight">
              Featured{" "}
              <span className="italic text-gold">Projects</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1 scroll-reveal" style={{ transitionDelay: "200ms" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-olive text-cream"
                    : "border border-sand/10 text-sand/40 hover:border-gold/30 hover:text-gold/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sand/[0.04]">
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-obsidian scroll-reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-bark/40 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="badge-gold text-[10px]">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-sand/40 tracking-wider uppercase border border-sand/[0.08] px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-xl font-light text-sand mb-3 group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sand/45 text-xs leading-relaxed mb-5">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.id}`}
                  className="text-gold/60 hover:text-gold text-xs font-semibold tracking-wider uppercase flex items-center gap-2 transition-all duration-300 group/link"
                >
                  View Project
                  <ArrowRight
                    size={14}
                    className="translate-x-0 group-hover/link:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 scroll-reveal" style={{ transitionDelay: "400ms" }}>
          <Link href="/projects" className="btn-outline" id="projects-view-all">
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
