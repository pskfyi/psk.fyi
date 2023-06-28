import Page from "../../components/Page.tsx";
import { Char } from "../../components/Char.tsx";
import { Pic } from "../../components/pics.tsx";
import { DateLine } from "../../components/DateLine.tsx";
import { TagBlock } from "../../components/Tag.tsx";
import { ByLine } from "../../components/ByLine.tsx";
import { BOOKS } from "../../data/book/index.ts";

export default function BookReview({ params }: { params: { slug: string } }) {
  const { published, reviewed, ...book } = BOOKS.bySlug[params.slug];

  const tab = `${book.tab ?? book.name} - ${book.author}`;
  const previewImage = "src" in book.img ? book.img.src : undefined;

  return (
    <Page
      tab={tab}
      heading={book.name}
      previewImage={previewImage}
      largePreviewImage
      previewDescription="A book review by Patrick Sean Keenan."
    >
      <ByLine
        type="book"
        href={book.authorUrl}
        name={book.author}
        class="mt-1 mb-3"
      />
      <div className="px-6">
        <Pic.Dynamic img={book.img} />
      </div>
      <TagBlock tags={book.tags} class="mt-4 mb-2" />
      <DateLine dates={{ published, reviewed }} />
      <Char.Verdict rating={book.rating} />
      {book.content}
    </Page>
  );
}
