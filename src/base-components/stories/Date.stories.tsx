import type { Meta, StoryObj } from "@storybook/react";
import { DateTimestamp } from "../components/Date";

/**
 * The timestamp shown inside message bubbles, indicating when a message was sent.
 * Compact inline element that sits below or beside the message text.
 *
 * **Structure (from Figma):**
 * - Size: Hug content × 24px height
 * - Font: 12px (`--font-size-1`), weight 400, line-height 16px (`--line-height-caption-2`)
 * - Color: `--color-neutral-500` (#717680)
 * - Optional read receipt icon (16×16) with 2px gap
 *
 * **Variants:**
 * - `sent` — timestamp on sent messages (gray, may include read receipts)
 * - `received` — timestamp on received messages (gray)
 * - `separator` — date separator chip between message groups ("Today", "Yesterday")
 *
 * **Patterns:**
 * - `time` — "4:56 pm", "10:30 am"
 * - `date` — "12 Jan", "5 Mar 2024"
 * - `datetime` — "12 Jan, 4:56 pm"
 * - `relative` — "Just now", "2 min ago"
 */
const meta: Meta<typeof DateTimestamp> = {
  title: "Base Components/Date",
  component: DateTimestamp,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    timestamp: { control: "text", description: "The timestamp text to display." },
    pattern: { control: "select", options: ["time", "date", "datetime", "relative"], description: "Display pattern." },
    variant: { control: "select", options: ["sent", "received", "separator"], description: "Visual variant based on context." },
    showReadReceipt: { control: "boolean", description: "Whether to show read receipt icon." },
    readStatus: { control: "select", options: ["sent", "delivered", "read"], description: "Read receipt status." },
  },
};
export default meta;

/* ─── Stories ─── */

/** Default time format as shown in Figma — "4:56 pm" inside a sent message bubble. */
export const Default: StoryObj<typeof DateTimestamp> = {
  args: {
    timestamp: "4:56 pm",
    pattern: "time",
    variant: "sent",
  },
};

/** Sent message with read receipt — single tick (sent). */
export const SentWithReceipt: StoryObj<typeof DateTimestamp> = {
  args: {
    timestamp: "4:56 pm",
    variant: "sent",
    showReadReceipt: true,
    readStatus: "sent",
  },
};

/** Sent message with double tick — delivered. */
export const Delivered: StoryObj<typeof DateTimestamp> = {
  args: {
    timestamp: "4:56 pm",
    variant: "sent",
    showReadReceipt: true,
    readStatus: "delivered",
  },
};

/** Sent message with blue double tick — read. */
export const Read: StoryObj<typeof DateTimestamp> = {
  args: {
    timestamp: "4:56 pm",
    variant: "sent",
    showReadReceipt: true,
    readStatus: "read",
  },
};

/** Received message timestamp. */
export const Received: StoryObj<typeof DateTimestamp> = {
  args: {
    timestamp: "4:56 pm",
    variant: "received",
  },
};

/** Date separator chip — shown between message groups. */
export const Separator: StoryObj<typeof DateTimestamp> = {
  args: {
    timestamp: "Today",
    variant: "separator",
  },
};

/** All patterns side by side. */
export const Patterns: StoryObj = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      <Row label="Time">
        <DateTimestamp timestamp="4:56 pm" pattern="time" variant="sent" />
      </Row>
      <Row label="Date">
        <DateTimestamp timestamp="12 Jan" pattern="date" variant="sent" />
      </Row>
      <Row label="DateTime">
        <DateTimestamp timestamp="12 Jan, 4:56 pm" pattern="datetime" variant="sent" />
      </Row>
      <Row label="Relative">
        <DateTimestamp timestamp="Just now" pattern="relative" variant="sent" />
      </Row>
    </div>
  ),
};

/** All read receipt states. */
export const ReadReceipts: StoryObj = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      <Row label="Sent (single tick)">
        <DateTimestamp timestamp="4:56 pm" variant="sent" showReadReceipt readStatus="sent" />
      </Row>
      <Row label="Delivered (double tick)">
        <DateTimestamp timestamp="4:56 pm" variant="sent" showReadReceipt readStatus="delivered" />
      </Row>
      <Row label="Read (blue double tick)">
        <DateTimestamp timestamp="4:56 pm" variant="sent" showReadReceipt readStatus="read" />
      </Row>
      <Row label="No receipt">
        <DateTimestamp timestamp="4:56 pm" variant="sent" />
      </Row>
    </div>
  ),
};

/** In-context preview showing timestamps inside message bubbles. */
export const InContext: StoryObj = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", maxWidth: "var(--space-90, 360px)" }}>
      {/* Separator */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DateTimestamp timestamp="Today" variant="separator" />
      </div>

      {/* Received bubble */}
      <div style={{ alignSelf: "flex-start", background: "var(--color-neutral-100)", borderRadius: "var(--radius-xl)", padding: "var(--space-2) var(--space-3)", maxWidth: "var(--space-70, 280px)" }}>
        <div style={{ fontSize: "var(--font-size-2)", color: "var(--color-neutral-900)", marginBottom: "var(--space-1)" }}>Yes, it's available.</div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <DateTimestamp timestamp="4:56 pm" variant="received" />
        </div>
      </div>

      {/* Sent bubble */}
      <div style={{ alignSelf: "flex-end", background: "var(--color-ep-600)", borderRadius: "var(--radius-xl)", padding: "var(--space-2) var(--space-3)", maxWidth: "var(--space-70, 280px)" }}>
        <div style={{ fontSize: "var(--font-size-2)", color: "var(--color-white)", marginBottom: "var(--space-1)" }}>I'll take it. Can you ship it?</div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span className="date-timestamp date-timestamp--sent" style={{ color: "rgba(255,255,255,0.7)" }}>
            <span className="date-timestamp__receipt date-timestamp__receipt--read" style={{ color: "var(--color-message-seen)" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8.5L5 11.5L11 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.5 8.5L8.5 11.5L14.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="date-timestamp__text">4:56 pm</span>
          </span>
        </div>
      </div>

      {/* Another received */}
      <div style={{ alignSelf: "flex-start", background: "var(--color-neutral-100)", borderRadius: "var(--radius-xl)", padding: "var(--space-2) var(--space-3)", maxWidth: "var(--space-70, 280px)" }}>
        <div style={{ fontSize: "var(--font-size-2)", color: "var(--color-neutral-900)", marginBottom: "var(--space-1)" }}>Sure! Sending them over now.</div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <DateTimestamp timestamp="4:58 pm" variant="received" />
        </div>
      </div>
    </div>
  ),
};

/** Interactive playground. */
export const Playground: StoryObj<typeof DateTimestamp> = {
  args: {
    timestamp: "4:56 pm",
    pattern: "time",
    variant: "sent",
    showReadReceipt: true,
    readStatus: "read",
  },
  parameters: { docs: { disable: true } },
};

/* ─── Helpers ─── */

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
      <span style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", width: 160, flexShrink: 0 }}>{label}</span>
      {children}
    </div>
  );
}
