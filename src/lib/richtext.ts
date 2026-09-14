/**
 * Turns the `<strong>`-annotated content strings in `src/data/portfolio.ts`
 * into plain-text segments, so the emphasis styling is applied by a component
 * and the copy itself stays escaped (no `set:html`).
 */

export interface Segment {
  text: string;
  bold: boolean;
}

const STRONG = /<strong>(.*?)<\/strong>/g;

/** Decodes the handful of entities the source strings actually use. */
function decode(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export function parseRich(source: string): Segment[] {
  const segments: Segment[] = [];
  let last = 0;
  let match: RegExpExecArray | null;

  STRONG.lastIndex = 0;
  while ((match = STRONG.exec(source)) !== null) {
    if (match.index > last) {
      segments.push({ text: decode(source.slice(last, match.index)), bold: false });
    }
    segments.push({ text: decode(match[1]), bold: true });
    last = match.index + match[0].length;
  }
  if (last < source.length) {
    segments.push({ text: decode(source.slice(last)), bold: false });
  }

  return segments;
}
