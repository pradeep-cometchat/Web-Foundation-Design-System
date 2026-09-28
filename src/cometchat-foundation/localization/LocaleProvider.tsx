import React from "react";

export type Direction = "ltr" | "rtl";
export type Language = "en" | "ar";

export interface Locale {
  direction: Direction;
  language: Language;
}

const LocaleContext = React.createContext<Locale>({
  direction: "ltr",
  language: "en",
});

export const useLocale = (): Locale => React.useContext(LocaleContext);
export const useDirection = (): Direction => useLocale().direction;
export const useLanguage = (): Language => useLocale().language;
export const useIsRTL = (): boolean => useDirection() === "rtl";

export interface LocaleProviderProps {
  direction: Direction;
  children: React.ReactNode;
}

/**
 * Publishes direction and language to the tree and mirrors them onto the DOM.
 *
 * `dir` goes on <html> rather than a wrapper div for two reasons: it is where
 * withThemeByDataAttribute already writes `data-theme`, so both globals sit at
 * the same scope; and it is the only target that reaches the docs-page chrome,
 * the iframe scrollbar edge, and fixed-position overlays.
 *
 * Language follows direction rather than being chosen separately: RTL is the
 * Arabic Storybook, LTR is the English one. That keeps a single toggle and
 * leaves the English rendering exactly as it was before any of this existed.
 */
export const LocaleProvider: React.FC<LocaleProviderProps> = ({
  direction,
  children,
}) => {
  const effective: Locale = {
    direction,
    language: direction === "rtl" ? "ar" : "en",
  };

  React.useEffect(() => {
    const root = document.documentElement;
    const prevDir = root.getAttribute("dir");
    const prevLang = root.getAttribute("lang");

    root.setAttribute("dir", effective.direction);
    root.setAttribute("lang", effective.language);

    return () => {
      if (prevDir === null) root.removeAttribute("dir");
      else root.setAttribute("dir", prevDir);
      if (prevLang === null) root.removeAttribute("lang");
      else root.setAttribute("lang", prevLang);
    };
  }, [effective.direction, effective.language]);

  return (
    <LocaleContext.Provider value={effective}>{children}</LocaleContext.Provider>
  );
};
