import type { Meta, StoryObj } from "@storybook/react";
import { ThreadView } from "../components/ThreadView";
import type { ThreadMessage } from "../components/ThreadView";

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
  title: "Base Components/Thread View",
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
    <div style={{ display: "flex", gap: "var(--space-6)", padding: "var(--space-6)", overflowX: "auto", height: 800 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <div style={stateLabelStyle}>Outgoing parent + 4 replies</div>
        <ThreadView parentMessage={outgoingParent} replies={defaultReplies} dateLabel="Today" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <div style={stateLabelStyle}>Incoming parent + many replies</div>
        <ThreadView parentMessage={incomingParent} replies={longReplies} dateLabel="Today" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <div style={stateLabelStyle}>No replies</div>
        <ThreadView parentMessage={incomingParent} replies={[]} dateLabel="Yesterday" />
      </div>
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
  fontSize: "var(--font-size-0)",
  fontWeight: "var(--font-weight-semibold)",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--color-neutral-500, #535862)",
};
