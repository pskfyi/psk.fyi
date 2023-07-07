import type { MediaType } from "../data/media.ts";

export const WELL_KNOWN_TAGS = {
  post: "Post",
  game: "Game",
  film: "Film",
  tv: "TV",
  music: "Music",
  book: "Book",
} satisfies Record<MediaType, string>;

export const WELL_KNOWN_TAG_ROUTES = {
  Post: "/posts",
  Game: "/games",
  Film: "/films",
  TV: "/tv",
  Music: "/music",
  Book: "/books",
};

export function pathForTag(tag: string) {
  return tag in WELL_KNOWN_TAG_ROUTES
    ? WELL_KNOWN_TAG_ROUTES[tag as keyof typeof WELL_KNOWN_TAG_ROUTES]
    : `/tag/${tag}`;
}

export function formatTag(tag: string) {
  return tag.replace(/^([^#@])/, "#$1");
}
