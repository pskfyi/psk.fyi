import { Char } from "/components/Char.tsx";
import Page from "/components/Page.tsx";
import { Pic } from "/components/Pic.tsx";
import Tag from "/components/Tag.tsx";
import { ARTISTS } from "/data/music/index.ts";

export default ({ params }: { params: { artistSlug: string } }) => {
  const artist = ARTISTS.bySlug[params.artistSlug];
  const { img, name, releases: releasesBySlug, preview } = artist;
  const releases = Object.values(releasesBySlug);

  return (
    <Page
      tab={name}
      heading={name}
      preview={{
        ...preview,
        description: "Music reviews by Patrick Sean Keenan.",
      }}
    >
      <Pic.Dynamic img={img} />
      <Tag.Block tags={artist.tags} class="my-6" />

      <div
        className={`w-[fit-content] mx-auto leading-none text-torch-ash 
          gap(4 sm:4) grid(& cols-4 rows-${releases.length})`}
        style={{ gridTemplateColumns: "auto 1fr auto" }}
      >
        {releases.map((album) =>
          "impression" in album
            ? (
              <>
                <Pic.Dynamic img={album.img} class="w(16 sm:36) self-center" />

                <div class="flex flex-col justify-center gap-1">
                  <span
                    class={`font-bold text-torch-ash cursor-not-allowed 
                      sm:text-xl leading-none!`}
                  >
                    {album.name}
                  </span>
                  <div class="text-sm leading-none!">
                    Released {album.released}
                  </div>
                  <div class="text-sm leading-none!">
                    {album.impression === "!"
                      ? "Want to review"
                      : album.impression === "?"
                      ? "Not yet reviewed"
                      : "Do not want to review"}
                  </div>
                </div>

                <Char.UnratedBadge
                  indicator={album.impression}
                  class="w(12 sm:14) rounded self-center"
                />
              </>
            )
            : (
              <>
                <a href={album.path} class="self-center">
                  <Pic.Dynamic img={album.img} class="w(16 sm:36)" />
                </a>

                <div class="flex(& col) justify-center gap-1">
                  <a
                    class="font-bold md:text-xl leading-none! mb-1"
                    href={album.path}
                  >
                    {album.name}
                  </a>
                  <div class="text-sm leading-none!">
                    Released {album.released}
                  </div>
                  <div class="text-sm leading-none!">
                    Reviewed {album.reviewed}
                  </div>
                </div>

                <Char.TierBadge
                  rating={album.rating}
                  class="w(12 sm:14) rounded self-center"
                />
              </>
            )
        )}
      </div>
    </Page>
  );
};
