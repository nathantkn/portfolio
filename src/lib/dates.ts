/**
 * Month-resolution date maths for the experience timeline. A "month index" is
 * `year * 12 + monthOrdinal`, which makes the Gantt arithmetic plain integers.
 */

const MONTHS: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

/** Gantt domain: Jan 2023 → Jan 2027, four even year columns. */
export const DOMAIN_START = 2023 * 12;
export const DOMAIN_END = 2027 * 12;
export const DOMAIN_SPAN = DOMAIN_END - DOMAIN_START;
export const DOMAIN_YEARS = [2023, 2024, 2025, 2026];

export function monthIndex(label: string): number | null {
  const m = String(label).trim().match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (!m) return null;
  const month = MONTHS[m[1].slice(0, 3).toLowerCase()];
  if (month === undefined) return null;
  return parseInt(m[2], 10) * 12 + month;
}

export interface MonthRange {
  /** Inclusive start month index. */
  start: number;
  /** Exclusive end month index. */
  end: number;
}

/**
 * Parses `"July 2025 - Present"` / `"June 2024 - Aug 2024"` into a half-open
 * month range. `nowIndex` stands in for "Present". The end month is always
 * inclusive of the month named, hence the `+ 1`.
 */
export function rangeOf(date: string, nowIndex: number): MonthRange {
  const [rawStart, rawEnd] = date.split('-').map((s) => s.trim());
  const start = monthIndex(rawStart);
  const end = /present/i.test(rawEnd || '')
    ? nowIndex
    : monthIndex(rawEnd || rawStart);

  return {
    start: start === null ? DOMAIN_START : start,
    end: (end === null ? nowIndex : end) + 1,
  };
}

/** `"2.5 yrs"` at a year or more, otherwise `"7 mos"`. */
export function durationLabel(months: number): string {
  return months >= 12
    ? `${Math.round((months / 12) * 10) / 10} years`
    : `${months} months`;
}

export function isCurrent(date: string): boolean {
  return /present/i.test(date);
}

export function currentMonthIndex(now: Date): number {
  return now.getFullYear() * 12 + now.getMonth();
}
