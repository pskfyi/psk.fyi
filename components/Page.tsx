import type { ComponentChildren, JSX } from "preact";
import type { SocialMediaPreview } from "../lib/social.ts";

import { Head } from "$fresh/runtime.ts";
import { COLORS } from "../lib/colors.ts";
import { Footer } from "./Footer.tsx";
import { Skewer } from "./Skewer.tsx";

export type PageProps = {
  /** The text that should appear on the browser tab.
   * @default `psk.fyi` */
  tab?: string;
  /** Override the builtin Skewer header with custom JSX. */
  header?: ComponentChildren;
  /** When using the default Skewer header, provide the text.
   * @default `psk.fyi` // or the value of the `tab` prop */
  heading?: string | JSX.Element;
  children: ComponentChildren;
  /** Toggles the margin at the bottom of the `<main>` */
  tight?: boolean;
  /** Configure a page's preview on social media. Designed for Discord. */
  preview?: SocialMediaPreview;
};

export default function Page(
  {
    tab = "psk.fyi",
    header,
    heading,
    children,
    tight,
    preview = {},
  }: PageProps,
) {
  heading ??= tab;
  preview.title ??= tab;
  preview.image ??= "/pk.png";

  return (
    <>
      <Head>
        <title>{tab}</title>
        <meta name="theme-color" content={COLORS.torch.soot} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://psk.fyi" />
        <meta property="og:site_name" content="psk.fyi" />
        <meta property="og:title" content={preview.title} />
        <meta
          property="og:image"
          itemProp="image primaryImageOfPage"
          content={preview.image}
        />
        {preview.large && (
          <meta name="twitter:card" content="summary_large_image" />
        )}
        {preview.description && (
          <meta property="og:description" content={preview.description} />
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,700&display=block"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oregano&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-%23?!.'&display=block"
          rel="stylesheet"
        />
      </Head>

      <main class={`content ${tight ? "" : "pb-16"}`}>
        {header ? header : <Skewer>{heading}</Skewer>}
        {children}
      </main>

      <Footer />
    </>
  );
}
