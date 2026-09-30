import { toArabic } from "./strings";
import { toArabicDigits } from "./digits";

/**
 * For strings assembled at runtime — "6 Images · hello" is never a dictionary
 * key, so its parts are translated and then joined. Reads the direction off
 * the document because the callers are plain functions, not components.
 *
 * It only READS the attribute, so it does not re-render on its own. A
 * component that renders its output must subscribe with useDocumentDirection(),
 * or it keeps whatever the first render produced — English, if that render beat
 * LocaleProvider to setting `dir`.
 */
export const toArabicOr = (english: string): string => {
  const rtl =
    typeof document !== "undefined" &&
    document.documentElement.getAttribute("dir") === "rtl";
  return rtl ? toArabicDigits(toArabic(english) ?? english) : english;
};

/**
 * The direction-aware form of toArabicDigits, for the same callers: a plain
 * function has no language context, and converting unconditionally would put
 * Arabic numerals into the English rendering.
 */
export const localizeDigits = (s: string): string => {
  const rtl =
    typeof document !== "undefined" &&
    document.documentElement.getAttribute("dir") === "rtl";
  return rtl ? toArabicDigits(s) : s;
};

/**
 * The letter an avatar or an alphabet index shows for a name. Pass the name as
 * displayed — already translated — or an Arabic name gets an English initial.
 * Arabic names often open with the definite article "ال", which would give
 * every group ("التسويق", "الهندسة") the same initial, so it is skipped.
 */
export const initialOf = (displayed: string): string => {
  const s = displayed.trim();
  return (/^ال\S/.test(s) ? s.slice(2) : s).charAt(0);
};
