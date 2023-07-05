import { film } from "../films.ts";

export default film(import.meta, {
  name: "Outlaw King",
  released: "2018-11-09",
  img: { badgeBorder: "smoke" },
  tags: [
    "UK",
    "historical",
    "drama",
    "war",
    "@Chris Pine",
    "@Florence Pugh",
  ],
  reviewed: "2023-07-03",
  rating: "B",
  content: (
    <p>
      I watched this for Florence Pugh and she didn't disappoint, though it
      never got me invested in anyone else. The rest of the acting is flat and
      muted, the script lackluster, and the story begins too late in its own
      timeline to give sufficient context. High production value made it
      watchable nonetheless; the capstone battle was a very fun one; and of
      course as an Irish-American I am culturally primed to praise Brit-bashing.
    </p>
  ),
});
