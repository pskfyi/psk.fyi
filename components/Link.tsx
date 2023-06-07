import { JSX } from "preact";

export type LinkProps = Omit<JSX.HTMLAttributes<HTMLAnchorElement>, "href"> & {
  eternal?: boolean;
  /** An alternative to `children` */
  text?: string;
  /** An alternative to `href` */
  to: string;
};

export function Link({ to, text, children, ...props }: LinkProps) {
  !to.startsWith("/") && (props.target = "_blank");

  props.eternal && (props.class = `${props.class} 
      text-torch(flame hover:plasma visited:(flame hover:plasma))`);

  return <a {...props} href={to}>{text ?? children}</a>;
}
