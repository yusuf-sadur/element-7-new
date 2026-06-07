import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ConsultationCtaProps = {
  id?: string;
  className?: string;
  label?: string;
  href?: string;
};

export default function ConsultationCta({
  id,
  className = "",
  label = "Book a consultation",
  href = "/contact",
}: Readonly<ConsultationCtaProps>) {
  return (
    <Link href={href} id={id} className={`btn-consultation inline-flex ${className}`.trim()}>
      {label}
      <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />
    </Link>
  );
}
