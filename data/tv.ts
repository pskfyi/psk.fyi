import type { Day } from "/lib/date.ts";
import {
  type MediaItem,
  mediaItem,
  MediaService,
  type Review,
  type Structured,
} from "/lib/media.ts";
import type { UnratedIndicator } from "/lib/tiers.ts";

type TelevisionSeasonData = Review & { released: Day };

type TelevisionShowData =
  & MediaItem
  & { seasons: Record<string, TelevisionSeasonData | UnratedIndicator> };

export type TelevisionSeason = Structured<TelevisionSeasonData> & {
  tags: string[];
};

export type TelevisionShow =
  & Structured<Omit<TelevisionShowData, "seasons">>
  & {
    type: "tv";
    reviewed: Day;
    seasons: Record<
      string,
      TelevisionSeason | UnratedIndicator
    >;
  };

function isReviewed(
  season: TelevisionSeason | UnratedIndicator,
): season is TelevisionSeason {
  return typeof season !== "string";
}

function entryIsReviewed(
  entry: [string, TelevisionSeasonData | UnratedIndicator],
): entry is [string, TelevisionSeasonData] {
  return typeof entry[1] !== "string";
}

const TAG_SHOULD_BE_AT_START = /^[A-Z@]/;

export function televisionShow(
  meta: ImportMeta,
  data: TelevisionShowData,
): TelevisionShow {
  const showData = mediaItem(data, "tv", meta.url);
  const show = showData as TelevisionShow;

  const seasonEntries = Object.entries(showData.seasons);
  const originalShowTags = showData.tags.slice();

  if (typeof showData.img !== "function") {
    if (showData.img.src === `/tv/${showData.slug}.webp`) {
      showData.img.src = `/tv/${showData.slug}/index.webp`;
    }
  }

  for (const [seasonSlug, season] of seasonEntries) {
    if (typeof season === "string") continue;

    const slug = seasonSlug;
    const path = `${showData.path}/${seasonSlug}`;

    const { img: pic } = season;
    const img = pic === undefined
      ? { src: `${path}.webp` }
      : typeof pic === "string"
      ? { src: pic }
      : {
        src: `${path}.webp`,
        ...pic,
      };

    const tags = season.tags ?? originalShowTags;

    show.seasons[slug] = {
      ...season,
      slug,
      path,
      tags,
      img,
      preview: {
        title: `${show.name} ${slug.toUpperCase()}`,
        image: img.src,
        large: true,
      },
    };

    for (const tag of season.tags ?? []) {
      if (!showData.tags.includes(tag)) {
        TAG_SHOULD_BE_AT_START.test(tag)
          ? showData.tags.splice(1, 0, tag)
          : showData.tags.push(tag);
      }
    }
  }

  show.reviewed = seasonEntries
    .filter(entryIsReviewed)
    .map(([, season]) => season.reviewed)
    .reduce((latest, next) => next > latest ? next : latest);

  return show;
}

export class TelevisionMediaService extends MediaService<TelevisionShow> {
  get reviewedSeasons() {
    return this.values.flatMap((show) =>
      Object.values(show.seasons)
        .filter(isReviewed)
        .map((season) => [show, season] as const)
    );
  }

  reviewedSeasonsBy(
    key: keyof TelevisionSeason,
    direction: "asc" | "desc" = "desc",
  ) {
    return this.reviewedSeasons.toSorted(([, a], [, b]) =>
      // deno-lint-ignore ban-ts-comment
      // @ts-ignore
      a[key] > b[key]
        ? (direction === "asc" ? 1 : -1)
        : (direction === "asc" ? -1 : 1)
    );
  }
}
