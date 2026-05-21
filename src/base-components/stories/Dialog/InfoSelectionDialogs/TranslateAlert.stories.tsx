import type { Meta, StoryObj } from "@storybook/react";
import { InfoSelectionDialog } from "../../../components/Dialog/InfoSelectionDialogs";

const meta: Meta<typeof InfoSelectionDialog> = {
  title: "Base Components/Dialog/Info Selection Dialogs/Translate Alert",
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
    variant: "alert",
    alertTitle: "Message Already in Selected Language",
    alertDescription:
      "Selected language for translation is similar to the language of the original message.",
    alertButtonLabel: "Understood",
    alertIcon: "translate",
  },
};

export const BlockAlert: Story = {
  name: "Block Alert",
  args: {
    variant: "alert",
    alertIcon: "block",
    alertTitle: "User Blocked",
    alertDescription: "You have blocked this user.",
    alertButtonLabel: "OK",
  },
};

export const WarningAlert: Story = {
  name: "Warning Alert",
  args: {
    variant: "alert",
    alertIcon: "warning",
    alertTitle: "Connection Lost",
    alertDescription: "Please check your internet connection.",
    alertButtonLabel: "Retry",
  },
};

export const ErrorAlert: Story = {
  name: "Error Alert",
  args: {
    variant: "alert",
    alertIcon: "error",
    alertTitle: "Message Failed",
    alertDescription: "Failed to send message. Please try again.",
    alertButtonLabel: "OK",
  },
};

export const InfoAlert: Story = {
  name: "Info Alert",
  args: {
    variant: "alert",
    alertIcon: "info",
    alertTitle: "New Feature",
    alertDescription: "You can now translate messages in real-time.",
    alertButtonLabel: "OK",
  },
};

export const Playground: Story = {
  args: {
    variant: "alert",
    alertTitle: "Message Already in Selected Language",
    alertDescription:
      "Selected language for translation is similar to the language of the original message.",
    alertButtonLabel: "Understood",
    alertIcon: "translate",
    open: true,
  },
  parameters: { docs: { disable: true } },
  argTypes: {
    alertTitle: { control: "text" },
    alertDescription: { control: "text" },
    alertButtonLabel: { control: "text" },
    alertIcon: {
      control: "select",
      options: ["block", "warning", "info", "error", "translate"],
    },
    open: { control: "boolean" },
  },
};


export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<div class="info-selection-dialog__overlay">
  <div class="info-selection-dialog">
    <div class="info-selection-dialog__header">
      <h2 class="info-selection-dialog__title">Dialog Title</h2>
      <button class="info-selection-dialog__close">×</button>
    </div>
    <div class="info-selection-dialog__body">
      <!-- Content: member list, alerts, selections -->
    </div>
    <div class="info-selection-dialog__footer">
      <button class="info-selection-dialog__btn--cancel">Cancel</button>
      <button class="info-selection-dialog__btn--confirm">Confirm</button>
    </div>
  </div>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={`.info-selection-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.info-selection-dialog {
  width: 420px;
  max-height: 80vh;
  background: var(--cometchat-background-color-01);
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--cometchat-shadow-xl);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.info-selection-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-4);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.info-selection-dialog__title {
  font: var(--cometchat-font-heading3-semibold);
  color: var(--cometchat-text-color-primary);
}

.info-selection-dialog__body {
  flex: 1;
  overflow-y: auto;
  padding: var(--cometchat-spacing-4);
}

.info-selection-dialog__footer {
  display: flex;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-4);
  border-top: 1px solid var(--cometchat-border-color-light);
}

.info-selection-dialog__btn--cancel {
  flex: 1;
  height: 40px;
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}

.info-selection-dialog__btn--confirm {
  flex: 1;
  height: 40px;
  background: var(--cometchat-primary-button-background);
  color: var(--cometchat-primary-button-text);
  border: none;
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}`} />
      </UsageSection>
    </div>
  ),
};

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--cometchat-text-color-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8, paddingBottom: 8, borderBottom: "1px solid var(--cometchat-border-color-default)" }}>{title}</div>
      {children}
    </div>
  );
}

function UsageCodeCard({ language, code }: { language: string; code: string }) {
  return (
    <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: 12, overflow: "hidden", background: "var(--cometchat-background-color-02)" }}>
      <div style={{ padding: "8px 12px", borderBottom: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-03)" }}>
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-secondary)" }}>{language}</span>
      </div>
      <pre style={{ margin: 0, padding: 14, fontFamily: "var(--cometchat-font-family)", fontSize: 12, lineHeight: 1.6, color: "var(--cometchat-text-color-primary)", overflowX: "auto" }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
