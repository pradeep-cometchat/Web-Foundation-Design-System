import { toArabic } from "./strings";

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
  return rtl ? (toArabic(english) ?? english) : english;
};
