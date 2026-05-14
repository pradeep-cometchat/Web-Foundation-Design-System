import type { Meta, StoryObj } from "@storybook/react";
import { ChangeScope } from "../../../components/ChangeScope";

const meta: Meta<typeof ChangeScope> = {
  title: "Base Components/Dialog/Info Selection Dialogs/Change Scope",
  component: ChangeScope,
  parameters: { layout: "centered" },
  argTypes: {
    selectedRole: { control: "select", options: ["owner", "admin", "moderator", "participant"] },
    open: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof ChangeScope>;

export const Default: Story = {
  args: {
    selectedRole: "moderator",
    open: true,
  },
};

export const OwnerSelected: Story = {
  args: {
    selectedRole: "owner",
    open: true,
  },
};

export const AdminSelected: Story = {
  args: {
    selectedRole: "admin",
    open: true,
  },
};

export const ParticipantSelected: Story = {
  args: {
    selectedRole: "participant",
    open: true,
  },
};

export const LimitedRoles: Story = {
  name: "Limited Roles (Admin & Participant only)",
  args: {
    selectedRole: "admin",
    roles: ["admin", "participant"],
    open: true,
  },
};

export const Playground: Story = {
  args: {
    selectedRole: "moderator",
    open: true,
  },
  parameters: { docs: { disable: true } },
};
