"use client";

import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SnapSection } from "@/components/scroll/PageScrollShell";

export type JournalArticle = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string | StaticImageData;
  excerpt: string;
};

interface JournalGridProps {
  articles: JournalArticle[];
  basePath: "/blogs" | "/journal";
  snapSections?: boolean;
}

function SectionWrap({
  snap,
  children,
}: {
  snap?: boolean;
  children: ReactNode;
}) {
  if (snap) return <SnapSection>{children}</SnapSection>;
  return <>{children}</>;
}

export default function JournalGrid({
  articles,
  basePath,
  snapSections,
}: Readonly<JournalGridProps>) {
  const [featured, ...rest] = articles;

  return (
    <>
      <SectionWrap snap={snapSections}>
      <section className="section-padding bg-cream">
        <div className="container-e7">
          <Reveal variant="scale">
            <Link
              href={`${basePath}/${featured.slug}`}
              className="group grid overflow-hidden rounded-[2rem] border border-line/80 bg-white shadow-card lg:grid-cols-2 lg:rounded-[2.5rem]"
            >
              <div className="relative min-h-[280px] lg:min-h-[420px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-10 md:p-14">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="badge-gold">{featured.category}</span>
                  <span className="flex items-center gap-1.5 font-sans text-xs text-sand-faint">
                    <Clock size={12} />
                    {featured.readTime}
                  </span>
                  <span className="font-sans text-xs text-sand-faint">{featured.date}</span>
                </div>
                <h2 className="mt-6 font-display text-3xl leading-tight text-ink transition-colors group-hover:text-olive md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base font-light leading-relaxed text-ink-muted">
                  {featured.excerpt}
                </p>
                <span className="link-line mt-8">Read article</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
      </SectionWrap>

      <SectionWrap snap={snapSections}>
      <section className="section-padding !pt-0 bg-white">
        <div className="container-e7">
          <Reveal variant="up" className="mb-10">
            <p className="section-label">Archive</p>
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              More <span className="text-olive">reading.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, idx) => (
              <Reveal key={article.slug} variant="up" delay={idx * 0.08}>
                <Link
                  href={`${basePath}/${article.slug}`}
                  className="group card-modern !p-0 overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3">
                      <span className="badge-gold">{article.category}</span>
                      <span className="flex items-center gap-1 font-sans text-xs text-sand-faint">
                        <Clock size={11} />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl text-ink transition-colors group-hover:text-olive">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm font-light text-ink-muted">
                      {article.excerpt}
                    </p>
                    <span className="mt-5 inline-block font-sans text-[11px] uppercase tracking-nav text-olive">
                      Read more →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      </SectionWrap>
    </>
  );
}
