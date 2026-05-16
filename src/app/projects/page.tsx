"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import Residential from "@/assets/Residential.png";
import wellnessStudio from "@/assets/Wellness Trends.png";
import ourProjects from "@/assets/Our Projects.png";

const projects = [
  {
    id: 1,
    title: "Toorak Private Wellness Suite",
    category: "Residential",
    type: "Sauna",
    tags: ["Custom Sauna", "Steam Room", "Cold Plunge"],
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
    description: "Indoor wellness suite — Finnish sauna, steam, and cold plunge integrated into a private residence.",
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
    description: "Commercial recovery wing — infrared, contrast therapy, and recovery lounge.",
    suburb: "South Yarra, VIC",
  },
  {
    id: 4,
    title: "Portsea Wellness Pavilion",
    category: "Residential",
    type: "Steam",
    tags: ["Steam Room", "Cold Plunge", "Outdoor"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    description: "Freestanding wellness pavilion — steam within, cold plunge without, bay views.",
    suburb: "Portsea, VIC",
  },
  {
    id: 5,
    title: "Brighton Contrast Therapy Suite",
    category: "Residential",
    type: "Sauna",
    tags: ["Custom Sauna", "Contrast Therapy", "Recovery"],
    image: Residential.src,
    description: "Contrast therapy suite — custom sauna, cold plunge, and private lounge.",
    suburb: "Brighton, VIC",
  },
  {
    id: 6,
    title: "Fitzroy Wellness Studio Fit-Out",
    category: "Commercial",
    type: "Recovery",
    tags: ["Commercial", "Steam Room", "Sauna"],
    image: wellnessStudio.src,
    description: "Studio fit-out — infrared sauna, steam, and cold therapy in one calm space.",
    suburb: "Fitzroy, VIC",
  },
];

const categories = ["All", "Residential", "Commercial"] as const;
const types = ["All", "Sauna", "Steam", "Recovery", "Outdoor"] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [activeType, setActiveType] = useState<(typeof types)[number]>("All");

  const filtered = projects.filter((p) => {
    const catMatch = activeCategory === "All" || p.category === activeCategory;
    const typeMatch = activeType === "All" || p.type === activeType;
    return catMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-cream">
      <PageHero
        image={ourProjects.src}
        label="Portfolio"
        title="Selected"
        titleAccent="work."
        subtitle="Recovery architecture — residential and commercial environments across Australia."
      />

      <section className="section-padding bg-white">
        <div className="container-e7">
          <Reveal variant="up" className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2.5 font-sans text-[11px] uppercase tracking-nav transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-olive text-cream shadow-soft"
                      : "border border-line bg-white text-ink-muted hover:border-olive/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              {types.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setActiveType(type)}
                  className={`rounded-full px-4 py-2 font-sans text-[10px] uppercase tracking-nav transition-all duration-300 ${
                    activeType === type
                      ? "border border-olive bg-cream-warm text-olive"
                      : "border border-line text-sand-faint hover:text-ink-muted"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </Reveal>

          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-20 text-center text-ink-muted"
              >
                No projects match the selected filters.
              </motion.p>
            ) : (
              <motion.div
                key={`${activeCategory}-${activeType}`}
                layout
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {filtered.map((project, idx) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="group card-modern !p-0 overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
<div className="absolute inset-0 bg-image-overlay-soft" />
                      <div className="absolute left-4 top-4 flex gap-2">
                        <span className="badge-gold !bg-white/90">{project.category}</span>
                      </div>
                    </div>
<div className="p-7">
                      <h3 className="font-display text-xl text-ink transition-colors group-hover:text-olive">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-nav text-sand-faint">{project.suburb}</p>
                      <p className="mt-3 line-clamp-2 text-sm font-light text-ink-muted">{project.description}</p>
                      <span className="mt-5 inline-flex items-center gap-1 font-sans text-[11px] uppercase tracking-nav text-olive">
                        View project <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
