import Page from "../../components/Page.tsx";
import { DateLine } from "../../components/DateLine.tsx";
import { TagBlock } from "../../components/Tag.tsx";
import { Pic } from "../../components/pics.tsx";
import { full } from "../../utils/date.ts";
import { POSTS } from "../../data/post/index.ts";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { written, ...post } = POSTS.bySlug[params.slug];

  return (
    <Page tab={post.tab ?? post.name} heading={post.name}>
      <Pic.Dynamic img={post.img} />
      <TagBlock tags={post.tags} class="mt-4 mb-2" />
      <DateLine dates={{ written }} format={full} />
      {post.content}
    </Page>
  );
}
