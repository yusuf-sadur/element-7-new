"use client";

import ContactPanel from "@/components/ui/ContactPanel";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-main relative overflow-hidden border-t border-line/60 bg-cream">
      <div className="contact-main__ambient" aria-hidden />

      <div className="container-e7 relative section-padding !py-16 md:!py-20 lg:!py-24">
        <ContactPanel
          label="Contact us"
          title={
            <>
              Ready to build your <span className="text-bronze">recovery space?</span>
            </>
          }
          description="Share your brief — we respond within one business day with a calm, no-pressure next step."
        />
      </div>
    </section>
  );
}
