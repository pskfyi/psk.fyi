import Page from "../../components/Page.tsx";
import { Char } from "../../components/Char.tsx";
import { Pic } from "../../components/pics.tsx";
import { TagBlock } from "../../components/Tag.tsx";
import { DateLine } from "../../components/DateLine.tsx";
import { GAMES } from "../../data/game/index.ts";

export default function GameReview({ params }: { params: { slug: string } }) {
  const { released, reviewed, ...game } = GAMES.bySlug[params.slug];

  const previewImage = "src" in game.img ? game.img.src : undefined;

  return (
    <Page
      tab={game.tab ?? game.name}
      heading={game.name}
      previewImage={previewImage}
      largePreviewImage
      previewDescription="A game review by Patrick Sean Keenan."
    >
      <div className="px-6">
        <Pic.Dynamic img={game.img} />
      </div>
      <TagBlock tags={game.tags} class="mt-4 mb-2" />
      <DateLine dates={{ released, reviewed }} />
      <Char.Verdict rating={game.rating} />
      {game.content}
    </Page>
  );
}
