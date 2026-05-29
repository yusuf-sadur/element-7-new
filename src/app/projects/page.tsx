import type { Metadata } from "next";
import ProjectsScrollExperience from "@/components/pages/ProjectsScrollExperience";

export const metadata: Metadata = {
  title: "Projects | Portfolio — Element Seven",
  description:
    "Selected recovery architecture projects — saunas, steam, plunge, and complete suites designed and built across Australia.",
};

export default function ProjectsPage() {
  return <ProjectsScrollExperience />;
}
