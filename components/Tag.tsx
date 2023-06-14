import { formatTag as format, pathForTag } from "../data/tags.ts";
import { Link } from "./Link.tsx";

export declare namespace Tag {
  export type Props = { for: string; class?: string };
  export type BlockProps = { tags: string[]; class?: string };
}

export function Tag({ for: tag, class: className }: Tag.Props) {
  return (
    <Link
      class={`no-underline text-torch-glow ${className}`}
      to={pathForTag(tag)}
      text={format(tag)}
    />
  );
}

Tag.Block = function TagBlock(
  { tags, class: className }: Tag.BlockProps,
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
};
