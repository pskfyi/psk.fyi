import type { Day } from "../lib/date.ts";
import {
  type MediaItem,
  mediaItem,
  type Review,
  type Structured,
} from "../lib/media.ts";

type BookData = MediaItem & Review & {
  author: string;
  authorUrl: string;
  published: Day;
};

export type Book = Structured<BookData> & { type: "book" };

export function book(meta: ImportMeta, data: BookData): Book {
  return mediaItem(data, "book", meta.url);
}
