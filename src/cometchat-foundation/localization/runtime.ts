import { toArabic } from "./strings";

/**
 * For strings assembled at runtime — "6 Images · hello" is never a dictionary
 * key, so its parts are translated and then joined. Reads the direction off
 * the document because the callers are plain functions, not components.
 */
export const toArabicOr = (english: string): string => {
  const rtl =
    typeof document !== "undefined" &&
    document.documentElement.getAttribute("dir") === "rtl";
  return rtl ? (toArabic(english) ?? english) : english;
};
