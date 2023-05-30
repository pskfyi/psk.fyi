import { formatTag as format, pathForTag } from "../data/tags.ts";
import { Link } from "./Link.tsx";

export type TagProps = { for: string; class?: string };

export function Tag({ for: tag, class: className }: TagProps) {
  return (
    <Link
      class={`no-underline text-torch-glow ${className}`}
      to={pathForTag(tag)}
      text={format(tag)}
    />
  );
}

Tag.Header = function TagHeader({ for: tag }: TagProps) {
  return (
    <h2 class="group text-2xl" id={tag}>
      <Tag for={tag} />
    </h2>
  );
};

export type TagBlockProps = { tags: string[]; class?: string };

export function TagBlock(
  { tags, class: className }: TagBlockProps,
) {
  const finalPair = tags.slice(-2);
  tags = tags.slice(0, -2);

  return (
    <div
      class={`flex(& wrap) gap-2 justify-center leading-none ${className}`}
    >
      {tags.map((tag) => <Tag for={tag} />)}
      <div>
        <Tag for={finalPair[0]} />
        <Tag for={finalPair[1]} class="pl-2" />
      </div>
    </div>
  );
}

export type InlineTagsProps = { tags: string[]; class?: string };

export function InlineTags({ tags, class: className }: InlineTagsProps) {
  let first: string;
  let second: string;
  [first, second, ...tags] = tags;

  return (
    <span class={`inline-flex gap-2 leading-none ${className}`}>
      <span for={first}>{format(first)}</span>
      <span for={second} class="hidden sm:inline">{format(second)}</span>
      {tags.map((tag) => (
        <span for={tag} class="hidden lg:inline">{format(tag)}</span>
      ))}
    </span>
  );
}
