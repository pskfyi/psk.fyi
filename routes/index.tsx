import type { Album } from "/lib/music.ts";
import type { SocialMediaPreview } from "/lib/social.ts";

import Link from "/components/Link.tsx";
import Page from "/components/Page.tsx";
import Pic from "/components/Pic.tsx";
import PostTile from "/components/PostTile.tsx";
import ReviewTile from "/components/ReviewTile.tsx";
import Skewer from "/components/Skewer.tsx";
import effectiveTypescript from "/data/book/effective-typescript.tsx";
import druk from "/data/film/druk.tsx";
import oneCutOfTheDead from "/data/film/one-cut-of-the-dead.tsx";
import vampireSurvivors from "/data/game/vampire-survivors.tsx";
import haim from "/data/music/haim.tsx";
import aboutThisSite from "/data/post/about-this-site.tsx";
import allInOnDeno from "/data/post/all-in-on-deno.tsx";
import antiClutter from "/data/post/anti-clutter.tsx";
import lastKingdom from "/data/tv/last-kingdom.tsx";

const preview: SocialMediaPreview = {
  title: "psk.fyi",
  description: "A blog by Patrick Sean Keenan",
  image: "/sunset-beach.webp",
  large: true,
};

function Header() {
  return (
    <Skewer
      top={{ xs: 50, sm: 55 }}
      class="mb-2 mt(1 sm:0) text(5xl sm:7xl) pb(2 sm:2)"
    >
      psk<span class="text-sm">{" "}</span>.fyi
    </Skewer>
  );
}

function HeroImage() {
  return (
    <Pic
      src="/sunset-beach.webp"
      class="lg:(-ml-24 -mr-24) xl:(-ml-28 -mr-28)"
      cardClass="sm:mx-auto max-w(sm:md md:lg)"
      desc={
        <>
          <p class="my-0">
            Created via <Link.DallE /> with prompt:
          </p>
          <blockquote class="my-2">
            vibrant illustration of an orange sunset over the pacific ocean from
            a brown beach, young boy standing in the sand staring outwards with
            his back to us, digital art
          </blockquote>
          <p class="my-0">
            Extended via <Link.Outpainting />.
          </p>
        </>
      }
      color="soot"
    />
  );
}

function ByLine() {
  return (
    <p
      class={`text(center xl sm:2xl) leading(none sm:none) my(6 sm:9 lg:10)`}
    >
      A blog by <Link eternal to="/about/me">Patrick Sean Keenan</Link>.
    </p>
  );
}

export default () => (
  <Page
    tab="Patrick Sean Keenan's blog"
    header={<Header />}
    preview={preview}
  >
    <HeroImage />
    <ByLine />

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
        antiClutter,
        aboutThisSite,
        allInOnDeno,
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
      <ReviewTile.Film {...druk} />
      <ReviewTile.Television {...lastKingdom.seasons.s3} />
      <ReviewTile.Music
        {...haim.releases["women-in-music-pt-iii"] as Album.Reviewed}
      />
      <ReviewTile.Book {...effectiveTypescript} />
    </div>
  </Page>
);
