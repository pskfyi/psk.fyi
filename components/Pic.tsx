import type { ComponentChildren, JSX } from "preact";
import type { MediaImg } from "../data/media.ts";
import type { DarkColor } from "../lib/colors.ts";

import { Link } from "./Link.tsx";
import { Docs } from "./docs/Docs.tsx";
import { Swatch } from "./docs/Swatch.tsx";

export declare namespace Pic {
  export type Props = {
    class?: string;
    cardClass?: string;
    imgClass?: string;
    src: string;
    desc?: ComponentChildren;
    color?: DarkColor;
    /** Force showing the overlay. Useful for debugging. */
    show?: boolean;
    width?: "full";
  };

  export type PromptedProps = Pic.Props & { prompt: string };

  export type DynamicProps = {
    img: string | MediaImg | (() => JSX.Element);
    class?: string;
  };
}

function InfoButton({ bg: overlay, id }: { bg: DarkColor; id: string }) {
  return (
    <label
      title="Click to show description"
      for={id}
      class={`absolute center cursor-pointer transition-all select-none
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
    cardClass = "",
    imgClass = "",
    desc,
    color = "soot",
    show = false,
    width,
  }: Pic.Props,
) {
  const id = src.replace(/\W+/g, "-").replace(/^-+/g, "");
  const widthClass = width === "full" ? "w-full" : "w-[fit-content]";
  const borderWidth = color === "soot" ? 0 : color === "smoke" ? 2 : 1;

  imgClass = color === "soot" ? `${imgClass}` : `m-px rounded-lg ${imgClass}`;

  return (
    <div
      class={`block relative mx-auto rounded-lg overflow-hidden
        ${widthClass} ${className}`}
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
              ${cardClass}`}
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

/** Either just an img src, or a full PicProps */
Pic.Dynamic = function DynamicPic(
  { img: Img, class: className }: Pic.DynamicProps,
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
    : typeof Img.prompt === "string"
    ? (
      <Pic.Prompted
        {...(Img as Pic.PromptedProps)}
        class={`${Img.class} ${className}`}
      />
    )
    : <Pic {...Img} class={`${Img.class} ${className}`} />;
};

Pic.Prompted = function PromptedPic({ prompt, ...props }: Pic.PromptedProps) {
  return (
    <Pic
      {...props}
      desc={
        <>
          <p class="my-0 text-left sm:leading-[1.3rem]">
            Generated via <Link.Wiki to="Stable_Diffusion" /> using{" "}
            <Link.DiffusionBee />, the <Link.Openjourney />{" "}
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
          A pure CSS widget that wraps an <code>{"<img>"}</code> and uses{" "}
          <Link to="https://css-tricks.com/the-checkbox-hack/">
            the checkbox hack
          </Link>{" "}
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
        color: (
          <>
            the color of the overlay and border. <code>DarkColor</code> only.
          </>
        ),
        show: "force showing the overlay. Useful for debugging.",
        imgClass: "extra classes to apply to the image element directly",
        cardClass: "extra classes to apply to the overlay card",
      }}
      examples={[[
        <code>
          {'<Pic src="/about/design.webp" color="smoke" desc={...}>'}
        </code>,
        <Pic
          src="/about/design.webp"
          desc={
            <p class="my-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              elementum justo sit amet orci <a>vestibulum</a> fringilla. Mauris
              {" "}
              <em>iaculis</em>{" "}
              magna vel lectus cursus, sit amet accumsan ipsum tincidunt.
            </p>
          }
          color="smoke"
        />,
      ]]}
      {...props}
    />
  );
}
