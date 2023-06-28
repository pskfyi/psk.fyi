import Page from "../../components/Page.tsx";
import { Char } from "../../components/Char.tsx";
import { Pic } from "../../components/pics.tsx";
import { DateLine } from "../../components/DateLine.tsx";
import { TagBlock } from "../../components/Tag.tsx";
import { FILMS } from "../../data/film/index.ts";
import { year } from "../../utils/date.ts";

export default function FilmReview({ params }: { params: { slug: string } }) {
  const { released, reviewed, ...film } = FILMS.bySlug[params.slug];

  const tab = `${film.tab ?? film.name} (${year(released)})`;
  const previewImage = "src" in film.img ? film.img.src : undefined;

  return (
    <Page
      tab={tab}
      heading={film.name}
      previewImage={previewImage}
      largePreviewImage
      previewDescription="A film review by Patrick Sean Keenan."
    >
      <div className="px-6">
        <Pic.Dynamic img={film.img} />
      </div>
      <TagBlock tags={film.tags} class="mt-4 mb-2" />
      <DateLine dates={{ released, reviewed }} />
      <Char.Verdict rating={film.rating} />
      {film.content}
    </Page>
  );
}
