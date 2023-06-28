import type { JSX } from "preact";
import { PicProps } from "../components/pics.tsx";
import { basename } from "https://deno.land/std@0.187.0/path/mod.ts";
import { WELL_KNOWN_TAGS } from "./tags.ts";
import { Color } from "./colors.ts";

export type MediaImgDef =
  | string
  | (
    & Omit<PicProps, "src">
    & { badgeBorder?: Color; src?: string }
  )
  | (() => JSX.Element);

export type MediaImg = PicProps & { badgeBorder?: Color };

export type MediaType =
  | "book"
  | "film"
  | "tv"
  | "game"
  | "music"
  | "post"
  | "tag"
  | "pic";

export type MediaItem = {
  /** The primary heading. */
  name: string | JSX.Element | (() => JSX.Element);
  img?: MediaImgDef;
  previewImage?: string;
  tags?: string[];
  /** What should appear on the browser tab when on this entity's page.
   * Falls back to the name. */
  tab?: string;
};

export type Structured<T extends Record<string, unknown>> =
  & Omit<T, "img">
  & {
    slug: string;
    path: string;
    tags: string[];
    img: MediaImg | (() => JSX.Element);
  };

export function mediaItem<M extends MediaType, T extends MediaItem>(
  media: T,
  type: M,
  filePath: string,
): Structured<T> & { type: M } {
  const slug = basename(filePath, ".tsx");
  const path = `/${type}/${slug}`;
  const tags = [WELL_KNOWN_TAGS[type], ...(media?.tags as [] || [])];

  const { img: image } = media;
  const img = image === undefined
    ? { src: `/${type}/${slug}.webp` }
    : typeof image === "string"
    ? { src: image }
    : typeof image === "function"
    ? image
    : { src: `/${type}/${slug}.webp`, ...image };

  return { ...media, slug, path, tags, type, img };
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
