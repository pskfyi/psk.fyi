import Link from "/components/Link.tsx";
import { film } from "/lib/film.ts";

export default film(import.meta, {
  name: "Traffic",
  released: "2000-12-27",
  img: {
    badgeBorder: "smoke",
  },
  tags: [
    "drama",
    "crime",
    "drug",
    "politics",
    "@Steven Soderbergh",
    "@Michael Douglas",
    "@Benicio del Toro",
    "@Catherine Zeta-Jones",
    "@Don Cheadle",
    "@Luis Guzmán",
  ],
  reviewed: "2023-07-09",
  rating: "A",
  content: (
    <>
      <p>
        An all-star, ensemble cast sprinkled across four interleaving arcs of a
        {" "}
        <Link to="https://www.lindaaronson.com/six-types-of-parallel-narrative.html">
          tandem
        </Link>, <Link.Wiki to="Hyperlink_cinema" text="hyperlinked" />{"  "}
        plot that structurally reflects{" "}
        <Link.Wiki to="Traffik">the film' miniseries origins</Link.Wiki>. Also
        reflecting those long-form origins, it dawdles too much in the first
        half and ought to have had at least 20mins of fat cut from it.
      </p>

      <p>
        Each star gets their moment to shine through several powerful scenes,
        the majority of which involve long-forgotten Julia Stiles doppelganger
        {" "}
        <Link.Wiki to="Erika_Christensen" />{" "}
        in an exceptional one-off performance.
      </p>

      <p>
        The movie has an ornate, archival aura from its shaky camerawork and
        grainy film, and an equally ornate use of color grading to differentiate
        its four storylines. Unfortunately these two features react to make the
        film look like a{" "}
        <Link.Wiki to="camrip" />, more distracting than it is artistic or
        assistive.
      </p>
    </>
  ),
});
