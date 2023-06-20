import Page from "../components/Page.tsx";
import { ReviewTile } from "../components/ReviewTile.tsx";
import { Tag } from "../components/Tag.tsx";
import { GAMES } from "../data/game/index.ts";

export default () => (
  <Page tab="Reviews">
    <Tag.Header for="Game" />
    <ReviewTile.Set media={GAMES.sortedBy("reviewed")} />

    <blockquote>
      A backlog of hundreds of reviews are in the process of being migrated and
      revised.
    </blockquote>
  </Page>
);
