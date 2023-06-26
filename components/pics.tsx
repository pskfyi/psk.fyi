import { ComponentChildren, JSX } from "preact";
import { DarkColor } from "../data/colors.ts";
import { Swatch } from "./docs/Swatch.tsx";
import { Docs } from "./docs/Docs.tsx";
import { Link } from "./Link.tsx";
import { MediaImg, MediaImgDef } from "../data/media.ts";

export type PicProps = {
  class?: string;
  imgClass?: string;
  src: string;
  desc?: ComponentChildren;
  hero?: boolean;
  color?: DarkColor;
  /** Force showing the overlay. Useful for debugging. */
  show?: boolean;
  width?: "full";
};

function InfoButton({ bg: overlay, id }: { bg: DarkColor; id: string }) {
  return (
    <label
      title="Click to show description"
      for={id}
      class={`absolute center cursor-pointer transition-all
      bottom-0 right-0 w-9 h-9 pt-1 pl-[2px]
      rounded-tl-lg bg-torch-${overlay}
      opacity(60 hover:80 
        peer-checked:(90 hover:100))
      text(3xl
        torch(ash hover:light active:glow 
          peer-checked:(halo hover:flame active:plasma)))`}
    >
      ⓘ
    </label>
  );
}

export function Pic(
  {
    src,
    class: className = "",
    imgClass = "",
    desc,
    hero,
    color = "soot",
    show = false,
    width,
  }: PicProps,
) {
  const id = src.replace(/\W+/g, "-").replace(/^-+/g, "");
  const widthClass = width === "full" ? "w-full" : "w-[fit-content]";
  const margin = hero ? "lg:(-ml-24 -mr-24) xl:(-ml-28 -mr-28)" : "";
  const cardWidth = hero ? "sm:mx-auto max-w(sm:md md:lg)" : "";
  const borderWidth = color === "soot" ? 0 : color === "smoke" ? 2 : 1;

  imgClass = color === "soot" ? `${imgClass}` : `m-px rounded-lg ${imgClass}`;

  return (
    <div
      class={`block relative mx-auto rounded-lg overflow-hidden
        ${widthClass} ${margin} ${className}`}
    >
      {desc && (
        <input type="checkbox" id={id} class="peer hidden" checked={show} />
      )}

      {desc && (
        <div
          class={`transition-opacity duration-700
          opacity(0 peer-checked:90) pointer-events(none peer-checked:all)`}
        >
          <div
            class={`absolute top-0 bottom-0 left-0 right-0 
              flex items-center justify-center`}
          >
            <div
              class={`rounded-lg h-[fit-content] mx-10 bg-torch-${color}
              p(2 sm:4) text(sm torch-light)
              ${cardWidth}`}
            >
              {desc}
            </div>
          </div>
        </div>
      )}

      <img
        src={src}
        class={imgClass}
      />

      <div
        class={`absolute inset-0
        rounded-lg pointer-events-none
        border-${borderWidth} border-torch-${color}`}
      >
      </div>

      {desc && <InfoButton bg={color} id={id} />}
    </div>
  );
}

export type ReviewPicProps = {
  img: string | MediaImg | (() => JSX.Element);
  class?: string;
};

/** Either just an img src, or a full PicProps */
Pic.Dynamic = function DynamicPic(
  { img: Img, class: className }: ReviewPicProps,
) {
  return typeof Img === "string"
    ? (
      <img
        src={Img}
        class={`border(& torch-smoke) rounded-lg mx-auto ${className}`}
      />
    )
    : typeof Img === "function"
    ? (
      <div class={className}>
        <Img />
      </div>
    )
    : <Pic {...Img} class={`${Img.class} ${className}`} />;
};

export type PromptedPicProps = Omit<PicProps, "desc"> & { prompt: string };

Pic.Prompted = function PromptedPic({ prompt, ...props }: PromptedPicProps) {
  return (
    <Pic
      {...props}
      desc={
        <>
          <p class="my-0 text-left sm:leading-[1.3rem]">
            Generated via <Link.Wiki to="Stable_Diffusion" /> using{" "}
            <Link.DiffusionBee />, the <Link.Openjourney spaced />
            model, and this prompt:
          </p>

          <blockquote class="my-2">{prompt}</blockquote>
        </>
      }
    />
  );
};

export function PicDocs(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <Docs
      component={Pic}
      desc={
        <p>
          A pure CSS widget that wraps an <code>{"<img>"}</code> and uses
          <Link spaced to="https://css-tricks.com/the-checkbox-hack/">
            the checkbox hack
          </Link>
          to toggle an overlay housing an image caption. This provides room for
          a longer-than-usual caption without cluttering the screen, and acts as
          a surprise-and-delight reward for UI exploration. It has a button in
          the bottom right with the info icon to toggle the checkbox, triggering
          the overlay and switching the button to an "on" state featuring{" "}
          <Swatch torch="plasma" />.
        </p>
      }
      props={{
        desc: "the image caption",
        hero: "toggles wider margins on larger viewports",
        color: (
          <>
            the color of the overlay and border. <code>DarkColor</code> only.
          </>
        ),
        show: "force showing the overlay. Useful for debugging.",
        imgClass: "extra classes to apply to the image element directly",
      }}
      examples={[[
        <code>{'<Pic src="/about/site.webp" color="soot" desc={...}>'}</code>,
        <Pic
          src="/about/site.webp"
          desc={
            <p class="my-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              elementum justo sit amet orci <a>vestibulum</a> fringilla. Mauris
              {" "}
              <em>iaculis</em>{" "}
              magna vel lectus cursus, sit amet accumsan ipsum tincidunt.
            </p>
          }
          color="soot"
        />,
      ]]}
      {...props}
    />
  );
}
