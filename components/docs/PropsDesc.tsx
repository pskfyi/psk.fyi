import { JSX } from "preact";

export type PropDescProps = {
  entries: Record<string, string | JSX.Element>;
};

export function PropsDesc({ entries }: PropDescProps) {
  return (
    <>
      <h4>Props</h4>

      <ul>
        {Object.entries(entries).map(([name, desc]) => (
          <li>
            <code>{name}</code> - {desc}
          </li>
        ))}
      </ul>
    </>
  );
}
