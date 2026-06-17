import type { Metadata } from "next";
import JournalScrollExperience from "@/components/pages/JournalScrollExperience";
import type { JournalArticle } from "@/components/JournalGrid";
import heroSauna3Img from "@/assets/hero-sauna3.jpg";

export const metadata: Metadata = {
  title: "Blog | Wellness & Recovery — Element 7",
  description:
    "Editorial notes on recovery architecture, heat therapy, cold plunge, and wellness design — from Element 7.",
};

const articles: JournalArticle[] = [
  { slug: "benefits-of-contrast-therapy", title: "The Science of Contrast Therapy: Why Hot-Cold Works", category: "Recovery Science", readTime: "6 min", date: "April 2025", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80", excerpt: "Heat and cold, alternated with intention — how contrast therapy supports recovery, circulation, and resilience." },
  { slug: "sauna-vs-infrared-sauna", title: "Sauna vs Infrared Sauna: Which Is Right for You?", category: "Sauna Guide", readTime: "5 min", date: "March 2025", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", excerpt: "Dry sauna and infrared — two heat therapy paths, different temperatures, different rituals." },
  { slug: "cold-plunge-recovery-benefits", title: "Cold Plunge Recovery: The Evidence-Based Case", category: "Recovery Science", readTime: "7 min", date: "February 2025", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", excerpt: "Cold plunge as recovery infrastructure — what the evidence suggests, and how to design for daily use." },
  { slug: "wellness-design-trends-2025", title: "Luxury Wellness Design Trends for 2025", category: "Design Trends", readTime: "4 min", date: "January 2025", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", excerpt: "Earth-tone palettes, outdoor pavilions, and integrated contrast — the quiet direction of luxury wellness design." },
  { slug: "recovery-spaces-for-athletes", title: "Recovery Spaces for Elite Athletes: What They Need", category: "Performance", readTime: "5 min", date: "December 2024", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", excerpt: "Private recovery suites for high performers — what belongs in a world-class home environment." },
  { slug: "sauna-maintenance-tips", title: "How to Care for Your Sauna: An Expert's Guide", category: "Maintenance", readTime: "4 min", date: "November 2024", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", excerpt: "Care and longevity for timber, heaters, and ventilation — keeping your sauna performing for decades." },
];

export default function BlogPage() {
  return (
    <JournalScrollExperience
      image={heroSauna3Img}
      articles={articles}
      basePath="/blog"
      title="Insights &"
      titleAccent="perspectives."
      subtitle="Recovery science, design thinking, and wellness culture — quietly considered."
      secondaryHref="/journal"
      secondaryLabel="Build knowledge"
    />
  );
}
