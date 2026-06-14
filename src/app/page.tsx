import HomeScrollExperience from "@/components/home/HomeScrollExperience";
import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Element Seven | Custom Sauna, Steam Room & Plunge Pool Builders Melbourne",
  description: BRAND.description,
};

export default function HomePage() {
  return (
    <>
      <HomeScrollExperience />
    </>
  );
}
