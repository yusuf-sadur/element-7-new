"use client";

import ConsultationForm from "@/components/ConsultationForm";
import Reveal from "@/components/ui/Reveal";

interface ConsultationShellProps {
  label?: string;
  title: React.ReactNode;
  description?: string;
  compact?: boolean;
  aside?: React.ReactNode;
  className?: string;
  reveal?: boolean;
}

const defaultDescription =
  "Complete the form and we'll be in touch within one business day to arrange a calm, no-obligation consultation.";

export default function ConsultationShell({
  label = "Your enquiry",
  title,
  description = defaultDescription,
  compact = false,
  aside,
  className = "",
  reveal = true,
}: Readonly<ConsultationShellProps>) {
  const shell = (
    <div className={`contact-form-shell ${className}`.trim()}>
      <div className="contact-form-shell-header bg-mesh">
        <p className="section-label !mb-4">{label}</p>
        <h3 className="font-display text-2xl font-light leading-snug text-ink md:text-3xl">
          {title}
        </h3>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-ink-muted">
            {description}
          </p>
        ) : null}
        {aside ? <div className="mt-8 border-t border-line/60 pt-6">{aside}</div> : null}
      </div>
      <div className="contact-form-shell-body">
        <ConsultationForm theme="light" embedded showHeader={false} compact={compact} />
      </div>
    </div>
  );

  if (!reveal) return shell;

  return <Reveal variant="scale">{shell}</Reveal>;
}
