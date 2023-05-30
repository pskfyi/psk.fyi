import { dir } from "https://deno.land/x/handy@0.4.0/path/dir.ts";

export const ROOT_DIR = dir(import.meta);
export const DATA_DIR = `${ROOT_DIR}/data`;
