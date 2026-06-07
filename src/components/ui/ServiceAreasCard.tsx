"use client";

import { BRAND, SERVICE_AREA_REGIONS } from "@/lib/brand";

type ServiceAreasCardProps = {
  className?: string;
};

export default function ServiceAreasCard({ className = "" }: Readonly<ServiceAreasCardProps>) {
  const suburbCount = SERVICE_AREA_REGIONS.reduce((total, { suburbs }) => total + suburbs.length, 0);

  return (
    <section
      className={`service-areas ${className}`.trim()}
      aria-label={BRAND.serviceAreasHeadline}
    >
      <div className="service-areas__header">
        <div>
          <p className="section-label !mb-2">Coverage</p>
          <h2 className="service-areas__title">{BRAND.serviceAreasHeadline}</h2>
          <p className="service-areas__subline">{BRAND.serviceAreasSubline}</p>
        </div>
        <p className="service-areas__meta">
          {SERVICE_AREA_REGIONS.length} regions · {suburbCount} suburbs · {BRAND.coverage}
        </p>
      </div>

      <ul className="service-areas__grid">
        {SERVICE_AREA_REGIONS.map(({ region, suburbs }) => (
          <li key={region} className="service-areas__region">
            <h3 className="service-areas__region-name">{region}</h3>
            <p className="service-areas__suburbs">{suburbs.join(" · ")}</p>
          </li>
        ))}
      </ul>

      <p className="service-areas__note">{BRAND.serviceAreasNote}</p>
    </section>
  );
}
