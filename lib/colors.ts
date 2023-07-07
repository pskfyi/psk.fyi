export const COLORS = {
  "torch": {
    light: "oklab(0.97 0.02 0.02)",
    glow: "oklab(0.88 0.05 0.08)",
    halo: "oklch(0.86 0.16 62.15)",
    flame: "oklab(0.78 0.11 0.16)",
    plasma: "oklab(0.73 0.16 0.17)",
    warmth: "oklab(0.46 0.1 0.11)",
    wood: "lab(21 14.77 33.82)",
    smoke: "#302b27",
    soot: "#201d1a",
    ash: "#b5a89d",
  },
};

export type Color = keyof typeof COLORS.torch;

export const DARK_COLORS = ["smoke", "soot", "wood", "warmth"] as const;
export const LIGHT_COLORS = [
  "light",
  "ash",
  "glow",
  "halo",
  "flame",
  "plasma",
] as const;

export type DarkColor = typeof DARK_COLORS[number];
export type LightColor = typeof LIGHT_COLORS[number];

export function isDark(color: string): color is DarkColor {
  return DARK_COLORS.includes(color as DarkColor);
}

export function isLight(color: string): color is LightColor {
  return LIGHT_COLORS.includes(color as LightColor);
}

export type Palette = {
  bg: string;
  text: string;
  textHover: string;
  textSecondary?: string;
};

export const PALETTES = {
  wood: {
    bg: "torch-wood",
    text: "torch-glow",
    textHover: "torch-halo",
  } as Palette,
  warmth: {
    bg: "torch-warmth",
    text: "torch-glow",
    textHover: "torch-light",
  } as Palette,
  black: {
    bg: "black",
    text: "torch-ash",
    textHover: "torch-light",
  } as Palette,
  soot: {
    bg: "torch-soot",
    text: "torch-ash",
    textHover: "torch-light",
  } as Palette,
  smoke: {
    bg: "torch-smoke",
    text: "torch-ash",
    textHover: "white",
    textSecondary: "torch-ash",
  } as Palette,
  ash: {
    bg: "torch-ash",
    text: "torch-smoke",
    textHover: "black",
  } as Palette,
  glow: {
    bg: "torch-glow",
    text: "torch-smoke",
    textHover: "black",
  } as Palette,
  halo: {
    bg: "torch-halo",
    text: "torch-soot",
    textHover: "black",
    textSecondary: "torch-smoke",
  } as Palette,
  flame: {
    bg: "torch-flame",
    text: "torch-soot",
    textHover: "black",
    textSecondary: "torch-smoke",
  } as Palette,
  plasma: {
    bg: "torch-plasma",
    text: "torch-soot",
    textHover: "black",
    textSecondary: "torch-smoke",
  } as Palette,
} satisfies Record<string, Palette>;

export type PaletteName = keyof typeof PALETTES;
