import type { Meta, StoryObj } from "@storybook/react";

/**
 * The Multi Line Composer Attachment feature displays file previews in a
 * horizontally scrollable row between the input area and the action toolbar.
 * Supported attachment types: Image, Video, Document, Audio, and Voice.
 *
 * **Figma:** [Message Composer – Attachment](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/?node-id=19113-34725)
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Line Composer/Attachment",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj;

/* ─── Inline SVG Icons ─────────────────────────────────────────────────────── */

const IconAddCircle = () => (
  <svg width="20" height="20" viewBox="0 0 15.83 15.83" fill="none">
    <path d="M7.292 8.542V11.25c0 .177.06.326.18.445a.6.6 0 0 0 .445.18.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.445V8.542h2.708a.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.446.6.6 0 0 0-.18-.445.6.6 0 0 0-.445-.18H8.542V4.584a.6.6 0 0 0-.18-.446.6.6 0 0 0-.446-.18.6.6 0 0 0-.445.18.6.6 0 0 0-.18.446v2.708H4.584a.6.6 0 0 0-.446.18.6.6 0 0 0-.18.445c0 .177.06.326.18.446a.6.6 0 0 0 .446.18h2.708Zm.626 7.291A7.917 7.917 0 1 1 7.918 0a7.917 7.917 0 0 1 0 15.833Zm0-1.25a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z" fill="#A4A7AE"/>
  </svg>
);

const IconMic = () => (
  <svg width="20" height="20" viewBox="0 0 11.37 15.58" fill="none">
    <path d="M5.685 9.472c-.607 0-1.117-.218-1.531-.653-.415-.435-.622-.963-.622-1.583V2.139c0-.594.21-1.1.628-1.515A2.07 2.07 0 0 1 5.684 0c.598 0 1.106.208 1.525.624.419.416.628.92.628 1.515v5.097c0 .62-.207 1.148-.622 1.583-.414.435-.924.653-1.53.653Zm-.657 5.448v-2.078a5.23 5.23 0 0 1-3.37-1.587A5.17 5.17 0 0 1 .008 7.91a.63.63 0 0 1 .142-.477.62.62 0 0 1 .474-.197c.184 0 .34.064.467.193a.72.72 0 0 1 .243.477 3.87 3.87 0 0 0 1.501 2.64 4.37 4.37 0 0 0 2.849 1.047c1.082 0 2.035-.343 2.86-1.03a3.87 3.87 0 0 0 1.499-2.633.72.72 0 0 1 .239-.477.66.66 0 0 1 .474-.193.63.63 0 0 1 .474.197.63.63 0 0 1 .149.477 5.17 5.17 0 0 1-1.651 3.334 5.23 5.23 0 0 1-3.388 1.59v2.075a.66.66 0 0 1-.193.47.64.64 0 0 1-.472.196.64.64 0 0 1-.472-.193.66.66 0 0 1-.193-.47Zm.657-6.768c.244 0 .444-.089.6-.267a.93.93 0 0 0 .233-.65V2.145a.83.83 0 0 0-.24-.587.8.8 0 0 0-.593-.238.8.8 0 0 0-.593.238.83.83 0 0 0-.24.583v5.095c0 .256.077.472.233.65.156.179.356.268.6.268Z" fill="#A4A7AE"/>
  </svg>
);

const IconMood = () => (
  <svg width="20" height="20" viewBox="0 0 16.39 16.39" fill="none">
    <path d="M11.151 7.167a1.14 1.14 0 0 0 .807-.333c.222-.222.333-.49.333-.806a1.14 1.14 0 0 0-.332-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.49.333.807.333Zm-5.917 0a1.14 1.14 0 0 0 .807-.333c.222-.222.334-.49.334-.806a1.14 1.14 0 0 0-.333-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.491.333.807.333Zm2.96 5.513c.784 0 1.497-.18 2.159-.541a4.58 4.58 0 0 0 1.616-1.498.38.38 0 0 0-.016-.469.44.44 0 0 0-.435-.229H4.859a.44.44 0 0 0-.427.23.38.38 0 0 0-.008.462 4.58 4.58 0 0 0 1.609 1.504c.663.36 1.38.541 2.149.541h.012ZM8.195 16.389a8.19 8.19 0 0 1-5.8-2.406A8.19 8.19 0 0 1 0 8.195 8.19 8.19 0 0 1 2.399 2.395 8.19 8.19 0 0 1 8.194 0a8.19 8.19 0 0 1 5.8 2.399 8.19 8.19 0 0 1 2.395 5.795 8.19 8.19 0 0 1-2.406 5.8 8.19 8.19 0 0 1-5.788 2.395Zm-.001-1.32a6.73 6.73 0 0 0 4.876-1.999 6.73 6.73 0 0 0 2-4.876 6.73 6.73 0 0 0-2-4.876 6.73 6.73 0 0 0-4.876-2 6.73 6.73 0 0 0-4.876 2 6.73 6.73 0 0 0-2 4.876 6.73 6.73 0 0 0 2 4.876 6.73 6.73 0 0 0 4.876 2Z" fill="#A4A7AE"/>
  </svg>
);

const IconSticker = () => (
  <svg width="22" height="22" viewBox="0 -960 960 960" fill="none" style={{ minWidth: 22, minHeight: 22 }}>
    <path d="M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v320L600-160H200Zm0-80h360v-120q0-33 23.5-56.5T640-440h120v-280H200v480Z" fill="#A4A7AE"/>
  </svg>
);

const IconFormatting = () => (
  <svg width="20" height="20" viewBox="0 0 14.1 9.375" fill="none">
    <path d="M2.1 6.833l-.667 1.854a.83.83 0 0 1-.27.354.74.74 0 0 1-.418.126c-.264 0-.469-.108-.614-.324-.146-.215-.17-.44-.073-.677L2.933.5a.83.83 0 0 1 .282-.365A.74.74 0 0 1 3.642 0h.583c.153 0 .299.045.438.135a.83.83 0 0 1 .291.365l2.875 7.688c.097.236.07.458-.083.666-.153.209-.354.313-.604.313a.74.74 0 0 1-.417-.135.83.83 0 0 1-.271-.365l-.646-1.834H2.1Zm.48-1.333h2.728L3.975 1.708h-.084L2.58 5.5Zm8.228 3.875c-.708 0-1.27-.191-1.687-.573-.417-.382-.625-.885-.625-1.51 0-.611.24-1.115.72-1.51.479-.396 1.093-.594 1.843-.594.32 0 .632.028.938.084.305.055.569.132.791.229v-.25c0-.403-.142-.73-.427-.98-.285-.25-.663-.374-1.135-.374a1.7 1.7 0 0 0-.615.094 1.5 1.5 0 0 0-.552.28c-.181.14-.351.188-.51.147a.56.56 0 0 1-.386-.23.47.47 0 0 1-.146-.395c0-.153.076-.285.229-.396.278-.222.59-.385.938-.49.347-.104.701-.156 1.063-.156.958 0 1.673.226 2.146.677.471.451.708 1.128.708 2.031v3.063a.63.63 0 0 1-.168.458.58.58 0 0 1-.469.187.58.58 0 0 1-.458-.197.63.63 0 0 1-.188-.49v-.104h-.083a1.8 1.8 0 0 1-.792.729c-.333.167-.701.25-1.104.25Zm.25-1.125c.486 0 .9-.167 1.24-.5.34-.333.51-.722.51-1.167a2.2 2.2 0 0 0-.698-.26 3.3 3.3 0 0 0-.802-.094c-.444 0-.791.097-1.041.292-.25.194-.375.451-.375.77 0 .278.111.507.333.688.222.18.5.271.833.271Z" fill="#A4A7AE"/>
  </svg>
);

const IconAI = () => (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" style={{ minWidth: 22, minHeight: 22 }}>
    <path d="M7.377 5.43c.083-.406.663-.406.746 0a5 5 0 0 0 3.947 3.947c.406.083.406.663 0 .746a5 5 0 0 0-3.947 3.947c-.083.406-.663.406-.746 0a5 5 0 0 0-3.947-3.947c-.406-.083-.406-.663 0-.746A5 5 0 0 0 7.377 5.43Z" stroke="#A4A7AE" strokeWidth="1.25" fill="none"/>
    <path d="M13.913 4.145a.03.03 0 0 1 .049 0 3.38 3.38 0 0 0 2.393 2.393.03.03 0 0 1 0 .049 3.38 3.38 0 0 0-2.393 2.393.03.03 0 0 1-.049 0 3.38 3.38 0 0 0-2.393-2.393.03.03 0 0 1 0-.049 3.38 3.38 0 0 0 2.393-2.393Z" stroke="#A4A7AE" strokeWidth="1.25" fill="none"/>
  </svg>
);

const IconSend = () => (
  <svg width="16" height="14" viewBox="0 0 15.78 13.6" fill="none">
    <path d="M1.267 13.52c-.302.121-.589.095-.86-.077-.271-.172-.407-.422-.407-.751V8.47L6.923 6.797 0 5.124V.903C0 .574.136.324.407.152.678-.02.965-.046 1.267.075L15.223 5.96c.372.166.558.447.558.84 0 .393-.186.673-.558.836L1.267 13.52Z" fill="currentColor"/>
  </svg>
);

const IconPlay = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M3 1.5v9l7.5-4.5L3 1.5Z" fill="white"/>
  </svg>
);

const IconClose = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <path d="M1 1l6 6M7 1L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconError = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <rect x="5" y="2" width="2" height="5.5" rx="1" fill="white"/>
    <circle cx="6" cy="9.5" r="1" fill="white"/>
  </svg>
);

const IconDocument = () => (
  <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b41b71d2-f019-4562-aad1-2d8c4b8be0c2" alt="PDF" width="40" height="40" style={{ borderRadius: 6 }} />
);

const IconSpinner = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ animation: "spin 1s linear infinite" }}>
    <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="1.5" strokeDasharray="12 8" strokeLinecap="round"/>
  </svg>
);

/* ─── Styles ───────────────────────────────────────────────────────────────── */

const composerBox: React.CSSProperties = {
  width: 800,
  display: "flex",
  flexDirection: "column",
  background: "var(--cometchat-background-color-01)",
  border: "1px solid var(--cometchat-border-color-default)",
  borderRadius: 8,
};

const inputBox: React.CSSProperties = {
  padding: 12,
  fontSize: 14,
  lineHeight: "20px",
  fontFamily: "'Inter', sans-serif",
  color: "var(--cometchat-text-color-placeholder)",
};

const attachmentRow: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "8px 12px",
  overflowX: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
};

const toolbarBox: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "6px 12px",
  borderTop: "1px solid var(--cometchat-border-color-light)",
};

const actionsLeft: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  flex: 1,
};

const actionButton: React.CSSProperties = {
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
};

const sendBase: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  border: "2px solid rgba(255,255,255,0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "var(--cometchat-shadow-xs)",
  background: "var(--cometchat-background-color-solid)",
  color: "var(--cometchat-static-white)",
};

/* ─── Attachment Badge Styles ──────────────────────────────────────────────── */

const badgeBase: React.CSSProperties = {
  position: "absolute",
  top: -6,
  right: -6,
  width: 22,
  height: 22,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  border: "2px solid var(--cometchat-background-color-01)",
};

const badgeLoading: React.CSSProperties = {
  ...badgeBase,
  background: "var(--cometchat-neutral-color-700)",
};

const badgeClose: React.CSSProperties = {
  ...badgeBase,
  background: "var(--cometchat-neutral-color-700)",
};

const badgeCloseHover: React.CSSProperties = {
  ...badgeBase,
  background: "var(--cometchat-text-color-secondary)",
};

const badgeError: React.CSSProperties = {
  ...badgeBase,
  background: "var(--cometchat-error-color)",
};

/* ─── Attachment Type Styles ───────────────────────────────────────────────── */

const imageThumb: React.CSSProperties = {
  position: "relative",
  width: 72,
  height: 72,
  borderRadius: 12,
  flexShrink: 0,
};

const videoThumb: React.CSSProperties = {
  position: "relative",
  width: 72,
  height: 72,
  borderRadius: 12,
  flexShrink: 0,
};

const videoPlayOverlay: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 32,
  height: 32,
  borderRadius: "50%",
  background: "rgba(0,0,0,0.4)",
  backdropFilter: "blur(4px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const documentCard: React.CSSProperties = {
  position: "relative",
  width: 200,
  height: 72,
  borderRadius: 8,
  border: "1px solid var(--cometchat-border-color-default)",
  background: "var(--cometchat-background-color-02)",
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "0 12px",
  flexShrink: 0,
};

const audioCard: React.CSSProperties = {
  position: "relative",
  width: 200,
  height: 72,
  borderRadius: 8,
  border: "1px solid var(--cometchat-border-color-default)",
  background: "var(--cometchat-background-color-02)",
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "0 12px",
  flexShrink: 0,
};

const audioPlayBtn: React.CSSProperties = {
  width: 32,
  height: 32,
  borderRadius: "50%",
  background: "var(--cometchat-background-color-solid)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const waveformContainer: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  flex: 1,
  height: 24,
};

const waveformBar: React.CSSProperties = {
  width: 3,
  borderRadius: 2,
  background: "var(--cometchat-icon-color-disabled)",
};

const durationText: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 500,
  color: "var(--cometchat-text-color-secondary)",
  flexShrink: 0,
};

/* ─── Keyframes (injected via style tag) ───────────────────────────────────── */

const SpinKeyframes = () => (
  <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.composer-attachments::-webkit-scrollbar { display: none; }`}</style>
);

/* ─── Badge Component ──────────────────────────────────────────────────────── */

type BadgeState = "loading" | "default" | "hover" | "remove" | "error" | "none";

function AttachmentBadge({ state }: { state: BadgeState }) {
  if (state === "none" || state === "default") return null;
  if (state === "loading") {
    return <div style={badgeLoading}><IconSpinner /></div>;
  }
  if (state === "error") {
    return <div style={badgeError}><IconError /></div>;
  }
  if (state === "remove") {
    return <div style={badgeCloseHover}><IconClose /></div>;
  }
  // hover
  return <div style={badgeClose}><IconClose /></div>;
}

/* ─── Waveform Helper ──────────────────────────────────────────────────────── */

const waveformHeights = [8, 14, 10, 18, 12, 16, 8, 20, 14, 10, 16, 12, 18, 8, 14, 20, 10, 16, 12, 8];

function Waveform({ playing }: { playing?: boolean }) {
  return (
    <div style={waveformContainer}>
      {waveformHeights.map((h, i) => (
        <div
          key={i}
          style={{
            ...waveformBar,
            height: h,
            background: playing && i < 8 ? "var(--cometchat-background-color-solid)" : "var(--cometchat-icon-color-disabled)",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Attachment Components ────────────────────────────────────────────────── */

/* ─── Sample image for previews ────────────────────────────────────────────── */
const sampleImage = "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=150&h=150&fit=crop&q=80";

function ImageAttachmentPreview({ badge = "none" as BadgeState }) {
  return (
    <div style={imageThumb}>
      <div style={{ width: 72, height: 72, borderRadius: 12, overflow: "hidden", border: "1px solid var(--cometchat-border-color-default)" }}>
        <img src={sampleImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <AttachmentBadge state={badge} />
    </div>
  );
}

function VideoAttachmentPreview({ badge = "none" as BadgeState }) {
  return (
    <div style={videoThumb}>
      <div style={{ width: 72, height: 72, borderRadius: 12, overflow: "hidden", border: "1px solid var(--cometchat-border-color-default)" }}>
        <img src={sampleImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={videoPlayOverlay}><IconPlay /></div>
      <AttachmentBadge state={badge} />
    </div>
  );
}

function DocumentAttachmentPreview({ badge = "none" as BadgeState }) {
  return (
    <div style={documentCard}>
      <IconDocument />
      <div style={{ display: "flex", flexDirection: "column", gap: 2, overflow: "hidden" }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: "var(--cometchat-text-color-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Document.pdf</span>
        <span style={{ fontSize: 11, color: "var(--cometchat-text-color-secondary)" }}>PDF</span>
      </div>
      <AttachmentBadge state={badge} />
    </div>
  );
}

function AudioAttachmentPreview({ badge = "none" as BadgeState, playing = false }) {
  return (
    <div style={audioCard}>
      <div style={audioPlayBtn}><IconPlay /></div>
      <Waveform playing={playing} />
      <span style={durationText}>0:32</span>
      <AttachmentBadge state={badge} />
    </div>
  );
}

function VoiceAttachmentPreview({ badge = "none" as BadgeState, playing = false }) {
  return (
    <div style={audioCard}>
      <div style={audioPlayBtn}><IconPlay /></div>
      <Waveform playing={playing} />
      <span style={durationText}>0:32</span>
      <AttachmentBadge state={badge} />
    </div>
  );
}

/* ─── Toolbar Component ────────────────────────────────────────────────────── */

function Toolbar() {
  return (
    <div style={toolbarBox}>
      <div style={actionsLeft}>
        <button style={actionButton} aria-label="Attach file"><IconAddCircle /></button>
        <button style={actionButton} aria-label="Voice record"><IconMic /></button>
        <button style={actionButton} aria-label="Emoji"><IconMood /></button>
        <button style={actionButton} aria-label="Sticker"><IconSticker /></button>
        <button style={actionButton} aria-label="Formatting"><IconFormatting /></button>
        <button style={{ ...actionButton, padding: 4 }} aria-label="AI features"><IconAI /></button>
      </div>
      <div style={sendBase}>
        <IconSend />
      </div>
    </div>
  );
}

/* ─── Composer with Attachments ────────────────────────────────────────────── */

function ComposerWithAttachments({ children }: { children: React.ReactNode }) {
  return (
    <div style={composerBox}>
      <SpinKeyframes />
      <div style={inputBox}>Type your message...</div>
      <div className="composer-attachments" style={attachmentRow}>{children}</div>
      <Toolbar />
    </div>
  );
}

/* ─── Section Helper ───────────────────────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--cometchat-text-color-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
        {title}
      </div>
      {children}
    </div>
  );
}

/* ─── Stories ──────────────────────────────────────────────────────────────── */

/** All attachment types displayed together in the composer. */
export const AllAttachments: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ padding: 24 }}>
      <ComposerWithAttachments>
        <ImageAttachmentPreview badge="none" />
        <VideoAttachmentPreview badge="remove" />
        <DocumentAttachmentPreview badge="error" />
        <AudioAttachmentPreview badge="loading" />
        <VoiceAttachmentPreview badge="none" playing={true} />
      </ComposerWithAttachments>
    </div>
  ),
};

/** Image attachment in all states. */
export const ImageAttachment: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 48, padding: 24 }}>
      <SpinKeyframes />
      <Section title="Loading">
        <div style={{ display: "flex", gap: 12 }}><ImageAttachmentPreview badge="loading" /></div>
      </Section>
      <Section title="Default">
        <div style={{ display: "flex", gap: 12 }}><ImageAttachmentPreview badge="none" /></div>
      </Section>
      <Section title="Hover">
        <div style={{ display: "flex", gap: 12 }}><ImageAttachmentPreview badge="hover" /></div>
      </Section>
      <Section title="Remove">
        <div style={{ display: "flex", gap: 12 }}><ImageAttachmentPreview badge="remove" /></div>
      </Section>
      <Section title="Error">
        <div style={{ display: "flex", gap: 12 }}><ImageAttachmentPreview badge="error" /></div>
      </Section>
    </div>
  ),
};

/** Video attachment in all states. */
export const VideoAttachment: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 48, padding: 24 }}>
      <SpinKeyframes />
      <Section title="Loading">
        <div style={{ display: "flex", gap: 12 }}><VideoAttachmentPreview badge="loading" /></div>
      </Section>
      <Section title="Default">
        <div style={{ display: "flex", gap: 12 }}><VideoAttachmentPreview badge="none" /></div>
      </Section>
      <Section title="Hover">
        <div style={{ display: "flex", gap: 12 }}><VideoAttachmentPreview badge="hover" /></div>
      </Section>
      <Section title="Remove">
        <div style={{ display: "flex", gap: 12 }}><VideoAttachmentPreview badge="remove" /></div>
      </Section>
      <Section title="Error">
        <div style={{ display: "flex", gap: 12 }}><VideoAttachmentPreview badge="error" /></div>
      </Section>
    </div>
  ),
};

/** Document attachment in all states. */
export const DocumentAttachment: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 48, padding: 24 }}>
      <SpinKeyframes />
      <Section title="Loading">
        <div style={{ display: "flex", gap: 12 }}><DocumentAttachmentPreview badge="loading" /></div>
      </Section>
      <Section title="Default">
        <div style={{ display: "flex", gap: 12 }}><DocumentAttachmentPreview badge="none" /></div>
      </Section>
      <Section title="Hover">
        <div style={{ display: "flex", gap: 12 }}><DocumentAttachmentPreview badge="hover" /></div>
      </Section>
      <Section title="Remove">
        <div style={{ display: "flex", gap: 12 }}><DocumentAttachmentPreview badge="remove" /></div>
      </Section>
      <Section title="Error">
        <div style={{ display: "flex", gap: 12 }}><DocumentAttachmentPreview badge="error" /></div>
      </Section>
    </div>
  ),
};

/** Audio attachment in all states (including Play and Pause). */
export const AudioAttachment: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 48, padding: 24 }}>
      <SpinKeyframes />
      <Section title="Loading">
        <div style={{ display: "flex", gap: 12 }}><AudioAttachmentPreview badge="loading" /></div>
      </Section>
      <Section title="Default">
        <div style={{ display: "flex", gap: 12 }}><AudioAttachmentPreview badge="none" /></div>
      </Section>
      <Section title="Hover">
        <div style={{ display: "flex", gap: 12 }}><AudioAttachmentPreview badge="hover" /></div>
      </Section>
      <Section title="Remove">
        <div style={{ display: "flex", gap: 12 }}><AudioAttachmentPreview badge="remove" /></div>
      </Section>
      <Section title="Error">
        <div style={{ display: "flex", gap: 12 }}><AudioAttachmentPreview badge="error" /></div>
      </Section>
      <Section title="Play">
        <div style={{ display: "flex", gap: 12 }}><AudioAttachmentPreview badge="none" playing={true} /></div>
      </Section>
      <Section title="Pause">
        <div style={{ display: "flex", gap: 12 }}><AudioAttachmentPreview badge="none" playing={false} /></div>
      </Section>
    </div>
  ),
};

/** Voice attachment in all states (including Play and Pause). */
export const VoiceAttachment: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 48, padding: 24 }}>
      <SpinKeyframes />
      <Section title="Loading">
        <div style={{ display: "flex", gap: 12 }}><VoiceAttachmentPreview badge="loading" /></div>
      </Section>
      <Section title="Default">
        <div style={{ display: "flex", gap: 12 }}><VoiceAttachmentPreview badge="none" /></div>
      </Section>
      <Section title="Hover">
        <div style={{ display: "flex", gap: 12 }}><VoiceAttachmentPreview badge="hover" /></div>
      </Section>
      <Section title="Remove">
        <div style={{ display: "flex", gap: 12 }}><VoiceAttachmentPreview badge="remove" /></div>
      </Section>
      <Section title="Error">
        <div style={{ display: "flex", gap: 12 }}><VoiceAttachmentPreview badge="error" /></div>
      </Section>
      <Section title="Play">
        <div style={{ display: "flex", gap: 12 }}><VoiceAttachmentPreview badge="none" playing={true} /></div>
      </Section>
      <Section title="Pause">
        <div style={{ display: "flex", gap: 12 }}><VoiceAttachmentPreview badge="none" playing={false} /></div>
      </Section>
    </div>
  ),
};

/** HTML + CSS usage reference for attachment previews. */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: 32, maxWidth: 1200, margin: "0 auto" }}>
      <Section title="HTML">
        <CodeCard language="HTML" code={`<div class="composer">
  <div class="composer__input" contenteditable="true"
       data-placeholder="Type your message..."
       role="textbox" aria-multiline="true"></div>
  <div class="composer__attachments">
    <!-- Image -->
    <div class="attachment attachment--image">
      <div class="attachment__badge attachment__badge--close">×</div>
    </div>
    <!-- Video -->
    <div class="attachment attachment--video">
      <div class="attachment__play-overlay">▶</div>
      <div class="attachment__badge attachment__badge--close">×</div>
    </div>
    <!-- Document -->
    <div class="attachment attachment--document">
      <div class="attachment__icon">PDF</div>
      <div class="attachment__info">
        <span class="attachment__filename">Document.pdf</span>
        <span class="attachment__filetype">PDF</span>
      </div>
      <div class="attachment__badge attachment__badge--close">×</div>
    </div>
    <!-- Audio / Voice -->
    <div class="attachment attachment--audio">
      <div class="attachment__play-btn">▶</div>
      <div class="attachment__waveform">...</div>
      <span class="attachment__duration">0:32</span>
      <div class="attachment__badge attachment__badge--close">×</div>
    </div>
  </div>
  <div class="composer__toolbar">...</div>
</div>`} />
      </Section>
      <Section title="CSS">
        <CodeCard language="CSS" code={`.composer__attachments {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  overflow-x: auto;
}
.attachment {
  position: relative;
  flex-shrink: 0;
  border-radius: 8px;
}
.attachment--image,
.attachment--video {
  width: 72px;
  height: 72px;
  background: var(--cometchat-background-color-04);
}
.attachment--document,
.attachment--audio {
  width: 200px;
  height: 72px;
  border: 1px solid var(--cometchat-border-color-default);
  background: var(--cometchat-background-color-02);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
}
.attachment__badge {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.attachment__badge--close { background: var(--cometchat-neutral-color-900); color: var(--cometchat-static-white); }
.attachment__badge--error { background: var(--cometchat-error-color); color: var(--cometchat-static-white); }
.attachment__badge--loading { background: var(--cometchat-neutral-color-900); }
.attachment__play-overlay {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 28px; height: 28px;
  border-radius: 50%;
  background: rgba(0,0,0,0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.attachment__play-btn {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: var(--cometchat-background-color-solid);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.attachment__waveform {
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
}
.attachment__duration {
  font-size: 11px;
  color: var(--cometchat-text-color-secondary);
}`} />
      </Section>
    </div>
  ),
};

/* ─── Docs Helper ──────────────────────────────────────────────────────────── */

const CodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
    <div style={{ padding: "8px 12px", borderBottom: "1px solid #e9eaeb", background: "var(--cometchat-background-color-02)" }}>
      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-secondary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: 14, fontSize: 12, lineHeight: 1.6, color: "var(--cometchat-text-color-primary)", overflowX: "auto", background: "white" }}>
      <code>{code}</code>
    </pre>
  </div>
);

/** Interactive playground — use the controls to switch attachment type and state. */
export const Playground: Story = {
  args: {
    type: "image",
    state: "default",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["image", "video", "document", "audio", "voice"],
      description: "Attachment type",
      table: { category: "Attachment" },
    },
    state: {
      control: "select",
      options: ["loading", "default", "hover", "remove", "error", "play", "pause"],
      description: "Attachment state",
      table: { category: "Attachment" },
    },
  },
  parameters: { layout: "padded", docs: { disable: true } },
  render: function Render(args) {
    const type = (args as Record<string, unknown>).type as string;
    const state = (args as Record<string, unknown>).state as string;

    const badge: BadgeState = (state === "play" || state === "pause") ? "none" : state as BadgeState;
    const playing = state === "play";

    return (
      <div style={{ padding: 24 }}>
        <SpinKeyframes />
        <ComposerWithAttachments>
          {type === "image" && <ImageAttachmentPreview badge={badge} />}
          {type === "video" && <VideoAttachmentPreview badge={badge} />}
          {type === "document" && <DocumentAttachmentPreview badge={badge} />}
          {type === "audio" && <AudioAttachmentPreview badge={badge} playing={playing} />}
          {type === "voice" && <VoiceAttachmentPreview badge={badge} playing={playing} />}
        </ComposerWithAttachments>
      </div>
    );
  },
};
