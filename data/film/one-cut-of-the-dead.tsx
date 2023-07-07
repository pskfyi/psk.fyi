import { Tier } from "/components/Tier.tsx";
import { film } from "/data/films.ts";

export default film(import.meta, {
  name: "One Cut of the Dead",
  rating: "S",
  released: "2017-11-04",
  reviewed: "2023-06-29",
  img: {
    desc: <em>"Action!!!"</em>,
  },
  tags: [
    "Japanese",
    "comedy",
    "zombie",
    "meta",
  ],
  content: (
    <>
      <p>
        A self-aware, silly film with a highly technical gimmick which it boldly
        transcends, revealing an immensely delightful and charming core
        underneath. It is a single-watch movie, but that single watch is a must.
        I was shocked to learn afterwards that the film was made with only $25k
        and an unknown cast, going on to gross a much-deserved $30mil.
      </p>

      <p>
        Technically, the first portion disengaged me a couple times, which would
        push this down to an{" "}
        <Tier.A />, however those very moments are explained and made very
        intentional later on, absolving it. The <Tier.S /> is earned.
      </p>
    </>
  ),
});
