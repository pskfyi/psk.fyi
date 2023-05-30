import { Link } from "./Link.tsx";

export type ByLineProps = {
  class?: string;
  href: string;
  name: string;
  type: string;
};

export function ByLine({ class: className, href, name, type }: ByLineProps) {
  return (
    <p class={`text(center lg sm:xl) leading(none sm:none) ${className}`}>
      A {type} by <Link eternal to={href}>{name}</Link>.
    </p>
  );
}
