import Page from "../../components/Page.tsx";
import { Char } from "../../components/Char.tsx";
import { Pic } from "../../components/pics.tsx";
import { DateLine } from "../../components/DateLine.tsx";
import { TagBlock } from "../../components/Tag.tsx";
import { FILMS } from "../../data/film/index.ts";

export default function FilmReview({ params }: { params: { slug: string } }) {
  const { released, reviewed, ...film } = FILMS.bySlug[params.slug];

  return (
    <Page tab={film.tab ?? film.name} heading={film.name}>
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
