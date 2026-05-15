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
   USAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- Call Item -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="avatar.jpg" alt="George Alan" />
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title">George Alan</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-icon">call_made</span>
      <span class="list-item__subtitle-text">11 September, 8:14 pm</span>
    </div>
  </div>
  <div class="list-item__trailing">
    <span class="list-item__trailing-icon">call</span>
  </div>
</div>

<!-- Missed call (red icon) -->
<div class="list-item">
  <div class="list-item__leading">
    <div class="list-item__avatar">
      <img src="avatar.jpg" alt="Emma Rose" />
    </div>
  </div>
  <div class="list-item__content">
    <span class="list-item__title" style="color: var(--color-error)">Emma Rose</span>
    <div class="list-item__subtitle">
      <span class="list-item__subtitle-icon" style="color: var(--color-error)">call_missed</span>
      <span class="list-item__subtitle-text">11 September, 8:14 pm</span>
    </div>
  </div>
  <div class="list-item__trailing">
    <span class="list-item__trailing-icon">call</span>
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
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-full);
}

.list-item__title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.list-item__subtitle {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--font-size-1);
  color: var(--color-text-secondary);
}

.list-item__trailing-icon {
  font-size: var(--font-size-5);
  color: var(--color-icon-tertiary);
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
