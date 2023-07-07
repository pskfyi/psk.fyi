import type { Options } from "$fresh/plugins/twind.ts";

import { apply } from "twind";
import { content } from "twind/content";
import { css } from "twind/css";
import { COLORS } from "/lib/colors.ts";

// extracted from preflight object
const fontFamily =
  `'Nunito Sans',ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`;

export default {
  selfURL: import.meta.url,
  plugins: {
    content,
    "double-underline": {
      textDecoration: "underline double",
      textDecorationThickness: "from-font",
    },
    hyphens: { hyphens: "auto", "-webkit-hyphens": "auto" },
    "hyphens-none": { hyphens: "none", "-webkit-hyphens": "none" },
  },
  theme: {
    extend: {
      colors: COLORS,
      fontFamily: {
        display: "Oregano, 'M PLUS Rounded 1c', cursive;",
        sans: fontFamily,
      },
    },
  },
  variants: {
    "peer-checked": ".peer:checked ~ &",
    target: "&:target",
    "group-target": ".group:target &",
  },
  preflight: ({
    "h1,h2,h3,h4,h5,h6": _headings,
    "hr": _hr,
    "ol,ul": _lists,
    "body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul":
      __,
    "fieldset,ol,ul,legend": __lists,
    ...preflight
  }) =>
    css`
    ${preflight}

    html {
      scroll-behavior: smooth;
      ${apply`bg-torch-soot text(torch-light sm:lg) leading-normal 
              font-[${fontFamily}]`}
    }
    body {
      ${apply`m-0`}
    }
    main {
      min-height: calc(100vh - 6.5rem);
    }

    @media (max-width: 640px) {
      p {
        hyphens: auto;
      }
    }
    @media (min-width: 40ch) {
      p {
        text-align: justify;
      }
    }
    @media (min-width: 640px) {
      p {
        text-align: left;
      }
    }

    p, li {
      ${apply`my-3 sm:leading-[1.6rem]`}
    }
    h1 {
      margin-block-start: 0;
      margin-block-end: 0;
      ${apply`font-bold text([2.5rem] sm:6xl)`}
    }
    h2 {
      ${apply`font-bold mt-8 mb-3 text(3xl sm:4xl)`}
    }
    h3 {
      ${apply`font-bold mt-8 mb-4 text(2xl sm:3xl)`}
    }
    h4 {
      ${apply`font-bold mt-8 mb-4 text(xl sm:2xl)`}
    }
    h5 {
      ${apply`font-bold mt-8 mb-4 text(lg sm:xl)`}
    }
    a {
      ${apply`underline transition-colors duration-500
              text-torch(halo hover:flame
                visited:(glow hover:halo))`}
    }
    code {
      ${apply`text-torch-ash rounded p-px`}
    }
    hr {
      ${apply`border-t border-torch-ash w-2/3 my-8`}
    }
    blockquote {
      ${apply`mx-2 px-2 border(l-2 torch-plasma)`}
    }
    ul {
      margin-block-start: 0;
      margin-block-end: 0;
      ${apply`list(disc outside) pl-6`}
    }
    ol {
      margin-block-start: 0;
      margin-block-end: 0;
      ${apply`list(decimal outside) pl-6`}
    }

    .content {
      ${apply`mx-auto px(4 sm:0) max-w([60ch] md:[65ch])`}
    }
    .center {
      ${apply`flex items-center justify-center`}
    }
    .font-display.font-bold, .fake-font-bold, .font-display strong {
      text-shadow: 0.5px 0 0 currentColor, -0.5px 0 0 currentColor;
    }
    .font-display.font-black, .fake-font-black {
      text-shadow: 0.5px 0 0 currentColor, 1px 0 0 currentColor, -0.5px 0 0 currentColor;
    }

    /* HOT FIXES - these should be fixed after Fresh updates twind */
    .ratio-square {
      aspect-ratio: 1/1;
    }
    `,
} as Options;
