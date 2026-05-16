import HeroSection from "@/components/home/HeroSection";
import TheDifference from "@/components/home/TheDifference";
import ServicesOverview from "@/components/home/ServicesOverview";
import IdealClients from "@/components/home/IdealClients";
import ProcessSection from "@/components/home/ProcessSection";
import WellnessPhilosophy from "@/components/home/WellnessPhilosophy";
import MaterialsPhilosophy from "@/components/home/MaterialsPhilosophy";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Element 7 | Wellness & Recovery Architecture | Australia",
  description:
    "Luxury wellness design and construction — custom saunas, cold plunge, steam, hammam, and complete recovery environments. End-to-end, Australia-wide.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TheDifference />
      <ServicesOverview />
      <IdealClients />
      <ProcessSection />
      <WellnessPhilosophy />
      <MaterialsPhilosophy />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
