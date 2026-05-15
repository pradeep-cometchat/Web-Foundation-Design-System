import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmationDialog } from "../../../components/Dialog/ConfirmationDialogs";

const meta: Meta<typeof ConfirmationDialog> = {
  title: "Base Components/Dialog/Confirmation Dialogs/Delete And Exit",
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
  args: { variant: "deleteAndExit" },
};

export const CustomTitle: Story = {
  name: "Custom Title",
  args: {
    variant: "deleteAndExit",
    title: "Delete and Exit Marketing Chat?",
  },
};

export const CustomDescription: Story = {
  name: "Custom Description",
  args: {
    variant: "deleteAndExit",
    description:
      "All messages will be permanently deleted and you will be removed from this group. This action cannot be undone.",
  },
};

export const CustomLabels: Story = {
  name: "Custom Labels",
  args: {
    variant: "deleteAndExit",
    confirmLabel: "Delete & Exit",
    cancelLabel: "Cancel",
  },
};

export const Playground: Story = {
  args: { variant: "deleteAndExit", open: true },
  parameters: { docs: { disable: true } },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    confirmLabel: { control: "text" },
    cancelLabel: { control: "text" },
    open: { control: "boolean" },
  },
};
