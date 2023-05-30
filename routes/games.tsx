import Page from "../components/Page.tsx";
import type { PageProps } from "$fresh/server.ts";
import { ReviewTile } from "../components/ReviewTile.tsx";
import { GAMES } from "../data/game/index.ts";

export default function Games(props: PageProps) {
  // TODO: make sortable
  // TODO: make filterable

  return (
    <Page tab="Games">
      <p class="text-center mt-0">by review date</p>

      <ReviewTile.Set media={GAMES.sortedBy("reviewed")} />

      <blockquote>
        A backlog of ~50 game reviews is in the process of being migrated and
        revised.
      </blockquote>
    </Page>
  );
}
