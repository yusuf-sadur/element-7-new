"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/ui/RevealStagger";
import { MATERIALS_SPEC_CREDENTIALS, MATERIALS_SPEC_ROWS } from "@/lib/brand";

const SPEC_IMAGE =
  "https://images.unsplash.com/photo-1741601272844-05a3677463f3?q=80&w=1200&auto=format&fit=crop";

const CREDENTIAL_ICONS = [
  <svg key="builders" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>,
  <svg key="ncc" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
  <svg key="voc" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="2" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
] as const;

export default function MaterialsSpecSection() {
  return (
    <section id="materials-spec" className="specsheet-ref">
      <div className="specsheet-ref__wrap">
        <Reveal variant="scale" duration={0.95} className="specsheet-ref__frame">
          <div className="specsheet-ref__split">
            <Reveal variant="left" delay={0.06} className="specsheet-ref__img">
              <Image
                src={SPEC_IMAGE}
                alt="Sauna heater filled with hot glowing stones with steam rising"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                className="specsheet-ref__img-el"
              />
              <div className="specsheet-ref__img-overlay">
                <p className="specsheet-ref__img-tag">Why materials matter</p>
                <h2>
                  Heat changes <em>everything.</em>
                </h2>
                <p>
                  Most sauna kits off-gas the moment they warm up. We build with natural, low-VOC
                  materials as standard — not an upgrade — documented on every project.
                </p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={0.1} className="specsheet-ref__table-side">
              <table>
                <thead>
                  <tr>
                    <th className="specsheet-ref__col-std">Standard build</th>
                    <th className="specsheet-ref__col-e7">Element Seven</th>
                  </tr>
                </thead>
                <tbody>
                  {MATERIALS_SPEC_ROWS.map((row) => (
                    <tr key={row.standard}>
                      <td className="specsheet-ref__col-std">{row.standard}</td>
                      <td className="specsheet-ref__col-e7">{row.elementSeven}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>

          <RevealStagger className="specsheet-ref__credentials" stagger={0.08} delayChildren={0.04}>
            {MATERIALS_SPEC_CREDENTIALS.map((item, idx) => (
              <RevealStaggerItem key={item.title} className="specsheet-ref__credential">
                <div className="specsheet-ref__credential-icon">{CREDENTIAL_ICONS[idx]}</div>
                <div className="specsheet-ref__credential-body">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </RevealStaggerItem>
            ))}
          </RevealStagger>

          <Reveal variant="up" delay={0.08} className="specsheet-ref__footer">
            <p>
              Every project ships with a documented materials list — supplier, product, and spec
              sheet for every material in your build.
            </p>
            <Link href="#contact" className="specsheet-ref__btn">
              Ask about your build spec
            </Link>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
