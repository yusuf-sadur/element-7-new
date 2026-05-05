import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import TheDifference from "@/components/home/TheDifference";
import ProcessSection from "@/components/home/ProcessSection";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Element 7 | Bespoke Wellness & Recovery Environments Melbourne",
  description:
    "Melbourne-based specialists in custom saunas, steam rooms, cold plunges, and complete wellness environments. Book your free consultation today.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <TheDifference />
      <ProcessSection />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
