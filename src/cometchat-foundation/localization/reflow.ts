/**
 * Restores the line structure of a markdown translation stored on one line.
 *
 * Many descriptions were keyed from their JSDoc squashed onto a single line,
 * so the Arabic values carry no line breaks. Rendered as markdown, lists run
 * together as prose, paragraphs merge, and a table shows its raw pipes.
 *
 * Markdown tokens survive translation one for one — "**", "- ", "|", "###",
 * "1. " — so each English line break is placed before the same-numbered token
 * in the Arabic. A token kind whose count differs between the two is skipped
 * rather than guessed at: those breaks stay merged, as they were.
 */

type Kind = "heading" | "pipe" | "dash" | "ol" | "bold" | "para";

// How each kind is counted in flattened text. dash/ol include the space in
// front, which is exactly the space a line break replaces.
const EN: Record<Kind, RegExp> = {
  heading: /#{1,6} /g,
  pipe: /\|/g,
  dash: /(?:^| )- /g,
  ol: /(?:^| )\d+\. /g,
  bold: /\*\*/g,
  para: /[.!?:](?= )/g,
};
const AR: Record<Kind, RegExp> = { ...EN, para: /[.!?؟:](?= )/g };

const kindOf = (line: string): Exclude<Kind, "para"> | null =>
  /^#{1,6} /.test(line) ? "heading"
  : line.startsWith("|") ? "pipe"
  : line.startsWith("- ") ? "dash"
  : /^\d+\. /.test(line) ? "ol"
  : line.startsWith("**") ? "bold"
  : null;

const count = (re: RegExp, s: string) => (s.match(re) ?? []).length;

export const reflowLike = (english: string, flat: string): string => {
  if (!english.includes("\n") || flat.includes("\n")) return flat;

  // Flatten the English the way the dictionary key was, noting for every line
  // break which token starts the next line and how many of that token precede it.
  const cuts: { kind: Kind; ordinal: number; sep: string }[] = [];
  let e = "";
  let blank = false;
  for (const raw of english.split("\n")) {
    const line = raw.trim();
    if (!line) { blank = true; continue; }
    if (e) {
      // The indent carries nesting: "  - " is a sub-item, "- " is not.
      const sep = (blank ? "\n\n" : "\n") + /^[ \t]*/.exec(raw)![0];
      const kind = kindOf(line) ?? (blank ? "para" : null);
      // A paragraph is found by counting sentences, so it is only safe when the
      // line before really ended one.
      if (kind === "para") {
        if (/[.!?:]$/.test(e)) cuts.push({ kind, ordinal: count(EN.para, e + " ") - 1, sep });
      }
      else if (kind) cuts.push({ kind, ordinal: count(EN[kind], e), sep });
      e += " ";
    }
    e += line;
    blank = false;
  }

  const trusted = new Set(
    (Object.keys(EN) as Kind[]).filter((k) => count(EN[k], e) === count(AR[k], flat))
  );

  // Where each cut lands in the Arabic: the space in front of the token (or,
  // for a paragraph, the space after the sentence that closes the previous one).
  const at: { index: number; sep: string }[] = [];
  for (const c of cuts) {
    if (!trusted.has(c.kind) || c.ordinal < 0) continue;
    const m = [...flat.matchAll(AR[c.kind])][c.ordinal];
    if (!m || m.index === undefined) continue;
    let i = c.kind === "para" ? m.index + m[0].length : m.index;
    if (c.kind === "dash" || c.kind === "ol") i = flat[i] === " " ? i : i - 1;
    else if (c.kind !== "para") i -= 1;
    if (flat[i] === " ") at.push({ index: i, sep: c.sep });
  }

  let out = flat;
  for (const { index, sep } of at.sort((a, b) => b.index - a.index)) {
    out = out.slice(0, index) + sep + out.slice(index + 1);
  }
  return out;
};
