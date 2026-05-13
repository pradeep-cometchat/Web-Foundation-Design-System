import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Base Components/Popover",
  tags: ["!autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <div style={{ padding: 40, textAlign: "center", color: "var(--color-neutral-600, #535862)" }}>
      <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: "var(--color-neutral-900, #181d27)" }}>Popover</h2>
      <p style={{ marginTop: 8, fontSize: 14 }}>Floating content container with configurable placement and triggers.</p>
      <p style={{ marginTop: 16, fontSize: 12, color: "var(--color-neutral-400, #a4a7ae)" }}>Implementation coming soon</p>
    </div>
  ),
};
