#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import { basename } from "$std/path/mod.ts";
import { glob } from "https://deno.land/x/handy@0.4.0/fs/glob.ts";
import { DATA_DIR } from "./constants.ts";
import type { MediaType } from "./data/media.ts";

async function createIndexFile(mediaType: MediaType) {
  const dir = `${DATA_DIR}/${mediaType}`;
  const entities = await glob(`${dir}/*.tsx`);

  const isTV = mediaType === "tv";
  const isMusic = mediaType === "music";

  const filePath = `${DATA_DIR}/${mediaType}/index.ts`;
  const exportName = isTV
    ? "TV"
    : isMusic
    ? "ARTISTS"
    : mediaType.toUpperCase() + "S";

  const mediaService = isTV
    ? "TelevisionMediaService"
    : isMusic
    ? "MusicMediaService"
    : "MediaService";

  const mediaServiceFile = isTV ? "tv.ts" : isMusic ? "music.ts" : "media.ts";

  const fileText = `
// DO NOT EDIT. This file is automatically generated.
// This file SHOULD be checked into source version control.
// This file is automatically updated when running \`dev.ts\`.

import { ${mediaService} } from "../${mediaServiceFile}";
${
    entities
      .map((entity, i) => `import $${i} from "./${basename(entity)}";`)
      .join("\n")
  }

export const ${exportName} = new ${mediaService}({
${
    entities
      .map((entity, i) => `  "${basename(entity, ".tsx")}": $${i}`)
      .join(",\n")
  }
});
`.trimStart();

  await Deno.writeTextFile(filePath, fileText);
}

await createIndexFile("post");
await createIndexFile("book");
await createIndexFile("game");
await createIndexFile("film");
await createIndexFile("tv");
await createIndexFile("music");

await dev(import.meta.url, "./main.ts");
