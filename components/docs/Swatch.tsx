import { JSX } from "preact/jsx-runtime";
import { Color, COLORS, isDark } from "../../data/colors.ts";
import { Docs } from "./Docs.tsx";

const NON_BREAKING_HYPHEN = "\u2011";

export function Swatch(
  { torch: color }: { torch: keyof typeof COLORS.torch },
) {
  const text = isDark(color) ? "light" : "soot";
  const border = color === "soot" ? "border border-torch-ash" : "";

  return (
    <>
      {" "}
      <a
        href="#color"
        class={`no-underline px-2 text-[0.9rem] rounded-xl whitespace-nowrap 
          font-bold bg-torch-${color} ${border}
          text-torch(${text} hover:${text} visited:(${text} hover:${text}))`}
      >
        torch{NON_BREAKING_HYPHEN}
        {color}
      </a>
      {" "}
    </>
  );
}

export function SwatchDocs(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <Docs
      component={Swatch}
      desc={
        <p>
          A rounded <code>{"<span>"}</code>{" "}
          with background color and text colo which displays a color name in a
          self-descriptive fashion using a non-breaking hyphen.
        </p>
      }
      props={{
        torch: "the name of the color to use",
      }}
      examples={
        <p class="pl-4 text-left leading-loose">
          {(Object.keys(COLORS.torch) as Color[])
            .map((color) => <Swatch torch={color} />)}
        </p>
      }
    />
  );
}
