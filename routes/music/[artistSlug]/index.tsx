import Page from "../../../components/Page.tsx";
import { Char } from "../../../components/Char.tsx";
import { TagBlock } from "../../../components/Tag.tsx";
import { Pic } from "../../../components/pics.tsx";
import { ARTISTS } from "../../../data/music/index.ts";
import { UnratedIndicator } from "../../../data/types.ts";

export default function Band(
  { params }: { params: { artistSlug: string } },
) {
  const artist = ARTISTS.bySlug[params.artistSlug];
  const { img, tab, name, releases: releasesBySlug } = artist;
  const releases = Object.values(releasesBySlug);

  const previewImage = "src" in artist.img ? artist.img.src : undefined;

  return (
    <Page
      tab={tab ?? name}
      heading={name}
      previewImage={previewImage}
      previewDescription="Music reviews by Patrick Sean Keenan."
      largePreviewImage
    >
      <Pic.Dynamic img={img} />
      <TagBlock tags={artist.tags} class="my-6" />

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
}
