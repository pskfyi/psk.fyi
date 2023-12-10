import Char from "/components/Char.tsx";
import Link from "/components/Link.tsx";
import { MediaItem, Review, Structured } from "/lib/media.ts";
import { formatTag } from "/lib/tags.ts";

type ReviewedMedia = Structured<MediaItem & Review>;

export type ReviewTableProps = {
  reviews: ReviewedMedia[];
  /** A typed table will include the tag for the media type. (ex. #film)
   * Otherwise they are omitted.
   *
   * @default false */
  typed?: boolean;
};

export function ReviewList({ reviews, typed = false }: ReviewTableProps) {
  return (
    <>
      {reviews.map(
        ({ reviewed, released, rating, name, tags, path, ...rest }) => {
          if (!typed) tags = tags.slice(1);
          const people = tags.filter((tag) => tag.startsWith("@"));
          if ("author" in rest) people.unshift(`@${rest.author}`);

          tags = tags.filter((tag) =>
            !(tag.startsWith("@") || /^[A-Z]/.test(tag))
          );
          if (people.length) tags.unshift(people[0]);

          return (
            <div
              class="grid gap-x-2 mb-3 w-full"
              style={{
                gridTemplateColumns: "min-content auto",
                gridTemplateAreas: `"badge title"
                "badge tags"
                "badge dates"`,
              }}
            >
              <div style={{ gridArea: "badge" }}>
                <Char.TierBadge
                  rating={rating}
                  class="w(14 sm:14) rounded mx-auto"
                />
              </div>

              <div class="-mb-1 self-end" style={{ gridArea: "title" }}>
                <Link
                  to={path}
                  class="no-underline text(lg sm:xl) leading-none sm:leading-none"
                >
                  {name}
                </Link>
              </div>

              <div
                class="text-sm text-torch-ash w-full overflow-hidden overflow-ellipsis whitespace-nowrap self-center"
                style={{ gridArea: "tags" }}
              >
                {tags.map((tag) => (
                  `${formatTag(tag)} `
                ))}
              </div>

              <div
                class="text(xs torch-ash) whitespace-nowrap self-start"
                style={{ gridArea: "dates" }}
              >
                Review {reviewed}
                <span class="ml-2 mr-1">|</span> Release {released}
              </div>
            </div>
          );
        },
      )}
    </>
  );
}
