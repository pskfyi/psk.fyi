import type { JSX } from "preact";
import type { Day } from "../utils/date.ts";
import { type MediaItem, mediaItem, type Structured } from "./media.ts";

type PostData = MediaItem & {
  teaser: string | JSX.Element;
  head?: JSX.Element;
  content: JSX.Element;
  written: Day;
  posted: Day;
  updated?: Day;
};

export type Post = Structured<PostData> & { type: "post" };

export function post(meta: ImportMeta, data: PostData): Post {
  return mediaItem(data, "post", meta.url);
}
