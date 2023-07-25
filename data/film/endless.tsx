import Link from "/components/Link.tsx";
import { film } from "/lib/film.ts";

export default film(import.meta, {
  name: "The Endless",
  released: "2018-04-06",
  img: {
    badgeBorder: "smoke",
  },
  tags: [
    "scifi",
    "horror",
    "mystery",
    "cult",
    "time travel",
  ],
  reviewed: "2023-07-25",
  rating: "B",
  content: (
    <p>
      A decent film with a unique plot which unfortunately does not live up to
      its poster's magnificent promise. Like so many low-budget scifi and horror
      films, it suffers most from its unwillingness to sufficiently show us its
      wonders, assumedly because special effects are expensive. The first act
      works well and entices, the second act intrigues with oddities and
      glimpses of the supernatural, and the third act shows a bit more but never
      in full. We really needed to stare the thing in the face to seal the deal,
      but I know that not every movie can have Nope's budget. Still it goes much
      further than most films of this sort, and that is praiseworthy. I also
      enjoyed <Link.Wiki to="Callie_Hernandez" />, who I felt was underutilized.
    </p>
  ),
});
