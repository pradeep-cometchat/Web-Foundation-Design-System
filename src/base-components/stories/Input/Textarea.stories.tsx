import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../../components/Input";

const meta: Meta<typeof Textarea> = {
  title: "Base Components/Input/Textarea",
  component: Textarea,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Textarea>;

const single = (Story: React.ComponentType) => (
  <div style={{ width: 360 }}>
    <Story />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const Default: Story = {
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    placeholder: "Enter a description...",
    hint: "This is a hint text to help user.",
  },
};

export const Filled: Story = {
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    value: "A little about the company and the team that you'll be working with.",
    hint: "This is a hint text to help user.",
  },
};

export const PlaceholderError: Story = {
  name: "Placeholder — Error",
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    placeholder: "Enter a description...",
    error: "This is an error message.",
  },
};

export const FilledError: Story = {
  name: "Filled — Error",
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    value: "A little about the company and the team that you'll be working with.",
    error: "This is an error message.",
  },
};

export const Disabled: Story = {
  decorators: [single],
  args: {
    label: "Description",
    required: true,
    placeholder: "Enter a description...",
    hint: "This is a hint text to help user.",
    disabled: true,
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllStates: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(320px, 1fr))",
        gap: "var(--space-8)",
        padding: "var(--space-8)",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <Textarea
        label="Description"
        required
        placeholder="Enter a description..."
        hint="This is a hint text to help user."
      />
      <Textarea
        label="Description"
        required
        placeholder="Enter a description..."
        error="This is an error message."
      />
      <Textarea
        label="Description"
        required
        value="A little about the company and the team that you'll be working with."
        hint="This is a hint text to help user."
      />
      <Textarea
        label="Description"
        required
        value="A little about the company and the team that you'll be working with."
        error="This is an error message."
      />
      <Textarea
        label="Description"
        required
        placeholder="Enter a description..."
        hint="This is a hint text to help user."
        disabled
      />
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   USAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- Textarea Field -->
<div class="textarea-field">
  <div class="textarea-field__label-wrap">
    <label class="textarea-field__label">Description</label>
    <span class="textarea-field__required">*</span>
  </div>
  <textarea class="textarea-field__input" rows="4" placeholder="Enter a description..."></textarea>
  <span class="textarea-field__hint">This is a hint text to help user.</span>
</div>

<!-- Error state -->
<div class="textarea-field">
  <div class="textarea-field__label-wrap">
    <label class="textarea-field__label">Description</label>
    <span class="textarea-field__required">*</span>
  </div>
  <textarea class="textarea-field__input textarea-field__input--error" rows="4">Content here</textarea>
  <span class="textarea-field__hint textarea-field__hint--error">This is an error message.</span>
</div>

<!-- Disabled state -->
<div class="textarea-field textarea-field--disabled">
  <div class="textarea-field__label-wrap">
    <label class="textarea-field__label">Description</label>
  </div>
  <textarea class="textarea-field__input" rows="4" disabled placeholder="Enter a description..."></textarea>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={`.textarea-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.textarea-field__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-secondary);
}

.textarea-field__required {
  color: var(--cometchat-text-color-highlight);
}

.textarea-field__input {
  width: 100%;
  padding: var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-dark);
  border-radius: var(--cometchat-radius-2);
  background: var(--cometchat-background-color-01);
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05);
  font-size: 16px;
  color: var(--cometchat-text-color-primary);
  resize: vertical;
}

.textarea-field__input:focus {
  border-color: var(--cometchat-primary-color);
  box-shadow: var(--focus-ring-xs);
}

.textarea-field__input--error {
  border-color: var(--cometchat-error-color);
}

.textarea-field__input:disabled {
  background: var(--color-bg-disabled);
  border-color: var(--cometchat-border-color-default);
  cursor: not-allowed;
  resize: none;
}

.textarea-field__hint {
  font-size: 12px;
  color: var(--cometchat-text-color-tertiary);
}

.textarea-field__hint--error {
  color: var(--cometchat-error-color);
}`} />
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   PLAYGROUND
   ═══════════════════════════════════════════════════════════════════════════ */

export const Playground: Story = {
  decorators: [single],
  parameters: { docs: { disable: true } },
  args: {
    label: "Description",
    required: true,
    placeholder: "Enter a description...",
    hint: "This is a hint text to help user.",
    disabled: false,
    resizable: true,
    rows: 4,
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    hint: { control: "text" },
    error: { control: "text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
    resizable: { control: "boolean" },
    rows: { control: { type: "range", min: 2, max: 10 } },
  },
};


/* ─── Usage helpers ─── */

const UsageCodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div style={{ border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--color-bg-01)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--color-border-default)", background: "var(--color-bg-02)" }}>
      <span style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-tertiary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: "var(--space-3-5)", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-1)", lineHeight: 1.6, color: "var(--color-text-primary)", overflowX: "auto" }}>
      <code>{code}</code>
    </pre>
  </div>
);

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>{title}</div>
      {children}
    </div>
  );
}
