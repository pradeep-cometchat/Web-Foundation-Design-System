/**
 * Shared primitives for the "Multi Attachments" story pages.
 *
 * A multi-attachment message is a single message carrying several files of
 * mixed types (images, video, documents, audio). These helpers render that
 * message across every surface it appears on: the composer preview strip,
 * the sent/received chat bubble, and search results.
 *
 * Not a `.stories` file, so it is not picked up as its own sidebar entry —
 * it only supplies components to the sibling story pages.
 */
import { useState } from "react";
import { SearchBar } from "../../../../base-components/components/SearchBar";

/* ─── Sample media ─────────────────────────────────────────────────────────── */

export const SAMPLE_IMAGES = [
  "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=300&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=300&fit=crop&q=80",
];

/* ─── Icons ────────────────────────────────────────────────────────────────── */

export const IconPlay = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path d="M3 1.5v9l7.5-4.5L3 1.5Z" fill="currentColor" />
  </svg>
);

export const IconPause = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <rect x="2.5" y="1.5" width="2.5" height="9" rx="1" fill="currentColor" />
    <rect x="7" y="1.5" width="2.5" height="9" rx="1" fill="currentColor" />
  </svg>
);

export const IconClose = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <path d="M1 1l6 6M7 1L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const IconError = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <rect x="5" y="2" width="2" height="5.5" rx="1" fill="currentColor" />
    <circle cx="6" cy="9.5" r="1" fill="currentColor" />
  </svg>
);

export const IconRetry = ({ size = 13 }: { size?: number }) => (
  <span className="icon-rounded" style={{ fontSize: size, lineHeight: 1, "--icon-fill": 0 } as React.CSSProperties}>
    refresh
  </span>
);

export const IconSpinner = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 10 10" fill="none" style={{ animation: "ma-spin 1s linear infinite" }}>
    <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="12 8" strokeLinecap="round" />
  </svg>
);

export const IconClip = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path
      d="M13.5 6.5 7.9 12.1a2.2 2.2 0 0 0 3.1 3.1l6.3-6.3a3.7 3.7 0 0 0-5.2-5.2L5.6 10a5.2 5.2 0 0 0 7.4 7.4l5.3-5.3"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const SpinKeyframes = () => (
  <style>{`@keyframes ma-spin { from { transform: rotate(0); } to { transform: rotate(360deg); } }
.ma-scroll::-webkit-scrollbar { display: none; }`}</style>
);

/* ─── File type badge (borrowed styling from File Bubble) ───────────────────── */

export type DocKind = "pdf" | "doc" | "xls" | "ppt" | "zip" | "txt" | "file";
export type FileKind = DocKind | "audio";

export function FileTypeIcon({ type, size = 32 }: { type: DocKind; size?: number }) {
  const colors: Record<DocKind, { bg: string; fold: string; text: string }> = {
    pdf: { bg: "var(--cometchat-error-color)", fold: "var(--color-error-800)", text: "PDF" },
    doc: { bg: "var(--cometchat-info-color)", fold: "var(--color-info-800)", text: "DOC" },
    xls: { bg: "var(--cometchat-success-color)", fold: "var(--color-success-800)", text: "XLS" },
    ppt: { bg: "var(--cometchat-warning-color)", fold: "var(--color-warning-700)", text: "PPT" },
    zip: { bg: "var(--cometchat-neutral-color-600)", fold: "var(--cometchat-neutral-color-800)", text: "ZIP" },
    txt: { bg: "var(--cometchat-neutral-color-400)", fold: "var(--cometchat-neutral-color-600)", text: "TXT" },
    file: { bg: "var(--cometchat-neutral-color-500)", fold: "var(--cometchat-neutral-color-700)", text: "FILE" },
  };
  const c = colors[type];
  return (
    <svg width={(size * 64) / 80} height={size} viewBox="0 0 64 80" fill="none">
      <path d="M4 8C4 3.58 7.58 0 12 0H44L60 16V72C60 76.42 56.42 80 52 80H12C7.58 80 4 76.42 4 72V8Z" fill={c.bg} />
      <path d="M44 0L60 16H48C45.79 16 44 14.21 44 12V0Z" fill={c.fold} opacity="0.6" />
      <text x="32" y="52" textAnchor="middle" fontSize={c.text.length > 3 ? 12 : 15} fontWeight="700" fill="white">
        {c.text}
      </text>
    </svg>
  );
}

/* ─── Receipt (sent-status) icon ───────────────────────────────────────────── */

export function ReceiptIcon({ status = "read" }: { status?: "sent" | "delivered" | "read" }) {
  const color = status === "read" ? "var(--cometchat-message-seen-color)" : "color-mix(in srgb, var(--cometchat-static-white) 70%, transparent)";
  if (status === "sent") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 8.5L5 11.5L11 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 8.5L8.5 11.5L14.5 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Audio player card ────────────────────────────────────────────────────── */

/** Round play/pause button. `onDark` inverts it for use on a coloured (sent) bubble. */
export function PlayButton({ size = 44, onDark = false, playing = false }: { size?: number; onDark?: boolean; playing?: boolean }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: onDark ? "var(--cometchat-static-white)" : "var(--cometchat-primary-color)",
        color: onDark ? "var(--cometchat-primary-color)" : "var(--cometchat-static-white)",
      }}
    >
      {playing ? <IconPause size={Math.round(size * 0.32)} /> : <IconPlay size={Math.round(size * 0.32)} />}
    </div>
  );
}

/** Seek slider with a draggable knob and a filled track up to it. `progress` is 0–100. */
export function AudioSeekBar({ progress = 0, onDark = false }: { progress?: number; onDark?: boolean }) {
  return (
    <div style={{ position: "relative", height: 6, borderRadius: 3, width: "100%", background: onDark ? "color-mix(in srgb, var(--cometchat-static-white) 35%, transparent)" : "color-mix(in srgb, var(--cometchat-text-color-primary) 14%, transparent)" }}>
      {/* Elapsed fill — solid white on a sent bubble, purple on received */}
      {progress > 0 && (
        <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: `${progress}%`, borderRadius: 3, background: onDark ? "var(--cometchat-static-white)" : "var(--cometchat-primary-color)" }} />
      )}
      <div
        style={{
          position: "absolute",
          top: "50%",
          // Inset the knob by its own width so it sits flush at 0% and never overflows at 100%.
          left: `calc(${progress}% - ${(progress / 100) * 16}px)`,
          transform: "translateY(-50%)",
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "var(--cometchat-static-white)",
          border: `1px solid ${onDark ? "color-mix(in srgb, var(--cometchat-static-black) 6%, transparent)" : "var(--cometchat-border-color-default)"}`,
          boxShadow: "var(--cometchat-shadow-xs)",
        }}
      />
    </div>
  );
}

/** Media-player card: play button + title + seek bar + elapsed/total time. */
export function AudioCard({
  title = "Hello by Adele.mp3",
  current = "00:00",
  total = "00:00",
  progress = 0,
  onDark = false,
  width = 240,
  compact = false,
  download = false,
  downloading = false,
  playing = false,
}: {
  title?: string;
  current?: string;
  total?: string;
  progress?: number;
  onDark?: boolean;
  width?: number | string;
  /** Composer-strip sizing — smaller play button + a font that matches the document card. */
  compact?: boolean;
  /** Show a download affordance (a sent/received audio message can be saved). */
  download?: boolean;
  /** Download in progress — the download icon becomes a progress ring. */
  downloading?: boolean;
  /** Playback in progress — pause button, seek knob partway, elapsed time. */
  playing?: boolean;
}) {
  const titleColor = onDark ? "var(--cometchat-static-white)" : "var(--cometchat-text-color-primary)";
  const timeColor = onDark ? "color-mix(in srgb, var(--cometchat-static-white) 70%, transparent)" : "var(--cometchat-text-color-tertiary)";
  const font = "var(--cometchat-font-family, Inter, sans-serif)";
  const seek = playing && progress === 0 ? 38 : progress;
  const elapsed = playing && current === "00:00" ? "00:12" : current;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: compact ? 10 : 12, width, minWidth: 0 }}>
      <PlayButton size={40} onDark={onDark} playing={playing} />
      <div style={{ display: "flex", flexDirection: "column", gap: compact ? 9 : 8, flex: 1, minWidth: 0 }}>
        <span style={{ fontSize: compact ? 12 : 14, fontWeight: compact ? 500 : 600, color: titleColor, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: font, lineHeight: compact ? "16px" : "20px" }}>{title}</span>
        <AudioSeekBar progress={seek} onDark={onDark} />
        <span style={{ fontSize: compact ? 11 : 12, color: timeColor, fontFamily: font, lineHeight: "14px" }}>{elapsed}/{total}</span>
      </div>
      {download &&
        (downloading ? (
          <DownloadRing size={24} color={onDark ? "var(--cometchat-static-white)" : "var(--cometchat-icon-color-highlight)"} track={onDark ? "color-mix(in srgb, var(--cometchat-static-white) 30%, transparent)" : "var(--cometchat-neutral-color-300)"} />
        ) : (
          <span className="icon-rounded" style={{ fontSize: 20, color: onDark ? "var(--cometchat-static-white)" : "var(--cometchat-icon-color-highlight)", "--icon-fill": 0, flexShrink: 0, alignSelf: "center" } as React.CSSProperties}>
            download
          </span>
        ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   COMPOSER PREVIEW  —  attachments queued in the composer before sending
   ═══════════════════════════════════════════════════════════════════════════ */

export type BadgeState = "none" | "hover" | "remove" | "loading" | "error" | "retry";

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
  color: "var(--cometchat-static-white)",
  border: "2px solid var(--cometchat-background-color-01)",
};

export function Badge({ state }: { state: BadgeState }) {
  if (state === "none") return null;
  const bg =
    state === "error" || state === "retry"
      ? "var(--cometchat-error-color)"
      : "color-mix(in srgb, var(--cometchat-static-black) 70%, var(--cometchat-static-white))";
  return (
    <div style={{ ...badgeBase, background: bg }}>
      {state === "loading" ? <IconSpinner size={10} /> : state === "error" ? <IconError /> : state === "retry" ? <IconRetry /> : <IconClose />}
    </div>
  );
}

const previewCard: React.CSSProperties = {
  position: "relative",
  height: 72,
  borderRadius: "var(--cometchat-radius-2)",
  border: "1px solid var(--cometchat-border-color-default)",
  background: "var(--cometchat-background-color-02)",
  display: "flex",
  alignItems: "center",
  gap: "var(--cometchat-spacing-2-5)",
  padding: "0 var(--cometchat-spacing-3)",
  flexShrink: 0,
};

export function ImagePreview({ badge = "none", src = SAMPLE_IMAGES[0] }: { badge?: BadgeState; src?: string }) {
  return (
    <div style={{ position: "relative", width: 72, height: 72, flexShrink: 0 }}>
      <div style={{ width: 72, height: 72, borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", border: "1px solid var(--cometchat-border-color-default)" }}>
        <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <Badge state={badge} />
    </div>
  );
}

export function VideoPreview({ badge = "none", src = SAMPLE_IMAGES[1] }: { badge?: BadgeState; src?: string }) {
  return (
    <div style={{ position: "relative", width: 72, height: 72, flexShrink: 0 }}>
      <div style={{ width: 72, height: 72, borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", border: "1px solid var(--cometchat-border-color-default)" }}>
        <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "color-mix(in srgb, var(--cometchat-static-black) 45%, transparent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--cometchat-static-white)",
        }}
      >
        <IconPlay size={15} />
      </div>
      <Badge state={badge} />
    </div>
  );
}

export function DocumentPreview({
  badge = "none",
  name = "Roadmap.pdf",
  type = "pdf",
  meta = "PDF",
}: {
  badge?: BadgeState;
  name?: string;
  type?: Exclude<FileKind, "audio">;
  meta?: string;
}) {
  return (
    <div style={{ ...previewCard, width: 200 }}>
      <div style={{ width: 40, height: 40, borderRadius: "var(--cometchat-radius-1-5)", background: "var(--cometchat-static-white)", border: "1px solid var(--cometchat-border-color-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <FileTypeIcon type={type} size={26} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing)", overflow: "hidden" }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: "var(--cometchat-text-color-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</span>
        <span style={{ fontSize: 11, color: "var(--cometchat-text-color-secondary)" }}>{meta}</span>
      </div>
      <Badge state={badge} />
    </div>
  );
}

export function AudioPreview({ badge = "none", title = "Hello by Adele.mp3", total = "00:32" }: { badge?: BadgeState; title?: string; total?: string }) {
  return (
    <div style={{ ...previewCard, width: 260 }}>
      <AudioCard title={title} total={total} width="100%" compact />
      <Badge state={badge} />
    </div>
  );
}

const composerBox: React.CSSProperties = {
  width: 720,
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  background: "var(--cometchat-background-color-01)",
  border: "1px solid var(--cometchat-border-color-default)",
  borderRadius: "var(--cometchat-radius-2)",
};

/** Composer shell with the horizontal, scrollable attachment preview strip.
 *  `reply` renders a quoted-message preview (DS MessagePreview) above the input. */
export function ComposerShell({ children, note, reply }: { children: React.ReactNode; note?: string; reply?: React.ReactNode }) {
  return (
    <div style={composerBox}>
      <SpinKeyframes />
      {reply && <div style={{ padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-3) 0" }}>{reply}</div>}
      <div style={{ padding: 12, fontSize: 14, lineHeight: "20px", fontFamily: "var(--cometchat-font-family, Inter, sans-serif)", color: note ? "var(--cometchat-text-color-primary)" : "var(--cometchat-text-color-placeholder)" }}>
        {note ?? "Type your message..."}
      </div>
      <div className="ma-scroll" style={{ display: "flex", alignItems: "center", gap: "var(--cometchat-spacing-2)", padding: "var(--cometchat-spacing-2-5) var(--cometchat-spacing-3-5)", overflowX: "auto", scrollbarWidth: "none" }}>
        {children}
      </div>
      <ComposerToolbar />
    </div>
  );
}

function ComposerToolbar() {
  const btn: React.CSSProperties = { width: 32, height: 32, borderRadius: "var(--cometchat-radius-2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--cometchat-icon-color-secondary)" };
  const dot = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 6.5v7M6.5 10h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--cometchat-spacing-3)", padding: "var(--cometchat-spacing-1-5) var(--cometchat-spacing-3)", borderTop: "1px solid var(--cometchat-border-color-light)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--cometchat-spacing-2)", flex: 1 }}>
        <span style={btn}>{dot}</span>
      </div>
      <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--cometchat-background-color-solid)", color: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--cometchat-shadow-xs)" }}>
        <svg width="16" height="14" viewBox="0 0 15.78 13.6" fill="none">
          <path d="M1.267 13.52c-.302.121-.589.095-.86-.077-.271-.172-.407-.422-.407-.751V8.47L6.923 6.797 0 5.124V.903C0 .574.136.324.407.152.678-.02.965-.046 1.267.075L15.223 5.96c.372.166.558.447.558.84 0 .393-.186.673-.558.836L1.267 13.52Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CHAT BUBBLE  —  a sent / received message carrying multiple attachments
   ═══════════════════════════════════════════════════════════════════════════ */

export interface BubbleFile {
  kind: FileKind;
  name: string;
  meta: string;
  /** Audio only — playback in progress (pause button + elapsed progress). */
  playing?: boolean;
}

/** A quoted message shown as a reply preview at the top of a bubble. */
export type QuotedMediaKind = "image" | "video" | "file" | "audio";

export interface QuotedReply {
  name: string;
  /** Snippet for a plain-text message being replied to. */
  text?: string;
  /** Summary for an attachment message being replied to — e.g. "6 Images · hello". */
  media?: { kind: QuotedMediaKind; count: number; caption?: string };
  /** Index into SAMPLE_IMAGES to show a media thumbnail on the reply preview. */
  thumb?: number;
}

const QUOTED_ICON: Record<QuotedMediaKind, string> = {
  image: "image",
  video: "videocam",
  file: "description",
  audio: "graphic_eq",
};

function quotedTypeLabel(kind: QuotedMediaKind, count: number): string {
  const labels: Record<QuotedMediaKind, [string, string]> = {
    image: ["Image", "Images"],
    video: ["Video", "Videos"],
    file: ["File", "Files"],
    audio: ["Audio", "Audio"],
  };
  const [singular, plural] = labels[kind];
  return count === 1 ? singular : plural;
}

export interface MultiAttachmentBubbleProps {
  variant?: "sent" | "received";
  /** Image / video tiles rendered as a grid at the top of the bubble. */
  images?: number;
  /** Which of the image tiles are videos (0-based indices). */
  videoAt?: number[];
  /** Total image count — drives the "+N" overlay when it exceeds the tiles shown. */
  totalImages?: number;
  /** File / audio cards stacked under the grid. */
  files?: BubbleFile[];
  caption?: string;
  /** Reply preview shown above the attachment. */
  quoted?: QuotedReply;
  time?: string;
  status?: "sent" | "delivered" | "read";
  state?: "default" | "uploading" | "failed" | "retry" | "downloading";
  /** Hide the time/receipt row — used for all but the last bubble in a stack. */
  showMeta?: boolean;
  /** "Forwarded" label above the attachment. */
  forwarded?: boolean;
  /** "Edited" marker next to the time. */
  edited?: boolean;
}

const BUBBLE_W = 240;
const GRID_GAP = 2;

/** Determinate download-progress ring with a download arrow — the received-side
 *  "downloading" affordance. */
function DownloadRing({ size = 24, progress = 60, color = "var(--cometchat-static-white)", track = "color-mix(in srgb, var(--cometchat-static-white) 30%, transparent)" }: { size?: number; progress?: number; color?: string; track?: string }) {
  const sw = size > 30 ? 3 : 2;
  const r = (size - sw) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - progress / 100);
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width={size} height={size} style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} stroke={track} strokeWidth={sw} fill="none" />
        <circle cx={size / 2} cy={size / 2} r={r} stroke={color} strokeWidth={sw} fill="none" strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round" />
      </svg>
      <span className="icon-rounded" style={{ fontSize: Math.round(size * 0.5), color, "--icon-fill": 0 } as React.CSSProperties}>download</span>
    </div>
  );
}

export function MultiAttachmentBubble({
  variant = "sent",
  images = 0,
  videoAt = [],
  totalImages,
  files = [],
  caption,
  quoted,
  time = "4:56 pm",
  status = "read",
  state = "default",
  showMeta = true,
  forwarded = false,
  edited = false,
}: MultiAttachmentBubbleProps) {
  const [expanded, setExpanded] = useState(false);
  const isSent = variant === "sent";
  const primary = isSent ? "var(--cometchat-static-white)" : "var(--cometchat-text-color-primary)";
  const secondary = isSent ? "color-mix(in srgb, var(--cometchat-static-white) 70%, transparent)" : "var(--cometchat-text-color-tertiary)";

  const shownTiles = Math.min(images, 4);
  const total = totalImages ?? images;
  const overflow = total - shownTiles;

  const wrapper: React.CSSProperties = {
    position: "relative",
    width: "fit-content",
    maxWidth: BUBBLE_W + 16,
    borderRadius: "var(--cometchat-radius-3)",
    background: isSent ? "var(--cometchat-send-bubble-background)" : "var(--cometchat-received-bubble-background)",
    padding: "var(--cometchat-spacing-2)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-1)",
  };

  const img = (i: number, style?: React.CSSProperties) => (
    <div key={i} style={{ position: "relative", overflow: "hidden", ...style }}>
      <img src={SAMPLE_IMAGES[i % SAMPLE_IMAGES.length]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      {videoAt.includes(i) && (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "color-mix(in srgb, var(--cometchat-static-black) 45%, transparent)", color: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IconPlay size={16} />
          </div>
        </div>
      )}
      {i === shownTiles - 1 && overflow > 0 && (
        <div style={{ position: "absolute", inset: 0, background: "color-mix(in srgb, var(--cometchat-static-black) 50%, transparent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "var(--cometchat-static-white)", fontSize: 18, fontWeight: 600 }}>+{overflow}</span>
        </div>
      )}
    </div>
  );

  function grid() {
    const base: React.CSSProperties = { width: BUBBLE_W, borderRadius: "var(--cometchat-radius-2)", overflow: "hidden", position: "relative" };
    let inner: React.ReactNode = null;
    if (shownTiles === 1) inner = <div style={{ ...base, height: BUBBLE_W }}>{img(0, { width: "100%", height: "100%" })}</div>;
    else if (shownTiles === 2)
      inner = (
        <div style={{ ...base, height: 140, display: "grid", gridTemplateColumns: "1fr 1fr", gap: GRID_GAP }}>
          {img(0)}
          {img(1)}
        </div>
      );
    else if (shownTiles === 3)
      inner = (
        <div style={{ ...base, height: BUBBLE_W, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: GRID_GAP }}>
          {img(0, { gridRow: "1 / 3" })}
          {img(1)}
          {img(2)}
        </div>
      );
    else
      inner = (
        <div style={{ ...base, height: BUBBLE_W, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: GRID_GAP }}>
          {img(0)}
          {img(1)}
          {img(2)}
          {img(3)}
        </div>
      );

    if (state === "uploading" || state === "downloading") {
      return (
        <div style={{ position: "relative", width: BUBBLE_W }}>
          <div style={{ filter: "blur(3px)", borderRadius: "var(--cometchat-radius-2)", overflow: "hidden" }}>{inner}</div>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {state === "downloading" ? (
              <DownloadRing size={44} progress={60} />
            ) : (
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "color-mix(in srgb, var(--cometchat-static-black) 55%, transparent)", color: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <IconSpinner size={18} />
              </div>
            )}
          </div>
        </div>
      );
    }
    return inner;
  }

  const downloading = state === "downloading";
  const trailColor = isSent ? "var(--cometchat-static-white)" : "var(--cometchat-icon-color-highlight)";
  const trailTrack = isSent ? "color-mix(in srgb, var(--cometchat-static-white) 30%, transparent)" : "var(--cometchat-neutral-color-300)";

  // Both cards lead with a 40px icon/button and a uniform 12px inset (8px
  // bubble padding + 4px card padding on every side). Several same-format
  // files share ONE bubble — each card then gets a wash so they read as
  // separate items inside it.
  const ICON = 40;
  const multi = files.length > 1;
  const cardBase: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "var(--cometchat-spacing-2-5)",
    width: BUBBLE_W,
    boxSizing: "border-box",
    padding: multi ? "var(--cometchat-spacing-2-5)" : "var(--cometchat-spacing-1)",
    ...(multi && {
      borderRadius: "var(--cometchat-radius-2)",
      // Translucent wash on both sides — lightens the sent bubble, gently
      // darkens the received one (and flips correctly in dark mode).
      background: isSent ? "color-mix(in srgb, var(--cometchat-static-white) 16%, transparent)" : "color-mix(in srgb, var(--cometchat-text-color-primary) 6%, transparent)",
    }),
  };

  function fileCard(f: BubbleFile, key: number) {
    if (f.kind === "audio") {
      return (
        <div key={key} style={cardBase}>
          <AudioCard title={f.name} total={f.meta} onDark={isSent} width="100%" download downloading={downloading} playing={f.playing} />
        </div>
      );
    }
    return (
      <div key={key} style={cardBase}>
        <div style={{ width: ICON, height: ICON, borderRadius: "var(--cometchat-radius-1-5)", background: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <FileTypeIcon type={f.kind} size={26} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-1)", flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: primary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</span>
          <span style={{ fontSize: 12, color: secondary }}>{downloading ? "Downloading…" : f.meta}</span>
        </div>
        {downloading ? (
          <DownloadRing size={24} color={trailColor} track={trailTrack} />
        ) : (
          <span className="icon-rounded" style={{ fontSize: 20, color: trailColor, "--icon-fill": 0, flexShrink: 0 } as React.CSSProperties}>
            download
          </span>
        )}
      </div>
    );
  }

  function replyPreview() {
    if (!quoted) return null;
    const m = quoted.media;
    const summaryText = m ? `${m.count} ${quotedTypeLabel(m.kind, m.count)}${m.caption ? ` · ${m.caption}` : ""}` : (quoted.text ?? "");
    const accent = isSent ? "var(--cometchat-static-white)" : "var(--cometchat-primary-color)";
    return (
      <div style={{ display: "flex", gap: "var(--cometchat-spacing-2)", alignItems: "stretch", borderRadius: "var(--cometchat-radius-2)", background: isSent ? "color-mix(in srgb, var(--cometchat-static-white) 16%, transparent)" : "color-mix(in srgb, var(--cometchat-text-color-primary) 8%, transparent)", overflow: "hidden" }}>
        {/* Accent bar sits flush against the card's left edge, full height. */}
        <div style={{ width: 4, background: accent, flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing)", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-2-5) var(--cometchat-spacing-2) 0" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: accent, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Reply to {quoted.name}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--cometchat-spacing-1)", fontSize: 13, color: isSent ? "color-mix(in srgb, var(--cometchat-static-white) 85%, transparent)" : "var(--cometchat-text-color-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {m && (
              <span className="icon-rounded" style={{ fontSize: 16, "--icon-fill": 1, flexShrink: 0 } as React.CSSProperties}>{QUOTED_ICON[m.kind]}</span>
            )}
            {summaryText}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div style={wrapper}>
      {forwarded && (
        <div style={{ display: "inline-flex", alignItems: "center", gap: "var(--cometchat-spacing-1)", padding: "0 var(--cometchat-spacing-1)", fontSize: 12, fontStyle: "italic", color: secondary }}>
          <span className="icon-rounded" style={{ fontSize: 15, transform: "scaleX(-1)", "--icon-fill": 0 } as React.CSSProperties}>reply</span>
          Forwarded
        </div>
      )}
      {replyPreview()}
      {shownTiles > 0 && grid()}
      {(files.length > 3 && !expanded ? files.slice(0, 3) : files).map(fileCard)}
      {files.length > 3 && (
        <button
          onClick={() => setExpanded((e) => !e)}
          style={{
            width: BUBBLE_W,
            border: "none",
            cursor: "pointer",
            padding: "var(--cometchat-spacing-2)",
            borderRadius: "var(--cometchat-radius-2)",
            background: isSent ? "color-mix(in srgb, var(--cometchat-static-white) 16%, transparent)" : "color-mix(in srgb, var(--cometchat-text-color-primary) 6%, transparent)",
            color: isSent ? "var(--cometchat-static-white)" : "var(--cometchat-primary-color)",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "var(--cometchat-font-family, Inter, sans-serif)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--cometchat-spacing-1)",
          }}
        >
          <span className="icon-rounded" style={{ fontSize: 18, "--icon-fill": 0 } as React.CSSProperties}>{expanded ? "expand_less" : "expand_more"}</span>
          {expanded ? "Show less" : `Show ${files.length - 3} more`}
        </button>
      )}
      {caption && (
        <div style={{ padding: "0 var(--cometchat-spacing-1)", fontSize: 14, lineHeight: "20px", color: primary, fontFamily: "var(--cometchat-font-family, Inter, sans-serif)" }}>{caption}</div>
      )}
      {showMeta && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "var(--cometchat-spacing-1)", padding: "0 var(--cometchat-spacing-1)" }}>
          {state === "uploading" && <span style={{ fontSize: 12, color: secondary, marginRight: "auto" }}>Uploading…</span>}
          {state === "downloading" && <span style={{ fontSize: 12, color: secondary, marginRight: "auto" }}>Downloading…</span>}
          {edited && <span style={{ fontSize: 12, color: secondary }}>Edited</span>}
          <span style={{ fontSize: 12, color: secondary }}>{time}</span>
          {isSent && (state === "default" || state === "downloading") && <ReceiptIcon status={status} />}
          {state === "failed" && (
            <span
              role="img"
              aria-label="Not delivered"
              style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--cometchat-error-color)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, lineHeight: 1, color: "var(--cometchat-static-white)" }}>!</span>
            </span>
          )}
          {state === "retry" && (
            <span
              role="button"
              aria-label="Retry"
              style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--cometchat-error-color)", color: "var(--cometchat-static-white)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, cursor: "pointer" }}
            >
              <IconRetry size={10} />
            </span>
          )}
        </div>
      )}
    </div>
  );
}

/** A vertical stack of consecutive bubbles from one sender (mixed formats become
 *  separate bubbles, one below another). Aligns to the sender's side. */
export function MessageStack({ variant, children }: { variant: "sent" | "received"; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3, alignItems: variant === "sent" ? "flex-end" : "flex-start" }}>
      {children}
    </div>
  );
}

/** Sent/received rows laid out on a chat canvas. */
export function ChatCanvas({ children, width = 360 }: { children: React.ReactNode; width?: number }) {
  return (
    <div style={{ width, display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)", padding: "var(--cometchat-spacing-4)", background: "var(--cometchat-background-color-01)", borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-default)" }}>
      {children}
    </div>
  );
}

export function BubbleRow({ variant, children }: { variant: "sent" | "received"; children: React.ReactNode }) {
  return <div style={{ display: "flex", justifyContent: variant === "sent" ? "flex-end" : "flex-start" }}>{children}</div>;
}

/* ─── Shared label / section helpers ───────────────────────────────────────── */

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: 10, fontWeight: 600, color: "var(--cometchat-text-color-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{children}</span>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-3)" }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--cometchat-text-color-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{title}</div>
      {children}
    </div>
  );
}

/** A labelled specimen — a state name above the thing it names. */
export function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)", alignItems: "flex-start" }}>
      <Label>{label}</Label>
      {children}
    </div>
  );
}

export function Row({ children, gap = 16 }: { children: React.ReactNode; gap?: number }) {
  return <div style={{ display: "flex", flexWrap: "wrap", gap, alignItems: "flex-start" }}>{children}</div>;
}

/* ═══════════════════════════════════════════════════════════════════════════
   SEARCH  —  how attachments surface in search results
   ═══════════════════════════════════════════════════════════════════════════ */

const SEARCH_FILTERS = ["All", "Photos", "Videos", "Audio", "Documents"];

export function SearchHeader({ value = "review", active = "All" }: { value?: string; active?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)", width: "100%" }}>
      <SearchBar value={value} placeholder="Search chats or messages" />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--cometchat-spacing-1-5)" }}>
        {SEARCH_FILTERS.map((f) => {
          const on = f === active;
          return (
            <button
              key={f}
              style={{
                height: 34,
                padding: "0 var(--cometchat-spacing-4)",
                borderRadius: "var(--cometchat-radius-max)",
                border: on ? "1px solid var(--cometchat-primary-color)" : "1px solid var(--cometchat-border-color-default)",
                background: on ? "var(--cometchat-primary-color)" : "var(--cometchat-background-color-01)",
                color: on ? "var(--cometchat-static-white)" : "var(--cometchat-text-color-primary)",
                fontFamily: "var(--cometchat-font-family, Inter, sans-serif)",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {f}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// `hue` is accepted for call-site compatibility; the tint now comes from tokens.
export function Avatar({ label }: { label: string; hue?: number }) {
  return (
    <div style={{ width: 40, height: 40, borderRadius: "var(--cometchat-radius-max)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--cometchat-extended-primary-color-100)", color: "var(--cometchat-primary-color)", font: "var(--cometchat-font-body-semibold)" }}>
      {label}
    </div>
  );
}

/** A conversation search result whose matched message carries several attachments. */
export function ConversationResult({ name, time, count, hue, thumbs }: { name: string; time: string; count: number; hue?: number; thumbs?: number[] }) {
  const idx = thumbs ?? [0, 1, 2];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--cometchat-spacing-3)", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-1)" }}>
      <Avatar label={name[0]} hue={hue} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--cometchat-spacing-2)" }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--cometchat-text-color-primary)" }}>{name}</span>
          <span style={{ fontSize: 12, color: "var(--cometchat-text-color-tertiary)", flexShrink: 0 }}>{time}</span>
        </div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--cometchat-spacing-1-5)", fontSize: 13, color: "var(--cometchat-text-color-secondary)" }}>
          <span style={{ color: "var(--cometchat-icon-color-secondary)", display: "inline-flex" }}>
            <IconClip size={15} />
          </span>
          {count} {count === 1 ? "attachment" : "attachments"}
        </span>
      </div>
      <div style={{ display: "flex", gap: 3, flexShrink: 0 }}>
        {idx.map((n, i) => (
          <div key={i} style={{ position: "relative", width: 34, height: 34, borderRadius: "var(--cometchat-radius-1-5)", overflow: "hidden", border: "1px solid var(--cometchat-border-color-default)" }}>
            <img src={SAMPLE_IMAGES[n % SAMPLE_IMAGES.length]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            {i === idx.length - 1 && count > idx.length && (
              <div style={{ position: "absolute", inset: 0, background: "color-mix(in srgb, var(--cometchat-static-black) 50%, transparent)", color: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600 }}>+{count - idx.length}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Media-grid result tile (Photos / Videos filter). */
export function MediaTile({ src, video, duration }: { src: string; video?: boolean; duration?: string }) {
  return (
    <div style={{ position: "relative", aspectRatio: "1 / 1", borderRadius: "var(--cometchat-radius-2)", overflow: "hidden", border: "1px solid var(--cometchat-border-color-default)" }}>
      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      {video && (
        <>
          <div style={{ position: "absolute", top: 6, right: 6, width: 28, height: 28, borderRadius: "50%", background: "color-mix(in srgb, var(--cometchat-static-black) 50%, transparent)", color: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IconPlay size={13} />
          </div>
          {duration && <div style={{ position: "absolute", bottom: 6, left: 6, padding: "1px var(--cometchat-spacing-1-5)", borderRadius: "var(--cometchat-radius-1)", background: "color-mix(in srgb, var(--cometchat-static-black) 60%, transparent)", color: "var(--cometchat-static-white)", fontSize: 10, fontWeight: 500 }}>{duration}</div>}
        </>
      )}
    </div>
  );
}

/** Document-list result row (Documents filter). */
export function DocumentResult({ name, meta, type, from }: { name: string; meta: string; type: Exclude<FileKind, "audio">; from: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--cometchat-spacing-3)", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-1)" }}>
      <div style={{ width: 40, height: 40, borderRadius: "var(--cometchat-radius-1-5)", background: "var(--cometchat-background-color-02)", border: "1px solid var(--cometchat-border-color-default)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <FileTypeIcon type={type} size={26} />
      </div>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--cometchat-text-color-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</span>
        <span style={{ fontSize: 12, color: "var(--cometchat-text-color-tertiary)" }}>{meta} · shared by {from}</span>
      </div>
      <span className="icon-rounded" style={{ fontSize: 20, color: "var(--cometchat-icon-color-highlight)", "--icon-fill": 0, flexShrink: 0 } as React.CSSProperties}>download</span>
    </div>
  );
}

/** Audio-list result row (Audio filter). */
export function AudioResult({ title, meta, from }: { title: string; meta: string; from: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--cometchat-spacing-3)", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-1)" }}>
      <PlayButton size={40} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-1-5)" }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--cometchat-text-color-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</span>
        <AudioSeekBar />
      </div>
      <span style={{ fontSize: 12, color: "var(--cometchat-text-color-tertiary)", flexShrink: 0 }}>{meta} · {from}</span>
    </div>
  );
}

export function Panel({ children, width = 380 }: { children: React.ReactNode; width?: number }) {
  return (
    <div style={{ width, display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)", padding: "var(--cometchat-spacing-4)", background: "var(--cometchat-background-color-01)", borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-default)" }}>
      {children}
    </div>
  );
}

export function Divider() {
  return <div style={{ height: 1, background: "var(--cometchat-border-color-light)" }} />;
}

export function ResultsLabel({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--cometchat-text-color-tertiary)" }}>{children}</div>;
}

/** Playful card stack — a video card, a photo-illustration card and a small
 *  document card, overlapped like a dropped handful of files. */
function DropStack() {
  const base: React.CSSProperties = { position: "absolute", left: "50%", top: "50%" };
  return (
    <div style={{ position: "relative", width: 230, height: 160 }}>
      {/* Docs — small note card peeking out behind */}
      <div style={{ ...base, transform: "translate(-50%,-50%) translate(56px,-36px) rotate(14deg)", width: 50, height: 60, borderRadius: "var(--cometchat-radius-2-5)", background: "var(--cometchat-static-white)", boxShadow: "var(--cometchat-shadow-md)", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-1-5)", padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-2)" }}>
        <div style={{ height: 5, borderRadius: "var(--cometchat-radius)", background: "color-mix(in srgb, var(--cometchat-primary-color) 28%, var(--cometchat-static-white))", width: "85%" }} />
        <div style={{ height: 5, borderRadius: "var(--cometchat-radius)", background: "color-mix(in srgb, var(--cometchat-primary-color) 28%, var(--cometchat-static-white))", width: "60%" }} />
        <div style={{ height: 5, borderRadius: "var(--cometchat-radius)", background: "color-mix(in srgb, var(--cometchat-primary-color) 28%, var(--cometchat-static-white))", width: "75%" }} />
      </div>
      {/* Videos — primary card with a play button */}
      <div style={{ ...base, transform: "translate(-50%,-50%) translate(-42px,-8px) rotate(-8deg)", width: 108, height: 80, borderRadius: "var(--cometchat-radius-4)", background: "var(--cometchat-primary-color)", border: "4px solid var(--cometchat-static-white)", boxShadow: "var(--cometchat-shadow-lg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--cometchat-static-white)", color: "var(--cometchat-primary-color)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IconPlay size={14} />
        </div>
      </div>
      {/* Images — photo illustration card in front */}
      <div style={{ ...base, transform: "translate(-50%,-50%) translate(38px,18px) rotate(7deg)", width: 112, height: 84, borderRadius: "var(--cometchat-radius-4)", border: "4px solid var(--cometchat-static-white)", boxSizing: "border-box", overflow: "hidden", background: "var(--cometchat-static-white)", boxShadow: "var(--cometchat-shadow-lg)" }}>
        <svg width="100%" height="100%" viewBox="0 0 96 68" preserveAspectRatio="none" style={{ display: "block" }}>
          <rect x="0" y="0" width="96" height="68" fill="color-mix(in srgb, var(--cometchat-primary-color) 14%, var(--cometchat-static-white))" />
          <circle cx="70" cy="20" r="9" fill="var(--cometchat-warning-color)" />
          <path d="M0 58 L28 30 L48 50 L62 40 L96 64 L96 68 L0 68 Z" fill="var(--cometchat-primary-color)" opacity="0.9" />
        </svg>
      </div>
    </div>
  );
}

/** Full-bleed drag-and-drop overlay — dark gray in both themes, a fanned file
 *  stack, headline and helper copy. Position it inside a relative parent. */
export function DropOverlay({ chatName }: { chatName?: string }) {
  const font = "var(--cometchat-font-family, Inter, sans-serif)";
  return (
    <div style={{ position: "absolute", inset: 0, background: "color-mix(in srgb, color-mix(in srgb, var(--cometchat-static-black) 80%, var(--cometchat-static-white)) 92%, transparent)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--cometchat-spacing-2)", pointerEvents: "none", zIndex: 5 }}>
      <DropStack />
      <span style={{ fontSize: 26, fontWeight: 700, color: "var(--cometchat-static-white)", fontFamily: font, marginTop: "var(--cometchat-spacing-2)" }}>Drop files here</span>
      <span style={{ fontSize: 15, lineHeight: "22px", color: "color-mix(in srgb, var(--cometchat-static-white) 75%, transparent)", fontFamily: font, textAlign: "center", maxWidth: 380 }}>
        {chatName ? (
          <>
            Photos, videos, documents and audio — they'll go straight to <strong style={{ color: "var(--cometchat-static-white)", fontWeight: 600 }}>{chatName}</strong>.
          </>
        ) : (
          <>Photos, videos, documents and audio — added to your message, ready to send.</>
        )}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   USAGE — shared HTML + CSS documentation block for every story page
   ═══════════════════════════════════════════════════════════════════════════ */

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "var(--cometchat-spacing-6)" }}>
      <div style={{ font: "var(--cometchat-font-caption1-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-secondary)", marginBottom: "var(--cometchat-spacing-2)", paddingBottom: "var(--cometchat-spacing-2)", borderBottom: "1px solid var(--cometchat-border-color-default)" }}>{title}</div>
      {children}
    </div>
  );
}

function CodeCard({ language, code }: { language: string; code: string }) {
  return (
    <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", background: "var(--cometchat-background-color-02)" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", borderBottom: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-03)" }}>
        <span style={{ font: "var(--cometchat-font-caption2-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-secondary)" }}>{language}</span>
      </div>
      <pre style={{ margin: 0, padding: "var(--cometchat-spacing-3-5)", font: "var(--cometchat-font-caption1-regular)", lineHeight: 1.7, color: "var(--cometchat-text-color-primary)", overflowX: "auto" }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

/** HTML + CSS-tokens + "Composed From" documentation, shared by every story's Usage page. */
export function UsageDoc({ html, css, composed }: { html: string; css: string; composed: { name: string; desc: string }[] }) {
  return (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto", fontFamily: "var(--cometchat-font-family)" }}>
      <UsageSection title="HTML Structure">
        <CodeCard language="HTML" code={html} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={css} />
      </UsageSection>
      <UsageSection title="Composed From">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          {composed.map((c) => (
            <div key={c.name} style={{ padding: "var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)", border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", background: "var(--cometchat-background-color-01)" }}>
              <strong style={{ font: "var(--cometchat-font-body-semibold)", color: "var(--cometchat-text-color-primary)", display: "block", marginBottom: "var(--cometchat-spacing-1)" }}>{c.name}</strong>
              <span style={{ font: "var(--cometchat-font-caption1-regular)", color: "var(--cometchat-text-color-tertiary)" }}>{c.desc}</span>
            </div>
          ))}
        </div>
      </UsageSection>
    </div>
  );
}
