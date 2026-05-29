"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ParallaxMedia from "@/components/home/parallax/ParallaxMedia";
import ourProjectsImg from "@/assets/Our Projects.png";
import residentialImg from "@/assets/Residential.png";
import wellnessStudioImg from "@/assets/Wellness Trends.png";
import heroSauna2Img from "@/assets/hero-sauna2.jpg";
import steamRoomsImg from "@/assets/steam rooms.png";

const projects = [
  {
    title: "Toorak Residence",
    type: "Sauna & Recovery Suite",
    image: ourProjectsImg,
  },
  {
    title: "Brighton Contrast Suite",
    type: "Sauna & Plunge Build",
    image: residentialImg,
  },
  {
    title: "Fitzroy Studio Fit-Out",
    type: "Commercial Fit-Out",
    image: wellnessStudioImg,
  },
  {
    title: "Mornington Outdoor Sauna",
    type: "Outdoor Sauna Build",
    image: heroSauna2Img,
  },
  {
    title: "Portsea Steam & Plunge",
    type: "Steam & Cold Plunge",
    image: steamRoomsImg,
  },
] as const;

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-stone">
      <div className="container-e7 section-padding">
        <Reveal
          variant="up"
          className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-light uppercase leading-[1.12] tracking-tight text-ink">
              Projects we&apos;ve delivered
            </h2>
            <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-ink-muted">
              Selected residential and commercial builds — saunas, steam, plunge, and
              recovery suites.
            </p>
          </div>
          <Link
            href="/projects"
            className="link-line shrink-0 text-[11px] text-ink-muted hover:text-bronze"
          >
            View all projects
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>

        <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-2 scrollbar-none sm:gap-4 md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0 md:pb-0">
          {projects.map((project, idx) => (
            <Reveal
              key={project.title}
              variant="up"
              delay={idx * 0.05}
              className="w-[72vw] shrink-0 md:w-auto"
            >
              <Link href="/projects" className="group block">
                <div className="cinematic-card relative aspect-[4/5] min-h-[240px] overflow-hidden sm:min-h-[260px] md:aspect-[5/6] md:min-h-0">
                  <div className="cinematic-card-media">
                    <ParallaxMedia speed={0.2} className="!absolute !inset-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 72vw, 20vw"
                        className="object-cover transition-transform duration-[1.6s] ease-smooth group-hover:scale-[1.04]"
                      />
                    </ParallaxMedia>
                  </div>
                  <div className="cinematic-card-gradient-bottom" aria-hidden />
                  <div className="cinematic-card-hover-dim" aria-hidden />
                  <div className="cinematic-card-caption absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-stone/90 transition-colors duration-500 group-hover:text-stone">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-[11px] font-light uppercase tracking-[0.12em] text-stone/55 transition-colors duration-500 group-hover:text-stone/85">
                      {project.type}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-stone/65 transition-colors duration-500 group-hover:text-bronze">
                      View project
                      <ArrowUpRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
