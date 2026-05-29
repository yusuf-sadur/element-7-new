import type { Metadata } from "next";
import ContactScrollExperience from "@/components/pages/ContactScrollExperience";

export const metadata: Metadata = {
  title: "Contact | Book a Consultation — Element Seven",
  description:
    "Begin a consultation with Element Seven. Architectural wellness environments — designed and built across Australia.",
};

export default function ContactPage() {
  return <ContactScrollExperience />;
}
