import { ReviewList } from "../../components/ReviewList.tsx";
import Page from "/components/Page.tsx";
import PostTile from "/components/PostTile.tsx";
import Tag from "/components/Tag.tsx";
import { BOOKS } from "/data/book/index.ts";
import { FILMS } from "/data/film/index.ts";
import { GAMES } from "/data/game/index.ts";
import { ARTISTS } from "/data/music/index.ts";
import { POSTS } from "/data/post/index.ts";
import { TV } from "/data/tv/index.ts";
import {
  BOOK_TAG,
  FILM_TAG,
  formatTag,
  GAME_TAG,
  MUSIC_TAG,
  POST_TAG,
  TV_TAG,
} from "/lib/tags.ts";

export default ({ params }: { params: { name: string } }) => {
  const tag = params.name;
  const hasTag = (media: { tags: string[] }) => media.tags.includes(tag);

  const tvSeasons = TV.reviewedSeasonsBy("reviewed").filter(hasTag);
  const albums = ARTISTS.reviewedAlbumsBy("reviewed").filter(hasTag);

  const mediaTypes = [
    [POST_TAG, POSTS.sortedBy("written").filter(hasTag)] as const,
    [BOOK_TAG, BOOKS.sortedBy("reviewed").filter(hasTag)] as const,
    [FILM_TAG, FILMS.sortedBy("reviewed").filter(hasTag)] as const,
    [TV_TAG, tvSeasons] as const,
    [MUSIC_TAG, albums] as const,
    [GAME_TAG, GAMES.sortedBy("reviewed").filter(hasTag)] as const,
  ].filter(([, media]) => media.length > 0);

  return (
    <Page tab={formatTag(tag)}>
      <div class="sm:w-[fit-content] mx-auto">
        {mediaTypes.map(([type, media]) => (
          <>
            <Tag.Header for={type} />
            {type === POST_TAG
              ? <PostTile.Set posts={media} />
              : <ReviewList reviews={media} />}
          </>
        ))}
      </div>
    </Page>
  );
};
