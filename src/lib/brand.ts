import type { StaticImageData } from "next/image";

import heroSaunaImg from "@/assets/hero-sauna.jpg";
import infraredSaunasImg from "@/assets/infrared Saunas.png";
import steamRoomsImg from "@/assets/steam rooms.png";
import coldPlungeImg from "@/assets/cold plunge.png";
import residentialImg from "@/assets/Residential.png";
import wellnessTrendsImg from "@/assets/Wellness Trends.png";
import ourServicesImg from "@/assets/our Services.png";
import { MATERIAL_IMAGES } from "@/lib/material-images";

export { ourServicesImg };

export const BRAND = {
  name: "Element Seven",
  tagline: "Recovery Architecture",
  slogan: "Engineered Environments for Human Performance.",
  headline: "Spaces Designed to Restore the Nervous System.",
  heroEyebrow: "Element 7",
  heroLeadLines: [
    "Custom saunas, steam rooms, plunge pools and",
    "wellness environments — designed and built",
    "across Australia.",
  ] as const,
  heroLead:
    "Custom saunas, steam rooms, plunge pools and wellness environments — designed and built across Australia.",
  supportingLine:
    "Architectural wellness environments engineered for recovery, longevity, and human performance.",
  heroHeadlineLines: [
    "Spaces designed",
    "to restore the",
    "nervous system.",
  ] as const,
  heroCtaLabel: "Explore our spaces",
  description:
    "Element Seven designs and builds custom saunas, steam rooms, plunge pools, and complete recovery environments. Consultation, architectural design, construction, and handover — one studio, Australia-wide.",
  studio: "Melbourne",
  coverage: "Australia-wide",
  serviceAreasHeadline: "Areas We Service",
  serviceAreasSubline: "Melbourne studio · residential & commercial delivery across Victoria.",
  serviceAreasNote:
    "Not on the list? We service other areas across Melbourne and Australia-wide — reach out first and we'll let you know what's possible for your location.",
  phone: "0422 797 790",
  phoneTel: "+61422797790",
  studioIdentity:
    "Not a spa. Not a resort operator. A recovery architecture studio that designs and builds wellness environments for your property.",
} as const;

export const SERVICE_AREA_REGIONS = [
  {
    region: "Inner East",
    suburbs: ["Toorak", "Hawthorn", "Camberwell", "Malvern", "Armadale", "Kew", "Balwyn"],
  },
  {
    region: "Bayside",
    suburbs: ["Brighton", "Brighton East", "Hampton", "Sandringham", "Black Rock", "Beaumaris"],
  },
  {
    region: "Mornington Peninsula",
    suburbs: ["Portsea", "Sorrento", "Mornington", "Mount Eliza", "Flinders", "Blairgowrie"],
  },
  {
    region: "Inner North",
    suburbs: ["Fitzroy", "Collingwood", "Northcote", "Brunswick", "Carlton"],
  },
  {
    region: "South East",
    suburbs: ["Glen Waverley", "Wheelers Hill", "Doncaster", "Templestowe", "Doncaster East"],
  },
  {
    region: "Yarra Valley & Hills",
    suburbs: ["Eltham", "Warrandyte", "Healesville", "Hurstbridge"],
  },
] as const;

export type SpaceSlug =
  | "traditional-dry-sauna"
  | "infrared-sauna"
  | "hybrid-sauna"
  | "hammam-steam"
  | "recovery-pools"
  | "stainless-steel-plunge";

export interface SpaceDefinition {
  slug: SpaceSlug;
  title: string;
  shortTitle: string;
  heading: string;
  label: string;
  tagline: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: StaticImageData;
  heroImage: StaticImageData | string;
  mood: string;
  features: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
}

export const SPACES: SpaceDefinition[] = [
  {
    slug: "traditional-dry-sauna",
    title: "Traditional Dry Sauna",
    shortTitle: "Dry Sauna",
    heading: "The Art of Heat — Built to Specification.",
    label: "Dry heat",
    tagline: "Timber · ventilation · construction",
    subtitle:
      "Custom dry saunas designed and built with premium cedar, engineered ventilation, and architectural detailing.",
    description:
      "Finnish-style saunas — architecturally designed, specified, and constructed for residential and commercial properties.",
    longDescription:
      "Every dry sauna we build starts with your floor plan and structural constraints — not an off-the-shelf kit. We specify premium cedar and thermo timber, engineer ventilation and heat distribution, coordinate electrical and structural trades, and construct benching, glazing, and lighting to architectural standard. Indoor, outdoor, compact, or multi-person — built on site, built to last.",
    image: heroSaunaImg,
    heroImage: heroSaunaImg,
    mood: "Timber construction · thermal engineering · architectural finish",
    features: [
      "Premium Finnish cedar & thermo timber supply & install",
      "Harvia, Narvi & Helo heater specification",
      "Custom benching fabrication & installation",
      "Integrated chromotherapy lighting",
      "Architectural glass walls & doors",
      "Engineered ventilation & moisture management",
      "Stone & tile feature construction",
      "Indoor & outdoor build configurations",
    ],
    benefits: [
      "Single-contract design & build",
      "Licensed trades coordination",
      "Thermal performance engineering",
      "Architectural integration with your property",
      "Premium material specification",
      "Commissioning & handover documentation",
    ],
    faqs: [
      {
        q: "How long does a custom sauna build take?",
        a: "Typically 4–10 weeks from design sign-off, depending on complexity, materials, and coordination with other trades on site.",
      },
      {
        q: "Do you handle all trades?",
        a: "Yes. Element Seven manages electrical, ventilation, structural, and finishing work under a single integrated build contract.",
      },
    ],
  },
  {
    slug: "infrared-sauna",
    title: "Infrared Sauna",
    shortTitle: "Infrared",
    heading: "Infrared Saunas — Designed & Constructed.",
    label: "Infrared",
    tagline: "Panels · timber · integration",
    subtitle:
      "Infrared saunas built in premium timber with low-EMF panel specification and full architectural integration.",
    description:
      "Custom infrared sauna construction — cabinetry, panel systems, electrical, and finish work, built into your home or commercial space.",
    longDescription:
      "We design and build infrared saunas as integrated architectural elements — not prefabricated boxes dropped into a room. Premium cedar and hemlock construction, low-EMF panel specification, chromotherapy, ventilation, and electrical compliance handled by our team. Every cabinet is sized, detailed, and installed for your property.",
    image: infraredSaunasImg,
    heroImage: infraredSaunasImg,
    mood: "Cabinet construction · panel specification · clean integration",
    features: [
      "Full-spectrum & far-infrared panel specification",
      "Premium hemlock & cedar cabinet construction",
      "Chromotherapy LED installation",
      "Low EMF emitter specification",
      "Electrical compliance & certification",
      "Custom sizing & built-in layouts",
      "Carbon or ceramic panel options",
      "Residential & commercial build delivery",
    ],
    benefits: [
      "Bespoke sizing for your space",
      "Architectural finish matching your interior",
      "Integrated electrical & ventilation",
      "Low-EMF specification",
      "Single-studio accountability",
      "Post-handover servicing available",
    ],
    faqs: [
      {
        q: "Do you supply kits or build on site?",
        a: "We design and build on site. Every sauna is specified for your property — dimensions, services, materials, and finishes are resolved in the design phase before construction begins.",
      },
      {
        q: "Is infrared sauna construction compliant?",
        a: "Yes. We follow Australian electrical and building standards, with ventilation and material selection aligned to safe indoor air quality.",
      },
    ],
  },
  {
    slug: "hybrid-sauna",
    title: "Hybrid Sauna",
    shortTitle: "Hybrid",
    heading: "Hybrid Saunas — Dual-System Construction.",
    label: "Hybrid",
    tagline: "Dual heat · integrated build",
    subtitle:
      "Hybrid saunas combining traditional and infrared systems — designed, engineered, and built as one integrated installation.",
    description:
      "Dual-modality sauna construction — traditional heat and infrared technology specified, installed, and commissioned as a unified build.",
    longDescription:
      "Hybrid saunas require careful engineering — two heating systems, one timber envelope, one ventilation strategy. We design and construct dual-zone saunas with integrated controls, architectural timber detailing, and full trade coordination. Built for clients who want both traditional and infrared capability in a single, precisely constructed space.",
    image: wellnessTrendsImg,
    heroImage: wellnessTrendsImg,
    mood: "Dual-system engineering · timber craft · performance build",
    features: [
      "Dual traditional & infrared heating installation",
      "Integrated architectural timber construction",
      "Zone control & electrical specification",
      "Chromotherapy & ambient lighting install",
      "Premium cedar & thermo timber build",
      "Custom benching fabrication",
      "Unified ventilation engineering",
      "Smart control system commissioning",
    ],
    benefits: [
      "One team for dual-system complexity",
      "Integrated design documentation",
      "Reduced coordination for the client",
      "Performance-tested commissioning",
      "Future servicing from the build team",
      "Architectural coherence across modalities",
    ],
    faqs: [
      {
        q: "Can hybrid systems be added to an existing sauna?",
        a: "Sometimes — but we recommend specifying hybrid systems during initial design. Retrofits require assessment of electrical capacity, ventilation, and timber envelope.",
      },
      {
        q: "Who commissions hybrid sauna builds?",
        a: "Private homes, performance facilities, and commercial studios that need both traditional and infrared capability in one architecturally resolved installation.",
      },
    ],
  },
  {
    slug: "hammam-steam",
    title: "Hammam & Steam Rooms",
    shortTitle: "Steam & Hammam",
    heading: "Steam & Hammam — Precision Hydrothermal Build.",
    label: "Steam",
    tagline: "Waterproofing · stone · steam plant",
    subtitle:
      "Steam rooms and hammam environments — waterproofed, tiled, and commissioned with generator specification and ventilation engineering.",
    description:
      "Hydrothermal construction — moisture control, waterproofing, stone installation, and steam plant specification, built to endure.",
    longDescription:
      "Steam and hammam construction demands technical precision — waterproof membranes, fall ratios, generator sizing, and ventilation that protects the building envelope. We design and build hydrothermal rooms in marble and stone, install steam plant and controls, and coordinate tiling, benching, and services. Built for longevity in high-moisture environments.",
    image: steamRoomsImg,
    heroImage: steamRoomsImg,
    mood: "Waterproof construction · stone installation · steam engineering",
    features: [
      "Tylo, Mr. Steam & Kohler generator supply & install",
      "Marble, stone & mosaic tile installation",
      "Waterproofing & tanking systems",
      "Chromotherapy lighting installation",
      "Custom teak & iroko benching",
      "Ventilation & moisture extraction design",
      "Digital control panel commissioning",
      "Combined hammam & steam room builds",
    ],
    benefits: [
      "Moisture-safe construction methodology",
      "Generator sizing & specification",
      "Waterproofing warranty coordination",
      "Integrated tiling & stone craft",
      "Full trade management",
      "Commissioning & client handover",
    ],
    faqs: [
      {
        q: "Can you build steam alongside sauna on the same project?",
        a: "Yes — we frequently deliver integrated sauna, steam, and plunge builds as a single recovery suite with unified services and documentation.",
      },
      {
        q: "What makes steam construction different from standard bathrooms?",
        a: "Steam rooms require engineered waterproofing, dedicated ventilation, correct generator sizing, and materials rated for sustained high humidity — we specialise in this construction type.",
      },
    ],
  },
  {
    slug: "recovery-pools",
    title: "Recovery Pools",
    shortTitle: "Recovery Pools",
    heading: "Recovery Pools — Designed & Constructed.",
    label: "Pools",
    tagline: "Stone · services · installation",
    subtitle:
      "Recovery pools built with natural stone, filtration systems, and architectural integration into your property.",
    description:
      "Custom recovery pool construction — structural work, stone finishes, filtration, and temperature control, installed and commissioned on site.",
    longDescription:
      "Recovery pools are construction projects — excavation or structural framing, waterproofing, stone or tile finishes, filtration plant, and temperature control systems. We design and build pools as architectural elements within residential and commercial properties, coordinating landscapers, plumbers, and electricians under one studio.",
    image: residentialImg,
    heroImage: residentialImg,
    mood: "Pool construction · stone finishing · systems integration",
    features: [
      "Natural stone & architectural pool finishes",
      "Structural & waterproof pool construction",
      "Filtration & water quality systems",
      "Temperature-controlled hydrotherapy plant",
      "Indoor & outdoor build configurations",
      "Contrast therapy zone integration",
      "Custom depth & dimension specification",
      "Lighting & services installation",
    ],
    benefits: [
      "End-to-end pool construction",
      "Coordination with landscape & architecture",
      "Systems commissioning & testing",
      "Integrated contrast suite capability",
      "Material specification for longevity",
      "Documentation for property records",
    ],
    faqs: [
      {
        q: "Do you build pools as part of a larger recovery suite?",
        a: "Yes — sauna, plunge, and pool builds are often delivered together with shared services, unified design, and a single construction programme.",
      },
      {
        q: "Can you build outdoor recovery pools?",
        a: "We construct both indoor and outdoor pools, with material and structural specification suited to climate, site conditions, and architectural context.",
      },
    ],
  },
  {
    slug: "stainless-steel-plunge",
    title: "Stainless Steel Plunge Pools",
    shortTitle: "Plunge Pools",
    heading: "Plunge Pools — Precision Cold Therapy Build.",
    label: "Cold plunge",
    tagline: "Steel fabrication · chilling · install",
    subtitle:
      "Stainless steel plunge pools — fabricated, installed, and commissioned with precision chilling and filtration systems.",
    description:
      "Cold plunge pool construction — stainless steel vessels, chilling plant, filtration, and architectural surrounds, built and commissioned on site.",
    longDescription:
      "Plunge pool construction combines fabrication and systems engineering — stainless steel vessels, chilling units, filtration, UV sanitisation, and temperature monitoring, set within stone or architectural surrounds. We design and build plunge installations for contrast therapy suites in homes, gyms, and commercial properties.",
    image: coldPlungeImg,
    heroImage: coldPlungeImg,
    mood: "Steel fabrication · chilling plant · precision install",
    features: [
      "Brushed stainless steel vessel construction",
      "Chilling plant to 4–15°C",
      "Filtration & UV sanitisation systems",
      "Digital temperature monitoring install",
      "Indoor & outdoor configurations",
      "Stone surround & architectural detailing",
      "Entry steps & safety rail fabrication",
      "Custom capacity from 1–8 person",
    ],
    benefits: [
      "Precision temperature control",
      "Hygienic stainless construction",
      "Integrated contrast suite delivery",
      "Systems commissioning included",
      "Maintenance guidance at handover",
      "Architectural geometry & detailing",
    ],
    faqs: [
      {
        q: "What temperature range can your plunge builds achieve?",
        a: "Our chilling systems are adjustable from approximately 4–15°C, commissioned and tested before handover with full operating documentation.",
      },
      {
        q: "Why specify stainless steel for plunge construction?",
        a: "Stainless delivers hygienic surfaces, thermal efficiency, and precise fabrication — ideal for performance-focused cold therapy installations with long service life.",
      },
    ],
  },
];

export const SPACES_BY_SLUG = Object.fromEntries(
  SPACES.map((space) => [space.slug, space])
) as Record<SpaceSlug, SpaceDefinition>;

export const LEGACY_SPACE_SLUGS: Record<string, SpaceSlug> = {
  "custom-saunas": "traditional-dry-sauna",
  "infrared-saunas": "infrared-sauna",
  "steam-rooms": "hammam-steam",
  "cold-plunge": "stainless-steel-plunge",
};

export const SEVEN_ELEMENTS = [
  { num: "01", title: "Heat", text: "Dry and infrared saunas — designed, specified, and built to architectural standard." },
  { num: "02", title: "Cold", text: "Plunge pools — stainless fabrication, chilling plant, and on-site commissioning." },
  { num: "03", title: "Breath", text: "Steam and hammam — waterproof construction, stone install, and generator specification." },
  { num: "04", title: "Rest", text: "Recovery suites — multi-room builds with unified services and trade coordination." },
  { num: "05", title: "Movement", text: "Contrast therapy installations — heat, cold, and water zones built as one system." },
  { num: "06", title: "Nature", text: "Timber, stone, and material specification — selected for performance and longevity." },
  { num: "07", title: "Connection", text: "Residential and commercial delivery — one studio from drawings to handover." },
] as const;

export interface MaterialItem {
  title: string;
  text: string;
  image: string | StaticImageData;
}

export const MATERIALS: MaterialItem[] = [
  {
    title: "Natural Timber",
    text: "Cedar and thermo timber — supply, fabrication, and installation.",
    image: MATERIAL_IMAGES.timber,
  },
  {
    title: "Stone & Marble",
    text: "Tiling, benching, and feature stone work on site.",
    image: MATERIAL_IMAGES.stoneMarble,
  },
  {
    title: "Concrete & Plaster",
    text: "Structural forms, renders, and architectural finishes.",
    image: MATERIAL_IMAGES.concretePlaster,
  },
  {
    title: "Stainless Steel",
    text: "Plunge vessel fabrication and precision metalwork.",
    image: MATERIAL_IMAGES.stainlessSteel,
  },
  {
    title: "Precision Lighting",
    text: "Chromotherapy and ambient lighting installation.",
    image: MATERIAL_IMAGES.lighting,
  },
  {
    title: "Custom Detailing",
    text: "Ventilation, waterproofing, and joint craft built to endure.",
    image: MATERIAL_IMAGES.detailing,
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    description: "Site review, scope definition, and feasibility — understanding your property, brief, and build requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "Architectural drawings, material specification, services coordination, and fixed-scope documentation.",
  },
  {
    number: "03",
    title: "Build",
    description: "On-site construction with licensed trades — timber, waterproofing, electrical, and systems installation.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Commissioning, testing, and handover — your installation complete, documented, and ready to use.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description: "Servicing, maintenance guidance, and long-term support from the team that built it.",
  },
] as const;
