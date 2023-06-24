import { Link } from "../../components/Link.tsx";
import { musicArtist } from "../music.ts";

function KeepItLikeASecret() {
  return (
    <>
      <p>
        An agreeable 45mins of droning with a few standouts and no skips.
        "Sidewalk", "Carry the Zero", and "You Were Right" each have their
        moments. Only two tracks stood out in whole, warranting multiple listens
        before I put the album down:
      </p>

      <ul>
        <li>
          <Link.YT to="aP8JVuyhBx8" text="Temporarily Blind" />{" "}
          – An instant favorite. The only song on the album that truly delighted
          me. Wait for it to pop.
        </li>
        <li>
          <Link.YT to="KjGnyGg2pE4" text="Else" />{" "}
          – Lyrical earworm. I am a sucker for any track that lingers on the
          word{" "}
          <em>forever</em>, and the sappy, melancholy romance it's paired with
          mixes well. "Funny thing with blood" also catches the ear every time.
        </li>
      </ul>

      <hr />

      <p>
        I listened to this because <Link to="/tag/fantano">Fantano</Link>{" "}
        mentioned it in <Link.YT to="nl8RW8DwFbA" text="his assessment" />{" "}
        of Pitchfork's revised{" "}
        <Link
          to="https://pitchfork.com/features/lists-and-guides/the-best-albums-of-the-1990s/"
          text="best albums of the 90s"
        />, where it ranked #101.
      </p>
    </>
  );
}

export default musicArtist(import.meta, {
  name: "Built to Spill",
  releases: [
    {
      type: "album",
      name: "Perfect from Now On",
      tags: ["indie rock", "alt rock", "dream pop"],
      released: "1997-01-28",
      impression: "!",
    },
    {
      type: "album",
      name: "Keep it Like a Secret",
      tags: ["indie rock", "dream pop", "fantano"],
      released: "1999-02-02",
      reviewed: "2023-06-24",
      rating: "B",
      content: <KeepItLikeASecret />,
    },
  ],
});
