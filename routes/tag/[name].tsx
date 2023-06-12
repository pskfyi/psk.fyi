import Page from "../../components/Page.tsx";
import { formatTag } from "../../data/tags.ts";

export default function BlogPost({ params }: { params: { name: string } }) {
  const tag = params.name;

  return (
    <Page tab={formatTag(tag)}>
      <p>TBD</p>
    </Page>
  );
}
