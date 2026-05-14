import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../components/Toast";

/**
 * A transient notification pill that appears briefly to confirm an action.
 * Dark background with white text, auto-dismisses after a set duration.
 *
 * **Structure (from Figma node 4090:837860):**
 * - Outer: radius 8px, drop-shadow (shadow-lg)
 * - Content: bg `#0a0d12` (static-black), radius-xs (4px), padding 8px
 * - Text: Caption 1/Regular — 12px, weight 400, line-height 18px, white, centered
 */
const meta: Meta<typeof Toast> = {
  title: "Base Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    message: { control: "text", description: "The message to display." },
    open: { control: "boolean", description: "Whether the toast is visible." },
    duration: { control: { type: "number", min: 0, step: 500 }, description: "Auto-dismiss duration in ms. 0 to disable." },
    onClose: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof Toast>;

/* ─── Stories ─── */

/** Default state — exact match to Figma node 4090:837860. */
export const Default: Story = {
  args: {
    message: "Message Copied",
    open: true,
    duration: 0,
  },
};

/** Message sent confirmation. */
export const MessageSent: Story = {
  args: {
    message: "Message Sent",
    open: true,
    duration: 0,
  },
};

/** Message deleted confirmation. */
export const MessageDeleted: Story = {
  args: {
    message: "Message Deleted",
    open: true,
    duration: 0,
  },
};

/** Link copied confirmation. */
export const LinkCopied: Story = {
  args: {
    message: "Link Copied",
    open: true,
    duration: 0,
  },
};

/** Longer message text. */
export const LongMessage: Story = {
  args: {
    message: "Your message has been forwarded successfully",
    open: true,
    duration: 0,
  },
};

/** All variants side by side. */
export const States: StoryObj = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", justifyContent: "center", alignItems: "center", padding: "var(--space-10)" }}>
      <Toast message="Message Copied" open={true} duration={0} />
      <Toast message="Message Sent" open={true} duration={0} />
      <Toast message="Message Deleted" open={true} duration={0} />
      <Toast message="Link Copied" open={true} duration={0} />
      <Toast message="Reaction Added" open={true} duration={0} />
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure. */
export const Playground: Story = {
  args: {
    message: "Message Copied",
    open: true,
    duration: 0,
  },
  parameters: { docs: { disable: true } },
};
