import type { Metadata } from "next";
import AboutScrollExperience from "@/components/pages/AboutScrollExperience";

export const metadata: Metadata = {
  title: "About | Element Seven",
  description:
    "Element Seven is a Melbourne-based builder of custom saunas, steam rooms, plunge pools and recovery suites — built with natural, non-toxic materials as standard. Licensed trades, fixed-scope contracts, Australia-wide.",
};

export default function AboutPage() {
  return <AboutScrollExperience />;
}
