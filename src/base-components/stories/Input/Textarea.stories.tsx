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
