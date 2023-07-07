import { televisionShow } from "/data/tv.ts";

export default televisionShow(import.meta, {
  name: "The Lazarus Project",
  tags: ["time travel", "drama", "thriller"],
  img: {
    src: "/tv/lazarus-project/index.webp",
    color: "wood",
  },
  seasons: {
    s1: {
      rating: "E",
      released: "2022-06-16",
      reviewed: "2023-06-16",
      img: {
        src: "/tv/lazarus-project/s1.webp",
        color: "wood",
        desc: (
          <>
            This show is nowhere near as enticing as this superb promotional
            image suggests.
          </>
        ),
      },
      content: (
        <p>
          Trite garbage. I was mentally done before the end of episode 1 but the
          ending pushed me to try 1 more, after which I tapped out. It's like
          someone watched Travelers and thought "I&nbsp;can do that, but{" "}
          <em>much</em>{" "}
          worse." The most offensive aspect is the uncritical Scientism... in a
          time travel show. You already left "reality" at the door - why pay it
          homage?
        </p>
      ),
    },
    s2: "-",
  },
});
