import Page from "../components/Page.tsx";
import { ReviewTile } from "../components/ReviewTile.tsx";
import { Tag } from "../components/Tag.tsx";
import { Pic } from "../components/pics.tsx";
import { BOOKS } from "../data/book/index.ts";
import { FILMS } from "../data/film/index.ts";
import { GAMES } from "../data/game/index.ts";
import { ARTISTS } from "../data/music/index.ts";
import { TV } from "../data/tv/index.ts";

export default function About() {
  return (
    <Page tab="Reviews">
      <Pic.Prompted
        color="soot"
        src="/reviews.webp"
        prompt="mdjrny-v4 style, a collage of movie posters, book covers, album covers, and video game covers"
      />

      <blockquote>
        A backlog of hundreds of reviews are in the process of being migrated
        and revised.
      </blockquote>

      <Tag.Header for="Book" />
      <ReviewTile.Set media={BOOKS.sortedBy("reviewed")} />

      <Tag.Header for="Film" />
      <ReviewTile.Set media={FILMS.sortedBy("reviewed")} />

      <Tag.Header for="TV" />
      <ReviewTile.Set
        media={TV.reviewedSeasonsBy("reviewed")
          .map(([show, { slug: S }]) => ({ ...show, S }))}
      />

      <Tag.Header for="Game" />
      <ReviewTile.Set media={GAMES.sortedBy("reviewed")} />

      <Tag.Header for="Music" />
      <ReviewTile.Set media={ARTISTS.reviewedAlbumsBy("reviewed")} />
    </Page>
  );
}
