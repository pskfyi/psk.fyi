export type Day = `${number}-${number}-${number}`;

export function full(day: string): string {
  const [yyyy, mm, dd] = day.split("-").map(Number);

  if (month === undefined) throw new Error(`Invalid day: ${day}`);

  return new Date(yyyy, mm - 1, dd)
    .toLocaleString("default", {
      month: "long",
      year: "numeric",
      day: "numeric",
    });
}

export function month(day: Day): string {
  const [yyyy, month] = day.split("-", 2).map(Number);

  if (month === undefined) throw new Error(`Invalid day: ${day}`);

  return new Date(yyyy, month - 1)
    .toLocaleString("default", { month: "short", year: "numeric" });
}

export function year(day: Day): string {
  const [yyyy] = day.split("-", 1);

  return yyyy;
}
