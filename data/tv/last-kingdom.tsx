import { Link } from "../../components/Link.tsx";
import { televisionShow } from "../tv.ts";

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
          it eventually pivots to being a typical fantasy
          <Link
            spaced
            to="https://rpg.stackexchange.com/a/151149"
            text="murder hobo"
          />
          romp without (visible) magic. The soundtrack by
          <Link.Wiki to="John_Lunn" spaced />
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
    s3: "?",
    s4: "?",
    s5: "?",
  },
});
