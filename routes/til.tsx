import Link from "/components/Link.tsx";
import Page from "/components/Page.tsx";

export default () => (
  <Page tab="Today I Learned">
    <h2 class="text-2xl" id="2023-07-12">2023-07-12</h2>
    <ul>
      <li>
        Most people have <Link.Wiki to="Demodex" text="small arachnids" />{" "}
        throughout their skin{" "}
        <Link.Wiki to="Human_microbiome" text="microbiome" />. (Learned via{" "}
        <Link to="https://www.freethink.com/health/a-doctor-didnt-shower-for-5-years">
          Freethink
        </Link>)
      </li>
    </ul>
  </Page>
);
