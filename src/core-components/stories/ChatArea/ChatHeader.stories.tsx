import type { Meta, StoryObj } from "@storybook/react";
import "../ChatBubbles/ChatBubbles.css";
import { TypingIndicator } from "../../../base-components/components/TypingIndicator/TypingIndicator";

const meta: Meta = {
  title: "Core Components/Chat Area/Chat Header",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   DEFAULT STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Default: StoryObj = {
  name: "Default",
  render: () => (
    <ChatHeader />
  ),
};

export const WithTypingIndicator: StoryObj = {
  name: "With Typing Indicator",
  render: () => (
    <ChatHeader showTyping />
  ),
};

export const LastSeen: StoryObj = {
  name: "Last Seen",
  render: () => (
    <ChatHeader status="Last seen today at 2:30 PM" />
  ),
};

export const WithoutBackButton: StoryObj = {
  name: "Without Back Button",
  render: () => (
    <ChatHeader showBack={false} />
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   LOADING STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Loading: StoryObj = {
  name: "Loading",
  render: () => (
    <ChatHeaderSkeleton />
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllStates: StoryObj = {
  name: "All States",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)" }}>
      <ChatHeader />
      <ChatHeader status="Last seen today at 2:30 PM" />
      <ChatHeader showTyping />
      <ChatHeaderSkeleton />
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
          code={`<!-- Chat Area Header — Default -->
<div class="chat-header">
  <button class="chat-header__back-btn">
    <span class="icon-rounded">arrow_back</span>
  </button>
  <div class="chat-header__info">
    <div class="chat-header__avatar">
      <img src="avatar.jpg" alt="User" />
    </div>
    <div class="chat-header__text">
      <span class="chat-header__name">George Alan</span>
      <span class="chat-header__status">Online</span>
    </div>
  </div>
  <div class="chat-header__actions">
    <button class="chat-header__action-btn">
      <span class="icon-rounded">videocam</span>
    </button>
    <button class="chat-header__action-btn">
      <span class="icon-rounded">call</span>
    </button>
    <button class="chat-header__action-btn">
      <span class="icon-rounded">more_vert</span>
    </button>
  </div>
</div>

<!-- Chat Area Header — Loading -->
<div class="chat-header">
  <div class="chat-header__skeleton chat-header__skeleton--back"></div>
  <div class="chat-header__info">
    <div class="chat-header__skeleton chat-header__skeleton--avatar"></div>
    <div class="chat-header__text">
      <div class="chat-header__skeleton chat-header__skeleton--name"></div>
      <div class="chat-header__skeleton chat-header__skeleton--status"></div>
    </div>
  </div>
  <div class="chat-header__actions">
    <div class="chat-header__skeleton chat-header__skeleton--action"></div>
    <div class="chat-header__skeleton chat-header__skeleton--action"></div>
    <div class="chat-header__skeleton chat-header__skeleton--action"></div>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard
          language="CSS"
          code={`.chat-header {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  height: 64px;
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  background: var(--cometchat-background-color-01);
  border-bottom: 1px solid var(--cometchat-border-color-default);
}

.chat-header__back-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--cometchat-radius-2);
  color: var(--cometchat-icon-color-primary);
}

.chat-header__info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-3);
  min-width: 0;
}

.chat-header__avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--cometchat-radius-max);
  overflow: hidden;
  flex-shrink: 0;
}

.chat-header__name {
  font-family: var(--cometchat-font-family);
  font-size: 18px;
  font-weight: 500;
  line-height: 21.6px;
  color: var(--cometchat-text-color-primary);
}

.chat-header__status {
  font-family: var(--cometchat-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  color: var(--cometchat-text-color-tertiary);
}

.chat-header__actions {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
}

.chat-header__action-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--cometchat-radius-2);
  color: var(--cometchat-icon-color-primary);
}`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Default" description="Shows avatar, name, status (Online), and action buttons (video, call, more)." />
          <StateCard title="Last Seen" description="User is offline — shows last seen timestamp instead of Online." />
          <StateCard title="With Typing" description="Status text replaced with typing indicator (dots + 'Typing' in highlight color)." />
          <StateCard title="Loading" description="Skeleton placeholders for all elements while data loads." />
        </div>
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */

function ChatHeader({ showBack = true, showTyping = false, status = "Online" }: { showBack?: boolean; showTyping?: boolean; status?: string }) {
  return (
    <div className="chat-header">
      {showBack && (
        <button className="chat-header__back-btn">
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-primary)" }}>arrow_back</span>
        </button>
      )}
      <div className="chat-header__info">
        <div className="chat-header__avatar">
          <div className="chat-header__avatar-placeholder">GA</div>
        </div>
        <div className="chat-header__text">
          <span className="chat-header__name">George Alan</span>
          <div className="chat-header__status-row">
            {showTyping ? (
              <TypingIndicator activity="typing" context="single" />
            ) : (
              <span className="chat-header__status">{status}</span>
            )}
          </div>
        </div>
      </div>
      <div className="chat-header__actions">
        <button className="chat-header__action-btn">
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-primary)" }}>videocam</span>
        </button>
        <button className="chat-header__action-btn">
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-primary)" }}>call</span>
        </button>
        <button className="chat-header__action-btn">
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-primary)" }}>more_vert</span>
        </button>
      </div>
    </div>
  );
}

function ChatHeaderSkeleton() {
  return (
    <div className="chat-header">
      <div className="chat-header__info">
        <div className="chat-header__skeleton chat-header__skeleton--avatar" />
        <div className="chat-header__text">
          <div className="chat-header__skeleton chat-header__skeleton--name" />
          <div className="chat-header__skeleton chat-header__skeleton--status" />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

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
