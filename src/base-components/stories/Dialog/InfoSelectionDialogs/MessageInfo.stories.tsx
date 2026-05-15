import type { Meta, StoryObj } from "@storybook/react";
import { InfoSelectionDialog } from "../../../components/Dialog/InfoSelectionDialogs";
import { avatarRegistry } from "../../../../foundation/tokens/avatars";

const female = avatarRegistry["Female Avatar"];
const male = avatarRegistry["Male Avatar"];

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
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [
      { label: "Read", timestamp: "24/8/2024, 5:02 pm" },
      { label: "Delivered", timestamp: "24/8/2024, 4:56 pm" },
    ],
  },
};

export const Unread: Story = {
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [
      { label: "Read", timestamp: "---" },
      { label: "Delivered", timestamp: "---" },
    ],
  },
};

export const DeliveredOnly: Story = {
  name: "Delivered Only",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [
      { label: "Read", timestamp: "---" },
      { label: "Delivered", timestamp: "24/8/2024, 4:56 pm" },
    ],
  },
};

export const Error: Story = {
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    messageInfoError: "Looks like something went wrong.\nPlease try again.",
  },
};

export const GroupMessageInfo: Story = {
  name: "Group Message Info",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    groupMessageInfoUsers: [
      {
        name: "Andrew Joseph",
        avatar: male[6].imageUrl,
        readTimestamp: "22 Apr, 01:36 pm",
        deliveredTimestamp: "22 Apr, 12:15 pm",
      },
      {
        name: "Nancy Grace",
        avatar: female[8].imageUrl,
        readTimestamp: "28 Apr, 01:51 pm",
        deliveredTimestamp: "28 Apr, 01:51 pm",
      },
      {
        name: "Susan Marie",
        avatar: female[11].imageUrl,
        readTimestamp: "05 May, 08:35 pm",
        deliveredTimestamp: "05 May, 08:35 pm",
      },
    ],
  },
};

export const GroupPartiallyRead: Story = {
  name: "Group — Partially Read",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    groupMessageInfoUsers: [
      {
        name: "Andrew Joseph",
        avatar: male[6].imageUrl,
        readTimestamp: "22 Apr, 01:36 pm",
        deliveredTimestamp: "22 Apr, 12:15 pm",
      },
      {
        name: "Nancy Grace",
        avatar: female[8].imageUrl,
        readTimestamp: "---",
        deliveredTimestamp: "28 Apr, 01:51 pm",
      },
      {
        name: "Susan Marie",
        avatar: female[11].imageUrl,
        readTimestamp: "---",
        deliveredTimestamp: "05 May, 08:35 pm",
      },
    ],
  },
};

export const GroupUnread: Story = {
  name: "Group — Unread",
  args: {
    variant: "messageInfo",
    messagePreview: "Thanks! Looks good.",
    groupMessageInfoUsers: [
      {
        name: "Andrew Joseph",
        avatar: male[6].imageUrl,
        readTimestamp: "---",
        deliveredTimestamp: "22 Apr, 12:15 pm",
      },
      {
        name: "Nancy Grace",
        avatar: female[8].imageUrl,
        readTimestamp: "---",
        deliveredTimestamp: "28 Apr, 01:51 pm",
      },
      {
        name: "Susan Marie",
        avatar: female[11].imageUrl,
        readTimestamp: "---",
        deliveredTimestamp: "---",
      },
    ],
  },
};

export const Playground: Story = {
  args: {
    variant: "messageInfo",
    open: true,
    messagePreview: "Thanks! Looks good.",
    messageInfoItems: [
      { label: "Read", timestamp: "24/8/2024, 5:02 pm" },
      { label: "Delivered", timestamp: "24/8/2024, 4:56 pm" },
    ],
    messageInfoError: "",
  },
  parameters: { docs: { disable: true } },
  argTypes: {
    open: { control: "boolean" },
    messagePreview: { control: "text" },
    messageInfoError: { control: "text" },
  },
};
