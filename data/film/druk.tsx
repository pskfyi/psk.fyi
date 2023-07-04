import { film } from "../films.ts";

export default film(import.meta, {
  name: "Druk",
  released: "2020-09-24",
  img: { badgeBorder: "smoke" },
  tags: ["Danish", "drama", "comedy", "@Mads Mikkelsen"],
  reviewed: "2023-07-04",
  rating: "B",
  content: (
    <p>
      This movie has become a meme and I wanted to see what the fuss was about.
      It has two sides: the prominent one is a jolly rollick for which the film
      is loved, and the other is a halfhearted polemic on alcoholism which feels
      like insincere appeasement. It would have been much more successful if the
      finger-wagging had been distilled to a single harrowing, sobering scene.
      As-is, the film is 30mins too long.
    </p>
  ),
});
