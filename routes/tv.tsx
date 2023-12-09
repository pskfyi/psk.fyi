import Page from "/components/Page.tsx";
import ReviewTile from "/components/ReviewTile.tsx";
import { TV } from "/data/tv/index.ts";

export default () => (
  <Page tab="Television">
    <p class="text-center mt-0">by review date</p>

    <ReviewTile.Set
      media={TV.reviewedSeasonsBy("reviewed")}
    />

    <blockquote>
      A backlog of ~100 TV show reviews are in the process of being migrated and
      revised.
    </blockquote>
  </Page>
);
