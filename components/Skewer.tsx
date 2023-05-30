import { ComponentChildren, JSX } from "preact";
import { Docs } from "./docs/Docs.tsx";

const LONG_DESCENDERS_IN_OREGANO = /j|y/;
const DESCENDERS_IN_OREGANO = /g|p|q|R/;

function stringify(children: ComponentChildren): string {
  const str = typeof children === "string"
    ? children
    : Array.isArray(children)
    ? children.filter((child) => typeof child === "string").join("")
    : "";

  return str.replace(/\s+/g, "-");
}

export type SkewerProps =
  & JSX.HTMLAttributes<HTMLHeadingElement>
  & { hero?: boolean; top?: number | { xs: number; sm: number } };

export function Skewer(
  { children, class: className = "", hero, id, top = 50, ...props }:
    SkewerProps,
) {
  const stringified = stringify(children);

  const hasLongDescenders = LONG_DESCENDERS_IN_OREGANO.test(stringified);
  const hasDescenders = hasLongDescenders ||
    DESCENDERS_IN_OREGANO.test(stringified);
  const heroClasses = hero ? "mb-2 mt(1 sm:0) text(5xl sm:7xl)" : "";

  top = typeof top === "number" ? { xs: top, sm: top } : top;
  hasDescenders &&
    (top = hasLongDescenders
      ? { xs: top.xs + 2, sm: top.sm + 3 }
      : { xs: top.xs + 1, sm: top.sm + 2 });
  const nudge = hasDescenders
    ? hasLongDescenders ? "mb([0.125rem] sm:2)" : "mb([0.125rem] sm:[0.375rem])"
    : "pt-1";

  return (
    <h1
      {...props}
      id={id || stringified.toLowerCase()}
      class={`relative text-center ${heroClasses} ${className} 
        ${nudge}
        before::(absolute top-[${top.xs}%] sm:top-[${top.sm}%]
          content-[""] bg-torch-plasma h-[2px] w-full left-0)`}
    >
      <span class="bg-torch-soot relative px(3 sm:4) font-display leading-[1.3]">
        {children}
      </span>
    </h1>
  );
}

export function SkewerDocs(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <Docs
      component={Skewer}
      desc={
        <p>
          An <code>{"<h1>"}</code>{" "}
          with centered text flanked by horizontal lines. It also generates an
          {" "}
          <code>id</code> for easy linking.
        </p>
      }
      props={{
        hero: "reduces the width by half",
        top: "the skewer's percentage position from the top",
      }}
      examples={[
        ["<Skewer>", <Skewer class="py-0">Skewer</Skewer>],
        [
          <>
            <code>{"<Skewer>"}</code> with descenders
          </>,
          <Skewer class="py-0">pjygqR</Skewer>,
        ],
      ]}
      {...props}
    />
  );
}
