import {
  type MediaItem,
  mediaItem,
  type Review,
  type Structured,
} from "/lib/media.ts";

type GameData = MediaItem & Review;

export type Game = Structured<GameData> & { type: "game" };

export function game(meta: ImportMeta, data: GameData): Game {
  return mediaItem(data, "game", meta.url);
}
