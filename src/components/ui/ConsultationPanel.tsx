"use client";

import ConsultationShell from "@/components/ui/ConsultationShell";

interface ConsultationPanelProps {
  title?: React.ReactNode;
  description?: string;
  compact?: boolean;
  label?: string;
}

export default function ConsultationPanel({
  title = (
    <>
      Tell us about your <span className="italic text-olive">space</span>
    </>
  ),
  description,
  compact = false,
  label = "Your enquiry",
}: Readonly<ConsultationPanelProps>) {
  return (
    <ConsultationShell
      label={label}
      title={title}
      description={description}
      compact={compact}
    />
  );
}
