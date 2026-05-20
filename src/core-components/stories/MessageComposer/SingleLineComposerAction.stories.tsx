import type { Meta, StoryObj } from "@storybook/react";
import { ActionSheet, CameraIcon, PhotoIcon, VideocamIcon, DescriptionIcon, PollIcon, CollaborativeWhiteboardIcon, CollaborativeDocumentIcon } from "../../../base-components/components/ActionSheet";
import { MultiLineComposer as VoiceRecorderPopup } from "../../../base-components/components/MediaRecorder";
import { EmojiKeyboard } from "../../../base-components/components/EmojiKeyboard";
import { ConversationSummary } from "../../../base-components/components/ConversationSummary";

/**
 * Actions available in the Single Line Composer. Each action button triggers a
 * specific feature (Attachment, Voice Record, Emoji, Sticker, Formatting, AI).
 * When active, icons appear filled in primary purple and a corresponding
 * dialog/popup is shown above the composer.
 *
 * **Layout:** Plus icon | input | emoji, sticker, mic | send — all in one row.
 *
 * **Figma:** [Message Composer – Actions](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-29938)
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Single Line Composer/Action",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj;

type ActionType = "default" | "attachment" | "voiceRecord" | "emoji" | "sticker" | "formatting" | "ai";

/* ─── Icons (Outlined - default) ───────────────────────────────────────────── */

const IconAddCircle = () => (
  <svg width="20" height="20" viewBox="0 0 15.83 15.83" fill="none">
    <path d="M7.292 8.542V11.25c0 .177.06.326.18.445a.6.6 0 0 0 .445.18.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.445V8.542h2.708a.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.446.6.6 0 0 0-.18-.445.6.6 0 0 0-.445-.18H8.542V4.584a.6.6 0 0 0-.18-.446.6.6 0 0 0-.446-.18.6.6 0 0 0-.445.18.6.6 0 0 0-.18.446v2.708H4.584a.6.6 0 0 0-.446.18.6.6 0 0 0-.18.445c0 .177.06.326.18.446a.6.6 0 0 0 .446.18h2.708Zm.626 7.291A7.917 7.917 0 1 1 7.918 0a7.917 7.917 0 0 1 0 15.833Zm0-1.25a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z" fill="currentColor"/>
  </svg>
);
const IconAddCircleFilled = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 4.5a.75.75 0 0 0-.75.75v4h-4a.75.75 0 0 0 0 1.5h4v4a.75.75 0 0 0 1.5 0v-4h4a.75.75 0 0 0 0-1.5h-4v-4A.75.75 0 0 0 10 4.5Z" fill="currentColor"/>
  </svg>
);
const IconMic = () => (
  <svg width="20" height="20" viewBox="0 0 11.37 15.58" fill="none">
    <path d="M5.685 9.472c-.607 0-1.117-.218-1.531-.653-.415-.435-.622-.963-.622-1.583V2.139c0-.594.21-1.1.628-1.515A2.07 2.07 0 0 1 5.684 0c.598 0 1.106.208 1.525.624.419.416.628.92.628 1.515v5.097c0 .62-.207 1.148-.622 1.583-.414.435-.924.653-1.53.653Zm-.657 5.448v-2.078a5.23 5.23 0 0 1-3.37-1.587A5.17 5.17 0 0 1 .008 7.91a.63.63 0 0 1 .142-.477.62.62 0 0 1 .474-.197c.184 0 .34.064.467.193a.72.72 0 0 1 .243.477 3.87 3.87 0 0 0 1.501 2.64 4.37 4.37 0 0 0 2.849 1.047c1.082 0 2.035-.343 2.86-1.03a3.87 3.87 0 0 0 1.499-2.633.72.72 0 0 1 .239-.477.66.66 0 0 1 .474-.193.63.63 0 0 1 .474.197.63.63 0 0 1 .149.477 5.17 5.17 0 0 1-1.651 3.334 5.23 5.23 0 0 1-3.388 1.59v2.075a.66.66 0 0 1-.193.47.64.64 0 0 1-.472.196.64.64 0 0 1-.472-.193.66.66 0 0 1-.193-.47Zm.657-6.768c.244 0 .444-.089.6-.267a.93.93 0 0 0 .233-.65V2.145a.83.83 0 0 0-.24-.587.8.8 0 0 0-.593-.238.8.8 0 0 0-.593.238.83.83 0 0 0-.24.583v5.095c0 .256.077.472.233.65.156.179.356.268.6.268Z" fill="currentColor"/>
  </svg>
);
const IconMood = () => (
  <svg width="20" height="20" viewBox="0 0 16.39 16.39" fill="none">
    <path d="M11.151 7.167a1.14 1.14 0 0 0 .807-.333c.222-.222.333-.49.333-.806a1.14 1.14 0 0 0-.332-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.49.333.807.333Zm-5.917 0a1.14 1.14 0 0 0 .807-.333c.222-.222.334-.49.334-.806a1.14 1.14 0 0 0-.333-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.491.333.807.333Zm2.96 5.513c.784 0 1.497-.18 2.159-.541a4.58 4.58 0 0 0 1.616-1.498.38.38 0 0 0-.016-.469.44.44 0 0 0-.435-.229H4.859a.44.44 0 0 0-.427.23.38.38 0 0 0-.008.462 4.58 4.58 0 0 0 1.609 1.504c.663.36 1.38.541 2.149.541h.012ZM8.195 16.389a8.19 8.19 0 0 1-5.8-2.406A8.19 8.19 0 0 1 0 8.195 8.19 8.19 0 0 1 2.399 2.395 8.19 8.19 0 0 1 8.194 0a8.19 8.19 0 0 1 5.8 2.399 8.19 8.19 0 0 1 2.395 5.795 8.19 8.19 0 0 1-2.406 5.8 8.19 8.19 0 0 1-5.788 2.395Zm-.001-1.32a6.73 6.73 0 0 0 4.876-1.999 6.73 6.73 0 0 0 2-4.876 6.73 6.73 0 0 0-2-4.876 6.73 6.73 0 0 0-4.876-2 6.73 6.73 0 0 0-4.876 2 6.73 6.73 0 0 0-2 4.876 6.73 6.73 0 0 0 2 4.876 6.73 6.73 0 0 0 4.876 2Z" fill="currentColor"/>
  </svg>
);
const IconSticker = () => (
  <svg width="22" height="22" viewBox="0 -960 960 960" fill="none" style={{ minWidth: 22, minHeight: 22 }}>
    <path d="M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v320L600-160H200Zm0-80h360v-120q0-33 23.5-56.5T640-440h120v-280H200v480Z" fill="currentColor"/>
  </svg>
);
const IconSend = () => (
  <svg width="16" height="14" viewBox="0 0 15.78 13.6" fill="none">
    <path d="M1.267 13.52c-.302.121-.589.095-.86-.077-.271-.172-.407-.422-.407-.751V8.47L6.923 6.797 0 5.124V.903C0 .574.136.324.407.152.678-.02.965-.046 1.267.075L15.223 5.96c.372.166.558.447.558.84 0 .393-.186.673-.558.836L1.267 13.52Z" fill="currentColor"/>
  </svg>
);

/* ─── Filled Icon Variants (for active state) ──────────────────────────────── */

const IconMicFilled = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-4.25 4.95V19h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5v-3.05A5 5 0 0 1 7 11a.75.75 0 0 1 1.5 0 3.5 3.5 0 0 0 7 0A.75.75 0 0 1 17 11Z" fill="currentColor"/>
  </svg>
);
const IconMoodFilled = () => (
  <svg width="20" height="20" viewBox="0 0 16.39 16.39" fill="none">
    <path d="M8.195 0a8.19 8.19 0 0 1 5.8 2.399 8.19 8.19 0 0 1 2.395 5.795 8.19 8.19 0 0 1-2.406 5.8 8.19 8.19 0 0 1-5.788 2.395 8.19 8.19 0 0 1-5.8-2.406A8.19 8.19 0 0 1 0 8.195 8.19 8.19 0 0 1 2.399 2.395 8.19 8.19 0 0 1 8.194 0Zm2.957 7.167a1.14 1.14 0 0 0 .807-.333c.222-.222.333-.49.333-.806a1.14 1.14 0 0 0-.332-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.49.333.807.333Zm-5.917 0a1.14 1.14 0 0 0 .807-.333c.222-.222.334-.49.334-.806a1.14 1.14 0 0 0-.333-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.491.333.807.333Zm2.96 5.513c.784 0 1.497-.18 2.159-.541a4.58 4.58 0 0 0 1.616-1.498.38.38 0 0 0-.016-.469.44.44 0 0 0-.435-.229H4.859a.44.44 0 0 0-.427.23.38.38 0 0 0-.008.462 4.58 4.58 0 0 0 1.609 1.504c.663.36 1.38.541 2.149.541h.012Z" fill="currentColor"/>
  </svg>
);
const IconStickerFilled = () => (
  <svg width="22" height="22" viewBox="0 -960 960 960" fill="none" style={{ minWidth: 22, minHeight: 22 }}>
    <path d="M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v320L600-160H200Z" fill="currentColor"/>
    <path d="M560-240v-120q0-33 23.5-56.5T640-440h120L560-240Z" fill="white"/>
  </svg>
);
/* ─── Styles ───────────────────────────────────────────────────────────────── */

const composerRow: React.CSSProperties = {
  width: 800,
  display: "flex",
  alignItems: "center",
  gap: 8,
  background: "var(--cometchat-background-color-01)",
  border: "1px solid var(--cometchat-border-color-default)",
  borderRadius: 8,
  padding: "8px 12px",
};

const composerRowFormatting: React.CSSProperties = {
  ...composerRow,
  borderRadius: "0 0 8px 8px",
};

const actionBtn: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  padding: 6,
  borderRadius: 8,
  background: "transparent",
  border: "none",
  cursor: "pointer",
  color: "var(--cometchat-icon-color-disabled)",
};
const actionBtnActive: React.CSSProperties = {
  ...actionBtn,
  background: "transparent",
  color: "var(--cometchat-text-color-highlight)",
};

const sendDisabled: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  border: "2px solid rgba(255,255,255,0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 1px 2px rgba(10,13,18,0.05)",
  background: "var(--cometchat-background-color-03)",
  color: "var(--cometchat-icon-color-disabled)",
};

/* ─── Action Sheet Items ───────────────────────────────────────────────────── */

const attachmentItems = [
  { icon: <CameraIcon />, label: "Camera" },
  { icon: <PhotoIcon />, label: "Photo & Video Library" },
  { icon: <VideocamIcon />, label: "Video" },
  { icon: <DescriptionIcon />, label: "Document" },
  { icon: <PollIcon />, label: "Poll" },
  { icon: <CollaborativeWhiteboardIcon />, label: "Whiteboard" },
  { icon: <CollaborativeDocumentIcon />, label: "Collaborative Document" },
];

/* ─── Sticker Picker (inline) ───────────────────────────────────────────────── */

const stickerTabs = ["🕐", "😊", "🐻", "🍔", "⚽", "🚗", "💡", "🎵"];

const stickerImages = [
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b93ef91c-07e3-4c69-8c3b-abe87a2007bf",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82839107-6efc-4a55-a53d-da2460f7111c",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99d357d1-7499-4f9d-806d-b0e28e4fc953",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c81c176-7d75-47ec-90a2-22df905a8cb0",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07293b78-a1d8-489c-ad60-0d3a1a25ccc4",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df84d621-8da9-4e3c-b732-9118ab70eb24",
];

function StickerPicker() {
  return (
    <div style={{ width: 340, background: "var(--cometchat-background-color-01)", borderRadius: 12, border: "1px solid var(--cometchat-border-color-default)", boxShadow: "0 4px 16px rgba(0,0,0,0.08)", overflow: "hidden" }}>
      {/* Tabs */}
      <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "10px 12px", borderBottom: "1px solid var(--cometchat-border-color-light)" }}>
        {stickerTabs.map((tab, i) => (
          <div key={i} style={{ width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, background: i === 0 ? "var(--cometchat-extended-primary-color-50)" : "transparent", cursor: "pointer" }}>
            {tab}
          </div>
        ))}
      </div>
      {/* Search */}
      <div style={{ padding: "8px 12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", background: "var(--cometchat-background-color-03)", borderRadius: 20 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" fill="currentColor" style={{ color: "var(--cometchat-icon-color-tertiary)" }}/></svg>
          <span style={{ fontSize: 14, color: "var(--cometchat-text-color-placeholder)" }}>Search sticker</span>
        </div>
      </div>
      {/* Section title */}
      <div style={{ padding: "4px 12px 8px", fontSize: 14, fontWeight: 600, color: "var(--cometchat-text-color-primary)" }}>Recent used</div>
      {/* Sticker grid - foundation stickers */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, padding: "0 12px 16px" }}>
        {stickerImages.map((url, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 12, background: "var(--cometchat-background-color-03)", cursor: "pointer", height: 90, padding: 8 }}>
            <img src={url} alt={`Sticker ${String(i + 1).padStart(2, "0")}`} style={{ width: 64, height: 64, objectFit: "contain" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Format Toolbar (for formatting active state) ─────────────────────────── */

const fmtBtn: React.CSSProperties = { display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, padding: 6, borderRadius: 8, background: "transparent", border: "none", cursor: "pointer", color: "var(--cometchat-text-color-secondary)", fontSize: 16 };
const separator: React.CSSProperties = { width: 1, height: 20, background: "var(--cometchat-background-color-04)", margin: "0 4px" };
const formatToolbar: React.CSSProperties = { display: "flex", alignItems: "center", gap: 8, padding: 8, background: "var(--cometchat-background-color-02)", borderBottom: "1px solid var(--cometchat-border-color-light)", borderRadius: "8px 8px 0 0" };

function FormatToolbarRow() {
  return (
    <div style={formatToolbar}>
      <button style={fmtBtn} aria-label="Bold"><span style={{ fontWeight: 700 }}>B</span></button>
      <button style={fmtBtn} aria-label="Italic"><span style={{ fontStyle: "italic" }}>I</span></button>
      <button style={fmtBtn} aria-label="Underline"><span style={{ textDecoration: "underline" }}>U</span></button>
      <button style={fmtBtn} aria-label="Strikethrough"><span style={{ textDecoration: "line-through" }}>S</span></button>
      <div style={separator} />
      <button style={fmtBtn} aria-label="Link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 0-10Z" fill="currentColor"/></svg></button>
      <button style={fmtBtn} aria-label="Ordered List"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1Zm1-9h1V4H2v1h1v3Zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1Zm5-6v2h14V5H7Zm0 14h14v-2H7v2Zm0-6h14v-2H7v2Z" fill="currentColor"/></svg></button>
      <button style={fmtBtn} aria-label="Bullet List"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5Zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5ZM7 19h14v-2H7v2Zm0-6h14v-2H7v2Zm0-8v2h14V5H7Z" fill="currentColor"/></svg></button>
      <div style={separator} />
      <button style={fmtBtn} aria-label="Block Quote"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 17h3l2-4V7H5v6h3l-2 4Zm8 0h3l2-4V7h-6v6h3l-2 4Z" fill="currentColor"/></svg></button>
      <button style={fmtBtn} aria-label="Code"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z" fill="currentColor"/></svg></button>
      <button style={fmtBtn} aria-label="Code Block"><svg width="16" height="16" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M8 7.5 5.5 10 8 12.5M12 7.5l2.5 2.5-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg></button>
    </div>
  );
}

/* ─── Single Line Composer with Action Highlight ───────────────────────────── */

function ComposerWithAction({ active }: { active: ActionType }) {
  const showPopupAbove = active === "attachment" || active === "voiceRecord" || active === "emoji" || active === "sticker";

  return (
    <div style={{ position: "relative", paddingTop: showPopupAbove ? 400 : 0 }}>
      {/* Action Sheet popup for Attachment — left-aligned with plus icon */}
      {active === "attachment" && (
        <div style={{ position: "absolute", bottom: 54, left: 12, zIndex: 10 }}>
          <ActionSheet items={attachmentItems} />
        </div>
      )}
      {/* Voice Recorder popup — right-aligned with mic icon */}
      {active === "voiceRecord" && (
        <div style={{ position: "absolute", bottom: 54, right: 56, zIndex: 10, width: 320 }}>
          <VoiceRecorderPopup recordingState="idle" duration="00:00:00" />
        </div>
      )}
      {/* Emoji Keyboard popup — right-aligned with emoji icon */}
      {active === "emoji" && (
        <div style={{ position: "absolute", bottom: 54, right: 136, zIndex: 10 }}>
          <EmojiKeyboard />
        </div>
      )}
      {/* Sticker Picker popup — right-aligned with sticker icon */}
      {active === "sticker" && (
        <div style={{ position: "absolute", bottom: 54, right: 96, zIndex: 10 }}>
          <StickerPicker />
        </div>
      )}
      {/* Conversation Summary for AI — above the composer */}
      {active === "ai" && (
        <div style={{ marginBottom: 8, width: 800 }}>
          <ConversationSummary text="The buyer is interested in the watch and wants to confirm if it is still available. They are asking about the condition and whether the product is original, along with details like box and warranty. There are also questions around pricing and if there is any room for negotiation." />
        </div>
      )}
      {/* Composer wrapper */}
      <div style={{ width: 800, border: active === "formatting" ? "1px solid var(--cometchat-border-color-default)" : "none", borderRadius: 8 }}>
        {/* Format toolbar when formatting is active — inside composer wrapper */}
        {active === "formatting" && <FormatToolbarRow />}
        {/* Single line composer row */}
        <div style={active === "formatting" ? composerRowFormatting : composerRow}>
          {/* Plus icon on the left */}
          <button style={active === "attachment" ? actionBtnActive : actionBtn} aria-label="Attach file">
            {active === "attachment" ? <IconAddCircleFilled /> : <IconAddCircle />}
          </button>

          {/* Input area — flex: 1 */}
          <div style={{ flex: 1, fontSize: 14, lineHeight: "20px", fontFamily: "'Inter', sans-serif", color: "var(--cometchat-text-color-placeholder)" }}>
            Enter your message here
          </div>

          {/* Right-side action icons: emoji, sticker, mic */}
          <button style={active === "emoji" ? actionBtnActive : actionBtn} aria-label="Emoji">
            {active === "emoji" ? <IconMoodFilled /> : <IconMood />}
          </button>
          <button style={active === "sticker" ? actionBtnActive : actionBtn} aria-label="Sticker">
            {active === "sticker" ? <IconStickerFilled /> : <IconSticker />}
          </button>
          <button style={active === "voiceRecord" ? actionBtnActive : actionBtn} aria-label="Voice record">
            {active === "voiceRecord" ? <IconMicFilled /> : <IconMic />}
          </button>

          {/* Send button — disabled */}
          <div style={sendDisabled}><IconSend /></div>
        </div>
      </div>
    </div>
  );
}

/* ─── Section Helper ───────────────────────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--cometchat-text-color-placeholder)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>{title}</div>
      {children}
    </div>
  );
}

/* ─── Stories ──────────────────────────────────────────────────────────────── */

/** Default state — no action selected. */
export const Default: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => <div style={{ padding: 24 }}><ComposerWithAction active="default" /></div>,
};

/** Attachment action selected — ActionSheet appears above, left-aligned with plus icon. */
export const Attachment: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => <div style={{ padding: 24 }}><ComposerWithAction active="attachment" /></div>,
};

/** Voice Record action selected — VoiceRecorderPopup appears above, aligned with mic icon. */
export const VoiceRecord: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => <div style={{ padding: 24 }}><ComposerWithAction active="voiceRecord" /></div>,
};

/** Emoji action selected — EmojiKeyboard appears above, aligned with emoji icon. */
export const Emoji: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => <div style={{ padding: 24 }}><ComposerWithAction active="emoji" /></div>,
};

/** Sticker action selected — StickerPicker appears above, aligned with sticker icon. */
export const Sticker: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => <div style={{ padding: 24 }}><ComposerWithAction active="sticker" /></div>,
};

/** Formatting action selected — format toolbar appears inside the composer above the input row. */
export const Formatting: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => <div style={{ padding: 24 }}><ComposerWithAction active="formatting" /></div>,
};

/** AI action selected — ConversationSummary appears above the composer. */
export const AI: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => <div style={{ padding: 24 }}><ComposerWithAction active="ai" /></div>,
};

/** All action states overview. */
export const AllActions: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 48, padding: 24 }}>
      <Section title="Default"><ComposerWithAction active="default" /></Section>
      <Section title="Attachment"><ComposerWithAction active="attachment" /></Section>
      <Section title="Voice Record"><ComposerWithAction active="voiceRecord" /></Section>
      <Section title="Emoji"><ComposerWithAction active="emoji" /></Section>
      <Section title="Sticker"><ComposerWithAction active="sticker" /></Section>
      <Section title="Formatting"><ComposerWithAction active="formatting" /></Section>
      <Section title="AI"><ComposerWithAction active="ai" /></Section>
    </div>
  ),
};

/** Interactive playground — select an action to highlight. */
export const Playground: Story = {
  args: { action: "default" },
  argTypes: { action: { control: "select", options: ["default", "attachment", "voiceRecord", "emoji", "sticker", "formatting", "ai"] } },
  parameters: { layout: "padded", docs: { disable: true } },
  render: function Render(args) {
    const action = (args as Record<string, unknown>).action as ActionType;
    return <div style={{ padding: 24 }}><ComposerWithAction active={action} /></div>;
  },
};


/* ═══════════════════════════════════════════════════════════════════════════
   USAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ marginBottom: "var(--cometchat-spacing-6)" }}>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--cometchat-text-color-secondary)", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)", paddingBottom: "var(--cometchat-spacing-2)", borderBottom: "1px solid var(--cometchat-border-color-default)" }}>Action Types</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          {(["sticker", "emoji", "formatting", "ai"] as const).map(a => (
            <div key={a} style={{ padding: "var(--cometchat-spacing-3)", border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", background: "var(--cometchat-background-color-01)" }}>
              <strong style={{ fontSize: "14px", color: "var(--cometchat-text-color-primary)", display: "block", marginBottom: "var(--cometchat-spacing-1)" }}>{a}</strong>
              <span style={{ fontSize: "12px", color: "var(--cometchat-text-color-tertiary)" }}>Panel overlay for {a} action.</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
