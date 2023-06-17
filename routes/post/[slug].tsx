import Page from "../../components/Page.tsx";
import { DateLine } from "../../components/DateLine.tsx";
import { Tag } from "../../components/Tag.tsx";
import { Pic } from "../../components/Pic.tsx";
import { full } from "../../utils/date.ts";
import { POSTS } from "../../data/post/index.ts";
import { MediaItem, Structured } from "../../data/media.ts";

export function previewImage(media: Structured<MediaItem>) {
  return media.preview?.image ||
    (typeof media.img === "object" && media.img.src) ||
    undefined;
}

export default ({ params }: { params: { slug: string } }) => {
  const { written, ...post } = POSTS.bySlug[params.slug];

  return (
    <Page
      tab={post.name}
      heading={post.name}
      preview={post.preview}
    >
      <Pic.Dynamic img={post.img} />
      <Tag.Block tags={post.tags} class="mt-4 mb-2" />
      <DateLine dates={{ written }} format={full} />
      {post.content}
    </Page>
  );
};
