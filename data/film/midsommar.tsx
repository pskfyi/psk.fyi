import { Link } from "../../components/Link.tsx";
import { film } from "../films.ts";

export default film(import.meta, {
  name: "Midsommar",
  img: {
    desc: (
      <p>
        Major <Link.Wiki to="Titania_(A_Midsummer_Night%27s_Dream)" /> vibes.
      </p>
    ),
  },
  rating: "S",
  released: "2019-07-03",
  reviewed: "2022-11-27",
  tags: [
    "folk horror",
    "religion",
    "psychedelic",
    "@Ari Aster",
    "@Florence Pugh",
  ],
  content: (
    <p>
      Enchanted and hypnotic. It somehow manages to be delirious and
      hallucinatory without being surreal, firmly grounded in a forgotten,
      ethereal corner of our reality. It also transmutes darkness into something
      joyous and self-actualizing. I believe I will never see anything like this
      ever again.
    </p>
  ),
});
