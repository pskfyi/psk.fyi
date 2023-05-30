import type { Review } from "./types.ts";
import { type MediaItem, mediaItem, type Structured } from "./media.ts";

type BookData = MediaItem & Review & {
  author: string;
  authorUrl: string;
  published: string;
};

export type Book = Structured<BookData> & { type: "book" };

export function book(meta: ImportMeta, data: BookData): Book {
  return mediaItem(data, "book", meta.url);
}
