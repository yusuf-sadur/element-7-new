import type { Metadata } from "next";
import ResidentialScrollExperience from "@/components/pages/ResidentialScrollExperience";

export const metadata: Metadata = {
  title: "Residential | Sauna & Recovery Builds — Element Seven",
  description:
    "Custom home sauna, steam, and plunge construction — recovery suites designed and built for residential properties across Australia.",
};

export default function ResidentialPage() {
  return <ResidentialScrollExperience />;
}
