import type { Meta, StoryObj } from "@storybook/react";
import { CallItem, CallItemSkeleton } from "../../components/ListItem";
import { avatarRegistry } from "../../../foundation/tokens/avatars";

const female = avatarRegistry["Female Avatar"];
const male = avatarRegistry["Male Avatar"];

const meta: Meta<typeof CallItem> = {
  title: "Base Components/List Item/Call Item",
  component: CallItem,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof CallItem>;

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
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
    state: "default",
  },
};

export const Hover: Story = {
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
    state: "hover",
  },
};

export const Pressed: Story = {
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
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
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
  },
};

export const AvatarText: Story = {
  name: "Avatar — Text",
  decorators: [single],
  args: {
    avatarVariant: "text",
    avatarText: "GA",
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
  },
};

export const AvatarIcon: Story = {
  name: "Avatar — Icon",
  decorators: [single],
  args: {
    avatarVariant: "icon",
    avatarIcon: "smart_toy",
    title: "Assistant",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
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
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
  },
};

export const StatusOffline: Story = {
  name: "Status — Offline",
  decorators: [single],
  args: {
    avatarUrl: female[10].imageUrl,
    title: "Olivia Rhye",
    statusIcon: "offline",
    direction: "incoming",
    type: "voice",
    dateTime: "Yesterday, 9:00 pm",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   CALL META TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

export const Incoming: Story = {
  decorators: [single],
  args: {
    avatarUrl: female[10].imageUrl,
    title: "Olivia Rhye",
    direction: "incoming",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
  },
};

export const Outgoing: Story = {
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
  },
};

export const Declined: Story = {
  decorators: [single],
  args: {
    avatarUrl: female[5].imageUrl,
    title: "Jessica Lane",
    direction: "declined",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
  },
};

export const Missed: Story = {
  decorators: [single],
  args: {
    avatarUrl: female[1].imageUrl,
    title: "Emma Rose",
    direction: "missed",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   CALL ACTION TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

export const VoiceCall: Story = {
  name: "Action — Voice",
  decorators: [single],
  args: {
    avatarUrl: male[5].imageUrl,
    title: "George Alan",
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
  },
};

export const VideoCall: Story = {
  name: "Action — Video",
  decorators: [single],
  args: {
    avatarUrl: female[7].imageUrl,
    title: "Mia Ward",
    direction: "outgoing",
    type: "video",
    dateTime: "11 September, 8:14 pm",
  },
};

export const MissedVideoCall: Story = {
  name: "Missed Video Call",
  decorators: [single],
  args: {
    avatarUrl: female[5].imageUrl,
    title: "Jessica Lane",
    direction: "missed",
    type: "video",
    dateTime: "11 September, 8:14 pm",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   SKELETON
   ═══════════════════════════════════════════════════════════════════════════ */

export const SkeletonStart: Story = {
  name: "Skeleton — Start",
  decorators: [single],
  render: () => <CallItemSkeleton tone="start" />,
};

export const SkeletonEnd: Story = {
  name: "Skeleton — End",
  decorators: [single],
  render: () => <CallItemSkeleton tone="end" />,
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
          <CallItem
            avatarUrl={male[5].imageUrl}
            title="George Alan"
            direction="outgoing"
            type="voice"
            dateTime="11 September, 8:14 pm"
            state="default"
          />
        </Wrap>
        <Wrap label="Hover">
          <CallItem
            avatarUrl={male[5].imageUrl}
            title="George Alan"
            direction="outgoing"
            type="voice"
            dateTime="11 September, 8:14 pm"
            state="hover"
          />
        </Wrap>
        <Wrap label="Pressed">
          <CallItem
            avatarUrl={male[5].imageUrl}
            title="George Alan"
            direction="outgoing"
            type="voice"
            dateTime="11 September, 8:14 pm"
            state="pressed"
          />
        </Wrap>
        <Wrap label="Incoming">
          <CallItem
            avatarUrl={female[10].imageUrl}
            title="Olivia Rhye"
            direction="incoming"
            type="voice"
            dateTime="11 September, 8:14 pm"
          />
        </Wrap>
        <Wrap label="Declined">
          <CallItem
            avatarUrl={female[5].imageUrl}
            title="Jessica Lane"
            direction="declined"
            type="voice"
            dateTime="11 September, 8:14 pm"
          />
        </Wrap>
        <Wrap label="Missed">
          <CallItem
            avatarUrl={female[1].imageUrl}
            title="Emma Rose"
            direction="missed"
            type="voice"
            dateTime="11 September, 8:14 pm"
          />
        </Wrap>
        <Wrap label="Video Action">
          <CallItem
            avatarUrl={female[7].imageUrl}
            title="Mia Ward"
            direction="outgoing"
            type="video"
            dateTime="11 September, 8:14 pm"
          />
        </Wrap>
        <Wrap label="Status — Online">
          <CallItem
            avatarUrl={male[5].imageUrl}
            title="George Alan"
            statusIcon="online"
            direction="outgoing"
            type="voice"
            dateTime="11 September, 8:14 pm"
          />
        </Wrap>
        <Wrap label="Skeleton — Start">
          <CallItemSkeleton tone="start" />
        </Wrap>
        <Wrap label="Skeleton — End">
          <CallItemSkeleton tone="end" />
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
    direction: "outgoing",
    type: "voice",
    dateTime: "11 September, 8:14 pm",
    state: "default",
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
    dateTime: { control: "text" },
    direction: {
      control: "radio",
      options: ["incoming", "outgoing", "declined", "missed"],
    },
    type: { control: "radio", options: ["voice", "video"] },
    state: { control: "radio", options: ["default", "hover", "pressed"] },
  },
};
