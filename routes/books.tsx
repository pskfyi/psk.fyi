import { ReviewList } from "../components/ReviewList.tsx";
import Page from "/components/Page.tsx";
import { BOOKS } from "/data/book/index.ts";

export default () => (
  <Page tab="Books">
    <p class="text-center mt-0">by review date</p>

    <div class="sm:w-[fit-content] mx-auto">
      <ReviewList reviews={BOOKS.sortedBy("reviewed")} />
    </div>
  </Page>
);
