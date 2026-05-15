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
      <div style={{ alignSelf: "flex-start", background: "var(--color-received-bubble-bg)", borderRadius: "var(--radius-xl)", padding: "var(--space-2) var(--space-3)", maxWidth: "var(--space-70, 280px)" }}>
        <div style={{ fontSize: "var(--font-size-2)", color: "var(--color-received-bubble-text)", marginBottom: "var(--space-1)" }}>Yes, it's available.</div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <DateTimestamp timestamp="4:56 pm" variant="received" />
        </div>
      </div>

      {/* Sent bubble */}
      <div style={{ alignSelf: "flex-end", background: "var(--color-send-bubble-bg)", borderRadius: "var(--radius-xl)", padding: "var(--space-2) var(--space-3)", maxWidth: "var(--space-70, 280px)" }}>
        <div style={{ fontSize: "var(--font-size-2)", color: "var(--color-send-bubble-text)", marginBottom: "var(--space-1)" }}>I'll take it. Can you ship it?</div>
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
      <div style={{ alignSelf: "flex-start", background: "var(--color-received-bubble-bg)", borderRadius: "var(--radius-xl)", padding: "var(--space-2) var(--space-3)", maxWidth: "var(--space-70, 280px)" }}>
        <div style={{ fontSize: "var(--font-size-2)", color: "var(--color-received-bubble-text)", marginBottom: "var(--space-1)" }}>Sure! Sending them over now.</div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <DateTimestamp timestamp="4:58 pm" variant="received" />
        </div>
      </div>
    </div>
  ),
};

/** HTML & CSS usage reference for the Date Timestamp component. */
export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <Section title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- Sent message timestamp with read receipt -->
<span class="date-timestamp date-timestamp--sent">
  <span class="date-timestamp__receipt date-timestamp__receipt--read">
    <!-- double-tick SVG -->
  </span>
  <span class="date-timestamp__text">4:56 pm</span>
</span>

<!-- Received message timestamp -->
<span class="date-timestamp date-timestamp--received">
  <span class="date-timestamp__text">4:56 pm</span>
</span>

<!-- Date separator chip -->
<span class="date-timestamp date-timestamp--separator">Today</span>`} />
      </Section>
      <Section title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={`.date-timestamp {
  display: inline-flex;
  align-items: center;
  gap: var(--space-0-5);
  height: 24px;
  font-family: var(--font-family-body);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-caption-2);
}

.date-timestamp--sent {
  color: var(--color-text-tertiary);
}

.date-timestamp--received {
  color: var(--color-text-tertiary);
}

.date-timestamp--separator {
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
  background: var(--color-bg-03);
  border-radius: var(--radius-full);
  padding: var(--space-0-5) var(--space-2);
  height: auto;
}

.date-timestamp__receipt {
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
}

.date-timestamp__receipt--read {
  color: var(--color-message-seen);
}`} />
      </Section>
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


/* ─── Usage helpers ─── */

const UsageCodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div style={{ border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--color-bg-01)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--color-border-default)", background: "var(--color-bg-02)" }}>
      <span style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-tertiary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: "var(--space-3-5)", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-1)", lineHeight: 1.6, color: "var(--color-text-primary)", overflowX: "auto" }}>
      <code>{code}</code>
    </pre>
  </div>
);

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>{title}</div>
      {children}
    </div>
  );
}
