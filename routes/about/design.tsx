import Page from "../../components/Page.tsx";
import { SkewerDocs } from "../../components/Skewer.tsx";
import { COLORS, isDark } from "../../data/colors.ts";
import { Swatch } from "../../components/docs/Swatch.tsx";
import { Link } from "../../components/Link.tsx";
import { Pic, PicDocs } from "../../components/Pic.tsx";
import { SocialMediaPreview } from "../../types.ts";

const preview: SocialMediaPreview = {
  description:
    "Color palette, typography, components, and the thought process behind them.",
  image: "/about/design.webp",
  large: true,
};

const ColorPalette = () => (
  <div className="grid grid-cols-2 gap-4 p-4">
    {Object.entries(COLORS.torch).map(([color, value]) => (
      <>
        <div
          className={`py-1 px-2 rounded
          flex justify-center items-center
          bg-torch-${color} ${
            ["smoke", "soot"].includes(color) ? "border border-torch-ash" : ""
          }`}
        >
          <code
            class={`bg-transparent
            text-torch-${isDark(color) ? "light" : "soot"}`}
          >
            torch-{color}
          </code>
        </div>
        <span class="self-center">{value}</span>
      </>
    ))}
  </div>
);

export default function DesignSystem() {
  return (
    <Page tab="Design System" preview={preview}>
      <Pic.Prompted
        color="smoke"
        src="/about/design.webp"
        prompt="mdjrny-v4 style, gorgeous (floral) and filigree patterns prominently featuring (orange)"
      />

      <p class="text-left mx-auto w-[fit-content] mt-6 italic">
        From what I've tasted of desire<br />
        I hold with those who favor fire
      </p>

      <hr />

      <div class="flex gap-2 justify-center sm:text-lg">
        <a href="#color">Color</a>
        <span class="opacity-50">|</span> <a href="#typography">Typography</a>
        {" "}
        <span class="opacity-50">|</span> <a href="#elements">Elements</a>{" "}
        <span class="opacity-50">|</span> <a href="#components">Components</a>
      </div>

      <h2 id="color">Color</h2>

      <p>
        This color palette is the basis for my new personal branding, based on
        orange because it has always been my favorite color. This implementation
        is designed to maximize use of{" "}
        <a
          href="https://developer.chrome.com/articles/high-definition-css-color-guide/"
          target="_blank"
        >
          new color spaces in CSS
        </a>. The capstone is <Swatch torch="plasma" /> which,{" "}
        <em>on a supporting display</em>, is the most vibrant neon orange that
        CSS can presently produce.
      </p>

      <p>
        I knew I wanted a dark theme as my default because it is my preference.
        It also lets the orange pop more. I took inspiration from the
        grayscale-with-orange-accent schemes common in many text editors, but I
        wanted something more harmonious than the sterile grays they often use.
        To support that, I added the very warm gray <Swatch torch="soot" />{" "}
        as my background color. All the other colors were developed as needs
        arose for them, and the naming scheme came later.
      </p>

      <ColorPalette />

      <h2 id="typography">Typography</h2>

      <p class="font-display text-xl">
        The display font{" "}
        <a href="https://fonts.google.com/specimen/Oregano" target="_blank">
          Oregano
        </a>{" "}
        is used for h1 and h2 elements. It was chosen for its horizontal
        compression and its resemblance to the font used in my standard logo,
        {" "}
        <a href="https://fonts.google.com/specimen/Engagement" target="_blank">
          Engagement
        </a>, but with drastically increased legibility. It does not have font
        weight variants, but we can fake it with{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow"
          target="_blank"
        >
          text shadow
        </a>{" "}
        like <span class="fake-font-bold">this bold weight</span> and{" "}
        <span className="fake-font-black">this black weight</span>.
        Additionally, iOS and Android will render the font with a{" "}
        <a
          href="https://fonts.google.com/knowledge/glossary/faux_fake_pseudo_synthesized"
          target="_blank"
        >
          synthesized
        </a>{" "}
        bold weight which stacks with the text shadows.
      </p>

      <p>
        The font{" "}
        <Link
          to="https://fonts.google.com/specimen/M+PLUS+Rounded+1c?preview.text=%E2%89%AB&preview.text_type=custom"
          text="M PLUS Rounded 1c"
        />{" "}
        is used exclusively for the <span class="font-display">≫</span>{" "}
        glyph within Oregano text, because Oregano doesn't support it.
        Character-level{" "}
        <Link
          to="https://developers.google.com/fonts/docs/getting_started#specifying_script_subsets"
          text="subsetting"
        />{" "}
        is used to retrieve only this character from the CDN, costing only about
        1kb total between the font file and style sheet. See this in action in
        {" "}
        <Link to="/post/tiers">this blog post</Link>'s title.
      </p>

      <p>
        The font{" "}
        <a href="https://fonts.google.com/specimen/Nunito+Sans" target="_blank">
          Nunito Sans
        </a>{" "}
        is used for everything else. We include <strong>bold</strong>,{" "}
        <em>italics</em>, and{" "}
        <strong>
          <em>bold italics</em>
        </strong>. The font was found via{" "}
        <a href="https://fontjoy.com/" target="_blank">fontjoy</a>{" "}
        which I have used for many years to create font pairings. This one was
        chosen for its straightfoward treatment of numbers and capitals, its
        ability to distinguish I/l/1 and O/0, and its ample width which aides in
        reading long form content and contrasts with the narrow display font.
      </p>

      <p>
        On mobile, paragraphs are justified and have hyphenation enabled to
        handle excessive ragging. Above that, paragraphs revert to normal except
        the base font size is increased to 1.125rem (18px) for leisurely
        reading.
      </p>

      <h2 id="elements">Elements</h2>

      <hr />

      <h1 class="font-display">Heading Level One</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        elementum justo sit amet orci <a>vestibulum</a> fringilla. Mauris{" "}
        <em>iaculis</em>{" "}
        magna vel lectus cursus, sit amet accumsan ipsum tincidunt.
      </p>

      <h2>Heading Level Two</h2>

      <p>
        Nullam <a href="#typography">rhoncus at ex ut</a>{" "}
        rutrum. Proin dapibus semper <code>foo bar baz</code>{" "}
        lectus, at imperdiet ipsum finibus nec. Curabitur faucibus vitae nunc in
        tristique. Integer nec elit vel dolor placerat feugiat.
      </p>

      <blockquote>
        Vestibulum tempus bibendum odio, scelerisque lobortis libero
        pellentesque non. Fusce nec fermentum ante.
      </blockquote>

      <p>
        Aliquam at ante ut metus <em>tempor tempus</em>. Praesent <b>purus</b>
        {" "}
        est, viverra sed consequat at, rutrum sed lorem. Pellentesque vel sapien
        ut arcu accumsan interdum. Proin tincidunt nisi venenatis magna
        vehicula, ut accumsan libero euismod. Vivamus ultrices augue consequat
        eros scelerisque, id vestibulum augue pretium. Fusce vulputate turpis id
        arcu volutpat convallis.
      </p>

      <h3>Heading Level Three</h3>

      <p>
        Maecenas egestas odio in fermentum lobortis. Sed sit amet purus
        efficitur, fermentum nibh in, vulputate quam. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur{" "}
        <a href="#typography">ridiculus</a> mus.
      </p>

      <ul>
        <li>Nullam rhoncus at ex ut rutrum.</li>
        <li>Proin dapibus semper lectus, at imperdiet ipsum finibus nec.</li>
        <li>
          Curabitur faucibus vitae nunc in tristique. Integer nec elit vel dolor
          placerat feugiat.
        </li>
      </ul>

      <p>
        Suspendisse venenatis arcu purus, in ullamcorper lectus pretium nec. Sed
        finibus semper dui. Morbi vitae elementum lacus. Donec lectus lorem,
        facilisis interdum ullamcorper vel, facilisis eu leo. Mauris nec nisl
        turpis. Donec feugiat semper libero, quis varius turpis pretium id.
      </p>

      <h4>Heading Level Four</h4>

      <p>
        Quisque quis arcu ac nunc laoreet tincidunt{" "}
        <a href="#typography">vehicula</a>{" "}
        ac ante. Maecenas ac aliquet neque, ut mollis est. Mauris varius sapien
        viverra risus efficitur faucibus.
      </p>

      <ol>
        <li>Nullam rhoncus at ex ut rutrum.</li>
        <li>Proin dapibus semper lectus, at imperdiet ipsum finibus nec.</li>
        <li>
          Curabitur faucibus vitae nunc in tristique. Integer nec elit vel dolor
          placerat feugiat.
        </li>
      </ol>

      <p>
        Etiam facilisis, eros id faucibus porta, quam massa tincidunt ex, sed
        condimentum magna nibh ac felis. Aenean posuere, urna non rhoncus
        sodales, leo augue tincidunt turpis, et tempus nulla metus eu metus.
        Cras quis egestas libero. Vivamus molestie et diam ut tincidunt.
      </p>

      <h5>Heading Level Five</h5>

      <p>
        Maecenas tincidunt orci sapien, quis posuere metus posuere vitae. Nullam
        posuere in nulla nec tincidunt. Etiam erat mauris, tincidunt eget nisl
        cursus, pulvinar vehicula velit.
      </p>

      <p>
        Lorem ipsum dolor sit amet,{" "}
        <a href="#typography">consectetur adipiscing</a>{" "}
        elit. Mauris elementum justo sit amet orci vestibulum fringilla. Mauris
        iaculis magna vel lectus cursus, sit amet accumsan ipsum tincidunt.
      </p>

      <hr />

      <h2 id="components">Components</h2>
      <SkewerDocs class="mt-16" />
      <PicDocs class="mt-16" />
    </Page>
  );
}
