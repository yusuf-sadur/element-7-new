import HomeScrollExperience from "@/components/home/HomeScrollExperience";
import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Element Seven | Recovery Architecture | Australia",
  description: BRAND.description,
};

export default function HomePage() {
  return (
    <>
      <HomeScrollExperience />
    </>
  );
}
