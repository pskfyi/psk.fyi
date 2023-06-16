import Page from "../../components/Page.tsx";
import { PostTile } from "../../components/PostTile.tsx";
import { Tag } from "../../components/Tag.tsx";
import { POSTS } from "../../data/post/index.ts";
import { formatTag } from "../../data/tags.ts";

export default function BlogPost({ params }: { params: { name: string } }) {
  const tag = params.name;
  const hasTag = (media: { tags: string[] }) => media.tags.includes(tag);

  const mediaTypes = [
    ["Post", POSTS.sortedBy("written").filter(hasTag)] as const,
  ].filter(([, media]) => media.length > 0);

  return (
    <Page tab={formatTag(tag)}>
      {mediaTypes.map(([type, media]) => (
        <>
          <Tag.Header for={type} />
          <PostTile.Set posts={media} />
        </>
      ))}
    </Page>
  );
}
