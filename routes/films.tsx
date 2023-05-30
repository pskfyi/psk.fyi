import Page from "../components/Page.tsx";
import type { PageProps } from "$fresh/server.ts";
import { ReviewTile } from "../components/ReviewTile.tsx";
import { FILMS } from "../data/film/index.ts";

export default function Films(props: PageProps) {
  // TODO: make sortable
  // TODO: make filterable

  return (
    <Page tab="Films">
      <p class="text-center mt-0">by review date</p>

      <ReviewTile.Set media={FILMS.sortedBy("reviewed")} />

      <blockquote>
        A backlog of ~150 film reviews is in the process of being migrated and
        revised.
      </blockquote>
    </Page>
  );
}
