import type { JSX } from "preact";
import type { Book } from "../data/books.ts";
import type { Film } from "../data/films.ts";
import type { Game } from "../data/games.ts";
import type { TelevisionSeason, TelevisionShow } from "../data/tv.ts";
import type { Tier } from "../data/types.ts";
import { year } from "../utils/date.ts";
import { Char } from "./Char.tsx";
import { Album } from "../data/music.ts";
import { MediaImg } from "../data/media.ts";
import { asComponent } from "../utils/asComponent.tsx";
import { Docs } from "./docs/Docs.tsx";
import midsommar from "../data/film/midsommar.tsx";
import howToReadABook from "../data/book/how-to-read-a-book.tsx";
import martyrs from "../data/film/martyrs.tsx";

export type ReviewTileProps = {
  href: string;
  label: string | JSX.Element | (() => JSX.Element);
  rating: Tier;
  img: MediaImg | (() => JSX.Element);
};

export function ReviewTile(
  { href, label, rating, img: Img }: ReviewTileProps,
) {
  const imageIsComponent = typeof Img === "function";

  const { badgeBorder, color = "smoke", src } = Img as MediaImg;

  const shouldHaveBorder = !["soot", "smoke"].includes(color);
  const borderClass = shouldHaveBorder && `border(& torch-${color})`;

  const tierBorderClass = badgeBorder && shouldHaveBorder
    ? `border(& torch-${badgeBorder})`
    : rating === "E"
    ? "border"
    : badgeBorder && !shouldHaveBorder
    ? `border(b l t-none r-none & torch-${badgeBorder})`
    : "";

  const Label = asComponent(label);

  return (
    <a
      class={`relative no-underline rounded bg-torch-smoke
        flex(& col)
        text-torch(light hover:glow visited:(light hover:glow))`}
      href={href}
    >
      <div
        className={`rounded-t overflow-hidden flex-shrink-0 ${borderClass} `}
      >
        {imageIsComponent ? <Img /> : <img src={src} />}
      </div>
      <Char.TierBadge
        class={`absolute top-0 right-0 sm:pt-px 
          w(4 sm:6) rounded(bl tr) ${tierBorderClass}`}
        rating={rating}
      />
      <p
        class="leading-tight my-1 px-1 break-normal center flex-grow-1
          hover:(underline text-torch-flame) duration-300
          text(center sm sm:base)"
        style={{ hyphens: "none", "-webkit-hyphens": "none" }}
      >
        <Label />
      </p>
    </a>
  );
}

ReviewTile.Game = function GameReviewTile({ path, rating, name, img }: Game) {
  return (
    <ReviewTile
      href={path}
      label={name}
      rating={rating}
      img={img}
    />
  );
};

ReviewTile.Film = function FilmReviewTile(
  { path, rating, name, img, released }: Film,
) {
  return (
    <ReviewTile
      href={path}
      label={<>{name} ({year(released)})</>}
      rating={rating}
      img={img}
    />
  );
};

export type TelevisionReviewTileProps = TelevisionShow & {
  S: keyof TelevisionShow["seasons"];
};

ReviewTile.Television = function TelevisionReviewTile(
  { S, seasons, name }: TelevisionReviewTileProps,
) {
  const { img, path, rating } = seasons[S] as TelevisionSeason;

  return (
    <ReviewTile
      href={path}
      label={<>{name} {S.toUpperCase()}</>}
      rating={rating}
      img={img}
    />
  );
};

ReviewTile.Book = function BookReviewTile({ path, rating, name, img }: Book) {
  return (
    <ReviewTile
      href={path}
      label={name}
      rating={rating}
      img={img}
    />
  );
};

ReviewTile.Music = function MusicReviewTile(
  { path, rating, name, img }: Album.Reviewed,
) {
  return (
    <ReviewTile
      href={path}
      label={name}
      rating={rating}
      img={img}
    />
  );
};

export type DynamicReviewTileProps =
  | Game
  | Film
  | Book
  | TelevisionReviewTileProps
  | Album.Reviewed;

ReviewTile.Dynamic = function DynamicReviewTile(
  props: DynamicReviewTileProps,
) {
  switch (props.type) {
    case "book":
      return <ReviewTile.Book {...props} />;
    case "film":
      return <ReviewTile.Film {...props} />;
    case "game":
      return <ReviewTile.Game {...props} />;
    case "tv":
      return <ReviewTile.Television {...props} />;
    case "album":
      return <ReviewTile.Music {...props} />;
  }
};

export type ReviewTileSetProps = { media: DynamicReviewTileProps[] };

ReviewTile.Set = function ReviewTileSet({ media }: ReviewTileSetProps) {
  return (
    <div class="grid grid-cols-3 gap-2">
      {media.map((props) => <ReviewTile.Dynamic {...props} />)}
    </div>
  );
};

export function ReviewTileSetDocs(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <Docs
      component={ReviewTile.Set}
      desc={
        <p>
          A 3-column grid of <code>{"<ReviewTile>"}</code>s for any media type.
        </p>
      }
      props={{
        media: "An array of objects describing media reviews.",
      }}
      examples={[
        [
          "<ReviewTile.Set media={[...]} />",
          <ReviewTile.Set
            media={[
              midsommar,
              howToReadABook,
              martyrs,
            ]}
          />,
        ],
      ]}
      {...props}
    />
  );
}
