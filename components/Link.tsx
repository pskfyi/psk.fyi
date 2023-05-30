import { JSX } from "preact";

export type LinkProps = Omit<JSX.HTMLAttributes<HTMLAnchorElement>, "href"> & {
  eternal?: boolean;
  /** Add spaces before and after the link */
  spaced?: boolean;
  /** An alternative to `children` */
  text?: string;
  /** An alternative to `href` */
  to: string;
};

export function Link({ to, text, children, ...props }: LinkProps) {
  !to.startsWith("/") && (props.target = "_blank");

  props.eternal && (props.class = `${props.class} 
      text-torch(flame hover:plasma visited:(flame hover:plasma))`);

  return props.spaced
    ? (
      <>
        {" "}
        <a {...props} href={to}>{text ?? children}</a>
        {" "}
      </>
    )
    : <a {...props} href={to}>{text ?? children}</a>;
}

Link.Wiki = function WikiLink(props: LinkProps) {
  props.children ??= props.text;
  props.children ??= props.to
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/ \(.+\)/, ""); // Remove parenthetical disambiguations

  return <Link {...props} to={`https://en.wikipedia.org/wiki/${props.to}`} />;
};

Link.YT = function YouTubeLink(props: LinkProps) {
  return <Link {...props} to={`https://youtu.be/${props.to}`} />;
};

Link.Tag = function TagLink(props: LinkProps) {
  return <Link {...props} to={`/tag/${props.to}`} />;
};

export const DALL_E: LinkProps = {
  children: <>DALL·E&nbsp;2</>,
  to: "https://openai.com/dall-e-2",
};

export const OUTPAINTING: LinkProps = {
  children: "outpainting",
  to: "https://openai.com/blog/dall-e-introducing-outpainting",
};

export const STABLE_DIFFUSION: LinkProps = {
  children: "Stable Diffusion",
  to: "https://en.wikipedia.org/wiki/Stable_Diffusion",
};

export const DIFFUSION_BEE: LinkProps = {
  children: "DiffusionBee",
  to: "https://diffusionbee.com/",
};

export const OPENJOURNEY: LinkProps = {
  children: "Openjourney",
  to: "https://huggingface.co/prompthero/openjourney",
};

type Props = Pick<LinkProps, "spaced">;

Link.DallE = ({ spaced }: Props) => <Link spaced={spaced} {...DALL_E} />;
Link.Outpainting = ({ spaced }: Props) => (
  <Link spaced={spaced} {...OUTPAINTING} />
);
Link.DiffusionBee = ({ spaced }: Props) => (
  <Link spaced={spaced} {...DIFFUSION_BEE} />
);
Link.Openjourney = ({ spaced }: Props) => (
  <Link spaced={spaced} {...OPENJOURNEY} />
);
