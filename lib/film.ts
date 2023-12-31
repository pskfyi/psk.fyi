import {
  type MediaItem,
  mediaItem,
  type Review,
  type Structured,
} from "/lib/media.ts";

type FilmData = MediaItem & Review;

export type Film = Structured<FilmData> & { type: "film" };

export function film(meta: ImportMeta, data: FilmData): Film {
  return mediaItem(data, "film", meta.url);
}
