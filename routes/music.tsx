import Page from "../components/Page.tsx";
import type { PageProps } from "$fresh/server.ts";
import { ReviewTile } from "../components/ReviewTile.tsx";
import { ARTISTS } from "../data/music/index.ts";

export default function Music(props: PageProps) {
  // TODO: make sortable
  // TODO: make filterable

  return (
    <Page tab="Music">
      <p class="text-center mt-0">by review date</p>

      <ReviewTile.Set media={ARTISTS.reviewedAlbumsBy("reviewed")} />

      <blockquote>
        A backlog of ~50 music reviews is in the process of being migrated and
        revised.
      </blockquote>
    </Page>
  );
}
