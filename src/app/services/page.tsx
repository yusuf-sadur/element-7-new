import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesOverview from "@/components/home/ServicesOverview";
import ourServices from "@/assets/our Services.png";

export const metadata: Metadata = {
  title: "Services | Custom Saunas, Steam Rooms & Cold Plunge — Element 7",
  description:
    "Element 7 designs and builds custom saunas, infrared saunas, steam rooms and cold plunge systems for residential and commercial spaces in Melbourne.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PageHero
        image={ourServices.src}
        label="Services"
        title="Everything You Need for"
        titleAccent="Wellness"
        subtitle="Custom saunas, infrared, steam and cold plunge — designed and commissioned for your space."
        height="100vh"
      >
        <Link href="/contact" className="btn-gold" id="services-cta">
          Book Consultation
          <ArrowRight size={16} />
        </Link>
      </PageHero>

      <ServicesOverview showCatalogueFooter={false} />
    </div>
  );
}
