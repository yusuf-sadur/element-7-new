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
              Ready to start your build? <span className="text-bronze">Let&apos;s talk.</span>
            </>
          }
          description="Tell us about your space and what you're after — we respond within one business day with a clear scope and materials spec."
        />
      </div>
    </section>
  );
}
