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
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
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
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto" }}>
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

      <UsageSection title="CSS (Foundation Variables)">
        <CodeCard
          language="CSS"
          code={`.chat-header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  height: 64px;
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-01);
  border-bottom: 1px solid var(--color-border-default);
}

.chat-header__back-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  color: var(--color-icon-primary);
}

.chat-header__info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
}

.chat-header__avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  overflow: hidden;
  flex-shrink: 0;
}

.chat-header__name {
  font-family: var(--font-family-heading);
  font-size: 18px;
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-h3);
  color: var(--color-text-primary);
}

.chat-header__status {
  font-family: var(--font-family-body);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-caption-1);
  color: var(--color-text-quaternary);
}

.chat-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.chat-header__action-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  color: var(--color-icon-primary);
}`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
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
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--color-icon-primary)" }}>arrow_back</span>
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
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--color-icon-primary)" }}>videocam</span>
        </button>
        <button className="chat-header__action-btn">
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--color-icon-primary)" }}>call</span>
        </button>
        <button className="chat-header__action-btn">
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--color-icon-primary)" }}>more_vert</span>
        </button>
      </div>
    </div>
  );
}

function ChatHeaderSkeleton() {
  return (
    <div className="chat-header">
      <div className="chat-header__skeleton chat-header__skeleton--back" />
      <div className="chat-header__info">
        <div className="chat-header__skeleton chat-header__skeleton--avatar" />
        <div className="chat-header__text">
          <div className="chat-header__skeleton chat-header__skeleton--name" />
          <div className="chat-header__skeleton chat-header__skeleton--status" />
        </div>
      </div>
      <div className="chat-header__actions">
        <div className="chat-header__skeleton chat-header__skeleton--action" />
        <div className="chat-header__skeleton chat-header__skeleton--action" />
        <div className="chat-header__skeleton chat-header__skeleton--action" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

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
