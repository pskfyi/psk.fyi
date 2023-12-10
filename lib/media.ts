import type { JSX } from "preact";
import type { Color } from "./colors.ts";
import type { Day } from "./date.ts";
import type { SocialMediaPreview } from "./social.ts";
import type { Tier } from "./tiers.ts";
import type { Pic } from "/components/Pic.tsx";

import { basename } from "$std/path/mod.ts";
import { WELL_KNOWN_TAGS } from "./tags.ts";

export type Review = {
  img?:
    | string
    | (Omit<Pic.Props, "src"> & { src?: string; badgeBorder?: Color });
  reviewed: Day;
  modified?: Day;
  content: string | JSX.Element;
  rating: Tier;
  tags?: string[];
};

export type MediaImgDef =
  | string
  | (Omit<Pic.Props, "src"> & {
    badgeBorder?: Color;
    src?: string;
    prompt?: string;
  })
  | ((() => JSX.Element) & { src: string });

export type MediaImg = Pic.Props & {
  badgeBorder?: Color;
  prompt?: string;
};

export type MediaType =
  | "book"
  | "film"
  | "tv"
  | "game"
  | "music"
  | "post";

export type MediaItem = {
  /** Used in the browser tab and as the default heading. */
  name: string;
  /** Customize the heading's rendering. */
  heading?: JSX.Element;
  img?: MediaImgDef;
  preview?: Omit<SocialMediaPreview, "large">;
  tags?: string[];
  released: Day;
};

export type Structured<T extends Record<string, unknown>> =
  & Omit<T, "img" | "preview">
  & {
    slug: string;
    path: string;
    tags: string[];
    preview: SocialMediaPreview;
    img: MediaImg | ((() => JSX.Element) & { src: string });
  };

export function mediaItem<M extends MediaType, T extends MediaItem>(
  media: T,
  type: M,
  filePath: string,
): Structured<T> & { type: M } {
  const slug = basename(filePath, ".tsx");
  const path = `/${type}/${slug}`;
  const tags = [WELL_KNOWN_TAGS[type], ...(media?.tags as [] || [])];

  const { img: image, preview: _preview } = media;
  const img = image === undefined
    ? { src: `/${type}/${slug}.webp` }
    : typeof image === "string"
    ? { src: image }
    : typeof image === "function"
    ? image
    : { src: `/${type}/${slug}.webp`, ...image };

  const preview: SocialMediaPreview = _preview ?? {};
  preview.title ??= media.name;
  preview.large = true;

  if (!preview.image && typeof img !== "function") {
    preview.image ??= img.src;
  }

  return { ...media, slug, path, tags, type, img, preview };
}

// deno-lint-ignore no-explicit-any
export class MediaService<M extends Structured<any>> {
  #values?: Array<M>;

  constructor(readonly bySlug: Record<string, M>) {}

  get values() {
    return this.#values ??= Object.values(this.bySlug);
  }

  sortedBy(key: keyof M, direction: "asc" | "desc" = "desc") {
    return this.values.toSorted((a, b) =>
      a[key] > b[key]
        ? (direction === "asc" ? 1 : -1)
        : (direction === "asc" ? -1 : 1)
    );
  }
}
