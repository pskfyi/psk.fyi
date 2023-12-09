import Page from "/components/Page.tsx";
import ReviewTile from "/components/ReviewTile.tsx";
import Tag from "/components/Tag.tsx";
import { BOOKS } from "/data/book/index.ts";
import { FILMS } from "/data/film/index.ts";
import { GAMES } from "/data/game/index.ts";
import { ARTISTS } from "/data/music/index.ts";
import { TV } from "/data/tv/index.ts";
import { BOOK_TAG, FILM_TAG, GAME_TAG, MUSIC_TAG, TV_TAG } from "/lib/tags.ts";

export default () => (
  <Page tab="Reviews">
    <blockquote>
      A backlog of hundreds of reviews are in the process of being migrated and
      revised.
    </blockquote>

    <Tag.Header for={BOOK_TAG} />
    <ReviewTile.Set media={BOOKS.sortedBy("reviewed")} />

    <Tag.Header for={FILM_TAG} />
    <ReviewTile.Set media={FILMS.sortedBy("reviewed")} />

    <Tag.Header for={TV_TAG} />
    <ReviewTile.Set
      media={TV.reviewedSeasonsBy("reviewed")
        .map(([show, { slug: S }]) => ({ ...show, S }))}
    />

    <Tag.Header for={GAME_TAG} />
    <ReviewTile.Set media={GAMES.sortedBy("reviewed")} />

    <Tag.Header for={MUSIC_TAG} />
    <ReviewTile.Set media={ARTISTS.reviewedAlbumsBy("reviewed")} />
  </Page>
);
