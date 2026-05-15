import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmationDialog } from "../../../components/Dialog/ConfirmationDialogs";

const meta: Meta<typeof ConfirmationDialog> = {
  title: "Base Components/Dialog/Confirmation Dialogs/Transfer Ownership",
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
  args: { variant: "transferOwnership" },
};

export const CustomTitle: Story = {
  name: "Custom Title",
  args: {
    variant: "transferOwnership",
    title: "Transfer Ownership to @alex_admin?",
  },
};

export const CustomDescription: Story = {
  name: "Custom Description",
  args: {
    variant: "transferOwnership",
    description:
      "You will lose all owner privileges and become a regular member. The new owner will have full control over group settings and members.",
  },
};

export const CustomLabels: Story = {
  name: "Custom Labels",
  args: {
    variant: "transferOwnership",
    confirmLabel: "Transfer Now",
    cancelLabel: "Keep Ownership",
  },
};

export const Playground: Story = {
  args: { variant: "transferOwnership", open: true },
  parameters: { docs: { disable: true } },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    confirmLabel: { control: "text" },
    cancelLabel: { control: "text" },
    open: { control: "boolean" },
  },
};
