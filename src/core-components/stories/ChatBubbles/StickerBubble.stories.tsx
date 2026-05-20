import type { Meta, StoryObj } from "@storybook/react";
import "./ChatBubbles.css";

const meta: Meta = {
  title: "Core Components/Chat Bubbles/Sticker Bubble",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

const STICKERS = [
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b93ef91c-07e3-4c69-8c3b-abe87a2007bf",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82839107-6efc-4a55-a53d-da2460f7111c",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99d357d1-7499-4f9d-806d-b0e28e4fc953",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c81c176-7d75-47ec-90a2-22df905a8cb0",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07293b78-a1d8-489c-ad60-0d3a1a25ccc4",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df84d621-8da9-4e3c-b732-9118ab70eb24",
];

/* ═══════════════════════════════════════════════════════════════════════════
   SENT VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const SentDefault: StoryObj = {
  name: "Sent — Default",
  parameters: { docs: { description: { story: "Outgoing sticker bubble with read receipt." } } },
  render: () => (
    <Wrapper>
      <StickerBubble variant="sent" status="read" stickerUrl={STICKERS[0]} time="4:56 pm" />
    </Wrapper>
  ),
};

export const SentDelivered: StoryObj = {
  name: "Sent — Delivered",
  render: () => (
    <Wrapper>
      <StickerBubble variant="sent" status="delivered" stickerUrl={STICKERS[1]} time="4:56 pm" />
    </Wrapper>
  ),
};

export const SentSent: StoryObj = {
  name: "Sent — Sent",
  render: () => (
    <Wrapper>
      <StickerBubble variant="sent" status="sent" stickerUrl={STICKERS[2]} time="4:56 pm" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   RECEIVED VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const ReceivedDefault: StoryObj = {
  name: "Received — Default",
  parameters: { docs: { description: { story: "Incoming sticker bubble." } } },
  render: () => (
    <Wrapper>
      <StickerBubble variant="received" stickerUrl={STICKERS[0]} time="4:56 pm" />
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
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-6)", padding: "var(--space-4)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Sent — Read</Label>
        <StickerBubble variant="sent" status="read" stickerUrl={STICKERS[0]} time="4:56 pm" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Sent — Delivered</Label>
        <StickerBubble variant="sent" status="delivered" stickerUrl={STICKERS[1]} time="4:56 pm" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Sent — Sent</Label>
        <StickerBubble variant="sent" status="sent" stickerUrl={STICKERS[2]} time="4:56 pm" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Received</Label>
        <StickerBubble variant="received" stickerUrl={STICKERS[0]} time="4:56 pm" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Received (Sticker 2)</Label>
        <StickerBubble variant="received" stickerUrl={STICKERS[1]} time="4:56 pm" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Received (Sticker 3)</Label>
        <StickerBubble variant="received" stickerUrl={STICKERS[2]} time="4:56 pm" />
      </div>
    </div>
  ),
};

export const AllStickers: StoryObj = {
  name: "All Stickers (Sent)",
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", padding: "var(--space-4)" }}>
      {STICKERS.map((url, i) => (
        <StickerBubble key={i} variant="sent" status="read" stickerUrl={url} time="4:56 pm" />
      ))}
    </div>
  ),
};

export const AllStickersReceived: StoryObj = {
  name: "All Stickers (Received)",
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", padding: "var(--space-4)" }}>
      {STICKERS.map((url, i) => (
        <StickerBubble key={i} variant="received" stickerUrl={url} time="4:56 pm" />
      ))}
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
          code={`<!-- Sent Sticker Bubble -->
<div class="sticker-bubble sticker-bubble--sent">
  <div class="sticker-bubble__image">
    <img src="sticker-01.png" alt="Sticker" />
  </div>
  <div class="sticker-bubble__meta">
    <span class="sticker-bubble__time">4:56 pm</span>
    <span class="sticker-bubble__receipt">✓✓</span>
  </div>
</div>

<!-- Received Sticker Bubble -->
<div class="sticker-bubble sticker-bubble--received">
  <div class="sticker-bubble__image">
    <img src="sticker-01.png" alt="Sticker" />
  </div>
  <div class="sticker-bubble__meta">
    <span class="sticker-bubble__time">4:56 pm</span>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Sent — Read" description="Purple background bubble with sticker image centered. Green read receipt + timestamp at bottom-right." />
          <StateCard title="Sent — Delivered" description="Same with muted white double-check." />
          <StateCard title="Sent — Sent" description="Same with muted white single-check." />
          <StateCard title="Received — Default" description="Gray background bubble with sticker image centered. Timestamp only, no receipt." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Bubble Background" description="Rounded container (var(--radius-xl)) with sent/received background color." />
          <StateCard title="Sticker Image" description="PNG with transparent background, rendered at 160×160 centered in the bubble." />
          <StateCard title="Timestamp + Receipt" description="Bottom-right aligned below the sticker. Same pattern as other bubbles." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Sent Background" description="var(--color-send-bubble-bg) — Primary purple" />
          <StateCard title="Received Background" description="var(--color-received-bubble-bg) — Light gray" />
          <StateCard title="Sticker Size" description="160×160px in chat bubble context" />
          <StateCard title="Border Radius" description="var(--radius-xl) — 12px uniform corners" />
          <StateCard title="Source" description="avatarRegistry['Sticker Footage'] from foundation/tokens/avatars.ts" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Web Desktop — Chat UI Kits → Sticker Bubble (node 4080:303913)" />
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function StickerBubble({
  variant,
  status,
  stickerUrl,
  time,
}: {
  variant: "sent" | "received";
  status?: "sent" | "delivered" | "read";
  stickerUrl: string;
  time: string;
}) {
  const isSent = variant === "sent";

  return (
    <div
      style={{
        borderRadius: "var(--radius-xl)",
        background: isSent ? "var(--color-send-bubble-bg)" : "var(--color-received-bubble-bg)",
        padding: "var(--space-3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-2)",
        width: 220,
      }}
    >
      {/* Sticker image */}
      <img
        src={stickerUrl}
        alt="Sticker"
        style={{ width: 160, height: 160, objectFit: "contain" }}
      />

      {/* Meta — timestamp + receipt */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "var(--space-1)",
          width: "100%",
        }}
      >
        <span style={{ fontSize: "var(--font-size-1)", color: isSent ? "rgba(255,255,255,0.7)" : "var(--color-text-tertiary)" }}>{time}</span>
        {isSent && status && <ReceiptIcon status={status} />}
      </div>
    </div>
  );
}

function ReceiptIcon({ status }: { status: "sent" | "delivered" | "read" }) {
  const isRead = status === "read";
  const color = isRead ? "var(--color-message-seen)" : "rgba(255, 255, 255, 0.7)";
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

function Wrapper({ children, width = 280 }: { children: React.ReactNode; width?: number }) {
  return (
    <div style={{ width, display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-4)", background: "var(--color-bg-01)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border-default)" }}>
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
      {children}
    </span>
  );
}

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
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

function StateCard({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ padding: "var(--space-3-5) var(--space-4)", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", background: "var(--color-bg-01)" }}>
      <strong style={{ fontSize: "var(--font-size-2)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-primary)", display: "block", marginBottom: "var(--space-1)" }}>{title}</strong>
      <span style={{ fontSize: "var(--font-size-1)", color: "var(--color-text-tertiary)", lineHeight: "var(--line-height-caption-1)" }}>{description}</span>
    </div>
  );
}

/** Interactive playground. */
export const Playground: StoryObj = {
  parameters: { docs: { disable: true } },
};
