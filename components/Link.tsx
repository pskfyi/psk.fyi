import type { JSX } from "preact";

declare namespace Link {
  export type Props = Omit<JSX.HTMLAttributes<HTMLAnchorElement>, "href"> & {
    eternal?: boolean;
    /** An alternative to `children` */
    text?: string;
    /** An alternative to `href` */
    to: string;
  };
}

function Link({ to, text, children, ...props }: Link.Props) {
  !to.startsWith("/") && (props.target = "_blank");
  children ??= text ?? to;

  props.eternal && (props.class = `${props.class} 
      text-torch(flame hover:plasma visited:(flame hover:plasma))`);

  return <a {...props} href={to}>{children}</a>;
}

Link.Wiki = function WikiLink(props: Link.Props) {
  props.children ??= props.text;
  props.children ??= props.to
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/ \(.+\)/, ""); // Remove parenthetical disambiguations

  return <Link {...props} to={`https://en.wikipedia.org/wiki/${props.to}`} />;
};

Link.YT = function YouTubeLink(props: Link.Props) {
  return <Link {...props} to={`https://youtu.be/${props.to}`} />;
};

Link.DallE = () => (
  <Link to="https://openai.com/dall-e-2">
    DALL·E&nbsp;2
  </Link>
);

Link.Outpainting = () => (
  <Link to="https://openai.com/blog/dall-e-introducing-outpainting">
    outpainting
  </Link>
);

Link.DiffusionBee = () => (
  <Link to="https://diffusionbee.com/">
    DiffusionBee
  </Link>
);

Link.Openjourney = () => (
  <Link to="https://huggingface.co/prompthero/openjourney">
    Openjourney
  </Link>
);

export default Link;
