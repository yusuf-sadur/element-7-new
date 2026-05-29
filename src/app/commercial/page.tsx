import type { Metadata } from "next";
import CommercialScrollExperience from "@/components/pages/CommercialScrollExperience";

export const metadata: Metadata = {
  title: "Commercial | Recovery Build Studio — Element Seven",
  description:
    "Commercial sauna, steam, and plunge construction for gyms, hotels, studios, and developers — designed and built across Australia.",
};

export default function CommercialPage() {
  return <CommercialScrollExperience />;
}
