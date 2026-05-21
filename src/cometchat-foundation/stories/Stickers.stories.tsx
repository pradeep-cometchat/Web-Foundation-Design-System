import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { avatarRegistry } from "../tokens/avatars";
import "../tokens/cometchat-tokens.css";

/**
 * Stickers are illustrated character expressions used in chat messages.
 * Each sticker is a pre-rendered PNG asset from the design system's avatar registry.
 *
 * Source: `foundation/tokens/avatars.ts` → "Sticker Footage" category.
 */
const meta: Meta = {
  title: "CometChat Foundation/Stickers",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    themes: { themeOverride: "Light" },
  },
};
export default meta;

const stickers = avatarRegistry["Sticker Footage"];

/* ═══════════════════════════════════════════════════════════════════════════
   STICKER CATALOG
   ═══════════════════════════════════════════════════════════════════════════ */

export const StickerCatalog: StoryObj = {
  name: "Sticker Catalog",
  render: () => (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Sticker Footage</h2>
        <p style={descStyle}>
          Illustrated character stickers for chat messages. These are pre-rendered PNG assets served from the design system CDN.
        </p>
      </div>
      <div style={gridStyle}>
        {stickers.map((sticker) => (
          <div key={sticker.name} style={cardStyle}>
            <img src={sticker.imageUrl} alt={sticker.name} style={stickerImgStyle} />
            <span style={cardLabelStyle}>{sticker.name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const StickerList: StoryObj = {
  name: "Sticker List",
  render: () => (
    <div style={{ maxWidth: 480, margin: "0 auto" }}>
      <div style={listStyle}>
        {stickers.map((sticker) => (
          <div key={sticker.name} style={listItemStyle}>
            <img src={sticker.imageUrl} alt={sticker.name} style={listStickerImgStyle} />
            <span style={listLabelStyle}>{sticker.name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const StickerSizes: StoryObj = {
  name: "Sizes",
  render: () => (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Sticker Sizes</h2>
        <p style={descStyle}>
          Stickers can be rendered at different sizes depending on context.
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "var(--cometchat-spacing-8)", padding: "var(--cometchat-spacing-6)" }}>
        <div style={{ textAlign: "center" }}>
          <img src={stickers[0].imageUrl} alt={stickers[0].name} style={{ width: 48, height: 48, objectFit: "contain" }} />
          <span style={sizeLabelStyle}>48px (sm)</span>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={stickers[0].imageUrl} alt={stickers[0].name} style={{ width: 80, height: 80, objectFit: "contain" }} />
          <span style={sizeLabelStyle}>80px (md)</span>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={stickers[0].imageUrl} alt={stickers[0].name} style={{ width: 120, height: 120, objectFit: "contain" }} />
          <span style={sizeLabelStyle}>120px (lg)</span>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={stickers[0].imageUrl} alt={stickers[0].name} style={{ width: 160, height: 160, objectFit: "contain" }} />
          <span style={sizeLabelStyle}>160px (xl)</span>
        </div>
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   USAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <UsageSection title="Token Source">
        <CodeCard
          language="TypeScript"
          code={`import { avatarRegistry } from "../tokens/avatars";

const stickers = avatarRegistry["Sticker Footage"];
// [
//   { name: "Sticker 01", imageUrl: "https://figma-alpha-api..." },
//   { name: "Sticker 02", imageUrl: "https://figma-alpha-api..." },
//   ...
// ]`}
        />
      </UsageSection>

      <UsageSection title="HTML Structure">
        <CodeCard
          language="HTML"
          code={`<!-- Sticker in chat bubble (no bubble background) -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-sticker">
    <img src="sticker-01.png" alt="Sticker 01" width="120" height="120" />
  </div>
  <div class="chat-bubble-meta">
    <span class="chat-bubble-meta-time">4:56 pm</span>
    <span class="icon-rounded chat-bubble-meta-receipt">done_all</span>
  </div>
</div>

<!-- Sticker grid in picker panel -->
<div class="sticker-picker__grid">
  <button class="sticker-picker__item">
    <img src="sticker-01.png" alt="Sticker 01" width="80" height="80" />
  </button>
</div>`}
        />
      </UsageSection>

      <UsageSection title="Specifications">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Format" description="PNG with transparent background, pre-rendered at 2× resolution." />
          <StateCard title="Source" description="avatarRegistry['Sticker Footage'] in foundation/tokens/avatars.ts" />
          <StateCard title="Sizes" description="sm: 48px, md: 80px, lg: 120px (chat bubble), xl: 160px (preview)." />
          <StateCard title="Chat Bubble" description="Stickers render without bubble background — just the image + timestamp." />
          <StateCard title="Picker Grid" description="Displayed in a 4-column grid at 80×80px in the sticker picker panel." />
          <StateCard title="Count" description="6 stickers in the current set." />
        </div>
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   STYLES
   ═══════════════════════════════════════════════════════════════════════════ */

const headerStyle: React.CSSProperties = {
  marginBottom: "var(--cometchat-spacing-6)",
  paddingBottom: "var(--cometchat-spacing-4)",
  borderBottom: "1px solid var(--cometchat-border-color-default)",
};

const titleStyle: React.CSSProperties = {
  fontFamily: "var(--cometchat-font-family)",
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "30px",
  color: "var(--cometchat-text-color-primary)",
  margin: 0,
  marginBottom: "var(--cometchat-spacing-2)",
};

const descStyle: React.CSSProperties = {
  fontFamily: "var(--cometchat-font-family)",
  fontSize: "14px",
  lineHeight: "20px",
  color: "var(--cometchat-text-color-tertiary)",
  margin: 0,
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
  gap: "var(--cometchat-spacing-4)",
};

const cardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "var(--cometchat-spacing-2)",
  padding: "var(--cometchat-spacing-4)",
  borderRadius: "var(--cometchat-radius-3)",
  border: "1px solid var(--cometchat-border-color-default)",
  background: "var(--cometchat-background-color-01)",
};

const stickerImgStyle: React.CSSProperties = {
  width: 80,
  height: 80,
  objectFit: "contain",
};

const cardLabelStyle: React.CSSProperties = {
  fontFamily: "var(--cometchat-font-family)",
  fontSize: "12px",
  fontWeight: 500,
  color: "var(--cometchat-text-color-secondary)",
};

const listStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const listItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "var(--cometchat-spacing-4)",
  padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-4)",
  borderBottom: "1px solid var(--cometchat-border-color-light)",
};

const listStickerImgStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  objectFit: "contain",
};

const listLabelStyle: React.CSSProperties = {
  fontFamily: "var(--cometchat-font-family)",
  fontSize: "16px",
  fontWeight: 500,
  color: "var(--cometchat-text-color-primary)",
};

const sizeLabelStyle: React.CSSProperties = {
  fontFamily: "var(--cometchat-font-family)",
  fontSize: "12px",
  color: "var(--cometchat-text-color-tertiary)",
  marginTop: "var(--cometchat-spacing-2)",
  display: "block",
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "var(--cometchat-spacing-6)" }}>
      <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--cometchat-text-color-secondary)", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)", paddingBottom: "var(--cometchat-spacing-2)", borderBottom: "1px solid var(--cometchat-border-color-default)" }}>{title}</div>
      {children}
    </div>
  );
}

function CodeCard({ language, code }: { language: string; code: string }) {
  return (
    <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", background: "var(--cometchat-background-color-02)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", borderBottom: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-03)" }}>
        <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "var(--cometchat-text-color-secondary)" }}>{language}</span>
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
      <strong style={{ fontSize: "14px", fontWeight: 600, color: "var(--cometchat-text-color-primary)", display: "block", marginBottom: "var(--cometchat-spacing-1)" }}>{title}</strong>
      <span style={{ fontSize: "12px", color: "var(--cometchat-text-color-tertiary)", lineHeight: "18px" }}>{description}</span>
    </div>
  );
}
