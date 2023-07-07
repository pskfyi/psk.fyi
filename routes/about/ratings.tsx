import type { JSX } from "preact/jsx-runtime";
import type { SocialMediaPreview } from "/lib/social.ts";
import type { Tier, UnratedIndicator } from "/lib/tiers.ts";

import Char from "/components/Char.tsx";
import Page from "/components/Page.tsx";
import { PostTile } from "/components/PostTile.tsx";
import tiers from "/data/post/tiers.tsx";

const TIER_DESCRIPTIONS: Array<[Tier, JSX.Element]> = [
  ["S", <>Among the best ways I have ever spent my time.</>],
  ["A", <>Worthwhile, with minor issues only.</>],
  ["B", <>Worthwhile, but with major issues.</>],
  ["C", <>Background noise.</>],
  ["D", <>Mostly worse than silence.</>],
  ["E", <>Regrettable. I want my time back.</>],
  ["F", <>Unbearable. I bailed out early.</>],
];

const UNRATED_DESCRIPTIONS: Array<[UnratedIndicator, JSX.Element]> = [
  ["!", <>It's on my todo list.</>],
  ["?", <>Haven't watched, and undecided about doing so.</>],
  ["-", <>I am not interested in watching this.</>],
];

const preview: SocialMediaPreview = {
  description: "About the tier system.",
  image: "/tiers.webp",
  large: true,
};

export default () => (
  <Page tab="Media Ratings" preview={preview}>
    <div
      class="grid w-[fit-content] mx-auto gap-x(2 sm:4) gap-y-2 pl-4"
      style={{ gridTemplateColumns: "auto 1fr" }}
    >
      {TIER_DESCRIPTIONS.map(([tier, text]) => (
        <>
          <Char.TierTile rating={tier} class="w(10 12)" />
          <span class="self-center sm:text-xl">{text}</span>
        </>
      ))}

      {UNRATED_DESCRIPTIONS.map(([indicator, text], i) => (
        <>
          <Char.UnratedTile
            indicator={indicator}
            class="w(10 sm:12)"
          />
          <span class="self-center sm:text-xl">{text}</span>
        </>
      ))}
    </div>

    <hr />

    <p>
      The system is elaborated upon in this blog post:
    </p>

    <PostTile.Set posts={[tiers]} class="my-6" />
  </Page>
);
