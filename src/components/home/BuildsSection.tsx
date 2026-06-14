"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/ui/RevealStagger";
import { SPACES, type SpaceSlug } from "@/lib/brand";

const HOME_SLUGS: SpaceSlug[] = [
  "traditional-dry-sauna",
  "infrared-sauna",
  "hybrid-sauna",
  "hammam-steam",
  "stainless-steel-plunge",
  "recovery-pools",
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function BuildsSection() {
  const items = HOME_SLUGS.map((slug) => SPACES.find((s) => s.slug === slug)!);

  return (
    <section id="services" className="builds-ref">
      <div className="builds-ref__wrap">
        <Reveal variant="up" className="builds-ref__head">
          <p className="builds-ref__tag">What we build</p>
          <h2 className="builds-ref__title">Six builds. Designed for how you recover.</h2>
          <p className="builds-ref__intro">
            Saunas, steam rooms, plunge pools, and complete recovery suites — constructed on-site by
            our own trades, for residential and commercial properties. Natural, non-toxic materials
            as standard on every build.
          </p>
        </Reveal>

        <RevealStagger className="builds-ref__grid" stagger={0.08} delayChildren={0.06}>
          {items.map((space, idx) => {
            const numLabel = `${String(idx + 1).padStart(2, "0")} / ${space.shortTitle}`;

            return (
              <RevealStaggerItem key={space.slug} as="motion.article" className="builds-ref__card">
                <div className="builds-ref__img">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw"
                    className="builds-ref__img-el"
                    priority={idx < 3}
                  />
                </div>
                <div className="builds-ref__body">
                  <span className="builds-ref__num">{numLabel}</span>
                  <h3 className="builds-ref__name">{space.title}</h3>
                  <p className="builds-ref__desc">{space.description}</p>
                  <div className="builds-ref__spec">
                    {space.specChips.map((chip) => (
                      <span key={chip} className="builds-ref__chip">
                        {chip}
                      </span>
                    ))}
                  </div>
                  <Link href={`/services/${space.slug}`} className="builds-ref__link">
                    View build spec
                    <ArrowIcon />
                  </Link>
                </div>
              </RevealStaggerItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
