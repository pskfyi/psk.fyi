import type { JSX } from "preact";
import type { PaletteName } from "./colors.ts";

export const TIERS = ["F", "E", "D", "C", "B", "A", "S"] as const;
export type Tier = typeof TIERS[number];

export const TIER_COLORS: Record<Tier, PaletteName> = {
  F: "black",
  E: "smoke",
  D: "ash",
  C: "glow",
  B: "halo",
  A: "flame",
  S: "plasma",
};

const MISTAKE_OR_ERROR = "This should have a full review. If you can see" +
  "this, it is a mistake or an error has occurred.";
const NOTHING_TO_SAY = "This did not receive a full review because I have" +
  "nothing to say beyond its rating.";

export const PLACEHOLDER_CONTENT: Record<Tier, JSX.Element> = {
  S: (
    <i>
      S-Tier is the highest tier. {MISTAKE_OR_ERROR}
    </i>
  ),
  A: (
    <i>
      A-Tier is the second-highest tier. {MISTAKE_OR_ERROR}
    </i>
  ),
  B: (
    <i>
      B-Tier is the third-highest tier. {MISTAKE_OR_ERROR}
    </i>
  ),
  C: (
    <i>
      C-Tier media is background noise. {NOTHING_TO_SAY}
    </i>
  ),
  D: (
    <i>
      D-Tier media is worse than silence except for a few facets or moments,
      often only relevant for genre fans. {NOTHING_TO_SAY}
    </i>
  ),
  E: (
    <i>
      E-Tier media was a waste of time, but tricked me into consuming it, and I
      resent it for doing so. {NOTHING_TO_SAY}
    </i>
  ),
  F: (
    <i>
      F-Tier media is so disengaging that I could not finish it.{" "}
      {NOTHING_TO_SAY}
    </i>
  ),
};
