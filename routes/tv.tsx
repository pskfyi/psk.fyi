import { ReviewList } from "../components/ReviewList.tsx";
import Page from "/components/Page.tsx";
import { TV } from "/data/tv/index.ts";

export default () => (
  <Page tab="Television">
    <p class="text-center mt-0">by review date</p>

    <div class="sm:w-[fit-content] mx-auto">
      <ReviewList reviews={TV.reviewedSeasonsBy("reviewed")} />
    </div>
  </Page>
);
