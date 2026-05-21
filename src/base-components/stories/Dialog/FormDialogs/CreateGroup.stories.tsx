import type { Meta, StoryObj } from "@storybook/react";
import { FormDialog } from "../../../components/Dialog/FormDialogs";

const meta: Meta<typeof FormDialog> = {
  title: "Base Components/Dialog/Form Dialogs/Create Group",
  component: FormDialog,
  parameters: { layout: "centered" },
  decorators: [(Story) => <Inline><Story /></Inline>],
};
export default meta;
type Story = StoryObj<typeof FormDialog>;

function Inline({ children }: { children: React.ReactNode }) {
  return (
    <div className="dialog-story-inline">
      <style>{`.dialog-story-inline .form-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }`}</style>
      {children}
    </div>
  );
}

export const PublicType: Story = {
  name: "Public (Default)",
  args: {
    variant: "createGroup",
    initialGroupType: "public",
  },
};

export const PrivateType: Story = {
  name: "Private",
  args: {
    variant: "createGroup",
    initialGroupType: "private",
  },
};

export const ProtectedType: Story = {
  name: "Protected (with Password)",
  args: {
    variant: "createGroup",
    initialGroupType: "protected",
  },
};

export const Playground: Story = {
  args: {
    variant: "createGroup",
    initialGroupType: "public",
    open: true,
  },
  parameters: { docs: { disable: true } },
  argTypes: {
    initialGroupType: {
      control: "select",
      options: ["public", "private", "protected"],
    },
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
        <UsageCodeCard language="HTML" code={`<div class="form-dialog__overlay">
  <div class="form-dialog">
    <div class="form-dialog__header">
      <h2 class="form-dialog__title">Create Group</h2>
      <button class="form-dialog__close">
        <!-- Close icon SVG -->
      </button>
    </div>
    <div class="form-dialog__body">
      <div class="form-dialog__tabs">
        <button class="form-dialog__tab form-dialog__tab--active">Public</button>
        <button class="form-dialog__tab">Private</button>
        <button class="form-dialog__tab">Protected</button>
      </div>
      <div class="form-dialog__field">
        <div class="form-dialog__label-wrap">
          <label class="form-dialog__label">Group Name</label>
          <span class="form-dialog__required">*</span>
        </div>
        <div class="form-dialog__input-wrap">
          <input class="form-dialog__input" placeholder="Enter group name" />
        </div>
      </div>
    </div>
    <div class="form-dialog__actions">
      <button class="form-dialog__btn form-dialog__btn--cancel">Cancel</button>
      <button class="form-dialog__btn form-dialog__btn--submit">Create</button>
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
  width: 400px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
}

.form-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-6);
  border-bottom: 1px solid var(--cometchat-border-color-default);
}

.form-dialog__tabs {
  display: flex;
  gap: var(--cometchat-spacing-1);
  padding: var(--cometchat-spacing-1);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-02);
}

.form-dialog__tab--active {
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-highlight);
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.1);
}

.form-dialog__body {
  padding: var(--cometchat-spacing-6);
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-6);
}

.form-dialog__input {
  height: 44px;
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  font-size: 16px;
  color: var(--cometchat-text-color-primary);
  background: var(--cometchat-background-color-01);
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05);
  width: 100%;
}

.form-dialog__input:focus {
  border-color: var(--cometchat-primary-color);
  box-shadow: var(--cometchat-focus-ring);
}

.form-dialog__btn--submit {
  background: var(--cometchat-primary-button-background);
  color: var(--cometchat-static-white);
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--cometchat-radius-2);
  height: 44px;
}`} />
      </UsageSection>
    </div>
  ),
};
