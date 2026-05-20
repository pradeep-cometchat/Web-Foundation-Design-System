import type { Meta, StoryObj } from "@storybook/react";
import { avatarRegistry } from "../../../foundation/tokens/avatars";
import { SearchBar } from "../../../base-components/components/SearchBar";

const meta: Meta = {
  title: "Core Components/Info Area/Group Info",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

const group = avatarRegistry["Group Avatar"];
const male = avatarRegistry["Male Avatar"];
const female = avatarRegistry["Female Avatar"];

/* ═══════════════════════════════════════════════════════════════════════════
   DEFAULT STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Default: StoryObj = {
  render: () => (
    <div style={{ width: 420, height: 800, display: "flex", flexDirection: "column", background: "var(--color-bg-01)", border: "1px solid var(--color-border-default)", overflow: "hidden" }}>
      <GroupInfoHeader />
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <GroupInfoProfile />
        <GroupInfoActions />
        <GroupInfoMembersTabs />
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllStates: StoryObj = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-6)", padding: "var(--space-8)", overflowX: "auto" }}>
      <StateLabel label="Default">
        <div style={{ width: 420, height: 800, display: "flex", flexDirection: "column", background: "var(--color-bg-01)", border: "1px solid var(--color-border-default)", overflow: "hidden" }}>
          <GroupInfoHeader />
          <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
            <GroupInfoProfile />
            <GroupInfoActions />
            <GroupInfoMembersTabs />
          </div>
        </div>
      </StateLabel>
    </div>
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
          code={`<!-- Group Info Panel -->
<div class="group-info">
  <!-- Header -->
  <div class="group-info__header">
    <span class="icon-rounded group-info__close-icon">close</span>
    <span class="group-info__header-title">Group Info</span>
  </div>

  <!-- Profile Section -->
  <div class="group-info__profile">
    <div class="group-info__avatar">
      <img src="group-avatar.jpg" alt="Group" />
    </div>
    <p class="group-info__name">Innovative Online Shop...</p>
    <span class="group-info__meta">44 Members</span>
  </div>

  <!-- Action List -->
  <div class="group-info__action-list">
    <div class="group-info__action-item group-info__action-item--highlight">
      <span class="icon-rounded">group_add</span>
      <span>Add Members</span>
    </div>
    <div class="group-info__action-item group-info__action-item--danger">
      <span class="icon-rounded">logout</span>
      <span>Leave</span>
    </div>
    <div class="group-info__action-item group-info__action-item--danger">
      <span class="icon-rounded">delete</span>
      <span>Delete and Exit</span>
    </div>
  </div>

  <!-- Members Section -->
  <div class="group-info__members">
    <!-- Tabs (Secondary Tab component) -->
    <div class="group-info__tabs">
      <button class="group-info__tab group-info__tab--active">View Members</button>
      <button class="group-info__tab">Banned Members</button>
    </div>

    <!-- Search (SearchBar base component) -->
    <div class="group-info__search">
      <!-- SearchBar component -->
    </div>

    <!-- Member List -->
    <div class="group-info__member-item">
      <img src="avatar.jpg" class="group-info__member-avatar" />
      <span class="group-info__member-name">Alex Mason</span>
      <span class="group-info__member-badge group-info__member-badge--owner">Owner</span>
    </div>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="CSS (Foundation Variables)">
        <CodeCard
          language="CSS"
          code={`.group-info {
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  background: var(--color-bg-01);
  border-left: 1px solid var(--color-border-light);
}

.group-info__header {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 64px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--color-border-light);
}

.group-info__profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 20px 20px;
}

.group-info__avatar {
  width: 120px;
  height: 120px;
  border-radius: var(--radius-full);
  overflow: hidden;
}

.group-info__name {
  font-family: var(--font-family-heading);
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: var(--color-text-primary);
}

.group-info__meta {
  font-size: 12px;
  line-height: 18px;
  color: var(--color-text-secondary);
}

.group-info__action-list {
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
}

.group-info__action-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  font-size: 16px;
}

.group-info__action-item--highlight {
  color: var(--color-extended-primary-600);
}

.group-info__action-item--danger {
  color: var(--color-error-600);
}

.group-info__tabs {
  display: flex;
  margin: 0 16px;
  background: var(--color-bg-03);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-full);
}

.group-info__tab {
  flex: 1;
  height: 36px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  border-radius: var(--radius-full);
  color: var(--color-text-quaternary);
}

.group-info__tab--active {
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  color: var(--color-extended-primary-600);
}

.group-info__member-badge--owner {
  background: var(--color-extended-primary-600);
  color: white;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 12px;
}

.group-info__member-badge--admin {
  background: var(--color-extended-primary-100);
  border: 1px solid var(--color-extended-primary-400);
  color: var(--color-extended-primary-600);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 12px;
}

.group-info__member-badge--moderator {
  background: var(--color-extended-primary-100);
  color: var(--color-extended-primary-600);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 12px;
}`}
        />
      </UsageSection>

      <UsageSection title="States">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Default" description="Shows group avatar, name, member count, action buttons (Add Members, Leave, Delete and Exit), tabbed member list with role badges." />
        </div>
      </UsageSection>

      <UsageSection title="Composed From">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="SearchBar" description="Base Component — Search input used in the members section." />
          <StateCard title="Avatar" description="Foundation — Group avatar images from the avatar registry." />
        </div>
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */

function GroupInfoHeader() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, height: 64, padding: "8px 16px", borderBottom: "1px solid var(--color-border-light, #f5f5f5)" }}>
      <span className="icon-rounded" style={{ fontSize: 24, color: "var(--color-text-primary)", cursor: "pointer" }}>close</span>
      <span style={{ flex: 1, fontFamily: "var(--font-family-heading)", fontSize: 20, fontWeight: 700, lineHeight: "30px", color: "var(--color-text-primary)" }}>Group Info</span>
    </div>
  );
}

function GroupInfoProfile() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "40px 20px 20px" }}>
      <div style={{ width: 120, height: 120, borderRadius: "var(--radius-full, 9999px)", overflow: "hidden" }}>
        <img src={group[7].imageUrl} alt="Innovative Online Shopping" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, width: 244, textAlign: "center" }}>
        <p style={{ margin: 0, fontFamily: "var(--font-family-heading)", fontSize: 20, fontWeight: 500, lineHeight: "30px", color: "var(--color-text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%" }}>Innovative Online Shop...</p>
        <span style={{ fontSize: 12, lineHeight: "18px", color: "var(--color-text-secondary, #414651)" }}>44 Members</span>
      </div>
    </div>
  );
}

function GroupInfoActions() {
  return (
    <div style={{ borderTop: "1px solid var(--color-border-light, #f5f5f5)", borderBottom: "1px solid var(--color-border-light, #f5f5f5)" }}>
      {/* Add Members */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", cursor: "pointer" }}>
        <span className="icon-rounded" style={{ fontSize: 24, color: "var(--color-extended-primary-600, #6852d6)" }}>group_add</span>
        <span style={{ fontSize: 16, color: "var(--color-extended-primary-600, #6852d6)" }}>Add Members</span>
      </div>
      {/* Leave */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", cursor: "pointer" }}>
        <span className="icon-rounded" style={{ fontSize: 24, color: "var(--color-error-600, #d92d20)" }}>logout</span>
        <span style={{ fontSize: 16, color: "var(--color-error-600, #d92d20)" }}>Leave</span>
      </div>
      {/* Delete and Exit */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", cursor: "pointer" }}>
        <span className="icon-rounded" style={{ fontSize: 24, color: "var(--color-error-600, #d92d20)" }}>delete</span>
        <span style={{ fontSize: 16, color: "var(--color-error-600, #d92d20)" }}>Delete and Exit</span>
      </div>
    </div>
  );
}

function GroupInfoMembersTabs() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {/* Tabs — compact height */}
      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ display: "flex", background: "var(--color-bg-03, #f5f5f5)", border: "1px solid var(--color-border-light, #f5f5f5)", borderRadius: "var(--radius-full, 9999px)", overflow: "hidden" }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", height: 32, padding: "6px 16px", borderRadius: "var(--radius-full, 9999px)", background: "var(--color-bg-01, white)", border: "1px solid var(--color-border-light, #f5f5f5)", fontFamily: "var(--font-family-heading)", fontSize: 14, fontWeight: 500, lineHeight: "20px", color: "var(--color-extended-primary-600, #6852d6)", cursor: "pointer" }}>
            View Members
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", height: 32, padding: "6px 16px", borderRadius: "var(--radius-full, 9999px)", fontFamily: "var(--font-family-heading)", fontSize: 14, fontWeight: 500, lineHeight: "20px", color: "var(--color-text-quaternary, #717680)", cursor: "pointer" }}>
            Banned Members
          </div>
        </div>
      </div>

      {/* Search — using SearchBar base component */}
      <div style={{ padding: "12px 16px" }}>
        <SearchBar placeholder="Search" />
      </div>

      {/* Member List */}
      <MemberItem name="Alex Mason" avatar={male[5].imageUrl} role="owner" />
      <MemberItem name="Andrew Joseph" avatar={male[3].imageUrl} role="admin" />
      <MemberItem name="Avery Quinn" avatar={female[3].imageUrl} role="moderator" />
      <MemberItem name="Brian Michael" avatar={male[1].imageUrl} />
      <MemberItem name="Cameron Lee" avatar={male[10].imageUrl} />
      <MemberItem name="Charles Dean" avatar={female[7].imageUrl} />
      <MemberItem name="Dana Cooper" avatar={female[1].imageUrl} />
      <MemberItem name="Emily" avatar={male[8].imageUrl} />
      <MemberItem name="George Alan" avatar={male[6].imageUrl} />
      <MemberItem name="Jennifer Lynn" avatar={female[5].imageUrl} />

      {/* View all link */}
      <div style={{ padding: "20px 20px", cursor: "pointer" }}>
        <span style={{ fontSize: 16, color: "var(--color-extended-primary-600, #6852d6)" }}>View all (6 more)</span>
      </div>
    </div>
  );
}

function MemberItem({ name, avatar, role }: { name: string; avatar: string; role?: "owner" | "admin" | "moderator" }) {
  const badgeStyles: Record<string, React.CSSProperties> = {
    owner: {
      background: "var(--color-extended-primary-600, #6852d6)",
      color: "white",
      padding: "4px 12px",
      borderRadius: "var(--radius-full, 9999px)",
      fontSize: 12,
      lineHeight: "18px",
      fontWeight: 400,
    },
    admin: {
      background: "var(--color-extended-primary-100, #ebe9fe)",
      border: "1px solid var(--color-extended-primary-400, #7a70e4)",
      color: "var(--color-extended-primary-600, #6852d6)",
      padding: "4px 12px",
      borderRadius: "var(--radius-full, 9999px)",
      fontSize: 12,
      lineHeight: "18px",
      fontWeight: 400,
    },
    moderator: {
      background: "var(--color-extended-primary-100, #ebe9fe)",
      color: "var(--color-extended-primary-600, #6852d6)",
      padding: "4px 12px",
      borderRadius: "var(--radius-full, 9999px)",
      fontSize: 12,
      lineHeight: "18px",
      fontWeight: 400,
    },
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 16px" }}>
      <div style={{ width: 40, height: 40, borderRadius: "var(--radius-full, 9999px)", overflow: "hidden", flexShrink: 0 }}>
        <img src={avatar} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", minWidth: 0 }}>
        <span style={{ fontFamily: "var(--font-family-heading)", fontSize: 16, fontWeight: 500, lineHeight: "24px", color: "var(--color-text-primary, #181d27)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</span>
        {role && <span style={badgeStyles[role]}>{role.charAt(0).toUpperCase() + role.slice(1)}</span>}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function StateLabel({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      <span style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-medium)", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</span>
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

/** Interactive playground. */
export const Playground: StoryObj = {
  parameters: { docs: { disable: true } },
};
