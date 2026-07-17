import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../src/cometchat-foundation/tokens/cometchat-tokens.css";
import "./preview.css";
import { FoundationDocsPage } from "./DocsPage";
import { foundationTheme } from "./theme";

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
          "CometChat Foundation",
          [
            "Introduction",
            "Colors",
            "Typography",
            "Spacing",
            "Radius",
            "Icons",
            "Misc Icons",
            "Avatars",
            "Stickers",
            "Effects",
            ["Shadows", "Focus Rings", "Backdrop Blur"],
          ],
          "Base Components",
          [
            "Introduction",
            "Action Sheet",
            "Avatar Group",
            "Button",
            "Checkbox",
            "Context Menu",
            "Conversation Starter",
            "Conversation Summary",
            "Create Poll",
            "Date",
            "Emoji Keyboard",
            "Header",
            "Message Preview",
            "Radio Button",
            "Reaction",
            "Reaction Info",
            "Reaction List",
            "Search Bar",
            "Smart Replies",
            "Thread View",
            "Toast",
            "Tooltip",
            "Typing Indicator",
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
                "Flag Message Dialog",
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
            "Input",
            ["Input", "Textarea"],
            "List Item",
            ["Conversation Item", "Call Item", "User Item", "Group Item"],
            "Media Recorder",
          ],
          "Core Components",
          [
            "Introduction",
            "Conversation List",
            ["Users List"],
            "Chat Area",
            "Chat Bubbles",
            "Message Composer",
            [
              "Multi Line Composer",
              ["State", "Formatting", "Attachment", "Panel", "Action"],
              "Single Line Composer",
              ["State", "Formatting", "Attachment", "Panel", "Action"],
              "Multi Attachments",
              [
                "Attachment Cards",
                "In Composer",
                "In Search",
                "Sent & Received",
                "End to End",
                "Types",
              ],
            ],
          ],
          "CometChat Foundation",
          "Shell",
          "*",
        ],
      },
    },
    backgrounds: { disable: true },
    viewport: {
      viewports: {
        mobile360: {
          name: "Mobile (360 × 800)",
          styles: { width: "360px", height: "800px" },
          type: "mobile",
        },
        ...INITIAL_VIEWPORTS,
      },
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
      theme: foundationTheme,
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
