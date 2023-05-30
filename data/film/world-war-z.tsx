import { Link } from "../../components/Link.tsx";
import { film } from "../films.ts";

export default film(import.meta, {
  name: "World War Z",
  img: {
    desc: (
      <>
        When your{" "}
        <Link
          to="https://scryfall.com/search?q=oracleid%3A8bf1137a-163c-446f-8d34-168a7705df4e&unique=prints"
          text="Zombie Army"
        />{" "}
        gains reach until end of turn.
      </>
    ),
  },
  rating: "E",
  released: "2013-06-21",
  reviewed: "2023-06-05",
  tags: ["action", "zombie", "@Brad Pitt", "@Marc Forster", "@Drew Goddard"],
  content: (
    <p>
      A tremendously stupid movie that expects its audience is even stupider.
      Its weakest parts are its reliance on serendipity and deus ex machina. So
      routinely immersion-breaking that it accidentally watches like a parody.
    </p>
  ),
});
