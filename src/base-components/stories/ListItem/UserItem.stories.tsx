import type { Meta, StoryObj } from "@storybook/react";
import { UserItem, UserItemDivider, UserItemSkeleton } from "../../components/ListItem";
import { avatarRegistry } from "../../../foundation/tokens/avatars";

const female = avatarRegistry["Female Avatar"];
const male = avatarRegistry["Male Avatar"];

const meta: Meta<typeof UserItem> = {
  title: "Base Components/List Item/User Item",
  component: UserItem,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof UserItem>;

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
    state: "default",
  },
};

export const Hover: Story = {
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    state: "hover",
  },
};

export const Pressed: Story = {
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
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
  },
};

export const AvatarText: Story = {
  name: "Avatar — Text",
  decorators: [single],
  args: {
    avatarVariant: "text",
    avatarText: "GA",
    title: "George Alan",
  },
};

export const AvatarIcon: Story = {
  name: "Avatar — Icon",
  decorators: [single],
  args: {
    avatarVariant: "icon",
    avatarIcon: "smart_toy",
    title: "Assistant",
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
    statusIcon: "online",
  },
};

export const StatusOffline: Story = {
  name: "Status — Offline",
  decorators: [single],
  args: {
    avatarUrl: female[10].imageUrl,
    title: "Olivia Rhye",
    statusIcon: "offline",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   WITH SUBTITLE
   ═══════════════════════════════════════════════════════════════════════════ */

export const WithTextContent: Story = {
  name: "With Text Content",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    textContent: "Hey, let's catch up later!",
  },
};

export const WithMessageStatus: Story = {
  name: "With Message Status",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    messageStatus: "read",
    textContent: "Hey, let's catch up later!",
  },
};

export const WithMessageType: Story = {
  name: "With Message Type",
  decorators: [single],
  args: {
    avatarUrl: female[1].imageUrl,
    title: "Emma Rose",
    messageType: "photo",
    messageTypeLabel: true,
  },
};

export const FullPreview: Story = {
  name: "Full Preview",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    statusIcon: "online",
    messageStatus: "read",
    messageType: "photo",
    messageTypeLabel: true,
    textContent: "Hey, let's catch up later!",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   DIVIDER & SKELETON
   ═══════════════════════════════════════════════════════════════════════════ */

export const Divider: Story = {
  decorators: [single],
  render: () => <UserItemDivider label="A" />,
};

export const SkeletonStart: Story = {
  name: "Skeleton — Start",
  decorators: [single],
  render: () => <UserItemSkeleton tone="start" />,
};

export const SkeletonEnd: Story = {
  name: "Skeleton — End",
  decorators: [single],
  render: () => <UserItemSkeleton tone="end" />,
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
          <UserItem avatarUrl={male[5].imageUrl} title="George Alan" state="default" />
        </Wrap>
        <Wrap label="Hover">
          <UserItem avatarUrl={male[5].imageUrl} title="George Alan" state="hover" />
        </Wrap>
        <Wrap label="Pressed">
          <UserItem avatarUrl={male[5].imageUrl} title="George Alan" state="pressed" />
        </Wrap>
        <Wrap label="Status — Online">
          <UserItem avatarUrl={male[5].imageUrl} title="George Alan" statusIcon="online" />
        </Wrap>
        <Wrap label="With Text Content">
          <UserItem
            avatarUrl={male[5].imageUrl}
            title="George Alan"
            textContent="Hey, let's catch up later!"
          />
        </Wrap>
        <Wrap label="Full Preview">
          <UserItem
            avatarUrl={male[5].imageUrl}
            title="George Alan"
            statusIcon="online"
            messageStatus="read"
            messageType="photo"
            messageTypeLabel
            textContent="Hey, let's catch up later!"
          />
        </Wrap>
        <Wrap label="Skeleton — Start">
          <UserItemSkeleton tone="start" />
        </Wrap>
        <Wrap label="Skeleton — End">
          <UserItemSkeleton tone="end" />
        </Wrap>
        <Wrap label="Divider">
          <UserItemDivider label="A" />
        </Wrap>
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALPHABET LIST EXAMPLE
   ═══════════════════════════════════════════════════════════════════════════ */

export const AlphabetList: Story = {
  name: "Alphabet List",
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ display: "flex", justifyContent: "center", padding: "var(--space-8)" }}>
      <div
        style={{
          width: 400,
          background: "var(--color-bg-01)",
          border: "1px solid var(--color-border-default)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
        }}
      >
        <UserItemDivider label="A" />
        <UserItem avatarUrl={female[6].imageUrl} title="Anna Lane" />
        <UserItem avatarUrl={male[0].imageUrl} title="Aaron Scott" />
        <UserItemDivider label="B" />
        <UserItem avatarUrl={male[1].imageUrl} title="Brian Michael" />
        <UserItemDivider label="E" />
        <UserItem avatarUrl={female[1].imageUrl} title="Emma Rose" />
        <UserItemDivider label="G" />
        <UserItem avatarUrl={male[5].imageUrl} title="George Alan" />
        <UserItemDivider label="O" />
        <UserItem avatarUrl={female[10].imageUrl} title="Olivia Rhye" />
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
    textContent: "",
    messageStatus: "none",
    messageType: "none",
    messageTypeLabel: false,
    state: "default",
  },
  argTypes: {
    avatarVariant: { control: "radio", options: ["image", "text", "icon"] },
    avatarUrl: { control: "text" },
    avatarText: { control: "text" },
    avatarIcon: { control: "text" },
    statusIcon: { control: "select", options: ["none", "online", "offline"] },
    title: { control: "text" },
    textContent: { control: "text" },
    messageStatus: {
      control: "select",
      options: ["none", "sending", "sent", "delivered", "read", "error"],
    },
    messageType: {
      control: "select",
      options: ["none", "photo", "video", "audio", "file", "location", "sticker", "gif", "poll"],
    },
    messageTypeLabel: { control: "boolean" },
    state: { control: "radio", options: ["default", "hover", "pressed"] },
  },
};
