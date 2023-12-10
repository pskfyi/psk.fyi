import type { JSX } from "preact";

import Docs from "/components/Docs.tsx";
import Link from "/components/Link.tsx";
import aboutThisSite from "/data/post/about-this-site.tsx";
import { Post } from "/lib/post.ts";
import { formatTag as format } from "/lib/tags.ts";

declare namespace PostTile {
  export type Props = Post & {
    class?: string;
    headingLevel?: 1 | 2 | 3 | 4;
    filled?: boolean;
  };

  export type SetProps = Pick<Props, "headingLevel"> & {
    class?: string;
    posts: Post[];
    filled?: boolean;
  };
}

function PostTile(
  {
    class: className,
    headingLevel = 3,
    img: Img,
    path,
    tags,
    name,
    heading,
    written,
    filled = false,
  }: PostTile.Props,
) {
  const El = `h${headingLevel}` as const;
  [, ...tags] = tags;

  const filledClass = filled ? "bg-torch-smoke rounded-lg" : "";
  const hasDescenders = /g|j|p|q|y|R/.test(name);
  const nudge = hasDescenders
    ? "mb([0.4rem] md:[0.8rem])"
    : "mb([0.2rem] md:[0.3rem])";

  return (
    <Link
      to={path}
      class={`group grid grid-cols-3 gap-2 no-underline
        text-torch(light visited:(light))
        ${filledClass}
        ${className}`}
    >
      {typeof Img === "function"
        ? <Img />
        : <img src={Img.src} class="rounded-lg" />}
      <div class="pl(2 sm:3 lg:4) my-auto col-span-2">
        <div className="leading-none! mb(2 sm:2) duration-500 flex items-center
          text(xs sm:base md:lg md:base torch(ash group-hover:halo))">
          {written}
        </div>
        <El
          class={`mt-0 font-display leading-none duration-700
          text(4xl sm:5xl md:6xl group-hover:torch-plasma) 
          ${nudge}`}
        >
          {heading || name}
        </El>
        <p
          class={`my-0 duration-500
          text(left sm sm:lg md:xl torch-ash group-hover:torch-flame)
          inline-flex gap-x-2 leading-none flex-wrap`}
        >
          {tags.map((tag) => <span>{format(tag)}</span>)}
        </p>
      </div>
    </Link>
  );
}

PostTile.Set = function PostTileSet({
  class: className,
  headingLevel,
  posts,
  filled = false,
}: PostTile.SetProps) {
  return (
    <div className={`grid(& cols-1) gap(4) ${className}`}>
      {posts.map((post) => (
        <PostTile headingLevel={headingLevel} {...post} filled={filled} />
      ))}
    </div>
  );
};

export default PostTile;

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
        filled: "Whether to fill the background. Defaults to false.",
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
