"use client";

import type { ReactNode } from "react";

import Reveal from "@/components/ui/Reveal";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  animate?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className = "",
  animate = true,
}: Readonly<SectionHeaderProps>) {
  const centered = align === "center";
  const headerClass = `${centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"} ${className}`;

  const inner = (
    <>
      <p className={`section-label ${centered ? "justify-center" : ""}`}>{label}</p>
      <h2 className={`display-lg text-balance ${centered ? "mx-auto" : ""}`}>{title}</h2>
      {description && (
        <p
          className={`mt-5 text-base font-light leading-relaxed text-ink-muted ${centered ? "mx-auto max-w-lg" : "max-w-md"}`}
        >
          {description}
        </p>
      )}
      <div className={`divider-gold ${centered ? "mx-auto" : ""}`} />
    </>
  );

  if (!animate) {
    return <header className={headerClass}>{inner}</header>;
  }

  return (
    <Reveal variant="blur" as="section" className={headerClass}>
      {inner}
    </Reveal>
  );
}
