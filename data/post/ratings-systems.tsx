import { Link } from "../../components/Link.tsx";
import { Pic } from "../../components/pics.tsx";
import { post } from "../posts.ts";

function Caption() {
  return (
    <>
      <p class="my-0 text-left hyphens-none leading-5">
        The SF Chronicle{" "}
        <Link
          to="https://projects.sfchronicle.com/2020/visuals/littleman/"
          text="Little Man"
        />{" "}
        from{" "}
        <Link
          to="https://www.sfchronicle.com/movies/article/Understanding-Oscars-Academy-rewards-quality-10958175.php"
          text="this article"
        />; cropped, resized, and compressed with{" "}
        <Link to="https://ezgif.com/" text="ezgif" />.
      </p>
      <p>
        Also, I should have titled this post{" "}
        <a href="https://www.youtube.com/watch?v=znDgBy2mHbc" target="_blank">
          Tiers for Fears
        </a>.
      </p>
    </>
  );
}

function LittleMenPic() {
  return (
    <Pic
      src="/post/littlemen.webp"
      color="smoke"
      desc={
        <p class="my-0 text-left hyphens-none leading-5">
          All 5 Little Man poses. Taken from{" "}
          <Link
            to="https://www.americantheatre.org/2020/02/11/after-68-years-is-it-time-for-the-chronicles-little-man-to-retire/"
            text="this article"
          />, upscaled with{" "}
          <Link to="https://www.upscale.media/" text="upscale.media" />, then
          edited and cropped in <Link to="https://www.gimp.org/" text="GIMP" />.
        </p>
      }
    />
  );
}

function Content() {
  return (
    <>
      <p>
        Ratings systems in media criticism are fascinating. They sit at the
        crossroads of design, communication, and data modeling. Their goal is
        tremendous: to bridge a gap from a reviewer's subjective sentiment to a
        reader's subjective expectations.
      </p>

      <p>
        These systems are necessarily visual. The tension between the visual
        representation and the data they convey leads to two design
        philosophies:{"  "}
        <Link.Wiki
          to="Top-down_and_bottom-up_design"
          text="top-down, and bottom-up"
        />. You can either start with a desired visual representation and force
        your data into that scheme, or you can start with the data and let a
        visual representation emerge.
      </p>

      <p>
        The chosen design constructs a space within which interesting edge cases
        can be expressed. Are half-points allowed? What about{" "}
        <Link
          to="https://en.wikipedia.org/wiki/Leonard_Maltin%27s_Movie_Guide#Features"
          text="one-off values and symbols"
        />? What about zero scores, or empty ratings? Does a lack of rating
        itself indicate something?
      </p>

      <section className="text-center text-3xl py-8 px(20 md:32)">
        <div className="grid grid-cols-3">
          <span>👎</span>
          <span>🤷</span>
          <span>👍</span>
        </div>
      </section>

      <p>
        In this brief survey I'll touch on the most common rating systems{" "}
        used in media criticism, then highlight some unique designs that have
        been highly influential. Along the way I'll point out some of the edge
        cases and the ways critics have grappled with the design constraints of
        their systems.
      </p>

      <h2>Numerology</h2>

      <p>
        Some of the most common systems are based on numbers. Almost always they
        are one of these values:
      </p>

      <ul>
        <li>
          <strong>2</strong>{" "}
          – Thumbs up or down; a single indicator like a heart, asterisk, or
          star which is either present or absent.
        </li>
        <li>
          <strong>3</strong>{" "}
          – Bronze/Silver/Gold; contemporary Netflix thumb ratings with a
          two-thumbs up option; some star-rating systems.
        </li>
        <li>
          <strong>4 & 5</strong> – ABCDF; Very common for star ratings.
        </li>
        <li>
          <strong>10</strong> – Five stars with half-stars; a number-out-of-ten
        </li>
        <li>
          <strong>100</strong>{" "}
          – Percentage; a number-out-of-one-hundred; a number-out-of-ten with
          one decimal place.
        </li>
      </ul>

      <p>
        All of these have room for some shared edge cases. Sometimes zeros are
        allowed, and sometimes they aren't. Some allow custom values, or
        breaking beyond the maximum, for very rare occasions. Many times
        exclusion is itself a rating, representing a less-that-zero ultimate
        snub.
      </p>

      <section className="text-center text-3xl py-8 px(20 md:32)">
        <div className="grid grid-cols-3">
          <span>🥉</span>
          <span>🥈</span>
          <span>🥇</span>
        </div>
      </section>

      <p>
        Sometimes, if the system is too coarse, absence of a rating might
        represent a neutral sentiment. How many times have you intentionally not
        rated something on Netflix because you didn't want to nudge the
        algorithm in either direction?
      </p>

      <h2>Astrology</h2>

      <p>
        Stars were mentioned many times above but they deserve a special
        call-out. Star-based ratings are so diverse and omnipresent they have
        their own{" "}
        <Link.Wiki to="Star_(classification)" text="wikipedia article" />, and
        it's quite the read.
      </p>

      <p>The article elaborates on the thorny issue of zero rankings:</p>

      <blockquote>
        Critics have different ways of denoting the lowest rating when this is a
        "zero". Some such as Peter Travers display empty stars. Jonathan
        Rosenbaum and Dave Kehr use a round black dot. Leslie Halliwell uses a
        blank space. The Globe and Mail uses a "0", or as their former film
        critic dubbed it, the "death doughnut". Roger Ebert used a thumbs-down
        symbol. Other critics use a black dot.
      </blockquote>

      <p>
        You'll see the article highlights many of the edge cases I mentioned,
        and more. The prestigious{" "}
        <Link.Wiki to="Michelin_Guide" text="Michelin stars" />{" "}
        are a prominent example, where an affirmative ranking of zero stars is
        not a snub. Being mentioned at all is intended to be an honor. (I hate
        it.)
      </p>

      <p>
        You may also notice{" "}
        <Link.Wiki
          to="Leonard_Maltin%27s_Movie_Guide#Features"
          text="Leonard Maltin's system"
        />. It's a 4-star system which permits half-stars, except that a rating
        of exactly one half-star is not allowed, resulting in 7 possible ranks.
        The lowest rating of a full star is replaced with all-caps "BOMB." How
        bizarre.
      </p>

      <h2>Symbology</h2>

      <p>
        Some rating systems break the mold so significantly that the systems
        themselves capture the imagination. These four examples below made a
        particularly lasting impression.
      </p>

      <h3>Famitsu</h3>

      <p>
        This Japanese gaming magazine famously scores video games on a{" "}
        <Link.Wiki to="Famitsu_scores" text="40-point scale" />{" "}
        by having 4 judges each contribute a rating out of 10 and adding their
        scores together. At time of writing, in over 25 years this system has
        only produced 28 perfect scores.
      </p>

      <p>
        I find this system particularly fascinating in the context of this post
        because it blends bottom-up and top-down design. Having each reviewer
        score games based on a 10-point system is top-down; inorganic. But
        adding their scores together without averaging them is a bottom-up
        representation of a score as given by a panel rather than an individual.
        It's so simple - no symbols, just numbers - yet manages to be one of the
        most unique among well-known rating systems.
      </p>

      <h3>SF Chronicle</h3>

      <p>
        Movie reviews in the San Francisco Chronicle have, for many decades,
        been rated with a unique metric: a small drawing of a man in a movie
        theater seat reacting to the film. Rodger Ebert{" "}
        <Link
          to="https://www.rogerebert.com/roger-ebert/you-give-out-too-many-stars"
          text="famously weighed in"
        />:
      </p>

      <blockquote>
        The only rating system that makes any sense is the Little Man of the San
        Franciscio [sic] Chronicle, who is seen (1) jumping out of his seat and
        applauding wildly; (2) sitting up happily and applauding; (3) sitting
        attentively; (4) asleep in his seat; or (5) gone from his seat.
      </blockquote>

      <LittleMenPic />

      <blockquote>
        The blessing of the Little Man system is that it offers a true middle
        position, like three on a five-star scale. I curse the Satanic force
        that dreamed up the four-star scale (at the New York Daily News in 1929,
        I think). It forces a compromise. So why don't I simply drop the star
        ratings? As I have explained before. I'd about convinced my editors to
        drop them circa 1970, when [Gene] Siskel started using them. To drop
        them now would be unilateral disarmament. Do editors even care about
        such things? You're damned right they do.
      </blockquote>

      <p>
        At the end of the article, Ebert hosts a long message from the
        Chronicle's film critic, Mick LaSalle, who explains the five poses, the
        editorial guidelines around their usage, and audience feelings about
        them. It's a great little read. Of topical importance, LaSalle draws
        comparisons to other rating systems. He mentions that the second-highest
        rating corresponds to a letter grade better than a B-, and that an A-
        ambiguously "can go either way" between top two ratings, noting "we
        don't have the equivalent of a three and a half star rating."
      </p>

      <h3>Christgau</h3>

      <p>
        <Link.Wiki to="Robert_Christgau" />{" "}
        is a prolific music critic who wrote books cataloguing his reviews of
        albums from the 70s, 80s, and 90s which were later archived on{" "}
        <Link to="https://robertchristgau.com/" text="this garish website" />.
        He used a harsh letter grade system as his core, and permitted leaving
        no grade at all. He expanded his system to include<Link
          spaced
          to="https://www.robertchristgau.com/xg/bk-cg90/grades-90s.php"
          text="the following additions"
        />which he sometimes mixes and matches:
      </p>

      <ul>
        <li>
          One to three asterisks for degrees of honorable mention based on the
          reader's attunement to a genre or aesthetic.
        </li>
        <li>A scissors icon calls out a good song on a bad album.</li>
        <li>A bomb icon for a particularly bad album.</li>
        <li>A turkey icon for a bad album that's otherwise notable.</li>
      </ul>

      <h3>Fantano</h3>

      <p>
        <Link to="https://www.theneedledrop.com/">Anthony Fantano</Link> is a
        {" "}
        <span className="line-through">Lemonhead mascot</span>{" "}
        popular music critic<Link
          spaced
          to="https://www.youtube.com/user/theneedledrop/videos"
          text="on YouTube"
        />who uses a 10-point system with several augmentations:
      </p>

      <ul>
        <li>0 is permitted and is meant to be offensive.</li>
        <li>Some albums are given a "NOT GOOD" rating instead of a number.</li>
        <li>
          Scores can be <em>ranges</em> rather than single numbers.
        </li>
        <li>
          Scores can be modified by adjectives "light", "decent", and "strong"
          which can also be used as ranges.
        </li>
        <li>
          Often with ranged scores, only one score is visually displayed. Some
          take this to indicate which is the "real" score within the range.
        </li>
      </ul>

      <p>
        A glorious anon took the time to record<Link
          spaced
          to="https://www.albumoftheyear.org/user/rakksmells/list/4446/every-album-anthony-fantano-ever-reviewed-highest-to-lowest-rating/"
          text="over 50 of his reviews"
        />with high fidelity. Scores like "Strong 8 to [Light 9]" and "[Light]
        to Decent 4" are peak Fantanocore.
      </p>

      <hr />

      <h2>Signing Off</h2>

      <p>
        This strange topic has become a bit of an obsession for me. I'm a
        collector, now. If you happen to know of other ornate rating systems or
        other writings on the topic, I'd love to hear about it. I'm feeling a
        light to decent thanks in advance.
      </p>
    </>
  );
}

export default post(import.meta, {
  name: "Ratings Systems",
  posted: "2023-06-19",
  written: "2023-01-12",
  img: {
    src: "/post/littleman.gif",
    desc: <Caption />,
    color: "smoke",
  },
  tags: ["media", "data", "design", "language"],
  teaser: <>Exploring the ways critics convey their impressions.</>,
  content: <Content />,
});
