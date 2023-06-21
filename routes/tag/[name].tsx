import Page from "../../components/Page.tsx";
import { PostTile } from "../../components/PostTile.tsx";
import { ReviewTile } from "../../components/ReviewTile.tsx";
import { Tag } from "../../components/Tag.tsx";
import { BOOKS } from "../../data/book/index.ts";
import { FILMS } from "../../data/film/index.ts";
import { GAMES } from "../../data/game/index.ts";
import { POSTS } from "../../data/post/index.ts";
import { formatTag } from "../../data/tags.ts";

export default ({ params }: { params: { name: string } }) => {
  const tag = params.name;
  const hasTag = (media: { tags: string[] }) => media.tags.includes(tag);

  const mediaTypes = [
    ["Post", POSTS.sortedBy("written").filter(hasTag)] as const,
    ["Book", BOOKS.sortedBy("reviewed").filter(hasTag)] as const,
    ["Film", FILMS.sortedBy("reviewed").filter(hasTag)] as const,
    ["Game", GAMES.sortedBy("reviewed").filter(hasTag)] as const,
  ].filter(([, media]) => media.length > 0);

  return (
    <Page tab={formatTag(tag)}>
      {mediaTypes.map(([type, media]) => (
        <>
          <Tag.Header for={type} />
          {type === "Post"
            ? <PostTile.Set posts={media} />
            : <ReviewTile.Set media={media} />}
        </>
      ))}
    </Page>
  );
};
