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
import "../../../../base-components/components/SearchBar/SearchBar.css";

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

export const IconClose = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <path d="M1 1l6 6M7 1L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const IconError = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <rect x="5" y="2" width="2" height="5.5" rx="1" fill="currentColor" />
    <circle cx="6" cy="9.5" r="1" fill="currentColor" />
  </svg>
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

export type FileKind = "pdf" | "doc" | "xls" | "audio";

export function FileTypeIcon({ type, size = 32 }: { type: Exclude<FileKind, "audio">; size?: number }) {
  const colors: Record<string, { bg: string; fold: string; text: string }> = {
    pdf: { bg: "var(--cometchat-error-color)", fold: "var(--color-error-800)", text: "PDF" },
    doc: { bg: "var(--cometchat-info-color)", fold: "var(--color-info-800)", text: "DOC" },
    xls: { bg: "var(--cometchat-success-color)", fold: "var(--color-success-800)", text: "XLS" },
  };
  const c = colors[type];
  return (
    <svg width={(size * 64) / 80} height={size} viewBox="0 0 64 80" fill="none">
      <path d="M4 8C4 3.58 7.58 0 12 0H44L60 16V72C60 76.42 56.42 80 52 80H12C7.58 80 4 76.42 4 72V8Z" fill={c.bg} />
      <path d="M44 0L60 16H48C45.79 16 44 14.21 44 12V0Z" fill={c.fold} opacity="0.6" />
      <text x="32" y="52" textAnchor="middle" fontSize="15" fontWeight="700" fill="white">
        {c.text}
      </text>
    </svg>
  );
}

/* ─── Receipt (sent-status) icon ───────────────────────────────────────────── */

export function ReceiptIcon({ status = "read" }: { status?: "sent" | "delivered" | "read" }) {
  const color = status === "read" ? "var(--cometchat-message-seen-color)" : "rgba(255,255,255,0.7)";
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

/** Round play button. `onDark` inverts it for use on a coloured (sent) bubble. */
export function PlayButton({ size = 44, onDark = false }: { size?: number; onDark?: boolean }) {
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
      <IconPlay size={Math.round(size * 0.32)} />
    </div>
  );
}

/** Seek slider with a draggable knob. `progress` is 0–100. */
export function AudioSeekBar({ progress = 0, onDark = false }: { progress?: number; onDark?: boolean }) {
  return (
    <div style={{ position: "relative", height: 6, borderRadius: 3, width: "100%", background: onDark ? "rgba(255,255,255,0.35)" : "var(--cometchat-neutral-color-300)" }}>
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
          border: `1px solid ${onDark ? "rgba(0,0,0,0.06)" : "var(--cometchat-border-color-default)"}`,
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
}: {
  title?: string;
  current?: string;
  total?: string;
  progress?: number;
  onDark?: boolean;
  width?: number | string;
  /** Composer-strip sizing — smaller play button + a font that matches the document card. */
  compact?: boolean;
}) {
  const titleColor = onDark ? "var(--cometchat-static-white)" : "var(--cometchat-text-color-primary)";
  const timeColor = onDark ? "rgba(255,255,255,0.7)" : "var(--cometchat-text-color-tertiary)";
  const font = "var(--cometchat-font-family, Inter, sans-serif)";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: compact ? 10 : 12, width, minWidth: 0 }}>
      <PlayButton size={compact ? 40 : 44} onDark={onDark} />
      <div style={{ display: "flex", flexDirection: "column", gap: compact ? 9 : 6, flex: 1, minWidth: 0 }}>
        <span style={{ fontSize: compact ? 12 : 14, fontWeight: compact ? 500 : 600, color: titleColor, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: font, lineHeight: compact ? "16px" : "20px" }}>{title}</span>
        <AudioSeekBar progress={progress} onDark={onDark} />
        <span style={{ fontSize: compact ? 11 : 12, color: timeColor, fontFamily: font, lineHeight: "14px" }}>{current}/{total}</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   COMPOSER PREVIEW  —  attachments queued in the composer before sending
   ═══════════════════════════════════════════════════════════════════════════ */

export type BadgeState = "none" | "hover" | "remove" | "loading" | "error";

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
    state === "error"
      ? "var(--cometchat-error-color)"
      : state === "remove"
        ? "var(--cometchat-text-color-secondary)"
        : "var(--cometchat-neutral-color-700)";
  return (
    <div style={{ ...badgeBase, background: bg }}>
      {state === "loading" ? <IconSpinner size={10} /> : state === "error" ? <IconError /> : <IconClose />}
    </div>
  );
}

const previewCard: React.CSSProperties = {
  position: "relative",
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

export function ImagePreview({ badge = "none", src = SAMPLE_IMAGES[0] }: { badge?: BadgeState; src?: string }) {
  return (
    <div style={{ position: "relative", width: 72, height: 72, flexShrink: 0 }}>
      <div style={{ width: 72, height: 72, borderRadius: 12, overflow: "hidden", border: "1px solid var(--cometchat-border-color-default)" }}>
        <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <Badge state={badge} />
    </div>
  );
}

export function VideoPreview({ badge = "none", src = SAMPLE_IMAGES[1] }: { badge?: BadgeState; src?: string }) {
  return (
    <div style={{ position: "relative", width: 72, height: 72, flexShrink: 0 }}>
      <div style={{ width: 72, height: 72, borderRadius: 12, overflow: "hidden", border: "1px solid var(--cometchat-border-color-default)" }}>
        <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: "rgba(0,0,0,0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--cometchat-static-white)",
        }}
      >
        <IconPlay />
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
      <FileTypeIcon type={type} size={40} />
      <div style={{ display: "flex", flexDirection: "column", gap: 2, overflow: "hidden" }}>
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
  borderRadius: 8,
};

/** Composer shell with the horizontal, scrollable attachment preview strip. */
export function ComposerShell({ children, note }: { children: React.ReactNode; note?: string }) {
  return (
    <div style={composerBox}>
      <SpinKeyframes />
      <div style={{ padding: 12, fontSize: 14, lineHeight: "20px", fontFamily: "var(--cometchat-font-family, Inter, sans-serif)", color: note ? "var(--cometchat-text-color-primary)" : "var(--cometchat-text-color-placeholder)" }}>
        {note ?? "Type your message..."}
      </div>
      <div className="ma-scroll" style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", overflowX: "auto", scrollbarWidth: "none" }}>
        {children}
      </div>
      <ComposerToolbar />
    </div>
  );
}

function ComposerToolbar() {
  const btn: React.CSSProperties = { width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--cometchat-icon-color-secondary)" };
  const dot = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 6.5v7M6.5 10h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "6px 12px", borderTop: "1px solid var(--cometchat-border-color-light)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
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
}

/** A quoted message shown as a reply preview at the top of a bubble. */
export interface QuotedReply {
  name: string;
  text: string;
  /** Index into SAMPLE_IMAGES to show a media thumbnail on the reply preview. */
  thumb?: number;
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
  state?: "default" | "uploading" | "failed";
  /** Hide the time/receipt row — used for all but the last bubble in a stack. */
  showMeta?: boolean;
}

const BUBBLE_W = 240;
const GRID_GAP = 2;

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
}: MultiAttachmentBubbleProps) {
  const isSent = variant === "sent";
  const primary = isSent ? "var(--cometchat-static-white)" : "var(--cometchat-text-color-primary)";
  const secondary = isSent ? "rgba(255,255,255,0.7)" : "var(--cometchat-text-color-tertiary)";
  const cardBg = isSent ? "rgba(255,255,255,0.14)" : "var(--cometchat-background-color-02)";
  const accent = isSent ? "var(--cometchat-static-white)" : "var(--cometchat-primary-color)";

  const shownTiles = Math.min(images, 4);
  const total = totalImages ?? images;
  const overflow = total - shownTiles;

  const wrapper: React.CSSProperties = {
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
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(0,0,0,0.45)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IconPlay />
          </div>
        </div>
      )}
      {i === shownTiles - 1 && overflow > 0 && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>+{overflow}</span>
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

    if (state === "uploading" || state === "failed") {
      return (
        <div style={{ position: "relative", width: BUBBLE_W }}>
          <div style={{ filter: "blur(3px)", borderRadius: "var(--cometchat-radius-2)", overflow: "hidden" }}>{inner}</div>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(0,0,0,0.55)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {state === "uploading" ? <IconSpinner size={18} /> : <IconError />}
            </div>
          </div>
        </div>
      );
    }
    return inner;
  }

  function fileCard(f: BubbleFile, key: number) {
    if (f.kind === "audio") {
      return (
        <div key={key} style={{ width: BUBBLE_W, boxSizing: "border-box", padding: "var(--cometchat-spacing-2-5)", borderRadius: "var(--cometchat-radius-2)", background: cardBg }}>
          <AudioCard title={f.name} total={f.meta} onDark={isSent} width="100%" />
        </div>
      );
    }
    return (
      <div key={key} style={{ display: "flex", alignItems: "center", gap: "var(--cometchat-spacing-2)", width: BUBBLE_W, boxSizing: "border-box", padding: "var(--cometchat-spacing-2)", borderRadius: "var(--cometchat-radius-2)", background: cardBg }}>
        <div style={{ width: 32, height: 32, borderRadius: "var(--cometchat-radius-1-5)", background: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <FileTypeIcon type={f.kind} size={22} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: primary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</span>
          <span style={{ fontSize: 12, color: secondary }}>{f.meta}</span>
        </div>
        <span className="icon-rounded" style={{ fontSize: 20, color: isSent ? "var(--cometchat-static-white)" : "var(--cometchat-icon-color-highlight)", "--icon-fill": 0, flexShrink: 0 } as React.CSSProperties}>
          download
        </span>
      </div>
    );
  }

  function replyPreview() {
    if (!quoted) return null;
    return (
      <div style={{ display: "flex", gap: "var(--cometchat-spacing-2)", alignItems: "stretch", padding: "6px 8px", borderRadius: "var(--cometchat-radius-1-5)", background: isSent ? "rgba(255,255,255,0.16)" : "var(--cometchat-background-color-02)", overflow: "hidden" }}>
        <div style={{ width: 3, borderRadius: 2, background: accent, flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 1 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: accent, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{quoted.name}</span>
          <span style={{ fontSize: 12, color: secondary, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{quoted.text}</span>
        </div>
        {quoted.thumb !== undefined && (
          <img src={SAMPLE_IMAGES[quoted.thumb % SAMPLE_IMAGES.length]} alt="" style={{ width: 34, height: 34, borderRadius: 6, objectFit: "cover", flexShrink: 0 }} />
        )}
      </div>
    );
  }

  return (
    <div style={wrapper}>
      {replyPreview()}
      {shownTiles > 0 && grid()}
      {files.map(fileCard)}
      {caption && (
        <div style={{ padding: "0 var(--cometchat-spacing-1)", fontSize: 14, lineHeight: "20px", color: primary, fontFamily: "var(--cometchat-font-family, Inter, sans-serif)" }}>{caption}</div>
      )}
      {showMeta && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "var(--cometchat-spacing-1)", padding: "0 var(--cometchat-spacing-1)" }}>
          {state === "failed" && <span style={{ fontSize: 12, color: isSent ? "rgba(255,255,255,0.85)" : "var(--cometchat-error-color)", marginRight: "auto" }}>Not delivered · Tap to retry</span>}
          {state === "uploading" && <span style={{ fontSize: 12, color: secondary, marginRight: "auto" }}>Uploading…</span>}
          <span style={{ fontSize: 12, color: secondary }}>{time}</span>
          {isSent && state === "default" && <ReceiptIcon status={status} />}
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
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--cometchat-text-color-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{title}</div>
      {children}
    </div>
  );
}

/** A labelled specimen — a state name above the thing it names. */
export function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
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
      <div className="search-bar">
        <div className="search-bar__input-wrapper">
          <span className="search-bar__icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="currentColor" />
            </svg>
          </span>
          <input className="search-bar__input" type="text" value={value} readOnly />
          <button type="button" className="search-bar__clear" aria-label="Clear search">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 11L6 6M6 6L11 1M6 6L1 1M6 6L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--cometchat-spacing-1-5)" }}>
        {SEARCH_FILTERS.map((f) => {
          const on = f === active;
          return (
            <button
              key={f}
              style={{
                height: 34,
                padding: "0 16px",
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

export function Avatar({ label, hue = 250 }: { label: string; hue?: number }) {
  return (
    <div style={{ width: 40, height: 40, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: `hsl(${hue} 60% 92%)`, color: `hsl(${hue} 45% 40%)`, fontSize: 14, fontWeight: 600 }}>
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--cometchat-text-color-primary)" }}>{name}</span>
          <span style={{ fontSize: 12, color: "var(--cometchat-text-color-tertiary)", flexShrink: 0 }}>{time}</span>
        </div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--cometchat-text-color-secondary)" }}>
          <span style={{ color: "var(--cometchat-icon-color-secondary)", display: "inline-flex" }}>
            <IconClip size={15} />
          </span>
          {count} {count === 1 ? "attachment" : "attachments"}
        </span>
      </div>
      <div style={{ display: "flex", gap: 3, flexShrink: 0 }}>
        {idx.map((n, i) => (
          <div key={i} style={{ position: "relative", width: 34, height: 34, borderRadius: 6, overflow: "hidden", border: "1px solid var(--cometchat-border-color-default)" }}>
            <img src={SAMPLE_IMAGES[n % SAMPLE_IMAGES.length]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            {i === idx.length - 1 && count > idx.length && (
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600 }}>+{count - idx.length}</div>
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
          <div style={{ position: "absolute", top: 6, right: 6, width: 22, height: 22, borderRadius: "50%", background: "rgba(0,0,0,0.5)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IconPlay size={10} />
          </div>
          {duration && <div style={{ position: "absolute", bottom: 6, left: 6, padding: "1px 6px", borderRadius: 4, background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: 10, fontWeight: 500 }}>{duration}</div>}
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
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
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
