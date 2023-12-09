import { ARTISTS } from "/data/music/index.ts";

export function handler(req: Request): Response {
  const artistSlug = new URL(req.url).pathname.split("/")[2];
  const artist = ARTISTS.bySlug[artistSlug];

  return new Response("", {
    status: 307,
    headers: { Location: `/tag/@${artist.name}` },
  });
}
