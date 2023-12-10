import {
  type MediaItem,
  mediaItem,
  MediaService,
  type Review,
  type Structured,
} from "/lib/media.ts";

export type AlbumData = MediaItem & Review & {
  type: "album";
  tags: string[];
};
type ReleaseData = AlbumData;

type ArtistData = MediaItem & { name: string; releases: Array<ReleaseData> };

export type Album = Structured<AlbumData>;
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

  for (const { name, img: pic, ...release } of _releases) {
    const slug = name.toLowerCase()
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

    releases[slug] = { name, ...release, img, slug, path } as Album;

    for (const tag of release.tags) {
      if (!artist.tags.includes(tag)) artist.tags.push(tag);
    }

    releases[slug].tags.unshift("music");
    releases[slug].tags.push(`@${artist.name}`);
  }

  return { ...artist, releases: releases };
}

export class MusicMediaService extends MediaService<MusicArtist> {
  get reviewedAlbums() {
    return this.values
      .flatMap((band) =>
        Object.values(band.releases)
          .filter((release) => release.type === "album")
      );
  }

  reviewedAlbumsBy(key: keyof Album, direction: "asc" | "desc" = "desc") {
    return this.reviewedAlbums.toSorted((a, b) =>
      a[key]! > b[key]!
        ? (direction === "asc" ? 1 : -1)
        : (direction === "asc" ? -1 : 1)
    );
  }
}
