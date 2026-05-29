import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import ServiceDetailScrollExperience from "@/components/services/ServiceDetailScrollExperience";
import { LEGACY_SPACE_SLUGS, SPACES_BY_SLUG } from "@/lib/brand";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: Readonly<PageProps>): Promise<Metadata> {
  const resolvedSlug = LEGACY_SPACE_SLUGS[params.slug] ?? params.slug;
  const space = SPACES_BY_SLUG[resolvedSlug as keyof typeof SPACES_BY_SLUG];
  if (!space) return { title: "Space Not Found — Element Seven" };
  return {
    title: `${space.title} | Design & Build — Element Seven`,
    description: space.description,
  };
}

export async function generateStaticParams() {
  return [
    ...Object.keys(SPACES_BY_SLUG).map((slug) => ({ slug })),
    ...Object.keys(LEGACY_SPACE_SLUGS).map((slug) => ({ slug })),
  ];
}

export default function SpaceDetailPage({ params }: Readonly<PageProps>) {
  const legacySlug = LEGACY_SPACE_SLUGS[params.slug];
  if (legacySlug) {
    redirect(`/services/${legacySlug}`);
  }

  const space = SPACES_BY_SLUG[params.slug as keyof typeof SPACES_BY_SLUG];
  if (!space) notFound();

  return <ServiceDetailScrollExperience space={space} />;
}
