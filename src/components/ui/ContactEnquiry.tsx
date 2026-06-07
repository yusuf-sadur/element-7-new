"use client";

import ConsultationForm from "@/components/ConsultationForm";
import Reveal from "@/components/ui/Reveal";

type ContactEnquiryProps = {
  label?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export default function ContactEnquiry({
  label = "Your enquiry",
  title,
  description,
  className = "",
}: Readonly<ContactEnquiryProps>) {
  return (
    <div className={`contact-enquiry ${className}`.trim()}>
      <Reveal variant="blur" delay={0.04} className="contact-enquiry__header">
        <p className="section-label !mb-3">{label}</p>
        <h2 className="contact-enquiry__title">{title}</h2>
        {description ? <p className="contact-enquiry__description">{description}</p> : null}
      </Reveal>

      <Reveal variant="up" delay={0.1} className="contact-enquiry__form">
        <ConsultationForm theme="light" embedded showHeader={false} compact />
      </Reveal>
    </div>
  );
}
