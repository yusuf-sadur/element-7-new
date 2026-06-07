"use client";

import { MapPin } from "lucide-react";

type ContactMapPanelProps = {
  className?: string;
};

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d144.9630576!3d-37.8136276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1234567890";

export default function ContactMapPanel({ className = "" }: Readonly<ContactMapPanelProps>) {
  return (
    <div className={`contact-map-panel ${className}`.trim()}>
      <div className="contact-map-panel__frame">
        <iframe
          title="Element 7 Melbourne"
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full"
        />
        <div className="contact-map-panel__chip">
          <MapPin size={12} strokeWidth={1.5} />
          Melbourne studio · AU-wide delivery
        </div>
      </div>
    </div>
  );
}
