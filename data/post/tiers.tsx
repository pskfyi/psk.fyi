import { Head } from "$fresh/runtime.ts";
import ratingsSystems from "./ratings-systems.tsx";
import theHardProblems from "./the-hard-problems.tsx";
import Char from "/components/Char.tsx";
import Link from "/components/Link.tsx";
import PostTile from "/components/PostTile.tsx";
import { Tier } from "/components/Tier.tsx";
import { post } from "/lib/post.ts";
import { TIERS, UNRATED } from "/lib/tiers.ts";

function Name() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400&text=≫&display=block"
          rel="stylesheet"
        />
      </Head>
      Tiers ≫ Stars
    </>
  );
}

Name.toString = () => "Tiers ≫ Stars";

function Content() {
  return (
    <>
      <p>
        In 2022 I recorded a brief review for each piece of media I consumed,
        along with a base-10 rating, like 7/10. It was a journaling exercise,
        mostly, but an unexpected result was significant reflection on 10-point
        systems and my misgivings with them. I had no good reason to distinguish
        a 1 from a 2, a 3 from a 4, or a 5 from a 6. It seemed to depend on the
        mood I was in when I recorded the rating, which infuriated me.
      </p>

      <p>
        After the year concluded, I did a deep dive on rating systems in search
        of something preferable. I documented my findings and reflections in the
        post linked here:
      </p>

      <PostTile.Set posts={[ratingsSystems]} class="my(6 sm:6)" />

      <p>
        In my own ratings, I've always been dissatisfied with stars, thumbs, and
        numbers. Each is either too coarse or too fine. I remember as a teenager
        grappling with iTunes and Windows Media Player, debating with myself
        what the difference was between a 1-star and a 2-star rating if they
        both meant "bad" to me, and discussing with friends their alternative
        philosophies. Our inability to align on their meanings indicated to me a
        failure of the system to adequately communicate.
      </p>

      <p>
        During my exploration of ratings linked above, none of the systems I
        found stood out as something I would prefer to use myself. Inspired by
        the more ornate systems I encountered, I decided to take a bottom-up
        approach, working first on my data then letting a visual representation
        emerge.
      </p>

      <h2>Analysis</h2>

      <p>
        I started with the issues that prompted my concerns - the inability to
        differentiate 1&2, 3&4, and 5&6 in the 10-point scale. Clearly those six
        numbers only mapped onto three distinct categories in my mind.
      </p>

      <div class="grid grid-cols-10 gap-2 text-center py-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
          <div class="border rounded">
            {n}
          </div>
        ))}

        {["↓", "↓", "↓"].map((n) => (
          <div class="col-span-2 text(2xl sm:4xl)">{n}</div>
        ))}

        {["1-2", "3-4", "5-6"].map((n, i) => (
          <div
            class={`col-span-2 col-start-${((i + 1) * 2) - 1} border rounded`}
          >
            {n}
          </div>
        ))}
        {[7, 8, 9, 10].map((n) => <div class="border rounded">{n}</div>)}
      </div>

      <p>
        This means I only have seven distinct perceptual categories, and 7/10
        corresponded to the middle rank. It acts like a fulcrum, establishing
        polarity and parity between the ranks above and below it.
      </p>

      <div class="grid grid-cols-7 gap-2 text-center py-4">
        {["1-2", "3-4", "5-6", 7, 8, 9, 10].map((n) => (
          <div class="border rounded">{n}</div>
        ))}
      </div>

      <p>
        I believe every American has been programmed to equate 70% with a C
        grade and average-ness. I was feeling the tug of that programming, and
        it was causing score inflation. It also was the first indication that I
        was ranking as if I was grading.
      </p>

      <h2>Detour</h2>

      <p>
        The American school system only has five grades (A, B, C, D, F), so at
        first I set aside the idea of using letters and explored alternatives.
      </p>

      <p>
        Seven is a tricky baseline to work with for a rating system. The rating
        can't be used by itself, as in "6", because it doesn't communicate a
        clear maximum or, at worst, reads as though the maximum is ten.
        Representing a score as a number-out-of-seven, like 5/7, is{" "}
        <Link
          to="https://knowyourmeme.com/memes/fight-club-57-movie"
          text="used as a joke"
        />{" "}
        and reads like one, so that's also out.
      </p>

      <p>
        I experimented with modifying 5-star ratings to have seven ranks. If I
        counted zero stars as a rank, that got me a bottom score, but the top
        rank was trickier. I tried special top ranks: a larger center star,
        different coloration, or just a 6th star. I also tried using 6- or
        7-star system throughout.
      </p>

      <div class="center">
        <div class="w-[fit-content] mx-auto gap-x-4
          text(sm sm:xl yellow-300)
          grid(& cols-4)">
          <div>☆☆☆☆☆</div>
          <div>★★★☆☆</div>
          <div>★★★★★</div>
          <div class="text-torch-plasma">★★★★★</div>
        </div>
      </div>

      <p>
        All felt forced and unsatisfying. Each shared two problems: the middle
        rank reads as either above average in most cases or below average in the
        case of a 6-star system; and the ratings had to be represented with
        long, horizontal visuals. A smaller, scrunched cluster of stars would be
        too hard to visually parse without significant design work.
      </p>

      <h2>Providence</h2>

      <p>
        It took a long time for tier rankings to click. In retrospect it seems
        obvious. I think it wasn't on my radar until I started playing certain
        kinds of games where{" "}
        <Link.Wiki
          to="https://en.wikipedia.org/wiki/Tier_list"
          text="tier lists"
        />{" "}
        are common in their Youtube ecosystems. I hadn't thought to count the
        ranks before, but once I saw it I couldn't unsee it.
      </p>

      <div className="grid(& cols-7) gap-2 my-6">
        {["1-2", "3-4", "5-6", 7, 8, 9, 10].map((n) => (
          <div class="border rounded text-center">{n}</div>
        ))}
        {TIERS.map((t) => <Char.TierBadge rating={t} class="rounded" />)}
      </div>

      <p>
        <Link.Wiki to="S-rank" />{" "}
        has been around for a long time, apparently Japanese in origin. In
        English, its natural reading as "Special" makes it read well even to the
        uninitiated.
      </p>

      <p>
        The real trick of tier list ranks is the introduction of <Tier.E />{" "}
        between <Tier.D /> and{" "}
        <Tier.F />. From a letter-grading perspective, this is non-obvious.
        Historic grading systems have used <Tier.E />{" "}
        as a failing grade, but I'm not aware of a system that used both
        letters. Using both letters gives us an odd number of ranks, making the
        middle obvious, and letting <Tier.C />{" "}
        act as the natural fulcrum we expect it to be. That conformance to
        expectations is what makes these so intelligible.
      </p>

      <h2>Interpretation</h2>

      <p>
        A friend pointed out that this all bared a striking resemblance to a
        {" "}
        <Link.Wiki to="Likert_scale" text="7-point Likert scale" />. I was doing
        a one-dimensional qualitative analysis with a neutral middle rank,
        strongly negative and positive extremes, and two gradations in between
        which I think of as analogous to the difference between North-Northwest
        and West-Northwest. I think he was spot on. But what was I measuring?
      </p>

      <p>
        When you score things with numbers, you feel like you're assessing
        perceived quality. It didn't occur to me that I could be measuring
        something else entirely, but while sifting through my review notes I saw
        a different pattern. I was judging things by <em>worthwhileness</em>
        {" "}
        – my sense of how respectful they were of my time.
      </p>

      <p>
        This realization resonated deeply. I have been vocally judgemental
        towards unscripted content, like streaming and most podcasts, for many
        years and for this exact reason. I feel they do not respect my time in
        the way that carefully edited content does.
      </p>

      <p>
        That deep resonance is exactly what I was looking for. It allows me to
        unambiguously place things into these buckets by pure intuition and
        independent of mood.
      </p>

      <div
        class="grid gap-x(4 sm:4) gap-y(6 sm:6) px-2 mt-6"
        style={{ gridTemplateColumns: "3rem 1fr" }}
      >
        <Char.TierTile rating="S" class="self-center" />
        <p class="self-center my-0">
          Doesn't waste a moment of my time, capturing all of my attention. If
          it slips even a little, it gets an <Tier.A />{" "}
          at best. The first consumption becomes a dedicated activity, not
          pairing well with multi-tasking.
        </p>
        <Char.TierTile rating="A" class="self-center" />
        <p class="self-center my-0">
          Worthwhile with only minor engagement issues, often matters of taste
          or creative differences. A five-tier system would fold this into the
          top rank.
        </p>
        <Char.TierTile rating="B" class="self-center" />
        <p class="self-center my-0">
          Holistically worthwhile, occasionally captivating, but it disappoints
          with severe, obvious stumbling blocks that feel more like mistakes and
          lost potential than differences of opinion.
        </p>
        <Char.TierTile rating="C" class="self-center" />
        <p class="self-center my-0">
          Background noise – optionally preferable to silence, which is actually
          praiseworthy. It commands no attention, but when attention is given it
          does not offend. These qualities allow this media to occupy niches in
          our lives which others cannot.
        </p>
        <Char.TierTile rating="D" class="self-center" />
        <p class="self-center my-0">
          A few worthwhile aspects save this from being a complete waste of
          time. Generally, only fans of the media's genre should bother with
          these.
        </p>
        <Char.TierTile rating="E" class="self-center" />
        <p class="self-center my-0">
          This might be the worst, because it actively wasted my time. If it had
          been more transparently awful up front, at least I could have
          reallocated my time.
        </p>
        <Char.TierTile rating="F" class="self-center" />
        <p class="self-center my-0">
          So much worse than sitting in silence and doing nothing that it's not
          worth finishing or giving it a "fair" shake.
        </p>
      </div>

      <h3>Errata</h3>

      <p>I will take a moment to explain the edge cases, or lack thereof:</p>

      <ul class="pr-2">
        <li>No fractional scores.</li>
        <li>No empty scores.</li>
        <li>No special scores.</li>
        <li>
          No intra-tier rankings. Nothing is "at the top of{" "}
          <span class="font-display">A</span>" or "at the bottom of{" "}
          <span class="font-display">S</span>".
        </li>
        <li>
          The absence of a score simply indicates that I haven't reviewed it
          yet. It is not a sub-<Tier.F /> snub.
        </li>
        <li>
          If I completed something, it cannot receive an{" "}
          <span class="font-display">F</span> rating.
        </li>
        <li>
          If I have any complaints, it cannot receive an{" "}
          <span class="font-display">S</span> rating.
        </li>
        <li>
          An <span class="font-display">A</span> or{" "}
          <span class="font-display">B</span>{" "}
          review must elaborate on my complaints.
        </li>
        <li>
          A <span class="font-display">D</span>{" "}
          review must elaborate on the worthwhile aspects of the work which
          differentiate it from an <span class="font-display">E</span> rating.
        </li>
      </ul>

      <h2>Next Steps</h2>

      <p>
        For me the core of this is a settled matter. I'd like to support it,
        perhaps by fleshing it out with my own tooling like the{" "}
        <Link
          to="https://tiermaker.com/"
          text="sharing-friendly
        webapps"
        />{" "}
        that already exist.
      </p>

      <p>
        Once a robust backlog of reviews have been ported over, I'd like to make
        a tier list view option for various pages on the site - that would
        probably be a good stepping stone to the aforementioned tooling.
      </p>

      <p>
        The next frontiers are aggregation handling and preemptive assessments
        of unexperienced media.
      </p>

      <h3>Aggregation Handling</h3>

      <p>Aggregation has two big problems in this system:</p>

      <ol class="pr-2">
        <li>
          Because there are no fractional scores, you can't visually represent
          averages in the same tile format.
        </li>
        <li>
          It's unclear whether ranks should be weighted evenly. If a director
          made 1 <span class="font-display">S</span>-tier movie and 1{" "}
          <span class="font-display">F</span>-tier movie, is it really fair to
          equate their average to someone who made infinite{" "}
          <span class="font-display">C</span>-tier slop? I'd rather the{" "}
          <span class="font-display">S</span>{" "}
          count for much more, but the extent is not clear.
        </li>
      </ol>

      <h3>Preemptive Assessments</h3>

      <p class="mb-8">
        Assessing media that has not yet been experienced is very important to
        me. It has direct connections to the Problems of Memory and Curation I
        briefly explained in this blog post:
      </p>

      <PostTile.Set
        posts={[theHardProblems]}
      />

      <p class="mt-8">
        I'm prototyping three categories representing a negative expectation,
        neutral or unknown expectation, and a positive expectation:
      </p>

      <div className="grid(& cols-7) gap-2 my-8">
        {UNRATED.map((indicator, i) => (
          <Char.UnratedTile
            indicator={indicator}
            class={`col-start-${i + 3}`}
          />
        ))}
      </div>

      <p>Much work will be required to determine if these are sufficient.</p>
    </>
  );
}

const img = () => (
  <svg
    class={`ratio-square rounded-lg mx-auto max-w-[13rem]
      text-torch(halo group-hover:flame hover:(flame group-hover:plasma))`}
    xmlns="http://www.w3.org/2000/svg"
    height="100%"
    width="100%"
    style="container-type: size"
  >
    <rect
      width="100%"
      height="100%"
      fill="currentColor"
      class="transition-colors duration-500"
    />
    <text
      x="50%"
      y="54%"
      dominant-baseline="central"
      text-anchor="middle"
      font-family="'Oregano'"
      fill="black"
      font-size="120cqh"
    >
      S
    </text>
  </svg>
);

img.src = "/tiers.webp";

export default post(import.meta, {
  name: "Tiers ≫ Stars",
  heading: <Name />,
  posted: "2023-06-19",
  written: "2023-02-05",
  img,
  tags: ["data", "design", "media", "time"],
  teaser: {
    text: "A postmortem on data modeling and bottom-up design.",
    hyphenateOnMobile: true,
  },
  content: <Content />,
});
