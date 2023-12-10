import { ReviewList } from "../components/ReviewList.tsx";
import Page from "/components/Page.tsx";
import { FILMS } from "/data/film/index.ts";

export default () => (
  <Page tab="Films">
    <p class="text-center mt-0">by review date</p>

    <div class="sm:w-[fit-content] mx-auto">
      <ReviewList reviews={FILMS.sortedBy("reviewed")} />
    </div>
  </Page>
);
