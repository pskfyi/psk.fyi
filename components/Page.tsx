import type { ComponentChildren, JSX } from "preact";
import { Head } from "$fresh/runtime.ts";
import { COLORS } from "../data/colors.ts";
import { Skewer } from "./Skewer.tsx";
import { Footer } from "./Footer.tsx";
import { asComponent as Component } from "../utils/asComponent.tsx";

export type PageProps = {
  tab?: string | JSX.Element | (() => JSX.Element);
  previewTitle?: string;
  previewDescription?: string;
  previewImage?: string;
  largePreviewImage?: boolean;
  /** Override the builtin Skewer header with custom JSX. */
  header?: ComponentChildren;
  /** When using the default Skewer header, provide the text. */
  heading?: string | JSX.Element | (() => JSX.Element);
  children: ComponentChildren;
  /** Toggles the margin at the bottom of the `<main>` */
  tight?: boolean;
};

export default function Page(
  {
    tab,
    header,
    heading: Heading,
    children,
    tight,
    previewTitle,
    previewDescription,
    previewImage = "/pk.png",
    largePreviewImage,
  }: PageProps,
) {
  if (typeof tab !== "string") tab = "psk.fyi";
  Heading ??= tab;

  return (
    <>
      <Head>
        <title>{tab}</title>
        <meta name="theme-color" content={COLORS.torch.soot} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://psk.fyi" />
        <meta property="og:site_name" content="psk.fyi" />
        <meta property="og:title" content={previewTitle ?? tab} />
        <meta
          property="og:image"
          itemProp="image primaryImageOfPage"
          content={previewImage}
        />
        {largePreviewImage && (
          <meta name="twitter:card" content="summary_large_image" />
        )}
        {previewDescription && (
          <meta property="og:description" content={previewDescription} />
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
        {header ? header : (
          <Skewer as="h1">
            {typeof Heading === "function" ? <Heading /> : Heading}
          </Skewer>
        )}
        {children}
      </main>

      <Footer />
    </>
  );
}
