import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmationDialog } from "../../../components/Dialog/ConfirmationDialogs";

const meta: Meta<typeof ConfirmationDialog> = {
  title: "Base Components/Dialog/Confirmation Dialogs/Delete Conversation",
  component: ConfirmationDialog,
  parameters: { layout: "centered" },
  decorators: [(Story) => <Inline><Story /></Inline>],
};
export default meta;
type Story = StoryObj<typeof ConfirmationDialog>;

function Inline({ children }: { children: React.ReactNode }) {
  return (
    <div className="dialog-story-inline">
      <style>{`.dialog-story-inline .confirmation-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }`}</style>
      {children}
    </div>
  );
}

export const Default: Story = {
  args: { variant: "deleteConversation" },
};

export const CustomContent: Story = {
  args: {
    variant: "deleteConversation",
    title: "Delete Chat with John?",
    description:
      "All messages in this chat will be permanently removed. This cannot be undone.",
  },
};

export const CustomLabels: Story = {
  name: "Custom Labels",
  args: {
    variant: "deleteConversation",
    confirmLabel: "Delete Forever",
    cancelLabel: "Keep Chat",
  },
};

export const Playground: Story = {
  args: {
    variant: "deleteConversation",
    open: true,
  },
  parameters: { docs: { disable: true } },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    confirmLabel: { control: "text" },
    cancelLabel: { control: "text" },
    open: { control: "boolean" },
  },
};

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "var(--cometchat-spacing-6)" }}>
      <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-text-color-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>{title}</div>
      {children}
    </div>
  );
}

function UsageCodeCard({ language, code }: { language: string; code: string }) {
  return (
    <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", background: "var(--cometchat-background-color-01)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", borderBottom: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-02)" }}>
        <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-tertiary)" }}>{language}</span>
      </div>
      <pre style={{ margin: 0, padding: "var(--cometchat-spacing-3-5)", fontFamily: "var(--cometchat-font-family)", fontSize: "12px", lineHeight: 1.6, color: "var(--cometchat-text-color-primary)", overflowX: "auto" }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<div class="confirmation-dialog__overlay">
  <div class="confirmation-dialog">
    <div class="confirmation-dialog__icon-wrap">
      <div class="confirmation-dialog__icon">
        <!-- SVG icon here -->
      </div>
    </div>
    <div class="confirmation-dialog__text">
      <h2 class="confirmation-dialog__title">Delete Conversation?</h2>
      <p class="confirmation-dialog__description">
        This conversation will be permanently deleted. This action cannot be undone.
      </p>
    </div>
    <div class="confirmation-dialog__actions">
      <div class="confirmation-dialog__btn-wrap">
        <button class="confirmation-dialog__btn confirmation-dialog__btn--cancel">Cancel</button>
      </div>
      <div class="confirmation-dialog__btn-wrap">
        <button class="confirmation-dialog__btn confirmation-dialog__btn--confirm">Delete</button>
      </div>
    </div>
  </div>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={`.confirmation-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.confirmation-dialog {
  width: 400px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cometchat-spacing-3);
  padding: var(--cometchat-spacing-6);
}

.confirmation-dialog__icon-wrap {
  width: 80px;
  height: 80px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-02);
  display: flex;
  align-items: center;
  justify-content: center;
}

.confirmation-dialog__icon {
  width: 48px;
  height: 48px;
  color: var(--cometchat-error-color);
}

.confirmation-dialog__title {
  font-family: var(--cometchat-font-family);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: var(--cometchat-text-color-primary);
}

.confirmation-dialog__description {
  font-family: var(--cometchat-font-family);
  font-size: 14px;
  color: var(--cometchat-text-color-secondary);
}

.confirmation-dialog__actions {
  display: flex;
  gap: var(--cometchat-spacing-2);
  width: 100%;
  padding: var(--cometchat-spacing-3) 0 0;
}

.confirmation-dialog__btn--cancel {
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  height: 40px;
}

.confirmation-dialog__btn--confirm {
  background: var(--cometchat-error-color);
  color: var(--cometchat-static-white);
  border: none;
  border-radius: var(--cometchat-radius-2);
  height: 40px;
}`} />
      </UsageSection>
    </div>
  ),
};
