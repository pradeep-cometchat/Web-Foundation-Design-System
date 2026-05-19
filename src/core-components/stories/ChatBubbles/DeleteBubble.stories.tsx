import type { Meta, StoryObj } from "@storybook/react";
import "./ChatBubbles.css";

const meta: Meta = {
  title: "Core Components/Chat Bubbles/Delete Bubble",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   SENT VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const SentRead: StoryObj = {
  name: "Sent — Read",
  parameters: { docs: { description: { story: "Deleted outgoing message with read receipt." } } },
  render: () => (
    <Wrapper>
      <DeleteBubble variant="sent" status="read" time="4:56 pm" />
    </Wrapper>
  ),
};

export const SentDelivered: StoryObj = {
  name: "Sent — Delivered",
  parameters: { docs: { description: { story: "Deleted outgoing message with delivered status." } } },
  render: () => (
    <Wrapper>
      <DeleteBubble variant="sent" status="delivered" time="4:56 pm" />
    </Wrapper>
  ),
};

export const SentSent: StoryObj = {
  name: "Sent — Sent",
  parameters: { docs: { description: { story: "Deleted outgoing message with sent status." } } },
  render: () => (
    <Wrapper>
      <DeleteBubble variant="sent" status="sent" time="4:56 pm" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   RECEIVED VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const ReceivedDefault: StoryObj = {
  name: "Received — Default",
  parameters: { docs: { description: { story: "Deleted incoming message." } } },
  render: () => (
    <Wrapper>
      <DeleteBubble variant="received" time="4:56 pm" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllVariants: StoryObj = {
  name: "All Variants",
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", width: 400, padding: "var(--space-4)" }}>
      <Label>Sent — Read</Label>
      <DeleteBubble variant="sent" status="read" time="4:56 pm" />
      <Label>Sent — Delivered</Label>
      <DeleteBubble variant="sent" status="delivered" time="4:56 pm" />
      <Label>Sent — Sent</Label>
      <DeleteBubble variant="sent" status="sent" time="4:56 pm" />
      <Label>Received</Label>
      <DeleteBubble variant="received" time="4:56 pm" />
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   USAGE / DOCS
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto" }}>
      <UsageSection title="HTML Structure">
        <CodeCard
          language="HTML"
          code={`<!-- Sent Delete Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body">
    <div class="delete-bubble__content">
      <span class="icon-rounded delete-bubble__icon">block</span>
      <span class="delete-bubble__text">This message was deleted</span>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt--read">✓✓</span>
    </div>
  </div>
</div>

<!-- Received Delete Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--received">
  <div class="chat-bubble-body">
    <div class="delete-bubble__content">
      <span class="icon-rounded delete-bubble__icon">block</span>
      <span class="delete-bubble__text">This message was deleted</span>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
    </div>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="CSS (Foundation Variables)">
        <CodeCard
          language="CSS"
          code={`.delete-bubble__content {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.delete-bubble__icon {
  font-size: 20px;
  --icon-fill: 0;
}

.chat-bubble-wrapper--sent .delete-bubble__icon {
  color: rgba(255, 255, 255, 0.7);
}

.chat-bubble-wrapper--received .delete-bubble__icon {
  color: var(--color-text-tertiary);
}

.delete-bubble__text {
  font-size: var(--font-size-2);
  font-style: italic;
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-body);
}

.chat-bubble-wrapper--sent .delete-bubble__text {
  color: rgba(255, 255, 255, 0.7);
}

.chat-bubble-wrapper--received .delete-bubble__text {
  color: var(--color-text-tertiary);
}`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Sent — Read" description="Purple background. Block icon + italic 'This message was deleted' in muted white. Green read receipt." />
          <StateCard title="Sent — Delivered" description="Same as read with double check in muted white." />
          <StateCard title="Sent — Sent" description="Same with single check in muted white." />
          <StateCard title="Received — Default" description="Light gray background. Block icon + italic text in muted dark. No receipt." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Block Icon" description="Material icon 'block' (outlined, 20px). Muted white on sent, muted dark on received." />
          <StateCard title="Message Text" description="'This message was deleted' — italic, regular weight, muted color." />
          <StateCard title="Timestamp + Receipt" description="Bottom-right aligned. Time + read receipt (sent only)." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Sent Background" description="var(--color-send-bubble-bg) — Primary purple" />
          <StateCard title="Received Background" description="var(--color-received-bubble-bg) — Light gray" />
          <StateCard title="Sent Text/Icon" description="rgba(255, 255, 255, 0.7) — Muted white" />
          <StateCard title="Received Text/Icon" description="var(--color-text-tertiary) — Muted dark" />
          <StateCard title="Border Radius" description="var(--radius-lg) with var(--radius-xs) on tail corner" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Web Desktop — Chat UI Kits → Delete Bubble section (node 4090:865230)" />
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function DeleteBubble({
  variant,
  status,
  time,
}: {
  variant: "sent" | "received";
  status?: "sent" | "delivered" | "read";
  time: string;
}) {
  const isSent = variant === "sent";

  return (
    <div className={`chat-bubble-wrapper chat-bubble-wrapper--${variant}`}>
      <div className="chat-bubble-body">
        {/* Content row */}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          <span
            className="icon-rounded"
            style={{
              fontSize: 20,
              color: isSent ? "rgba(255, 255, 255, 0.7)" : "var(--color-text-tertiary)",
              "--icon-fill": 0,
            } as React.CSSProperties}
          >
            block
          </span>
          <span
            style={{
              fontSize: "var(--font-size-2)",
              fontStyle: "italic",
              fontWeight: "var(--font-weight-regular)",
              fontFamily: "var(--font-family-body)",
              lineHeight: "var(--line-height-body)",
              color: isSent ? "rgba(255, 255, 255, 0.7)" : "var(--color-text-tertiary)",
            }}
          >
            This message was deleted
          </span>
        </div>

        {/* Meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "var(--space-1)",
            marginTop: "var(--space-1)",
          }}
        >
          <span className="chat-bubble-meta-time">{time}</span>
          {isSent && status && <ReceiptIcon status={status} />}
        </div>
      </div>
    </div>
  );
}

function ReceiptIcon({ status }: { status: "sent" | "delivered" | "read" }) {
  const isRead = status === "read";
  const color = isRead ? "#34D399" : "rgba(255, 255, 255, 0.7)";

  if (status === "sent") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 8.5L5 11.5L11 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 8.5L8.5 11.5L14.5 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Wrapper({ children, width = 400 }: { children: React.ReactNode; width?: number }) {
  return (
    <div
      style={{
        width,
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        padding: "var(--space-4)",
        background: "var(--color-bg-01)",
        borderRadius: "var(--radius-xl)",
        border: "1px solid var(--color-border-default)",
      }}
    >
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: "var(--font-size-0)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--color-text-tertiary)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
      }}
    >
      {children}
    </span>
  );
}

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "var(--space-6)" }}>
      <div
        style={{
          fontSize: "var(--font-size-1)",
          fontWeight: "var(--font-weight-semibold)",
          color: "var(--color-text-secondary)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: "var(--space-2)",
          paddingBottom: "var(--space-2)",
          borderBottom: "1px solid var(--color-border-default)",
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

function CodeCard({ language, code }: { language: string; code: string }) {
  return (
    <div
      style={{
        border: "1px solid var(--color-border-default)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        background: "var(--color-bg-02)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--space-2) var(--space-3)",
          borderBottom: "1px solid var(--color-border-default)",
          background: "var(--color-bg-03)",
        }}
      >
        <span
          style={{
            fontSize: "var(--font-size-0)",
            fontWeight: "var(--font-weight-semibold)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--color-text-secondary)",
          }}
        >
          {language}
        </span>
      </div>
      <pre
        style={{
          margin: 0,
          padding: "var(--space-3-5)",
          fontFamily: "var(--font-family-body)",
          fontSize: "var(--font-size-1)",
          lineHeight: 1.6,
          color: "var(--color-text-primary)",
          overflowX: "auto",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

function StateCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      style={{
        padding: "var(--space-3-5) var(--space-4)",
        border: "1px solid var(--color-border-default)",
        borderRadius: "var(--radius-xl)",
        background: "var(--color-bg-01)",
      }}
    >
      <strong
        style={{
          fontSize: "var(--font-size-2)",
          fontWeight: "var(--font-weight-semibold)",
          color: "var(--color-text-primary)",
          display: "block",
          marginBottom: "var(--space-1)",
        }}
      >
        {title}
      </strong>
      <span
        style={{
          fontSize: "var(--font-size-1)",
          color: "var(--color-text-tertiary)",
          lineHeight: "var(--line-height-caption-1)",
        }}
      >
        {description}
      </span>
    </div>
  );
}
