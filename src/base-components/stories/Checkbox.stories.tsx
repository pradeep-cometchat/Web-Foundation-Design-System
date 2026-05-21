import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/Checkbox/Checkbox.impl";
import type { CheckboxSize } from "../components/Checkbox/Checkbox.types";

/**
 * A checkbox selection control — rounded square with check or minus icon.
 *
 * **Sizes:** sm (16px), md (20px).
 *
 * **States:** Default, Hover, Focus, Disabled, Checked, Indeterminate.
 *
 * **Text:** Optional label (16px/500) and description (14px/400).
 *
 * Uses foundation tokens: `--color-primary`, `--color-ep-700`, `--color-neutral-lm-*`,
 * `--radius-xs` (sm), `--radius-sm` (md), `--focus-ring-xs`.
 */
const meta: Meta = {
  title: "Base Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["sm", "md"] satisfies CheckboxSize[], table: { category: "Appearance" } },
    checked: { control: "boolean", table: { category: "State" } },
    indeterminate: { control: "boolean", table: { category: "State" } },
    label: { control: "text", table: { category: "Content" } },
    description: { control: "text", table: { category: "Content" } },
    disabled: { control: "boolean", table: { category: "State" } },
  },
};
export default meta;

type Story = StoryObj;

/** All checkbox states. */
export const CheckboxStates: Story = {
  name: "States",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-5)" }}>
      <Section title="Unchecked">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-6)" }}>
          <Checkbox size="sm" />
          <Checkbox size="md" />
          <Checkbox size="md" disabled />
        </div>
      </Section>
      <Section title="Checked">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-6)" }}>
          <Checkbox size="sm" checked />
          <Checkbox size="md" checked />
          <Checkbox size="md" checked disabled />
        </div>
      </Section>
      <Section title="Indeterminate">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-6)" }}>
          <Checkbox size="sm" indeterminate />
          <Checkbox size="md" indeterminate />
          <Checkbox size="md" indeterminate disabled />
        </div>
      </Section>
    </div>
  ),
};

/** Sizes comparison. */
export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-5)" }}>
      <Section title="Small (16px)">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-6)" }}>
          <Checkbox size="sm" />
          <Checkbox size="sm" checked />
          <Checkbox size="sm" indeterminate />
          <Checkbox size="sm" disabled />
          <Checkbox size="sm" checked disabled />
        </div>
      </Section>
      <Section title="Medium (20px)">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-6)" }}>
          <Checkbox size="md" />
          <Checkbox size="md" checked />
          <Checkbox size="md" indeterminate />
          <Checkbox size="md" disabled />
          <Checkbox size="md" checked disabled />
        </div>
      </Section>
    </div>
  ),
};

/** With label and description. */
export const WithText: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)", maxWidth: 400 }}>
      <ControlledCheckbox label="Remember me" description="Save my login details for next time." />
      <ControlledCheckbox checked label="Email notifications" description="Get notified when someone sends you a message." />
      <Checkbox checked disabled label="Auto-save" description="This setting is managed by your admin." />
    </div>
  ),
};

/** Real-world examples. */
export const Examples: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)", maxWidth: 400 }}>
      <Section title="Settings list">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)" }}>
          <ControlledCheckbox checked label="Push notifications" description="Receive alerts on your device." />
          <ControlledCheckbox label="Marketing emails" description="Tips, product updates, and inspiration." />
          <ControlledCheckbox checked label="Security alerts" description="Get notified about suspicious activity." />
          <Checkbox checked disabled label="Two-factor auth" description="Enforced by your organization." />
        </div>
      </Section>
    </div>
  ),
};

/* ─── Helpers ──────────────────────────────────────────────────────────────── */

function ControlledCheckbox(props: React.ComponentProps<typeof Checkbox>) {
  const [on, setOn] = useState(props.checked ?? false);
  return <Checkbox {...props} checked={on} onChange={setOn} />;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-neutral-color-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>{title}</div>
      {children}
    </div>
  );
}

const CodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", background: "var(--cometchat-background-color-01)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", borderBottom: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-02)" }}>
      <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-tertiary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: "var(--cometchat-spacing-3-5)", fontFamily: "var(--cometchat-font-family)", fontSize: "12px", lineHeight: 1.6, color: "var(--cometchat-text-color-primary)", overflowX: "auto" }}>
      <code>{code}</code>
    </pre>
  </div>
);

const ClassGroup: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div style={{ padding: "var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)", border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", background: "var(--cometchat-background-color-01)" }}>
    <div style={{ fontSize: "10px", fontWeight: "600", color: "var(--cometchat-text-color-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>{title}</div>
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-1)" }}>
      {items.map((item) => (
        <code key={item} style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "12px", color: "var(--cometchat-text-color-primary)", background: "var(--cometchat-background-color-02)", padding: "var(--cometchat-spacing) var(--cometchat-spacing-2)", borderRadius: "var(--cometchat-radius-1)", border: "1px solid var(--cometchat-border-color-default)", display: "inline-block", width: "fit-content" }}>.{item}</code>
      ))}
    </div>
  </div>
);

/** Raw HTML + CSS usage with foundation variables. */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <Section title="HTML">
        <CodeCard
          language="HTML"
          code={`<!-- Basic checkbox (medium) -->
<label class="checkbox">
  <button class="checkbox__box checkbox__box--md" role="checkbox" aria-checked="false">
    <span class="checkbox__icon"><!-- check icon --></span>
  </button>
  <div class="checkbox__text">
    <span class="checkbox__label">Remember me</span>
    <span class="checkbox__description">Save my login details for next time.</span>
  </div>
</label>

<!-- Checked checkbox -->
<label class="checkbox">
  <button class="checkbox__box checkbox__box--md checkbox__box--checked" role="checkbox" aria-checked="true">
    <span class="checkbox__icon">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  </button>
  <div class="checkbox__text">
    <span class="checkbox__label">Email notifications</span>
  </div>
</label>

<!-- Small checkbox -->
<label class="checkbox">
  <button class="checkbox__box checkbox__box--sm" role="checkbox" aria-checked="false">
    <span class="checkbox__icon"></span>
  </button>
  <div class="checkbox__text">
    <span class="checkbox__label">Agree to terms</span>
  </div>
</label>

<!-- Disabled checkbox -->
<label class="checkbox checkbox--disabled">
  <button class="checkbox__box checkbox__box--md checkbox__box--checked" disabled role="checkbox" aria-checked="true">
    <span class="checkbox__icon"><!-- check icon --></span>
  </button>
  <div class="checkbox__text">
    <span class="checkbox__label">Managed by admin</span>
  </div>
</label>

<!-- Radio variant -->
<label class="checkbox">
  <button class="checkbox__box checkbox__box--md checkbox__box--radio" role="radio" aria-checked="false">
    <span class="checkbox__icon"></span>
  </button>
  <div class="checkbox__text">
    <span class="checkbox__label">Option A</span>
  </div>
</label>`}
        />
      </Section>

      <Section title="CSS (CometChat Tokens)">
        <CodeCard
          language="CSS"
          code={`.checkbox {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--cometchat-spacing-3);
  font-family: var(--cometchat-font-family);
  cursor: pointer;
}

.checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.checkbox__box {
  position: relative;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid var(--cometchat-neutral-color-300);
  background: transparent;
  transition: background 120ms ease, border-color 120ms ease;
}

.checkbox__box--sm { width: 16px; height: 16px; border-radius: var(--cometchat-radius-1); }
.checkbox__box--md { width: 20px; height: 20px; border-radius: 6px; }
.checkbox__box--radio { border-radius: var(--cometchat-radius-max); }

.checkbox__box:hover:not(:disabled) {
  border-color: var(--cometchat-primary-color);
}

.checkbox__box:focus-visible {
  box-shadow: var(--cometchat-focus-ring);
}

.checkbox__box--checked {
  background: var(--cometchat-primary-color);
  border-color: var(--cometchat-primary-color);
}

.checkbox__box--checked:hover:not(:disabled) {
  background: var(--cometchat-extended-primary-color-900);
  border-color: var(--cometchat-extended-primary-color-900);
}

.checkbox__label {
  font-size: 16px;
  font-weight: 500;
  color: var(--cometchat-neutral-color-700);
  line-height: 19.2px;
}

.checkbox__description {
  font-size: 14px;
  font-weight: 400;
  color: var(--cometchat-neutral-color-600);
  line-height: 16.8px;
}`}
        />
      </Section>

      <Section title="Available Classes">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <ClassGroup title="Sizes" items={["checkbox__box--sm", "checkbox__box--md"]} />
          <ClassGroup title="States" items={["checkbox__box--checked", "checkbox--disabled"]} />
          <ClassGroup title="Variants" items={["checkbox__box--radio"]} />
          <ClassGroup title="Child Elements" items={["checkbox__box", "checkbox__icon", "checkbox__text", "checkbox__label", "checkbox__description"]} />
        </div>
      </Section>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure. */
export const Playground: Story = {
  args: { size: "md", checked: false, indeterminate: false, label: "Remember me", description: "Save my login details for next time.", disabled: false },
  parameters: { docs: { disable: true } },
  render: (args) => <ControlledCheckbox {...(args as any)} />,
};
