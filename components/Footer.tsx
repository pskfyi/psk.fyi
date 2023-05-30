import { Link } from "./Link.tsx";

export function Footer() {
  return (
    <footer class="py-3 bg-torch-smoke">
      <nav class="content items-center flex pl(3 sm:0)">
        <Link
          to="/"
          class={`inline-flex w-20 h-20 rounded-full center
            bg-torch-soot flex-shrink-0 font-display no-underline
            text(5xl torch(flame hover:plasma visited:(flame hover:plasma)))`}
          text="PK"
        />

        <div class="pl-4 sm:flex-grow
          sm:flex items-center justify-between
        ">
          <div className="flex text-xl relative top(2 sm:0) gap(x-4 y-2)">
            <a href="/about" class="no-underline">About</a>
            <a href="/posts" class="no-underline">Posts</a>
            <a href="/reviews" class="no-underline">Reviews</a>
          </div>

          <p class="sm:pr-1 flex-grow
            text(torch-ash left sm:right)
          ">
            ©2023 Patrick Sean Keenan
          </p>
        </div>
      </nav>
    </footer>
  );
}
