import { dir } from "handy/path/dir.ts";

export const ROOT_DIR = dir(import.meta);
export const DATA_DIR = `${ROOT_DIR}/data`;
