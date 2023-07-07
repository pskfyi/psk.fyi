import type { PaletteName } from "../lib/colors.ts";

export const TIERS = ["F", "E", "D", "C", "B", "A", "S"] as const;
export type Tier = typeof TIERS[number];

export const TIER_COLORS = {
  F: "black",
  E: "smoke",
  D: "ash",
  C: "glow",
  B: "halo",
  A: "flame",
  S: "plasma",
} as Record<Tier, PaletteName>;

export const UNRATED = ["-", "?", "!"] as const;
export type UnratedIndicator = typeof UNRATED[number];

export const UNRATED_COLORS = {
  "-": "soot",
  "?": "wood",
  "!": "warmth",
} as Record<UnratedIndicator, PaletteName>;
