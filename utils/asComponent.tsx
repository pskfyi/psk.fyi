import { JSX } from "preact";

export function asComponent(
  stringLike: string | JSX.Element | (() => JSX.Element),
) {
  return typeof stringLike === "function"
    ? stringLike
    : typeof stringLike === "string"
    ? () => <>{stringLike}</>
    : () => stringLike;
}
