import type { Meta, StoryObj } from "@storybook/react";
import { InfoSelectionDialog } from "../../../components/Dialog/InfoSelectionDialogs";
import { avatarRegistry } from "../../../../foundation/tokens/avatars";

const female = avatarRegistry["Female Avatar"];
const male = avatarRegistry["Male Avatar"];

const meta: Meta<typeof InfoSelectionDialog> = {
  title: "Base Components/Dialog/Info Selection Dialogs/Message Info",
  component: InfoSelectionDialog,
  parameters: { layout: "centered" },
  decorators: [(Story) => <Inline><Story /></Inline>],
};
export default meta;
type Story = StoryObj<typeof InfoSelectionDialog>;

function Inline({ children }: { children: React.ReactNode }) {
  return (
    <div className="dialog-story-inline">
      <style>{`.dialog-story-inline .info-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }`}</style>
      {children}
    </div>
  );
}

export const Default: Story = {
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [
      { label: "Read", timestamp: "24/8/2024, 5:02 pm" },
      { label: "Delivered", timestamp: "24/8/2024, 4:56 pm" },
    ],
  },
};

export const Unread: Story = {
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [
      { label: "Read", timestamp: "---" },
      { label: "Delivered", timestamp: "---" },
    ],
  },
};

export const DeliveredOnly: Story = {
  name: "Delivered Only",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [
      { label: "Read", timestamp: "---" },
      { label: "Delivered", timestamp: "24/8/2024, 4:56 pm" },
    ],
  },
};

export const Error: Story = {
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    messageInfoError: "Looks like something went wrong.\nPlease try again.",
  },
};

export const GroupMessageInfo: Story = {
  name: "Group Message Info",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    groupMessageInfoUsers: [
      {
        name: "Andrew Joseph",
        avatar: male[6].imageUrl,
        readTimestamp: "22 Apr, 01:36 pm",
        deliveredTimestamp: "22 Apr, 12:15 pm",
      },
      {
        name: "Nancy Grace",
        avatar: female[8].imageUrl,
        readTimestamp: "28 Apr, 01:51 pm",
        deliveredTimestamp: "28 Apr, 01:51 pm",
      },
      {
        name: "Susan Marie",
        avatar: female[11].imageUrl,
        readTimestamp: "05 May, 08:35 pm",
        deliveredTimestamp: "05 May, 08:35 pm",
      },
    ],
  },
};

export const GroupPartiallyRead: Story = {
  name: "Group — Partially Read",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    groupMessageInfoUsers: [
      {
        name: "Andrew Joseph",
        avatar: male[6].imageUrl,
        readTimestamp: "22 Apr, 01:36 pm",
        deliveredTimestamp: "22 Apr, 12:15 pm",
      },
      {
        name: "Nancy Grace",
        avatar: female[8].imageUrl,
        readTimestamp: "---",
        deliveredTimestamp: "28 Apr, 01:51 pm",
      },
      {
        name: "Susan Marie",
        avatar: female[11].imageUrl,
        readTimestamp: "---",
        deliveredTimestamp: "05 May, 08:35 pm",
      },
    ],
  },
};

export const GroupUnread: Story = {
  name: "Group — Unread",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    groupMessageInfoUsers: [
      {
        name: "Andrew Joseph",
        avatar: male[6].imageUrl,
        readTimestamp: "---",
        deliveredTimestamp: "22 Apr, 12:15 pm",
      },
      {
        name: "Nancy Grace",
        avatar: female[8].imageUrl,
        readTimestamp: "---",
        deliveredTimestamp: "28 Apr, 01:51 pm",
      },
      {
        name: "Susan Marie",
        avatar: female[11].imageUrl,
        readTimestamp: "---",
        deliveredTimestamp: "---",
      },
    ],
  },
};

export const Playground: Story = {
  args: {
    variant: "messageInfo",
    open: true,
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [
      { label: "Read", timestamp: "24/8/2024, 5:02 pm" },
      { label: "Delivered", timestamp: "24/8/2024, 4:56 pm" },
    ],
    messageInfoError: "",
  },
  parameters: { docs: { disable: true } },
  argTypes: {
    open: { control: "boolean" },
    messagePreview: { control: "text" },
    messageInfoError: { control: "text" },
  },
};

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "var(--space-6)" }}>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>{title}</div>
      {children}
    </div>
  );
}

function UsageCodeCard({ language, code }: { language: string; code: string }) {
  return (
    <div style={{ border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--color-bg-01)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--color-border-default)", background: "var(--color-bg-02)" }}>
        <span style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-tertiary)" }}>{language}</span>
      </div>
      <pre style={{ margin: 0, padding: "var(--space-3-5)", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-1)", lineHeight: 1.6, color: "var(--color-text-primary)", overflowX: "auto" }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<div class="info-dialog__overlay">
  <div class="info-dialog">
    <div class="info-dialog__header">
      <h2 class="info-dialog__title">Message Info</h2>
      <button class="info-dialog__close">
        <!-- Close icon SVG -->
      </button>
    </div>
    <div class="info-dialog__body">
      <div class="info-dialog__message-preview">
        <span class="info-dialog__message-bubble">Thanks! Looks good.</span>
      </div>
      <div class="info-dialog__info-list">
        <div class="info-dialog__info-item">
          <span class="info-dialog__info-label">Read</span>
          <span class="info-dialog__info-value">24/8/2024, 5:02 pm</span>
        </div>
        <div class="info-dialog__info-item">
          <span class="info-dialog__info-label">Delivered</span>
          <span class="info-dialog__info-value">24/8/2024, 4:56 pm</span>
        </div>
      </div>
    </div>
  </div>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={`.info-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.info-dialog {
  width: 400px;
  max-height: 680px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--shadow-xl);
  display: flex;
  flex-direction: column;
}

.info-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-4) var(--cometchat-spacing-6);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.info-dialog__title {
  font-family: var(--cometchat-font-family);
  font-size: 20px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.info-dialog__close {
  width: 44px;
  height: 44px;
  border: none;
  background: none;
  border-radius: var(--cometchat-radius-2);
  color: var(--cometchat-icon-color-secondary);
  cursor: pointer;
}

.info-dialog__body {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.info-dialog__message-bubble {
  background: var(--cometchat-primary-color);
  color: var(--cometchat-static-white);
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  border-radius: 10px;
  font-size: 14px;
  display: inline-block;
}

.info-dialog__info-item {
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-1);
  padding: var(--cometchat-spacing-3) 0;
}`} />
      </UsageSection>
    </div>
  ),
};
