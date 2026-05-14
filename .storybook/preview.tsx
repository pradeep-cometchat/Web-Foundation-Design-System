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
            "Checkbox",
            "Context Menu",
            "Conversation Starter",
            "Conversation Summary",
            "Create Poll",
            "Date",
            "Dialog",
            [
              "Confirmation Dialogs",
              [
                "Delete Conversation",
                "Block User",
                "Delete User",
                "Leave Group",
                "Delete And Exit",
                "Ban Member",
                "Kick Member",
                "Transfer Ownership",
              ],
              "Form Dialogs",
              [
                "Create Group",
                "Join Group",
                "Link Dialog",
              ],
              "Info Selection Dialogs",
              [
                "Message Info",
                "Add Members",
                "Transfer Ownership",
                "Change Scope",
                "Banned Alert",
                "Translate Alert",
              ],
            ],
            "Emoji Keyboard",
            "Flag Message Dialog",
            "Input",
            [
              "Input",
              "Textarea",
            ],
            "List Item",
            [
              "Conversation Item",
              "Call Item",
              "User Item",
              "Group Item",
            ],
            "Media Recorder",
            "Message Preview",
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
