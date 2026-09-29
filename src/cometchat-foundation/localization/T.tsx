import React from "react";
import { useLanguage } from "./LocaleProvider";
import { toArabic } from "./strings";
import { toArabicDigits } from "./digits";

export interface TProps {
  children: React.ReactNode;
  /** Arabic for this string, when it is not in the shared dictionary. */
  ar?: string;
}

/**
 * Renders a string in the active language.
 *
 * English passes straight through. Arabic resolves from the `ar` prop, falling
 * back to the shared dictionary, falling back to the English itself — so an
 * untranslated string degrades quietly instead of rendering blank.
 */
export const T: React.FC<TProps> = ({ children, ar }) => {
  const language = useLanguage();

  if (language !== "ar" || typeof children !== "string") return <>{children}</>;

  return <>{toArabicDigits(ar ?? toArabic(children) ?? children)}</>;
};

/** The string form, for places that need text rather than an element. */
export const useT = (): ((english: string, ar?: string) => string) => {
  const language = useLanguage();
  return React.useCallback(
    (english: string, ar?: string) =>
      language === "ar"
        ? toArabicDigits(ar ?? toArabic(english) ?? english)
        : english,
    [language]
  );
};
