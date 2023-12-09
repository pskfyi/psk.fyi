import type { MediaType } from "/lib/media.ts";

export const BOOK_TAG = "book";
export const FILM_TAG = "film";
export const GAME_TAG = "game";
export const MUSIC_TAG = "music";
export const POST_TAG = "post";
export const TV_TAG = "tv";

export const WELL_KNOWN_TAGS = {
  post: POST_TAG,
  game: GAME_TAG,
  film: FILM_TAG,
  tv: TV_TAG,
  music: MUSIC_TAG,
  book: BOOK_TAG,
} satisfies Record<MediaType, string>;

export const WELL_KNOWN_TAG_ROUTES = {
  [POST_TAG]: "/posts",
  [GAME_TAG]: "/games",
  [FILM_TAG]: "/films",
  [TV_TAG]: "/tv",
  [MUSIC_TAG]: "/music",
  [BOOK_TAG]: "/books",
};

export function pathForTag(tag: string) {
  return tag in WELL_KNOWN_TAG_ROUTES
    ? WELL_KNOWN_TAG_ROUTES[tag as keyof typeof WELL_KNOWN_TAG_ROUTES]
    : `/tag/${tag}`;
}

export function formatTag(tag: string) {
  return tag.replace(/^([^#@])/, "#$1");
}
