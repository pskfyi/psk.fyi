import { tryMonth } from "../utils/date.ts";

function Divider() {
  return (
    <span class="relative px-2 bottom-[2px] text-[0.8rem] opacity-50">|</span>
  );
}

function hasDate(
  entry: [string, string | undefined],
): entry is [string, string] {
  return typeof entry[1] === "string";
}

export declare namespace DateLine {
  export type Props = {
    dates: { [Label: string]: string | undefined };
    format?: false | ((date: string) => string);
  };
}

export function DateLine({ dates, format = tryMonth }: DateLine.Props) {
  const entries = Object.entries(dates);
  const fn = format || ((date: string) => date);

  return (
    <div className="w-[fit-content] mx-auto text-torch-ash my-2">
      {entries.filter(hasDate).map(([label, date], i) => (
        <>
          <span title={date} class="capitalize">{label} {fn(date)}</span>
          {i < entries.length - 1 && <Divider />}
        </>
      ))}
    </div>
  );
}
