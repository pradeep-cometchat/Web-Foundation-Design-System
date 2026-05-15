import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmationDialog } from "../../../components/Dialog/ConfirmationDialogs";

const meta: Meta<typeof ConfirmationDialog> = {
  title: "Base Components/Dialog/Confirmation Dialogs/Leave Group",
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
  args: { variant: "leaveGroup" },
};

export const CustomTitle: Story = {
  name: "Custom Title",
  args: {
    variant: "leaveGroup",
    title: "Leave Project Alpha?",
  },
};

export const CustomDescription: Story = {
  name: "Custom Description",
  args: {
    variant: "leaveGroup",
    description:
      "You will no longer receive messages from this group. You can rejoin later if the group is public or if you receive a new invite.",
  },
};

export const CustomLabels: Story = {
  name: "Custom Labels",
  args: {
    variant: "leaveGroup",
    confirmLabel: "Leave Group",
    cancelLabel: "Stay",
  },
};

export const Playground: Story = {
  args: { variant: "leaveGroup", open: true },
  parameters: { docs: { disable: true } },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    confirmLabel: { control: "text" },
    cancelLabel: { control: "text" },
    open: { control: "boolean" },
  },
};
