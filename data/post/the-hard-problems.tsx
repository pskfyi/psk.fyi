import Link from "/components/Link.tsx";
import { post } from "/lib/post.ts";

function Prompt() {
  return (
    <>
      <p class="my-0 text-left hyphens-none leading-5">
        Generated via <Link.Wiki to="Stable_Diffusion" /> using{" "}
        <Link.DiffusionBee />, the <Link.Openjourney /> model, and this prompt:
      </p>

      <blockquote class="my-2 lg:mb-0">
        mdjrny-v4 style, a symbolic fugue on time, space, design, technology,
        and the occult, by Terese Nielsen
      </blockquote>
    </>
  );
}

function Content() {
  return (
    <>
      <p>
        The hardest problem is learning how to live towards death - determining
        how to spend your finite time towards achieving your life goals.
      </p>

      <p>
        Setting your life goals is on you - I won't pry - but{" "}
        <em>how to go about achieving them</em>{" "}
        is something I can discuss. How will you have confidence that you are
        going about achieving those goals efficiently or satisfactorily? If you
        are sincere about achieving your goals, you cannot afford to be aimless.
        You must chart a course. This is a tractable problem.
      </p>

      <p>
        This is also a non-trivial problem. The challenge is the deluge of
        information without good tools for sifting through it. If you start
        looking for advice on being a great writer, you'll find enough
        information to consume years of your life. We can only navigate the
        expansive sea of knowledge by intuition.
      </p>

      <p>
        I call this{" "}
        <strong>The Problem of Profusion</strong>. It can be broken into four
        interrelated sub-problems:
      </p>

      <ul>
        <li>
          <strong>The Problem of Discovery</strong>: What are my options?
        </li>
        <li>
          <strong>The Problem of Curation</strong>: Which options might I
          personally prefer?
        </li>
        <li>
          <strong>The Problem of Synopsis</strong>: How do I quickly understand
          whether or not I'd like to pursue a given option?
        </li>
        <li>
          <strong>The Problem of Memory</strong>: Have I inspected this option
          or something similar in the past, and if so what was my impression?
        </li>
      </ul>
      <p>
        I find myself obsessed with the topic, partly because it confronts me
        every time I have to make a decision about how to spend time, but it is
        also quintessential{" "}
        <Link to="https://en.wiktionary.org/wiki/yak_shaving">yak-shaving</Link>
        {" "}
        – I have great goals, and in order to achieve them I must first
        architect a life-path, and before I can do that I must learn life
        architecture... I'm making an apple pie from scratch.
      </p>

      <blockquote>
        <p>
          “If you wish to make an apple pie from scratch, you must first invent
          the universe.”
        </p>

        <footer>
          ~ <cite>Carl Sagan, Cosmos</cite>
        </footer>
      </blockquote>

      <p>
        A primary interest of this blog will be an exploration of these problems
        and their solutions. The final result will be a{" "}
        <Link
          to="/tag/knowledge management"
          text="personal knowledge management"
        />{" "}
        application of vast temporal scope, to help manage these concerns across
        a lifetime.
      </p>
    </>
  );
}

export default post(import.meta, {
  name: "The Hard Problems",
  img: {
    desc: <Prompt />,
    color: "wood",
  },
  tags: ["philosophy", "time", "productivity"],
  written: "2020-06-20",
  posted: "2022-02-06",
  updated: "2023-06-21",
  teaser: {
    text: "The hardest problem is learning how to live towards death.",
    hyphenateOnMobile: true,
  },
  content: <Content />,
});
