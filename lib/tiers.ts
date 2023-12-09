import type { PaletteName } from "./colors.ts";

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
