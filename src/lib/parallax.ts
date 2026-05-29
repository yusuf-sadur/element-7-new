export type ParallaxIntensity = "hero" | "strong" | "medium" | "subtle" | "none";

export type SectionTone = "ink" | "stone" | "charcoal";

export const SECTION_TONES: Record<SectionTone, string> = {
  ink: "#0D0D0D",
  stone: "#F2EEE8",
  charcoal: "#171717",
};

/** Scroll-linked drift (px) per section as it crosses the viewport */
export const SECTION_SCROLL_DRIFT: Record<
  Exclude<ParallaxIntensity, "hero">,
  number
> = {
  none: 0,
  strong: 52,
  medium: 36,
  subtle: 22,
};

export const MOBILE_PARALLAX_SCALE = 0.55;
