import Char from "/components/Char.tsx";
import DateLine from "/components/DateLine.tsx";
import Page from "/components/Page.tsx";
import Pic from "/components/Pic.tsx";
import Tag from "/components/Tag.tsx";
import { BOOKS } from "/data/book/index.ts";

export default ({ params }: { params: { slug: string } }) => {
  const { released, reviewed, ...book } = BOOKS.bySlug[params.slug];

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
      {["S", "A", "B"].includes(book.rating) && (
        <Pic.Dynamic img={book.img} class="mx(6 sm:auto)" />
      )}
      <Tag.Block tags={book.tags} class="mt-4 mb-2" />
      <DateLine dates={{ released, reviewed }} />
      <Char.Verdict rating={book.rating} />
      {book.content}
    </Page>
  );
};
