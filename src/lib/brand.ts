import type { StaticImageData } from "next/image";

import barelSaunaImg from "@/assets/Barel_sauna.png";
import drySaunaImg from "@/assets/Dry_Sauna.png";
import infraredSaunaImg from "@/assets/Infared_Sauna.png";
import hybridSaunaImg from "@/assets/Hybrid_Sauna.png";
import steamHammamImg from "@/assets/Steam_Room_Hammam.png";
import plungePoolsImg from "@/assets/Plunge_Pools.png";
import recoveryPoolImg from "@/assets/Ice_Bath_Luxe_Aus_Alfresco_1.webp";
import naturalFibreImg from "@/assets/Natural_Fibre_Insulation.png";
import marineSteelImg from "@/assets/Marine_Grade_Steel.png";
import limeClayImg from "@/assets/Lime_Clay_Renders.png";
import lowVocImg from "@/assets/Low-VOC_Sealants_Finishes.png";
import ourServicesImg from "@/assets/our Services.png";

export { ourServicesImg };

export const BRAND = {
  name: "Element Seven",
  tagline: "Custom Sauna & Recovery Builds",
  slogan: "Built with materials that work for your recovery.",
  headline: "Saunas, steam rooms & plunge pools — built with materials that work for your recovery.",
  heroEyebrow: "Custom builds · Melbourne & Australia-wide",
  heroLead:
    "Custom builds using natural, non-toxic materials. Licensed trades, fixed scope, Australia-wide.",
  heroHeadlineBefore: "Saunas, steam rooms & plunge pools —",
  heroHeadlineAccent: "built with materials that work for your recovery.",
  supportingLine:
    "Architectural wellness environments engineered for recovery, longevity, and human performance.",
  heroHeadlineLines: [
    "Saunas, steam rooms & plunge pools —",
    "built with materials that work",
    "for your recovery.",
  ] as const,
  heroCtaLabel: "Get a fixed-scope quote",
  heroSecondaryCtaLabel: "See what we build",
  description:
    "Element Seven builds custom saunas, steam rooms, plunge pools and recovery suites in Melbourne and across Australia. Natural, non-toxic materials as standard. Licensed trades, fixed-scope contracts.",
  studio: "Melbourne",
  coverage: "Australia-wide",
  serviceAreasHeadline: "Areas We Service",
  serviceAreasSubline: "Melbourne studio · residential & commercial delivery across Victoria.",
  serviceAreasNote:
    "Not on the list? We service other areas across Melbourne and Australia-wide — reach out first and we'll let you know what's possible for your location.",
  phone: "0422 797 790",
  phoneTel: "+61422797790",
  email: "info@element7.com.au",
  studioIdentity:
    "Custom sauna, steam room, and plunge pool builders. Natural, non-toxic materials as standard — licensed trades, fixed-scope contracts, Australia-wide.",
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
  specChips: string[];
  faqs: { q: string; a: string }[];
}

export const SPACES: SpaceDefinition[] = [
  {
    slug: "traditional-dry-sauna",
    title: "Traditional Dry Sauna",
    shortTitle: "Dry Sauna",
    heading: "Traditional Dry Sauna — Built to Specification.",
    label: "Dry heat",
    tagline: "Timber · ventilation · construction",
    subtitle:
      "Custom-framed timber saunas built on site to your space — wood-fired or electric heaters, vapour-rated construction, natural hardwood interiors.",
    description:
      "Custom-framed timber saunas built on site — wood-fired or electric heaters, vapour-rated construction, natural hardwood interiors. Including barrel sauna builds.",
    longDescription:
      "Every dry sauna we build starts with your floor plan and structural constraints — not an off-the-shelf kit. We specify premium cedar and thermo timber, engineer ventilation and heat distribution, coordinate electrical and structural trades, and construct benching, glazing, and lighting to architectural standard. Indoor, outdoor, compact, or multi-person — built on site, built to last.",
    image: barelSaunaImg,
    heroImage: barelSaunaImg,
    mood: "Timber construction · thermal engineering · architectural finish",
    specChips: ["Hemp/wool insulation", "Untreated hardwood", "Low-VOC finish"],
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
      "Panel-system infrared builds with custom cabinetry — engineered for heat performance without synthetic off-gassing in the heated zone.",
    description:
      "Panel-system infrared builds with custom cabinetry — engineered for heat performance without synthetic off-gassing in the heated zone.",
    longDescription:
      "We design and build infrared saunas as integrated architectural elements — not prefabricated boxes dropped into a room. Premium cedar and hemlock construction, low-EMF panel specification, chromotherapy, ventilation, and electrical compliance handled by our team. Every cabinet is sized, detailed, and installed for your property.",
    image: infraredSaunaImg,
    heroImage: infraredSaunaImg,
    mood: "Cabinet construction · panel specification · clean integration",
    specChips: ["Low-EMF panels", "Solid timber cabinetry", "No MDF"],
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
      "Dual-system builds combining traditional heat and infrared in one structure — one fit-out, one materials spec, two heat systems integrated.",
    description:
      "Dual-system builds combining traditional heat and infrared in one structure — one fit-out, one materials spec, two heat systems integrated.",
    longDescription:
      "Hybrid saunas require careful engineering — two heating systems, one timber envelope, one ventilation strategy. We design and construct dual-zone saunas with integrated controls, architectural timber detailing, and full trade coordination. Built for clients who want both traditional and infrared capability in a single, precisely constructed space.",
    image: hybridSaunaImg,
    heroImage: hybridSaunaImg,
    mood: "Dual-system engineering · timber craft · performance build",
    specChips: ["Dual heat systems", "Natural insulation", "One spec"],
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
    title: "Steam Rooms & Hammam",
    shortTitle: "Steam & Hammam",
    heading: "Steam & Hammam — Precision Hydrothermal Build.",
    label: "Steam",
    tagline: "Waterproofing · stone · steam plant",
    subtitle:
      "Fully waterproofed and tiled steam environments — vapour-open lime and clay render systems where possible, fully commissioned and pressure-tested.",
    description:
      "Fully waterproofed and tiled steam environments — vapour-open lime and clay render systems where possible, fully commissioned and pressure-tested.",
    longDescription:
      "Steam and hammam construction demands technical precision — waterproof membranes, fall ratios, generator sizing, and ventilation that protects the building envelope. We design and build hydrothermal rooms in marble and stone, install steam plant and controls, and coordinate tiling, benching, and services. Built for longevity in high-moisture environments.",
    image: steamHammamImg,
    heroImage: steamHammamImg,
    mood: "Waterproof construction · stone installation · steam engineering",
    specChips: ["Lime & clay render", "Full waterproofing", "Commissioned on handover"],
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
    slug: "stainless-steel-plunge",
    title: "Stainless Steel Plunge Pools",
    shortTitle: "Plunge Pools",
    heading: "Plunge Pools — Precision Cold Therapy Build.",
    label: "Cold plunge",
    tagline: "Steel fabrication · chilling · install",
    subtitle:
      "Marine-grade stainless fabrication with chilling plant supply and on-site commissioning — no PVC liners or plastic-bodied components.",
    description:
      "Marine-grade stainless fabrication with chilling plant supply and on-site commissioning — no PVC liners or plastic-bodied components.",
    longDescription:
      "Plunge pool construction combines fabrication and systems engineering — stainless steel vessels, chilling units, filtration, UV sanitisation, and temperature monitoring, set within stone or architectural surrounds. We design and build plunge installations for contrast therapy suites in homes, gyms, and commercial properties.",
    image: plungePoolsImg,
    heroImage: plungePoolsImg,
    mood: "Steel fabrication · chilling plant · precision install",
    specChips: ["316 stainless steel", "No PVC liner", "Chiller included"],
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
  {
    slug: "recovery-pools",
    title: "Recovery Pools & Suites",
    shortTitle: "Recovery Pools",
    heading: "Recovery Pools — Designed & Constructed.",
    label: "Pools",
    tagline: "Stone · services · installation",
    subtitle:
      "Structural pool construction with stone finishes and full systems install — built as part of a complete recovery suite alongside sauna and steam.",
    description:
      "Structural pool construction with stone finishes and full systems install — built as part of a complete recovery suite alongside sauna and steam.",
    longDescription:
      "Recovery pools are construction projects — excavation or structural framing, waterproofing, stone or tile finishes, filtration plant, and temperature control systems. We design and build pools as architectural elements within residential and commercial properties, coordinating landscapers, plumbers, and electricians under one studio.",
    image: recoveryPoolImg,
    heroImage: recoveryPoolImg,
    mood: "Pool construction · stone finishing · systems integration",
    specChips: ["Structural concrete", "Natural stone", "Full suite integration"],
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
  { num: "01", title: "Heat", text: "Sauna & steam for deep therapeutic recovery." },
  { num: "02", title: "Cold", text: "Cold immersion & contrast therapy." },
  { num: "03", title: "Breath", text: "Clean air, natural materials, no off-gassing." },
  { num: "04", title: "Rest", text: "Spaces that slow the nervous system." },
  { num: "05", title: "Movement", text: "Built for daily use, not occasional visits." },
  { num: "06", title: "Nature", text: "Timber, stone, lime & hemp throughout." },
  { num: "07", title: "Connection", text: "Spaces built for people & shared ritual." },
] as const;

export interface MaterialItem {
  title: string;
  text: string;
  image: string | StaticImageData;
}

export const MATERIALS: MaterialItem[] = [
  {
    title: "Natural Timber",
    text: "Untreated hardwoods selected for thermal stability and beauty.",
    image: drySaunaImg,
  },
  {
    title: "Hemp & Wool Insulation",
    text: "Breathable, chemical-free insulation in every wall and ceiling.",
    image: naturalFibreImg,
  },
  {
    title: "Marine-Grade Stainless Steel",
    text: "316-grade fabrication for plunge pools — no PVC, no plastic.",
    image: marineSteelImg,
  },
  {
    title: "Lime & Clay Render",
    text: "Vapour-open natural finishes for steam and wet areas.",
    image: limeClayImg,
  },
  {
    title: "Low-VOC Finishes",
    text: "Formaldehyde-free sealants and coatings on every surface.",
    image: lowVocImg,
  },
];

export const MATERIALS_SPEC_ROWS = [
  { standard: "Glass wool / spray foam", elementSeven: "Hemp & wool insulation" },
  { standard: "Treated softwood / particleboard", elementSeven: "Untreated hardwood" },
  { standard: "Standard adhesives (high VOC)", elementSeven: "Low-VOC, formaldehyde-free" },
  { standard: "PVC pool liners", elementSeven: "Marine-grade stainless steel" },
  { standard: "Synthetic membranes", elementSeven: "Lime & clay renders" },
] as const;

export const MATERIALS_SPEC_CREDENTIALS = [
  {
    title: "Licensed Builders",
    text: "Registered builder's licence — all structural and construction works across Victoria and Australia-wide.",
  },
  {
    title: "NCC Compliant",
    text: "Every build meets the National Construction Code as a minimum. Our materials spec goes further.",
  },
  {
    title: "Low-VOC as Standard",
    text: "Natural, non-toxic materials documented in a materials list — supplied to you at the design stage, every time.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Site review, scope definition, and feasibility — understanding your property and build requirements.",
  },
  {
    number: "02",
    title: "Design & Spec",
    description: "Drawings, services coordination, and fixed-scope documentation.",
    tag: "Materials list issued",
  },
  {
    number: "03",
    title: "Build",
    description:
      "On-site construction with our own licensed trades — framing, waterproofing, electrical, and systems.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "Commissioning, testing, and handover — complete, documented, and ready to use.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "Servicing, maintenance guidance, and long-term support from the team that built it.",
  },
] as const;
