import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmationDialog } from "../../../components/Dialog/ConfirmationDialogs";

const meta: Meta<typeof ConfirmationDialog> = {
  title: "Base Components/Dialog/Confirmation Dialogs/Delete Conversation",
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
  args: { variant: "deleteConversation" },
};

export const CustomContent: Story = {
  args: {
    variant: "deleteConversation",
    title: "Delete Chat with John?",
    description:
      "All messages in this chat will be permanently removed. This cannot be undone.",
  },
};

export const CustomLabels: Story = {
  name: "Custom Labels",
  args: {
    variant: "deleteConversation",
    confirmLabel: "Delete Forever",
    cancelLabel: "Keep Chat",
  },
};

export const Playground: Story = {
  args: {
    variant: "deleteConversation",
    open: true,
  },
  parameters: { docs: { disable: true } },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    confirmLabel: { control: "text" },
    cancelLabel: { control: "text" },
    open: { control: "boolean" },
  },
};
