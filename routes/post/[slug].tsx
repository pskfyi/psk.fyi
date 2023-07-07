import type { MediaItem, Structured } from "/lib/media.ts";

import DateLine from "/components/DateLine.tsx";
import Page from "/components/Page.tsx";
import Pic from "/components/Pic.tsx";
import Tag from "/components/Tag.tsx";
import { POSTS } from "/data/post/index.ts";
import { full } from "/lib/date.ts";

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
      heading={post.heading}
      preview={post.preview}
    >
      <Pic.Dynamic img={post.img} />
      <Tag.Block tags={post.tags} class="mt-4 mb-2" />
      <DateLine dates={{ written }} format={full} />
      {post.content}
    </Page>
  );
};
