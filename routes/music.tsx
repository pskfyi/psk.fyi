import { ReviewList } from "../components/ReviewList.tsx";
import Page from "/components/Page.tsx";
import { ARTISTS } from "/data/music/index.ts";

export default () => (
  <Page tab="Music">
    <p class="text-center mt-0">by review date</p>

    <div class="sm:w-[fit-content] mx-auto">
      <ReviewList reviews={ARTISTS.reviewedAlbumsBy("reviewed")} />
    </div>
  </Page>
);
