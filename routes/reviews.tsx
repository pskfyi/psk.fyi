import { ReviewList } from "../components/ReviewList.tsx";
import Page from "/components/Page.tsx";
import Tag from "/components/Tag.tsx";
import { BOOKS } from "/data/book/index.ts";
import { FILMS } from "/data/film/index.ts";
import { GAMES } from "/data/game/index.ts";
import { ARTISTS } from "/data/music/index.ts";
import { TV } from "/data/tv/index.ts";
import { BOOK_TAG, FILM_TAG, GAME_TAG, MUSIC_TAG, TV_TAG } from "/lib/tags.ts";

export default () => (
  <Page tab="Reviews">
    <p class="text-center mt-0">by review date</p>

    <div class="sm:w-[fit-content] mx-auto">
      <Tag.Header for={BOOK_TAG} />
      <ReviewList reviews={BOOKS.sortedBy("reviewed")} />

      <Tag.Header for={FILM_TAG} />
      <ReviewList reviews={FILMS.sortedBy("reviewed")} />

      <Tag.Header for={TV_TAG} />
      <ReviewList reviews={TV.reviewedSeasonsBy("reviewed")} />

      <Tag.Header for={GAME_TAG} />
      <ReviewList reviews={GAMES.sortedBy("reviewed")} />

      <Tag.Header for={MUSIC_TAG} />
      <ReviewList reviews={ARTISTS.reviewedAlbumsBy("reviewed")} />
    </div>
  </Page>
);
