import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import ConsultationForm from "@/components/ConsultationForm";
import ServicePageHero from "@/components/ServicePageHero";

import heroSaunaHome from "@/assets/hero-sauna.jpg";
import infraredSaunasHome from "@/assets/infrared Saunas.png";
import steamRoomsHome from "@/assets/steam rooms.png";
import coldPlungeHome from "@/assets/cold plunge.png";

interface ServiceData {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: StaticImageData;
  heroImage: StaticImageData;
  features: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
}

const servicesData: Record<string, ServiceData> = {
  "custom-saunas": {
    title: "Custom Saunas",
    tagline: "Dry sauna · from design to build",
    description: "Finnish, infrared, and architectural timber saunas — indoor, outdoor, resort-style. Fully custom. No templates.",
    longDescription: "Every Element 7 sauna begins with your space and your rituals — not a catalogue. We specify premium timbers, stone, ventilation, and heaters (Harvia, Narvi) with the same rigour we apply to the architecture around them. Indoor, outdoor, minimal, or resort-style — dry heat environments built for longevity and calm.",
    image: heroSaunaHome,
    heroImage: heroSaunaHome,
    features: ["Premium Finnish cedar & thermally modified timber", "Harvia, Narvi & Helo heater options", "Custom benching layouts", "LED chromotherapy lighting", "Architectural glass walls & doors", "Integrated sound systems", "Custom ventilation design", "Stone & tile feature walls"],
    benefits: ["Recovery & circulation", "Stress reduction", "Sleep quality", "Muscle restoration", "Mental clarity", "Long-term health rituals"],
    faqs: [
      { q: "How long does a custom sauna build take?", a: "Typically 4–10 weeks from design finalisation, depending on complexity and materials specified." },
      { q: "What size sauna do I need?", a: "This depends on your intended use. We design for 1-person private saunas through to 10+ person commercial units. We'll advise during consultation." },
      { q: "Do you handle all trades?", a: "Yes. Element 7 manages all aspects including electrical, ventilation, plumbing, and structural work under a single contract." },
    ],
  },
  "infrared-saunas": {
    title: "Infrared Saunas",
    tagline: "Heat therapy · gentle deep warmth",
    description: "Lower-temperature sessions with deep tissue warmth — everyday recovery and nervous system regulation.",
    longDescription: "Infrared heat warms the body directly — comfortable temperatures, longer sessions, quiet recovery. We design cabinets in premium cedar and hemlock with low-EMF panels, chromotherapy, and architectural integration. Heat therapy spaces composed for daily use, not occasional spectacle.",
    image: infraredSaunasHome,
    heroImage: infraredSaunasHome,
    features: ["Full-spectrum & far-infrared panel options", "Premium hemlock & cedar cabinets", "Chromotherapy LED systems", "Bluetooth audio integration", "Low EMF emitter technology", "Custom sizing options", "Carbon or ceramic panel choice"],
    benefits: ["Deep tissue warmth", "Everyday accessibility", "Nervous system calm", "Joint comfort", "Extended sessions", "Quiet recovery"],
    faqs: [
      { q: "Infrared vs traditional sauna — which is better?", a: "Both have distinct benefits. Infrared operates at lower temperatures with deeper tissue heating. Traditional Finnish saunas provide the classic löyly experience. Many clients choose both." },
      { q: "Is infrared sauna safe?", a: "Yes, infrared saunas are widely used and well-researched. We use low-EMF panels and follow all Australian safety standards." },
    ],
  },
  "steam-rooms": {
    title: "Steam & Hammam",
    tagline: "Hammam culture · hydrothermal calm",
    description: "Steam rooms with moisture control, stone, and refined finishes — hammam culture, architecturally composed.",
    longDescription: "Steam and hammam spaces demand precision — humidity, ventilation, waterproofing, material longevity. We design hydrothermal environments in premium stone and tile, with chromotherapy, aromatherapy, and custom benching. Quiet steam performance. Elegant recovery environments.",
    image: steamRoomsHome,
    heroImage: steamRoomsHome,
    features: ["Tylo, Mr. Steam & Kohler generators", "Premium marble, stone & mosaic tile", "Chromotherapy lighting systems", "Aromatherapy injection systems", "Rainfall steam nozzle layouts", "Custom teak & iroko benching", "Waterproof audio systems", "Digital control panels"],
    benefits: ["Skin hydration", "Respiratory ease", "Muscular release", "Circulation", "Stress reduction", "Hammam ritual"],
    faqs: [
      { q: "How much does a custom steam room cost?", a: "Residential steam rooms typically range from $15,000 to $60,000+ depending on size, materials and complexity. We provide detailed quotes after consultation." },
      { q: "Can a steam room be combined with a sauna?", a: "Absolutely — many of our projects feature both, and we design the complete wellness suite as one integrated space." },
    ],
  },
  "cold-plunge": {
    title: "Cold Plunge",
    tagline: "Cold therapy · contrast & clarity",
    description: "Integrated ice baths and contrast therapy — precision chilled, architecturally composed.",
    longDescription: "Cold plunge is contrast therapy at its most direct — circulation, inflammation, mental clarity. We integrate chilled immersion into complete recovery environments: natural stone, acrylic, or stainless, with filtration, UV sanitisation, and exact temperature control. Paired with sauna or standalone — always custom, always considered.",
    image: coldPlungeHome,
    heroImage: coldPlungeHome,
    features: ["Precision chilling to 4–15°C", "Natural stone, acrylic & stainless options", "Continuous filtration & UV sanitisation", "Digital temperature control & monitoring", "Indoor & outdoor configurations", "Entry steps & grab rails", "Integrated bench seating", "Custom sizing from 1–8 person"],
    benefits: ["Inflammation reduction", "Circulation", "Mental clarity", "Recovery speed", "Resilience", "Contrast therapy"],
    faqs: [
      { q: "What temperature should a cold plunge be?", a: "Most protocols recommend 10–15°C for recovery, with advanced users going to 8–10°C. Our systems are adjustable and we advise on optimal protocols." },
      { q: "How is a cold plunge maintained?", a: "Our plunges include automated filtration and UV sanitisation. We provide maintenance guidance and offer servicing contracts." },
    ],
  },
};

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: Readonly<PageProps>): Promise<Metadata> {
  const service = servicesData[params.slug];
  if (!service) return { title: "Service Not Found — Element 7" };
  return {
    title: `${service.title} | Element 7 Melbourne`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default function ServiceDetailPage({ params }: Readonly<PageProps>) {
  const service = servicesData[params.slug];
  if (!service) notFound();

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero */}
      <ServicePageHero
        image={service.heroImage}
        label="Services"
        title={service.title}
        tagline={service.tagline}
        lead={service.description}
      />

      <section className="section-padding section-glass">
        <div className="container-e7">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Overview */}
            <div className="scroll-reveal">
              <p className="section-label mb-4">Overview</p>
              <p className="text-sm font-light leading-relaxed text-sand/55">{service.longDescription}</p>
            </div>

            {/* Features & Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Features */}
              <div className="scroll-reveal" style={{ transitionDelay: "100ms" }}>
                <h2 className="font-display text-2xl font-light text-sand mb-6">
                  Features & <span className="italic text-gold">Specifications</span>
                </h2>
                <div className="space-y-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 text-sm text-sand/55">
                      <div className="w-1 h-1 bg-gold rounded-full flex-shrink-0 mt-1.5" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="scroll-reveal" style={{ transitionDelay: "200ms" }}>
                <h2 className="font-display text-2xl font-light text-sand mb-6">
                  Health <span className="italic text-gold">Benefits</span>
                </h2>
                <div className="grid gap-3">
                  {service.benefits.map((b) => (
                    <div
                      key={b}
                      className="bg-sand/[0.03] border border-sand/[0.07] px-4 py-3 text-sm text-sand/55 hover:border-gold/20 hover:text-sand/70 transition-all duration-300"
                    >
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="scroll-reveal" style={{ transitionDelay: "300ms" }}>
              <h2 className="font-display text-2xl font-light text-sand mb-6">
                Frequently Asked <span className="italic text-gold">Questions</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {service.faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-sand/[0.08] pb-4">
                    <h3 className="font-semibold text-sand text-sm mb-2">{faq.q}</h3>
                    <p className="text-sand/45 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="divider-gold opacity-20" />

            {/* Bottom Row: Consultation & Related */}
            <div className="pt-8">
              {/* Consultation Form - takes 2 cols */}
              <div className="lg:col-span-2 scroll-reveal" style={{ transitionDelay: "400ms" }}>
                <div className="mb-8">
                  <h2 className="font-display text-3xl font-light text-sand mb-2">
                    Begin your <span className="italic text-gold">project.</span>
                  </h2>
                  <p className="text-sand/45 text-sm">A quiet conversation — your space, your vision, your rituals.</p>
                </div>
                <ConsultationForm />
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
