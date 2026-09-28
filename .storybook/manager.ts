import { addons } from "@storybook/manager-api";
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
