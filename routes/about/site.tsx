import { DateLine } from "../../components/DateLine.tsx";
import { Link } from "../../components/Link.tsx";
import Page from "../../components/Page.tsx";
import { TagBlock } from "../../components/Tag.tsx";
import { Pic } from "../../components/pics.tsx";

export default function AboutTheSite() {
  return (
    <Page
      tab="About This Site"
      previewImage="/about/site.webp"
      previewDescription="The technologies used in the site's creation and deployment."
      largePreviewImage
    >
      <Pic.Prompted
        color="soot"
        src="/about/site.webp"
        prompt="mdjrny-v4 style, (futuristic), software developer creating an app with both hands, gloved, using a holographic operating system"
      />

      <TagBlock
        tags={["deno", "fresh", "typescript", "tailwind", "jsx"]}
        class="mt-4 mb(2 sm:3)"
      />

      <DateLine dates={{ created: "2023-06" }} />

      <p>
        This is my personal site. Its
        <Link
          spaced
          to="https://github.com/pskfyi/psk.fyi"
          text="source code"
        />
        is public and its <a href="/about/design">design system</a>{" "}
        is documented. It's built with{" "}
        <Link to="https://fresh.deno.dev/">Deno Fresh</Link> which features:
      </p>

      <ul>
        <li>
          SSR-first, just-in-time rendering
        </li>
        <li>
          Native
          <Link spaced to="https://www.typescriptlang.org/">TypeScript</Link>
          support
        </li>
        <li>
          <Link to="https://preactjs.com/">Preact</Link> for templating
        </li>
        <li>
          <Link to="https://twind.dev/">twind</Link>, a
          <Link spaced to="https://tailwindcss.com/">Tailwind</Link>
          derivative, for styling
        </li>
      </ul>

      <p>
        I chose this stack because Deno, TypeScript, and Tailwind spark joy.
      </p>

      <p>
        The site is hosted on
        <Link spaced to="https://deno.com/deploy">Deno Deploy</Link>
        because Fresh was built for it and it's free.
      </p>
    </Page>
  );
}
