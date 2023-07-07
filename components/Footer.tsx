import type { ComponentChildren } from "preact";

import Link from "/components/Link.tsx";

function PK() {
  return (
    <Link
      to="/"
      eternal
      class={`ratio-square w-full rounded-full center
        bg-torch-soot font-display no-underline`}
      style="container-type: size"
    >
      <span class="text-[65cqw]">PK</span>
    </Link>
  );
}

function FooterLink({
  to,
  children,
  center = false,
  halo = false,
  large = false,
  underline = false,
}: {
  to: string;
  children: ComponentChildren;
  center?: boolean;
  halo?: boolean;
  large?: boolean;
  underline?: boolean;
}) {
  const color = halo ? "halo" : "glow";
  const className = `block leading-none self-center
    ${center ? "text-center" : ""}
    ${underline ? "" : "no-underline"} 
    ${large ? "text-lg sm:text-xl" : "sm:text-lg"}
    text-torch(${color} hover:flame visited:(${color} hover:flame))`;

  return <Link to={to} class={className}>{children}</Link>;
}

export function Footer() {
  return (
    <footer class="bg-torch-smoke pb-10">
      <nav class="content pt-4">
        <div class="sm:w-[fit-content] pl(sm:4 md:0)
          grid(& cols-3)">
          <div class="relative gap-y-2 grid(& cols-1) pr(4 sm:0)">
            <div class="row-span-4 sm:w-32 sm:self-center sm:justify-self-center">
              <PK />
            </div>
            <FooterLink large halo center to="/about">About</FooterLink>
            <FooterLink large halo center to="/contact">Contact</FooterLink>

            <div class="absolute right([-1px] sm:-4) top-0 bottom-0 row-span-6 
              border-r(2 torch-warmth) my(2 sm:4)" />
          </div>

          <div class="relative gap-y-2 grid(& cols-1) pl(4 sm:12)">
            <FooterLink large halo underline to="/posts">Posts</FooterLink>
            <FooterLink to="/tag/tech">#tech</FooterLink>
            <FooterLink to="/tag/design">#design</FooterLink>
            <FooterLink to="/tag/philosophy">#philosophy</FooterLink>
            <FooterLink to="/tag/language">#language</FooterLink>
            <FooterLink to="/tag/arcana">#arcana</FooterLink>
          </div>

          <div class="relative gap-y-2 grid(& cols-1) pl(4 sm:10)">
            <FooterLink large halo underline to="/reviews">Reviews</FooterLink>
            <FooterLink to="/books">#book</FooterLink>
            <FooterLink to="/films">#film</FooterLink>
            <FooterLink to="/tv">#tv</FooterLink>
            <FooterLink to="/games">#game</FooterLink>
            <FooterLink to="/music">#music</FooterLink>
          </div>
        </div>
      </nav>
    </footer>
  );
}
