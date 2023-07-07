import { Link } from "/components/Link.tsx";
import { musicArtist } from "/lib/music.ts";

export default musicArtist(import.meta, {
  name: "Haim",
  img: {
    desc: (
      <>
        An edit of{" "}
        <Link
          to="http://www.sunqueendesigns.com/haim-greek-theater"
          text="this poster"
        />{" "}
        by Charlene Kaye.
      </>
    ),
  },
  releases: [
    {
      type: "album",
      name: "Days Are Gone",
      tags: ["indie pop", "indie rock"],
      released: "2013-09-27",
      reviewed: "2023-06-29",
      rating: "B",
      content: (
        <>
          <p>
            I found my way to Haim through{" "}
            <Link
              to="https://music.apple.com/us/curator/after-school-radio/1496846020"
              text="After School Radio"
            />, a music podcast by Blink 182's Mark Hoppus. In one of its first
            episodes, they featured <em>Don't Save Me</em>{" "}
            from this album and it stuck a chord with me. The album doesn't live
            up to that track's promise - for me, it's the only standout track,
            though honorable mention "The Wire" comes close. The biggest
            disappointment is the title track, which feels doubly bad.
          </p>

          <ul>
            <li>
              <Link.YT to="_dtIjyG9gTg" text="Don't Save Me" />{" "}
              – The bass hook is so ornate it grips me every listen, the
              skipping vocals starting with "take me back, ta-ta-take me back"
              hold my attention completely, and several lyric phrases rewarded
              subsequent experiences. I'll be returning to this song for years.
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "album",
      name: "Something to Tell You",
      tags: ["indie pop", "indie rock"],
      released: "2017-07-07",
      impression: "!",
    },
    {
      type: "album",
      name: "Women in Music Pt. III",
      tags: ["soft rock", "indie pop"],
      released: "2020-06-26",
      reviewed: "2023-06-27",
      rating: "A",
      content: (
        <>
          <p>
            I think most people will appreciate this more than me. It's on the
            fringes of my comfort zone. I'm just a tourist passing through for a
            few of the singles, but I can still appreciate that the album has
            accurately captured the LA mood it kicks off with.
          </p>

          <p>
            Almost every song has a notable moment, and none of them are worth
            skipping. "Man from the Magazine", "Hallelujah," and "Don't Wanna"
            linger more than most, but only the following three warranted
            multiple listens:
          </p>

          <ul>
            <li>
              <Link.YT to="J2O_xa8cems" text="The Steps" />{" "}
              – An amazing start with hook after hook, but it squanders that
              tremendous momentum after the first chorus, succumbing to dawdling
              repetition like every other song ever made. Still the start is so
              powerful I come back to this track very often. It's easily one of
              my most-listened-to songs of 2022.
            </li>
            <li>
              <Link.YT to="fC42iIHPuao" text="Now I'm In It" />{" "}
              – Perfect headphone music. Full-bodied lows and highs approach you
              with a rapid thrum that makes it hard to look away. Unlike{" "}
              <em>
                The Steps
              </em>, it picks up after the first chorus and re-hooks you, and
              before the last act an oasis of calm breaks the repetition.
            </li>
            <li>
              <Link.YT to="QSlSo9hDqEY" text="Leaning On You" />{" "}
              – I hear strong echoes of Fleetwood Mac's{" "}
              <em>Never Coming Back Again</em>, a personal favorite.
            </li>
          </ul>
        </>
      ),
    },
  ],
});
