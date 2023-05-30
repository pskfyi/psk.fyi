import Page from "../components/Page.tsx";
import type { PageProps } from "$fresh/server.ts";
import { ReviewTile } from "../components/ReviewTile.tsx";
import { TV } from "../data/tv/index.ts";

export default function Television(props: PageProps) {
  // TODO: make sortable
  // TODO: make filterable

  return (
    <Page tab="Television">
      <p class="text-center mt-0">by review date</p>

      <ReviewTile.Set
        media={TV.reviewedSeasonsBy("reviewed")
          .map(([show, { slug: S }]) => ({ ...show, S }))}
      />

      <blockquote>
        A backlog of ~100 TV show reviews are in the process of being migrated
        and revised.
      </blockquote>
    </Page>
  );
}
