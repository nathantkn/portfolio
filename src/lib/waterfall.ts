/**
 * The projects bento cascade: rows hold 1, then 2, 2, 3, 4 cards, and every
 * further row holds 4. Column span is `12 / cardsInRow`; the row index also
 * selects a size tier (heights / title sizes / tag counts live in CSS).
 *
 * Shared by the build-time render and the client-side filter re-flow so both
 * produce byte-identical geometry.
 */

export const PATTERN = [1, 2, 2, 3, 4] as const;

/** Highest tier index; rows beyond the pattern all reuse it. */
export const MAX_TIER = PATTERN.length - 1;

export interface Slot {
  tier: number;
  span: number;
}

export function waterfall(count: number): Slot[] {
  const slots: Slot[] = [];
  let i = 0;
  let row = 0;

  while (i < count) {
    const perRow = PATTERN[Math.min(row, MAX_TIER)];
    const take = Math.min(perRow, count - i);
    const span = Math.round(12 / take);
    const tier = Math.min(row, MAX_TIER);

    for (let k = 0; k < take; k++) slots.push({ tier, span });

    i += take;
    row++;
  }

  return slots;
}

/** Every distinct tag, in first-seen order. */
export function uniqueTags(projects: { tags: string[] }[]): string[] {
  const seen: string[] = [];
  for (const p of projects) {
    for (const t of p.tags) if (!seen.includes(t)) seen.push(t);
  }
  return seen;
}
