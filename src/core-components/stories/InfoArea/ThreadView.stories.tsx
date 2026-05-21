import type { Meta, StoryObj } from "@storybook/react";
import { ThreadView } from "../../../base-components/components/ThreadView";
import type { ThreadMessage } from "../../../base-components/components/ThreadView";

/**
 * A side panel displaying a threaded conversation with the parent message,
 * reply separator, reply bubbles, and a message composer.
 *
 * **Structure (from Figma node 4090:846250):**
 * - Container: 420px wide, full height, white bg, border `#f5f5f5`
 * - Header: 64px, "Thread" (20px bold), close + info icons
 * - Chat area: date chip, parent bubble, "N replies" separator + line, reply bubbles
 * - Sent bubbles: bg `#6852d6`, white text, radius 12px
 * - Received bubbles: bg `#e9eaeb`, dark text, radius 12px
 * - Composer: input + toolbar with icons + send button
 */
const meta: Meta<typeof ThreadView> = {
  title: "Core Components/Info Area/Thread View",
  component: ThreadView,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    title: { control: "text", description: "Panel title." },
    dateLabel: { control: "text", description: "Date chip label." },
    composerPlaceholder: { control: "text", description: "Composer placeholder text." },
    parentMessage: { control: "object", description: "The parent message." },
    replies: { control: "object", description: "Reply messages." },
    onClose: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof ThreadView>;

/* ─── Sample data ─── */

const outgoingParent: ThreadMessage = {
  text: "Thanks! Looks good.",
  time: "4:56 pm",
  isSent: true,
  isRead: true,
};

const incomingParent: ThreadMessage = {
  text: "Hey, check out this new design I've been working on!",
  time: "4:50 pm",
  isSent: false,
};

const defaultReplies: ThreadMessage[] = [
  { text: "Thanks", time: "4:56 pm", isSent: false },
  { text: "Great, I'll check it out. Any other recommendations?", time: "4:56 pm", isSent: true, isRead: true },
  { text: "You're welcome! Let me know if you find any other good deals.", time: "4:56 pm", isSent: false },
  { text: "Thanks! Will do", time: "4:56 pm", isSent: true, isRead: true },
];

const shortReplies: ThreadMessage[] = [
  { text: "Sounds good!", time: "5:01 pm", isSent: true, isRead: true },
];

const longReplies: ThreadMessage[] = [
  { text: "I love it! The colors are perfect.", time: "4:52 pm", isSent: true, isRead: true },
  { text: "Thanks! I spent a lot of time on the palette.", time: "4:53 pm", isSent: false },
  { text: "Can you share the Figma link?", time: "4:54 pm", isSent: true, isRead: true },
  { text: "Sure, I'll send it over in a minute.", time: "4:55 pm", isSent: false },
  { text: "Got it, thanks!", time: "4:56 pm", isSent: true, isRead: true },
  { text: "Let me know if you have any feedback.", time: "4:57 pm", isSent: false },
];

/* ─── Stories ─── */

/** Default — outgoing parent message with 4 replies. Exact match to Figma. */
export const Default: Story = {
  args: {
    title: "Thread",
    parentMessage: outgoingParent,
    replies: defaultReplies,
    dateLabel: "Today",
  },
  decorators: [(Story) => <div style={{ height: 800 }}><Story /></div>],
};

/** Incoming parent message — thread started by another user. */
export const IncomingParent: Story = {
  args: {
    title: "Thread",
    parentMessage: incomingParent,
    replies: longReplies,
    dateLabel: "Today",
  },
  decorators: [(Story) => <div style={{ height: 800 }}><Story /></div>],
};

/** Single reply thread. */
export const SingleReply: Story = {
  args: {
    title: "Thread",
    parentMessage: outgoingParent,
    replies: shortReplies,
    dateLabel: "Today",
  },
  decorators: [(Story) => <div style={{ height: 800 }}><Story /></div>],
};

/** No replies yet — just the parent message. */
export const NoReplies: Story = {
  args: {
    title: "Thread",
    parentMessage: incomingParent,
    replies: [],
    dateLabel: "Yesterday",
  },
  decorators: [(Story) => <div style={{ height: 800 }}><Story /></div>],
};

/** All variants side by side. */
export const States: StoryObj = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ display: "flex", gap: "var(--cometchat-spacing-6)", padding: "var(--cometchat-spacing-6)", overflowX: "auto", height: 800 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <div style={stateLabelStyle}>Outgoing parent + 4 replies</div>
        <ThreadView parentMessage={outgoingParent} replies={defaultReplies} dateLabel="Today" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <div style={stateLabelStyle}>Incoming parent + many replies</div>
        <ThreadView parentMessage={incomingParent} replies={longReplies} dateLabel="Today" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <div style={stateLabelStyle}>No replies</div>
        <ThreadView parentMessage={incomingParent} replies={[]} dateLabel="Yesterday" />
      </div>
    </div>
  ),
};

/** HTML & CSS usage reference for the Thread View component. */
export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- Thread View -->
<div class="thread-view">
  <div class="thread-view__header">
    <div class="thread-view__header-text">
      <h2 class="thread-view__title">Thread</h2>
    </div>
    <div class="thread-view__header-actions">
      <button class="thread-view__header-btn" type="button"><!-- info icon --></button>
      <button class="thread-view__header-btn" type="button"><!-- close icon --></button>
    </div>
  </div>
  <div class="thread-view__chat">
    <div class="thread-view__date-chip">
      <span class="thread-view__date-chip-text">Today</span>
    </div>
    <!-- Sent bubble -->
    <div class="thread-view__message thread-view__message--sent">
      <div class="thread-view__bubble thread-view__bubble--sent">
        <p class="thread-view__bubble-text">Thanks! Looks good.</p>
        <div class="thread-view__bubble-meta">
          <span class="thread-view__read-receipt"><!-- tick SVG --></span>
          <span class="thread-view__bubble-time">4:56 pm</span>
        </div>
      </div>
    </div>
    <!-- Reply separator -->
    <div class="thread-view__separator">
      <span class="thread-view__separator-text">2 replies</span>
      <div class="thread-view__separator-line"></div>
    </div>
    <!-- Received bubble -->
    <div class="thread-view__message thread-view__message--received">
      <div class="thread-view__bubble thread-view__bubble--received">
        <p class="thread-view__bubble-text">Thanks</p>
        <div class="thread-view__bubble-meta">
          <span class="thread-view__bubble-time">4:56 pm</span>
        </div>
      </div>
    </div>
  </div>
  <div class="thread-view__composer">...</div>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={`.thread-view {
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
}

.thread-view__header {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-3);
  height: 64px;
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.thread-view__title {
  font-size: 20px;
  font-weight: 700;
  color: var(--cometchat-text-color-primary);
}

.thread-view__bubble {
  max-width: 75%;
  border-radius: var(--cometchat-radius-3);
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-3) var(--cometchat-spacing-1);
}

.thread-view__bubble--sent {
  background: var(--cometchat-extended-primary-color-500);
}

.thread-view__bubble--received {
  background: var(--cometchat-background-color-04);
}

.thread-view__bubble--sent .thread-view__bubble-text {
  color: var(--cometchat-static-white);
}

.thread-view__separator {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-1) var(--cometchat-spacing-5);
}

.thread-view__separator-text {
  font-size: 14px;
  color: var(--cometchat-text-color-secondary);
}

.thread-view__separator-line {
  flex: 1;
  height: 1px;
  background: var(--cometchat-background-color-04);
}`} />
      </UsageSection>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure. */
export const Playground: Story = {
  args: {
    title: "Thread",
    parentMessage: outgoingParent,
    replies: defaultReplies,
    dateLabel: "Today",
  },
  parameters: { docs: { disable: true } },
  decorators: [(Story) => <div style={{ height: 800 }}><Story /></div>],
};

const stateLabelStyle: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--cometchat-neutral-color-500)",
};

/* ─── Usage helpers ─── */

const UsageCodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", background: "var(--cometchat-background-color-01)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", borderBottom: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-02)" }}>
      <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-tertiary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: "var(--cometchat-spacing-3-5)", fontFamily: "var(--cometchat-font-family)", fontSize: "12px", lineHeight: 1.6, color: "var(--cometchat-text-color-primary)", overflowX: "auto" }}>
      <code>{code}</code>
    </pre>
  </div>
);

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-neutral-color-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>{title}</div>
      {children}
    </div>
  );
}
