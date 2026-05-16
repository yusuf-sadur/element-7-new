import HeroSection from "@/components/home/HeroSection";
import CorePillars from "@/components/home/CorePillars";
import ModalityGallery from "@/components/home/ModalityGallery";
import ProcessSection from "@/components/home/ProcessSection";
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
      <CorePillars />
      <ModalityGallery />
      <ProcessSection />
    </>
  );
}
