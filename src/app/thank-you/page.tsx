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
        <div className="animate-fade-up mx-auto mb-8 flex h-16 w-16 items-center justify-center border border-gold/30 opacity-0">
          <CheckCircle size={32} className="text-gold" />
        </div>

        <p className="section-label animate-fade-up mb-4 opacity-0 delay-100">Received</p>
        <h1 className="animate-fade-up mb-6 font-display text-4xl font-light leading-tight text-sand opacity-0 delay-200 md:text-5xl">
          We&apos;ll be in <span className="italic text-gold">touch.</span>
        </h1>
        <div className="divider-gold animate-fade-up mx-auto mb-8 opacity-0 delay-200" />
        <p className="animate-fade-up mb-10 text-sm leading-relaxed text-sand/55 opacity-0 delay-300">
          Your enquiry is with our team. We&apos;ll respond within one business day
          to begin the conversation about your recovery space.
        </p>

        <div className="animate-fade-up flex flex-col justify-center gap-4 opacity-0 delay-[350ms] sm:flex-row">
          <Link href="/" className="btn-gold" id="thankyou-home">
            Back to Home
          </Link>
          <Link href="/projects" className="btn-outline" id="thankyou-projects">
            View Our Projects
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="animate-fade-up mt-12 border-t border-sand/[0.08] pt-8 opacity-0 delay-500">
          <p className="text-sand/30 text-xs">
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
