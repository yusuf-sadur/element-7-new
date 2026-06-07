"use client";

import ContactEnquiry from "@/components/ui/ContactEnquiry";
import ContactRail from "@/components/ui/ContactRail";
import Reveal from "@/components/ui/Reveal";

type ContactPanelProps = {
  label?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export default function ContactPanel({
  label = "Contact us",
  title,
  description,
  className = "",
}: Readonly<ContactPanelProps>) {
  return (
    <div className={`contact-panel ${className}`.trim()}>
      <Reveal variant="left" className="contact-panel__rail">
        <ContactRail className="contact-rail--panel" />
      </Reveal>

      <Reveal variant="right" delay={0.08} className="contact-panel__enquiry">
        <ContactEnquiry label={label} title={title} description={description} />
      </Reveal>
    </div>
  );
}
