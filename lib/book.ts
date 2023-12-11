import {
  type MediaItem,
  mediaItem,
  type Review,
  type Structured,
} from "/lib/media.ts";

type BookData = MediaItem & Review & {
  author: string;
  authorUrl: string;
};

export type Book = Structured<BookData> & { type: "book" };

export function book(meta: ImportMeta, data: BookData): Book {
  const book = mediaItem(data, "book", meta.url);

  book.tags.splice(1, 0, `@${book.author}`);

  return book;
}
