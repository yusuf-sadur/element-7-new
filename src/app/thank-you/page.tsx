import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — Element 7",
  description: "Your consultation request has been received. We'll be in touch within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        {/* Icon */}
        <div className="w-16 h-16 border border-gold/30 flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={32} className="text-gold" />
        </div>

        <p className="section-label mb-4">Enquiry Received</p>
        <h1 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-6">
          Thank You for <span className="italic text-gold">Reaching Out</span>
        </h1>
        <div className="divider-gold mx-auto mb-8" />
        <p className="text-white/55 text-sm leading-relaxed mb-10">
          We&apos;ve received your consultation request and a member of our team will
          be in touch within 24 hours. We look forward to discussing your wellness
          project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-gold" id="thankyou-home">
            Back to Home
          </Link>
          <Link href="/projects" className="btn-outline" id="thankyou-projects">
            View Our Projects
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.08]">
          <p className="text-white/30 text-xs">
            Have an urgent enquiry? Call us on{" "}
            <a href="tel:+611300000000" className="text-gold hover:underline">
              1300 000 000
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
