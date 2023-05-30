import { JSX } from "preact";
import Page from "../../components/Page.tsx";
import { Char } from "../../components/Char.tsx";

type RiverTileProps =
  & {
    class?: string;
    href: string;
    text: string;
    swap?: boolean;
  }
  & ({
    src: string;
    alt: string;
  } | {
    img: JSX.Element;
  });

function RiverTile(
  { href, text, class: className, swap, ...props }: RiverTileProps,
) {
  const Text = () => (
    <span class="center rounded-xl hover:bg-torch-smoke">
      {text}
    </span>
  );

  return (
    <a
      href={href}
      class={`no-underline font-display transition-all duration-300 gap-2
        grid(& cols-2) ${swap ? "my-2" : ""} ${className}
        text(4xl sm:6xl
          torch(light visited:light hover(flame visited:flame)))`}
    >
      {swap && <Text />}
      {"img" in props ? props.img : (
        <img
          src={props.src}
          alt={props.alt}
          class="object-cover ratio-square rounded-xl border(2 torch-smoke)"
        />
      )}
      {!swap && <Text />}
    </a>
  );
}

export default function About() {
  return (
    <Page tab="About..." tight>
      <RiverTile
        href="/about/me"
        src="/about/me.svg"
        alt="A photograph of myself which animates into AI-generated avatars
          derived from the photo."
        text="the Author"
      />

      <RiverTile
        swap
        href="/about/site"
        src="/about/site.webp"
        alt="An AI generated image that looks like a robot melded with a 
          circuit board."
        text="the Tech"
      />

      <RiverTile
        href="/about/design"
        src="/about/design.webp"
        alt="An AI generated image that looks like an orange flower from a 
          nightmare."
        text="the Design"
      />

      <RiverTile
        swap
        href="/about/tiers"
        text="the Ratings"
        class="mb-2 sm:mb-4"
        img={
          <div
            class="center bg-black border-2 border-torch-ash rounded-xl"
            style={{ aspectRatio: "1/1" }}
          >
            <Char.TierTile rating="F" class="w-24" />
          </div>
        }
      />
    </Page>
  );
}
