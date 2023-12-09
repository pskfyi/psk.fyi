import Char from "/components/Char.tsx";
import DateLine from "/components/DateLine.tsx";
import Page from "/components/Page.tsx";
import Pic from "/components/Pic.tsx";
import Tag from "/components/Tag.tsx";
import { TV } from "/data/tv/index.ts";
import { TelevisionShow } from "/lib/tv.ts";

const seasonTextSize = "text(xl sm:2xl)";

export function SeasonNav(
  { show, season: activeSeason }: { show: TelevisionShow; season?: string },
) {
  const root = `/tv/${show.slug}`;
  const activeClasses =
    "underline font-bold text-torch(flame hover:plasma visited:(flame hover:plasma))";
  const inactiveClasses =
    "no-underline text-torch(glow hover:halo visited:(glow hover:halo))";
  const notReviewedClasses = "text-torch-ash cursor-not-allowed";

  return (
    <nav className="flex w-[fit-content] mx-auto mb-2
      -mt-1 gap(2 sm:4)">
      {Object.keys(show.seasons).map((s) => {
        const classes = s === activeSeason ? activeClasses : inactiveClasses;

        return (
          <a href={`${root}/${s}`} className={`${seasonTextSize} ${classes}`}>
            {s.toUpperCase()}
          </a>
        );
      })}
      {show.seasonsNotReviewed?.map((s) => (
        <span className={`${seasonTextSize} text-torch-ash cursor-not-allowed`}>
          {s.toUpperCase()}
        </span>
      ))}
    </nav>
  );
}

export default function TelevisionSeasonReview(
  { params }: { params: { showSlug: string; seasonSlug: string } },
) {
  const show = TV.bySlug[params.showSlug];
  const season = show.seasons[params.seasonSlug];

  const S = params.seasonSlug.toUpperCase();
  const tab = `${show.name} ${S}`;

  if (typeof season === "string") {
    return (
      <Page tab={tab} heading={show.name}>
        <SeasonNav show={show} />
        <Pic.Dynamic img={show.img} />
        <Tag.Block tags={show.tags} class="my-6" />
        <p class="text(center 3xl) mt-12">
          {S} not yet reviewed.
        </p>
      </Page>
    );
  }

  const { released, reviewed, content, img, rating, tags, preview } = season;

  return (
    <Page
      tab={tab}
      heading={show.name}
      preview={{
        ...preview,
        description: "A television review by Patrick Sean Keenan.",
      }}
    >
      <SeasonNav show={show} season={params.seasonSlug} />
      <Pic.Dynamic img={img} class="mx(6 sm:auto)" />
      <Tag.Block tags={tags} class="mt-4 mb-2" />
      <DateLine dates={{ released, reviewed }} />
      <Char.Verdict rating={rating} />
      {content}
    </Page>
  );
}
