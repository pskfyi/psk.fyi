import type { JSX } from "preact";
import { type PaletteName, PALETTES } from "/lib/colors.ts";
import { type Tier, TIER_COLORS } from "/lib/tiers.tsx";

import Docs from "/components/Docs.tsx";

declare namespace Char {
  export type TileProps = {
    palette: PaletteName;
    /** The aspect ratio of the tile */
    aspectRatio?: string;
    /** Classes for the container */
    class?: string;
    /** The character to display */
    char: string;
    /** Classes for the letter itself */
    charClass?: string;
    /** A label to display below the character */
    label?: string;
    /** Classes for the label */
    labelClass?: string;
  };

  export type TierTileProps = { class?: string; rating: Tier };

  export type TierBadgeProps = Char.TierTileProps & {
    border?: boolean | "inner" | "outer";
  };
}

function Char(
  {
    aspectRatio = "3/5",
    class: className,
    charClass,
    char,
    label,
    labelClass,
    palette: paletteName,
  }: Char.TileProps,
) {
  const palette = PALETTES[paletteName];

  palette.textSecondary ??= palette.text;
  const { bg, text, textHover, textSecondary } = palette;
  const borderClass = bg === "torch-soot"
    ? `border(2 ${text})`
    : bg === "torch-smoke"
    ? `border(1 ${text})`
    : "";

  return (
    <div
      className={`center transition-colors
        text(${text} visited:${text} hover:(${textHover} visited:${textHover}))
        bg-${bg} ${borderClass} ${className}`}
      style={{
        aspectRatio,
        containerType: "size",
      }}
    >
      <span
        class={`font-display text([80cqh]) leading(none) ${charClass}`}
      >
        {char}
      </span>
      {label && (
        <span
          class={`absolute left-0 right-0 leading-none font-sans font-bold
            text(center [13cqh] ${textSecondary}) bottom-[4cqh] ${labelClass}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}

Char.TierTile = function TierTile(
  { rating, class: className }: Char.TierTileProps,
) {
  const paletteName = TIER_COLORS[rating];
  const { bg, text } = PALETTES[paletteName];
  const borderClass = bg === "torch-soot" ? `border(2 ${text})` : "";

  const nudge = rating === "D"
    ? "pr-[4cqw]"
    : rating === "C"
    ? "pr-[4cqw]"
    : rating === "F"
    ? "pr-[8cqw]"
    : "";

  return (
    <Char
      char={rating}
      palette={paletteName}
      charClass={nudge}
      class={`font-black rounded-lg ${borderClass} ${className}`}
      label="TIER"
    />
  );
};

const CHAR_BADGE_NUDGE = {
  A: "",
  B: "",
  C: "relative right-[3cqw]",
  D: "relative right-[2cqw]",
  E: "sm:(relative right-[2cqw])",
  F: "relative right([6cqw] sm:[4cqw])",
  S: "relative right([-2cqw])",
};

Char.TierBadge = function TierBadge(
  { class: className, rating }: Char.TierBadgeProps,
) {
  const paletteName = TIER_COLORS[rating];
  const nudge = CHAR_BADGE_NUDGE[rating];

  return (
    <Char
      aspectRatio="4/5"
      char={rating}
      palette={paletteName}
      charClass={`fake-font-black text-[100cqh] pt([10cqh] sm:[5cqh]) ${nudge}`}
      class={className}
    />
  );
};

Char.Verdict = function Verdict({ rating }: { rating: Tier }) {
  return (
    <a href="/about/ratings" class="no-underline float-left ml-1 mr-3 mt-2">
      <Char.TierTile rating={rating} class="w([3.2rem] sm:[3.4rem])" />
    </a>
  );
};

export default Char;

export function TierTileDocs(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <Docs
      component={Char.TierTile}
      desc={
        <p>
          The <code>Char</code>{" "}
          component is used to display a single character in a particular color
          palette. It comes in many premade flavors for displaying tier ratings
          and unrated indicators. This documentation showcases the{" "}
          <code>TierTile</code> variant.
        </p>
      }
      props={{
        rating: "The tier rating, S through F",
      }}
      examples={[
        [
          '<Char.TierTile rating="S">',
          <Char.TierTile rating="S" class="w-20" />,
        ],
      ]}
      {...props}
    />
  );
}
