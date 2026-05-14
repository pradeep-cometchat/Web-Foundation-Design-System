import type { Meta, StoryObj } from "@storybook/react";
import { InfoSelectionDialog } from "../../../components/Dialog/InfoSelectionDialogs";

const meta: Meta<typeof InfoSelectionDialog> = {
  title: "Base Components/Dialog/Info Selection Dialogs/Translate Alert",
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
    alertTitle: "Message Already in Selected Language",
    alertDescription: "Selected language for translation is similar to the language of the original message.",
    alertButtonLabel: "Understood",
    alertIcon: "translate",
  },
};

export const Playground: Story = {
  args: {
    variant: "alert",
    alertTitle: "Message Already in Selected Language",
    alertDescription: "Selected language for translation is similar to the language of the original message.",
    alertButtonLabel: "Understood",
    alertIcon: "translate",
    open: true,
  },
  parameters: { docs: { disable: true } },
  argTypes: {
    alertTitle: { control: "text" },
    alertDescription: { control: "text" },
    alertButtonLabel: { control: "text" },
    alertIcon: { control: "select", options: ["block", "warning", "info", "error", "translate"] },
    open: { control: "boolean" },
  },
};
