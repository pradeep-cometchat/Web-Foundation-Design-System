import type { Meta, StoryObj } from "@storybook/react";
import "./ChatBubbles.css";

const meta: Meta = {
  title: "Core Components/Chat Bubbles/Text Bubble",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   SENT VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const SentRead: StoryObj = {
  name: "Sent — Read",
  parameters: { docs: { description: { story: "Outgoing text message with read receipt." } } },
  render: () => (
    <Wrapper>
      <TextBubble variant="sent" status="read" message="Hi, is the watch still up for sale?" time="4:56 pm" />
    </Wrapper>
  ),
};

export const SentDelivered: StoryObj = {
  name: "Sent — Delivered",
  parameters: { docs: { description: { story: "Outgoing text message with delivered status." } } },
  render: () => (
    <Wrapper>
      <TextBubble variant="sent" status="delivered" message="Hi, is the watch still up for sale?" time="4:56 pm" />
    </Wrapper>
  ),
};

export const SentSent: StoryObj = {
  name: "Sent — Sent",
  parameters: { docs: { description: { story: "Outgoing text message with sent status." } } },
  render: () => (
    <Wrapper>
      <TextBubble variant="sent" status="sent" message="Hi, is the watch still up for sale?" time="4:56 pm" />
    </Wrapper>
  ),
};

export const SentLongText: StoryObj = {
  name: "Sent — Long Text (Read More)",
  parameters: { docs: { description: { story: "Outgoing long text message truncated with a 'Read more' link." } } },
  render: () => (
    <Wrapper>
      <TextBubble variant="sent" status="read" message="Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to..." time="4:56 pm" truncate />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   RECEIVED VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const ReceivedDefault: StoryObj = {
  name: "Received — Default",
  parameters: { docs: { description: { story: "Incoming text message." } } },
  render: () => (
    <Wrapper>
      <TextBubble variant="received" message="Sure! Sending them over now." time="4:56 pm" />
    </Wrapper>
  ),
};

export const ReceivedLongText: StoryObj = {
  name: "Received — Long Text (Read More)",
  parameters: { docs: { description: { story: "Incoming long text message truncated with a 'Read more' link." } } },
  render: () => (
    <Wrapper>
      <TextBubble variant="received" message="Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to..." time="4:56 pm" truncate />
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
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)", width: 400, padding: "var(--cometchat-spacing-4)" }}>
      <Label>Sent — Read</Label>
      <TextBubble variant="sent" status="read" message="Hi, is the watch still up for sale?" time="4:56 pm" />
      <Label>Sent — Delivered</Label>
      <TextBubble variant="sent" status="delivered" message="Hi, is the watch still up for sale?" time="4:56 pm" />
      <Label>Sent — Sent</Label>
      <TextBubble variant="sent" status="sent" message="Hi, is the watch still up for sale?" time="4:56 pm" />
      <Label>Sent — Long Text</Label>
      <TextBubble variant="sent" status="read" message="Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to..." time="4:56 pm" truncate />
      <Label>Received</Label>
      <TextBubble variant="received" message="Sure! Sending them over now." time="4:56 pm" />
      <Label>Received — Long Text</Label>
      <TextBubble variant="received" message="Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included the tracking number in the email I sent earlier. Let me know if you have any questions about the delivery timeline or if you need me to..." time="4:56 pm" truncate />
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   USAGE / DOCS
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <UsageSection title="HTML Structure">
        <CodeCard
          language="HTML"
          code={`<!-- Sent Text Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body">
    <p class="chat-bubble-text">Hi, is the watch still up for sale?</p>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt chat-bubble-meta-receipt--read">✓✓</span>
    </div>
  </div>
</div>

<!-- Received Text Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--received">
  <div class="chat-bubble-body">
    <p class="chat-bubble-text">Sure! Sending them over now.</p>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
    </div>
  </div>
</div>

<!-- Long Text with Read More -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body">
    <p class="chat-bubble-text chat-bubble-text--truncated">
      Hey! I just wanted to let you know that...
    </p>
    <a class="chat-bubble-read-more">Read more</a>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt chat-bubble-meta-receipt--read">✓✓</span>
    </div>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Sent — Read" description="Purple background. White text. Green double-check receipt icon." />
          <StateCard title="Sent — Delivered" description="Purple background. White text. Muted white double-check receipt icon." />
          <StateCard title="Sent — Sent" description="Purple background. White text. Muted white single-check receipt icon." />
          <StateCard title="Sent — Long Text" description="Purple background. Truncated text with 'Read more' link in white." />
          <StateCard title="Received — Default" description="Gray background. Dark text. Timestamp only, no receipt." />
          <StateCard title="Received — Long Text" description="Gray background. Truncated text with 'Read more' link in purple." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Message Text" description="Regular weight body text. White on sent, dark on received." />
          <StateCard title="Read More Link" description="Shown when text exceeds max lines. White on sent, purple on received. Clickable." />
          <StateCard title="Timestamp" description="Small muted text at bottom-right (e.g. '4:56 pm')." />
          <StateCard title="Receipt Status" description="Sent only. ✓ sent, ✓✓ delivered (muted), ✓✓ read (green)." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Sent Background" description="var(--cometchat-send-bubble-background) — Primary purple" />
          <StateCard title="Received Background" description="var(--cometchat-received-bubble-background) — Light gray" />
          <StateCard title="Sent Text" description="var(--cometchat-static-white)" />
          <StateCard title="Received Text" description="var(--cometchat-text-color-primary)" />
          <StateCard title="Sent Timestamp" description="rgba(255, 255, 255, 0.7)" />
          <StateCard title="Received Timestamp" description="var(--cometchat-text-color-tertiary)" />
          <StateCard title="Read More (Sent)" description="var(--cometchat-static-white) — underlined" />
          <StateCard title="Read More (Received)" description="var(--cometchat-icon-color-highlight) — purple" />
          <StateCard title="Border Radius" description="var(--cometchat-radius-3) — 12px uniform on all corners" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Web Desktop — Chat UI Kits → Text Bubble section (node 4080:241111)" />
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function TextBubble({
  variant,
  status,
  message,
  time,
  truncate,
}: {
  variant: "sent" | "received";
  status?: "sent" | "delivered" | "read";
  message: string;
  time: string;
  truncate?: boolean;
}) {
  const isSent = variant === "sent";
  const maxChars = 120;
  const displayText = truncate && message.length > maxChars ? message.slice(0, maxChars) + "..." : message;

  return (
    <div className={`chat-bubble-wrapper chat-bubble-wrapper--${variant}`}>
      <div className="chat-bubble-body">
        {/* Message text */}
        <span
          style={{
            fontSize: "14px",
            fontFamily: "var(--cometchat-font-family)",
            fontWeight: "400",
            lineHeight: "20px",
            color: isSent ? "var(--cometchat-static-white)" : "var(--cometchat-text-color-primary)",
            wordBreak: "break-word",
          }}
        >
          {displayText}
          {/* Read more link — inline */}
          {truncate && message.length > maxChars && (
            <span
              style={{
                marginLeft: "var(--cometchat-spacing)",
                fontSize: "14px",
                fontFamily: "var(--cometchat-font-family)",
                fontWeight: "500",
                color: isSent ? "var(--cometchat-static-white)" : "var(--cometchat-icon-color-highlight)",
                cursor: "pointer",
              }}
            >
              Read more
            </span>
          )}
        </span>

        {/* Meta — timestamp + receipt */}
        <div className="chat-bubble-meta">
          <span className="chat-bubble-meta-time">{time}</span>
          {isSent && status && <ReceiptIcon status={status} />}
        </div>
      </div>
    </div>
  );
}

function ReceiptIcon({ status }: { status: "sent" | "delivered" | "read" }) {
  const isRead = status === "read";
  const color = isRead ? "var(--cometchat-message-seen-color)" : "rgba(255, 255, 255, 0.7)";

  if (status === "sent") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 8.5L5 11.5L11 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 8.5L8.5 11.5L14.5 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Wrapper({ children, width = 400 }: { children: React.ReactNode; width?: number }) {
  return (
    <div style={{ width, display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)", padding: "var(--cometchat-spacing-4)", background: "var(--cometchat-background-color-01)", borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-default)" }}>
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: "10px", fontWeight: "600", color: "var(--cometchat-text-color-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
      {children}
    </span>
  );
}

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
