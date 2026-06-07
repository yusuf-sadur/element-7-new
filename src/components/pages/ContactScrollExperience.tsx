"use client";

import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import PageScrollShell from "@/components/scroll/PageScrollShell";
import heroSaunaImg from "@/assets/hero-sauna.jpg";
import ContactCoverageSection from "@/components/ui/ContactCoverageSection";
import ContactPanel from "@/components/ui/ContactPanel";

const processSteps = [
  { title: "Share your vision", text: "Property, brief, and the recovery installation you want built." },
  { title: "Discovery call", text: "A quiet conversation to understand scope and constraints." },
  { title: "Tailored direction", text: "Design intent, programme, and next steps — without pressure." },
];

export default function ContactScrollExperience() {
  return (
    <PageScrollShell className="bg-cream" snap={false} smoothScroll={false}>
      <PageHero
        variant="invitation"
        image={heroSaunaImg}
        label="Contact"
        title="Begin your"
        titleAccent="project."
        subtitle="A consultation about your property, scope, and the sauna or recovery installation you need designed and built."
        secondaryHref="/services"
        secondaryLabel="Explore spaces"
      />

      <section className="contact-main relative overflow-hidden">
        <div className="contact-main__ambient" aria-hidden />
        <div className="container-e7 relative section-padding !pt-16 md:!pt-20 lg:!pt-24">
          <ContactPanel
            label="Enquire"
            title={
              <>
                Tell us about your <span className="text-bronze">build</span>
              </>
            }
            description="Planning a sauna, steam room, plunge pool, or complete recovery suite — we design and construct on site, end to end."
          />

          <div className="contact-hub__process">
            <Reveal variant="up" delay={0.06}>
              <p className="section-label !mb-4">What happens next</p>
            </Reveal>
            <ol className="contact-process-inline">
              {processSteps.map((step, idx) => (
                <Reveal
                  key={step.title}
                  as="li"
                  variant="up"
                  delay={idx * 0.08}
                  className="contact-process-inline__step"
                >
                  <span className="contact-process-inline__num" aria-hidden>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="contact-process-inline__title">{step.title}</h3>
                    <p className="contact-process-inline__text">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal variant="scale" delay={0.08}>
            <ContactCoverageSection />
          </Reveal>
        </div>
      </section>
    </PageScrollShell>
  );
}
