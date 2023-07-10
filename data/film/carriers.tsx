import { film } from "/lib/film.ts";

export default film(import.meta, {
  name: "Carriers",
  released: "2009-09-04",
  img: {
    badgeBorder: "smoke",
  },
  tags: [
    "thriller",
    "post-apocalyptic",
    "virus",
  ],
  reviewed: "2023-07-09",
  rating: "D",
  content: (
    <>
      <p>
        Off-brand junk food closer to a pilot episode than a film. I see why it
        was unreleased for 3 years, and would have preferred it stayed that way.
        A small number of interesting dilemmas might interest genre diehards -
        to anyone else, this is just dissonant noise.
      </p>

      <p>
        One thing was useful at least: this movie proved to me that I do not
        like Chris Pine.
      </p>
    </>
  ),
});
