import { film } from "../films.ts";

function Name() {
  return <em class="pr-1">mother!</em>;
}

export default film(import.meta, {
  name: <Name />,
  tab: "mother!",
  released: "2017-09-15",
  tags: [
    "psychological horror",
    "religion",
    "@Arnofsky",
    "@JLaw",
    "@Javier Bardem",
    "@Michelle Pfeiffer",
    "@Ed Harris",
  ],
  reviewed: "2023-06-09",
  rating: "B",
  content: (
    <p>
      It's too easy to write this off as one of a few flimsy allegories - I
      reject that as overly-reductive. It was a true cinema experience. The
      acting and unique focus on facial expressions absolutely makes this worth
      watching, and there are many noteworthy micro-scenes in the relentless
      fugue that is the last 30mins. As usual with Aronofsky, though, this was
      not easy to watch, prompting me to disengage several times.
    </p>
  ),
});
