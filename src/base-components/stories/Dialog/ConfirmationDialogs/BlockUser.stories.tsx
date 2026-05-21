import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmationDialog } from "../../../components/Dialog/ConfirmationDialogs";

const meta: Meta<typeof ConfirmationDialog> = {
  title: "Base Components/Dialog/Confirmation Dialogs/Block User",
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
  args: { variant: "blockUser" },
};

export const CustomTitle: Story = {
  name: "Custom Title",
  args: {
    variant: "blockUser",
    title: "Block @john_doe?",
  },
};

export const CustomDescription: Story = {
  name: "Custom Description",
  args: {
    variant: "blockUser",
    description:
      "Blocking this user will prevent them from sending you messages, seeing your online status, or adding you to groups.",
  },
};

export const CustomLabels: Story = {
  name: "Custom Labels",
  args: {
    variant: "blockUser",
    confirmLabel: "Yes, Block",
    cancelLabel: "Go Back",
  },
};

export const Playground: Story = {
  args: { variant: "blockUser", open: true },
  parameters: { docs: { disable: true } },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    confirmLabel: { control: "text" },
    cancelLabel: { control: "text" },
    open: { control: "boolean" },
  },
};


export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<div class="confirmation-dialog__overlay">
  <div class="confirmation-dialog">
    <div class="confirmation-dialog__icon-wrap">
      <div class="confirmation-dialog__icon">
        <!-- Warning/Error SVG icon -->
      </div>
    </div>
    <div class="confirmation-dialog__text">
      <h2 class="confirmation-dialog__title">Dialog Title</h2>
      <p class="confirmation-dialog__description">
        Are you sure you want to perform this action?
      </p>
    </div>
    <div class="confirmation-dialog__actions">
      <button class="confirmation-dialog__btn confirmation-dialog__btn--cancel">Cancel</button>
      <button class="confirmation-dialog__btn confirmation-dialog__btn--confirm">Confirm</button>
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
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--cometchat-shadow-xl);
  padding: var(--cometchat-spacing-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cometchat-spacing-3);
}

.confirmation-dialog__icon-wrap {
  width: 80px;
  height: 80px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-error);
  display: flex;
  align-items: center;
  justify-content: center;
}

.confirmation-dialog__title {
  font: var(--cometchat-font-heading2-medium);
  color: var(--cometchat-text-color-primary);
  text-align: center;
}

.confirmation-dialog__description {
  font: var(--cometchat-font-body-regular);
  color: var(--cometchat-text-color-secondary);
  text-align: center;
}

.confirmation-dialog__actions {
  display: flex;
  gap: var(--cometchat-spacing-2);
  width: 100%;
}

.confirmation-dialog__btn--cancel {
  flex: 1;
  height: 40px;
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
  cursor: pointer;
}

.confirmation-dialog__btn--confirm {
  flex: 1;
  height: 40px;
  background: var(--cometchat-error-color);
  color: var(--cometchat-static-white);
  border: none;
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
  cursor: pointer;
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
