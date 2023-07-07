import { Head } from "$fresh/runtime.ts";
import { dedent } from "https://deno.land/x/handy@0.4.0/string/utils.ts";
import Link from "/components/Link.tsx";
import { post } from "/lib/post.ts";

function Content() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@speed-highlight/core/dist/themes/visual-studio-dark.css"
        />
        <script type="module">
          {dedent(`
            import { highlightAll } from 'https://unpkg.com/@speed-highlight/core/dist/index.js'
            
            highlightAll()
          `)}
        </script>
      </Head>

      <p>
        Deno is a server-side JavaScript runtime by the creator of Node.js,{" "}
        <Link.Wiki to="Ryan_Dahl" />. Its first rumblings were heard in 2018
        with Ryan's famous talk{" "}
        <Link.YT
          to="M3BM9TB-8yA"
          text="10 Things I Regret About Node.js"
        />{" "}
        where he layed out a compelling rationale for ripping Node down to its
        studs. In 2020, after a lengthy rewrite from Go to Rust,{" "}
        <Link
          to="https://deno.com/blog/v1"
          text="Deno 1.0"
        />{" "}
        was released featuring the following example.
      </p>

      <div
        class={`shj-lang-ts bg-torch-smoke!
          text([0.9rem]!) leading-4! py-3! px(1! sm:2!)`}
      >
        {dedent(`
          import { serve } from "https://deno.land/std/http/server.ts";

          for await (const req of serve({ port: 8000 })) {
            req.respond({ body: "Hello World\\n" });
          }
        `).trim()}
      </div>

      <p>
        To a rare breed of <Link to="https://www.skypack.dev/" text="Skypack" />
        {" "}
        aficionado, these three mostly-terse lines of code might have looked
        everyday, but to anyone else who bothered to pay attention this was
        alien script.
      </p>

      <ul>
        <li>ESM imports, from URLs, of TypeScript files no less</li>
        <li>Top-level await</li>
        <li>Async iterators replacing callback hell with clean for-loops</li>
      </ul>

      <p>
        It also had a batteries-included binary (linting, formatting, testing,
        etc.) and a secure-by-default sandbox which, strangely, seemed to have
        the most buzz, overshadowing the rest which was much more impressive and
        avant-garde.
      </p>

      <p>
        Mired in the pandemic, I lost sight of Deno until April 2022 when I
        spent a day reading the{" "}
        <Link
          to="https://deno.com/blog?tag=product-update"
          text="release notes"
        />{" "}
        and falling in love with its philosophy and design. I decided to take
        the plunge.
      </p>

      <p>
        Its vastly superior{" "}
        <Link
          to="/tag/dx"
          text="developer experience"
        />{" "}
        was immediately apparent. After about a month of after-hours tinkering,
        I have since then never written a line of Node.js outside of work. It's
        been over a year and I'm here to stay.
      </p>

      <h2>Top Feature</h2>

      <p>
        I knew that Deno being batteries-included would be a significant boon,
        as would native TypeScript execution. What I did not foresee was the
        deep significance of its ability to import and execute TypeScript{" "}
        <em>from URLs</em>. It radically reorients the way you write and
        organize software. The CLI behaves the same way. Here's an example from
        {" "}
        <Link
          to="https://deno.com/manual@v1.34.3/getting_started/first_steps"
          text="the docs"
        />:
      </p>

      <div
        class={`shj-lang-bash bg-torch-smoke! overflow-x-auto!
          text([0.9rem]!) leading-4! py-3! px(3! sm:4!)`}
      >
        deno run https://deno.land/std/examples/welcome.ts
      </div>

      <p>
        Death to bundlers. Death to package managers. Every uncompiled TS file
        is a library unto itself. Users can import the exact code they want and
        nothing more (<Link
          to="https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking"
          text="tree-shaking"
        />{" "}
        permitting) and do not need to pull down an entire package to run one
        portion of it. No more <code>node_modules</code>{" "}
        <Link
          to="https://i.redd.it/tfugj4n3l6ez.png"
          text="singularity"
        />. Every project is mostly a monorepo, for free, with no wiring of
        script runners. And if I want to see what's in a file, I can CMD + click
        on its URL and read it in full, un-minified, complete with comments and
        context - no sourcemap required.
      </p>

      <h2>Best-Kept Secrets</h2>

      <p>
        There is a lot of information in the wild about Deno's headline
        features. I don't need to add to the pile. Instead here is a plump list
        of notable things I love about Deno which no one ever talks about:
      </p>

      <ul>
        <li>
          Deno supports JSX and TSX out of the box.
        </li>
        <li>
          The{" "}
          <Link
            to="https://deno.com/manual@v1.34.3/references/contributing/style_guide"
            text="official style guide"
          />{" "}
          is a must-read for any library author or language designer.
        </li>
        <li>
          Typical Deno projects are sparse and flat, increasing signal-to-noise
          ratio and making them easier to reason about, thanks to these
          features:
          <ul>
            <li>
              All the included tooling (linter, formatter, test runner, ...) is
              zero-config with smart defaults.
            </li>
            <li>
              When you do need to configure something, it's all in one{" "}
              <code>deno.json</code> file.
            </li>
            <li>
              Dependencies are downloaded to an ambient cache. This means no
              {" "}
              <code>node_modules</code> or similar.
            </li>
          </ul>
        </li>
        <li>
          Wherever plausible, Deno uses existing web standards, even in unlikely
          places. For example:
          <ul>
            <li>
              Deno's <code>localStorage</code>{" "}
              API caches data in a temp file that{" "}
              <Link
                to="https://deno.com/manual@v1.34.3/runtime/web_storage_api"
                text="persists between
                    executions"
              />.
            </li>
            <li>
              Deno implements <code>alert</code>, <code>prompt</code>, and{" "}
              <code>confirm</code>...{" "}
              <Link
                to="https://examples.deno.land/prompts"
                text="in the command line"
              />.
            </li>
            <li>
              Deno's implementation of <code>fetch</code> can also{" "}
              <Link
                to="https://deno.com/manual@v1.34.3/runtime/web_platform_apis#fetching-local-files"
                text="retrieve local files"
              />.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Coming Soon</h2>

      <p>
        Deno is rearing up for its 2.0 release imminently and they've put out
        some exciting features lately, most notably their built-in{" "}
        <Link
          to="https://deno.com/blog/kv"
          text="key value store"
        />{" "}
        – an ergonomic wrapper around SQLite which also works in their cloud
        offering, <Link to="https://deno.com/deploy" text="Deno Deploy" />.
      </p>

      <p>
        I'll have much more to say about Deno in the near future. I'm still
        writing in it every day! My current jam is plopping utilities and
        reusable scripts into my project{" "}
        <Link to="https://github.com/pskfyi/handy" text="handy" />, a sort of
        second standard library I will develop over time. Some of the
        developments deserve blog posts of their own.
      </p>

      <p class="text(5xl)">👋</p>
    </>
  );
}

export default post(import.meta, {
  name: "All in on Deno",
  posted: "2023-06-21",
  written: "2023-05-06",
  img: {
    src: "/post/deno.svg",
  },
  preview: {
    image: "/post/deno.webp",
  },
  tags: ["tech", "typescript", "dx", "deno"],
  teaser: "Why I decline to write Node.js for my personal projects.",
  content: <Content />,
});
