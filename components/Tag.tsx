import Link from "/components/Link.tsx";
import { Color } from "/lib/colors.ts";
import { formatTag as format, pathForTag } from "/lib/tags.ts";

declare namespace Tag {
  export type Props = { for: string; class?: string; color?: Color };
  export type HeaderProps = Pick<Props, "for">;
  export type BlockProps = { tags: string[]; class?: string };
}

function Tag({ for: tag, class: className, color = "glow" }: Tag.Props) {
  const colorClass = color === "glow"
    ? "text-torch-glow"
    : `text-torch(${color} visited:${color})`;

  return (
    <Link
      class={`no-underline ${colorClass} ${className}`}
      to={pathForTag(tag)}
      text={format(tag)}
    />
  );
}

Tag.Header = function TagHeader({ for: tag }: Tag.HeaderProps) {
  return (
    <h2 class="group text-2xl" id={tag}>
      <Tag for={tag} />
    </h2>
  );
};

Tag.Block = function TagBlock({ tags, class: className }: Tag.BlockProps) {
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

export default Tag;
