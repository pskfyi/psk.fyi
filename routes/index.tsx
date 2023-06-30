import Page from "../components/Page.tsx";
import { Skewer } from "../components/Skewer.tsx";
import { Pic } from "../components/pics.tsx";
import { Link } from "../components/Link.tsx";
import { ReviewTile } from "../components/ReviewTile.tsx";
import { ByLine } from "../components/ByLine.tsx";
import { PostTile } from "../components/PostTile.tsx";
import { Album } from "../data/music.ts";

import tiers from "../data/post/tiers.tsx";
import allInOnDeno from "../data/post/all-in-on-deno.tsx";
import vampireSurvivors from "../data/game/vampire-survivors.tsx";
import lazarusProject from "../data/tv/lazarus-project.tsx";
import effectiveTypescript from "../data/book/effective-typescript.tsx";
import theDayAfter from "../data/film/the-day-after.tsx";
import haim from "../data/music/haim.tsx";
import oneCutOfTheDead from "../data/film/one-cut-of-the-dead.tsx";

function Header() {
  return (
    <Skewer hero top={{ xs: 50, sm: 55 }} class="pb(2 sm:2)">
      psk<span class="text-sm">{" "}</span>.fyi
    </Skewer>
  );
}

export default function Home() {
  return (
    <Page
      tab="Patrick Sean Keenan's blog"
      header={<Header />}
      previewTitle="psk.fyi"
      previewDescription="A blog by Patrick Sean Keenan"
      previewImage="/sunset-beach.webp"
      largePreviewImage
    >
      <Pic
        hero
        src="/sunset-beach.webp"
        desc={
          <>
            <p class="my-0">
              Created via <Link.DallE /> with prompt:
            </p>
            <blockquote class="my-2">
              vibrant illustration of an orange sunset over the pacific ocean
              from a brown beach, young boy standing in the sand staring
              outwards with his back to us, digital art
            </blockquote>
            <p class="my-0">
              Extended via <Link.Outpainting />.
            </p>
          </>
        }
        color="soot"
      />

      <ByLine
        type="blog"
        href="/about/me"
        name="Patrick Sean Keenan"
        class="my(6 sm:9 lg:10) text(xl sm:2xl)"
      />

      <hr class="text-torch-ash opacity-40 w-3/4 my(6 sm:9 lg:10)" />

      <h2 class="flex justify-between items-center
        mb-4 text(torch-ash lg sm:xl) leading([0.8] sm:[0.8])">
        Latest Posts
        <Link
          to="/posts"
          class="text(sm md:base torch(halo hover:flame visited(halo hover:flame)))"
        >
          All Posts
        </Link>
      </h2>

      <PostTile.Set
        posts={[
          allInOnDeno,
          tiers,
        ]}
      />

      <h2 class="flex justify-between items-center
        mb-2 text(torch-ash lg sm:xl) leading([0.8] sm:[0.8])">
        Latest Reviews
        <Link
          to="/reviews"
          class="text(sm md:base torch(halo hover:flame visited(halo hover:flame)))"
        >
          All Reviews
        </Link>
      </h2>

      <div className="mt-2 gap-2 grid(& cols-3)">
        <ReviewTile.Film {...oneCutOfTheDead} />
        <ReviewTile.Game {...vampireSurvivors} />
        <ReviewTile.Film {...theDayAfter} />
        <ReviewTile.Television {...lazarusProject} S="s1" />
        <ReviewTile.Music
          {...haim.releases["women-in-music-pt-iii"] as Album.Reviewed}
        />
        <ReviewTile.Book {...effectiveTypescript} />
      </div>
    </Page>
  );
}
