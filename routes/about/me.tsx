import type { SocialMediaPreview } from "/lib/social.ts";

import { Link } from "/components/Link.tsx";
import Page from "/components/Page.tsx";
import { Pic } from "/components/Pic.tsx";

const preview: SocialMediaPreview = {
  image: "/about/me.jpg",
  large: true,
};

export default () => (
  <Page tab="About Me" heading="Patrick Sean Keenan" preview={preview}>
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
      I am an experienced software developer and tech lead specializing in web
      technologies. At Intel my team built internal tools for hardware testing,
      and at Apple we architected the future of{" "}
      <Link to="apple.com" />. I am building a{" "}
      <Link.Wiki
        to="https://en.wikipedia.org/wiki/Personal_knowledge_management"
        text="personal"
      />{" "}
      <Link.Wiki
        to="https://en.wikipedia.org/wiki/Knowledge_management_software"
        text="knowledge management system"
      />, and I&nbsp;aspire to be a game developer, video producer, and author.
    </p>

    <p>
      I'm a lifelong learner with broad interests and many opinions. I've always
      been passionate about experience design, philosophy, time, and media. In
      the early 2010s I studied{" "}
      <Link.Wiki to="Linguistics" text="linguistics" />, literature, and
      engineering at UC&nbsp;Berkeley. Recently I've become interested in{" "}
      <Link.Wiki to="Information_science" text="information science" /> and{" "}
      <Link.Wiki to="Western_esotericism" text="western esotericism" />.
    </p>
  </Page>
);
