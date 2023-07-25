import { film } from "/lib/film.ts";

function Heading() {
  return (
    <span class="tracking(tight sm:normal)">The House That Jack Built</span>
  );
}

export default film(import.meta, {
  name: "The House That Jack Built",
  released: "2018-05-14",
  heading: <Heading />,
  img: {
    badgeBorder: "smoke",
  },
  tags: [
    "horror",
    "surreal",
    "arthouse",
    "serial killer",
  ],
  reviewed: "2023-07-23",
  rating: "B",
  content: (
    <>
      <p>
        A unique serial killer film told subjectively from the killer's warped
        perspective, blended with a literal depiction of Dante's inferno. The
        latter is the best part but sadly is only shown in the final fifth of
        the runtime.
      </p>

      <p>
        There is something off at the core of this movie. It has a Christian
        ethos which demands that all evil be a choice, so that we can feel
        righteous in punishing the perpetrators. If Jack's evil was a
        mechanistic result of mental disorder from childhood trauma, then
        punishing him would be like punishing a zombie for eating brains. So the
        film must pretend that Jack chose evil, crafting a strawman of a serial
        killer who we're supposed to find believable because of his unsmiling
        Germanic demeanor and a few pints of fake blood, as if it's tapping its
        temple saying "Maybe if he'd just smiled a little more and chosen more
        wisely he'd have gotten into heaven instead - ever think about that,
        Jack?" It's so out of touch with the contemporary scientific materialist
        worldview that it comes off as shallow and naive.
      </p>
    </>
  ),
});
