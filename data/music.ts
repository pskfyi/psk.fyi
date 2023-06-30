import { Day } from "../utils/date.ts";
import { MediaItem, MediaService, Structured } from "./media.ts";
import { mediaItem } from "./media.ts";
import { Review, UnratedIndicator } from "./types.ts";

declare namespace AlbumData {
  export type Base = MediaItem & {
    type: "album";
    released: Day;
    tags: string[];
  };
  export type Reviewed = Base & Review;
  export type Unreviewed = Base & { impression: UnratedIndicator };
}

type AlbumData = AlbumData.Reviewed | AlbumData.Unreviewed;
type ReleaseData = AlbumData;

type ArtistData = MediaItem & { name: string; releases: Array<ReleaseData> };

export declare namespace Album {
  export type Reviewed = Structured<AlbumData.Reviewed>;
  export type Unreviewed = Structured<AlbumData.Unreviewed>;
}

export type Album = Album.Reviewed | Album.Unreviewed;
type Release = Album;

export type MusicArtist = Structured<Omit<ArtistData, "releases">> & {
  type: "music";
  releases: { [Slug: string]: Release };
};

export function musicArtist(meta: ImportMeta, data: ArtistData): MusicArtist {
  const { releases: _releases, ...artist } = mediaItem(data, "music", meta.url);

  const releases: { [Slug: string]: Release } = {};

  if (typeof artist.img !== "function") {
    if (artist.img.src === `/music/${artist.slug}.webp`) {
      artist.img.src = `/music/${artist.slug}/index.webp`;
    }
  }

  for (const { name, tab, img: pic, ...release } of _releases) {
    const title = typeof name === "string" ? name : tab!;
    const slug = title.toLowerCase()
      .replaceAll(".", "")
      .replace(/ /g, "-");
    const path = `/music/${artist.slug}/${slug}`;

    const img = pic === undefined
      ? { src: `${path}.webp` }
      : typeof pic === "string"
      ? { src: pic }
      : {
        src: `${path}.webp`,
        ...pic,
      };

    releases[slug] = { name, tab, ...release, img, slug, path } as Album;

    for (const tag of release.tags) {
      if (!artist.tags.includes(tag)) artist.tags.push(tag);
    }

    releases[slug].tags.unshift("Music");
  }

  return { ...artist, releases: releases };
}

function isReviewed(album: Album): album is Album.Reviewed {
  return "rating" in album;
}

export class MusicMediaService extends MediaService<MusicArtist> {
  get reviewedAlbums() {
    return this.values
      .flatMap((band) => Object.values(band.releases).filter(isReviewed));
  }

  reviewedAlbumsBy(
    key: keyof Album.Reviewed,
    direction: "asc" | "desc" = "desc",
  ) {
    return this.reviewedAlbums.toSorted((a, b) =>
      // deno-lint-ignore ban-ts-comment
      // @ts-ignore
      a[key] > b[key]
        ? (direction === "asc" ? 1 : -1)
        : (direction === "asc" ? -1 : 1)
    );
  }
}
