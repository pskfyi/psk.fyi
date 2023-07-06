import { film } from "../films.ts";

export default film(import.meta, {
  name: "Donnie Brasco",
  released: "1997-02-28",
  img: {},
  tags: ["mafia", "drama", "@Johnny Depp", "@Al Pacino"],
  reviewed: "2023-07-03",
  rating: "B",
  content: (
    <p>
      A lumpy and rickety pace keep this from being anything special. A small
      number of standout scenes command attention so I can't call this
      background noise, though aside from those moments that's exactly what it
      was.
    </p>
  ),
});
