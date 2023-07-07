import Char from "/components/Char.tsx";
import DateLine from "/components/DateLine.tsx";
import { Link } from "/components/Link.tsx";
import Page from "/components/Page.tsx";
import Pic from "/components/Pic.tsx";
import Tag from "/components/Tag.tsx";
import { ARTISTS } from "/data/music/index.ts";

export default (
  { params }: { params: { artistSlug: string; releaseSlug: string } },
) => {
  const artist = ARTISTS.bySlug[params.artistSlug];
  const release = artist.releases[params.releaseSlug];

  const { released } = release;

  const tab = `${release.name} - ${artist.name}`;
  const previewImage = "src" in release.img ? release.img.src : undefined;

  return (
    <Page
      tab={tab}
      heading={release.name}
      preview={{
        ...release.preview,
        description: "A music review by Patrick Sean Keenan.",
      }}
    >
      <p class="text(center lg sm:xl) leading(none sm:none) mt-1 mb-3">
        An album by <Link eternal to={artist.path}>{artist.name}</Link>.
      </p>
      <Pic.Dynamic img={release.img} class="mx(6 sm:auto)" />
      <Tag.Block tags={release.tags} class="mt-4 mb-2" />
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
};
