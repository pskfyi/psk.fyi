import type { Day } from "../utils/date.ts";

import { MediaItem, mediaItem, Review, Structured } from "./media.ts";

type GameData = MediaItem & Review & { released: Day };

export type Game = Structured<GameData> & { type: "game" };

export function game(meta: ImportMeta, data: GameData): Game {
  return mediaItem(data, "game", meta.url);
}
