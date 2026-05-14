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
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
      <Section title="Unchecked">
        <div style={{ display: "flex", gap: "var(--space-6)" }}>
          <Checkbox size="sm" />
          <Checkbox size="md" />
          <Checkbox size="md" disabled />
        </div>
      </Section>
      <Section title="Checked">
        <div style={{ display: "flex", gap: "var(--space-6)" }}>
          <Checkbox size="sm" checked />
          <Checkbox size="md" checked />
          <Checkbox size="md" checked disabled />
        </div>
      </Section>
      <Section title="Indeterminate">
        <div style={{ display: "flex", gap: "var(--space-6)" }}>
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
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
      <Section title="Small (16px)">
        <div style={{ display: "flex", gap: "var(--space-6)" }}>
          <Checkbox size="sm" />
          <Checkbox size="sm" checked />
          <Checkbox size="sm" indeterminate />
          <Checkbox size="sm" disabled />
          <Checkbox size="sm" checked disabled />
        </div>
      </Section>
      <Section title="Medium (20px)">
        <div style={{ display: "flex", gap: "var(--space-6)" }}>
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
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", maxWidth: 400 }}>
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
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", maxWidth: 400 }}>
      <Section title="Settings list">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <ControlledCheckbox checked label="Push notifications" description="Receive alerts on your device." />
          <ControlledCheckbox label="Marketing emails" description="Tips, product updates, and inspiration." />
          <ControlledCheckbox checked label="Security alerts" description="Get notified about suspicious activity." />
          <Checkbox checked disabled label="Two-factor auth" description="Enforced by your organization." />
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

/* ─── Helpers ──────────────────────────────────────────────────────────────── */

function ControlledCheckbox(props: React.ComponentProps<typeof Checkbox>) {
  const [on, setOn] = useState(props.checked ?? false);
  return <Checkbox {...props} checked={on} onChange={setOn} />;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>{title}</div>
      {children}
    </div>
  );
}
