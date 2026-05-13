import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/foundation/tokens/tokens.css";
import "./preview.css";
import { FoundationDocsPage } from "./DocsPage";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: "requiredFirst",
    },
    options: {
      storySort: {
        order: [
          "Foundation",
          [
            "Introduction",
            "Colors",
            "Typography",
            "Spacing",
            "Radius",
            "Icons",
            "Misc Icons",
            "Avatars",
            "Tooltip",
            "Effects",
            ["Shadows", "Focus Rings", "Backdrop Blur"],
          ],
          "Base Components",
          [
            "Introduction",
            "Action Sheet",
            "Button",
            "Avatar Group",
            "Change Scope",
            "Checkbox",
            "Confirm Dialog",
            "Context Menu",
            "Conversation Starter",
            "Conversation Summary",
            "Create Poll",
            "Date",
            "Dropdown",
            "Emoji Keyboard",
            "Error Boundary",
            "Flag Message Dialog",
            "Fullscreen Viewer",
            "Link Dialog",
            "Link Popover",
            "List Item",
            "Media Recorder",
            "Message Preview",
            "Popover",
            "Radio Button",
            "Reaction",
            "Reaction Info",
            "Reaction List",
            "Search Bar",
            "Smart Replies",
            "Thread View",
            "Toast",
            "Typing Indicator",
          ],
          "*",
        ],
      },
    },
    backgrounds: {
      default: "Surface",
      values: [
        { name: "Surface", value: "#ffffff" },
        { name: "Subtle", value: "#fafafa" },
        { name: "Dark", value: "#0a0d12" },
      ],
    },
    a11y: {
      element: "#storybook-root",
      config: {},
      options: {},
      manual: false,
    },
    docs: {
      toc: { headingSelector: "h2, h3" },
      page: FoundationDocsPage,
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: { Light: "light", Dark: "dark" },
      defaultTheme: "Light",
      attributeName: "data-theme",
    }),
    (Story) => (
      <div className="sb-foundation-root">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default preview;
