import { film } from "/data/films.ts";

export default film(import.meta, {
  name: "Martyrs",
  tags: ["French", "psychological horror", "supernatural", "secret society"],
  img: {
    desc: <>This is as tame as the movie gets. You have been warned.</>,
  },
  released: "2008-09-03",
  reviewed: "2023-06-09",
  rating: "A",
  content: (
    <>
      <p>
        Dynamic, thrilling, chilling, and dark. First it seems like a kidnapping
        film, then a Tarantino actionfest, then a monster hunt, then a
        conspiracy thriller, and finally you realize it's a spiritual prequel to
        A&nbsp;Serbian Film - in some ways more depraved, in some ways less.
      </p>
      <p>
        My only issue was that a primary antagonist is revealed to be a
        hallucination, and while this reveal is explained and integrated into
        the narrative it still felt deeply incongruous with the rest of the
        movie's otherwise carefully-considered tone. The director seemingly
        wanted you to doubt the original protagonist's narrative, but that felt
        impossible from the audience's vantage point, so attempting to force
        this perception was a clumsy move.
      </p>
    </>
  ),
});
