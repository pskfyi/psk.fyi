import Link from "/components/Link.tsx";
import Pic from "/components/Pic.tsx";
import { post } from "/lib/post.ts";

function Content() {
  return (
    <>
      <p>
        At Apple's <Link to="https://centralandwolfe.com">Wolfe</Link>{" "}
        campus, where{" "}
        <Link to="https://en.wikipedia.org/wiki/Marketing_of_Apple_Inc.">
          Marcom
        </Link>{" "}
        resides, the elevator areas are flanked by tall banners emblazoned:
      </p>

      <div class="text-center text-2xl lg:text-3xl">
        <span class="line-through">Simplify</span>{" "}
        <span class="line-through">Simplify</span> <span>Simplify</span>
      </div>

      <p>
        This Thoreauesque ethos is reflected in the design of the workplace: a
        stack of spacious, toroidal caverns sparsely furnished with large,
        white, sit-stand desks that are generally kept clear. I was reminded of
        remarks by an author whose name I can no longer recall, but whose
        message lingered in my head, regarding the utility of empty surfaces.
        They foster an uncluttered mind.
      </p>

      <p>
        In 2020 when I was working at Wolfe, that tidiness contrasted sharply
        with my living space. I'm a slightly messy person by nature, and as the
        parent of a small child this flaw of mine was, and still is, greatly
        amplified. When the pandemic hit, I simmered in the clutter and
        struggled against its current. During that time I encountered a short
        documentary from UCLA which included a segment on the effects of clutter
        on <Link.Wiki to="cortisol" /> levels:
      </p>

      <div class="pt-[56.25%] relative overflow-hidden w-full">
        <iframe
          class="w-full h-full absolute top-0 left-0"
          src="https://www.youtube.com/embed/3AhSNsBs2Y0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <p>
        It resonated, and it galvanized me. I carved out an oasis of cleanliness
        in the spare bedroom which also serves as my home office. I obtained a
        {" "}
        <Link
          to="https://www.btod.com/btod-vertdesk.php"
          text="large, white, sit-stand desk"
        />{" "}
        of my own, and I keep it clear. I have developed a persistent
        mindfulness about clutter and its effects on my mood and mindset, and it
        has become a topic I return to frequently.
      </p>

      <hr />

      <p>
        Throughout the pandemic I found myself watching escapist YouTube videos
        about{" "}
        <Link to="https://www.youtube.com/@livingbig" text="tiny homes" />,{" "}
        <Link
          to="https://www.youtube.com/@JarrodTocci"
          text="van
        life"
        />,{" "}
        <Link
          to="https://www.youtube.com/@campingwithsteve"
          text="stealth camping"
        />, and{" "}
        <Link
          to="https://www.youtube.com/@ExploringAlternatives"
          text="other minimalist
        lifestyles"
        />. I admired the residents' rigorous thoughtfulness and intentionality
        about each item they possessed, and I was inspired by clever,
        multi-purpose objects I hadn't seen before and the use of custom,
        transformable furniture to maximize a tight space's utility.
      </p>

      <Pic
        src="sliding-walls.gif"
        desc={
          <p>
            This transforming space featured in{" "}
            <Link
              to="https://gizmodo.com.au/2014/11/this-tiny-home-uses-sliding-walls-to-transform-one-room-into-four/"
              text="Gizmodo"
            />{" "}
            resembles the compaction design of{" "}
            <Link.YT
              to="jt7x31WE74M"
              text="UC Berkeley's Main Stacks library"
            />.
          </p>
        }
      />

      <p>
        Towards the end of the pandemic, I relocated my office into a different
        room which involved a complicated, multi-day process necessitating going
        though everything I own twice. Having to rehome objects makes you
        reconsider their utility - it might be better to just throw it out or
        donate it rather than spend that same effort to move it and burden
        yourself with the logistical overhead of its storage. Rehoming objects
        twice in quick succession makes you resent everything non-essential.
      </p>

      <Pic
        src="joyless.jpg"
        desc={
          <>
            <p>
              Photorealistic image of myself addressing my least prized
              possessions before disposing of them.
            </p>
            <p>
              Know Your Meme{" "}
              <Link
                to="https://knowyourmeme.com/memes/does-it-spark-joy"
                text="page 1"
              />{" "}
              and{" "}
              <Link
                to="https://knowyourmeme.com/memes/hand-pointing-a-gun"
                text="page 2"
              />{" "}
              for the uninitiated.
            </p>
          </>
        }
      />

      <p>
        Scrounging for kindred spirits, I stumbled upon{" "}
        <Link.Reddit to="declutter" />,{" "}
        <Link.Reddit to="capsulewardrobe" />, and{" "}
        <Link.Reddit to="onebag" />. I found the same intentionality and
        thoughtfulness I admired before, distilled to its essence in r/onebag.
        This is a group of mostly digital nomads who live out of a single
        backpack. It's the most minimal home life possible - none whatsoever -
        forcing them to pour all their thoughtfulness into each article of
        clothing and each piece of gear. Reddit user{" "}
        <Link
          to="https://www.reddit.com/user/jeremymaluf"
          text="u/jeremymaluf"
        />{" "}
        best exemplifies this temperament in his reflections from{" "}
        <Link
          to="https://jeremymaluf.com/onebag/"
          text="his personal website"
        />:
      </p>

      <Pic
        src="onebag.jpg"
        desc={
          <>
            <p>
              Jeremy{" "}
              <Link
                to="https://www.reddit.com/r/onebag/comments/ua7fs7/a_drawing_of_my_indefinite_travel_onebag/"
                text="drew this himself"
              />.
            </p>
          </>
        }
      />

      <blockquote>
        In 2015 I got rid of everything I owned that didn't fit in a laptop
        backpack, and I've been living at this level of minimalism ever since.
        The core idea is to only own what I need, which allows me to travel
        spontaneously, spend less, focus more, and simplify my life.
      </blockquote>

      <p>
        I'm reminded of an incident when I was 13, where my family home almost
        burned down due to a forest fire. Forced to contemplate the potential
        loss of all my possessions, I found the idea unexpectedly freeing.
      </p>

      <hr />

      <p>
        Engulfed in the minimalist atmosphere of these YouTube videos and
        subreddit communities, I redirected my energies into rethinking my
        furniture from scratch to maximize desk space. (I also drastically
        downsized my wardrobe and minified my everyday accessories, both of
        which warrant separate posts in the near future.) I managed to squeeze
        29 sqft of tabletops into a very small room. Amazon was a godsend for
        finding odd-shaped pieces to nestle into the nooks and crannies. To
        further maximize desk space, my monitors are upheld by two arms mounted
        to a single pole (like{" "}
        <Link to="https://www.amazon.com/dp/B0855ZBPXD" text="this" />), and a
        {" "}
        <Link
          to="https://www.upliftdesk.com/modesty-panel-with-wire-management-by-uplift-desk/"
          text="modesty panel with builtin wire management netting"
        />{" "}
        keeps the desktop cable-free. My few remaining possessions - fewer by
        the month - are stored in matching bins in the closet or under a tall
        bedframe. Though it lacks the spaciousness of Wolfe, it promotes the
        cleanliness of mind I sought.
      </p>

      <p>
        Now that I am so aware of my irritability in visually busy spaces, I
        believe that this minimalist impulse is here to stay. I can't become a
        radical onebagger - not with a home, a car, and a family. The best I can
        do is continue to scrutinize purchases, adopt a more intentional
        lifestyle, and let go of nonessentials sooner. I would prefer to live in
        the simple, anti-materialistic way I foresaw 2 decades ago when I
        thought it would all catch fire.
      </p>
    </>
  );
}

export default post(import.meta, {
  name: "Anti-Clutter",
  posted: "2023-10-15",
  written: "2023-07-28",
  img: {
    color: "wood",
    desc: (
      <>
        <p>
          From a conversation with{" "}
          <Link to="https://openai.com/dall-e-3">Dall-E 3 Beta</Link>{" "}
          about the text of this blog post. The original prompt:
        </p>
        <blockquote>
          Digital art of a white matte desk, top-down view. On the desk is a
          piece of paper with a drawing of a flame.
        </blockquote>
        <p>
          Image was cropped and resized with{" "}
          <Link to="https://www.gimp.org/" text="GIMP" />, then minified with
          {" "}
          <Link to="https://squoosh.app/editor" text="Squoosh" />
        </p>
      </>
    ),
  },
  content: <Content />,
  tags: ["minimalism", "slice of life"],
});
