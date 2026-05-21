import type { Meta, StoryObj } from "@storybook/react";
import { avatarRegistry } from "../../../cometchat-foundation/tokens/avatars";

const meta: Meta = {
  title: "Core Components/Info Area/User Info",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

const male = avatarRegistry["Male Avatar"];

/* ═══════════════════════════════════════════════════════════════════════════
   DEFAULT STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Default: StoryObj = {
  render: () => (
    <div style={{ width: 420, height: 800, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
      <UserInfoHeader />
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <UserInfoProfile />
        <UserInfoActions />
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   WITH IMAGE AVATAR
   ═══════════════════════════════════════════════════════════════════════════ */

export const WithImage: StoryObj = {
  name: "With Image",
  render: () => (
    <div style={{ width: 420, height: 800, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
      <UserInfoHeader />
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <UserInfoProfileWithImage />
        <UserInfoActions />
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
      <StateLabel label="Text Avatar">
        <div style={{ width: 420, height: 800, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
          <UserInfoHeader />
          <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
            <UserInfoProfile />
            <UserInfoActions />
          </div>
        </div>
      </StateLabel>

      <StateLabel label="Image Avatar">
        <div style={{ width: 420, height: 800, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
          <UserInfoHeader />
          <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
            <UserInfoProfileWithImage />
            <UserInfoActions />
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
          code={`<!-- User Info Panel -->
<div class="user-info">
  <!-- Header -->
  <div class="user-info__header">
    <span class="icon-rounded user-info__close-icon">close</span>
    <span class="user-info__header-title">User Info</span>
  </div>

  <!-- Profile Section -->
  <div class="user-info__profile">
    <div class="user-info__avatar">
      <span class="user-info__avatar-text">SF</span>
    </div>
    <p class="user-info__name">George Alan</p>
    <span class="user-info__status">Online</span>
  </div>

  <!-- Action List -->
  <div class="user-info__action-list">
    <div class="user-info__action-item user-info__action-item--danger">
      <span class="icon-rounded">block</span>
      <span>Block</span>
    </div>
    <div class="user-info__action-item user-info__action-item--danger">
      <span class="icon-rounded">delete</span>
      <span>Delete Chat</span>
    </div>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard
          language="CSS"
          code={`.user-info {
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  background: var(--cometchat-background-color-01);
  border-left: 1px solid var(--cometchat-border-color-light);
}

.user-info__header {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 64px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.user-info__close-icon {
  font-size: 24px;
  color: var(--cometchat-text-color-primary);
  cursor: pointer;
}

.user-info__header-title {
  font-family: var(--cometchat-font-family);
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: var(--cometchat-text-color-primary);
}

.user-info__profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 20px 20px;
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.user-info__avatar {
  width: 120px;
  height: 120px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-extended-primary-color-400);
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-info__avatar-text {
  font-family: var(--cometchat-font-family);
  font-size: 40px;
  font-weight: 600;
  color: white;
}

.user-info__name {
  font-family: var(--cometchat-font-family);
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: var(--cometchat-text-color-primary);
}

.user-info__status {
  font-size: 12px;
  line-height: 18px;
  color: var(--cometchat-text-color-secondary);
}

.user-info__action-list {
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.user-info__action-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
}

.user-info__action-item--danger {
  color: var(--cometchat-error-color);
}`}
        />
      </UsageSection>

      <UsageSection title="States">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Default" description="Shows user avatar (text initials on purple background), name, online status, and action buttons (Block, Delete Chat)." />
        </div>
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */

function UserInfoHeader() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, height: 64, padding: "8px 16px", borderBottom: "1px solid var(--cometchat-border-color-light)" }}>
      <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-text-color-primary)", cursor: "pointer" }}>close</span>
      <span style={{ flex: 1, fontFamily: "var(--cometchat-font-family)", fontSize: 20, fontWeight: 700, lineHeight: "30px", color: "var(--cometchat-text-color-primary)" }}>User Info</span>
    </div>
  );
}

function UserInfoProfile() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "40px 20px 20px", borderBottom: "1px solid var(--cometchat-border-color-light)" }}>
      {/* Avatar with text initials */}
      <div style={{ width: 120, height: 120, borderRadius: "var(--cometchat-radius-max)", background: "var(--cometchat-extended-primary-color-400)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "var(--cometchat-font-family)", fontSize: 40, fontWeight: 600, color: "white" }}>SF</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, textAlign: "center" }}>
        <p style={{ margin: 0, fontFamily: "var(--cometchat-font-family)", fontSize: 20, fontWeight: 500, lineHeight: "30px", color: "var(--cometchat-text-color-primary)" }}>George Alan</p>
        <span style={{ fontSize: 12, lineHeight: "18px", color: "var(--cometchat-text-color-secondary)" }}>Online</span>
      </div>
    </div>
  );
}

function UserInfoActions() {
  return (
    <div style={{ borderBottom: "1px solid var(--cometchat-border-color-light)" }}>
      {/* Block */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", cursor: "pointer" }}>
        <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-error-color)" }}>block</span>
        <span style={{ fontSize: 16, color: "var(--cometchat-error-color)" }}>Block</span>
      </div>
      {/* Delete Chat */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", cursor: "pointer" }}>
        <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-error-color)" }}>delete</span>
        <span style={{ fontSize: 16, color: "var(--cometchat-error-color)" }}>Delete Chat</span>
      </div>
    </div>
  );
}

function UserInfoProfileWithImage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "40px 20px 20px", borderBottom: "1px solid var(--cometchat-border-color-light)" }}>
      {/* Avatar with image */}
      <div style={{ width: 120, height: 120, borderRadius: "var(--cometchat-radius-max)", overflow: "hidden" }}>
        <img src={male[5].imageUrl} alt="George Alan" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, textAlign: "center" }}>
        <p style={{ margin: 0, fontFamily: "var(--cometchat-font-family)", fontSize: 20, fontWeight: 500, lineHeight: "30px", color: "var(--cometchat-text-color-primary)" }}>George Alan</p>
        <span style={{ fontSize: 12, lineHeight: "18px", color: "var(--cometchat-text-color-secondary)" }}>Online</span>
      </div>
    </div>
  );
}

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
