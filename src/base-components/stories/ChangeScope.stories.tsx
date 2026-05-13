import type { Meta, StoryObj } from "@storybook/react";
import { ChangeScope } from "../components/ChangeScope";

/**
 * A dialog for changing user roles/scope within a group. Presents a radio-button
 * list of available roles with a save/cancel action pair.
 *
 * **Structure (from Figma node 4119:42769):**
 * - Container: 400px, `--radius-3xl` (20px), shadow-lg, border `--color-neutral-100`
 * - Padding: 24px top/sides, 12px bottom
 * - Icon: 80px circle, `--color-neutral-50` bg, primary-colored SVG (ep-600)
 * - Title: 20px, weight 500, line-height 1.2, `--color-neutral-900`
 * - Description: 14px, weight 400, line-height 1.2, `--color-neutral-500`
 * - Role list: bordered container with shadow, 48px items, radio buttons
 * - Radio: 20px circle, border `--color-neutral-200`, selected: `--color-ep-600` border + 10px dot
 * - Selected item: `--color-neutral-100` background, label in `--color-neutral-900`
 * - Unselected: white background, label in `--color-neutral-500`
 * - Cancel button: white bg, border `--color-neutral-300`
 * - Save button: `--color-ep-600` bg, white text
 */
const meta: Meta<typeof ChangeScope> = {
  title: "Base Components/Change Scope",
  component: ChangeScope,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    selectedRole: { control: "select", options: ["owner", "admin", "moderator", "participant"], description: "Currently selected role." },
    roles: { control: false, description: "Available roles to choose from." },
    open: { control: "boolean", description: "Whether the dialog is visible." },
    onCancel: { control: false },
    onSave: { control: false },
  },
};
export default meta;

/* ─── Stories ─── */

/** Default state with Moderator selected — exact match to Figma. */
export const Default: StoryObj<typeof ChangeScope> = {
  args: {
    selectedRole: "moderator",
    open: true,
  },
};

/** Owner selected. */
export const OwnerSelected: StoryObj<typeof ChangeScope> = {
  args: {
    selectedRole: "owner",
    open: true,
  },
};

/** Admin selected. */
export const AdminSelected: StoryObj<typeof ChangeScope> = {
  args: {
    selectedRole: "admin",
    open: true,
  },
};

/** Participant selected. */
export const ParticipantSelected: StoryObj<typeof ChangeScope> = {
  args: {
    selectedRole: "participant",
    open: true,
  },
};

/** Limited roles — only Admin and Participant available. */
export const LimitedRoles: StoryObj<typeof ChangeScope> = {
  args: {
    selectedRole: "admin",
    roles: ["admin", "participant"],
    open: true,
  },
};

/** All role selections side by side. */
export const AllStates: StoryObj = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ padding: 40, display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start" }}>
      <ChangeScope selectedRole="owner" />
      <ChangeScope selectedRole="moderator" />
    </div>
  ),
};

/** Interactive playground. */
export const Playground: StoryObj<typeof ChangeScope> = {
  args: {
    selectedRole: "moderator",
    open: true,
  },
  parameters: { docs: { disable: true } },
};
