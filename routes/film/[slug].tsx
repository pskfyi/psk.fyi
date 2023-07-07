import Char from "/components/Char.tsx";
import DateLine from "/components/DateLine.tsx";
import Page from "/components/Page.tsx";
import Pic from "/components/Pic.tsx";
import Tag from "/components/Tag.tsx";
import { FILMS } from "/data/film/index.ts";
import { year } from "/lib/date.ts";

export default ({ params }: { params: { slug: string } }) => {
  const { released, reviewed, ...film } = FILMS.bySlug[params.slug];

  return (
    <Page
      tab={`${film.name} (${year(released)})`}
      heading={film.name}
      preview={{
        image: film.img.src,
        large: true,
        description: "A film review by Patrick Sean Keenan.",
      }}
    >
      <div className="px-6">
        <Pic.Dynamic img={film.img} />
      </div>
      <Tag.Block tags={film.tags} class="mt-4 mb-2" />
      <DateLine dates={{ released, reviewed }} />
      <Char.Verdict rating={film.rating} />
      {film.content}
    </Page>
  );
};
