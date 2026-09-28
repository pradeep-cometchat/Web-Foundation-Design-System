import React from "react";
import { addons, types, useGlobals } from "@storybook/manager-api";
import { IconButton, WithTooltip, TooltipLinkList } from "@storybook/components";
import { foundationTheme } from "./theme";

addons.setConfig({
  theme: foundationTheme,
  sidebar: {
    showRoots: true,
  },
});

// Inject Inter font override for code blocks AFTER Storybook's own styles load.
// "Noto Sans Arabic" follows Inter so only Arabic codepoints reach it — Latin
// rendering in the manager is unchanged.
const style = document.createElement("style");
style.textContent = `
  *, *::before, *::after {
    font-family: Inter, "Noto Sans Arabic", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  }
  .icon-outlined, .icon-rounded, .icon-sharp,
  [class*="Material Symbols"] {
    font-family: inherit !important;
  }
`;
document.head.appendChild(style);

const LANGUAGES = [
  { value: "en", title: "English" },
  { value: "ar", title: "العربية" },
];

/**
 * Language picker.
 *
 * Storybook's built-in `globalTypes.toolbar` entries are always visible, so this
 * one is registered by hand: content language only means something once the
 * canvas is mirrored, and offering it in LTR would imply the English Storybook
 * can be switched, which it deliberately cannot.
 */
const LanguageToolbar: React.FC = () => {
  const [globals, updateGlobals] = useGlobals();

  if (globals.direction !== "rtl") return null;

  const active = globals.language === "ar" ? "ar" : "en";
  const activeTitle = LANGUAGES.find((l) => l.value === active)?.title;

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      closeOnOutsideClick
      tooltip={({ onHide }) => (
        <TooltipLinkList
          links={LANGUAGES.map((l) => ({
            id: l.value,
            title: l.title,
            active: active === l.value,
            onClick: () => {
              updateGlobals({ language: l.value });
              onHide();
            },
          }))}
        />
      )}
    >
      <IconButton key="language" title="Content language">
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.9 8ZM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96ZM4.26 14a7.82 7.82 0 0 1 0-4h3.38a16.5 16.5 0 0 0 0 4H4.26Zm.84 2h2.95c.32 1.25.79 2.45 1.38 3.56A7.99 7.99 0 0 1 5.1 16Zm2.95-8H5.1a7.99 7.99 0 0 1 4.33-3.56A15.7 15.7 0 0 0 8.05 8ZM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96ZM14.34 14H9.66a14.7 14.7 0 0 1 0-4h4.68a14.7 14.7 0 0 1 0 4Zm.23 5.56c.59-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM16.36 14a16.5 16.5 0 0 0 0-4h3.38a7.82 7.82 0 0 1 0 4h-3.38Z" />
          </svg>
          {activeTitle}
        </span>
      </IconButton>
    </WithTooltip>
  );
};

addons.register("cometchat/language", () => {
  addons.add("cometchat/language", {
    type: types.TOOL,
    title: "Language",
    // Sits next to the Direction toggle, which addon-toolbars renders.
    match: ({ viewMode }) => viewMode === "story" || viewMode === "docs",
    render: () => <LanguageToolbar />,
  });
});
