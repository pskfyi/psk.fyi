import { MediaItem } from "../data/media.ts";

export function previewImage(media: MediaItem) {
  return media.previewImage ||
    ("img" in media
      ? ("src" in (media.img as Record<string, string>)
        ? (media.img as Record<string, string>).src as string
        : undefined)
      : undefined);
}
