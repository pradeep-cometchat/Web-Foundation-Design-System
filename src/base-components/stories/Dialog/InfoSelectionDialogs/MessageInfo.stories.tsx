import type { Meta, StoryObj } from "@storybook/react";
import { InfoSelectionDialog } from "../../../components/Dialog/InfoSelectionDialogs";

const meta: Meta<typeof InfoSelectionDialog> = {
  title: "Base Components/Dialog/Info Selection Dialogs/Message Info",
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
    variant: "messageInfo",
    messagePreview: "Hey! Are we still meeting tomorrow at 3pm?",
    messageInfoItems: [
      { label: "Delivered", timestamp: "Today, 2:45 PM" },
      { label: "Read", timestamp: "Today, 2:47 PM" },
    ],
  },
};

export const Unread: Story = {
  args: {
    variant: "messageInfo",
    messagePreview: "This message hasn't been read yet.",
    messageInfoItems: [
      { label: "Delivered", timestamp: "Today, 10:30 AM" },
      { label: "Read", timestamp: "—" },
    ],
  },
};

export const Playground: Story = {
  args: {
    variant: "messageInfo",
    open: true,
    messagePreview: "Hello! How are you?",
    messageInfoItems: [
      { label: "Delivered", timestamp: "Today, 3:00 PM" },
      { label: "Read", timestamp: "Today, 3:02 PM" },
    ],
  },
  parameters: { docs: { disable: true } },
  argTypes: {
    open: { control: "boolean" },
    messagePreview: { control: "text" },
  },
};
