import { ReviewList } from "../components/ReviewList.tsx";
import Page from "/components/Page.tsx";
import { GAMES } from "/data/game/index.ts";

export default () => (
  <Page tab="Games">
    <p class="text-center mt-0">by review date</p>

    <div class="sm:w-[fit-content] mx-auto">
      <ReviewList reviews={GAMES.sortedBy("reviewed")} />
    </div>
  </Page>
);
