import Char from "/components/Char.tsx";
import DateLine from "/components/DateLine.tsx";
import Page from "/components/Page.tsx";
import Pic from "/components/Pic.tsx";
import Tag from "/components/Tag.tsx";
import { GAMES } from "/data/game/index.ts";

export default ({ params }: { params: { slug: string } }) => {
  const { released, reviewed, ...game } = GAMES.bySlug[params.slug];

  return (
    <Page
      tab={game.name}
      heading={game.heading}
      preview={{
        image: game.img.src,
        large: true,
        description: "A game review by Patrick Sean Keenan.",
      }}
    >
      {["S", "A", "B"].includes(game.rating) && (
        <Pic.Dynamic img={game.img} class="mx(6 sm:auto)" />
      )}
      <Tag.Block tags={game.tags} class="mt-4 mb-2" />
      <DateLine dates={{ released, reviewed }} />
      <Char.Verdict rating={game.rating} />
      {game.content}
    </Page>
  );
};
