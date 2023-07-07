import { Char } from "../../components/Char.tsx";
import { DateLine } from "../../components/DateLine.tsx";
import { Link } from "../../components/Link.tsx";
import Page from "../../components/Page.tsx";
import { Pic } from "../../components/Pic.tsx";
import { Tag } from "../../components/Tag.tsx";
import { BOOKS } from "../../data/book/index.ts";

export default ({ params }: { params: { slug: string } }) => {
  const { published, reviewed, ...book } = BOOKS.bySlug[params.slug];

  return (
    <Page
      tab={`${book.name} - ${book.author}`}
      heading={book.name}
      preview={{
        description: "A book review by Patrick Sean Keenan.",
        image: book.img.src,
        large: true,
      }}
    >
      <p class="text(center lg sm:xl) leading(none sm:none) mt-1 mb-3">
        A book by <Link eternal to={book.authorUrl}>{book.author}</Link>.
      </p>
      <div className="px-6">
        <Pic.Dynamic img={book.img} />
      </div>
      <Tag.Block tags={book.tags} class="mt-4 mb-2" />
      <DateLine dates={{ published, reviewed }} />
      <Char.Verdict rating={book.rating} />
      {book.content}
    </Page>
  );
};
