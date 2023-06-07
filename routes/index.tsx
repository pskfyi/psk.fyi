import Page from "../components/Page.tsx";
import { Skewer } from "../components/Skewer.tsx";
import { Link } from "../components/Link.tsx";

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

function ByLine() {
  return (
    <p
      class={`text(center xl sm:2xl) leading(none sm:none) my(6 sm:9 lg:10)`}
    >
      A blog by <Link eternal to="/about/me">Patrick Sean Keenan</Link>.
    </p>
  );
}

export default function Home() {
  return (
    <Page tab="Patrick Sean Keenan's blog" header={<Header />}>
      <img src="/sunset-beach.webp" />

      <ByLine />
    </Page>
  );
}
