import Page from "../components/Page.tsx";
import { Skewer } from "../components/Skewer.tsx";
import { Link } from "../components/Link.tsx";
import { Pic } from "../components/Pic.tsx";
import { SocialMediaPreview } from "../types.ts";

const preview: SocialMediaPreview = {
  title: "psk.fyi",
  description: "A blog by Patrick Sean Keenan",
  image: "/sunset-beach.webp",
  large: true,
};

function Header() {
  return (
    <Skewer
      top={{ xs: 50, sm: 55 }}
      class="mb-2 mt(1 sm:0) text(5xl sm:7xl) pb(2 sm:2)"
    >
      psk<span class="text-sm">{" "}</span>.fyi
    </Skewer>
  );
}

function HeroImage() {
  return (
    <Pic
      src="/sunset-beach.webp"
      class="lg:(-ml-24 -mr-24) xl:(-ml-28 -mr-28)"
      cardClass="sm:mx-auto max-w(sm:md md:lg)"
      desc={
        <>
          <p class="my-0">
            Created via <Link.DallE /> with prompt:
          </p>
          <blockquote class="my-2">
            vibrant illustration of an orange sunset over the pacific ocean from
            a brown beach, young boy standing in the sand staring outwards with
            his back to us, digital art
          </blockquote>
          <p class="my-0">
            Extended via <Link.Outpainting />.
          </p>
        </>
      }
      color="soot"
    />
  );
}

function ByLine() {
  return (
    <p
      class={`text(center xl sm:2xl) leading(none sm:none) my(6 sm:9 lg:10)`}
    >
      A blog by <Link eternal to="/about/me">Patrick Sean Keenan</Link>.
    </p>
  );
}

export default () => (
  <Page
    tab="Patrick Sean Keenan's blog"
    header={<Header />}
    preview={preview}
  >
    <HeroImage />
    <ByLine />
  </Page>
);
