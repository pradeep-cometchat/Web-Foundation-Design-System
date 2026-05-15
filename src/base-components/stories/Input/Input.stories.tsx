import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../components/Input";

const meta: Meta<typeof Input> = {
  title: "Base Components/Input/Input",
  component: Input,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Input>;

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
    label: "Email",
    required: true,
    value: "george@cometchat.com",
    leadingIcon: "mail",
    trailingIcon: "visibility_off",
    hint: "This is a hint text to help user.",
  },
};

export const Placeholder: Story = {
  decorators: [single],
  args: {
    label: "Email",
    required: true,
    placeholder: "george@cometchat.com",
    leadingIcon: "mail",
    trailingIcon: "visibility_off",
    hint: "This is a hint text to help user.",
  },
};

export const Filled: Story = {
  decorators: [single],
  args: {
    label: "Email",
    required: true,
    value: "george@cometchat.com",
    leadingIcon: "mail",
    trailingIcon: "visibility_off",
    hint: "This is a hint text to help user.",
  },
};

export const Error: Story = {
  decorators: [single],
  args: {
    label: "Email",
    required: true,
    value: "george@cometchat.com",
    leadingIcon: "mail",
    trailingIcon: "visibility_off",
    error: "This is an error message.",
  },
};

export const Disabled: Story = {
  decorators: [single],
  args: {
    label: "Email",
    required: true,
    value: "george@cometchat.com",
    leadingIcon: "mail",
    trailingIcon: "visibility_off",
    hint: "This is a hint text to help user.",
    disabled: true,
  },
};

export const WithoutIcons: Story = {
  name: "Without Icons",
  decorators: [single],
  args: {
    label: "Users",
    required: true,
    placeholder: "Add users",
    hint: "This is a hint text to help user.",
  },
};

export const WithoutIconsError: Story = {
  name: "Without Icons — Error",
  decorators: [single],
  args: {
    label: "Users",
    required: true,
    placeholder: "Add users",
    error: "This is an error message.",
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
      <Input
        label="Email"
        required
        value="george@cometchat.com"
        leadingIcon="mail"
        trailingIcon="visibility_off"
        hint="This is a hint text to help user."
      />
      <Input
        label="Users"
        required
        placeholder="Add users"
        hint="This is a hint text to help user."
      />
      <Input
        label="Email"
        required
        value="george@cometchat.com"
        leadingIcon="mail"
        trailingIcon="visibility_off"
        error="This is an error message."
      />
      <Input
        label="Users"
        required
        placeholder="Add users"
        error="This is an error message."
      />
      <Input
        label="Email"
        required
        value="george@cometchat.com"
        leadingIcon="mail"
        trailingIcon="visibility_off"
        hint="This is a hint text to help user."
        disabled
      />
      <Input
        label="Users"
        required
        placeholder="Add users"
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
        <UsageCodeCard language="HTML" code={`<!-- Input Field -->
<div class="input-field">
  <div class="input-field__label-wrap">
    <label class="input-field__label">Email</label>
    <span class="input-field__required">*</span>
  </div>
  <div class="input-field__container">
    <span class="input-field__icon">mail</span>
    <input class="input-field__input" type="email" placeholder="george@cometchat.com" />
    <span class="input-field__icon">visibility_off</span>
  </div>
  <span class="input-field__hint">This is a hint text to help user.</span>
</div>

<!-- Error state -->
<div class="input-field">
  <div class="input-field__label-wrap">
    <label class="input-field__label">Email</label>
    <span class="input-field__required">*</span>
  </div>
  <div class="input-field__container input-field__container--error">
    <input class="input-field__input" type="email" value="invalid" />
  </div>
  <span class="input-field__hint input-field__hint--error">This is an error message.</span>
</div>

<!-- Disabled state -->
<div class="input-field input-field--disabled">
  <div class="input-field__label-wrap">
    <label class="input-field__label">Email</label>
  </div>
  <div class="input-field__container">
    <input class="input-field__input" disabled value="george@cometchat.com" />
  </div>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={`.input-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-1-5);
  width: 100%;
}

.input-field__label {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}

.input-field__required {
  color: var(--color-text-highlight);
}

.input-field__container {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  height: 44px;
  padding: 0 var(--space-3);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  background: var(--color-bg-01);
  box-shadow: var(--shadow-xs);
}

.input-field__container:focus-within {
  border-color: var(--color-ep-600);
  box-shadow: var(--focus-ring-xs);
}

.input-field__container--error {
  border-color: var(--color-error);
}

.input-field__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: var(--font-size-3);
  color: var(--color-text-primary);
}

.input-field__hint {
  font-size: var(--font-size-1);
  color: var(--color-text-tertiary);
}

.input-field__hint--error {
  color: var(--color-error);
}

.input-field--disabled .input-field__container {
  background: var(--color-bg-disabled);
  border-color: var(--color-border-default);
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
    label: "Email",
    required: true,
    placeholder: "george@cometchat.com",
    leadingIcon: "mail",
    trailingIcon: "visibility_off",
    hint: "This is a hint text to help user.",
    disabled: false,
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    hint: { control: "text" },
    error: { control: "text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
    type: { control: "select", options: ["text", "email", "password", "url", "number", "tel"] },
    leadingIcon: { control: "text" },
    trailingIcon: { control: "text" },
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
