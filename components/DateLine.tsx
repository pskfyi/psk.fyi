import { type Day, month } from "/lib/date.ts";

function Divider() {
  return (
    <span class="relative px-2 bottom-[2px] text-[0.8rem] opacity-50">|</span>
  );
}

function hasDate(entry: [string, Day | undefined]): entry is [string, Day] {
  return typeof entry[1] === "string";
}

function tryMonth(date: Day) {
  try {
    return month(date);
  } catch {
    return date;
  }
}

declare namespace DateLine {
  export type Props = {
    dates: { [Label: string]: Day | undefined };
    format?: false | ((date: Day) => string);
  };
}

function DateLine({ dates, format = tryMonth }: DateLine.Props) {
  const entries = Object.entries(dates);
  const fn = format || ((date: Day) => date);

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

export default DateLine;
