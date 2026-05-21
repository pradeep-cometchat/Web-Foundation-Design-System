import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../../../base-components/components/Header";
import { Button } from "../../../base-components/components/Button";
import { SearchBar } from "../../../base-components/components/SearchBar";
import { ConversationItem, ConversationItemSkeleton } from "../../../base-components/components/ListItem";
import { avatarRegistry } from "../../../cometchat-foundation/tokens/avatars";

const meta: Meta = {
  title: "Core Components/Conversation List/Chat List",
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
      <Header title="Chats" actions={[]} showMore />
      <SearchField />
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <ConversationItem
          avatarUrl={male[5].imageUrl}
          title="George Alan"
          timestamp="6:45 PM"
          messageStatus="read"
          textContent="Hey, let's catch up later!"
          statusIcon="online"
        />
        <ConversationItem
          avatarUrl={group[0].imageUrl}
          title="Uber Cars"
          timestamp="4:30 PM"
          senderLabel="John:"
          messageType="photo"
          messageTypeLabel
          textContent="Your ride has arrived. Driver is waiting outside."
        />
        <ConversationItem
          avatarUrl={female[3].imageUrl}
          title="Safiya Fareena"
          timestamp="2:10 PM"
          messageType="video"
          messageTypeLabel
        />
        <ConversationItem
          avatarUrl={male[3].imageUrl}
          title="Robert Allen"
          timestamp="11:00 AM"
          messageStatus="read"
          messageType="photo"
          messageTypeLabel
          textContent="Check this out from yesterday!"
          statusIcon="online"
        />
        <ConversationItem
          avatarUrl={group[5].imageUrl}
          title="Epic Game"
          timestamp="Yesterday"
          senderLabel="John Paul:"
          messageType="file"
          messageTypeLabel
          textContent="join the match now"
        />
        <ConversationItem
          avatarVariant="text"
          avatarText="SF"
          title="Scott Franklin"
          timestamp="Monday"
          messageStatus="error"
          messageType="audio"
          messageTypeLabel
        />
        <ConversationItem
          avatarUrl={male[10].imageUrl}
          title="Micheal Scott"
          timestamp="Sunday"
          messageStatus="read"
          textContent="Emoji"
        />
        <ConversationItem
          avatarUrl={group[7].imageUrl}
          title="Innovative Online Shopping"
          timestamp="Friday"
          messageStatus="read"
          senderLabel="Tessa:"
          textContent="Order delivered"
        />
        <ConversationItem
          avatarUrl={male[10].imageUrl}
          title="Micheal Scott"
          timestamp="11/04/26"
          textContent="Incoming voice call"
        />
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
      <Header title="Chats" actions={[]} showMore />
      <SearchField />
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <ConversationItemSkeleton tone="start" />
        <ConversationItemSkeleton tone="end" />
        <ConversationItemSkeleton tone="start" />
        <ConversationItemSkeleton tone="end" />
        <ConversationItemSkeleton tone="start" />
        <ConversationItemSkeleton tone="end" />
        <ConversationItemSkeleton tone="start" />
        <ConversationItemSkeleton tone="end" />
        <ConversationItemSkeleton tone="start" />
        <ConversationItemSkeleton tone="end" />
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
      <Header title="Chats" actions={[]} showMore />
      <SearchField />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--cometchat-spacing-10)" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-4)" }}>
          <div style={{ width: 48, height: 48, borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-dark)", background: "var(--cometchat-background-color-01)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <span className="icon-rounded" style={{ fontSize: 28, color: "var(--cometchat-text-color-primary)" }}>chat</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-1)", textAlign: "center", maxWidth: 352 }}>
            <span style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "16px", fontWeight: "600", lineHeight: "24px", color: "var(--cometchat-text-color-primary)" }}>No Conversations Yet</span>
            <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "20px", color: "var(--cometchat-text-color-tertiary)" }}>Start a new chat to begin messaging your contacts.</span>
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
    <div style={{ width: 400, height: 800, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
      <Header title="Chats" actions={[]} showMore />
      <SearchField />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--cometchat-spacing-10)" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-6)" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-4)" }}>
            <div style={{ width: 48, height: 48, borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-dark)", background: "var(--cometchat-background-color-01)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <span className="icon-rounded" style={{ fontSize: 28, color: "var(--cometchat-text-color-primary)" }}>warning</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-1)", textAlign: "center", maxWidth: 352 }}>
              <span style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "16px", fontWeight: "600", lineHeight: "24px", color: "var(--cometchat-text-color-primary)" }}>Oops!</span>
              <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "20px", color: "var(--cometchat-text-color-tertiary)" }}>Looks like something went wrong.<br />Please try again.</span>
            </div>
          </div>
          <Button variant="primary" size="md">Retry</Button>
        </div>
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   SEARCH STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Search: StoryObj = {
  render: () => (
    <div style={{ width: 400, height: 800, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
      <Header title="Chats" actions={[]} showMore />
      <SearchFieldActive />
      <FilterChips />
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <ConversationItem
          avatarUrl={male[5].imageUrl}
          title="George Alan"
          timestamp="4:30 PM"
          textContent="Yes, available right now"
          statusIcon="online"
        />
        <ConversationItem
          avatarUrl={group[0].imageUrl}
          title="Uber Cars"
          timestamp="Yesterday"
          messageStatus="read"
          textContent="Your trip receipt is ready"
        />
        <ConversationItem
          avatarUrl={female[3].imageUrl}
          title="Safiya Fareena"
          timestamp="18/03/26"
          textContent="Did you finish the assignment?"
        />
        <ConversationItem
          avatarUrl={group[5].imageUrl}
          title="Epic Games"
          timestamp="27/03/26"
          textContent="Claim your free game before it e..."
        />
        <ConversationItem
          avatarUrl={female[1].imageUrl}
          title="Teach Tech"
          timestamp="05/04/26"
          textContent="Your course certificate is ready to do..."
        />
        <ConversationItem
          avatarUrl={male[1].imageUrl}
          title="Brain Michael"
          timestamp="11/04/26"
          textContent="Can we reschedule tomorrow morning"
        />
        <ConversationItem
          avatarUrl={group[7].imageUrl}
          title="Artistic Design"
          timestamp="19/04/26"
          messageType="file"
          messageTypeLabel
          textContent="Final logo video walkthrough, tak..."
        />
        <ConversationItem
          avatarUrl={female[7].imageUrl}
          title="Tessa Joseph"
          timestamp="28/04/26"
          messageType="audio"
          messageTypeLabel
        />
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
        <div style={{ width: 400, height: 700, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
          <Header title="Chats" actions={[]} showMore />
          <SearchField />
          <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
            <ConversationItem avatarUrl={male[5].imageUrl} title="George Alan" timestamp="6:45 PM" messageStatus="read" textContent="Hey, let's catch up later!" statusIcon="online" />
            <ConversationItem avatarUrl={group[0].imageUrl} title="Uber Cars" timestamp="4:30 PM" senderLabel="John:" messageType="photo" messageTypeLabel textContent="Your ride has arrived." />
            <ConversationItem avatarUrl={female[3].imageUrl} title="Safiya Fareena" timestamp="2:10 PM" messageType="video" messageTypeLabel />
            <ConversationItem avatarUrl={male[3].imageUrl} title="Robert Allen" timestamp="11:00 AM" messageStatus="read" messageType="photo" messageTypeLabel textContent="Check this out!" statusIcon="online" />
          </div>
        </div>
      </StateLabel>

      <StateLabel label="Skeleton">
        <div style={{ width: 400, height: 700, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
          <Header title="Chats" actions={[]} showMore />
          <SearchField />
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <ConversationItemSkeleton tone="start" />
            <ConversationItemSkeleton tone="end" />
            <ConversationItemSkeleton tone="start" />
            <ConversationItemSkeleton tone="end" />
            <ConversationItemSkeleton tone="start" />
          </div>
        </div>
      </StateLabel>

      <StateLabel label="Empty">
        <div style={{ width: 400, height: 700, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
          <Header title="Chats" actions={[]} showMore />
          <SearchField />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--cometchat-spacing-10)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-4)" }}>
              <div style={{ width: 48, height: 48, borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-dark)", background: "var(--cometchat-background-color-01)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <span className="icon-rounded" style={{ fontSize: 28, color: "var(--cometchat-text-color-primary)" }}>chat</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-1)", textAlign: "center", maxWidth: 352 }}>
                <span style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "16px", fontWeight: "600", color: "var(--cometchat-text-color-primary)" }}>No Conversations Yet</span>
                <span style={{ fontSize: "14px", color: "var(--cometchat-text-color-tertiary)" }}>Start a new chat to begin messaging your contacts.</span>
              </div>
            </div>
          </div>
        </div>
      </StateLabel>

      <StateLabel label="Error">
        <div style={{ width: 400, height: 700, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
          <Header title="Chats" actions={[]} showMore />
          <SearchField />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--cometchat-spacing-10)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-6)" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-4)" }}>
                <div style={{ width: 48, height: 48, borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-dark)", background: "var(--cometchat-background-color-01)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <span className="icon-rounded" style={{ fontSize: 28, color: "var(--cometchat-text-color-primary)" }}>warning</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-1)", textAlign: "center", maxWidth: 352 }}>
                  <span style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "16px", fontWeight: "600", color: "var(--cometchat-text-color-primary)" }}>Oops!</span>
                  <span style={{ fontSize: "14px", color: "var(--cometchat-text-color-tertiary)" }}>Looks like something went wrong.<br />Please try again.</span>
                </div>
              </div>
              <Button variant="primary" size="md">Retry</Button>
            </div>
          </div>
        </div>
      </StateLabel>

      <StateLabel label="Search">
        <div style={{ width: 400, height: 700, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
          <Header title="Chats" actions={[]} showMore />
          <SearchFieldActive />
          <FilterChips />
          <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
            <ConversationItem avatarUrl={male[5].imageUrl} title="George Alan" timestamp="4:30 PM" textContent="Yes, available right now" statusIcon="online" />
            <ConversationItem avatarUrl={group[0].imageUrl} title="Uber Cars" timestamp="Yesterday" messageStatus="read" textContent="Your trip receipt is ready" />
            <ConversationItem avatarUrl={female[3].imageUrl} title="Safiya Fareena" timestamp="18/03/26" textContent="Did you finish the assignment?" />
          </div>
        </div>
      </StateLabel>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function SearchField() {
  return (
    <div style={{ padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-4)" }}>
      <SearchBar placeholder="Search chats or messages" />
    </div>
  );
}

function SearchFieldActive() {
  return (
    <div style={{ padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-4)" }}>
      <SearchBar placeholder="Search chats or messages" value="" />
    </div>
  );
}

function FilterChips() {
  const chips = ["All", "Unread", "Groups", "Photos", "Videos", "Audio", "Documents", "Gifs", "Links"];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--cometchat-spacing-2)", padding: "0 var(--cometchat-spacing-4) var(--cometchat-spacing-3)" }}>
      {chips.map((chip, i) => (
        <span
          key={chip}
          style={{
            padding: "var(--cometchat-spacing-1) var(--cometchat-spacing-3)",
            borderRadius: "var(--cometchat-radius-max)",
            fontSize: "12px",
            fontWeight: "500",
            lineHeight: "18px",
            cursor: "pointer",
            border: "1px solid var(--cometchat-border-color-default)",
            background: i === 0 ? "var(--cometchat-background-color-solid)" : "var(--cometchat-background-color-01)",
            color: i === 0 ? "var(--cometchat-static-white)" : "var(--cometchat-text-color-primary)",
            borderColor: i === 0 ? "var(--cometchat-background-color-solid)" : "var(--cometchat-border-color-default)",
          }}
        >
          {chip}
        </span>
      ))}
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
          code={`<!-- Chat List — composed from Base Components -->
<div class="chat-list">
  <!-- Header (Base Component) -->
  <div class="screen-header">
    <p class="screen-header__title">Chats</p>
    <div class="screen-header__actions">
      <button class="screen-header__action-btn" aria-label="More">
        <span class="screen-header__action-icon icon-outlined">more_vert</span>
      </button>
    </div>
  </div>

  <!-- Search Field -->
  <div class="chat-list__search">
    <div class="chat-list__search-input">
      <span class="icon-outlined">search</span>
      <input type="text" placeholder="Search chats or messages" />
    </div>
  </div>

  <!-- Filter Chips (Search state only) -->
  <div class="chat-list__filters">
    <span class="chat-list__chip chat-list__chip--active">All</span>
    <span class="chat-list__chip">Unread</span>
    <span class="chat-list__chip">Groups</span>
    <span class="chat-list__chip">Photos</span>
  </div>

  <!-- Conversation List (Base Component: ConversationItem) -->
  <div class="chat-list__items">
    <!-- Use ConversationItem base component here -->
  </div>

  <!-- Empty State -->
  <div class="chat-list__empty">
    <div class="chat-list__empty-icon">
      <span class="icon-rounded">chat</span>
    </div>
    <p class="chat-list__empty-title">No Conversations Yet</p>
    <p class="chat-list__empty-description">
      Start a new chat to begin messaging your contacts.
    </p>
  </div>

  <!-- Error State -->
  <div class="chat-list__empty">
    <div class="chat-list__empty-icon">
      <span class="icon-rounded">warning</span>
    </div>
    <p class="chat-list__empty-title">Oops!</p>
    <p class="chat-list__empty-description">
      Looks like something went wrong. Please try again.
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
          code={`.chat-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: var(--cometchat-background-color-01);
  border-right: 1px solid var(--cometchat-border-color-default);
  overflow: hidden;
}

.chat-list__search {
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
}

.chat-list__search-input {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-1);
  height: 36px;
  padding: 0 var(--cometchat-spacing-3);
  background: var(--cometchat-background-color-02);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-2);
  color: var(--cometchat-icon-color-tertiary);
}

.chat-list__search-input:focus-within {
  background: var(--cometchat-background-color-01);
  border-color: var(--cometchat-border-color-highlight);
  box-shadow: var(--cometchat-focus-ring);
}

.chat-list__search-input input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  color: var(--cometchat-text-color-primary);
}

.chat-list__search-input input::placeholder {
  color: var(--cometchat-text-color-tertiary);
}

.chat-list__filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cometchat-spacing-2);
  padding: 0 var(--cometchat-spacing-4) var(--cometchat-spacing-3);
}

.chat-list__chip {
  padding: var(--cometchat-spacing-1) var(--cometchat-spacing-3);
  border-radius: var(--cometchat-radius-max);
  font-size: 12px;
  font-weight: 500;
  border: 1px solid var(--cometchat-border-color-default);
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  cursor: pointer;
}

.chat-list__chip--active {
  background: var(--cometchat-background-color-solid);
  color: var(--cometchat-static-white);
  border-color: var(--cometchat-background-color-solid);
}

.chat-list__items {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.chat-list__empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--cometchat-spacing-4);
  padding: var(--cometchat-spacing-10);
  text-align: center;
}

.chat-list__empty-icon {
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

.chat-list__empty-title {
  font-family: var(--cometchat-font-family);
  font-size: 16px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
}

.chat-list__empty-description {
  font-size: 14px;
  color: var(--cometchat-text-color-tertiary);
  max-width: 352px;
}

/* Action buttons use the Button Base Component (.btn .btn--primary .btn--md) */`}
        />
      </UsageSection>

      <UsageSection title="States">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Default" description="Header + Search + Conversation items list. The primary state showing all recent conversations." />
          <StateCard title="Skeleton" description="Loading state with skeleton placeholders while conversations are being fetched." />
          <StateCard title="Empty" description="Shown when there are no conversations. Displays a chat icon, title, and description." />
          <StateCard title="Error" description="Shown when loading fails. Displays a warning icon, error message, and a Retry button." />
          <StateCard title="Search" description="Active search with focused input, filter chips, and filtered conversation results." />
        </div>
      </UsageSection>

      <UsageSection title="Composed From">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Header" description="Base Component — Screen header with title and action buttons." />
          <StateCard title="Button" description="Base Component — Primary button used for Retry action in error state." />
          <StateCard title="ConversationItem" description="Base Component — Individual conversation row with avatar, name, message preview, timestamp." />
          <StateCard title="ConversationItemSkeleton" description="Base Component — Skeleton loading placeholder for conversation items." />
          <StateCard title="SearchBar" description="Base Component — Search input field." />
        </div>
      </UsageSection>
    </div>
  ),
};

/* ─── Usage Helpers ─── */

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
