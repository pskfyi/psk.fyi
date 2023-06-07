import { Link } from "../../components/Link.tsx";
import Page from "../../components/Page.tsx";

export default function AboutMe() {
  return (
    <Page
      tab="About Me"
      heading="Patrick Sean Keenan"
    >
      <img src="/about/me.svg" class="mx-auto" />

      <p>
        I make websites and apps, and help others make them too, including at
        Apple and Intel. I&nbsp;aspire to be a game developer, video producer,
        and author.
      </p>

      <p>
        I'm a lifelong learner with broad interests and many opinions. I've
        always been passionate about experience design, philosophy, time,
        speculative fiction, and folklore. In the early 2010s I studied{" "}
        <Link to="https://en.wikipedia.org/wiki/Linguistics">linguistics</Link>
        {" "}
        and engineering at UC&nbsp;Berkeley. Recently I've become interested in
        {" "}
        <Link to="https://en.wikipedia.org/wiki/Information_science">
          information science
        </Link>{" "}
        and{" "}
        <Link to="https://en.wikipedia.org/wiki/Western_esotericism">
          western esotericism
        </Link>. Past obsessions include Magic: the Gathering, theme parks, and
        NASA.
      </p>
    </Page>
  );
}
