import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Wellness & Recovery Insights — Element 7",
  description:
    "Expert insights on contrast therapy, sauna benefits, cold plunge recovery, wellness design trends, and more from the Element 7 team.",
};

const articles = [
  {
    slug: "benefits-of-contrast-therapy",
    title: "The Science of Contrast Therapy: Why Hot-Cold Works",
    category: "Recovery Science",
    readTime: "6 min",
    date: "April 2025",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    excerpt: "Contrast therapy — alternating between heat and cold — triggers a cascade of physiological responses that accelerate recovery, reduce inflammation, and boost resilience. Here's what the research says.",
  },
  {
    slug: "sauna-vs-infrared-sauna",
    title: "Sauna vs Infrared Sauna: Which Is Right for You?",
    category: "Sauna Guide",
    readTime: "5 min",
    date: "March 2025",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    excerpt: "Traditional Finnish saunas and far-infrared saunas both deliver powerful wellness benefits — but through different mechanisms and at different temperatures. Understanding the distinction helps you choose wisely.",
  },
  {
    slug: "cold-plunge-recovery-benefits",
    title: "Cold Plunge Recovery: The Evidence-Based Case",
    category: "Recovery Science",
    readTime: "7 min",
    date: "February 2025",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    excerpt: "Cold water immersion is one of the most researched recovery modalities in sport science. From norepinephrine release to inflammation reduction, the evidence is compelling.",
  },
  {
    slug: "wellness-design-trends-2025",
    title: "Luxury Wellness Design Trends for 2025",
    category: "Design Trends",
    readTime: "4 min",
    date: "January 2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    excerpt: "Biophilic design, integrated contrast therapy, red light therapy rooms, and outdoor wellness pavilions are defining the premium wellness space landscape in 2025.",
  },
  {
    slug: "recovery-spaces-for-athletes",
    title: "Recovery Spaces for Elite Athletes: What They Need",
    category: "Performance",
    readTime: "5 min",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    excerpt: "Elite athletes are investing in private recovery environments as a competitive edge. Here's what a world-class home recovery suite looks like — and why it matters.",
  },
  {
    slug: "sauna-maintenance-tips",
    title: "How to Care for Your Sauna: An Expert's Guide",
    category: "Maintenance",
    readTime: "4 min",
    date: "November 2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    excerpt: "Proper maintenance extends the life of your sauna and ensures every session delivers optimal results. Element 7's experts share their essential care tips.",
  },
];

import PageHero from "@/components/PageHero";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PageHero
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85"
        label="Blogs"
        title="Insights &"
        titleAccent="Perspectives"
        subtitle="Wellness science, design thinking, and recovery culture — from the Element 7 team."
        height="100vh"
      />


      <section className="section-padding section-glass">
        <div className="container-e7 mb-12">
        <div className="group grid lg:grid-cols-2 gap-px bg-white/[0.05] scroll-reveal">
          <div className="relative h-72 lg:h-auto overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent lg:hidden" />
          </div>
          <div className="bg-obsidian p-10 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-gold text-[10px]">{articles[0].category}</span>
              <div className="flex items-center gap-1.5 text-white/30 text-xs">
                <Clock size={11} />
                {articles[0].readTime} read
              </div>
              <span className="text-white/25 text-xs">{articles[0].date}</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white mb-6 leading-tight group-hover:text-gold transition-colors duration-500">
              {articles[0].title}
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8">{articles[0].excerpt}</p>
            <Link
              href={`/blogs/${articles[0].slug}`}
              className="text-gold/60 hover:text-gold text-xs font-semibold tracking-wider uppercase flex items-center gap-2 transition-all duration-300"
              id={`blogs-featured-cta`}
            >
              Read Article
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Article grid */}
      <div className="container-e7 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
          {articles.slice(1).map((article, idx) => (
            <Link
              key={article.slug}
              href={`/blogs/${article.slug}`}
              id={`blogs-article-${idx}`}
              className="group card-dark transition-all duration-500 scroll-reveal"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge-gold text-[10px]">{article.category}</span>
                  <div className="flex items-center gap-1 text-white/30 text-xs">
                    <Clock size={10} />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="font-display text-lg font-light text-white mb-2 leading-tight group-hover:text-gold transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed line-clamp-3">{article.excerpt}</p>
                <div className="mt-5 text-gold/40 group-hover:text-gold text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-all duration-300">
                  Read More
                  <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </section>
    </div>
  );
}
