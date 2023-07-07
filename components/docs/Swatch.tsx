import { COLORS, isDark } from "/lib/colors.ts";

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
