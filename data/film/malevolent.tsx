import { Link } from "/components/Link.tsx";
import { film } from "/lib/film.ts";

export default film(import.meta, {
  name: "Malevolent",
  released: "2020-10-05",
  img: { badgeBorder: "smoke" },
  tags: ["UK", "Netflix", "horror", "ghosts", "@Florence Pugh"],
  reviewed: "2023-07-04",
  rating: "C",
  content: (
    <p>
      Serviceable and completely unmemorable. It watches like an episode of an
      {" "}
      <Link.Wiki
        to="Anthology_series"
        text="anthology television series"
      />{" "}
      that you've forgotten about for good reason. Thanks, though, for letting
      me stare at Florence Pugh for a while.
    </p>
  ),
});
