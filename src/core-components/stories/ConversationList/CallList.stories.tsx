import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../../../base-components/components/Header";
import { Button } from "../../../base-components/components/Button";
import { CallItem, CallItemSkeleton } from "../../../base-components/components/ListItem";
import { avatarRegistry } from "../../../cometchat-foundation/tokens/avatars";

const meta: Meta = {
  title: "Core Components/Conversation List/Call List",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

const male = avatarRegistry["Male Avatar"];
const female = avatarRegistry["Female Avatar"];
const group = avatarRegistry["Group Avatar"];

/* ═══════════════════════════════════════════════════════════════════════════
   DEFAULT STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Default: StoryObj = {
  render: () => (
    <div style={{ width: 400, height: 800, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
      <Header title="Calls" actions={[]} showMore={false} />
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <CallItem avatarUrl={male[7].imageUrl} title="John Paul" direction="outgoing" type="voice" dateTime="11 September, 8:14 pm" />
        <CallItem avatarUrl={group[5].imageUrl} title="Epic Games" direction="incoming" type="video" dateTime="11 September, 8:14 pm" />
        <CallItem avatarUrl={female[7].imageUrl} title="Tessa Joseph(2)" direction="missed" type="voice" dateTime="11 September, 8:14 pm" />
        <CallItem avatarUrl={male[0].imageUrl} title="Paul David" direction="outgoing" type="voice" dateTime="11 September, 8:14 pm" />
        <CallItem avatarUrl={male[3].imageUrl} title="Robert Allen" direction="declined" type="video" dateTime="11 September, 8:14 pm" />
        <CallItem avatarUrl={female[3].imageUrl} title="Safiya Fareena" direction="outgoing" type="video" dateTime="11 September, 8:14 pm" />
        <CallItem avatarUrl={male[10].imageUrl} title="Michael Scott" direction="missed" type="voice" dateTime="11 September, 8:14 pm" />
        <CallItem avatarVariant="text" avatarText="SF" title="Scott Franklin" direction="incoming" type="voice" dateTime="11 September, 8:14 pm" />
        <CallItem avatarUrl={male[1].imageUrl} title="Muhammed Fareed" direction="outgoing" type="voice" dateTime="11 September, 8:14 pm" />
        <CallItem avatarUrl={male[5].imageUrl} title="George Alan" direction="incoming" type="video" dateTime="11 September, 8:14 pm" />
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   SKELETON STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Skeleton: StoryObj = {
  render: () => (
    <div style={{ width: 400, height: 800, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
      <Header title="Calls" actions={[]} showMore={false} />
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <CallItemSkeleton tone="start" />
        <CallItemSkeleton tone="end" />
        <CallItemSkeleton tone="start" />
        <CallItemSkeleton tone="end" />
        <CallItemSkeleton tone="start" />
        <CallItemSkeleton tone="end" />
        <CallItemSkeleton tone="start" />
        <CallItemSkeleton tone="end" />
        <CallItemSkeleton tone="start" />
        <CallItemSkeleton tone="end" />
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   EMPTY STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Empty: StoryObj = {
  render: () => (
    <div style={{ width: 400, height: 800, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
      <Header title="Calls" actions={[]} showMore={false} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--cometchat-spacing-10)" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-6)" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-4)" }}>
            <div style={{ width: 48, height: 48, borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-dark)", background: "var(--cometchat-background-color-01)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <span className="icon-rounded" style={{ fontSize: 28, color: "var(--cometchat-text-color-primary)" }}>call</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-1)", textAlign: "center", maxWidth: 352 }}>
              <span style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "16px", fontWeight: "600", lineHeight: "24px", color: "var(--cometchat-text-color-primary)" }}>No calls yet</span>
              <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "20px", color: "var(--cometchat-text-color-tertiary)" }}>You haven't made or received any calls.<br />Start your first call to begin.</span>
            </div>
          </div>
          <Button variant="primary" size="md">Start a call</Button>
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
    <div style={{ width: 400, height: 800, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
      <Header title="Calls" actions={[]} showMore={false} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--cometchat-spacing-10)" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-6)" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-4)" }}>
            <div style={{ width: 48, height: 48, borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-dark)", background: "var(--cometchat-background-color-01)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <span className="icon-rounded" style={{ fontSize: 28, color: "var(--cometchat-text-color-primary)" }}>error</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-1)", textAlign: "center", maxWidth: 352 }}>
              <span style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "16px", fontWeight: "600", lineHeight: "24px", color: "var(--cometchat-text-color-primary)" }}>Unable to load calls</span>
              <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "20px", color: "var(--cometchat-text-color-tertiary)" }}>Something went wrong while loading your call history. Please try again.</span>
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
    <div style={{ display: "flex", gap: "var(--cometchat-spacing-6)", padding: "var(--cometchat-spacing-8)", overflowX: "auto" }}>
      <StateLabel label="Default">
        <div style={{ width: 400, height: 600, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
          <Header title="Calls" actions={[]} showMore={false} />
          <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
            <CallItem avatarUrl={male[7].imageUrl} title="John Paul" direction="outgoing" type="voice" dateTime="11 September, 8:14 pm" />
            <CallItem avatarUrl={group[5].imageUrl} title="Epic Games" direction="incoming" type="video" dateTime="11 September, 8:14 pm" />
            <CallItem avatarUrl={female[7].imageUrl} title="Tessa Joseph(2)" direction="missed" type="voice" dateTime="11 September, 8:14 pm" />
            <CallItem avatarUrl={male[3].imageUrl} title="Robert Allen" direction="declined" type="video" dateTime="11 September, 8:14 pm" />
            <CallItem avatarUrl={female[3].imageUrl} title="Safiya Fareena" direction="outgoing" type="video" dateTime="11 September, 8:14 pm" />
          </div>
        </div>
      </StateLabel>

      <StateLabel label="Skeleton">
        <div style={{ width: 400, height: 600, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
          <Header title="Calls" actions={[]} showMore={false} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <CallItemSkeleton tone="start" />
            <CallItemSkeleton tone="end" />
            <CallItemSkeleton tone="start" />
            <CallItemSkeleton tone="end" />
            <CallItemSkeleton tone="start" />
            <CallItemSkeleton tone="end" />
          </div>
        </div>
      </StateLabel>

      <StateLabel label="Empty">
        <div style={{ width: 400, height: 600, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
          <Header title="Calls" actions={[]} showMore={false} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--cometchat-spacing-10)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-6)" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-4)" }}>
                <div style={{ width: 48, height: 48, borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-dark)", background: "var(--cometchat-background-color-01)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <span className="icon-rounded" style={{ fontSize: 28, color: "var(--cometchat-text-color-primary)" }}>call</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-1)", textAlign: "center", maxWidth: 352 }}>
                  <span style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "16px", fontWeight: "600", color: "var(--cometchat-text-color-primary)" }}>No calls yet</span>
                  <span style={{ fontSize: "14px", color: "var(--cometchat-text-color-tertiary)" }}>You haven't made or received any calls.<br />Start your first call to begin.</span>
                </div>
              </div>
              <Button variant="primary" size="md">Start a call</Button>
            </div>
          </div>
        </div>
      </StateLabel>

      <StateLabel label="Error">
        <div style={{ width: 400, height: 600, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
          <Header title="Calls" actions={[]} showMore={false} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--cometchat-spacing-10)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-6)" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-4)" }}>
                <div style={{ width: 48, height: 48, borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-dark)", background: "var(--cometchat-background-color-01)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <span className="icon-rounded" style={{ fontSize: 28, color: "var(--cometchat-text-color-primary)" }}>error</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-1)", textAlign: "center", maxWidth: 352 }}>
                  <span style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "16px", fontWeight: "600", color: "var(--cometchat-text-color-primary)" }}>Unable to load calls</span>
                  <span style={{ fontSize: "14px", color: "var(--cometchat-text-color-tertiary)" }}>Something went wrong while loading your call history. Please try again.</span>
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
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <UsageSection title="HTML Structure">
        <CodeCard
          language="HTML"
          code={`<!-- Call List — composed from Base Components -->
<div class="call-list">
  <!-- Header (Base Component) -->
  <div class="screen-header">
    <p class="screen-header__title">Calls</p>
    <div class="screen-header__actions"></div>
  </div>

  <!-- Call Items (Base Component: CallItem) -->
  <div class="call-list__items">
    <!-- Outgoing voice call -->
    <div class="call-item call-item--default">
      <div class="call-item__avatar">...</div>
      <div class="call-item__content">
        <span class="call-item__title">John Paul</span>
        <div class="call-item__subtitle">
          <span class="icon-outlined call-item__direction-icon
            call-item__direction-icon--outgoing">call_made</span>
          <span class="call-item__datetime">11 September, 8:14 pm</span>
        </div>
      </div>
      <button class="call-item__trailing-btn">
        <span class="icon-outlined">call</span>
      </button>
    </div>

    <!-- Missed call (red text) -->
    <div class="call-item call-item--default">
      <div class="call-item__avatar">...</div>
      <div class="call-item__content">
        <span class="call-item__title call-item__title--missed">
          Tessa Joseph(2)
        </span>
        <div class="call-item__subtitle">
          <span class="icon-outlined call-item__direction-icon
            call-item__direction-icon--missed">call_missed</span>
          <span class="call-item__datetime">11 September, 8:14 pm</span>
        </div>
      </div>
      <button class="call-item__trailing-btn">
        <span class="icon-outlined">call</span>
      </button>
    </div>
  </div>

  <!-- Empty State -->
  <div class="call-list__empty">
    <div class="call-list__empty-icon">
      <span class="icon-rounded">call</span>
    </div>
    <p class="call-list__empty-title">No calls yet</p>
    <p class="call-list__empty-description">
      You haven't made or received any calls.
      Start your first call to begin.
    </p>
    <!-- Use Button Base Component -->
    <button class="btn btn--primary btn--md">Start a call</button>
  </div>

  <!-- Error State -->
  <div class="call-list__empty">
    <div class="call-list__empty-icon">
      <span class="icon-rounded">error</span>
    </div>
    <p class="call-list__empty-title">Unable to load calls</p>
    <p class="call-list__empty-description">
      Something went wrong while loading your call history.
      Please try again.
    </p>
    <!-- Use Button Base Component -->
    <button class="btn btn--primary btn--md">Retry</button>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard
          language="CSS"
          code={`.call-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: var(--cometchat-background-color-01);
  border-right: 1px solid var(--cometchat-border-color-default);
  overflow: hidden;
}

.call-list__items {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.call-list__empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--cometchat-spacing-4);
  padding: var(--cometchat-spacing-10);
  text-align: center;
}

.call-list__empty-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--cometchat-radius-3);
  border: 1px solid var(--cometchat-border-color-dark);
  background: var(--cometchat-background-color-01);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: var(--cometchat-text-color-primary);
}

.call-list__empty-title {
  font-family: var(--cometchat-font-family);
  font-size: 16px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.call-list__empty-description {
  font-size: 14px;
  color: var(--cometchat-text-color-tertiary);
  max-width: 352px;
}

/* Action buttons use the Button Base Component (.btn .btn--primary .btn--md) */`}
        />
      </UsageSection>

      <UsageSection title="States">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Default" description="Header + scrollable list of CallItems showing recent calls with direction indicators and call type icons." />
          <StateCard title="Skeleton" description="Loading state with skeleton placeholders while call history is being fetched." />
          <StateCard title="Empty" description="Shown when there are no calls. Displays a call icon, title, description, and Start a call button." />
          <StateCard title="Error" description="Shown when loading fails. Displays an error icon, message, and a Retry button." />
        </div>
      </UsageSection>

      <UsageSection title="Composed From">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Header" description="Base Component — Screen header with title." />
          <StateCard title="Button" description="Base Component — Primary button used for Start a call and Retry actions." />
          <StateCard title="CallItem" description="Base Component — Individual call row with avatar, name, direction, datetime, and trailing call/video icon." />
          <StateCard title="CallItemSkeleton" description="Base Component — Skeleton loading placeholder for call items." />
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
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
      <span style={{ fontSize: "12px", fontWeight: "500", color: "var(--cometchat-text-color-tertiary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</span>
      {children}
    </div>
  );
}

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "var(--cometchat-spacing-6)" }}>
      <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-text-color-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)", paddingBottom: "var(--cometchat-spacing-2)", borderBottom: "1px solid var(--cometchat-border-color-default)" }}>{title}</div>
      {children}
    </div>
  );
}

function CodeCard({ language, code }: { language: string; code: string }) {
  return (
    <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", background: "var(--cometchat-background-color-02)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", borderBottom: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-03)" }}>
        <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-secondary)" }}>{language}</span>
      </div>
      <pre style={{ margin: 0, padding: "var(--cometchat-spacing-3-5)", fontFamily: "var(--cometchat-font-family)", fontSize: "12px", lineHeight: 1.6, color: "var(--cometchat-text-color-primary)", overflowX: "auto" }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function StateCard({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ padding: "var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)", border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", background: "var(--cometchat-background-color-01)" }}>
      <strong style={{ fontSize: "14px", fontWeight: "600", color: "var(--cometchat-text-color-primary)", display: "block", marginBottom: "var(--cometchat-spacing-1)" }}>{title}</strong>
      <span style={{ fontSize: "12px", color: "var(--cometchat-text-color-tertiary)", lineHeight: "18px" }}>{description}</span>
    </div>
  );
}



/** Interactive playground. */
export const Playground: StoryObj = {
  parameters: { docs: { disable: true } },
};
