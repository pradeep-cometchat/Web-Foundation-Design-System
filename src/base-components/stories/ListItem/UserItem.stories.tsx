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
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- User Item -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="avatar.jpg" alt="George Alan" />
      <span class="list-item__status" style="background: var(--color-success-500)"></span>
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
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={`.list-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-01);
  border-radius: var(--radius-md);
  cursor: pointer;
  min-height: var(--space-14);
  transition: background 0.15s ease;
}

.list-item:hover {
  background: var(--color-bg-02);
}

.list-item__avatar {
  position: relative;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-full);
  background: var(--color-ep-100);
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-item__avatar-initials {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-semibold);
  color: var(--color-ep-700);
}

.list-item__status {
  position: absolute;
  right: 0;
  bottom: 0;
  width: var(--space-2-5);
  height: var(--space-2-5);
  border-radius: var(--radius-full);
  border: 2px solid var(--color-bg-01);
}

.list-item__title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.list-item__subtitle {
  font-size: var(--font-size-1);
  color: var(--color-text-secondary);
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
  <div style={{ border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--color-bg-01)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--color-border-default)", background: "var(--color-bg-02)" }}>
      <span style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-tertiary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: "var(--space-3-5)", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-1)", lineHeight: 1.6, color: "var(--color-text-primary)", overflowX: "auto" }}>
      <code>{code}</code>
    </pre>
  </div>
);

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>{title}</div>
      {children}
    </div>
  );
}
