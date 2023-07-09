import type { JSX } from "preact";

import Link from "/components/Link.tsx";
import { post } from "/lib/post.ts";

function TechTile({
  url,
  img,
  label,
  description,
  imageClass,
  titleClass = "mt(2 sm:3) mb(1 sm:2)",
}: {
  url: string;
  img: string;
  label: string;
  description: string | JSX.Element;
  imageClass?: string;
  titleClass?: string;
}) {
  return (
    <div class="bg-torch-smoke rounded-xl overflow-hidden">
      <Link
        eternal
        class="no-underline"
        to={url}
      >
        <div class={`ratio-square ${imageClass}`}>
          <img src={img} />
        </div>
        <div
          class={`w-full font-display leading-none
            text(center [2.2rem] sm:[2.6rem])
            ${titleClass}`}
        >
          {label}
        </div>
      </Link>
      <p class="mt-0 text(left torch(ash)) hyphens px-2">
        {description}
      </p>
    </div>
  );
}

function Content() {
  return (
    <>
      <p>
        This is my personal site. Its{" "}
        <Link to="https://github.com/pskfyi/psk.fyi">source code</Link>{" "}
        is public and its <Link to="/about/design">design system</Link>{" "}
        is documented.
      </p>

      <p>
        Architecturally, my primary goal is to maximize{" "}
        <Link to="/tag/dx">developer experience (DX)</Link>{" "}
        and keep friction as low as possible. For me right now, the technologies
        which enhance DX the most are Deno, TypeScript, Tailwind, VS Code, and
        GitHub Copilot. They spark joy.
      </p>

      <h2>Tech Stack</h2>

      <div class="gap-4 mt-8 -mx-2 grid(& cols(2 sm:3))">
        <TechTile
          img="/post/deno.svg"
          url="/tag/deno"
          label="Deno"
          imageClass="p-2"
          description={
            <>
              Modern JavaScript <Link.Wiki to="Runtime_system" text="runtime" />
              {" "}
              by the creator of Node.js.
            </>
          }
        />
        <TechTile
          label="Fresh"
          img="/post/fresh.svg"
          url="https://fresh.deno.dev/"
          imageClass="p-2"
          description={
            <>
              <Link.Wiki
                to="Server-side_scripting#Server-side_rendering"
                text="SSR"
              />-first web framework using{" "}
              <Link to="https://jasonformat.com/islands-architecture/">
                islands architec&shy;ture
              </Link>.
            </>
          }
        />
        <TechTile
          img="/post/deploy.webp"
          url="https://deno.com/deploy"
          label="Deno Deploy"
          description={
            <>
              Zero-config{" "}
              <Link.Wiki to="Serverless_computing" text="Serverless" />{" "}
              hosting with a generous free tier.
            </>
          }
        />
        <TechTile
          url="/tag/typescript"
          img="/post/ts.svg"
          label="TypeScript"
          description={
            <>
              Compiles-to-JS programming language with{" "}
              <Link.Wiki to="Type_system#STATIC" text="static typing" />.
            </>
          }
        />
        <TechTile
          url="https://preactjs.com/"
          img="/post/preact.svg"
          label="Preact"
          imageClass="p-2"
          description={
            <>
              A small <Link to="https://react.dev/" text="React" />{" "}
              alternative that permits standard HTML attrs.
            </>
          }
        />
        <TechTile
          url="https://twind.dev/"
          img="/post/twind.svg"
          label="Twind"
          description={
            <>
              <Link to="https://tailwindcss.com/">Tailwind</Link>'s pleasant API
              in a <Link.Wiki to="CSS-in-JS" /> shell.
            </>
          }
        />
      </div>

      <h2>Tools</h2>

      <div class="grid(& cols(2 sm:3)) gap-4 mt-8">
        <TechTile
          url="https://code.visualstudio.com/"
          img="/post/vscode-insiders.svg"
          label="VS Code"
          imageClass="p-2"
          titleClass="mt-0 mb(2 sm:3)"
          description={
            <>
              Popular{" "}
              <Link.Wiki to="Integrated_development_environment" text="IDE" />.
              I use the Insiders build for testing Copilot features.
            </>
          }
        />
        <TechTile
          url="https://github.com/features/copilot"
          img="/post/copilot.webp"
          label="Copilot"
          imageClass="p-2"
          titleClass="mt(0 sm:1) mb(2 sm:3)"
          description={
            <>
              AI pair programmer with IDE integration.
            </>
          }
        />
        <TechTile
          url="https://www.gimp.org/"
          img="/post/gimp.svg"
          label="GIMP"
          imageClass="p-2"
          titleClass="mt(0 sm:1) mb(2 sm:3)"
          description={
            <>
              A robust, long-lived{" "}
              <Link.Wiki to="Free_and_open-source_software" text="FOSS" />{" "}
              raster graphics editor.
            </>
          }
        />
      </div>
    </>
  );
}

export default post(import.meta, {
  name: "About This Site",
  img: {
    color: "wood",
    prompt: "mdjrny-v4 style, a blueprint for a time machine",
  },
  tags: ["meta", "deno", "fresh", "dx", "typescript", "tailwind"],
  written: "2023-06-07",
  posted: "2023-06-07",
  updated: "2023-07-05",
  teaser: {
    text: "The technologies used in its creation and deployment.",
  },
  content: <Content />,
});
