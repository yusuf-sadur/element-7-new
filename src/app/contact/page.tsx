import ConsultationForm from "@/components/ConsultationForm";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Consultation — Element 7",
  description:
    "Book a no-obligation consultation with Element 7. We design and build custom saunas, steam rooms, cold plunge systems and wellness environments across Melbourne.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PageHero
        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=85"
        label="Contact"
        title="Let's Build Your"
        titleAccent="Wellness Space"
        subtitle="Every Element 7 project starts with a free, no-obligation consultation. Tell us about your vision and we'll guide you through the entire journey."
        height="100vh"
      />

      <section className="section-padding section-glass">
        <div className="container-e7">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div
            className="scroll-reveal space-y-8"
            data-reveal="left"
            style={{ "--reveal-delay": "60ms" } as CSSProperties}
          >
            {/* Contact details */}
            <div className="bg-sand/[0.03] border border-sand/[0.07] p-8">
              <h2 className="font-semibold text-sand text-base mb-6 tracking-wider">Contact Information</h2>
              <div className="space-y-5">
                {[
                  { Icon: Phone, label: "Phone", value: "1300 000 000", href: "tel:+611300000000" },
                  { Icon: Mail, label: "Email", value: "hello@element7.com.au", href: "mailto:hello@element7.com.au" },
                  { Icon: MapPin, label: "Service Area", value: "Melbourne, VIC & Surrounds", href: null },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-gold/60" />
                    </div>
                    <div>
                      <div className="text-xs text-sand/30 tracking-widest uppercase mb-1">{label}</div>
                      {href ? (
                        <a href={href} className="text-sand/70 hover:text-gold transition-colors text-sm">
                          {value}
                        </a>
                      ) : (
                        <span className="text-sand/70 text-sm">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map embed */}
            <div className="bg-sand/[0.03] border border-sand/[0.07] overflow-hidden h-72">
              <iframe
                title="Element 7 Melbourne"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d144.9630576!3d-37.8136276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Service areas */}
            <div className="bg-sand/[0.03] border border-sand/[0.07] p-8">
              <h3 className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {["Melbourne CBD", "Inner East", "Inner West", "Bayside", "Mornington Peninsula", "Yarra Valley", "Dandenong Ranges", "Surf Coast", "All Victoria"].map(
                  (area) => (
                    <span key={area} className="text-xs text-sand/40 border border-sand/[0.08] px-3 py-1">
                      {area}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="scroll-reveal"
            data-reveal="right"
            style={{ "--reveal-delay": "140ms" } as CSSProperties}
          >
            <ConsultationForm />
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
