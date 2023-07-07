import Page from "/components/Page.tsx";
import { ReviewTile } from "/components/ReviewTile.tsx";
import { BOOKS } from "/data/book/index.ts";

export default () => (
  <Page tab="Books">
    <p class="text-center mt-0">by review date</p>

    <ReviewTile.Set media={BOOKS.sortedBy("reviewed")} />

    <blockquote>
      A backlog of ~50 book reviews is in the process of being migrated and
      revised.
    </blockquote>
  </Page>
);
