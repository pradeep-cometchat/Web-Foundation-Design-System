import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/Header";

const meta: Meta<typeof Header> = {
  title: "Base Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    title: { control: "text", description: "Title text." },
    showBack: { control: "boolean", description: "Show back arrow button." },
    showMore: { control: "boolean", description: "Show the kebab menu button." },
    actions: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof Header>;

const wrapper = (Story: React.ComponentType) => (
  <div style={{ width: 400, border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
    <Story />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const Default: Story = {
  decorators: [wrapper],
  args: {
    title: "Chats",
    actions: [
      { icon: "edit_square", ariaLabel: "New chat" },
      { icon: "search", ariaLabel: "Search" },
      { icon: "videocam", ariaLabel: "Video call" },
    ],
    showMore: true,
  },
};

export const WithTwoActions: Story = {
  name: "Two Actions",
  decorators: [wrapper],
  args: {
    title: "Chats",
    actions: [
      { icon: "edit_square", ariaLabel: "New chat" },
      { icon: "search", ariaLabel: "Search" },
    ],
    showMore: true,
  },
};

export const WithOneAction: Story = {
  name: "One Action",
  decorators: [wrapper],
  args: {
    title: "Chats",
    actions: [
      { icon: "search", ariaLabel: "Search" },
    ],
    showMore: true,
  },
};

export const NoActions: Story = {
  name: "No Actions",
  decorators: [wrapper],
  args: {
    title: "Chats",
    actions: [],
    showMore: false,
  },
};

export const MoreOnly: Story = {
  name: "More Button Only",
  decorators: [wrapper],
  args: {
    title: "Chats",
    actions: [],
    showMore: true,
  },
};

export const LongTitle: Story = {
  name: "Long Title (Truncated)",
  decorators: [wrapper],
  args: {
    title: "Very Long Chat Group Name That Should Truncate",
    actions: [
      { icon: "search", ariaLabel: "Search" },
      { icon: "videocam", ariaLabel: "Video call" },
    ],
    showMore: true,
  },
};

export const CustomTitle: Story = {
  name: "Custom Title",
  decorators: [wrapper],
  args: {
    title: "Contacts",
    actions: [
      { icon: "person_add", ariaLabel: "Add contact" },
      { icon: "search", ariaLabel: "Search" },
    ],
    showMore: true,
  },
};

export const WithBackButton: Story = {
  name: "With Back Button",
  decorators: [wrapper],
  args: {
    title: "George Alan",
    showBack: true,
    actions: [
      { icon: "videocam", ariaLabel: "Video call" },
      { icon: "call", ariaLabel: "Voice call" },
    ],
    showMore: true,
  },
};

export const BackButtonNoActions: Story = {
  name: "Back Button — No Actions",
  decorators: [wrapper],
  args: {
    title: "Settings",
    showBack: true,
    actions: [],
    showMore: false,
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllStates: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ display: "flex", justifyContent: "center", padding: "var(--cometchat-spacing-8)" }}>
      <div style={{ width: 400, display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-3)" }}>
        <Wrap label="3 Actions + More">
          <Header
            title="Chats"
            actions={[
              { icon: "edit_square", ariaLabel: "New chat" },
              { icon: "search", ariaLabel: "Search" },
              { icon: "videocam", ariaLabel: "Video call" },
            ]}
            showMore
          />
        </Wrap>
        <Wrap label="2 Actions + More">
          <Header
            title="Chats"
            actions={[
              { icon: "edit_square", ariaLabel: "New chat" },
              { icon: "search", ariaLabel: "Search" },
            ]}
            showMore
          />
        </Wrap>
        <Wrap label="1 Action + More">
          <Header
            title="Chats"
            actions={[{ icon: "search", ariaLabel: "Search" }]}
            showMore
          />
        </Wrap>
        <Wrap label="More Only">
          <Header title="Chats" actions={[]} showMore />
        </Wrap>
        <Wrap label="No Actions">
          <Header title="Chats" actions={[]} showMore={false} />
        </Wrap>
        <Wrap label="Long Title">
          <Header
            title="Very Long Chat Group Name That Truncates"
            actions={[{ icon: "search", ariaLabel: "Search" }]}
            showMore
          />
        </Wrap>
        <Wrap label="With Back Button">
          <Header
            title="George Alan"
            showBack
            actions={[
              { icon: "videocam", ariaLabel: "Video call" },
              { icon: "call", ariaLabel: "Voice call" },
            ]}
            showMore
          />
        </Wrap>
        <Wrap label="Back Button — No Actions">
          <Header title="Settings" showBack actions={[]} showMore={false} />
        </Wrap>
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   PLAYGROUND
   ═══════════════════════════════════════════════════════════════════════════ */

export const Playground: Story = {
  decorators: [wrapper],
  parameters: { docs: { disable: true } },
  args: {
    title: "Chats",
    actions: [
      { icon: "edit_square", ariaLabel: "New chat" },
      { icon: "search", ariaLabel: "Search" },
      { icon: "videocam", ariaLabel: "Video call" },
    ],
    showMore: true,
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   USAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <Section title="HTML">
        <CodeCard
          language="HTML"
          code={`<!-- Screen Header with 3 actions + more -->
<div class="screen-header">
  <h1 class="screen-header__title">Chats</h1>
  <div class="screen-header__actions">
    <button class="screen-header__action-btn" aria-label="New chat">
      <span class="screen-header__action-icon icon-outlined">edit_square</span>
    </button>
    <button class="screen-header__action-btn" aria-label="Search">
      <span class="screen-header__action-icon icon-outlined">search</span>
    </button>
    <button class="screen-header__action-btn" aria-label="Video call">
      <span class="screen-header__action-icon icon-outlined">videocam</span>
    </button>
    <button class="screen-header__action-btn" aria-label="More actions">
      <span class="screen-header__action-icon icon-outlined">more_vert</span>
    </button>
  </div>
</div>

<!-- Header with back button -->
<div class="screen-header">
  <button class="screen-header__back-btn" aria-label="Go back">
    <span class="icon-outlined">arrow_back</span>
  </button>
  <h1 class="screen-header__title">George Alan</h1>
  <div class="screen-header__actions">
    <button class="screen-header__action-btn" aria-label="Video call">
      <span class="screen-header__action-icon icon-outlined">videocam</span>
    </button>
    <button class="screen-header__action-btn" aria-label="Voice call">
      <span class="screen-header__action-icon icon-outlined">call</span>
    </button>
    <button class="screen-header__action-btn" aria-label="More actions">
      <span class="screen-header__action-icon icon-outlined">more_vert</span>
    </button>
  </div>
</div>

<!-- Header without actions -->
<div class="screen-header">
  <h1 class="screen-header__title">Contacts</h1>
  <div class="screen-header__actions"></div>
</div>`}
        />
      </Section>

      <Section title="CSS (CometChat Tokens)">
        <CodeCard
          language="CSS"
          code={`.screen-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  background: var(--cometchat-background-color-01);
  border-bottom: 1px solid var(--cometchat-border-color-default);
  box-sizing: border-box;
}

.screen-header__title {
  flex: 1 0 0;
  min-width: 0;
  font-family: var(--cometchat-font-family);
  font-size: 24px; /* 24px */
  font-weight: 700;
  line-height: 32px; /* 28.8px */
  color: var(--cometchat-text-color-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
}

.screen-header__back-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: var(--cometchat-radius-2);
  cursor: pointer;
  color: var(--cometchat-icon-color-primary);
  padding: 0;
  flex-shrink: 0;
}

.screen-header__back-btn:hover {
  background: var(--cometchat-background-color-02);
}

.screen-header__actions {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  flex-shrink: 0;
}

.screen-header__action-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: var(--cometchat-radius-2);
  cursor: pointer;
  color: var(--cometchat-icon-color-tertiary);
  padding: 0;
}

.screen-header__action-btn:hover {
  background: var(--cometchat-background-color-02);
  color: var(--cometchat-icon-color-tertiary);
}

.screen-header__action-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}`}
        />
      </Section>

      <Section title="Available Classes">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <ClassGroup title="Container" items={["screen-header"]} />
          <ClassGroup title="Elements" items={["screen-header__title", "screen-header__back-btn", "screen-header__actions", "screen-header__action-btn", "screen-header__action-icon"]} />
        </div>
      </Section>
    </div>
  ),
};

/* ─── Usage Helpers ─── */

function Wrap({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
      <div style={{ fontSize: "12px", fontWeight: "500", color: "var(--cometchat-text-color-tertiary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</div>
      <div style={{ border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
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

function ClassGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ padding: "var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)", border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", background: "var(--cometchat-background-color-01)" }}>
      <div style={{ fontSize: "10px", fontWeight: "600", color: "var(--cometchat-text-color-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-1)" }}>
        {items.map((item) => (
          <code key={item} style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "12px", color: "var(--cometchat-text-color-primary)", background: "var(--cometchat-background-color-03)", padding: "var(--cometchat-spacing) var(--cometchat-spacing-2)", borderRadius: "var(--cometchat-radius-1)", border: "1px solid var(--cometchat-border-color-default)", display: "inline-block", width: "fit-content" }}>.{item}</code>
        ))}
      </div>
    </div>
  );
}
