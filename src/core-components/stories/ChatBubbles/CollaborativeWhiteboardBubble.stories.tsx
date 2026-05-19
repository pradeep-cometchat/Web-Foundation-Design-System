import type { Meta, StoryObj } from "@storybook/react";
import "./ChatBubbles.css";

const meta: Meta = {
  title: "Core Components/Chat Bubbles/Collaborative Whiteboard Bubble",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   SENT VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const SentDefault: StoryObj = {
  name: "Sent — Default",
  parameters: { docs: { description: { story: "Outgoing collaborative whiteboard bubble with read receipt." } } },
  render: () => (
    <Wrapper>
      <WhiteboardBubble variant="sent" status="read" time="4:56 pm" />
    </Wrapper>
  ),
};

export const SentDelivered: StoryObj = {
  name: "Sent — Delivered",
  parameters: { docs: { description: { story: "Outgoing collaborative whiteboard bubble with delivered status." } } },
  render: () => (
    <Wrapper>
      <WhiteboardBubble variant="sent" status="delivered" time="4:56 pm" />
    </Wrapper>
  ),
};

export const SentSent: StoryObj = {
  name: "Sent — Sent",
  parameters: { docs: { description: { story: "Outgoing collaborative whiteboard bubble with sent status." } } },
  render: () => (
    <Wrapper>
      <WhiteboardBubble variant="sent" status="sent" time="4:56 pm" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   RECEIVED VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const ReceivedDefault: StoryObj = {
  name: "Received — Default",
  parameters: { docs: { description: { story: "Incoming collaborative whiteboard bubble." } } },
  render: () => (
    <Wrapper>
      <WhiteboardBubble variant="received" time="4:56 pm" />
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
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", width: 340, padding: "var(--space-4)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Sent — Read</Label>
        <WhiteboardBubble variant="sent" status="read" time="4:56 pm" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Received</Label>
        <WhiteboardBubble variant="received" time="4:56 pm" />
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
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto" }}>
      <UsageSection title="HTML Structure">
        <CodeCard
          language="HTML"
          code={`<!-- Sent Collaborative Whiteboard Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body collab-wb-bubble">
    <div class="collab-wb-bubble__preview">
      <img src="..." alt="Whiteboard preview" />
    </div>
    <div class="collab-wb-bubble__info">
      <span class="collab-wb-bubble__icon"><!-- SVG icon --></span>
      <div class="collab-wb-bubble__text">
        <span class="collab-wb-bubble__title">Collaborative Whiteboard</span>
        <span class="collab-wb-bubble__desc">Open whiteboard to draw together</span>
      </div>
    </div>
    <div class="collab-wb-bubble__separator"></div>
    <div class="collab-wb-bubble__action">
      <span class="collab-wb-bubble__action-text">Open Whiteboard</span>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt--read">✓✓</span>
    </div>
  </div>
</div>

<!-- Received Collaborative Whiteboard Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--received">
  <div class="chat-bubble-body collab-wb-bubble">
    <div class="collab-wb-bubble__preview">...</div>
    <div class="collab-wb-bubble__info">...</div>
    <div class="collab-wb-bubble__separator"></div>
    <div class="collab-wb-bubble__action">
      <span class="collab-wb-bubble__action-text">Open Whiteboard</span>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
    </div>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Sent — Default" description="Purple background. White whiteboard icon, white title/description, white 'Open Whiteboard' button. Green read receipt." />
          <StateCard title="Sent — Delivered" description="Same as default with double check in muted white indicating delivery." />
          <StateCard title="Sent — Sent" description="Same as default with single check in muted white indicating sent." />
          <StateCard title="Received — Default" description="Light gray background. Purple whiteboard icon, dark title, gray description, purple 'Open Whiteboard' button. No receipt." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Preview Image" description="Whiteboard preview with dotted grid background, text boxes with selection handles, and collaborative cursors (Sarah, Jason, Stephen)." />
          <StateCard title="Whiteboard Icon" description="Custom SVG whiteboard icon (from ActionSheet). White on sent, purple on received." />
          <StateCard title="Title" description="'Collaborative Whiteboard' — semibold, primary size." />
          <StateCard title="Description" description="'Open whiteboard to draw together' in muted color." />
          <StateCard title="Separator" description="Full-width 1px line dividing info from action." />
          <StateCard title="Action Button" description="'Open Whiteboard' — semibold, centered. White on sent, purple on received." />
          <StateCard title="Timestamp + Receipt" description="Bottom-right aligned. Time + read receipt (sent only)." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Sent Background" description="var(--color-send-bubble-bg) — Primary purple" />
          <StateCard title="Received Background" description="var(--color-received-bubble-bg) — Light gray" />
          <StateCard title="Preview Background" description="White with dotted grid pattern" />
          <StateCard title="Sent Separator" description="rgba(255, 255, 255, 0.2) — Semi-transparent white" />
          <StateCard title="Received Separator" description="rgba(0, 0, 0, 0.12) — Semi-transparent black" />
          <StateCard title="Action Text (Sent)" description="var(--color-static-white)" />
          <StateCard title="Action Text (Received)" description="var(--color-icon-highlight-primary) — Purple" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Web Desktop — Chat UI Kits → Collaborative Whiteboard section (node 4104:453092)" />
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function WhiteboardBubble({
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
      <div className="chat-bubble-body" style={{ padding: 0, overflow: "hidden", minWidth: 260 }}>
        {/* Preview Image */}
        <div
          style={{
            margin: "var(--space-2)",
            marginBottom: 0,
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            background: "var(--color-static-white)",
            aspectRatio: "4 / 3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <WhiteboardPreview />
        </div>

        {/* Info Row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--space-2)",
            padding: "var(--space-3) var(--space-3) var(--space-2)",
          }}
        >
          <span
            style={{
              flexShrink: 0,
              color: isSent ? "var(--color-static-white)" : "var(--color-icon-highlight-primary)",
              display: "flex",
            }}
          >
            <WhiteboardIcon />
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
            <span
              style={{
                fontSize: "var(--font-size-2)",
                fontWeight: "var(--font-weight-semibold)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-body)",
                color: isSent ? "var(--color-static-white)" : "var(--color-text-primary)",
              }}
            >
              Collaborative Whiteboard
            </span>
            <span
              style={{
                fontSize: "var(--font-size-1)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-caption-1)",
                color: isSent ? "rgba(255, 255, 255, 0.7)" : "var(--color-text-tertiary)",
              }}
            >
              Open whiteboard to draw together
            </span>
          </div>
        </div>

        {/* Separator */}
        <div style={{ height: 1, background: isSent ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.12)" }} />

        {/* Action Button */}
        <div style={{ padding: "var(--space-3)", textAlign: "center" }}>
          <span
            style={{
              fontSize: "var(--font-size-2)",
              fontWeight: "var(--font-weight-semibold)",
              fontFamily: "var(--font-family-body)",
              color: isSent ? "var(--color-static-white)" : "var(--color-icon-highlight-primary)",
              cursor: "pointer",
            }}
          >
            Open Whiteboard
          </span>
        </div>

        {/* Meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "var(--space-1)",
            padding: "0 var(--space-3) var(--space-2)",
          }}
        >
          <span className="chat-bubble-meta-time">{time}</span>
          {isSent && status && <ReceiptIcon status={status} />}
        </div>
      </div>
    </div>
  );
}

function WhiteboardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 20.16 15.84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.4679 0H18.24C19.135 0 19.887 0.612421 20.0998 1.44108L14.6916 6.84924C14.6549 6.88596 14.6073 6.90978 14.5559 6.91712L12.576 7.19996C12.4176 7.22259 12.2818 7.08683 12.3044 6.92843L12.5873 4.94854C12.5946 4.89713 12.6184 4.84949 12.6552 4.81277L17.4679 0Z" fill="currentColor"/>
      <path d="M15.3466 0L11.5945 3.75211C11.3283 4.01833 11.1556 4.3637 11.1024 4.7364L10.8195 6.7163C10.6555 7.86464 11.6397 8.84894 12.7881 8.68489L14.768 8.40205C15.1407 8.3488 15.4861 8.17611 15.7523 7.9099L20.16 3.50218V13.92C20.16 14.9804 19.3004 15.84 18.24 15.84H1.92C0.859616 15.84 0 14.9804 0 13.92V10.03C0.138008 10.0301 0.277687 9.99222 0.402751 9.91263L0.586065 9.79595C1.58623 9.15927 3.7211 7.80027 4.3322 7.45107C4.43421 7.39278 4.63006 7.32443 4.87351 7.29801C5.11445 7.27186 5.33773 7.29385 5.5019 7.35405C5.65327 7.40955 5.73091 7.48567 5.77426 7.58151C5.82369 7.69078 5.8772 7.93568 5.75398 8.4121C5.51412 9.33959 5.26658 10.4095 5.33946 11.3038C5.37704 11.765 5.50392 12.2502 5.82249 12.6542C6.15314 13.0735 6.62627 13.3246 7.19678 13.4197C8.33384 13.6092 9.37679 12.938 10.107 12.3036C10.8753 11.6361 11.5146 10.8173 11.8801 10.3299C12.1286 9.99852 12.0615 9.52842 11.7301 9.27989C11.3987 9.03136 10.9286 9.09852 10.6801 9.42989C10.3256 9.90251 9.76491 10.6137 9.12321 11.1712C8.4434 11.7619 7.86635 12.0106 7.4434 11.9401C7.17392 11.8952 7.06101 11.8023 7.00036 11.7254C6.92763 11.6332 6.85796 11.4699 6.8345 11.182C6.78531 10.5784 6.95777 9.74828 7.2062 8.78768C7.38299 8.1041 7.37649 7.48399 7.14093 6.96326C6.89928 6.42911 6.46692 6.11023 6.01829 5.94573C5.58246 5.78593 5.11574 5.76292 4.71167 5.80677C4.31013 5.85035 3.90598 5.967 3.58799 6.14871C2.98422 6.49372 1.05774 7.71764 0 8.39088V1.92C0 0.859613 0.859613 0 1.92 0H15.3466Z" fill="currentColor"/>
    </svg>
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

function WhiteboardPreview() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 280 210" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dotted grid background */}
      <rect width="280" height="210" fill="#fafafa" />
      <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.6" fill="#ddd" />
      </pattern>
      <rect width="280" height="210" fill="url(#dots)" />
      {/* Text box 1 — "Collaborative" */}
      <rect x="50" y="50" width="160" height="50" fill="#f0f0f0" stroke="#888" strokeWidth="1" />
      {/* Selection handles */}
      <rect x="46" y="46" width="8" height="8" fill="#666" />
      <rect x="126" y="46" width="8" height="8" fill="#666" />
      <rect x="206" y="46" width="8" height="8" fill="#666" />
      <rect x="46" y="71" width="8" height="8" fill="#666" />
      <rect x="206" y="71" width="8" height="8" fill="#666" />
      <rect x="46" y="96" width="8" height="8" fill="#666" />
      <rect x="126" y="96" width="8" height="8" fill="#666" />
      <rect x="206" y="96" width="8" height="8" fill="#666" />
      <text x="75" y="82" fontSize="18" fontWeight="500" fill="#333">Collaborative</text>
      {/* Text box 2 — "Whiteboard" */}
      <rect x="90" y="120" width="140" height="50" fill="#f0f0f0" stroke="#888" strokeWidth="1" />
      <rect x="86" y="116" width="8" height="8" fill="#666" />
      <rect x="156" y="116" width="8" height="8" fill="#666" />
      <rect x="226" y="116" width="8" height="8" fill="#666" />
      <rect x="86" y="141" width="8" height="8" fill="#666" />
      <rect x="226" y="141" width="8" height="8" fill="#666" />
      <rect x="86" y="166" width="8" height="8" fill="#666" />
      <rect x="156" y="166" width="8" height="8" fill="#666" />
      <rect x="226" y="166" width="8" height="8" fill="#666" />
      <text x="115" y="152" fontSize="18" fontWeight="500" fill="#333">Whiteboard</text>
      {/* Cursor — Sarah (red) */}
      <polygon points="175,35 178,47 182,43" fill="#f87171" />
      <rect x="170" y="22" width="40" height="16" rx="4" fill="#fecaca" />
      <text x="178" y="33" fontSize="8" fill="#dc2626" fontWeight="500">Sarah</text>
      {/* Cursor — Jason (green) */}
      <polygon points="42" y="110" fill="#34d399" />
      <polygon points="42,110 45,122 49,118" fill="#34d399" />
      <rect x="35" y="120" width="38" height="16" rx="4" fill="#d1fae5" />
      <text x="42" y="131" fontSize="8" fill="#059669" fontWeight="500">Jason</text>
      {/* Cursor — Stephen (purple) */}
      <polygon points="220,155 223,167 227,163" fill="#a78bfa" />
      <rect x="215" y="165" width="50" height="16" rx="4" fill="#ede9fe" />
      <text x="222" y="176" fontSize="8" fill="#7c3aed" fontWeight="500">Stephen</text>
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
