import type { Meta, StoryObj } from "@storybook/react";
import { LinkDialog } from "../../../components/LinkDialog";

const meta: Meta<typeof LinkDialog> = {
  title: "Base Components/Dialog/Form Dialogs/Link Dialog",
  component: LinkDialog,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof LinkDialog>;

export const Default: Story = {
  args: {
    open: true,
    showOverlay: false,
  },
};

export const WithPrefilledText: Story = {
  name: "With Prefilled Text",
  args: {
    open: true,
    showOverlay: false,
    initialText: "Click here to visit",
    initialUrl: "https://www.example.com",
  },
};

export const EditLink: Story = {
  name: "Edit Link",
  args: {
    open: true,
    showOverlay: false,
    title: "Edit Link",
    initialText: "CometChat Documentation",
    initialUrl: "https://www.cometchat.com/docs",
  },
};

export const CustomLabels: Story = {
  name: "Custom Labels",
  args: {
    open: true,
    showOverlay: false,
    title: "Insert Hyperlink",
    textPlaceholder: "Display text",
    urlPlaceholder: "Paste URL here",
    cancelLabel: "Discard",
    saveLabel: "Insert",
  },
};

export const Playground: Story = {
  args: {
    open: true,
    showOverlay: false,
    title: "Add Link",
    initialText: "",
    initialUrl: "",
    textPlaceholder: "Link",
    urlPlaceholder: "https://",
    cancelLabel: "Cancel",
    saveLabel: "Save",
  },
  parameters: { docs: { disable: true } },
  argTypes: {
    open: { control: "boolean" },
    showOverlay: { control: "boolean" },
    title: { control: "text" },
    initialText: { control: "text" },
    initialUrl: { control: "text" },
    textPlaceholder: { control: "text" },
    urlPlaceholder: { control: "text" },
    cancelLabel: { control: "text" },
    saveLabel: { control: "text" },
  },
};


export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<div class="form-dialog__overlay">
  <div class="form-dialog">
    <div class="form-dialog__header">
      <h2 class="form-dialog__title">Dialog Title</h2>
      <button class="form-dialog__close">×</button>
    </div>
    <div class="form-dialog__body">
      <label class="form-dialog__label">Field Label</label>
      <input class="form-dialog__input" placeholder="Enter value" />
    </div>
    <div class="form-dialog__footer">
      <button class="form-dialog__btn--cancel">Cancel</button>
      <button class="form-dialog__btn--submit">Submit</button>
    </div>
  </div>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={`.form-dialog__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 13, 18, 0.5);
  z-index: 1000;
}

.form-dialog {
  width: 420px;
  background: var(--cometchat-background-color-01);
  border-radius: var(--cometchat-radius-4);
  box-shadow: var(--cometchat-shadow-xl);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.form-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-4);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.form-dialog__title {
  font: var(--cometchat-font-heading3-semibold);
  color: var(--cometchat-text-color-primary);
}

.form-dialog__body {
  padding: var(--cometchat-spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-3);
}

.form-dialog__label {
  font: var(--cometchat-font-body-medium);
  color: var(--cometchat-text-color-primary);
}

.form-dialog__input {
  height: 40px;
  padding: 0 var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-body-regular);
  color: var(--cometchat-text-color-primary);
}

.form-dialog__footer {
  display: flex;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-4);
  border-top: 1px solid var(--cometchat-border-color-light);
}

.form-dialog__btn--cancel {
  flex: 1;
  height: 40px;
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font: var(--cometchat-font-button-medium);
}

.form-dialog__btn--submit {
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
