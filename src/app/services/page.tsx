import type { Metadata } from "next";
import ServicesScrollExperience from "@/components/services/ServicesScrollExperience";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Spaces | Design & Build — Element Seven",
  description: BRAND.description,
};

export default function SpacesPage() {
  return <ServicesScrollExperience />;
}
