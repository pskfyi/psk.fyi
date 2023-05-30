import Page from "../../../components/Page.tsx";
import { TelevisionShow } from "../../../data/tv.ts";
import { Char } from "../../../components/Char.tsx";
import { TagBlock } from "../../../components/Tag.tsx";
import { Pic } from "../../../components/pics.tsx";
import { TV } from "../../../data/tv/index.ts";

export function SeasonNav(
  { show, season }: { show: TelevisionShow; season?: string },
) {
  const root = `/tv/${show.slug}`;
  const activeClasses =
    "double-underline font-bold text-torch(flame hover:plasma visited:(flame hover:plasma))";
  const inactiveClasses =
    "no-underline text-torch(glow hover:halo visited:(glow hover:halo))";

  return (
    <nav className="flex w-[fit-content] mx-auto mb-2
      -mt-1 gap(2 sm:3)">
      <a href={root} class={season ? inactiveClasses : activeClasses}>
        Show
      </a>
      <span class="text-torch-ash leading([1.4] sm:[1.6])">{" | "}</span>
      {Object.keys(show.seasons).map((s) => {
        if (typeof show.seasons[s] === "string") {
          return (
            <span className={`text-torch-ash cursor-not-allowed`}>
              {s.toUpperCase()}
            </span>
          );
        }

        const href = `${root}/${s}`;
        const classes = s === season ? activeClasses : inactiveClasses;

        return (
          <a href={href} className={classes}>
            {s.toUpperCase()}
          </a>
        );
      })}
    </nav>
  );
}

export default function TelevisionShow(
  { params }: { params: { showSlug: string } },
) {
  const show = TV.bySlug[params.showSlug];
  const { img, tab, name, seasons } = show;
  const seasonEntries = Object.entries(seasons);

  return (
    <Page tab={tab ?? name} heading={name}>
      <SeasonNav show={show} />
      <Pic.Dynamic img={img} />
      <TagBlock tags={show.tags} class="my-6" />

      <div
        className={`gap-x-6 w-[fit-content] mx-auto leading-none text-torch-ash 
          gap-y(2 sm:4) grid(& cols-3 rows-${seasonEntries.length})`}
        style={{ gridTemplateColumns: "auto auto auto" }}
      >
        {seasonEntries.map(([season, data]) =>
          typeof data === "string"
            ? (
              <>
                <span
                  className={`font-bold text-torch-ash cursor-not-allowed self-center`}
                >
                  {season.toUpperCase()}
                </span>
                {data === "!"
                  ? <div class="self-center">Want to see.</div>
                  : data === "?"
                  ? <div class="self-center">Not yet seen.</div>
                  : <div class="self-center">Do not want to see.</div>}
                <Char.UnratedBadge
                  indicator={data}
                  class="w(8 sm:10) rounded"
                />
              </>
            )
            : (
              <>
                <a class="font-bold self-center" href={data.path}>
                  {season.toUpperCase()}
                </a>
                <div class="self-center">Reviewed {data.reviewed}.</div>
                <Char.TierBadge
                  rating={data.rating}
                  class="w(8 sm:10) rounded"
                />
              </>
            )
        )}
      </div>
    </Page>
  );
}
