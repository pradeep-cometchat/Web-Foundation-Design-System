import type { Meta, StoryObj } from "@storybook/react";
import { MessagePreview } from "../components/MessagePreview";

/**
 * A compact message representation shown inside the message composer when replying to,
 * editing, or referencing a deleted message. Displays the sender name, a truncated
 * message preview, a colored left border, and an optional close/dismiss button.
 *
 * **Structure (from Figma — Reply Message Composer):**
 * - Container: full width, `--color-neutral-100` bg, `--radius-xs` (4px)
 * - Left border: 4px wide, `--color-ep-600` (reply/deleted) or `--color-info` (edit)
 * - Sender: 12px, weight 500, colored to match border
 * - Message text: 12px, weight 400, `--color-neutral-500`, single line truncated
 * - Close button: 20px, top-right, `--color-neutral-500`
 *
 * **Modes:**
 * - `reply` — quoting another user's message (purple border + name)
 * - `edit` — editing your own message (blue border + name)
 * - `deleted` — referencing a deleted message (purple border + 🚫 icon + italic text)
 */
const meta: Meta<typeof MessagePreview> = {
  title: "Base Components/Message Preview",
  component: MessagePreview,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    mode: { control: "select", options: ["reply", "edit", "deleted"], description: "Preview mode." },
    senderName: { control: "text", description: "Sender name." },
    messageText: { control: "text", description: "Message text being quoted/edited." },
    onClose: { control: false },
  },
};
export default meta;

/* ─── Stories ─── */

/** Reply mode — quoting another user's message. Matches Figma exactly. */
export const Reply: StoryObj<typeof MessagePreview> = {
  args: {
    mode: "reply",
    senderName: "George Alan",
    messageText: "Awesome! Can I see a couple of pictures?",
    onClose: () => {},
  },
};

/** Edit mode — editing your own message. Blue accent color. */
export const Edit: StoryObj<typeof MessagePreview> = {
  args: {
    mode: "edit",
    senderName: "You",
    messageText: "Yes, it's available. Let me send you the details.",
    onClose: () => {},
  },
};

/** Deleted mode — referencing a deleted message with block icon. */
export const Deleted: StoryObj<typeof MessagePreview> = {
  args: {
    mode: "deleted",
    senderName: "Dave",
    messageText: "This message was deleted",
  },
};

/** Long message text — demonstrates truncation. */
export const LongMessage: StoryObj<typeof MessagePreview> = {
  args: {
    mode: "reply",
    senderName: "Sarah Johnson",
    messageText: "Hey, I was wondering if you could help me with something. I've been trying to figure out how to set up the new project and I'm having some trouble with the configuration files.",
    onClose: () => {},
  },
};

/** All modes side by side for comparison. */
export const AllModes: StoryObj = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Reply</div>
        <MessagePreview mode="reply" senderName="George Alan" messageText="Awesome! Can I see a couple of pictures?" onClose={() => {}} />
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Edit</div>
        <MessagePreview mode="edit" senderName="You" messageText="Yes, it's available. Let me send you the details." onClose={() => {}} />
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Deleted</div>
        <MessagePreview mode="deleted" senderName="Dave" messageText="This message was deleted" />
      </div>
    </div>
  ),
};

/** Interactive playground. */
export const Playground: StoryObj<typeof MessagePreview> = {
  args: {
    mode: "reply",
    senderName: "George Alan",
    messageText: "Awesome! Can I see a couple of pictures?",
    onClose: () => {},
  },
  parameters: { docs: { disable: true } },
};
