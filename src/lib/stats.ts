/**
 * Splits a display stat like `700+`, `$30,000+` or `100%` into the numeric
 * target plus the affixes that must survive the count-up animation.
 */

export interface ParsedStat {
  /** `null` when the string has no countable number. */
  target: number | null;
  prefix: string;
  suffix: string;
}

export function parseStat(num: string): ParsedStat {
  const m = num.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!m) return { target: null, prefix: '', suffix: '' };
  return {
    target: parseInt(m[2].replace(/,/g, ''), 10),
    prefix: m[1],
    suffix: m[3],
  };
}
