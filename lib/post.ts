import type { JSX } from "preact";
import type { Day } from "/lib/date.ts";
import { type MediaItem, mediaItem, type Structured } from "/lib/media.ts";

type PostData = MediaItem & {
  teaser: { text: string; hyphenateOnMobile?: boolean };
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
  post.preview.description ??= post.teaser.text;
  post.preview.large = true;

  if (!post.preview.image && typeof post.img !== "function") {
    post.preview.image ??= post.img.src;
  }

  return post;
}
