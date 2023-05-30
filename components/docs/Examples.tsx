import { ComponentChildren, JSX } from "preact";

export type ExamplesProps =
  | { children: ComponentChildren }
  | { entries: Array<[string | JSX.Element, JSX.Element]> };

export function Examples(props: ExamplesProps) {
  return (
    <>
      <h4>Examples</h4>

      {"children" in props ? props.children : (
        <ul class="px-9 list-none">
          {props.entries.map(([example, rendered]) => (
            <li>
              {typeof example === "string" ? <code>{example}</code> : example}
              {rendered}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
