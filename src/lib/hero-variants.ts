export type HeroVariant =
  | "story"
  | "catalogue"
  | "portfolio"
  | "sanctuary"
  | "landmark"
  | "editorial"
  | "folio"
  | "invitation"
  | "ember"
  | "glow"
  | "mist"
  | "deep";

export type HeroTextTheme = "cream" | "ink";

export interface HeroVariantConfig {
  scrim: string;
  vignette: string;
  layout: string;
  panelMax: string;
  theme: HeroTextTheme;
  watermark?: boolean;
  decor?: "frame" | "rule";
}

/** Interior hero glass panel — narrower than home (`max-w-3xl` / `lg:max-w-[42rem]`). */
export const INTERIOR_HERO_PANEL_MAX =
  "max-w-[min(100%,18rem)] sm:max-w-[20rem] md:max-w-sm lg:max-w-md";

export const HERO_VARIANTS: Record<HeroVariant, HeroVariantConfig> = {
  story: {
    scrim: "hero-scrim-story",
    vignette: "hero-vignette-story",
    layout: "items-end pb-4 sm:items-center sm:pb-5",
    panelMax: INTERIOR_HERO_PANEL_MAX,
    theme: "cream",
    watermark: true,
  },
  catalogue: {
    scrim: "hero-scrim-catalogue",
    vignette: "hero-vignette-catalogue",
    layout: "items-end pb-4 sm:items-center sm:pb-5",
    panelMax: INTERIOR_HERO_PANEL_MAX,
    theme: "cream",
    decor: "rule",
  },
  portfolio: {
    scrim: "hero-scrim-portfolio",
    vignette: "hero-vignette-portfolio",
    layout: "items-end pb-4 sm:items-center sm:pb-5",
    panelMax: INTERIOR_HERO_PANEL_MAX,
    theme: "cream",
    decor: "frame",
  },
  sanctuary: {
    scrim: "hero-scrim-sanctuary",
    vignette: "hero-vignette-sanctuary",
    layout: "items-end pb-4 sm:items-center sm:pb-5",
    panelMax: "max-w-[min(100%,20rem)] sm:max-w-md lg:max-w-xl",
    theme: "cream",
  },
  landmark: {
    scrim: "hero-scrim-landmark",
    vignette: "hero-vignette-landmark",
    layout: "items-end pb-4 md:items-end md:pb-10",
    panelMax: "max-w-[min(100%,22rem)] sm:max-w-lg md:ml-auto lg:max-w-2xl",
    theme: "cream",
    watermark: true,
  },
  editorial: {
    scrim: "hero-scrim-editorial",
    vignette: "hero-vignette-editorial",
    layout: "items-end pb-4 sm:items-center sm:pb-5",
    panelMax: INTERIOR_HERO_PANEL_MAX,
    theme: "cream",
  },
  folio: {
    scrim: "hero-scrim-folio",
    vignette: "hero-vignette-folio",
    layout: "items-end pb-4 sm:items-center sm:pb-5",
    panelMax: `${INTERIOR_HERO_PANEL_MAX} md:mx-auto`,
    theme: "cream",
    decor: "rule",
  },
  invitation: {
    scrim: "hero-scrim-invitation",
    vignette: "hero-vignette-invitation",
    layout: "items-end justify-center pb-4 md:items-center md:pb-5",
    panelMax: `${INTERIOR_HERO_PANEL_MAX} text-center`,
    theme: "cream",
  },
  ember: {
    scrim: "hero-scrim-ember",
    vignette: "hero-vignette-ember",
    layout: "items-end pb-4 sm:items-center sm:pb-5",
    panelMax: INTERIOR_HERO_PANEL_MAX,
    theme: "cream",
  },
  glow: {
    scrim: "hero-scrim-glow",
    vignette: "hero-vignette-glow",
    layout: "items-end pb-4 sm:items-center sm:pb-5",
    panelMax: INTERIOR_HERO_PANEL_MAX,
    theme: "cream",
  },
  mist: {
    scrim: "hero-scrim-mist",
    vignette: "hero-vignette-mist",
    layout: "items-end pb-4 sm:items-center sm:pb-5",
    panelMax: INTERIOR_HERO_PANEL_MAX,
    theme: "cream",
  },
  deep: {
    scrim: "hero-scrim-deep",
    vignette: "hero-vignette-deep",
    layout: "items-end pb-4 md:items-end md:pb-12",
    panelMax: INTERIOR_HERO_PANEL_MAX,
    theme: "cream",
  },
};

/** Default interior hero style (Steam & Hammam). */
export const INTERIOR_HERO_VARIANT: HeroVariant = "mist";

const TEXT_THEME = {
  cream: {
    eyebrow: "text-cream",
    rule: "bg-sage-light/80",
    title: "text-cream",
    accent: "text-sage-light",
    lead: "text-cream/80",
    mobileLink: "text-cream/80 hover:text-cream",
  },
  ink: {
    eyebrow: "text-olive",
    rule: "bg-olive/60",
    title: "text-ink",
    accent: "italic text-olive",
    lead: "text-ink-muted",
    mobileLink: "text-ink/70 hover:text-ink",
  },
} as const;

export function heroTextClasses(theme: HeroTextTheme) {
  return TEXT_THEME[theme];
}
