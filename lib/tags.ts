import type { MediaType } from "/lib/media.ts";

export const BOOK_TAG = "Book";
export const FILM_TAG = "Film";
export const GAME_TAG = "Game";
export const MUSIC_TAG = "Music";
export const POST_TAG = "Post";
export const TV_TAG = "TV";

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
