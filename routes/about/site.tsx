import { Link } from "../../components/Link.tsx";
import Page from "../../components/Page.tsx";
import { Pic } from "../../components/Pic.tsx";

export default function AboutTheSite() {
  return (
    <Page tab="About This Site">
      <Pic.Prompted
        color="soot"
        src="/about/site.webp"
        prompt="mdjrny-v4 style, (futuristic), software developer creating an app with both hands, gloved, using a holographic operating system"
      />

      <p>
        This is my personal site. Its{" "}
        <Link to="https://github.com/pskfyi/psk.fyi">source code</Link>{" "}
        is public and its <Link to="/about/design">design system</Link>{" "}
        is documented. It's built with{" "}
        <Link to="https://fresh.deno.dev/">Deno Fresh</Link> which features:
      </p>

      <ul>
        <li>
          SSR-first, just-in-time rendering
        </li>
        <li>
          Native <Link to="https://www.typescriptlang.org/">TypeScript</Link>
          {" "}
          support
        </li>
        <li>
          <Link to="https://preactjs.com/">Preact</Link> for templating
        </li>
        <li>
          <Link to="https://twind.dev/">twind</Link>, a{" "}
          <Link to="https://tailwindcss.com/">Tailwind</Link>{" "}
          derivative, for styling
        </li>
      </ul>

      <p>
        I chose this stack because Deno, TypeScript, and Tailwind spark joy
        through superb developer experience.
      </p>

      <p>
        The site is hosted on{" "}
        <Link to="https://deno.com/deploy">Deno Deploy</Link>{" "}
        because Fresh was built for it and it's free.
      </p>
    </Page>
  );
}
