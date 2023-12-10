import type { JSX } from "preact";
import type { Day } from "/lib/date.ts";
import { type MediaItem, mediaItem, type Structured } from "/lib/media.ts";
import { formatTag } from "/lib/tags.ts";

type PostData = Omit<MediaItem, "released"> & {
  head?: JSX.Element;
  content: JSX.Element;
  written: Day;
  posted: Day;
  updated?: Day;
};

export type Post = Structured<Omit<PostData, "hyphenate">> & { type: "post" };

export function post(meta: ImportMeta, data: PostData): Post {
  const post = mediaItem(data, "post", meta.url);

  post.preview ??= {};
  post.preview.title ??= post.name;
  post.preview.description ??= post.tags.map(formatTag).join(", ");
  post.preview.large = true;

  if (!post.preview.image && typeof post.img !== "function") {
    post.preview.image ??= post.img.src;
  }

  return post;
}
