import type { Meta, StoryObj } from "@storybook/react";
import { UserItem, UserItemDivider, UserItemSkeleton } from "../../components/ListItem";
import { avatarRegistry } from "../../../cometchat-foundation/tokens/avatars";

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
      background: "var(--cometchat-background-color-01)",
      border: "1px solid var(--cometchat-border-color-default)",
      
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
  <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
    <div
      style={{
        fontSize: "12px",
        fontWeight: "500",
        color: "var(--cometchat-text-color-tertiary)",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </div>
    <div
      style={{
        background: "var(--cometchat-background-color-01)",
        border: "1px solid var(--cometchat-border-color-default)",
        
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
    <div style={{ display: "flex", justifyContent: "center", padding: "var(--cometchat-spacing-8)" }}>
      <div
        style={{
          width: 400,
          display: "flex",
          flexDirection: "column",
          gap: "var(--cometchat-spacing-3)",
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
    <div style={{ display: "flex", justifyContent: "center", padding: "var(--cometchat-spacing-8)" }}>
      <div
        style={{
          width: 400,
          background: "var(--cometchat-background-color-01)",
          border: "1px solid var(--cometchat-border-color-default)",
          
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
   USAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- User Item -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="avatar.jpg" alt="George Alan" />
      <span class="list-item__status" style="background: var(--cometchat-success-color)"></span>
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title">George Alan</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-text">Hey, let's catch up later!</span>
    </div>
  </div>
</div>

<!-- User Item with initials -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <span class="list-item__avatar-initials">GA</span>
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title">George Alan</span>
  </div>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={`.list-item {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-3);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
  background: var(--cometchat-background-color-01);
  border-radius: var(--cometchat-radius-2);
  cursor: pointer;
  min-height: 56px;
  transition: background 0.15s ease;
}

.list-item:hover {
  background: var(--cometchat-background-color-02);
}

.list-item__avatar {
  position: relative;
  width: var(--cometchat-spacing-10);
  height: var(--cometchat-spacing-10);
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-extended-primary-color-100);
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-item__avatar-initials {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-extended-primary-color-900);
}

.list-item__status {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  border-radius: var(--cometchat-radius-max);
  border: 2px solid var(--cometchat-background-color-01);
}

.list-item__title {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.list-item__subtitle {
  font-size: 12px;
  color: var(--cometchat-text-color-secondary);
}`} />
      </UsageSection>
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


/* ─── Usage helpers ─── */

const UsageCodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", background: "var(--cometchat-background-color-01)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", borderBottom: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-02)" }}>
      <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-tertiary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: "var(--cometchat-spacing-3-5)", fontFamily: "var(--cometchat-font-family)", fontSize: "12px", lineHeight: 1.6, color: "var(--cometchat-text-color-primary)", overflowX: "auto" }}>
      <code>{code}</code>
    </pre>
  </div>
);

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-neutral-color-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>{title}</div>
      {children}
    </div>
  );
}
