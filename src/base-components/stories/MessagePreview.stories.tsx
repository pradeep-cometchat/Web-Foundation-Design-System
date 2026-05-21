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
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)" }}>
      <div>
        <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-neutral-color-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>Reply</div>
        <MessagePreview mode="reply" senderName="George Alan" messageText="Awesome! Can I see a couple of pictures?" onClose={() => {}} />
      </div>
      <div>
        <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-neutral-color-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>Edit</div>
        <MessagePreview mode="edit" senderName="You" messageText="Yes, it's available. Let me send you the details." onClose={() => {}} />
      </div>
      <div>
        <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-neutral-color-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>Deleted</div>
        <MessagePreview mode="deleted" senderName="Dave" messageText="This message was deleted" />
      </div>
    </div>
  ),
};

/** HTML & CSS usage reference for the Message Preview component. */
export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- Reply mode -->
<div class="message-preview">
  <div class="message-preview__border message-preview__border--reply"></div>
  <div class="message-preview__content">
    <span class="message-preview__sender message-preview__sender--reply">George Alan</span>
    <div class="message-preview__text-container">
      <span class="message-preview__text">Awesome! Can I see a couple of pictures?</span>
    </div>
  </div>
  <button class="message-preview__close" type="button"><!-- X icon --></button>
</div>

<!-- Deleted mode -->
<div class="message-preview">
  <div class="message-preview__border message-preview__border--deleted"></div>
  <div class="message-preview__content">
    <span class="message-preview__sender message-preview__sender--deleted">Dave</span>
    <div class="message-preview__text-container">
      <span class="message-preview__deleted-icon"><!-- block icon --></span>
      <span class="message-preview__text">This message was deleted</span>
    </div>
  </div>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={`.message-preview {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  width: 100%;
  background: var(--cometchat-background-color-03);
  border-radius: var(--cometchat-radius-1);
  overflow: hidden;
  position: relative;
}

.message-preview__border {
  width: 4px;
  align-self: stretch;
  border-radius: var(--cometchat-radius-1) 0 0 var(--cometchat-radius-1);
}

.message-preview__border--reply {
  background: var(--cometchat-primary-color);
}

.message-preview__sender {
  font-size: 12px;
  font-weight: 500;
}

.message-preview__sender--reply {
  color: var(--cometchat-primary-color);
}

.message-preview__text {
  font-size: 12px;
  font-weight: 400;
  color: var(--cometchat-text-color-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.message-preview__close {
  position: absolute;
  top: var(--cometchat-spacing-2);
  right: var(--cometchat-spacing-2);
  width: 20px;
  height: 20px;
  color: var(--cometchat-text-color-tertiary);
}

.message-preview__close:hover {
  background: var(--cometchat-background-color-04);
}`} />
      </UsageSection>
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


/* ─── Usage helpers ─── */

const UsageCodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", background: "var(--cometchat-background-color-01)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", borderBottom: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-02)" }}>
      <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-tertiary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: "var(--cometchat-spacing-3-5)", fontFamily: "var(--cometchat-font-family)", fontSize: "12px", lineHeight: 1.6, color: "var(--cometchat-text-color-primary)", overflowX: "auto" }}>
      <code>{code}</code>
    </pre>
  </div>
);

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-neutral-color-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>{title}</div>
      {children}
    </div>
  );
}
