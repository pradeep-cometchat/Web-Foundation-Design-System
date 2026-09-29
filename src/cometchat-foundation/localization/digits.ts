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
    "\\b\\d+(?:\\.\\d+)?(?:px|rem|em|vh|vw|%)\\b", // CSS length
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
