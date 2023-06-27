import { Char } from "../../components/Char.tsx";
import { Link } from "../../components/Link.tsx";
import Page from "../../components/Page.tsx";
import { PostTile } from "../../components/PostTile.tsx";
import tiers from "../../data/post/tiers.tsx";
import { TIERS, UNRATED } from "../../data/tiers.ts";

const TIER_DESCRIPTIONS = [
  [
    "S",
    <>
      Captivating. Among the best <br />ways I have ever spent my time.
    </>,
  ],
  ["A", <>Worthwhile, with minor issues only.</>],
  ["B", <>Worthwhile, but with major issues.</>],
  ["C", <>Background noise.</>],
  ["D", <>Mostly worse than silence.</>],
  ["E", <>Regrettable. I want my time back.</>],
  ["F", <>Unbearable. I bailed out early.</>],
];

const UNRATED_DESCRIPTIONS = [
  ["!", <>It's on my todo list.</>],
  ["?", <>Undecided.</>],
  ["-", <>Hard pass. I'm not interested.</>],
];

export default function AboutMediaRatings() {
  return (
    <Page tab="Media Ratings" heading="Media Ratings">
      <p class="mt-0">
        After grappling with star ratings and 10-point scales for decades, I
        found that I only have 7 conceptual buckets for rating media. This
        naturally aligns with the standard
        <Link.Wiki spaced to="Likert_scale" text="7-point Likert scale" />
        used in psychology research, which underpins the most popular form of
        the
        <Link.Wiki spaced to="Tier_list" text="tier list" />
        format. Because of their renown, tier letters provide a straightforward
        UI primitive for communicating my rating system.
      </p>

      <div className="grid(& cols-7) gap-2 mb-4">
        {TIERS.map((t) => <Char.TierTile rating={t} />)}
      </div>

      <p>
        I've found I rank media by <em>worthwhileness</em>{" "}
        – how much I felt it was a good use of time.
      </p>

      <ul class="list-none mx-auto w-[fit-content] pl-0">
        {TIER_DESCRIPTIONS.map(([tier, text]) => (
          <li class="flex items-center text-lg py-1">
            <span className="inline-block w-10 pr-5
              font(bold display) text(4xl center)">
              {tier}
            </span>
            <span>{text}</span>
          </li>
        ))}
      </ul>

      <p>
        This system and its origins are elaborated upon in this blog post:
      </p>

      <PostTile.Set posts={[tiers]} class="my-6" />

      <p>
        I also have 3 "unrated" indicators for my feelings towards media I
        haven't yet experienced:
      </p>

      <div className="grid(& cols-7) gap-2 my-4">
        {UNRATED.map((indicator, i) => (
          <Char.UnratedTile
            indicator={indicator}
            class={`col-start-${i + 3}`}
          />
        ))}
      </div>

      <ul class="list-none mx-auto w-[fit-content]">
        {UNRATED_DESCRIPTIONS.map(([tier, text]) => (
          <li class="flex items-center text-lg py-1">
            <span className="inline-block w-10 pr-5
              font(bold display) text(4xl center)">
              {tier}
            </span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </Page>
  );
}
