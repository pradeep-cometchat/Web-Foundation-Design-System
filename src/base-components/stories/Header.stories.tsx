import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/Header";

const meta: Meta<typeof Header> = {
  title: "Base Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    title: { control: "text", description: "Title text." },
    showMore: { control: "boolean", description: "Show the kebab menu button." },
    actions: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof Header>;

const wrapper = (Story: React.ComponentType) => (
  <div style={{ width: 400, border: "1px solid var(--color-border-default)", overflow: "hidden" }}>
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

/* ═══════════════════════════════════════════════════════════════════════════
   ALL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllStates: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ display: "flex", justifyContent: "center", padding: "var(--space-8)" }}>
      <div style={{ width: 400, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
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
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto" }}>
      <Section title="HTML">
        <CodeCard
          language="HTML"
          code={`<!-- Screen Header with 3 actions + more -->
<div class="screen-header">
  <p class="screen-header__title">Chats</p>
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

<!-- Header without actions -->
<div class="screen-header">
  <p class="screen-header__title">Contacts</p>
  <div class="screen-header__actions"></div>
</div>`}
        />
      </Section>

      <Section title="CSS (Foundation Variables)">
        <CodeCard
          language="CSS"
          code={`.screen-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-01);
  border-bottom: 1px solid var(--color-border-default);
  box-sizing: border-box;
}

.screen-header__title {
  flex: 1 0 0;
  min-width: 0;
  font-family: var(--font-family-heading);
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-h1);
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
}

.screen-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
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
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--color-icon-quaternary);
  padding: 0;
}

.screen-header__action-btn:hover {
  background: var(--color-bg-02);
  color: var(--color-icon-tertiary);
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <ClassGroup title="Container" items={["screen-header"]} />
          <ClassGroup title="Elements" items={["screen-header__title", "screen-header__actions", "screen-header__action-btn", "screen-header__action-icon"]} />
        </div>
      </Section>
    </div>
  ),
};

/* ─── Usage Helpers ─── */

function Wrap({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-medium)", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</div>
      <div style={{ border: "1px solid var(--color-border-default)", overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
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

function ClassGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ padding: "var(--space-3-5) var(--space-4)", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", background: "var(--color-bg-01)" }}>
      <div style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
        {items.map((item) => (
          <code key={item} style={{ fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-1)", color: "var(--color-text-primary)", background: "var(--color-bg-03)", padding: "var(--space-0-5) var(--space-2)", borderRadius: "var(--radius-xs)", border: "1px solid var(--color-border-default)", display: "inline-block", width: "fit-content" }}>.{item}</code>
        ))}
      </div>
    </div>
  );
}
