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
      <UsageSection title="CSS (Foundation Variables)">
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
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
}

.form-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-6);
  border-bottom: 1px solid var(--color-border-default);
}

.form-dialog__tabs {
  display: flex;
  gap: var(--space-1);
  padding: var(--space-1);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-full);
  background: var(--color-bg-02);
}

.form-dialog__tab--active {
  background: var(--color-bg-01);
  color: var(--color-text-highlight);
  box-shadow: var(--shadow-sm);
}

.form-dialog__body {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.form-dialog__input {
  height: 44px;
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  font-size: var(--font-size-3);
  color: var(--color-text-primary);
  background: var(--color-bg-01);
  box-shadow: var(--shadow-xs);
  width: 100%;
}

.form-dialog__input:focus {
  border-color: var(--color-ep-600);
  box-shadow: var(--focus-ring-xs);
}

.form-dialog__btn--submit {
  background: var(--color-btn-primary-bg);
  color: var(--color-static-white);
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-md);
  height: 44px;
}`} />
      </UsageSection>
    </div>
  ),
};
