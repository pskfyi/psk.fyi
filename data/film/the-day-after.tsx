import { Tier } from "/components/Tier.tsx";
import { film } from "/lib/film.ts";

export default film(import.meta, {
  name: "The Day After",
  released: "1983-11-20",
  img: {
    badgeBorder: "smoke",
  },
  tags: ["TV movie", "nuclear war", "drama", "@John Lithgow", "@Jason Robards"],
  reviewed: "2023-06-29",
  rating: "B",
  content: (
    <>
      <p>
        This no-nonsense glimpse into the possibility of nuclear war was a
        cultural phenomenon upon release and is the most-viewed made-for-TV
        movie in history. It's more unflinching than you'd expect it could
        afford to be, given its origins. Though it foregoes the deep depravity
        in which later post-apocalyptic fiction revels, it does get quite dark
        and depicts many tragedies and, towards the end, crimes, lending it the
        air of believability which makes it so uncomfortable. It ends with an
        on-screen message underscoring that the real thing would likely be far
        worse.
      </p>

      <p>
        The plot has a major issue for contemporary audiences - it takes far too
        long to get started, almost 40mins. 50 years from now, if people have
        forgotten to fear The Bomb, that preamble might be required to set the
        mood. In 2023, and I suspect even in 1983, it could have largely been
        deleted. It's so egregious that I can't even give the movie the{" "}
        <Tier.A /> rating it otherwise clearly deserves.
      </p>

      <p>
        The film deserves a higher-fidelity, even-darker remake, if it could
        find a director with a sufficiently delicate touch.
      </p>
    </>
  ),
});
