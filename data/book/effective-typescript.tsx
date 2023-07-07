import { book } from "/data/books.ts";

export default book(import.meta, {
  name: "Effective TypeScript",
  author: "Dan Vanderkam",
  authorUrl: "https://www.danvk.org",
  published: "2020-01-01",
  reviewed: "2023-06-12",
  tags: ["O'Reilly", "reference", "typescript"],
  rating: "A",
  content: (
    <p>
      A strikingly comprehensive, quite broad overview of the TS landscape. with
      solid best practice recommendations and robust explanations. I'm too far
      along in my TypeScript journey for this to benefit me much, but I'm far
      enough along to assess the quality of the book. It's very good.
    </p>
  ),
});
