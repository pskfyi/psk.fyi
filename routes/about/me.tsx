import Page from "../../components/Page.tsx";
import { Pic } from "../../components/pics.tsx";

export default function AboutMe() {
  return (
    <Page tab="About Me" heading="Patrick Sean Keenan">
      <Pic
        width="full"
        color="soot"
        src="/about/me.svg"
        desc={
          <>
            <p class="my-0 text-left sm:leading-[1.3rem]">
              A photograph of myself which animates into AI-generated avatars
              derived from the photo. I{" "}
              <a
                href="https://github.com/pskfyi/pskfyi/tree/main/img#profile-readme-image"
                target="_blank"
              >
                documented the creation
              </a>{" "}
              of this image for my{" "}
              <a href="https://github.com/pskfyi/pskfyi" target="_blank">
                github profile readme
              </a>.
            </p>
          </>
        }
      />

      <p>
        I make websites and apps, and help others make them too, including at
        Apple and Intel. I&nbsp;aspire to be a game developer, video producer,
        and author.
      </p>

      <p>
        I'm a lifelong learner with broad interests and many opinions. I've
        always been passionate about experience design, philosophy, time,
        speculative fiction, and folklore. In the early 2010s I studied{" "}
        <a href="https://en.wikipedia.org/wiki/Linguistics">linguistics</a>{" "}
        and engineering at UC&nbsp;Berkeley. Recently I've become interested in
        {" "}
        <a href="https://en.wikipedia.org/wiki/Information_science">
          information science
        </a>{" "}
        and{" "}
        <a
          href="https://en.wikipedia.org/wiki/Western_esotericism"
          target="_blank"
        >
          western esotericism
        </a>. Past obsessions include Magic: the Gathering, theme parks, and
        NASA.
      </p>
    </Page>
  );
}
