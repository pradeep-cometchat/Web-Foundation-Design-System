import { T } from "../../../cometchat-foundation/localization";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * **Main Actions — Save.** Saving messages in a conversation.
 */
const meta: Meta = {
  title: "Core Components/Main Actions/Save",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj;

/** Placeholder — states to be defined. */
export const Default: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div
      style={{
        padding: "var(--cometchat-spacing-6)",
        fontFamily: "var(--cometchat-font-family, Inter, sans-serif)",
        fontSize: 14,
        color: "var(--cometchat-text-color-secondary)",
      }}
    >
      <T>Save — stories coming soon.</T>
    </div>
  ),
};
