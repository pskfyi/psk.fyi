import { JSX } from "preact";
import { PaletteName, PALETTES } from "../data/colors.ts";
import { TIER_COLORS, UNRATED, UNRATED_COLORS } from "../data/tiers.ts";
import type { Tier, UnratedIndicator } from "../data/types.ts";
import { Docs } from "./docs/Docs.tsx";

type CharTileProps = {
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

export function Char(
  {
    aspectRatio = "3/5",
    class: className,
    charClass,
    char,
    label,
    labelClass,
    palette: paletteName,
  }: CharTileProps,
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

export type TierProps = { class?: string; rating: Tier };

Char.TierTile = function TierTile({ rating, class: className }: TierProps) {
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
  "-": "relative top-[-10cqh]",
  "?": "relative top-[5cqh]",
  "!": "",
};

type Border = boolean | "inner" | "outer";

export type CharTierBadgeProps = TierProps & {
  border?: Border;
};

Char.TierBadge = function TierBadge(
  { class: className, rating }: CharTierBadgeProps,
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

const UNRATED_LABEL = {
  "-": "PASS",
  "!": "WANT",
};

export type UnratedProps = { class?: string; indicator: UnratedIndicator };

Char.UnratedTile = function UnratedTile(
  { indicator, class: className }: UnratedProps,
) {
  const color = UNRATED_COLORS[indicator];
  className = `rounded-lg ${className}`;

  return indicator === "-"
    ? (
      <Char
        palette={color}
        char="-"
        charClass="mt-[-10cqh]"
        class={className}
        label={UNRATED_LABEL[indicator]}
      />
    )
    : indicator === "?"
    ? (
      <Char
        palette={color}
        char="?"
        class={className}
        charClass="top-[5cqh]"
      />
    )
    : (
      <Char
        palette={color}
        char="!"
        class={className}
        label={UNRATED_LABEL[indicator]}
      />
    );
};

Char.UnratedBadge = function UnratedBadge(
  { class: className, indicator }: UnratedProps,
) {
  const nudge = indicator === "-"
    ? "-mt-[15cqh]"
    : indicator === "?"
    ? "mt-[10cqh]"
    : "mt([10cqh])";

  return (
    <Char
      aspectRatio="4/5"
      char={indicator}
      palette={UNRATED_COLORS[indicator]}
      charClass={`font-fake-black text-[100cqh] ${nudge}`}
      class={className}
    />
  );
};

Char.Tile = function Tile({ class: className, char }: {
  class?: string;
  char: UnratedIndicator | Tier;
}) {
  const isUnrated = (char: string): char is UnratedIndicator =>
    UNRATED.includes(char as UnratedIndicator);

  return isUnrated(char)
    ? <Char.UnratedTile indicator={char} class={className} />
    : <Char.TierTile rating={char} class={className} />;
};

Char.Badge = function Badge({ class: className, char, border }: {
  class?: string;
  char: UnratedIndicator | Tier;
  border?: boolean;
}) {
  const isUnrated = (char: string): char is UnratedIndicator =>
    UNRATED.includes(char as UnratedIndicator);

  return isUnrated(char)
    ? <Char.UnratedBadge indicator={char} class={className} />
    : <Char.TierBadge rating={char} class={className} border={border} />;
};

Char.Verdict = function Verdict({ rating }: { rating: Tier }) {
  return (
    <a
      href="/about/ratings"
      class="no-underline float-left ml-1 mr-3 mt-2"
    >
      <Char.TierTile rating={rating} class="w([3.2rem] sm:[3.4rem])" />
    </a>
  );
};

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
