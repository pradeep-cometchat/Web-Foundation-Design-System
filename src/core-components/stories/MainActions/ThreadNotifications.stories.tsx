import type { Meta, StoryObj } from "@storybook/react";

/**
 * **Main Actions — Thread Notifications.** Notification behaviour for message
 * threads.
 */
const meta: Meta = {
  title: "Core Components/Main Actions/Thread Notifications",
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
      Thread Notifications — stories coming soon.
    </div>
  ),
};
