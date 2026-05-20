import type { Meta, StoryObj } from "@storybook/react";
import "./ChatBubbles.css";

const meta: Meta = {
  title: "Core Components/Chat Bubbles/Collaborative Document Bubble",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   SENT VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const SentDefault: StoryObj = {
  name: "Sent — Default",
  parameters: { docs: { description: { story: "Outgoing collaborative document bubble with read receipt." } } },
  render: () => (
    <Wrapper>
      <CollaborativeDocBubble variant="sent" status="read" time="4:56 pm" />
    </Wrapper>
  ),
};

export const SentDelivered: StoryObj = {
  name: "Sent — Delivered",
  parameters: { docs: { description: { story: "Outgoing collaborative document bubble with delivered status." } } },
  render: () => (
    <Wrapper>
      <CollaborativeDocBubble variant="sent" status="delivered" time="4:56 pm" />
    </Wrapper>
  ),
};

export const SentSent: StoryObj = {
  name: "Sent — Sent",
  parameters: { docs: { description: { story: "Outgoing collaborative document bubble with sent status." } } },
  render: () => (
    <Wrapper>
      <CollaborativeDocBubble variant="sent" status="sent" time="4:56 pm" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   RECEIVED VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const ReceivedDefault: StoryObj = {
  name: "Received — Default",
  parameters: { docs: { description: { story: "Incoming collaborative document bubble." } } },
  render: () => (
    <Wrapper>
      <CollaborativeDocBubble variant="received" time="4:56 pm" />
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
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)", width: 340, padding: "var(--cometchat-spacing-4)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>Sent — Read</Label>
        <CollaborativeDocBubble variant="sent" status="read" time="4:56 pm" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>Received</Label>
        <CollaborativeDocBubble variant="received" time="4:56 pm" />
      </div>
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
          code={`<!-- Sent Collaborative Document Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body collab-doc-bubble">
    <!-- Preview Image -->
    <div class="collab-doc-bubble__preview">
      <img src="..." alt="Document preview" />
    </div>

    <!-- Info Row -->
    <div class="collab-doc-bubble__info">
      <span class="icon-rounded collab-doc-bubble__icon">description</span>
      <div class="collab-doc-bubble__text">
        <span class="collab-doc-bubble__title">Collaborative Document</span>
        <span class="collab-doc-bubble__desc">Open document to edit content toge...</span>
      </div>
    </div>

    <!-- Separator + Action -->
    <div class="collab-doc-bubble__separator"></div>
    <div class="collab-doc-bubble__action">
      <span class="collab-doc-bubble__action-text">Open Document</span>
    </div>

    <!-- Meta -->
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt chat-bubble-meta-receipt--read">✓✓</span>
    </div>
  </div>
</div>

<!-- Received Collaborative Document Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--received">
  <div class="chat-bubble-body collab-doc-bubble">
    <div class="collab-doc-bubble__preview">
      <img src="..." alt="Document preview" />
    </div>
    <div class="collab-doc-bubble__info">
      <span class="icon-rounded collab-doc-bubble__icon">description</span>
      <div class="collab-doc-bubble__text">
        <span class="collab-doc-bubble__title">Collaborative Document</span>
        <span class="collab-doc-bubble__desc">Open document to edit content toge...</span>
      </div>
    </div>
    <div class="collab-doc-bubble__separator"></div>
    <div class="collab-doc-bubble__action">
      <span class="collab-doc-bubble__action-text">Open Document</span>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
    </div>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard
          language="CSS"
          code={`.collab-doc-bubble {
  padding: 0;
  overflow: hidden;
  min-width: 260px;
}

.collab-doc-bubble__preview {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: var(--cometchat-background-color-02);
  border-radius: var(--cometchat-radius-2);
  overflow: hidden;
  margin: var(--cometchat-spacing-2);
  margin-bottom: 0;
}

.collab-doc-bubble__info {
  display: flex;
  align-items: flex-start;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-3) var(--cometchat-spacing-2);
}

.collab-doc-bubble__icon {
  font-size: 24px;
  --icon-fill: 1;
}

/* Sent variant */
.chat-bubble-wrapper--sent .collab-doc-bubble__icon {
  color: var(--cometchat-static-white);
}

/* Received variant */
.chat-bubble-wrapper--received .collab-doc-bubble__icon {
  color: var(--cometchat-icon-color-highlight);
}

.collab-doc-bubble__title {
  font-size: 14px;
  font-weight: 500;
  line-height: 16.8px;
}

.chat-bubble-wrapper--sent .collab-doc-bubble__title {
  color: var(--cometchat-static-white);
}

.chat-bubble-wrapper--received .collab-doc-bubble__title {
  color: var(--cometchat-text-color-primary);
}

.collab-doc-bubble__desc {
  font-size: 12px;
  line-height: 14.4px;
}

.chat-bubble-wrapper--sent .collab-doc-bubble__desc {
  color: rgba(255, 255, 255, 0.7);
}

.chat-bubble-wrapper--received .collab-doc-bubble__desc {
  color: var(--cometchat-text-color-tertiary);
}

.collab-doc-bubble__separator {
  height: 1px;
  margin: 0;
}

.chat-bubble-wrapper--sent .collab-doc-bubble__separator {
  background: rgba(255, 255, 255, 0.2);
}

.chat-bubble-wrapper--received .collab-doc-bubble__separator {
  background: rgba(0, 0, 0, 0.12);
}

.collab-doc-bubble__action {
  padding: var(--cometchat-spacing-2-5) var(--cometchat-spacing-3);
  text-align: center;
}

.collab-doc-bubble__action-text {
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.chat-bubble-wrapper--sent .collab-doc-bubble__action-text {
  color: var(--cometchat-static-white);
}

.chat-bubble-wrapper--received .collab-doc-bubble__action-text {
  color: var(--cometchat-icon-color-highlight);
}`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Sent — Default" description="Purple background. White document icon, white title/description, white 'Open Document' button. Green read receipt." />
          <StateCard title="Sent — Delivered" description="Same as default with double check in muted white indicating delivery." />
          <StateCard title="Sent — Sent" description="Same as default with single check in muted white indicating sent." />
          <StateCard title="Received — Default" description="Light gray background. Purple document icon, dark title, gray description, purple 'Open Document' button. No receipt." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Preview Image" description="Document preview thumbnail at the top with rounded corners. Shows collaborative editing with user cursors." />
          <StateCard title="Document Icon" description="Material icon 'description' (filled, 24px). White on sent, purple on received." />
          <StateCard title="Title" description="'Collaborative Document' — semibold, primary size." />
          <StateCard title="Description" description="Truncated description text — 'Open document to edit content toge...' in muted color." />
          <StateCard title="Separator" description="Full-width 1px line dividing info from action." />
          <StateCard title="Action Button" description="'Open Document' — semibold, centered. White on sent, purple on received." />
          <StateCard title="Timestamp + Receipt" description="Bottom-right aligned. Time + read receipt (sent only)." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Sent Background" description="var(--cometchat-send-bubble-background) — Primary purple" />
          <StateCard title="Received Background" description="var(--cometchat-received-bubble-background) — Light gray" />
          <StateCard title="Preview Background" description="var(--cometchat-background-color-02) — Subtle gray for the preview area" />
          <StateCard title="Sent Separator" description="rgba(255, 255, 255, 0.2) — Semi-transparent white" />
          <StateCard title="Received Separator" description="rgba(0, 0, 0, 0.12) — Semi-transparent black" />
          <StateCard title="Action Text (Sent)" description="var(--cometchat-static-white)" />
          <StateCard title="Action Text (Received)" description="var(--cometchat-icon-color-highlight) — Purple" />
          <StateCard title="Border Radius" description="var(--cometchat-radius-3) — 12px uniform on all corners" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard
          title="Source File"
          description="Web Desktop — Chat UI Kits → Collaborative Document section (node 4104:458701)"
        />
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function CollaborativeDocBubble({
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
      <div
        className="chat-bubble-body"
        style={{ padding: 0, overflow: "hidden", minWidth: 260 }}
      >
        {/* Preview Image */}
        <div
          style={{
            margin: "var(--cometchat-spacing-2)",
            marginBottom: 0,
            borderRadius: "var(--cometchat-radius-2)",
            overflow: "hidden",
            background: "var(--cometchat-static-white)",
            aspectRatio: "4 / 3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <DocumentPreview />
        </div>

        {/* Info Row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--cometchat-spacing-2)",
            padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-3) var(--cometchat-spacing-2)",
          }}
        >
          <span
            style={{
              flexShrink: 0,
              color: isSent ? "var(--cometchat-static-white)" : "var(--cometchat-icon-color-highlight)",
              display: "flex",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 20.3865 21.4032" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14748C0 1.40917 1.40918 0 3.14749 0H13.8489C15.5873 0 16.9964 1.40918 16.9964 3.14749V8.5388C16.9964 8.70329 16.932 8.86125 16.8171 8.97886L12.75 13.1389L6.93259 18.7101C6.81541 18.8223 6.65943 18.8849 6.49719 18.8849H3.14749C1.40918 18.8849 0 17.4757 0 15.7374V3.14748ZM7.2393 2.95166C6.783 2.95166 6.41309 3.32157 6.41309 3.77788C6.41309 4.23418 6.783 4.60409 7.2393 4.60409H13.2195C13.6758 4.60409 14.0457 4.23418 14.0457 3.77788C14.0457 3.32157 13.6758 2.95166 13.2195 2.95166H7.2393ZM3.77641 6.41455C3.3201 6.41455 2.9502 6.78446 2.9502 7.24077C2.9502 7.69707 3.3201 8.06698 3.77641 8.06698H13.2189C13.6752 8.06698 14.0451 7.69707 14.0451 7.24077C14.0451 6.78446 13.6752 6.41455 13.2189 6.41455H3.77641ZM3.77641 9.87598C3.3201 9.87598 2.9502 10.2459 2.9502 10.7022C2.9502 11.1585 3.3201 11.5284 3.77641 11.5284H11.3304C11.7867 11.5284 12.1566 11.1585 12.1566 10.7022C12.1566 10.2459 11.7867 9.87598 11.3304 9.87598H3.77641Z" fill="currentColor"/>
              <path d="M19.1275 10.3341C18.6359 9.84242 17.8387 9.84242 17.3471 10.3341L9.41276 18.2684C9.3622 18.319 9.3294 18.3846 9.31929 18.4553L8.95206 21.0259C8.9209 21.244 9.10785 21.431 9.32596 21.3998L11.8965 21.0326C11.9673 21.0225 12.0329 20.9897 12.0835 20.9391L20.0178 13.0048C20.5095 12.5132 20.5095 11.716 20.0178 11.2243L19.1275 10.3341Z" fill="currentColor"/>
            </svg>
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                fontFamily: "var(--cometchat-font-family)",
                lineHeight: "20px",
                color: isSent ? "var(--cometchat-static-white)" : "var(--cometchat-text-color-primary)",
              }}
            >
              Collaborative Document
            </span>
            <span
              style={{
                fontSize: "12px",
                fontFamily: "var(--cometchat-font-family)",
                lineHeight: "18px",
                color: isSent ? "rgba(255, 255, 255, 0.7)" : "var(--cometchat-text-color-tertiary)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Open document to edit content toge...
            </span>
          </div>
        </div>

        {/* Separator */}
        <div
          style={{
            height: 1,
            background: isSent ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.12)",
          }}
        />

        {/* Action Button */}
        <div
          style={{
            padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-3)",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "var(--cometchat-font-family)",
              color: isSent ? "var(--cometchat-static-white)" : "var(--cometchat-icon-color-highlight)",
              cursor: "pointer",
            }}
          >
            Open Document
          </span>
        </div>

        {/* Meta — timestamp + receipt */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "var(--cometchat-spacing-1)",
            padding: "0 var(--cometchat-spacing-3) var(--cometchat-spacing-2)",
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
  const color = isRead ? "var(--cometchat-message-seen-color)" : "rgba(255, 255, 255, 0.7)";

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

function DocumentPreview() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 280 210" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ background: "#f5f5f5" }}>
      {/* Document page */}
      <rect x="60" y="20" width="160" height="180" rx="4" fill="#e8e8e8" />
      {/* Header block */}
      <rect x="75" y="35" width="50" height="50" rx="4" fill="#888" />
      <text x="92" y="68" fontSize="24" fontWeight="bold" fill="white">T</text>
      {/* Dark header area */}
      <rect x="135" y="35" width="70" height="25" rx="3" fill="#666" />
      {/* Text lines */}
      <rect x="135" y="68" width="70" height="3" rx="1.5" fill="#999" />
      <rect x="135" y="76" width="60" height="3" rx="1.5" fill="#999" />
      <rect x="135" y="84" width="70" height="3" rx="1.5" fill="#999" />
      {/* Body text lines */}
      <rect x="75" y="100" width="130" height="3" rx="1.5" fill="#bbb" />
      <rect x="75" y="110" width="130" height="3" rx="1.5" fill="#bbb" />
      <rect x="75" y="120" width="130" height="3" rx="1.5" fill="#bbb" />
      <rect x="75" y="130" width="130" height="3" rx="1.5" fill="#bbb" />
      <rect x="75" y="140" width="130" height="3" rx="1.5" fill="#bbb" />
      <rect x="75" y="150" width="130" height="3" rx="1.5" fill="#bbb" />
      <rect x="75" y="160" width="130" height="3" rx="1.5" fill="#bbb" />
      <rect x="75" y="170" width="100" height="3" rx="1.5" fill="#bbb" />
      {/* Cursor — Sarah (red) */}
      <polygon points="185,40 188,52 192,48" fill="#f87171" />
      <rect x="180" y="28" width="40" height="16" rx="4" fill="#fecaca" />
      <text x="188" y="39" fontSize="8" fill="#dc2626" fontWeight="500">Sarah</text>
      {/* Cursor — Jason (green) */}
      <polygon points="62,105 65,117 69,113" fill="#34d399" />
      <rect x="55" y="115" width="38" height="16" rx="4" fill="#d1fae5" />
      <text x="62" y="126" fontSize="8" fill="#059669" fontWeight="500">Jason</text>
      {/* Cursor — Stephen (purple) */}
      <polygon points="210,135 213,147 217,143" fill="#a78bfa" />
      <rect x="205" y="145" width="50" height="16" rx="4" fill="#ede9fe" />
      <text x="212" y="156" fontSize="8" fill="#7c3aed" fontWeight="500">Stephen</text>
    </svg>
  );
}

function Wrapper({ children, width = 340 }: { children: React.ReactNode; width?: number }) {
  return (
    <div
      style={{
        width,
        display: "flex",
        flexDirection: "column",
        gap: "var(--cometchat-spacing-4)",
        padding: "var(--cometchat-spacing-4)",
        background: "var(--cometchat-background-color-01)",
        borderRadius: "var(--cometchat-radius-3)",
        border: "1px solid var(--cometchat-border-color-default)",
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
        fontSize: "10px",
        fontWeight: "600",
        color: "var(--cometchat-text-color-tertiary)",
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
    <div style={{ marginBottom: "var(--cometchat-spacing-6)" }}>
      <div
        style={{
          fontSize: "12px",
          fontWeight: "600",
          color: "var(--cometchat-text-color-secondary)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: "var(--cometchat-spacing-2)",
          paddingBottom: "var(--cometchat-spacing-2)",
          borderBottom: "1px solid var(--cometchat-border-color-default)",
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
        border: "1px solid var(--cometchat-border-color-default)",
        borderRadius: "var(--cometchat-radius-3)",
        overflow: "hidden",
        background: "var(--cometchat-background-color-02)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)",
          borderBottom: "1px solid var(--cometchat-border-color-default)",
          background: "var(--cometchat-background-color-03)",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            fontWeight: "600",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--cometchat-text-color-secondary)",
          }}
        >
          {language}
        </span>
      </div>
      <pre
        style={{
          margin: 0,
          padding: "var(--cometchat-spacing-3-5)",
          fontFamily: "var(--cometchat-font-family)",
          fontSize: "12px",
          lineHeight: 1.6,
          color: "var(--cometchat-text-color-primary)",
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
        padding: "var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",
        border: "1px solid var(--cometchat-border-color-default)",
        borderRadius: "var(--cometchat-radius-3)",
        background: "var(--cometchat-background-color-01)",
      }}
    >
      <strong
        style={{
          fontSize: "14px",
          fontWeight: "600",
          color: "var(--cometchat-text-color-primary)",
          display: "block",
          marginBottom: "var(--cometchat-spacing-1)",
        }}
      >
        {title}
      </strong>
      <span
        style={{
          fontSize: "12px",
          color: "var(--cometchat-text-color-tertiary)",
          lineHeight: "18px",
        }}
      >
        {description}
      </span>
    </div>
  );
}

/** Interactive playground. */
export const Playground: StoryObj = {
  parameters: { docs: { disable: true } },
};
