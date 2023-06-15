import type { JSX } from "preact";
import type { Pic } from "../components/Pic.tsx";
import { basename } from "https://deno.land/std@0.187.0/path/mod.ts";
import { WELL_KNOWN_TAGS } from "./tags.ts";
import { Color } from "./colors.ts";
import { SocialMediaPreview } from "../types.ts";

export type MediaImgDef =
  | string
  | (Omit<Pic.Props, "src"> & {
    badgeBorder?: Color;
    src?: string;
    prompt?: string;
  })
  | (() => JSX.Element);

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
  /** The primary heading. */
  name: string;
  img?: MediaImgDef;
  preview?: Omit<SocialMediaPreview, "large">;
  tags?: string[];
};

export type Structured<T extends Record<string, unknown>> =
  & Omit<T, "img" | "preview">
  & {
    slug: string;
    path: string;
    tags: string[];
    preview: SocialMediaPreview;
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

  const { img: image, preview: _preview } = media;
  const img = image === undefined
    ? { src: `/${type}/${slug}.webp` }
    : typeof image === "string"
    ? { src: image }
    : typeof image === "function"
    ? image
    : { src: `/${type}/${slug}.webp`, ...image };

  if (_preview === undefined && typeof img === "function") {
    throw new Error(
      `Media item ${slug} has a component as its image with no fallback for social media previews.`,
    );
  }

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
