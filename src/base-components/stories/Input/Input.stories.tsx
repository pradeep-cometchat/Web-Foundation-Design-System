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
