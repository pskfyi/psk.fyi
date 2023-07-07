import type { JSX } from "preact";

import { Link } from "/components/Link.tsx";
import { Tag } from "/components/Tag.tsx";
import { Docs } from "/components/docs/Docs.tsx";
import aboutThisSite from "/data/post/about-this-site.tsx";
import { Post } from "/data/posts.ts";

export declare namespace PostTile {
  export type Props = Post & {
    class?: string;
    headingLevel?: 1 | 2 | 3 | 4;
  };

  export type SetProps = Pick<Props, "headingLevel"> & {
    class?: string;
    posts: Post[];
  };
}

export function PostTile(
  {
    class: className,
    headingLevel = 3,
    img: Img,
    path,
    tags,
    teaser,
    name,
    heading,
    written,
  }: PostTile.Props,
) {
  const El = `h${headingLevel}` as const;
  [, ...tags] = tags;

  const hasDescenders = /g|j|p|q|y|R/.test(name);
  const nudge = hasDescenders
    ? "mb([0.4rem] md:[0.8rem])"
    : "mb([0.2rem] md:[0.3rem])";

  return (
    <Link
      to={path}
      class={`group grid grid-cols-3 gap-2 no-underline
        text-torch(light visited:(light))
        ${className}`}
    >
      {typeof Img === "function"
        ? <Img />
        : <img src={Img.src} class="rounded-lg" />}
      <div class="pl(2 sm:3 lg:4) my-auto col-span-2">
        <El
          class={`mt-0 font-display leading-none duration-700
          text(3xl sm:4xl md:5xl group-hover:torch-plasma) 
          ${nudge}`}
        >
          {heading || name}
        </El>
        <div className="leading-none! my(1 sm:2) duration-500 flex items-center
          text(xs sm:sm md:base torch(ash group-hover:halo))">
          {written}
          <span class="px-2 opacity-50 text-[0.7rem] relative bottom-px">
            |
          </span>
          <Tag.InlineBlock tags={tags} />
        </div>
        <p class="my-0 duration-500 hyphens-none
          text(left sm:lg md:xl group-hover:torch-flame) leading(5 md:6 lg:7)">
          {teaser}
        </p>
      </div>
    </Link>
  );
}

PostTile.Set = function PostTileSet({
  class: className,
  headingLevel,
  posts,
}: PostTile.SetProps) {
  return (
    <div className={`grid(& cols-1) gap(4) ${className}`}>
      {posts.map((post) => <PostTile headingLevel={headingLevel} {...post} />)}
    </div>
  );
};

export function PostTileSetDocs(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <Docs
      component={PostTile.Set}
      desc={
        <p>
          A 1-column grid of <code>{"<PostTile>"}</code>s.
        </p>
      }
      props={{
        posts: "An array of objects describing blog posts.",
        headingLevel:
          "The heading level to use for the post titles. Defaults to 3.",
      }}
      examples={[
        [
          "<PostTile.Set posts={[...]} />",
          <PostTile.Set posts={[aboutThisSite]} />,
        ],
      ]}
      {...props}
    />
  );
}
