import Char from "/components/Char.tsx";
import DateLine from "/components/DateLine.tsx";
import Page from "/components/Page.tsx";
import Pic from "/components/Pic.tsx";
import Tag from "/components/Tag.tsx";
import { ARTISTS } from "/data/music/index.ts";

export default (
  { params }: { params: { artistSlug: string; releaseSlug: string } },
) => {
  const artist = ARTISTS.bySlug[params.artistSlug];
  const release = artist.releases[params.releaseSlug];

  return (
    <Page
      tab={`${release.name} - ${artist.name}`}
      heading={release.name}
      preview={{
        image: release.img.src,
        ...release.preview,
        description: "A music review by Patrick Sean Keenan.",
      }}
    >
      {["S", "A", "B"].includes(release.rating) && (
        <Pic.Dynamic img={release.img} class="mx(6 sm:auto)" />
      )}
      <Tag.Block tags={release.tags} class="mt-4 mb-2" />
      <DateLine
        dates={{ released: release.released, reviewed: release.reviewed }}
      />
      <Char.Verdict rating={release.rating} />
      {release.content}
    </Page>
  );
};
