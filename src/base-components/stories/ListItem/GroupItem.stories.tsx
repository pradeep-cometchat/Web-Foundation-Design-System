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
   GROUP TYPE
   ═══════════════════════════════════════════════════════════════════════════ */

export const PublicGroup: Story = {
  name: "Group Type — Public",
  decorators: [single],
  args: {
    avatarUrl: group[5].imageUrl,
    title: "Epic Game",
    description: "248 Members",
    groupType: "public",
  },
};

export const PrivateGroup: Story = {
  name: "Group Type — Private",
  decorators: [single],
  args: {
    avatarUrl: group[1].imageUrl,
    title: "Bright Mind",
    description: "12 Members",
    groupType: "private",
  },
};

export const ProtectedGroup: Story = {
  name: "Group Type — Protected",
  decorators: [single],
  args: {
    avatarUrl: group[8].imageUrl,
    title: "Innovative Online Shopping",
    description: "56 Members",
    groupType: "protected",
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
        <Wrap label="Group Type — Public">
          <GroupItem
            avatarUrl={group[5].imageUrl}
            title="Epic Game"
            description="248 Members"
            groupType="public"
          />
        </Wrap>
        <Wrap label="Group Type — Private">
          <GroupItem
            avatarUrl={group[1].imageUrl}
            title="Bright Mind"
            description="12 Members"
            groupType="private"
          />
        </Wrap>
        <Wrap label="Group Type — Protected">
          <GroupItem
            avatarUrl={group[8].imageUrl}
            title="Innovative Online Shopping"
            description="56 Members"
            groupType="protected"
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
   USAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- Group Item -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="group-avatar.jpg" alt="Artistic Design" />
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title">Artistic Design</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-text">24 Members</span>
    </div>
  </div>
</div>

<!-- Group Item with type badge (private) -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="group-avatar.jpg" alt="Bright Mind" />
      <!-- Private badge SVG positioned absolute bottom-right -->
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title">Bright Mind</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-text">12 Members</span>
    </div>
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
  min-height: var(--space-14);
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
  overflow: visible;
}

.list-item__avatar img {
  width: 100%;
  height: 100%;
  border-radius: var(--cometchat-radius-max);
  object-fit: cover;
}

.list-item__content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing);
}

.list-item__title {
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
    avatarUrl: group[5].imageUrl,
    avatarIcon: "group",
    avatarText: "AD",
    groupType: "none",
    title: "Artistic Design",
    description: "24 Members",
    state: "default",
  },
  argTypes: {
    avatarVariant: { control: "radio", options: ["image", "text", "icon"] },
    avatarUrl: { control: "text" },
    avatarText: { control: "text" },
    avatarIcon: { control: "text" },
    groupType: { control: "select", options: ["none", "public", "private", "protected"] },
    title: { control: "text" },
    description: { control: "text" },
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
