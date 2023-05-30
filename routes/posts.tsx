import Page from "../components/Page.tsx";
import type { PageProps } from "$fresh/server.ts";
import { PostTile } from "../components/PostTile.tsx";
import { POSTS } from "../data/post/index.ts";

export const written = new Date("2020/06/20");
export const published = new Date("2022/02/06");

export default function Posts(props: PageProps) {
  // TODO: make sortable
  // TODO: make filterable

  return (
    <Page tab="Posts">
      <p class="text-center mt-0">by date of writing</p>

      <PostTile.Set posts={POSTS.sortedBy("written")} headingLevel={2} />

      <blockquote>
        A backfill of ~20 posts is in the process of being migrated and revised.
      </blockquote>
    </Page>
  );
}
