import Page from "../../../components/Page.tsx";
import { Char } from "../../../components/Char.tsx";
import { Pic } from "../../../components/pics.tsx";
import { DateLine } from "../../../components/DateLine.tsx";
import { TagBlock } from "../../../components/Tag.tsx";
import { ARTISTS } from "../../../data/music/index.ts";
import { ByLine } from "../../../components/ByLine.tsx";

export default function AlbumReview(
  { params }: { params: { artistSlug: string; releaseSlug: string } },
) {
  const artist = ARTISTS.bySlug[params.artistSlug];
  const release = artist.releases[params.releaseSlug];

  const { released } = release;

  return (
    <Page tab={release.tab ?? release.name} heading={release.name}>
      <ByLine
        type="album"
        href={artist.path}
        name={artist.name}
        class="mt-1 mb-3"
      />
      <Pic.Dynamic img={release.img} class="mx(6 sm:auto)" />
      <TagBlock tags={release.tags} class="mt-4 mb-2" />
      {"rating" in release
        ? (
          <>
            <DateLine dates={{ released, reviewed: release.reviewed }} />
            <Char.Verdict rating={release.rating} />
            {release.content}
          </>
        )
        : (
          <>
            <DateLine dates={{ released }} />
            <p class="text(center 3xl) mt-12">
              {release.name} not yet reviewed.
            </p>
          </>
        )}
    </Page>
  );
}
