import { Phone } from "lucide-react";

import { BRAND } from "@/lib/brand";

export default function FloatingCallButton() {
  return (
    <a
      href={`tel:${BRAND.phoneTel}`}
      className="floating-call"
      id="floating-call"
      aria-label={`Call ${BRAND.phone}`}
    >
      <Phone size={22} strokeWidth={1.75} aria-hidden />
    </a>
  );
}
