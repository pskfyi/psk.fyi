import Page from "../../components/Page.tsx";
import { DateLine } from "../../components/DateLine.tsx";
import { TagBlock } from "../../components/Tag.tsx";
import { Pic } from "../../components/pics.tsx";
import { full } from "../../utils/date.ts";
import { POSTS } from "../../data/post/index.ts";
import { previewImage } from "../../utils/og.ts";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { written, ...post } = POSTS.bySlug[params.slug];

  const tab = post.tab ?? post.name;

  return (
    <Page
      tab={tab}
      heading={post.name}
      previewImage={previewImage(post)}
      largePreviewImage
      previewDescription="A blog post by Patrick Sean Keenan."
    >
      <Pic.Dynamic img={post.img} />
      <TagBlock tags={post.tags} class="mt-4 mb-2" />
      <DateLine dates={{ written }} format={full} />
      {post.content}
    </Page>
  );
}
