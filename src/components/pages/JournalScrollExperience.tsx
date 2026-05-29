"use client";

import PageHero from "@/components/PageHero";
import JournalGrid, { type JournalArticle } from "@/components/JournalGrid";
import PageScrollShell, { SnapSection } from "@/components/scroll/PageScrollShell";
import type { StaticImageData } from "next/image";

type JournalScrollExperienceProps = {
  image: string | StaticImageData;
  articles: JournalArticle[];
  basePath: "/blogs" | "/journal";
  title: string;
  titleAccent: string;
  subtitle: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function JournalScrollExperience({
  image,
  articles,
  basePath,
  title,
  titleAccent,
  subtitle,
  secondaryHref,
  secondaryLabel,
}: Readonly<JournalScrollExperienceProps>) {
  return (
    <PageScrollShell>
      <SnapSection>
        <PageHero
          image={image}
          label="Journal"
          title={title}
          titleAccent={titleAccent}
          subtitle={subtitle}
          secondaryHref={secondaryHref}
          secondaryLabel={secondaryLabel}
        />
      </SnapSection>
      <JournalGrid articles={articles} basePath={basePath} snapSections />
    </PageScrollShell>
  );
}
