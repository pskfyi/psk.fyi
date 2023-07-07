import type { ComponentChildren, JSX } from "preact";

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

declare namespace Docs {
  export type Props<
    P extends Record<string, unknown>,
    E extends HTMLElement,
  > =
    & JSX.HTMLAttributes<HTMLElement>
    & {
      component: (props: P) => JSX.Element;
      desc: ComponentChildren;
      props: Record<
        Exclude<keyof P, keyof JSX.HTMLAttributes<E>>,
        string | JSX.Element
      >;
      examples: Array<[string | JSX.Element, JSX.Element]>;
    };
}

function Docs<
  P extends Record<string, unknown>,
  E extends HTMLElement = HTMLElement,
>({ component, desc, examples, props, ...rest }: Docs.Props<P, E>) {
  return (
    <section {...rest}>
      <h3>
        <code>{`<${component.name}>`}</code>
      </h3>

      <p>{desc}</p>

      <h4>Props</h4>

      <ul>
        {Object.entries(props).map(([name, desc]) => (
          <li>
            <code>{name}</code> - {desc}
          </li>
        ))}
      </ul>

      <h4>Examples</h4>

      <ul class="px-9 list-none">
        {examples.map(([example, rendered]) => (
          <li>
            {typeof example === "string" ? <code>{example}</code> : example}
            {rendered}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Docs;
