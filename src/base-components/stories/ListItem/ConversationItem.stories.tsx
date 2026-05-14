import type { Meta, StoryObj } from "@storybook/react";
import { ConversationItem, ConversationItemSkeleton } from "../../components/ListItem";
import { avatarRegistry } from "../../../foundation/tokens/avatars";

const female = avatarRegistry["Female Avatar"];
const male = avatarRegistry["Male Avatar"];
const group = avatarRegistry["Group Avatar"];

const meta: Meta<typeof ConversationItem> = {
  title: "Base Components/List Item/Conversation Item",
  component: ConversationItem,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof ConversationItem>;

const single = (Story: React.ComponentType) => (
  <div
    style={{
      width: 400,
      background: "var(--color-bg-01)",
      border: "1px solid var(--color-border-default)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
    }}
  >
    <Story />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const Default: Story = {
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    timestamp: "4:30 PM",
    messageStatus: "read",
    messageType: "photo",
    messageTypeLabel: true,
    textContent: "Hey, let's catch up later!",
    state: "default",
  },
};

export const Hover: Story = {
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    timestamp: "4:30 PM",
    messageStatus: "read",
    messageType: "photo",
    messageTypeLabel: true,
    textContent: "Hey, let's catch up later!",
    state: "hover",
  },
};

export const Pressed: Story = {
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    timestamp: "4:30 PM",
    messageStatus: "read",
    messageType: "photo",
    messageTypeLabel: true,
    textContent: "Hey, let's catch up later!",
    state: "pressed",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   AVATAR VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const AvatarImage: Story = {
  name: "Avatar — Image",
  decorators: [single],
  args: {
    avatarVariant: "image",
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    timestamp: "4:30 PM",
    messageStatus: "read",
    textContent: "Hey, let's catch up later!",
  },
};

export const AvatarText: Story = {
  name: "Avatar — Text",
  decorators: [single],
  args: {
    avatarVariant: "text",
    avatarText: "GA",
    title: "George Alan",
    timestamp: "4:30 PM",
    messageStatus: "read",
    textContent: "Hey, let's catch up later!",
  },
};

export const AvatarIcon: Story = {
  name: "Avatar — Icon",
  decorators: [single],
  args: {
    avatarVariant: "icon",
    avatarIcon: "smart_toy",
    title: "Assistant",
    timestamp: "4:30 PM",
    textContent: "How can I help you today?",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   STATUS ICON
   ═══════════════════════════════════════════════════════════════════════════ */

export const StatusOnline: Story = {
  name: "Status — Online",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    timestamp: "4:30 PM",
    statusIcon: "online",
    messageStatus: "read",
    textContent: "Hey, let's catch up later!",
  },
};

export const StatusOffline: Story = {
  name: "Status — Offline",
  decorators: [single],
  args: {
    avatarUrl: female[10].imageUrl,
    title: "Olivia Rhye",
    timestamp: "Yesterday",
    statusIcon: "offline",
    textContent: "Got it, thanks!",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   MESSAGE STATUS
   ═══════════════════════════════════════════════════════════════════════════ */

export const StatusSending: Story = {
  name: "Message Status — Sending",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    timestamp: "Now",
    messageStatus: "sending",
    textContent: "On my way!",
  },
};

export const StatusSent: Story = {
  name: "Message Status — Sent",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    timestamp: "4:30 PM",
    messageStatus: "sent",
    textContent: "Sounds great!",
  },
};

export const StatusDelivered: Story = {
  name: "Message Status — Delivered",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    timestamp: "4:30 PM",
    messageStatus: "delivered",
    textContent: "On my way!",
  },
};

export const StatusRead: Story = {
  name: "Message Status — Read",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    timestamp: "4:30 PM",
    messageStatus: "read",
    textContent: "Hey, let's catch up later!",
  },
};

export const StatusError: Story = {
  name: "Message Status — Error",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    timestamp: "4:30 PM",
    messageStatus: "error",
    textContent: "Hey, let's catch up later!",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   MESSAGE TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

export const Typing: Story = {
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    timestamp: "4:30 PM",
    typingIndicator: true,
  },
};

export const ActivityStatus: Story = {
  name: "Activity Status",
  decorators: [single],
  args: {
    avatarUrl: female[10].imageUrl,
    title: "Olivia Rhye",
    timestamp: "Now",
    activityStatus: true,
  },
};

export const WithSenderLabel: Story = {
  name: "With Sender Label",
  decorators: [single],
  args: {
    avatarVariant: "image",
    avatarUrl: group[5].imageUrl,
    title: "Epic Game",
    timestamp: "4:30 PM",
    senderLabel: "John:",
    messageType: "photo",
    messageTypeLabel: true,
    textContent: "Hey, let's catch up later!",
  },
};

export const TextOnly: Story = {
  name: "Text Only",
  decorators: [single],
  args: {
    avatarUrl: female[10].imageUrl,
    title: "Olivia Rhye",
    timestamp: "4:30 PM",
    messageStatus: "read",
    textContent: "Hey, let's catch up later!",
  },
};

export const PhotoMessage: Story = {
  name: "Photo Message",
  decorators: [single],
  args: {
    avatarUrl: female[1].imageUrl,
    title: "Emma Rose",
    timestamp: "9:42 AM",
    messageStatus: "read",
    messageType: "photo",
    messageTypeLabel: true,
  },
};

export const VideoMessage: Story = {
  name: "Video Message",
  decorators: [single],
  args: {
    avatarUrl: female[7].imageUrl,
    title: "Mia Ward",
    timestamp: "Yesterday",
    messageStatus: "read",
    messageType: "video",
    messageTypeLabel: true,
  },
};

export const AudioMessage: Story = {
  name: "Audio Message",
  decorators: [single],
  args: {
    avatarUrl: male[10].imageUrl,
    title: "Michael Scott",
    timestamp: "Mon",
    messageStatus: "delivered",
    messageType: "audio",
    messageTypeLabel: true,
  },
};

export const FileMessage: Story = {
  name: "File Message",
  decorators: [single],
  args: {
    avatarUrl: female[5].imageUrl,
    title: "Jessica Lane",
    timestamp: "Sun",
    messageStatus: "sent",
    messageType: "file",
    messageTypeLabel: true,
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   DATE TYPE
   ═══════════════════════════════════════════════════════════════════════════ */

export const DateTypeTime: Story = {
  name: "Date Type — Time",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    timestamp: "4:30 PM",
    dateType: "time",
    messageStatus: "read",
    textContent: "Hey, let's catch up later!",
  },
};

export const DateTypeDate: Story = {
  name: "Date Type — Date",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    timestamp: "11/09/24",
    dateType: "date",
    messageStatus: "read",
    textContent: "Hey, let's catch up later!",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   CONVERSATION META (KEBAB)
   ═══════════════════════════════════════════════════════════════════════════ */

export const WithConversationMeta: Story = {
  name: "With Conversation Meta",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    timestamp: "4:30 PM",
    messageStatus: "read",
    messageType: "photo",
    messageTypeLabel: true,
    textContent: "Hey, let's catch up later!",
    conversationMeta: true,
    state: "hover",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   SKELETON
   ═══════════════════════════════════════════════════════════════════════════ */

export const SkeletonStart: Story = {
  name: "Skeleton — Start",
  decorators: [single],
  render: () => <ConversationItemSkeleton tone="start" />,
};

export const SkeletonEnd: Story = {
  name: "Skeleton — End",
  decorators: [single],
  render: () => <ConversationItemSkeleton tone="end" />,
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

const Wrap = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
    <div
      style={{
        fontSize: "var(--font-size-1)",
        fontWeight: "var(--font-weight-medium)",
        color: "var(--color-text-tertiary)",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </div>
    <div
      style={{
        background: "var(--color-bg-01)",
        border: "1px solid var(--color-border-default)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  </div>
);

export const AllStates: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ display: "flex", justifyContent: "center", padding: "var(--space-8)" }}>
      <div
        style={{
          width: 400,
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
        }}
      >
        <Wrap label="Default">
          <ConversationItem
            avatarUrl={male[5].imageUrl}
            title="George Alan"
            timestamp="4:30 PM"
            messageStatus="read"
            messageType="photo"
            messageTypeLabel
            textContent="Hey, let's catch up later!"
            state="default"
          />
        </Wrap>
        <Wrap label="Hover">
          <ConversationItem
            avatarUrl={male[5].imageUrl}
            title="George Alan"
            timestamp="4:30 PM"
            messageStatus="read"
            messageType="photo"
            messageTypeLabel
            textContent="Hey, let's catch up later!"
            state="hover"
          />
        </Wrap>
        <Wrap label="Pressed">
          <ConversationItem
            avatarUrl={male[5].imageUrl}
            title="George Alan"
            timestamp="4:30 PM"
            messageStatus="read"
            messageType="photo"
            messageTypeLabel
            textContent="Hey, let's catch up later!"
            state="pressed"
          />
        </Wrap>
        <Wrap label="Typing Indicator">
          <ConversationItem
            avatarUrl={male[5].imageUrl}
            title="George Alan"
            timestamp="Now"
            typingIndicator
          />
        </Wrap>
        <Wrap label="Sender Label (group chat)">
          <ConversationItem
            avatarUrl={group[5].imageUrl}
            title="Epic Game"
            timestamp="4:30 PM"
            senderLabel="John:"
            messageType="photo"
            messageTypeLabel
            textContent="Hey, let's catch up later!"
          />
        </Wrap>
        <Wrap label="Status — Online">
          <ConversationItem
            avatarUrl={male[5].imageUrl}
            title="George Alan"
            timestamp="4:30 PM"
            statusIcon="online"
            messageStatus="read"
            textContent="Hey, let's catch up later!"
          />
        </Wrap>
        <Wrap label="Conversation Meta (kebab)">
          <ConversationItem
            avatarUrl={male[5].imageUrl}
            title="George Alan"
            timestamp="4:30 PM"
            messageStatus="read"
            textContent="Hey, let's catch up later!"
            conversationMeta
            state="hover"
          />
        </Wrap>
        <Wrap label="Skeleton — Start">
          <ConversationItemSkeleton tone="start" />
        </Wrap>
        <Wrap label="Skeleton — End">
          <ConversationItemSkeleton tone="end" />
        </Wrap>
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   PLAYGROUND
   ═══════════════════════════════════════════════════════════════════════════ */

export const Playground: Story = {
  decorators: [single],
  parameters: { docs: { disable: true } },
  args: {
    avatarVariant: "image",
    avatarUrl: male[5].imageUrl,
    avatarIcon: "smart_toy",
    avatarText: "GA",
    statusIcon: "none",
    title: "George Alan",
    timestamp: "4:30 PM",
    dateType: "time",
    messageStatus: "read",
    senderLabel: "",
    messageType: "photo",
    messageTypeLabel: true,
    textContent: "Hey, let's catch up later!",
    typingIndicator: false,
    activityStatus: false,
    state: "default",
    conversationMeta: false,
  },
  argTypes: {
    avatarVariant: { control: "radio", options: ["image", "text", "icon"] },
    avatarUrl: { control: "text" },
    avatarText: { control: "text" },
    avatarIcon: { control: "text" },
    statusIcon: {
      control: "select",
      options: ["none", "online", "offline"],
    },
    title: { control: "text" },
    timestamp: { control: "text" },
    dateType: { control: "radio", options: ["time", "date"] },
    senderLabel: { control: "text" },
    textContent: { control: "text" },
    typingIndicator: { control: "boolean" },
    activityStatus: { control: "boolean" },
    messageTypeLabel: { control: "boolean" },
    conversationMeta: { control: "boolean" },
    messageStatus: {
      control: "select",
      options: ["none", "sending", "sent", "delivered", "read", "error"],
    },
    messageType: {
      control: "select",
      options: ["none", "photo", "video", "audio", "file", "location", "sticker", "gif", "poll"],
    },
    state: { control: "radio", options: ["default", "hover", "pressed"] },
  },
};
