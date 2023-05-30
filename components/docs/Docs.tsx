import { ComponentChildren, JSX } from "preact";
import { PropsDesc } from "./PropsDesc.tsx";
import { Examples } from "./Examples.tsx";

export type DocsProps<
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
    examples: JSX.Element | Array<[string | JSX.Element, JSX.Element]>;
  };

export function Docs<
  P extends Record<string, unknown>,
  E extends HTMLElement = HTMLElement,
>({ component, desc, examples, props, ...rest }: DocsProps<P, E>) {
  return (
    <section {...rest}>
      <h3>
        <code>{`<${component.name}>`}</code>
      </h3>

      <p>{desc}</p>

      <PropsDesc entries={props} />

      {Array.isArray(examples)
        ? <Examples entries={examples} />
        : <Examples children={examples} />}
    </section>
  );
}
