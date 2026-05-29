import type { Metadata } from "next";
import OurApproachScrollExperience from "@/components/pages/OurApproachScrollExperience";

export const metadata: Metadata = {
  title: "Our Approach | Design & Build — Element Seven",
  description:
    "How Element Seven designs and constructs saunas, steam rooms, plunge pools, and recovery environments — consultation through handover.",
};

export default function OurApproachPage() {
  return <OurApproachScrollExperience />;
}
