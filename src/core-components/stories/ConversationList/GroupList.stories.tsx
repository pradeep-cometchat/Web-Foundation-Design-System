import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../../../base-components/components/Header";
import { Button } from "../../../base-components/components/Button";
import { SearchBar } from "../../../base-components/components/SearchBar";
import { GroupItem, GroupItemSkeleton } from "../../../base-components/components/ListItem";
import { avatarRegistry } from "../../../foundation/tokens/avatars";

const meta: Meta = {
  title: "Core Components/Conversation List/Group List",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

const group = avatarRegistry["Group Avatar"];

/* ═══════════════════════════════════════════════════════════════════════════
   DEFAULT STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Default: StoryObj = {
  render: () => (
    <div style={{ width: 400, height: 800, display: "flex", flexDirection: "column", background: "var(--color-bg-01)", border: "1px solid var(--color-border-default)", overflow: "hidden" }}>
      <Header title="Groups" actions={[{ icon: "group_add", ariaLabel: "Create group" }]} showMore={false} />
      <div style={{ padding: "var(--space-2) var(--space-4)" }}>
        <SearchBar placeholder="Search groups" />
      </div>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <GroupItem avatarUrl={group[5].imageUrl} title="Artistic Design" description="24 Members" />
        <GroupItem avatarUrl={group[1].imageUrl} title="Bright Minds Education" description="233 Members" />
        <GroupItem avatarUrl={group[2].imageUrl} title="Code Craze" description="8 Members" />
        <GroupItem avatarUrl={group[3].imageUrl} title="Creative Event" description="42 Members" />
        <GroupItem avatarUrl={group[4].imageUrl} title="Design Duo" description="33 Members" />
        <GroupItem avatarUrl={group[6].imageUrl} title="Epic Games" description="16 Members" />
        <GroupItem avatarUrl={group[7].imageUrl} title="Future Technology" description="11 Members" />
        <GroupItem avatarUrl={group[8].imageUrl} title="Health Haven" description="35 Members" />
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   SKELETON STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Skeleton: StoryObj = {
  render: () => (
    <div style={{ width: 400, height: 800, display: "flex", flexDirection: "column", background: "var(--color-bg-01)", border: "1px solid var(--color-border-default)", overflow: "hidden" }}>
      <Header title="Groups" actions={[{ icon: "group_add", ariaLabel: "Create group" }]} showMore={false} />
      <div style={{ padding: "var(--space-2) var(--space-4)" }}>
        <SearchBar placeholder="Search groups" />
      </div>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <GroupItemSkeleton tone="start" />
        <GroupItemSkeleton tone="end" />
        <GroupItemSkeleton tone="start" />
        <GroupItemSkeleton tone="end" />
        <GroupItemSkeleton tone="start" />
        <GroupItemSkeleton tone="end" />
        <GroupItemSkeleton tone="start" />
        <GroupItemSkeleton tone="end" />
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   SEARCH STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Search: StoryObj = {
  render: () => (
    <div style={{ width: 400, height: 800, display: "flex", flexDirection: "column", background: "var(--color-bg-01)", border: "1px solid var(--color-border-default)", overflow: "hidden" }}>
      <Header title="Groups" actions={[{ icon: "group_add", ariaLabel: "Create group" }]} showMore={false} />
      <div style={{ padding: "var(--space-2) var(--space-4)" }}>
        <SearchBar placeholder="Search groups" value="S" />
      </div>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <GroupItem avatarUrl={group[5].imageUrl} title="Artistic Design" description="24 Members" />
        <GroupItem avatarUrl={group[1].imageUrl} title="Bright Minds Education" description="233 Members" />
        <GroupItem avatarUrl={group[4].imageUrl} title="Design Duo" description="33 Members" />
        <GroupItem avatarUrl={group[6].imageUrl} title="Epic Games" description="16 Members" />
        <GroupItem avatarUrl={group[8].imageUrl} title="Innovative Online Shopping" description="1,225 Members" />
        <GroupItem avatarUrl={group[9].imageUrl} title="Mind Body Wellness" description="32 Members" />
        <GroupItem avatarUrl={group[10].imageUrl} title="Skill Sphere" description="16 Members" />
        <GroupItem avatarUrl={group[0].imageUrl} title="Uber Cars" description="248 Members" />
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   EMPTY STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Empty: StoryObj = {
  render: () => (
    <div style={{ width: 400, height: 800, display: "flex", flexDirection: "column", background: "var(--color-bg-01)", border: "1px solid var(--color-border-default)", overflow: "hidden" }}>
      <Header title="Groups" actions={[{ icon: "group_add", ariaLabel: "Create group" }]} showMore={false} />
      <div style={{ padding: "var(--space-2) var(--space-4)" }}>
        <SearchBar placeholder="Search groups" />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-10)" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)" }}>
          <div style={{ width: 48, height: 48, borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border-dark)", background: "var(--color-bg-01)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <span className="icon-rounded" style={{ fontSize: 28, color: "var(--color-text-primary)" }}>group</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-1)", textAlign: "center", maxWidth: 352 }}>
            <span style={{ fontFamily: "var(--font-family-heading)", fontSize: "var(--font-size-3)", fontWeight: "var(--font-weight-semibold)", lineHeight: "var(--line-height-h4)", color: "var(--color-text-primary)" }}>No group yet</span>
            <span style={{ fontSize: "var(--font-size-2)", fontWeight: "var(--font-weight-regular)", lineHeight: "var(--line-height-body)", color: "var(--color-text-tertiary)" }}>Groups will appear here once they join your workspace or organization.</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   ERROR STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Error: StoryObj = {
  render: () => (
    <div style={{ width: 400, height: 800, display: "flex", flexDirection: "column", background: "var(--color-bg-01)", border: "1px solid var(--color-border-default)", overflow: "hidden" }}>
      <Header title="Groups" actions={[{ icon: "group_add", ariaLabel: "Create group" }]} showMore={false} />
      <div style={{ padding: "var(--space-2) var(--space-4)" }}>
        <SearchBar placeholder="Search groups" />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-10)" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-6)" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)" }}>
            <div style={{ width: 48, height: 48, borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border-dark)", background: "var(--color-bg-01)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <span className="icon-rounded" style={{ fontSize: 28, color: "var(--color-text-primary)" }}>error</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-1)", textAlign: "center", maxWidth: 352 }}>
              <span style={{ fontFamily: "var(--font-family-heading)", fontSize: "var(--font-size-3)", fontWeight: "var(--font-weight-semibold)", lineHeight: "var(--line-height-h4)", color: "var(--color-text-primary)" }}>Unable to load groups</span>
              <span style={{ fontSize: "var(--font-size-2)", fontWeight: "var(--font-weight-regular)", lineHeight: "var(--line-height-body)", color: "var(--color-text-tertiary)" }}>Something went wrong while loading the group list. Please try again.</span>
            </div>
          </div>
          <Button variant="primary" size="md">Retry</Button>
        </div>
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
        <div style={{ width: 400, height: 600, display: "flex", flexDirection: "column", background: "var(--color-bg-01)", border: "1px solid var(--color-border-default)", overflow: "hidden" }}>
          <Header title="Groups" actions={[{ icon: "group_add", ariaLabel: "Create group" }]} showMore={false} />
          <div style={{ padding: "var(--space-2) var(--space-4)" }}>
            <SearchBar placeholder="Search groups" />
          </div>
          <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
            <GroupItem avatarUrl={group[5].imageUrl} title="Artistic Design" description="24 Members" />
            <GroupItem avatarUrl={group[1].imageUrl} title="Bright Minds Education" description="233 Members" />
            <GroupItem avatarUrl={group[2].imageUrl} title="Code Craze" description="8 Members" />
            <GroupItem avatarUrl={group[3].imageUrl} title="Creative Event" description="42 Members" />
          </div>
        </div>
      </StateLabel>

      <StateLabel label="Skeleton">
        <div style={{ width: 400, height: 600, display: "flex", flexDirection: "column", background: "var(--color-bg-01)", border: "1px solid var(--color-border-default)", overflow: "hidden" }}>
          <Header title="Groups" actions={[{ icon: "group_add", ariaLabel: "Create group" }]} showMore={false} />
          <div style={{ padding: "var(--space-2) var(--space-4)" }}>
            <SearchBar placeholder="Search groups" />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <GroupItemSkeleton tone="start" />
            <GroupItemSkeleton tone="end" />
            <GroupItemSkeleton tone="start" />
            <GroupItemSkeleton tone="end" />
            <GroupItemSkeleton tone="start" />
          </div>
        </div>
      </StateLabel>

      <StateLabel label="Search">
        <div style={{ width: 400, height: 600, display: "flex", flexDirection: "column", background: "var(--color-bg-01)", border: "1px solid var(--color-border-default)", overflow: "hidden" }}>
          <Header title="Groups" actions={[{ icon: "group_add", ariaLabel: "Create group" }]} showMore={false} />
          <div style={{ padding: "var(--space-2) var(--space-4)" }}>
            <SearchBar placeholder="Search groups" value="S" />
          </div>
          <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
            <GroupItem avatarUrl={group[5].imageUrl} title="Artistic Design" description="24 Members" />
            <GroupItem avatarUrl={group[1].imageUrl} title="Bright Minds Education" description="233 Members" />
            <GroupItem avatarUrl={group[6].imageUrl} title="Epic Games" description="16 Members" />
          </div>
        </div>
      </StateLabel>

      <StateLabel label="Empty">
        <div style={{ width: 400, height: 600, display: "flex", flexDirection: "column", background: "var(--color-bg-01)", border: "1px solid var(--color-border-default)", overflow: "hidden" }}>
          <Header title="Groups" actions={[{ icon: "group_add", ariaLabel: "Create group" }]} showMore={false} />
          <div style={{ padding: "var(--space-2) var(--space-4)" }}>
            <SearchBar placeholder="Search groups" />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-10)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)" }}>
              <div style={{ width: 48, height: 48, borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border-dark)", background: "var(--color-bg-01)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <span className="icon-rounded" style={{ fontSize: 28, color: "var(--color-text-primary)" }}>group</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-1)", textAlign: "center", maxWidth: 352 }}>
                <span style={{ fontFamily: "var(--font-family-heading)", fontSize: "var(--font-size-3)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-primary)" }}>No group yet</span>
                <span style={{ fontSize: "var(--font-size-2)", color: "var(--color-text-tertiary)" }}>Groups will appear here once they join your workspace or organization.</span>
              </div>
            </div>
          </div>
        </div>
      </StateLabel>

      <StateLabel label="Error">
        <div style={{ width: 400, height: 600, display: "flex", flexDirection: "column", background: "var(--color-bg-01)", border: "1px solid var(--color-border-default)", overflow: "hidden" }}>
          <Header title="Groups" actions={[{ icon: "group_add", ariaLabel: "Create group" }]} showMore={false} />
          <div style={{ padding: "var(--space-2) var(--space-4)" }}>
            <SearchBar placeholder="Search groups" />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-10)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-6)" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)" }}>
                <div style={{ width: 48, height: 48, borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border-dark)", background: "var(--color-bg-01)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <span className="icon-rounded" style={{ fontSize: 28, color: "var(--color-text-primary)" }}>error</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-1)", textAlign: "center", maxWidth: 352 }}>
                  <span style={{ fontFamily: "var(--font-family-heading)", fontSize: "var(--font-size-3)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-primary)" }}>Unable to load groups</span>
                  <span style={{ fontSize: "var(--font-size-2)", color: "var(--color-text-tertiary)" }}>Something went wrong while loading the group list. Please try again.</span>
                </div>
              </div>
              <Button variant="primary" size="md">Retry</Button>
            </div>
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
          code={`<!-- Group List — composed from Base Components -->
<div class="group-list">
  <!-- Header (Base Component) -->
  <div class="screen-header">
    <p class="screen-header__title">Groups</p>
    <div class="screen-header__actions">
      <button class="screen-header__action-btn" aria-label="Create group">
        <span class="screen-header__action-icon icon-outlined">group_add</span>
      </button>
    </div>
  </div>

  <!-- Search Bar (Base Component) -->
  <div class="group-list__search">
    <div class="search-bar">
      <div class="search-bar__input-wrapper">
        <span class="search-bar__icon">...</span>
        <input class="search-bar__input" placeholder="Search groups" />
      </div>
    </div>
  </div>

  <!-- Group Items (Base Component: GroupItem) -->
  <div class="group-list__items">
    <div class="group-item group-item--default">
      <div class="group-item__avatar">...</div>
      <div class="group-item__content">
        <div class="group-item__title">Artistic Design</div>
        <div class="group-item__description">24 Members</div>
      </div>
    </div>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="CSS (Foundation Variables)">
        <CodeCard
          language="CSS"
          code={`.group-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: var(--color-bg-01);
  border-right: 1px solid var(--color-border-default);
  overflow: hidden;
}

.group-list__search {
  padding: var(--space-2) var(--space-4);
}

.group-list__items {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

/* Uses SearchBar Base Component styles */
/* Uses GroupItem Base Component styles */`}
        />
      </UsageSection>

      <UsageSection title="States">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Default" description="Header + Search + scrollable list of GroupItems showing available groups with member counts." />
          <StateCard title="Skeleton" description="Loading state with skeleton placeholders while groups are being fetched." />
          <StateCard title="Empty" description="Shown when there are no groups. Displays a groups icon, title, and description." />
          <StateCard title="Error" description="Shown when loading fails. Displays an error icon, message, and a Retry button." />
          <StateCard title="Search" description="Active search with filtered group results based on query." />
        </div>
      </UsageSection>

      <UsageSection title="Composed From">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Header" description="Base Component — Screen header with title and create group action." />
          <StateCard title="Button" description="Base Component — Primary button used for Retry action in error state." />
          <StateCard title="SearchBar" description="Base Component — Search input for filtering groups." />
          <StateCard title="GroupItem" description="Base Component — Individual group row with avatar, name, and member count." />
          <StateCard title="GroupItemSkeleton" description="Base Component — Skeleton loading placeholder for group items." />
        </div>
      </UsageSection>
    </div>
  ),
};

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
