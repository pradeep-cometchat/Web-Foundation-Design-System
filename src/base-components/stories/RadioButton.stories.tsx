import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "../components/RadioButton";
import type { RadioButtonSize } from "../components/RadioButton";

/**
 * A single-select option within a group — circle with dot when selected.
 *
 * **Sizes:** sm (16px), md (20px).
 *
 * **States:** Default, Hover, Focus, Disabled, Checked.
 *
 * **Text:** Optional label (16px/500) and description (14px/400).
 *
 * Uses foundation tokens: `--color-primary`, `--color-ep-700`, `--color-neutral-lm-*`,
 * `--radius-full` (circle), `--focus-ring-xs`.
 */
const meta: Meta<typeof RadioButton> = {
  title: "Base Components/Radio Button",
  component: RadioButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["sm", "md"] satisfies RadioButtonSize[], table: { category: "Appearance" } },
    checked: { control: "boolean", table: { category: "State" } },
    label: { control: "text", table: { category: "Content" } },
    description: { control: "text", table: { category: "Content" } },
    disabled: { control: "boolean", table: { category: "State" } },
  },
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

/** All radio states. */
export const RadioStates: Story = {
  name: "States",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
      <Section title="Unchecked">
        <div style={{ display: "flex", gap: "var(--space-6)" }}>
          <RadioButton size="sm" />
          <RadioButton size="md" />
          <RadioButton size="md" disabled />
        </div>
      </Section>
      <Section title="Checked">
        <div style={{ display: "flex", gap: "var(--space-6)" }}>
          <RadioButton size="sm" checked />
          <RadioButton size="md" checked />
          <RadioButton size="md" checked disabled />
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
          <RadioButton size="sm" />
          <RadioButton size="sm" checked />
          <RadioButton size="sm" disabled />
          <RadioButton size="sm" checked disabled />
        </div>
      </Section>
      <Section title="Medium (20px)">
        <div style={{ display: "flex", gap: "var(--space-6)" }}>
          <RadioButton size="md" />
          <RadioButton size="md" checked />
          <RadioButton size="md" disabled />
          <RadioButton size="md" checked disabled />
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
      <RadioGroup />
    </div>
  ),
};

/** Radio group example — real-world usage. */
export const RadioGroupExample: Story = {
  name: "Radio Group",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", maxWidth: 400 }}>
      <Section title="Notification preference">
        <NotificationGroup />
      </Section>
      <Section title="Plan selection">
        <PlanGroup />
      </Section>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure. */
export const Playground: Story = {
  args: {
    size: "md",
    checked: false,
    label: "Option A",
    description: "First option description.",
    disabled: false,
  },
  parameters: { docs: { disable: true } },
};

/* ─── Helpers ──────────────────────────────────────────────────────────────── */

function RadioGroup() {
  const [selected, setSelected] = useState("a");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
      <RadioButton checked={selected === "a"} onChange={() => setSelected("a")} label="Option A" description="First option description." />
      <RadioButton checked={selected === "b"} onChange={() => setSelected("b")} label="Option B" description="Second option description." />
      <RadioButton checked={selected === "c"} onChange={() => setSelected("c")} label="Option C" description="Third option description." />
    </div>
  );
}

function NotificationGroup() {
  const [selected, setSelected] = useState("all");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
      <RadioButton checked={selected === "all"} onChange={() => setSelected("all")} label="All notifications" description="Get notified for every message." />
      <RadioButton checked={selected === "mentions"} onChange={() => setSelected("mentions")} label="Mentions only" description="Only when someone mentions you." />
      <RadioButton checked={selected === "none"} onChange={() => setSelected("none")} label="None" description="Mute all notifications." />
    </div>
  );
}

function PlanGroup() {
  const [selected, setSelected] = useState("pro");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
      <RadioButton checked={selected === "free"} onChange={() => setSelected("free")} label="Free" description="Basic features for individuals." />
      <RadioButton checked={selected === "pro"} onChange={() => setSelected("pro")} label="Pro" description="Advanced features for teams." />
      <RadioButton checked={selected === "enterprise"} onChange={() => setSelected("enterprise")} label="Enterprise" description="Custom solutions for large organizations." />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>{title}</div>
      {children}
    </div>
  );
}
