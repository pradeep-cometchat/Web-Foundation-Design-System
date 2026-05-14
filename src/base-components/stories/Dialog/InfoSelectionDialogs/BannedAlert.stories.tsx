import type { Meta, StoryObj } from "@storybook/react";
import { InfoSelectionDialog } from "../../../components/Dialog/InfoSelectionDialogs";

const meta: Meta<typeof InfoSelectionDialog> = {
  title: "Base Components/Dialog/Info Selection Dialogs/Banned Alert",
  component: InfoSelectionDialog,
  parameters: { layout: "centered" },
  decorators: [(Story) => <Inline><Story /></Inline>],
};
export default meta;
type Story = StoryObj<typeof InfoSelectionDialog>;

function Inline({ children }: { children: React.ReactNode }) {
  return (
    <div className="dialog-story-inline">
      <style>{`.dialog-story-inline .info-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }`}</style>
      {children}
    </div>
  );
}

export const Default: Story = {
  args: {
    variant: "alert",
    alertTitle: "You are no longer part of the group",
    alertDescription: "You have been banned from this group by the administrator.",
    alertButtonLabel: "Understood",
    alertIcon: "block",
  },
};

export const KickedFromGroup: Story = {
  args: {
    variant: "alert",
    alertTitle: "You have been removed",
    alertDescription: "You have been kicked from this group by the administrator.",
    alertButtonLabel: "Understood",
    alertIcon: "block",
  },
};

export const Playground: Story = {
  args: {
    variant: "alert",
    alertTitle: "You are no longer part of the group",
    alertDescription: "You have been banned from this group by the administrator.",
    alertButtonLabel: "Understood",
    alertIcon: "block",
    open: true,
  },
  parameters: { docs: { disable: true } },
  argTypes: {
    alertTitle: { control: "text" },
    alertDescription: { control: "text" },
    alertButtonLabel: { control: "text" },
    alertIcon: { control: "select", options: ["block", "warning", "info", "error"] },
    open: { control: "boolean" },
  },
};
