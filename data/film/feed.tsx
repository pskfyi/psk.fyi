import Link from "/components/Link.tsx";
import { film } from "/lib/film.ts";

export default film(import.meta, {
  name: "Feed",
  released: "2005-09-15",
  img: {
    badgeBorder: "smoke",
    desc: "Do not imagine the smell.",
  },
  tags: [
    "horror",
    "crime",
    "black comedy",
  ],
  reviewed: "2023-07-22",
  rating: "D",
  content: (
    <>
      <p>
        Shamelessly lurid, stupid, sleazy, and gross. For most people this film
        will be completely unwatchable. I am not even willing to describe its
        content for you here. This is very intentional trash cinema that wobbles
        between hot garbage and idiosyncratic genius, thrashing between them far
        too abruptly, resulting in one of the most polarized films I've ever
        seen. You'll find yourself entranced by one scene, often by its smart
        and dynamic soundtrack, then repulsed by the next scene not necessarily
        because of the expectedly repulsive content but because of the wildly
        uneven acting and cinematography.
      </p>

      <p>
        I watched this odd and forgotten film because of{" "}
        <Link.YT to="aBOA2UddYTk" text="this review" />{" "}
        by one of my favorite YouTubers,{" "}
        <Link to="https://www.youtube.com/@GeorgRockallSchmidt">
          Georg Rockall-Schmidt
        </Link>.
      </p>
    </>
  ),
});
