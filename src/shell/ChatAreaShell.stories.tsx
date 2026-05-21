import type { Meta, StoryObj } from "@storybook/react";
import "./Shell.css";
import "../core-components/stories/ChatBubbles/ChatBubbles.css";
import { Header } from "../base-components/components/Header";
import { SearchBar } from "../base-components/components/SearchBar";
import { ConversationItem } from "../base-components/components/ListItem";
import { avatarRegistry } from "../cometchat-foundation/tokens/avatars";

const meta: Meta = {
  title: "Shell/Chat Area",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

const avatars = avatarRegistry["Male Avatar"];
const femaleAvatars = avatarRegistry["Female Avatar"];

export const SkeletonLoading: StoryObj = {
  name: "Skeleton Loading",
  render: () => (
    <div className="shell">
      {/* Sidebar — Chat List */}
      <div className="shell__sidebar">
        <Header title="Chats" actions={[{ icon: "more_vert", onClick: () => {}, ariaLabel: "More" }]} />
        <div style={{ flex: 1, overflow: "auto" }}>
          {avatars.slice(0, 10).map((a, i) => (
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
        <div className="shell__tab-bar">
          <TabItem icon="chat" label="Chats" active />
          <TabItem icon="call" label="Calls" />
          <TabItem icon="group" label="Groups" />
          <TabItem icon="person" label="Users" />
        </div>
      </div>

      {/* Main — Chat Area with skeleton */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Chat Header Skeleton */}
        <div className="chat-header">
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

        {/* Chat Bubbles Skeleton */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, padding: "var(--cometchat-spacing-4)", overflow: "hidden" }}>
          <BubbleSkeleton align="center" width={50} />
          <BubbleSkeleton align="right" width={154} />
          <BubbleSkeleton align="right" width={446} />
          <BubbleSkeleton align="left" width={276} />
          <BubbleSkeleton align="right" width={286} />
          <BubbleSkeleton align="left" width={273} />
          <BubbleSkeleton align="right" width={160} />
          <BubbleSkeleton align="right" width={222} />
          <BubbleSkeleton align="left" width={198} />
          <BubbleSkeleton align="left" width={267} />
          <BubbleSkeleton align="right" width={172} />
        </div>

        {/* Message Composer Skeleton */}
        <div style={{ borderTop: "1px solid var(--cometchat-border-color-default)", padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-4)", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-3)" }}>
          <div className="chat-header__skeleton" style={{ width: 276, height: 12, borderRadius: 4 }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 20 }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="chat-header__skeleton" style={{ width: 24, height: 24, borderRadius: 4 }} />
              ))}
            </div>
            <div className="chat-header__skeleton" style={{ width: 32, height: 32, borderRadius: "50%" }} />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ChatAreaEmpty: StoryObj = {
  name: "Chat Area Empty",
  render: () => (
    <div className="shell">
      {/* Sidebar — Chat List */}
      <div className="shell__sidebar">
        <Header title="Chats" actions={[{ icon: "more_vert", onClick: () => {}, ariaLabel: "More" }]} />
        <div style={{ flex: 1, overflow: "auto" }}>
          {avatars.slice(0, 10).map((a, i) => (
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
        <div className="shell__tab-bar">
          <TabItem icon="chat" label="Chats" active />
          <TabItem icon="call" label="Calls" />
          <TabItem icon="group" label="Groups" />
          <TabItem icon="person" label="Users" />
        </div>
      </div>

      {/* Main — Welcome empty state */}
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

export const ChatAreaError: StoryObj = {
  name: "Chat Area Error",
  render: () => (
    <div className="shell">
      {/* Sidebar — Chat List */}
      <div className="shell__sidebar">
        <Header title="Chats" actions={[{ icon: "more_vert", onClick: () => {}, ariaLabel: "More" }]} />
        <div style={{ flex: 1, overflow: "auto" }}>
          {avatars.slice(0, 10).map((a, i) => (
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
        <div className="shell__tab-bar">
          <TabItem icon="chat" label="Chats" active />
          <TabItem icon="call" label="Calls" />
          <TabItem icon="group" label="Groups" />
          <TabItem icon="person" label="Users" />
        </div>
      </div>

      {/* Main — Error state */}
      <div className="shell__main">
        <div className="shell__empty">
          <div className="shell__empty-icon">
            <span className="icon-rounded" style={{ fontSize: 48, color: "var(--cometchat-icon-color-tertiary)" }}>warning</span>
          </div>
          <div>
            <p className="shell__empty-title">Oops!</p>
            <p className="shell__empty-description">Looks like something went wrong. Please try again.</p>
          </div>
          <button style={{ padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-5)", borderRadius: "var(--cometchat-radius-2)", border: "1px solid var(--cometchat-border-color-dark)", background: "var(--cometchat-background-color-01)", fontFamily: "var(--cometchat-font-family)", fontSize: "14px", fontWeight: 500, color: "var(--cometchat-text-color-primary)", cursor: "pointer" }}>Retry</button>
        </div>
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   SCROLL-TO-BOTTOM FAB
   ═══════════════════════════════════════════════════════════════════════════ */

export const ScrollToBottomFAB: StoryObj = {
  name: "Scroll To Bottom FAB",
  render: () => (
    <div className="shell">
      <div className="shell__sidebar">
        <Header title="Chats" actions={[{ icon: "more_vert", onClick: () => {}, ariaLabel: "More" }]} />
        <div style={{ flex: 1, overflow: "auto" }}>
          {avatars.slice(0, 10).map((a, i) => (
            <ConversationItem key={i} title={a.name} avatarUrl={a.imageUrl} textContent="Hey, how are you doing?" timestamp="4:56 pm" avatarVariant="image" />
          ))}
        </div>
        <div className="shell__tab-bar">
          <TabItem icon="chat" label="Chats" active />
          <TabItem icon="call" label="Calls" />
          <TabItem icon="group" label="Groups" />
          <TabItem icon="person" label="Users" />
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, position: "relative" }}>
        <div className="chat-header">
          <div className="chat-header__info">
            <div className="chat-header__avatar"><div className="chat-header__avatar-placeholder">GA</div></div>
            <div className="chat-header__text">
              <span className="chat-header__name">George Alan</span>
              <span className="chat-header__status">Online</span>
            </div>
          </div>
          <div className="chat-header__actions">
            <button className="chat-header__action-btn"><span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-primary)" }}>videocam</span></button>
            <button className="chat-header__action-btn"><span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-primary)" }}>call</span></button>
            <button className="chat-header__action-btn"><span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-primary)" }}>more_vert</span></button>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-3)", padding: "var(--cometchat-spacing-4)", overflow: "hidden", background: "var(--cometchat-background-color-02)" }}>
          <ChatBubble variant="received" text="Hey! How's it going?" time="4:30 pm" />
          <ChatBubble variant="sent" text="I'm doing great, thanks for asking!" time="4:31 pm" />
          <ChatBubble variant="received" text="Did you check the design files?" time="4:32 pm" />
          <ChatBubble variant="sent" text="Yes! They look amazing." time="4:33 pm" />
          <ChatBubble variant="received" text="Sure, let me know what you think." time="4:34 pm" />
          <ChatBubble variant="sent" text="I'll send you a detailed review." time="4:35 pm" />
          <ChatBubble variant="received" text="Sounds good! Take your time." time="4:36 pm" />
        </div>
        <div style={{ position: "absolute", bottom: 120, right: 24, width: 44, height: 44, borderRadius: "var(--cometchat-radius-max)", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", boxShadow: "var(--cometchat-shadow-md)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-primary)" }}>keyboard_arrow_down</span>
        </div>
        <div style={{ borderTop: "1px solid var(--cometchat-border-color-default)", padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-4)", background: "var(--cometchat-background-color-01)", display: "flex", alignItems: "center", gap: "var(--cometchat-spacing-3)" }}>
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-tertiary)" }}>add_circle</span>
          <div style={{ flex: 1, padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", background: "var(--cometchat-background-color-03)", borderRadius: "var(--cometchat-radius-max)", fontSize: "14px", color: "var(--cometchat-text-color-placeholder)" }}>Type your message...</div>
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-tertiary)" }}>mood</span>
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-tertiary)" }}>mic</span>
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-tertiary)" }}>send</span>
        </div>
      </div>
    </div>
  ),
};

export const ScrollToBottomWithBadge: StoryObj = {
  name: "Scroll To Bottom With Badge",
  render: () => (
    <div className="shell">
      <div className="shell__sidebar">
        <Header title="Chats" actions={[{ icon: "more_vert", onClick: () => {}, ariaLabel: "More" }]} />
        <div style={{ flex: 1, overflow: "auto" }}>
          {avatars.slice(0, 10).map((a, i) => (
            <ConversationItem key={i} title={a.name} avatarUrl={a.imageUrl} textContent="Hey, how are you doing?" timestamp="4:56 pm" avatarVariant="image" />
          ))}
        </div>
        <div className="shell__tab-bar">
          <TabItem icon="chat" label="Chats" active />
          <TabItem icon="call" label="Calls" />
          <TabItem icon="group" label="Groups" />
          <TabItem icon="person" label="Users" />
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, position: "relative" }}>
        <div className="chat-header">
          <div className="chat-header__info">
            <div className="chat-header__avatar"><div className="chat-header__avatar-placeholder">GA</div></div>
            <div className="chat-header__text">
              <span className="chat-header__name">George Alan</span>
              <span className="chat-header__status">Online</span>
            </div>
          </div>
          <div className="chat-header__actions">
            <button className="chat-header__action-btn"><span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-primary)" }}>videocam</span></button>
            <button className="chat-header__action-btn"><span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-primary)" }}>call</span></button>
            <button className="chat-header__action-btn"><span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-primary)" }}>more_vert</span></button>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-3)", padding: "var(--cometchat-spacing-4)", overflow: "hidden", background: "var(--cometchat-background-color-02)" }}>
          <ChatBubble variant="received" text="Hey! How's it going?" time="4:30 pm" />
          <ChatBubble variant="sent" text="I'm doing great, thanks for asking!" time="4:31 pm" />
          <ChatBubble variant="received" text="Did you check the design files?" time="4:32 pm" />
          <ChatBubble variant="sent" text="Yes! They look amazing." time="4:33 pm" />
          <ChatBubble variant="received" text="Sure, let me know what you think." time="4:34 pm" />
          <ChatBubble variant="sent" text="I'll send you a detailed review." time="4:35 pm" />
          <ChatBubble variant="received" text="Sounds good! Take your time." time="4:36 pm" />
        </div>
        <div style={{ position: "absolute", bottom: 120, right: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ minWidth: 20, height: 20, borderRadius: "var(--cometchat-radius-max)", background: "var(--cometchat-background-color-solid)", color: "var(--cometchat-static-white)", fontSize: "10px", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 6px" }}>3</div>
          <div style={{ width: 44, height: 44, borderRadius: "var(--cometchat-radius-max)", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", boxShadow: "var(--cometchat-shadow-md)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-primary)" }}>keyboard_arrow_down</span>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--cometchat-border-color-default)", padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-4)", background: "var(--cometchat-background-color-01)", display: "flex", alignItems: "center", gap: "var(--cometchat-spacing-3)" }}>
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-tertiary)" }}>add_circle</span>
          <div style={{ flex: 1, padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", background: "var(--cometchat-background-color-03)", borderRadius: "var(--cometchat-radius-max)", fontSize: "14px", color: "var(--cometchat-text-color-placeholder)" }}>Type your message...</div>
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-tertiary)" }}>mood</span>
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-tertiary)" }}>mic</span>
          <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-tertiary)" }}>send</span>
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
        <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--cometchat-text-color-secondary)", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)", paddingBottom: "var(--cometchat-spacing-2)", borderBottom: "1px solid var(--cometchat-border-color-default)" }}>Chat Area Shell Screens</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Skeleton Loading" description="Chat list on left, skeleton bubbles + header + composer loading on right." />
          <StateCard title="Chat Area Empty" description="Chat list on left, welcome empty state centered on right." />
          <StateCard title="Chat Area Error" description="Chat list on left, error state with retry button on right." />
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

function BubbleSkeleton({ align, width }: { align: "left" | "right" | "center"; width: number }) {
  return (
    <div style={{ display: "flex", justifyContent: align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start" }}>
      <div className="chat-header__skeleton" style={{ width, height: align === "center" ? 22 : 44, borderRadius: "var(--cometchat-radius-2-5)" }} />
    </div>
  );
}

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


function ChatBubble({ variant, text, time }: { variant: "sent" | "received"; text: string; time: string }) {
  const isSent = variant === "sent";
  return (
    <div style={{ display: "flex", justifyContent: isSent ? "flex-end" : "flex-start" }}>
      <div style={{ maxWidth: "65%", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", borderRadius: "var(--cometchat-radius-2-5)", borderBottomRightRadius: isSent ? "var(--cometchat-radius-1)" : undefined, borderBottomLeftRadius: !isSent ? "var(--cometchat-radius-1)" : undefined, background: isSent ? "var(--cometchat-send-bubble-background)" : "var(--cometchat-received-bubble-background)", color: isSent ? "var(--cometchat-static-white)" : "var(--cometchat-text-color-primary)", fontSize: "14px", lineHeight: "16.8px" }}>
        <div>{text}</div>
        <div style={{ fontSize: "10px", opacity: 0.7, textAlign: "right", marginTop: 2 }}>{time}</div>
      </div>
    </div>
  );
}
