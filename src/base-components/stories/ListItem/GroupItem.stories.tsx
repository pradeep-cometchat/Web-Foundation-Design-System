import type { Meta, StoryObj } from "@storybook/react";
import { GroupItem, GroupItemSkeleton } from "../../components/ListItem";
import { avatarRegistry } from "../../../foundation/tokens/avatars";

const group = avatarRegistry["Group Avatar"];

const meta: Meta<typeof GroupItem> = {
  title: "Base Components/List Item/Group Item",
  component: GroupItem,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof GroupItem>;

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
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
    state: "default",
  },
};

export const Hover: Story = {
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
    state: "hover",
  },
};

export const Pressed: Story = {
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
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
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
  },
};

export const AvatarText: Story = {
  name: "Avatar — Text",
  decorators: [single],
  args: {
    avatarVariant: "text",
    avatarText: "AD",
    title: "Artistic Design",
    description: "24 Members",
  },
};

export const AvatarIcon: Story = {
  name: "Avatar — Icon",
  decorators: [single],
  args: {
    avatarVariant: "icon",
    avatarIcon: "group",
    title: "Artistic Design",
    description: "24 Members",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   STATUS ICON
   ═══════════════════════════════════════════════════════════════════════════ */

export const StatusOnline: Story = {
  name: "Status — Online",
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Artistic Design",
    description: "24 Members",
    statusIcon: "online",
  },
};

export const StatusOffline: Story = {
  name: "Status — Offline",
  decorators: [single],
  args: {
    avatarUrl: group[1].imageUrl,
    title: "Bright Mind",
    description: "12 Members",
    statusIcon: "offline",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   SKELETON
   ═══════════════════════════════════════════════════════════════════════════ */

export const SkeletonStart: Story = {
  name: "Skeleton — Start",
  decorators: [single],
  render: () => <GroupItemSkeleton tone="start" />,
};

export const SkeletonEnd: Story = {
  name: "Skeleton — End",
  decorators: [single],
  render: () => <GroupItemSkeleton tone="end" />,
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
          <GroupItem
            avatarUrl={group[5].imageUrl}
            title="Artistic Design"
            description="24 Members"
            state="default"
          />
        </Wrap>
        <Wrap label="Hover">
          <GroupItem
            avatarUrl={group[5].imageUrl}
            title="Artistic Design"
            description="24 Members"
            state="hover"
          />
        </Wrap>
        <Wrap label="Pressed">
          <GroupItem
            avatarUrl={group[5].imageUrl}
            title="Artistic Design"
            description="24 Members"
            state="pressed"
          />
        </Wrap>
        <Wrap label="Skeleton — Start">
          <GroupItemSkeleton tone="start" />
        </Wrap>
        <Wrap label="Skeleton — End">
          <GroupItemSkeleton tone="end" />
        </Wrap>
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   GROUP LIST EXAMPLE
   ═══════════════════════════════════════════════════════════════════════════ */

export const GroupList: Story = {
  name: "Group List",
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
        <GroupItem avatarUrl={group[5].imageUrl} title="Artistic Design" description="24 Members" />
        <GroupItem avatarUrl={group[1].imageUrl} title="Bright Mind" description="12 Members" />
        <GroupItem
          avatarUrl={group[2].imageUrl}
          title="Code Craze"
          description="56 Members"
          state="hover"
        />
        <GroupItem
          avatarUrl={group[7].imageUrl}
          title="Health Haven"
          description="1,024 Members"
          state="pressed"
        />
        <GroupItemSkeleton tone="start" />
        <GroupItemSkeleton tone="end" />
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
    avatarUrl: group[5].imageUrl,
    avatarIcon: "group",
    avatarText: "AD",
    statusIcon: "none",
    title: "Artistic Design",
    description: "24 Members",
    state: "default",
  },
  argTypes: {
    avatarVariant: { control: "radio", options: ["image", "text", "icon"] },
    avatarUrl: { control: "text" },
    avatarText: { control: "text" },
    avatarIcon: { control: "text" },
    statusIcon: { control: "select", options: ["none", "online", "offline"] },
    title: { control: "text" },
    description: { control: "text" },
    state: { control: "radio", options: ["default", "hover", "pressed"] },
  },
};
