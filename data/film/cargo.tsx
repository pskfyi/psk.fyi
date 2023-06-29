import { Tier } from "../../components/Tier.tsx";
import { film } from "../films.ts";

export default film(import.meta, {
  name: "Cargo",
  released: "2017-05-18",
  img: {
    badgeBorder: "smoke",
  },
  tags: [
    "Australian",
    "zombie",
    "drama",
    "post-apocalyptic",
    "@Martin Freeman",
  ],
  reviewed: "2023-06-09",
  rating: "D",
  content: (
    <p>
      An intriguing core improperly handled. Starts off quite well - it would
      have earned an <Tier.A />{" "}
      if it had carried that mood forward - and for that it's saved from{" "}
      <Tier.E />-tier. Seems to me that its reception has been slightly inflated
      both because of its non-US origin (unfortunately common among horror
      films) and its ham-fisted "commentary" on colonialism.
    </p>
  ),
});
