import Link from "/components/Link.tsx";
import { game } from "/lib/game.ts";

export default game(import.meta, {
  name: "Vampire Survivors",
  tags: ["PC", "Steam", "bullet hell", "roguelite", "arcade"],
  released: "2022-10-20",
  reviewed: "2023-06-11",
  img: {
    desc: (
      <>
        Definitely-not-Dracula hittin' you with the
        definitely-not-<Link to="https://trueblood.fandom.com/wiki/Glamour">
          glamour
        </Link>.
      </>
    ),
    color: "smoke",
  },
  rating: "A",
  content: (
    <>
      <p>
        A hypnotic time-sink. An excellent thing to play while listening to
        videos. A long chain of unlocks at the start kept me continuously
        engaged. After a few hours it came to a lull where unlocks were fewer
        and further apart, but by then the game had covered its price, and
        afterwards the unlock chain resumed in earnest. My response was to
        immediately buy both DLCs - what could be a better endorsement?
      </p>
      <p>
        Other than repetition (which, to be fair, is endemic in the genre) and
        the lull after the initial unlocks, my primary complaint revolves around
        the 30min maximum duration of a run and the great number of unlocks
        which require you, explicitly or implicitly, to complete a full run.
        Almost always if you can make to the 15min mark you know that you can
        complete the run, resulting in tedium and autopilot.
      </p>
    </>
  ),
});
