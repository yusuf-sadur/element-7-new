import type { Metadata } from "next";
import AboutScrollExperience from "@/components/pages/AboutScrollExperience";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "About | Design & Build Studio — Element Seven",
  description: BRAND.description,
};

export default function AboutPage() {
  return <AboutScrollExperience />;
}
