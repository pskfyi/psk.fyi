import { film } from "/lib/film.ts";

export default film(import.meta, {
  name: "Deadstream",
  released: "2022-03-11",
  img: {
    badgeBorder: "smoke",
  },
  tags: [
    "Shudder",
    "horror",
    "comedy",
    "found footage",
    "ghosts",
  ],
  reviewed: "2023-07-16",
  rating: "B",
  content: (
    <p>
      Mastery of the fundamentals and a cute pair of twists carry this very far,
      even overcoming its cringey gimmick for a time, until the third act
      decides to fart in your face and ruin it.
    </p>
  ),
});
