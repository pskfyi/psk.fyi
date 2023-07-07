import Page from "/components/Page.tsx";
import { PostTile } from "/components/PostTile.tsx";
import { POSTS } from "/data/post/index.ts";

export default () => (
  <Page tab="Posts">
    <p class="text-center mt-0">by date of writing</p>

    <PostTile.Set posts={POSTS.sortedBy("written")} headingLevel={2} />

    <blockquote>
      A backlog of ~20 posts is in the process of being migrated and revised.
    </blockquote>
  </Page>
);
