import type { Meta, StoryObj } from "@storybook/react";
import "../../ChatBubbles/ChatBubbles.css";

const meta: Meta = {
  title: "Core Components/Chat Area/Action Bubble/Action List",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   GROUP ACTION MESSAGES
   ═══════════════════════════════════════════════════════════════════════════ */

export const GroupCreated: StoryObj = {
  name: "Group Created",
  render: () => (
    <Wrapper>
      <GroupActionDivider label="George created the group" />
    </Wrapper>
  ),
};

export const MemberJoined: StoryObj = {
  name: "Member Joined",
  render: () => (
    <Wrapper>
      <GroupActionDivider label="George joined the group" />
    </Wrapper>
  ),
};

export const MadeAdmin: StoryObj = {
  name: "Made Admin",
  render: () => (
    <Wrapper>
      <GroupActionDivider label="George made Emma an admin" />
    </Wrapper>
  ),
};

export const MemberLeft: StoryObj = {
  name: "Member Left",
  render: () => (
    <Wrapper>
      <GroupActionDivider label="George left the group" />
    </Wrapper>
  ),
};

export const RemovedAsAdmin: StoryObj = {
  name: "Removed As Admin",
  render: () => (
    <Wrapper>
      <GroupActionDivider label="You removed Jack as admin" />
    </Wrapper>
  ),
};

export const MemberAdded: StoryObj = {
  name: "Member Added",
  render: () => (
    <Wrapper>
      <GroupActionDivider label="George added Jack" />
    </Wrapper>
  ),
};

export const AdminRemoved: StoryObj = {
  name: "Admin Removed",
  render: () => (
    <Wrapper>
      <GroupActionDivider label="Admin Removed" />
    </Wrapper>
  ),
};

export const MemberRemoved: StoryObj = {
  name: "Member Removed",
  render: () => (
    <Wrapper>
      <GroupActionDivider label="George removed Jack" />
    </Wrapper>
  ),
};

export const GroupNameChanged: StoryObj = {
  name: "Group Name Changed",
  render: () => (
    <Wrapper>
      <GroupActionDivider label='Group name changed to "Watch World"' />
    </Wrapper>
  ),
};

export const UserBlocked: StoryObj = {
  name: "User Blocked",
  render: () => (
    <Wrapper>
      <GroupActionDivider label="You blocked George" />
    </Wrapper>
  ),
};

export const GroupProfileUpdated: StoryObj = {
  name: "Group Profile Updated",
  render: () => (
    <Wrapper>
      <GroupActionDivider label="Group Profile updated" />
    </Wrapper>
  ),
};

export const UserUnblocked: StoryObj = {
  name: "User Unblocked",
  render: () => (
    <Wrapper>
      <GroupActionDivider label="You unblocked George" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllGroupActions: StoryObj = {
  name: "All Group Actions",
  render: () => (
    <Wrapper width={400}>
      <GroupActionDivider label="George created the group" />
      <GroupActionDivider label="George joined the group" />
      <GroupActionDivider label="George made Emma an admin" />
      <GroupActionDivider label="George left the group" />
      <GroupActionDivider label="You removed Jack as admin" />
      <GroupActionDivider label="George added Jack" />
      <GroupActionDivider label="Admin Removed" />
      <GroupActionDivider label="George removed Jack" />
      <GroupActionDivider label='Group name changed to "Watch World"' />
      <GroupActionDivider label="You blocked George" />
      <GroupActionDivider label="Group Profile updated" />
      <GroupActionDivider label="You unblocked George" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   USAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto" }}>
      <UsageSection title="HTML Structure">
        <CodeCard
          language="HTML"
          code={`<!-- Group Action (centered badge, no lines) -->
<div class="action-bubble-divider">
  <div class="action-bubble-group-badge">
    <span class="action-bubble-group-badge__label">George created the group</span>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Group Created" description="When a user creates a new group." />
          <StateCard title="Member Joined" description="When a user joins the group." />
          <StateCard title="Made Admin" description="When a user is promoted to admin." />
          <StateCard title="Member Left" description="When a user leaves the group." />
          <StateCard title="Removed As Admin" description="When admin privileges are revoked." />
          <StateCard title="Member Added" description="When a user adds someone to the group." />
          <StateCard title="Admin Removed" description="Generic admin removal notification." />
          <StateCard title="Member Removed" description="When a user is removed from the group." />
          <StateCard title="Group Name Changed" description="When the group name is updated." />
          <StateCard title="User Blocked" description="When a user blocks another user." />
          <StateCard title="Group Profile Updated" description="When group profile/avatar changes." />
          <StateCard title="User Unblocked" description="When a user unblocks another user." />
        </div>
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function GroupActionDivider({ label }: { label: string }) {
  return (
    <div className="action-bubble-divider">
      <div className="action-bubble-group-badge">
        <span className="action-bubble-group-badge__label">{label}</span>
      </div>
    </div>
  );
}

function Wrapper({ children, width = 360 }: { children: React.ReactNode; width?: number }) {
  return (
    <div style={{ width, display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-4)", background: "var(--color-bg-01)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border-default)" }}>
      {children}
    </div>
  );
}

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "var(--space-6)" }}>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)", paddingBottom: "var(--space-2)", borderBottom: "1px solid var(--color-border-default)" }}>{title}</div>
      {children}
    </div>
  );
}

function CodeCard({ language, code }: { language: string; code: string }) {
  return (
    <div style={{ border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--color-bg-02)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--color-border-default)", background: "var(--color-bg-03)" }}>
        <span style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>{language}</span>
      </div>
      <pre style={{ margin: 0, padding: "var(--space-3-5)", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-1)", lineHeight: 1.6, color: "var(--color-text-primary)", overflowX: "auto" }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function StateCard({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ padding: "var(--space-3-5) var(--space-4)", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", background: "var(--color-bg-01)" }}>
      <strong style={{ fontSize: "var(--font-size-2)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-primary)", display: "block", marginBottom: "var(--space-1)" }}>{title}</strong>
      <span style={{ fontSize: "var(--font-size-1)", color: "var(--color-text-tertiary)", lineHeight: "var(--line-height-caption-1)" }}>{description}</span>
    </div>
  );
}
