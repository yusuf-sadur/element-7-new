import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

interface ServiceData {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  heroImage: string;
  features: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
}

const servicesData: Record<string, ServiceData> = {
  "custom-saunas": {
    title: "Custom Saunas Melbourne",
    tagline: "Bespoke Finnish & dry heat sauna environments",
    description: "Fully custom-designed saunas built with premium Finnish cedar, thermally modified timber, and kiuas heaters — tailored to your exact space and lifestyle.",
    longDescription: "A custom Element 7 sauna is not purchased off a shelf. Every sauna we build begins with a blank canvas — your space, your lifestyle, your vision. We design around your architecture, your aesthetic, and your health goals. Using premium Scandinavian cedar, thermally modified timber, natural stone, and premium Harvia and Narvi heaters, we build saunas that will last a lifetime and elevate any property.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=80",
    features: ["Premium Finnish cedar & thermally modified timber", "Harvia, Narvi & Helo heater options", "Custom benching layouts", "LED chromotherapy lighting", "Architectural glass walls & doors", "Integrated sound systems", "Custom ventilation design", "Stone & tile feature walls"],
    benefits: ["Cardiovascular health improvement", "Muscle recovery acceleration", "Stress & cortisol reduction", "Improved sleep quality", "Skin health & circulation", "Mental clarity & focus"],
    faqs: [
      { q: "How long does a custom sauna build take?", a: "Typically 4–10 weeks from design finalisation, depending on complexity and materials specified." },
      { q: "What size sauna do I need?", a: "This depends on your intended use. We design for 1-person private saunas through to 10+ person commercial units. We'll advise during consultation." },
      { q: "Do you handle all trades?", a: "Yes. Element 7 manages all aspects including electrical, ventilation, plumbing, and structural work under a single contract." },
    ],
  },
  "infrared-saunas": {
    title: "Infrared Saunas",
    tagline: "Far-infrared technology for deep recovery",
    description: "Infrared saunas operate at lower temperatures while delivering deeper tissue penetration — ideal for recovery, detoxification and extended sessions.",
    longDescription: "Far-infrared (FIR) saunas use electromagnetic radiation in the infrared spectrum to heat the body directly rather than the air around it. This enables deeper tissue penetration at temperatures typically 40–55°C — compared to 80–100°C in traditional saunas — making sessions more comfortable and sustainable for longer periods. The result is superior muscle recovery, enhanced detoxification, and profound relaxation.",
    image: "https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=1920&q=80",
    features: ["Full-spectrum & far-infrared panel options", "Premium hemlock & cedar cabinets", "Chromotherapy LED systems", "Bluetooth audio integration", "Low EMF emitter technology", "Custom sizing options", "Carbon or ceramic panel choice"],
    benefits: ["Deeper muscle tissue penetration", "Comfortable lower temperature operation", "Enhanced detoxification", "Joint pain relief", "Improved skin tone", "Extended session capability"],
    faqs: [
      { q: "Infrared vs traditional sauna — which is better?", a: "Both have distinct benefits. Infrared operates at lower temperatures with deeper tissue heating. Traditional Finnish saunas provide the classic löyly experience. Many clients choose both." },
      { q: "Is infrared sauna safe?", a: "Yes, infrared saunas are widely used and well-researched. We use low-EMF panels and follow all Australian safety standards." },
    ],
  },
  "steam-rooms": {
    title: "Steam Rooms",
    tagline: "Therapeutic wet steam environments",
    description: "Custom steam rooms with chromotherapy, aromatherapy, and premium tile or stone finishes — designed as architectural centrepieces.",
    longDescription: "Steam rooms operate at 100% humidity and temperatures of 40–50°C, creating a distinctly different experience to dry saunas. The moist heat opens pores, hydrates the skin, relieves respiratory congestion, and provides deep muscular relaxation. Element 7 steam rooms are architectural statements — tiled in premium stone, fitted with chromotherapy lighting, rainfall steam nozzles, and custom teak benching.",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80",
    features: ["Tylo, Mr. Steam & Kohler generators", "Premium marble, stone & mosaic tile", "Chromotherapy lighting systems", "Aromatherapy injection systems", "Rainfall steam nozzle layouts", "Custom teak & iroko benching", "Waterproof audio systems", "Digital control panels"],
    benefits: ["Skin hydration & pore cleansing", "Respiratory health improvement", "Deep muscular relaxation", "Circulation stimulation", "Stress reduction", "Joint flexibility improvement"],
    faqs: [
      { q: "How much does a custom steam room cost?", a: "Residential steam rooms typically range from $15,000 to $60,000+ depending on size, materials and complexity. We provide detailed quotes after consultation." },
      { q: "Can a steam room be combined with a sauna?", a: "Absolutely — many of our projects feature both, and we design the complete wellness suite as one integrated space." },
    ],
  },
  "cold-plunge": {
    title: "Cold Plunge Systems",
    tagline: "Precision cold immersion for optimal recovery",
    description: "Custom cold plunge pools and ice baths with precision chilling systems — engineered for the ultimate contrast therapy and recovery protocol.",
    longDescription: "Cold water immersion (CWI) is one of the most potent recovery tools available. At temperatures of 8–15°C, a cold plunge triggers vasoconstriction, reduces inflammation, clears lactic acid, and initiates a powerful hormonal response including norepinephrine and endorphin release. Element 7 installs bespoke cold plunge systems in natural stone, premium acrylic, and stainless steel — with precision chilling units maintaining exact temperature.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80",
    features: ["Precision chilling to 4–15°C", "Natural stone, acrylic & stainless options", "Continuous filtration & UV sanitisation", "Digital temperature control & monitoring", "Indoor & outdoor configurations", "Entry steps & grab rails", "Integrated bench seating", "Custom sizing from 1–8 person"],
    benefits: ["Acute inflammation reduction", "Enhanced circulation", "Norepinephrine release", "Improved recovery speed", "Cold adaptation & resilience", "Mental fortitude training"],
    faqs: [
      { q: "What temperature should a cold plunge be?", a: "Most protocols recommend 10–15°C for recovery, with advanced users going to 8–10°C. Our systems are adjustable and we advise on optimal protocols." },
      { q: "How is a cold plunge maintained?", a: "Our plunges include automated filtration and UV sanitisation. We provide maintenance guidance and offer servicing contracts." },
    ],
  },
  "contrast-therapy": {
    title: "Contrast Therapy Systems",
    tagline: "Integrated hot-cold therapeutic environments",
    description: "Complete contrast therapy suites that alternate between sauna heat and cold immersion — proven to maximise recovery, performance and resilience.",
    longDescription: "Contrast therapy — alternating between sauna heat and cold plunge — is one of the most powerful recovery protocols available. The alternating vasoconstriction and vasodilation creates a 'pumping' effect in the vascular system, accelerating the removal of metabolic waste and the delivery of oxygenated blood to muscles. Element 7 designs integrated contrast suites where the transition between environments is seamless, comfortable, and architecturally beautiful.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1920&q=80",
    features: ["Integrated sauna + cold plunge design", "Seamless spatial transitions", "Shared control systems", "Custom protocols & timers", "Rest bench & relaxation zones", "Premium material throughout", "Commercial & residential configurations"],
    benefits: ["Maximum recovery acceleration", "Enhanced vascular health", "Hormonal optimisation", "Improved athletic performance", "Mental resilience building", "Immune system stimulation"],
    faqs: [
      { q: "How do you alternate in contrast therapy?", a: "A typical protocol is 15–20 minutes in the sauna, followed by 2–3 minutes cold plunge, repeated 2–3 times. We provide custom protocols based on your goals." },
      { q: "Can contrast therapy be added to an existing sauna?", a: "Yes — we frequently retrofit cold plunge systems alongside existing saunas. Book a consultation to discuss your specific setup." },
    ],
  },
  "recovery-rooms": {
    title: "Recovery Rooms",
    tagline: "Dedicated multi-modality recovery environments",
    description: "Purpose-built recovery sanctuaries combining sauna, cold plunge, relaxation zones, and curated wellness tools in a single architectural space.",
    longDescription: "A dedicated recovery room is the pinnacle of personal wellness investment. Element 7 recovery rooms are architecturally designed spaces that bring together multiple recovery modalities — infrared sauna, cold plunge, contrast shower, meditation zone, percussion therapy station, and red light therapy — in a seamlessly integrated environment. Custom lighting, acoustic design, natural materials, and considered spatial flow create a space that is as beautiful as it is functional.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
    features: ["Multi-modality integration", "Sauna, steam, cold plunge & more", "Red light therapy panels", "Acoustic design & sound systems", "Custom lighting & dimming", "Natural material specification", "Relaxation lounge zones", "Bespoke storage & fixtures"],
    benefits: ["Complete recovery in one space", "Reduced protocol setup friction", "Architectural centrepiece", "Property value enhancement", "Family & guest experience", "Athlete performance support"],
    faqs: [
      { q: "How large does a recovery room need to be?", a: "We design recovery rooms from as small as 20m² for residential spaces, up to large-scale commercial facilities. Effective design makes every square metre count." },
    ],
  },
  "outdoor-wellness": {
    title: "Outdoor Wellness Areas",
    tagline: "Architecturally integrated outdoor wellness structures",
    description: "Custom outdoor saunas, barrel saunas, cold plunge pods, and wellness pavilions built for Australian climates and stunning landscapes.",
    longDescription: "There is something profoundly powerful about taking your wellness practice outdoors. An Element 7 outdoor sauna or wellness pavilion connects you to the natural environment while delivering the full benefits of heat and cold therapy. We design outdoor structures that complement your landscape architecture — whether a freestanding barrel sauna on a coastal property, a wellness pavilion overlooking a vineyard, or a rooftop contrast suite on a Melbourne terrace.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    features: ["Barrel sauna designs", "Freestanding wellness pavilions", "Outdoor cold plunge pods", "Weather-resistant materials", "Thermally modified timber", "Deck & landscaping integration", "Solar & off-grid options", "Rooftop configurations"],
    benefits: ["Connection to nature", "Landscape enhancement", "Year-round usability", "Unique property feature", "Natural material ageing", "Outdoor bathing culture"],
    faqs: [
      { q: "Are outdoor saunas weatherproof?", a: "Yes — we use weather-resistant, thermally modified timber and treated materials designed for Australian climates, including coastal salt air environments." },
    ],
  },
  "commercial-wellness": {
    title: "Commercial Wellness Spaces",
    tagline: "End-to-end commercial wellness fit-outs",
    description: "Large-scale commercial wellness installations for gyms, hotels, wellness studios, recovery centres and performance facilities across Melbourne.",
    longDescription: "The commercial wellness sector is experiencing unprecedented growth. Gyms that don't offer recovery are losing members. Hotels without wellness spaces are missing the premium travel segment. Recovery centres are becoming the new boutique fitness studios. Element 7 partners with operators, developers and fit-out companies to deliver commercial wellness environments that are built for throughput, durability, and revenue generation — without sacrificing luxury or design quality.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80",
    features: ["High-capacity sauna & steam rooms", "Commercial-grade cold plunge systems", "Multi-room wellness precincts", "HVAC & ventilation design", "Commercial electrical & plumbing", "Booking & membership integration", "Compliance & safety certification", "Ongoing maintenance contracts"],
    benefits: ["Member & guest retention", "Premium revenue stream", "Market differentiation", "Brand positioning", "Operational efficiency", "Compliance confidence"],
    faqs: [
      { q: "Do you work with architects and developers?", a: "Yes — we regularly collaborate with architects, interior designers, and project managers as a specialist wellness subcontractor." },
      { q: "Can you manage the full commercial fit-out?", a: "We can manage all wellness-specific elements under a single contract, and coordinate with your principal contractor for broader works." },
    ],
  },
  "maintenance": {
    title: "Maintenance & Upgrades",
    tagline: "Expert servicing, repairs and retrofit projects",
    description: "Professional maintenance, repairs, upgrades and retrofit projects to keep your wellness space performing at its best for years to come.",
    longDescription: "A premium wellness environment requires premium ongoing care. Element 7 offers comprehensive maintenance programs for sauna heaters, steam generators, cold plunge chillers, pumps, controls, and all associated electrical and plumbing systems. We also undertake upgrade and retrofit projects — transforming older sauna installations with new technology, materials, or modalities.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    features: ["Annual maintenance contracts", "Heater & generator servicing", "Cold plunge chiller maintenance", "Electrical & control repairs", "Timber re-treatment & oiling", "Tile & grout repairs", "Technology upgrades", "Full retrofit design & build"],
    benefits: ["Extended equipment life", "Safety compliance", "Optimal performance", "Warranty protection", "Peace of mind", "Enhanced user experience"],
    faqs: [
      { q: "How often should a sauna be serviced?", a: "We recommend annual servicing for residential saunas and twice-yearly for commercial installations. Heater elements typically require replacement every 5–8 years." },
    ],
  },
};

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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

export default function ServiceDetailPage({ params }: PageProps) {
  const service = servicesData[params.slug];
  if (!service) notFound();

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero */}
      <PageHero
        image={service.heroImage}
        label="Services"
        title={service.title}
        titleAccent=""
        subtitle={service.tagline}
        height="100vh"
      />

      <section className="section-padding section-glass">
        <div className="container-e7">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Overview */}
            <div className="scroll-reveal">
              <p className="text-white/65 text-base leading-relaxed">{service.longDescription}</p>
            </div>

            {/* Features & Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Features */}
              <div className="scroll-reveal" style={{ transitionDelay: "100ms" }}>
                <h2 className="font-['Cormorant_Garamond',serif] text-2xl font-light text-white mb-6">
                  Features & <span className="italic text-gold">Specifications</span>
                </h2>
                <div className="space-y-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 text-sm text-white/55">
                      <div className="w-1 h-1 bg-gold rounded-full flex-shrink-0 mt-1.5" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="scroll-reveal" style={{ transitionDelay: "200ms" }}>
                <h2 className="font-['Cormorant_Garamond',serif] text-2xl font-light text-white mb-6">
                  Health <span className="italic text-gold">Benefits</span>
                </h2>
                <div className="grid gap-3">
                  {service.benefits.map((b) => (
                    <div
                      key={b}
                      className="bg-white/[0.03] border border-white/[0.07] px-4 py-3 text-sm text-white/55 hover:border-gold/20 hover:text-white/70 transition-all duration-300"
                    >
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="scroll-reveal" style={{ transitionDelay: "300ms" }}>
              <h2 className="font-['Cormorant_Garamond',serif] text-2xl font-light text-white mb-6">
                Frequently Asked <span className="italic text-gold">Questions</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {service.faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-white/[0.08] pb-4">
                    <h3 className="font-semibold text-white text-sm mb-2">{faq.q}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{faq.a}</p>
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
                  <h2 className="font-['Cormorant_Garamond',serif] text-3xl font-light text-white mb-2">
                    Book Your <span className="italic text-gold">Consultation</span>
                  </h2>
                  <p className="text-white/45 text-sm">Tell us about your project and we&apos;ll bring it to life.</p>
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
