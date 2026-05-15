import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmationDialog } from "../../../components/Dialog/ConfirmationDialogs";

const meta: Meta<typeof ConfirmationDialog> = {
  title: "Base Components/Dialog/Confirmation Dialogs/Delete User",
  component: ConfirmationDialog,
  parameters: { layout: "centered" },
  decorators: [(Story) => <Inline><Story /></Inline>],
};
export default meta;
type Story = StoryObj<typeof ConfirmationDialog>;

function Inline({ children }: { children: React.ReactNode }) {
  return (
    <div className="dialog-story-inline">
      <style>{`.dialog-story-inline .confirmation-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }`}</style>
      {children}
    </div>
  );
}

export const Default: Story = {
  args: { variant: "deleteUser" },
};

export const CustomTitle: Story = {
  name: "Custom Title",
  args: {
    variant: "deleteUser",
    title: "Delete @jane_smith?",
  },
};

export const CustomDescription: Story = {
  name: "Custom Description",
  args: {
    variant: "deleteUser",
    description:
      "This action will permanently delete the user account and all associated data including messages, media, and group memberships.",
  },
};

export const CustomLabels: Story = {
  name: "Custom Labels",
  args: {
    variant: "deleteUser",
    confirmLabel: "Delete Account",
    cancelLabel: "Keep Account",
  },
};

export const Playground: Story = {
  args: { variant: "deleteUser", open: true },
  parameters: { docs: { disable: true } },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    confirmLabel: { control: "text" },
    cancelLabel: { control: "text" },
    open: { control: "boolean" },
  },
};
