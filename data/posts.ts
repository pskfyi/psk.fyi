import type { JSX } from "preact";
import type { Day } from "../lib/date.ts";
import { type MediaItem, mediaItem, type Structured } from "./media.ts";

type PostData = MediaItem & {
  teaser: string;
  head?: JSX.Element;
  content: JSX.Element;
  written: Day;
  posted: Day;
  updated?: Day;
};

export type Post = Structured<PostData> & { type: "post" };

export function post(meta: ImportMeta, data: PostData): Post {
  const post = mediaItem(data, "post", meta.url);

  post.preview ??= {};
  post.preview.title ??= post.name;
  post.preview.description ??= post.teaser;
  post.preview.large = true;

  if (!post.preview.image && typeof post.img !== "function") {
    post.preview.image ??= post.img.src;
  }

  return post;
}
