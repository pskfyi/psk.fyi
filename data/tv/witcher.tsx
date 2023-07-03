import { Link } from "../../components/Link.tsx";
import { televisionShow } from "../tv.ts";

export default televisionShow(import.meta, {
  name: "The Witcher",
  tags: ["Netflix", "fantasy", "action", "adventure", "drama"],
  seasons: {
    s1: {
      rating: "S",
      released: "2019-12-20",
      reviewed: "2022-05-05",
      img: {
        color: "smoke",
        desc: (
          <>
            <Link.Wiki to="Joey_Batey" />{" "}
            as Jaskier playing Free Bird by popular demand.
          </>
        ),
      },
      content: (
        <>
          <p>
            Every other fantasy series lacks in quality and / or worldbuilding.
            Across eight tight episodes, the first season of The Witcher manages
            to avoid both, realizing a dark and vulgar realm with the
            craftsmanship of prestige TV. As someone who did <em>not</em>{" "}
            enjoy the games, I fully expected to roll my eyes at this, yet that
            never happened.
          </p>

          <p>
            I have one personal complaint: based on my expectations from the
            games, I don't agree with Yennefer's casting. However as a
            standalone interpretation separate from the games, there is
            absolutely nothing wrong with{" "}
            <Link.Wiki to="Anya_Chalotra" />'s performance, and rest of the cast
            is great. Special shoutouts to Tissaia
            (<Link.Wiki to="MyAnna_Buring" />) and Jaskier
            (<Link.Wiki to="Joey_Batey" />) who always delighted.
          </p>
        </>
      ),
    },
    s2: {
      rating: "B",
      released: "2019-12-20",
      reviewed: "2022-05-07",
      img: {
        color: "smoke",
        desc: (
          <>
            Fringilla wisely advising <Link.Wiki to="Rust_Cohle" />{" "}
            to shave his mullet.
          </>
        ),
      },
      content: (
        <>
          <p>
            A <Link.Wiki to="Horse_opera" text="horse opera" />{" "}
            that believes it will go on forever, doling out lore in meager
            tidbits at a sedated pace. Half of these episodes could be skipped
            entirely and ought to have been edited away. Some arcs and
            characters do stand out - Fringilla
            (<Link.Wiki to="Mimî_M._Khayisa" />) in particular - and for that it
            is still worth watching.
          </p>
        </>
      ),
    },
    s3: "!",
  },
});
