import { Link } from "/components/Link.tsx";
import { film } from "/lib/film.ts";

export default film(import.meta, {
  name: "The Wonder",
  released: "2022-10-05",
  img: { color: "smoke", badgeBorder: "smoke" },
  tags: ["UK", "Netflix", "period", "drama", "@Florence Pugh"],
  reviewed: "2023-07-04",
  rating: "F",
  content: (
    <p>
      A bold intro, a historically{" "}
      <Link.Wiki to="Fasting_girl" text="intriguing premise" />, a small number
      of somewhat punchy moments, and even Florence Pugh's face were unable to
      hold my attention long enough to finish this yawn-inducing movie. I made
      it to the big reveal - over an hour in - then tapped out.
    </p>
  ),
});
