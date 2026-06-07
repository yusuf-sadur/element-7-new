import type { Metadata } from "next";

import ThankYouExperience from "@/components/pages/ThankYouExperience";

export const metadata: Metadata = {
  title: "Thank You | Element Seven",
  description:
    "Your consultation enquiry has been received. We'll be in touch within one business day.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouExperience />;
}
