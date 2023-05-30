import { JSX } from "preact";
import { Tier, UnratedIndicator } from "./tiers.ts";
import { Day } from "../utils/date.ts";
import { Color } from "./colors.ts";
import { PicProps } from "../components/pics.tsx";

export type { Tier, UnratedIndicator };

export type Review = {
  img?:
    | string
    | (Omit<PicProps, "src"> & { src?: string; badgeBorder?: Color });
  reviewed: Day;
  modified?: Day;
  content: string | JSX.Element;
  rating: Tier;
  tags?: string[];
};
