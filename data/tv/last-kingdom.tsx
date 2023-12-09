import Link from "/components/Link.tsx";
import { televisionShow } from "/lib/tv.ts";

export default televisionShow(import.meta, {
  name: "The Last Kingdom",
  tags: ["BBC", "Netflix", "historical", "drama", "action"],
  seasons: {
    s1: {
      img: {
        desc: (
          <>
            Diet Jason Momoa (Alexander Dreymon) ogling his 3rd side piece
            (Charlie Murphy).
          </>
        ),
        color: "smoke",
      },
      released: "2015-10-10",
      reviewed: "2023-06-18",
      rating: "B",
      content: (
        <p>
          It watches like the historical record of a long-forgotten time, until
          it eventually pivots to being a typical fantasy{" "}
          <Link
            to="https://rpg.stackexchange.com/a/151149"
            text="murder hobo"
          />{" "}
          romp without (visible) magic. The soundtrack by{" "}
          <Link.Wiki to="John_Lunn" />{" "}
          stands out but unfortunately gets repetitive by the end from overuse
          of its best tracks. The other standout is the short-lived Queen Isulde
          (<Link.Wiki to="Charlie_Murphy_(actress)" />, image right) whose
          character introduces forms of mysticism and herbalism which are
          otherwise overlooked. The show could have benefited much from similar
          glimpses of other bygone customs.
        </p>
      ),
    },
    s2: {
      img: {
        desc:
          "Chief murderhobo Tarzan (Alexander Dreymon) in his natural habitat, contemplating his next combat encounter.",
        color: "wood",
        badgeBorder: "wood",
      },
      released: "2017-03-15",
      reviewed: "2023-06-19",
      rating: "C",
      content: (
        <p>
          Shameless{" "}
          <Link to="https://rpg.stackexchange.com/a/151149">
            murder-hoboism
          </Link>{" "}
          and{" "}
          <em>
            <strong>exact</strong>
          </em>{" "}
          retreading of the previous season's xenophobia made this a bore. The
          only standout is episode 3, which was truly brutal and sad, but the
          rest was a pantomime of the previous season's sparknotes.
        </p>
      ),
    },
    s3: {
      img: {
        desc: (
          <>
            If a{" "}
            <Link to="https://www.dandwiki.com/wiki/3e_SRD:Nymph">
              3E Nymph
            </Link>{" "}
            could be a{" "}
            <Link
              to="https://www.dndbeyond.com/classes/warlock"
              text="5E Warlock"
            />{" "}
            with{" "}
            <Link to="https://en.wikipedia.org/wiki/Count_von_Count">
              Dracula
            </Link>{" "}
            as her patron.
          </>
        ),
      },
      released: "2018-10-19",
      reviewed: "2023-07-12",
      rating: "B",
      content: (
        <>
          <p>
            This first direct-to-Netflix season benefits tremendously from a
            denser and more eventful plot, remedying S2's biggest flaw. Staying
            true to form, the show remains campy, morally one-dimensional,
            largely predictable, lumpily paced, yet still a fun romp through
            another arc in the life of a swashbuckling, pil­low­talk­ing
            literally-who.
          </p>

          <p>
            Special mention this season to Skade
            (<Link.Wiki to="Thea Sofie Loch Næss" />, above) who steals every
            scene. Through her character the show once again glimpses its
            greater potential as it did with Isulde in S1, and once again the
            showrunners unfortunately squander it.
          </p>
        </>
      ),
    },
  },
  seasonsNotReviewed: ["s4", "s5"],
});
