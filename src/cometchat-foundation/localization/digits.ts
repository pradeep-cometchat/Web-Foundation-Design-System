/**
 * Arabic-Indic numerals for the Arabic rendering.
 *
 * Applied to whatever T resolves, including strings that have no dictionary
 * entry — a timestamp like "00:00/00:32" is never a key, but its digits still
 * have to follow the language.
 *
 * Reference material keeps its Western digits, for the same reason it is not
 * translated: a hex colour, a CSS length, a token name, a URL or a Figma node
 * id is meant to be read and copied verbatim.
 */
const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";

const PROTECTED = new RegExp(
  [
    "`[^`]*`", // markdown code span
    "https?://\\S+", // URL
    "#[0-9a-fA-F]{3,8}\\b", // hex colour
    "rgba?\\([^)]*\\)", // rgb/rgba value
    "--[\\w-]+", // CSS custom property
    "\\b\\d{3,}:\\d{3,}\\b", // Figma node id (4090:846250)
    "\\b\\d+px/\\d+\\b", // type spec, size/weight (16px/500) — before CSS length, which would stop at "px"
    "\\b\\d+(?:\\.\\d+)?(?:px|rem|em|vh|vw|%)\\b", // CSS length
    "\\b\\d+x[sl]\\b", // size step (2xl, 2xs)
    "\\bf/\\d+(?:\\.\\d+)?", // f-number (f/1.8)
    // Ordered-list marker at a line start. Markdown only recognises ASCII
    // digits there, so "١." rendered as text rather than a list; the marker
    // is drawn in Arabic-Indic by list-style-type instead (preview.css).
    "(?<=^|\\n)[ \\t]*\\d+\\.(?= )",
    // Identifiers that carry digits: token names (spacing-1-5, radius-2xl,
    // neutral-400), utility names (px-12, pt-8), type-scale names (H4/Regular)
    // and file extensions (.mp3, .m4a). They name something to be looked up.
    "\\b[A-Za-z][A-Za-z0-9]*(?:-[A-Za-z0-9]+)*-[A-Za-z]*\\d[A-Za-z0-9-]*",
    "\\b[A-Z][a-z]*\\s?\\d+/[A-Za-z]+",
    "\\.[a-z]+\\d[a-z0-9]*\\b",
  ].join("|"),
  "g"
);

/** Western digits to Arabic-Indic, leaving reference material untouched. */
export const toArabicDigits = (s: string): string => {
  if (!/\d/.test(s)) return s;
  let out = "";
  let last = 0;
  for (const m of s.matchAll(PROTECTED)) {
    out += s.slice(last, m.index).replace(/\d/g, (d) => AR_DIGITS[+d]);
    out += m[0];
    last = m.index + m[0].length;
  }
  return out + s.slice(last).replace(/\d/g, (d) => AR_DIGITS[+d]);
};
