import type { Meta, StoryObj } from "@storybook/react";
import "./Shell.css";
import "../core-components/stories/ChatBubbles/ChatBubbles.css";
import { Header } from "../base-components/components/Header";
import { SearchBar } from "../base-components/components/SearchBar";
import { ConversationItem, ConversationItemSkeleton } from "../base-components/components/ListItem";
import { Button } from "../base-components/components/Button";
import { avatarRegistry } from "../cometchat-foundation/tokens/avatars";

const meta: Meta = {
  title: "Shell/Chat Empty State",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

const avatars = avatarRegistry["Male Avatar"];

export const Default: StoryObj = {
  name: "Default",
  render: () => (
    <div className="shell">
      {/* Sidebar — Chat List with conversations */}
      <div className="shell__sidebar">
        <Header title="Chats" actions={[{ icon: "more_vert", onClick: () => {}, ariaLabel: "More" }]} />
        <SearchBar placeholder="Search" />
        <div style={{ flex: 1, overflow: "auto" }}>
          {avatars.slice(0, 8).map((a, i) => (
            <ConversationItem
              key={i}
              title={a.name}
              avatarUrl={a.imageUrl}
              textContent="Hey, how are you doing?"
              timestamp="4:56 pm"
              avatarVariant="image"
            />
          ))}
        </div>
        {/* Tab bar */}
        <div className="shell__tab-bar">
          <TabItem icon="chat" label="Chats" active />
          <TabItem icon="call" label="Calls" />
          <TabItem icon="group" label="Groups" />
          <TabItem icon="person" label="Users" />
        </div>
      </div>

      {/* Main — Empty state */}
      <div className="shell__main">
        <div className="shell__empty">
          <div className="shell__empty-icon">
            <span className="icon-rounded" style={{ fontSize: 48, color: "var(--cometchat-icon-color-tertiary)" }}>chat</span>
          </div>
          <div>
            <p className="shell__empty-title">Welcome to Your Conversations</p>
            <p className="shell__empty-description">Select a chat from the list to start exploring your messages or begin a new conversation</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ListEmptyState: StoryObj = {
  name: "List Empty State",
  render: () => (
    <div className="shell">
      {/* Sidebar — Empty conversation list */}
      <div className="shell__sidebar">
        <Header title="Chats" actions={[{ icon: "more_vert", onClick: () => {}, ariaLabel: "More" }]} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--cometchat-spacing-8)", textAlign: "center" }}>
          <div style={{ width: 48, height: 48, borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-dark)", background: "var(--cometchat-background-color-01)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--cometchat-spacing-4)" }}>
            <span className="icon-rounded" style={{ fontSize: 28, color: "var(--cometchat-text-color-primary)" }}>chat</span>
          </div>
          <p style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "16px", fontWeight: 600, color: "var(--cometchat-text-color-primary)", margin: "0 0 var(--cometchat-spacing-1)" }}>No Conversations Yet</p>
          <p style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "14px", color: "var(--cometchat-text-color-tertiary)", margin: 0, lineHeight: "16.8px" }}>Start a new chat or invite others to join the conversation.</p>
        </div>
        {/* Tab bar */}
        <div className="shell__tab-bar">
          <TabItem icon="chat" label="Chats" active />
          <TabItem icon="call" label="Calls" />
          <TabItem icon="group" label="Groups" />
          <TabItem icon="person" label="Users" />
        </div>
      </div>

      {/* Main — Empty state */}
      <div className="shell__main">
        <div className="shell__empty">
          <div className="shell__empty-icon">
            <span className="icon-rounded" style={{ fontSize: 48, color: "var(--cometchat-icon-color-tertiary)" }}>chat</span>
          </div>
          <div>
            <p className="shell__empty-title">Welcome to Your Conversations</p>
            <p className="shell__empty-description">Select a chat from the list to start exploring your messages or begin a new conversation</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ErrorState: StoryObj = {
  name: "Error State",
  render: () => (
    <div className="shell">
      {/* Sidebar — Error state */}
      <div className="shell__sidebar">
        <Header title="Chats" actions={[{ icon: "more_vert", onClick: () => {}, ariaLabel: "More" }]} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--cometchat-spacing-8)", textAlign: "center" }}>
          <div style={{ width: 48, height: 48, borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-dark)", background: "var(--cometchat-background-color-01)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--cometchat-spacing-4)" }}>
            <span className="icon-rounded" style={{ fontSize: 28, color: "var(--cometchat-text-color-primary)" }}>warning</span>
          </div>
          <p style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "16px", fontWeight: 600, color: "var(--cometchat-text-color-primary)", margin: "0 0 var(--cometchat-spacing-1)" }}>Oops!</p>
          <p style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "14px", color: "var(--cometchat-text-color-tertiary)", margin: "0 0 var(--cometchat-spacing-4)", lineHeight: "16.8px" }}>Looks like something went wrong. Please try again.</p>
          <Button variant="secondary" size="sm">Retry</Button>
        </div>
        {/* Tab bar */}
        <div className="shell__tab-bar">
          <TabItem icon="chat" label="Chats" active />
          <TabItem icon="call" label="Calls" />
          <TabItem icon="group" label="Groups" />
          <TabItem icon="person" label="Users" />
        </div>
      </div>

      {/* Main — Empty state */}
      <div className="shell__main">
        <div className="shell__empty">
          <div className="shell__empty-icon">
            <span className="icon-rounded" style={{ fontSize: 48, color: "var(--cometchat-icon-color-tertiary)" }}>chat</span>
          </div>
          <div>
            <p className="shell__empty-title">Welcome to Your Conversations</p>
            <p className="shell__empty-description">Select a chat from the list to start exploring your messages or begin a new conversation</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const SkeletonLoading: StoryObj = {
  name: "Skeleton Loading",
  render: () => (
    <div className="shell">
      {/* Sidebar — Skeleton loading */}
      <div className="shell__sidebar">
        <Header title="Chats" actions={[{ icon: "more_vert", onClick: () => {}, ariaLabel: "More" }]} />
        <div style={{ flex: 1, overflow: "hidden" }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <ConversationItemSkeleton key={i} />
          ))}
        </div>
        {/* Tab bar */}
        <div className="shell__tab-bar">
          <TabItem icon="chat" label="Chats" active />
          <TabItem icon="call" label="Calls" />
          <TabItem icon="group" label="Groups" />
          <TabItem icon="person" label="Users" />
        </div>
      </div>

      {/* Main — Empty state */}
      <div className="shell__main">
        <div className="shell__empty">
          <div className="shell__empty-icon">
            <span className="icon-rounded" style={{ fontSize: 48, color: "var(--cometchat-icon-color-tertiary)" }}>chat</span>
          </div>
          <div>
            <p className="shell__empty-title">Welcome to Your Conversations</p>
            <p className="shell__empty-description">Select a chat from the list to start exploring your messages or begin a new conversation</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   USAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: StoryObj = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ marginBottom: "var(--cometchat-spacing-6)" }}>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--cometchat-text-color-secondary)", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)", paddingBottom: "var(--cometchat-spacing-2)", borderBottom: "1px solid var(--cometchat-border-color-default)" }}>Shell Screens</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Default" description="Chat list with conversations on left, welcome empty state on right." />
          <StateCard title="List Empty State" description="Empty conversation list with illustration + message, welcome state on right." />
          <StateCard title="Error State" description="Error message with retry button on left, welcome state on right." />
          <StateCard title="Skeleton Loading" description="Skeleton loading placeholders on left while data loads." />
        </div>
      </div>
    </div>
  ),
};

/** Interactive playground. */
export const Playground: StoryObj = {
  parameters: { docs: { disable: true } },
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function TabItem({ icon, label, active }: { icon: string; label: string; active?: boolean }) {
  return (
    <div className="shell__tab-item">
      <span className={`icon-rounded shell__tab-icon ${active ? "shell__tab-icon--active" : ""}`}>{icon}</span>
      <span className={`shell__tab-label ${active ? "shell__tab-label--active" : ""}`}>{label}</span>
    </div>
  );
}

function StateCard({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ padding: "var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)", border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", background: "var(--cometchat-background-color-01)" }}>
      <strong style={{ fontSize: "14px", fontWeight: 600, color: "var(--cometchat-text-color-primary)", display: "block", marginBottom: "var(--cometchat-spacing-1)" }}>{title}</strong>
      <span style={{ fontSize: "12px", color: "var(--cometchat-text-color-tertiary)", lineHeight: "14.4px" }}>{description}</span>
    </div>
  );
}
