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
import pdfIcon from "./file-icons/pdf.svg";
import docIcon from "./file-icons/doc.svg";
import xlsIcon from "./file-icons/xls.svg";
import pptIcon from "./file-icons/ppt.svg";
import zipIcon from "./file-icons/zip.svg";
import txtIcon from "./file-icons/txt.svg";
import fileIcon from "./file-icons/file.svg";

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
    <path
      d="M1 1l6 6M7 1L1 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const IconError = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <rect x="5" y="2" width="2" height="5.5" rx="1" fill="currentColor" />
    <circle cx="6" cy="9.5" r="1" fill="currentColor" />
  </svg>
);

export const IconRetry = ({ size = 13 }: { size?: number }) => (
  <span
    className="icon-rounded"
    style={
      { fontSize: size, lineHeight: 1, "--icon-fill": 0 } as React.CSSProperties
    }
  >
    refresh
  </span>
);

export const IconSpinner = ({ size = 12 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    fill="none"
    style={{ animation: "ma-spin 1s linear infinite" }}
  >
    <circle
      cx="5"
      cy="5"
      r="4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeDasharray="12 8"
      strokeLinecap="round"
    />
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

// File-type icons imported from Figma (Design System — File Type set). Each is a
// square colour file-card (white rounded backing + coloured file + fold), so
// render it directly — no extra white tile is needed around it.
const FILE_ICONS: Record<DocKind, string> = {
  pdf: pdfIcon,
  doc: docIcon,
  xls: xlsIcon,
  ppt: pptIcon,
  zip: zipIcon,
  txt: txtIcon,
  file: fileIcon,
};

export function FileTypeIcon({
  type,
  size = 32,
}: {
  type: DocKind;
  size?: number;
}) {
  return (
    <img
      src={FILE_ICONS[type]}
      width={size}
      height={size}
      alt=""
      style={{ display: "block", flexShrink: 0 }}
    />
  );
}

/* ─── Receipt (sent-status) icon ───────────────────────────────────────────── */

export function ReceiptIcon({
  status = "read",
}: {
  status?: "sent" | "delivered" | "read";
}) {
  const color =
    status === "read"
      ? "var(--cometchat-message-seen-color)"
      : "color-mix(in srgb, var(--cometchat-static-white) 70%, transparent)";
  if (status === "sent") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M3.5 8.5L6.5 11.5L12.5 4.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M2 8.5L5 11.5L11 4.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 8.5L8.5 11.5L14.5 4.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Audio player card ────────────────────────────────────────────────────── */

/** Round play/pause button. `onDark` inverts it for use on a coloured (sent) bubble. */
export function PlayButton({
  size = 44,
  onDark = false,
  playing = false,
}: {
  size?: number;
  onDark?: boolean;
  playing?: boolean;
}) {
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
        background: onDark
          ? "var(--cometchat-static-white)"
          : "var(--cometchat-primary-color)",
        color: onDark
          ? "var(--cometchat-primary-color)"
          : "var(--cometchat-static-white)",
      }}
    >
      {playing ? (
        <IconPause size={Math.round(size * 0.32)} />
      ) : (
        <IconPlay size={Math.round(size * 0.32)} />
      )}
    </div>
  );
}

/** Seek slider with a draggable knob and a filled track up to it. `progress` is 0–100. */
export function AudioSeekBar({
  progress = 0,
  onDark = false,
}: {
  progress?: number;
  onDark?: boolean;
}) {
  return (
    <div
      style={{
        position: "relative",
        height: 6,
        borderRadius: 3,
        width: "100%",
        background: onDark
          ? "color-mix(in srgb, var(--cometchat-static-white) 35%, transparent)"
          : "color-mix(in srgb, var(--cometchat-text-color-primary) 14%, transparent)",
      }}
    >
      {/* Elapsed fill — solid white on a sent bubble, purple on received */}
      {progress > 0 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: `${progress}%`,
            borderRadius: 3,
            background: onDark
              ? "var(--cometchat-static-white)"
              : "var(--cometchat-primary-color)",
          }}
        />
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
  showSeek = true,
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
  /** Hide the seek bar (composer preview shows only the duration). */
  showSeek?: boolean;
}) {
  const titleColor = onDark
    ? "var(--cometchat-static-white)"
    : "var(--cometchat-text-color-primary)";
  const timeColor = onDark
    ? "color-mix(in srgb, var(--cometchat-static-white) 70%, transparent)"
    : "var(--cometchat-text-color-tertiary)";
  const font = "var(--cometchat-font-family, Inter, sans-serif)";
  const seek = playing && progress === 0 ? 38 : progress;
  const elapsed = playing && current === "00:00" ? "00:12" : current;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: compact ? 10 : 12,
        width,
        minWidth: 0,
      }}
    >
      <PlayButton size={40} onDark={onDark} playing={playing} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: showSeek ? (compact ? 9 : 8) : "var(--cometchat-spacing)",
          flex: 1,
          minWidth: 0,
        }}
      >
        <span
          style={{
            fontSize: compact ? 12 : 14,
            fontWeight: compact ? 500 : 600,
            color: titleColor,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontFamily: font,
            lineHeight: compact ? "16px" : "20px",
          }}
        >
          {title}
        </span>
        {showSeek && <AudioSeekBar progress={seek} onDark={onDark} />}
        <span
          style={{
            fontSize: compact ? 11 : 12,
            color: timeColor,
            fontFamily: font,
            lineHeight: "14px",
          }}
        >
          {elapsed}/{total}
        </span>
      </div>
      {download &&
        (downloading ? (
          <DownloadRing
            size={24}
            color={
              onDark
                ? "var(--cometchat-static-white)"
                : "var(--cometchat-icon-color-highlight)"
            }
            track={
              onDark
                ? "color-mix(in srgb, var(--cometchat-static-white) 30%, transparent)"
                : "var(--cometchat-neutral-color-300)"
            }
          />
        ) : (
          <span
            className="icon-rounded"
            style={
              {
                fontSize: 20,
                color: onDark
                  ? "var(--cometchat-static-white)"
                  : "var(--cometchat-icon-color-highlight)",
                "--icon-fill": 0,
                flexShrink: 0,
                alignSelf: "center",
              } as React.CSSProperties
            }
          >
            download
          </span>
        ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   COMPOSER PREVIEW  —  attachments queued in the composer before sending
   ═══════════════════════════════════════════════════════════════════════════ */

export type BadgeState =
  "none" | "hover" | "remove" | "loading" | "error" | "retry";

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
      {state === "loading" ? (
        <IconSpinner size={10} />
      ) : state === "error" ? (
        <IconError />
      ) : state === "retry" ? (
        <IconRetry />
      ) : (
        <IconClose />
      )}
    </div>
  );
}

const previewCard: React.CSSProperties = {
  position: "relative",
  borderRadius: "var(--cometchat-radius-2)",
  border: "1px solid var(--cometchat-border-color-default)",
  background: "var(--cometchat-background-color-02)",
  display: "flex",
  alignItems: "center",
  gap: "var(--cometchat-spacing-2-5)",
  // 10px inset on every side.
  padding: "var(--cometchat-spacing-2-5)",
  boxSizing: "border-box",
  flexShrink: 0,
};

export function ImagePreview({
  badge = "none",
  src = SAMPLE_IMAGES[0],
}: {
  badge?: BadgeState;
  src?: string;
}) {
  return (
    <div style={{ position: "relative", width: 60, height: 60, flexShrink: 0 }}>
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: "var(--cometchat-radius-3)",
          overflow: "hidden",
          border: "1px solid var(--cometchat-border-color-default)",
        }}
      >
        <img
          src={src}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <Badge state={badge} />
    </div>
  );
}

export function VideoPreview({
  badge = "none",
  src = SAMPLE_IMAGES[1],
}: {
  badge?: BadgeState;
  src?: string;
}) {
  return (
    <div style={{ position: "relative", width: 60, height: 60, flexShrink: 0 }}>
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: "var(--cometchat-radius-3)",
          overflow: "hidden",
          border: "1px solid var(--cometchat-border-color-default)",
        }}
      >
        <img
          src={src}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 32,
          height: 32,
          borderRadius: "50%",
          background:
            "color-mix(in srgb, var(--cometchat-static-black) 45%, transparent)",
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
      <FileTypeIcon type={type} size={40} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--cometchat-spacing)",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: "var(--cometchat-text-color-primary)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: 11,
            color: "var(--cometchat-text-color-secondary)",
          }}
        >
          {meta}
        </span>
      </div>
      <Badge state={badge} />
    </div>
  );
}

export function AudioPreview({
  badge = "none",
  title = "Hello by Adele.mp3",
  total = "00:32",
}: {
  badge?: BadgeState;
  title?: string;
  total?: string;
}) {
  return (
    <div style={{ ...previewCard, width: 260 }}>
      <AudioCard
        title={title}
        total={total}
        width="100%"
        compact
        showSeek={false}
      />
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
export function ComposerShell({
  children,
  note,
  reply,
}: {
  children: React.ReactNode;
  note?: string;
  reply?: React.ReactNode;
}) {
  return (
    <div style={composerBox}>
      <SpinKeyframes />
      {reply && (
        <div
          style={{
            padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-3) 0",
          }}
        >
          {reply}
        </div>
      )}
      <div
        style={{
          padding: 12,
          fontSize: 14,
          lineHeight: "20px",
          fontFamily: "var(--cometchat-font-family, Inter, sans-serif)",
          color: note
            ? "var(--cometchat-text-color-primary)"
            : "var(--cometchat-text-color-placeholder)",
        }}
      >
        {note ?? "Type your message..."}
      </div>
      <div
        className="ma-scroll"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--cometchat-spacing-2)",
          padding: "var(--cometchat-spacing-2-5) var(--cometchat-spacing-3-5)",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {children}
      </div>
      <ComposerToolbar />
    </div>
  );
}

function ComposerToolbar() {
  const btn: React.CSSProperties = {
    width: 32,
    height: 32,
    borderRadius: "var(--cometchat-radius-2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--cometchat-icon-color-secondary)",
  };
  const dot = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M10 6.5v7M6.5 10h7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--cometchat-spacing-3)",
        padding: "var(--cometchat-spacing-1-5) var(--cometchat-spacing-3)",
        borderTop: "1px solid var(--cometchat-border-color-light)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--cometchat-spacing-2)",
          flex: 1,
        }}
      >
        <span style={btn}>{dot}</span>
      </div>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "var(--cometchat-background-color-solid)",
          color: "var(--cometchat-static-white)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "var(--cometchat-shadow-xs)",
        }}
      >
        <svg width="16" height="14" viewBox="0 0 15.78 13.6" fill="none">
          <path
            d="M1.267 13.52c-.302.121-.589.095-.86-.077-.271-.172-.407-.422-.407-.751V8.47L6.923 6.797 0 5.124V.903C0 .574.136.324.407.152.678-.02.965-.046 1.267.075L15.223 5.96c.372.166.558.447.558.84 0 .393-.186.673-.558.836L1.267 13.52Z"
            fill="currentColor"
          />
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
  /** Unsupported/undecodable attachment — image & video tiles fall back to a
   *  generic "?" file placeholder, and file/audio cards show the "?" icon with
   *  a download control instead of a preview. */
  unsupported?: boolean;
  /** Click handler for an unsupported image/video tile — opens the preview
   *  dialog. Makes the "?" placeholder interactive. */
  onUnsupportedClick?: () => void;
}

const BUBBLE_W = 240;
const GRID_GAP = 2;

/** Determinate download-progress ring with a download arrow — the received-side
 *  "downloading" affordance. */
function DownloadRing({
  size = 24,
  progress = 60,
  color = "var(--cometchat-static-white)",
  track = "color-mix(in srgb, var(--cometchat-static-white) 30%, transparent)",
}: {
  size?: number;
  progress?: number;
  color?: string;
  track?: string;
}) {
  const sw = size > 30 ? 3 : 2;
  const r = (size - sw) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - progress / 100);
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={track}
          strokeWidth={sw}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={color}
          strokeWidth={sw}
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={off}
          strokeLinecap="round"
        />
      </svg>
      <span
        className="icon-rounded"
        style={
          {
            fontSize: Math.round(size * 0.5),
            color,
            "--icon-fill": 0,
          } as React.CSSProperties
        }
      >
        download
      </span>
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
  unsupported = false,
  onUnsupportedClick,
}: MultiAttachmentBubbleProps) {
  const [expanded, setExpanded] = useState(false);
  const isSent = variant === "sent";
  const primary = isSent
    ? "var(--cometchat-static-white)"
    : "var(--cometchat-text-color-primary)";
  const secondary = isSent
    ? "color-mix(in srgb, var(--cometchat-static-white) 70%, transparent)"
    : "var(--cometchat-text-color-tertiary)";

  const shownTiles = Math.min(images, 4);
  const total = totalImages ?? images;
  const overflow = total - shownTiles;

  const wrapper: React.CSSProperties = {
    position: "relative",
    width: "fit-content",
    maxWidth: BUBBLE_W + 16,
    borderRadius: "var(--cometchat-radius-3)",
    background: isSent
      ? "var(--cometchat-send-bubble-background)"
      : "var(--cometchat-received-bubble-background)",
    padding: "var(--cometchat-spacing-2)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-1)",
  };

  const img = (i: number, style?: React.CSSProperties) =>
    unsupported ? (
      <div
        key={i}
        onClick={onUnsupportedClick}
        style={{
          position: "relative",
          borderRadius: "var(--cometchat-radius-2)",
          background: isSent
            ? "var(--cometchat-background-color-02)"
            : "var(--cometchat-background-color-01)",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: onUnsupportedClick ? "pointer" : undefined,
          ...style,
        }}
      >
        <FileTypeIcon type="file" size={40} />
      </div>
    ) : (
      <div
        key={i}
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "var(--cometchat-radius-2)",
          ...style,
        }}
      >
        <img
          src={SAMPLE_IMAGES[i % SAMPLE_IMAGES.length]}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {videoAt.includes(i) && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background:
                  "color-mix(in srgb, var(--cometchat-static-black) 45%, transparent)",
                color: "var(--cometchat-static-white)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconPlay size={16} />
            </div>
          </div>
        )}
        {i === shownTiles - 1 && overflow > 0 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "color-mix(in srgb, var(--cometchat-static-black) 50%, transparent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "var(--cometchat-static-white)",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              +{overflow}
            </span>
          </div>
        )}
      </div>
    );

  function grid() {
    const base: React.CSSProperties = {
      width: BUBBLE_W,
      borderRadius: "var(--cometchat-radius-2)",
      overflow: "hidden",
      position: "relative",
    };
    let inner: React.ReactNode = null;
    if (shownTiles === 1)
      inner = (
        <div style={{ ...base, height: BUBBLE_W }}>
          {img(0, { width: "100%", height: "100%" })}
        </div>
      );
    else if (shownTiles === 2)
      inner = (
        <div
          style={{
            ...base,
            height: 140,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: GRID_GAP,
          }}
        >
          {img(0)}
          {img(1)}
        </div>
      );
    else if (shownTiles === 3)
      inner = (
        <div
          style={{
            ...base,
            height: BUBBLE_W,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: GRID_GAP,
          }}
        >
          {img(0, { gridRow: "1 / 3" })}
          {img(1)}
          {img(2)}
        </div>
      );
    else
      inner = (
        <div
          style={{
            ...base,
            height: BUBBLE_W,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: GRID_GAP,
          }}
        >
          {img(0)}
          {img(1)}
          {img(2)}
          {img(3)}
        </div>
      );

    if (state === "uploading" || state === "downloading") {
      return (
        <div style={{ position: "relative", width: BUBBLE_W }}>
          <div
            style={{
              filter: "blur(3px)",
              borderRadius: "var(--cometchat-radius-2)",
              overflow: "hidden",
            }}
          >
            {inner}
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {state === "downloading" ? (
              <DownloadRing size={44} progress={60} />
            ) : (
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background:
                    "color-mix(in srgb, var(--cometchat-static-black) 55%, transparent)",
                  color: "var(--cometchat-static-white)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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
  const trailColor = isSent
    ? "var(--cometchat-static-white)"
    : "var(--cometchat-icon-color-highlight)";
  const trailTrack = isSent
    ? "color-mix(in srgb, var(--cometchat-static-white) 30%, transparent)"
    : "var(--cometchat-neutral-color-300)";

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
    padding: multi
      ? "var(--cometchat-spacing-2-5)"
      : "var(--cometchat-spacing-1)",
    ...(multi && {
      borderRadius: "var(--cometchat-radius-2)",
      // Translucent wash on both sides — lightens the sent bubble, gently
      // darkens the received one (and flips correctly in dark mode).
      background: isSent
        ? "color-mix(in srgb, var(--cometchat-static-white) 16%, transparent)"
        : "color-mix(in srgb, var(--cometchat-text-color-primary) 6%, transparent)",
    }),
  };

  function fileCard(f: BubbleFile, key: number) {
    if (f.kind === "audio" && !unsupported) {
      return (
        <div key={key} style={cardBase}>
          <AudioCard
            title={f.name}
            total={f.meta}
            onDark={isSent}
            width="100%"
            download
            downloading={downloading}
            playing={f.playing}
          />
        </div>
      );
    }
    return (
      <div key={key} style={cardBase}>
        <FileTypeIcon
          type={unsupported ? "file" : (f.kind as DocKind)}
          size={ICON}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--cometchat-spacing-1)",
            flex: 1,
            minWidth: 0,
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: primary,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {f.name}
          </span>
          <span style={{ fontSize: 12, color: secondary }}>
            {downloading ? "Downloading…" : f.meta}
          </span>
        </div>
        {downloading ? (
          <DownloadRing size={24} color={trailColor} track={trailTrack} />
        ) : (
          <span
            className="icon-rounded"
            style={
              {
                fontSize: 20,
                color: trailColor,
                "--icon-fill": 0,
                flexShrink: 0,
              } as React.CSSProperties
            }
          >
            download
          </span>
        )}
      </div>
    );
  }

  function replyPreview() {
    if (!quoted) return null;
    const m = quoted.media;
    const summaryText = m
      ? `${m.count} ${quotedTypeLabel(m.kind, m.count)}${m.caption ? ` · ${m.caption}` : ""}`
      : (quoted.text ?? "");
    const accent = isSent
      ? "var(--cometchat-static-white)"
      : "var(--cometchat-primary-color)";
    return (
      <div
        style={{
          display: "flex",
          gap: "var(--cometchat-spacing-2)",
          alignItems: "stretch",
          borderRadius: "var(--cometchat-radius-2)",
          background: isSent
            ? "color-mix(in srgb, var(--cometchat-static-white) 16%, transparent)"
            : "color-mix(in srgb, var(--cometchat-text-color-primary) 8%, transparent)",
          overflow: "hidden",
        }}
      >
        {/* Accent bar sits flush against the card's left edge, full height. */}
        <div style={{ width: 4, background: accent, flexShrink: 0 }} />
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: "var(--cometchat-spacing)",
            padding:
              "var(--cometchat-spacing-2) var(--cometchat-spacing-2-5) var(--cometchat-spacing-2) 0",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: accent,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Reply to {quoted.name}
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--cometchat-spacing-1)",
              fontSize: 13,
              color: isSent
                ? "color-mix(in srgb, var(--cometchat-static-white) 85%, transparent)"
                : "var(--cometchat-text-color-primary)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {m && (
              <span
                className="icon-rounded"
                style={
                  {
                    fontSize: 16,
                    "--icon-fill": 1,
                    flexShrink: 0,
                  } as React.CSSProperties
                }
              >
                {QUOTED_ICON[m.kind]}
              </span>
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
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--cometchat-spacing-1)",
            padding: "0 var(--cometchat-spacing-1)",
            fontSize: 12,
            fontStyle: "italic",
            color: secondary,
          }}
        >
          <span
            className="icon-rounded"
            style={
              {
                fontSize: 15,
                transform: "scaleX(-1)",
                "--icon-fill": 0,
              } as React.CSSProperties
            }
          >
            reply
          </span>
          Forwarded
        </div>
      )}
      {replyPreview()}
      {shownTiles > 0 && grid()}
      {(files.length > 3 && !expanded ? files.slice(0, 3) : files).map(
        fileCard,
      )}
      {files.length > 3 && (
        <button
          onClick={() => setExpanded((e) => !e)}
          style={{
            width: BUBBLE_W,
            border: "none",
            cursor: "pointer",
            padding: "var(--cometchat-spacing-2)",
            borderRadius: "var(--cometchat-radius-2)",
            background: isSent
              ? "color-mix(in srgb, var(--cometchat-static-white) 16%, transparent)"
              : "color-mix(in srgb, var(--cometchat-text-color-primary) 6%, transparent)",
            color: isSent
              ? "var(--cometchat-static-white)"
              : "var(--cometchat-primary-color)",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "var(--cometchat-font-family, Inter, sans-serif)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--cometchat-spacing-1)",
          }}
        >
          <span
            className="icon-rounded"
            style={{ fontSize: 18, "--icon-fill": 0 } as React.CSSProperties}
          >
            {expanded ? "expand_less" : "expand_more"}
          </span>
          {expanded ? "Show less" : `Show ${files.length - 3} more`}
        </button>
      )}
      {caption && (
        <div
          style={{
            padding: "0 var(--cometchat-spacing-1)",
            fontSize: 14,
            lineHeight: "20px",
            color: primary,
            fontFamily: "var(--cometchat-font-family, Inter, sans-serif)",
          }}
        >
          {caption}
        </div>
      )}
      {showMeta && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "var(--cometchat-spacing-1)",
            padding: "0 var(--cometchat-spacing-1)",
          }}
        >
          {state === "uploading" && (
            <span
              style={{ fontSize: 12, color: secondary, marginRight: "auto" }}
            >
              Uploading…
            </span>
          )}
          {state === "downloading" && (
            <span
              style={{ fontSize: 12, color: secondary, marginRight: "auto" }}
            >
              Downloading…
            </span>
          )}
          {edited && (
            <span style={{ fontSize: 12, color: secondary }}>Edited</span>
          )}
          <span style={{ fontSize: 12, color: secondary }}>{time}</span>
          {isSent && (state === "default" || state === "downloading") && (
            <ReceiptIcon status={status} />
          )}
          {state === "failed" && (
            <span
              role="img"
              aria-label="Not delivered"
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "var(--cometchat-error-color)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "var(--cometchat-static-white)",
                }}
              >
                !
              </span>
            </span>
          )}
          {state === "retry" && (
            <span
              role="button"
              aria-label="Retry"
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "var(--cometchat-error-color)",
                color: "var(--cometchat-static-white)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                cursor: "pointer",
              }}
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
export function MessageStack({
  variant,
  children,
}: {
  variant: "sent" | "received";
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: variant === "sent" ? "flex-end" : "flex-start",
      }}
    >
      {children}
    </div>
  );
}

/** Sent/received rows laid out on a chat canvas. */
export function ChatCanvas({
  children,
  width = 360,
}: {
  children: React.ReactNode;
  width?: number;
}) {
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

export function BubbleRow({
  variant,
  children,
}: {
  variant: "sent" | "received";
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: variant === "sent" ? "flex-end" : "flex-start",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Shared label / section helpers ───────────────────────────────────────── */

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 600,
        color: "var(--cometchat-text-color-tertiary)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
      }}
    >
      {children}
    </span>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--cometchat-spacing-3)",
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: "var(--cometchat-text-color-secondary)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

/** A labelled specimen — a state name above the thing it names. */
export function Item({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--cometchat-spacing-2)",
        alignItems: "flex-start",
      }}
    >
      <Label>{label}</Label>
      {children}
    </div>
  );
}

export function Row({
  children,
  gap = 16,
}: {
  children: React.ReactNode;
  gap?: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap,
        alignItems: "flex-start",
      }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SEARCH  —  how attachments surface in search results
   ═══════════════════════════════════════════════════════════════════════════ */

const SEARCH_FILTERS = ["All", "Photos", "Videos", "Audio", "Documents"];

export function SearchHeader({
  value = "review",
  active = "All",
}: {
  value?: string;
  active?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--cometchat-spacing-2)",
        width: "100%",
      }}
    >
      <SearchBar value={value} placeholder="Search chats or messages" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--cometchat-spacing-1-5)",
        }}
      >
        {SEARCH_FILTERS.map((f) => {
          const on = f === active;
          return (
            <button
              key={f}
              style={{
                height: 34,
                padding: "0 var(--cometchat-spacing-4)",
                borderRadius: "var(--cometchat-radius-max)",
                border: on
                  ? "1px solid var(--cometchat-primary-color)"
                  : "1px solid var(--cometchat-border-color-default)",
                background: on
                  ? "var(--cometchat-primary-color)"
                  : "var(--cometchat-background-color-01)",
                color: on
                  ? "var(--cometchat-static-white)"
                  : "var(--cometchat-text-color-primary)",
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
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: "var(--cometchat-radius-max)",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--cometchat-extended-primary-color-100)",
        color: "var(--cometchat-primary-color)",
        font: "var(--cometchat-font-body-semibold)",
      }}
    >
      {label}
    </div>
  );
}

/** A conversation search result whose matched message carries several attachments. */
export function ConversationResult({
  name,
  time,
  count,
  hue,
  thumbs,
}: {
  name: string;
  time: string;
  count: number;
  hue?: number;
  thumbs?: number[];
}) {
  const idx = thumbs ?? [0, 1, 2];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--cometchat-spacing-3)",
        padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-1)",
      }}
    >
      <Avatar label={name[0]} hue={hue} />
      <div
        style={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--cometchat-spacing-2)",
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "var(--cometchat-text-color-primary)",
            }}
          >
            {name}
          </span>
          <span
            style={{
              fontSize: 12,
              color: "var(--cometchat-text-color-tertiary)",
              flexShrink: 0,
            }}
          >
            {time}
          </span>
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--cometchat-spacing-1-5)",
            fontSize: 13,
            color: "var(--cometchat-text-color-secondary)",
          }}
        >
          <span
            style={{
              color: "var(--cometchat-icon-color-secondary)",
              display: "inline-flex",
            }}
          >
            <IconClip size={15} />
          </span>
          {count} {count === 1 ? "attachment" : "attachments"}
        </span>
      </div>
      <div style={{ display: "flex", gap: 3, flexShrink: 0 }}>
        {idx.map((n, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              width: 34,
              height: 34,
              borderRadius: "var(--cometchat-radius-1-5)",
              overflow: "hidden",
              border: "1px solid var(--cometchat-border-color-default)",
            }}
          >
            <img
              src={SAMPLE_IMAGES[n % SAMPLE_IMAGES.length]}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {i === idx.length - 1 && count > idx.length && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "color-mix(in srgb, var(--cometchat-static-black) 50%, transparent)",
                  color: "var(--cometchat-static-white)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                +{count - idx.length}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Media-grid result tile (Photos / Videos filter). */
export function MediaTile({
  src,
  video,
  duration,
}: {
  src: string;
  video?: boolean;
  duration?: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "1 / 1",
        borderRadius: "var(--cometchat-radius-2)",
        overflow: "hidden",
        border: "1px solid var(--cometchat-border-color-default)",
      }}
    >
      <img
        src={src}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      {video && (
        <>
          <div
            style={{
              position: "absolute",
              top: 6,
              right: 6,
              width: 28,
              height: 28,
              borderRadius: "50%",
              background:
                "color-mix(in srgb, var(--cometchat-static-black) 50%, transparent)",
              color: "var(--cometchat-static-white)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconPlay size={13} />
          </div>
          {duration && (
            <div
              style={{
                position: "absolute",
                bottom: 6,
                left: 6,
                padding: "1px var(--cometchat-spacing-1-5)",
                borderRadius: "var(--cometchat-radius-1)",
                background:
                  "color-mix(in srgb, var(--cometchat-static-black) 60%, transparent)",
                color: "var(--cometchat-static-white)",
                fontSize: 10,
                fontWeight: 500,
              }}
            >
              {duration}
            </div>
          )}
        </>
      )}
    </div>
  );
}

/** Document-list result row (Documents filter). */
export function DocumentResult({
  name,
  meta,
  type,
  from,
}: {
  name: string;
  meta: string;
  type: Exclude<FileKind, "audio">;
  from: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--cometchat-spacing-3)",
        padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-1)",
      }}
    >
      <FileTypeIcon type={type} size={40} />
      <div
        style={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--cometchat-text-color-primary)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: 12,
            color: "var(--cometchat-text-color-tertiary)",
          }}
        >
          {meta} · shared by {from}
        </span>
      </div>
      <span
        className="icon-rounded"
        style={
          {
            fontSize: 20,
            color: "var(--cometchat-icon-color-highlight)",
            "--icon-fill": 0,
            flexShrink: 0,
          } as React.CSSProperties
        }
      >
        download
      </span>
    </div>
  );
}

/** Audio-list result row (Audio filter). */
export function AudioResult({
  title,
  meta,
  from,
}: {
  title: string;
  meta: string;
  from: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--cometchat-spacing-3)",
        padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-1)",
      }}
    >
      <PlayButton size={40} />
      <div
        style={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: "var(--cometchat-spacing-1-5)",
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--cometchat-text-color-primary)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </span>
        <AudioSeekBar />
      </div>
      <span
        style={{
          fontSize: 12,
          color: "var(--cometchat-text-color-tertiary)",
          flexShrink: 0,
        }}
      >
        {meta} · {from}
      </span>
    </div>
  );
}

export function Panel({
  children,
  width = 380,
}: {
  children: React.ReactNode;
  width?: number;
}) {
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

export function Divider() {
  return (
    <div
      style={{ height: 1, background: "var(--cometchat-border-color-light)" }}
    />
  );
}

export function ResultsLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        color: "var(--cometchat-text-color-tertiary)",
      }}
    >
      {children}
    </div>
  );
}

/** Generic document front-icon — a purple page (folded corner) labelled "FILE".
 *  Used as the single front icon for every document search result. */
export function DocFrontIcon({ size = 40 }: { size?: number } = {}) {
  const purple = "var(--cometchat-primary-color)";
  const fold =
    "color-mix(in srgb, var(--cometchat-primary-color) 55%, var(--cometchat-static-white))";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      style={{ display: "block" }}
    >
      <path
        d="M50.332 6.6665L66.999 23.3335V11.9595C66.9991 11.9728 67 11.9862 67 11.9995V67.9995C67 70.9449 64.6124 73.3333 61.667 73.3335H18.333C15.3876 73.3333 13 70.9449 13 67.9995V11.9995C13.0002 9.05425 15.3877 6.66668 18.333 6.6665H50.332Z"
        fill={purple}
      />
      <path
        d="M55.6667 23.332L67 23.332L50.3333 6.66536L50.3333 17.9987C50.3333 20.9442 52.7212 23.332 55.6667 23.332Z"
        fill={fold}
      />
      <text
        x="40"
        y="59"
        textAnchor="middle"
        fontFamily="var(--cometchat-font-family, Inter, sans-serif)"
        fontSize="15"
        fontWeight="700"
        fill="var(--cometchat-static-white)"
      >
        FILE
      </text>
    </svg>
  );
}

/** Upload glyph — tray with an up-arrow, drawn in the current color. */
function IconUpload({ size = 20 }: { size?: number } = {}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--cometchat-static-white)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "block" }}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M17 8l-5-5-5 5" />
      <path d="M12 3v12" />
    </svg>
  );
}

/** Playful card stack — a video card, a photo-illustration card and a small
 *  document card, overlapped like a dropped handful of files. */
function DropStack({ scale = 1 }: { scale?: number } = {}) {
  const base: React.CSSProperties = {
    position: "absolute",
    left: "50%",
    top: "50%",
  };
  if (scale !== 1) {
    return (
      <div style={{ width: 230 * scale, height: 160 * scale, flexShrink: 0 }}>
        <div
          style={{
            width: 230,
            height: 160,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <DropStack />
        </div>
      </div>
    );
  }
  return (
    <div style={{ position: "relative", width: 230, height: 160 }}>
      {/* Docs — small note card peeking out behind */}
      <div
        style={{
          ...base,
          transform: "translate(-50%,-50%) translate(56px,-36px) rotate(14deg)",
          width: 50,
          height: 60,
          borderRadius: "var(--cometchat-radius-2-5)",
          background: "var(--cometchat-static-white)",
          boxShadow: "var(--cometchat-shadow-md)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--cometchat-spacing-1-5)",
          padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-2)",
        }}
      >
        <div
          style={{
            height: 5,
            borderRadius: "var(--cometchat-radius)",
            background:
              "color-mix(in srgb, var(--cometchat-primary-color) 28%, var(--cometchat-static-white))",
            width: "85%",
          }}
        />
        <div
          style={{
            height: 5,
            borderRadius: "var(--cometchat-radius)",
            background:
              "color-mix(in srgb, var(--cometchat-primary-color) 28%, var(--cometchat-static-white))",
            width: "60%",
          }}
        />
        <div
          style={{
            height: 5,
            borderRadius: "var(--cometchat-radius)",
            background:
              "color-mix(in srgb, var(--cometchat-primary-color) 28%, var(--cometchat-static-white))",
            width: "75%",
          }}
        />
      </div>
      {/* Videos — primary card with a play button */}
      <div
        style={{
          ...base,
          transform: "translate(-50%,-50%) translate(-42px,-8px) rotate(-8deg)",
          width: 108,
          height: 80,
          borderRadius: "var(--cometchat-radius-4)",
          background: "var(--cometchat-primary-color)",
          border: "4px solid var(--cometchat-static-white)",
          boxShadow: "var(--cometchat-shadow-lg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "var(--cometchat-static-white)",
            color: "var(--cometchat-primary-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconPlay size={14} />
        </div>
      </div>
      {/* Images — photo illustration card in front */}
      <div
        style={{
          ...base,
          transform: "translate(-50%,-50%) translate(38px,18px) rotate(7deg)",
          width: 112,
          height: 84,
          borderRadius: "var(--cometchat-radius-4)",
          border: "4px solid var(--cometchat-static-white)",
          boxSizing: "border-box",
          overflow: "hidden",
          background: "var(--cometchat-static-white)",
          boxShadow: "var(--cometchat-shadow-lg)",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 96 68"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <rect
            x="0"
            y="0"
            width="96"
            height="68"
            fill="color-mix(in srgb, var(--cometchat-primary-color) 14%, var(--cometchat-static-white))"
          />
          <circle cx="70" cy="20" r="9" fill="var(--cometchat-warning-color)" />
          <path
            d="M0 58 L28 30 L48 50 L62 40 L96 64 L96 68 L0 68 Z"
            fill="var(--cometchat-primary-color)"
            opacity="0.9"
          />
        </svg>
      </div>
    </div>
  );
}

/** Full-bleed drag-and-drop overlay — dark gray in both themes, a fanned file
 *  stack, headline and helper copy. Position it inside a relative parent. */
export function DropOverlay({
  chatName: _chatName,
  compact = false,
}: { chatName?: string; compact?: boolean } = {}) {
  const font = "var(--cometchat-font-family, Inter, sans-serif)";
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "color-mix(in srgb, color-mix(in srgb, var(--cometchat-static-black) 80%, var(--cometchat-static-white)) 92%, transparent)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: compact
          ? "var(--cometchat-spacing-1)"
          : "var(--cometchat-spacing-2)",
        pointerEvents: "none",
        zIndex: 5,
      }}
    >
      {compact ? <IconUpload size={16} /> : <DropStack />}
      <span
        style={{
          fontSize: compact ? 14 : 26,
          fontWeight: 700,
          color: "var(--cometchat-static-white)",
          fontFamily: font,
          marginTop: compact ? 0 : "var(--cometchat-spacing-2)",
        }}
      >
        Drop files here
      </span>
      {!compact && (
        <span
          style={{
            fontSize: 15,
            lineHeight: "22px",
            color:
              "color-mix(in srgb, var(--cometchat-static-white) 75%, transparent)",
            fontFamily: font,
            textAlign: "center",
            maxWidth: 380,
          }}
        >
          Add photos, videos, documents or audio to your message.
        </span>
      )}
    </div>
  );
}

/** Modal shown when an unsupported image/video thumbnail is clicked — the file
 *  can't be previewed, only downloaded. DS dialog styling, tokens only. */
export function UnsupportedFileDialog({
  open = true,
  onClose,
  onDownload,
}: { open?: boolean; onClose?: () => void; onDownload?: () => void } = {}) {
  if (!open) return null;
  const font = "var(--cometchat-font-family, Inter, sans-serif)";
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "color-mix(in srgb, var(--cometchat-static-black) 50%, transparent)",
        fontFamily: font,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Unsupported file"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: 400,
          maxWidth: "90vw",
          boxSizing: "border-box",
          background: "var(--cometchat-background-color-01)",
          border: "1px solid var(--cometchat-border-color-light)",
          borderRadius: "var(--cometchat-radius-4)",
          boxShadow: "var(--cometchat-shadow-lg)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--cometchat-spacing-3)",
          padding: "var(--cometchat-spacing-6)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "var(--cometchat-spacing-4)",
            right: "var(--cometchat-spacing-4)",
            width: 28,
            height: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            background: "transparent",
            borderRadius: "var(--cometchat-radius-2)",
            cursor: "pointer",
            color: "var(--cometchat-icon-color-secondary)",
          }}
        >
          <span
            className="icon-rounded"
            style={{ fontSize: 22, "--icon-fill": 0 } as React.CSSProperties}
          >
            close
          </span>
        </button>

        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "var(--cometchat-radius-max)",
            background: "var(--cometchat-background-color-02)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <FileTypeIcon type="file" size={36} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--cometchat-spacing-2)",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: 20,
              fontWeight: 500,
              lineHeight: "30px",
              color: "var(--cometchat-text-color-primary)",
            }}
          >
            Unsupported file
          </span>
          <span
            style={{
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--cometchat-text-color-secondary)",
            }}
          >
            This file can’t be previewed here. Download it to view its contents.
          </span>
        </div>

        <button
          onClick={onDownload}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--cometchat-spacing-2)",
            padding: "var(--cometchat-spacing-2-5)",
            border: "none",
            borderRadius: "var(--cometchat-radius-2)",
            background: "var(--cometchat-primary-color)",
            color: "var(--cometchat-static-white)",
            fontFamily: font,
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          <span
            className="icon-rounded"
            style={{ fontSize: 20, "--icon-fill": 0 } as React.CSSProperties}
          >
            download
          </span>
          Download
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   DS message composers — the real Single Line & Multi Line composers, empty
   (mirrors Core Components / Message Composer / … / State · Placeholder).
   ═══════════════════════════════════════════════════════════════════════════ */

const cIcon = "var(--cometchat-icon-color-tertiary)";
const CIconAdd = () => (
  <svg width="20" height="20" viewBox="0 0 15.83 15.83" fill="none">
    <path
      d="M7.292 8.542V11.25c0 .177.06.326.18.445a.6.6 0 0 0 .445.18.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.445V8.542h2.708a.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.446.6.6 0 0 0-.18-.445.6.6 0 0 0-.445-.18H8.542V4.584a.6.6 0 0 0-.18-.446.6.6 0 0 0-.446-.18.6.6 0 0 0-.445.18.6.6 0 0 0-.18.446v2.708H4.584a.6.6 0 0 0-.446.18.6.6 0 0 0-.18.445c0 .177.06.326.18.446a.6.6 0 0 0 .446.18h2.708Zm.626 7.291A7.917 7.917 0 1 1 7.918 0a7.917 7.917 0 0 1 0 15.833Zm0-1.25a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z"
      fill={cIcon}
    />
  </svg>
);
const CIconMic = () => (
  <svg width="20" height="20" viewBox="0 0 11.37 15.58" fill="none">
    <path
      d="M5.685 9.472c-.607 0-1.117-.218-1.531-.653-.415-.435-.622-.963-.622-1.583V2.139c0-.594.21-1.1.628-1.515A2.07 2.07 0 0 1 5.684 0c.598 0 1.106.208 1.525.624.419.416.628.92.628 1.515v5.097c0 .62-.207 1.148-.622 1.583-.414.435-.924.653-1.53.653Zm-.657 5.448v-2.078a5.23 5.23 0 0 1-3.37-1.587A5.17 5.17 0 0 1 .008 7.91a.63.63 0 0 1 .142-.477.62.62 0 0 1 .474-.197c.184 0 .34.064.467.193a.72.72 0 0 1 .243.477 3.87 3.87 0 0 0 1.501 2.64 4.37 4.37 0 0 0 2.849 1.047c1.082 0 2.035-.343 2.86-1.03a3.87 3.87 0 0 0 1.499-2.633.72.72 0 0 1 .239-.477.66.66 0 0 1 .474-.193.63.63 0 0 1 .474.197.63.63 0 0 1 .149.477 5.17 5.17 0 0 1-1.651 3.334 5.23 5.23 0 0 1-3.388 1.59v2.075a.66.66 0 0 1-.193.47.64.64 0 0 1-.472.196.64.64 0 0 1-.472-.193.66.66 0 0 1-.193-.47Zm.657-6.768c.244 0 .444-.089.6-.267a.93.93 0 0 0 .233-.65V2.145a.83.83 0 0 0-.24-.587.8.8 0 0 0-.593-.238.8.8 0 0 0-.593.238.83.83 0 0 0-.24.583v5.095c0 .256.077.472.233.65.156.179.356.268.6.268Z"
      fill={cIcon}
    />
  </svg>
);
const CIconMood = () => (
  <svg width="20" height="20" viewBox="0 0 16.39 16.39" fill="none">
    <path
      d="M11.151 7.167a1.14 1.14 0 0 0 .807-.333c.222-.222.333-.49.333-.806a1.14 1.14 0 0 0-.332-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.49.333.807.333Zm-5.917 0a1.14 1.14 0 0 0 .807-.333c.222-.222.334-.49.334-.806a1.14 1.14 0 0 0-.333-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.491.333.807.333Zm2.96 5.513c.784 0 1.497-.18 2.159-.541a4.58 4.58 0 0 0 1.616-1.498.38.38 0 0 0-.016-.469.44.44 0 0 0-.435-.229H4.859a.44.44 0 0 0-.427.23.38.38 0 0 0-.008.462 4.58 4.58 0 0 0 1.609 1.504c.663.36 1.38.541 2.149.541h.012ZM8.195 16.389a8.19 8.19 0 0 1-5.8-2.406A8.19 8.19 0 0 1 0 8.195 8.19 8.19 0 0 1 2.399 2.395 8.19 8.19 0 0 1 8.194 0a8.19 8.19 0 0 1 5.8 2.399 8.19 8.19 0 0 1 2.395 5.795 8.19 8.19 0 0 1-2.406 5.8 8.19 8.19 0 0 1-5.788 2.395Zm-.001-1.32a6.73 6.73 0 0 0 4.876-1.999 6.73 6.73 0 0 0 2-4.876 6.73 6.73 0 0 0-2-4.876 6.73 6.73 0 0 0-4.876-2 6.73 6.73 0 0 0-4.876 2 6.73 6.73 0 0 0-2 4.876 6.73 6.73 0 0 0 2 4.876 6.73 6.73 0 0 0 4.876 2Z"
      fill={cIcon}
    />
  </svg>
);
const CIconSticker = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 -960 960 960"
    fill="none"
    style={{ minWidth: 22, minHeight: 22 }}
  >
    <path
      d="M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v320L600-160H200Zm0-80h360v-120q0-33 23.5-56.5T640-440h120v-280H200v480Z"
      fill={cIcon}
    />
  </svg>
);
export const CIconFormatting = ({ active }: { active?: boolean } = {}) => (
  <svg width="20" height="20" viewBox="0 0 14.1 9.375" fill="none">
    <path
      d="M2.1 6.833l-.667 1.854a.83.83 0 0 1-.27.354.74.74 0 0 1-.418.126c-.264 0-.469-.108-.614-.324-.146-.215-.17-.44-.073-.677L2.933.5a.83.83 0 0 1 .282-.365A.74.74 0 0 1 3.642 0h.583c.153 0 .299.045.438.135a.83.83 0 0 1 .291.365l2.875 7.688c.097.236.07.458-.083.666-.153.209-.354.313-.604.313a.74.74 0 0 1-.417-.135.83.83 0 0 1-.271-.365l-.646-1.834H2.1Zm.48-1.333h2.728L3.975 1.708h-.084L2.58 5.5Zm8.228 3.875c-.708 0-1.27-.191-1.687-.573-.417-.382-.625-.885-.625-1.51 0-.611.24-1.115.72-1.51.479-.396 1.093-.594 1.843-.594.32 0 .632.028.938.084.305.055.569.132.791.229v-.25c0-.403-.142-.73-.427-.98-.285-.25-.663-.374-1.135-.374a1.7 1.7 0 0 0-.615.094 1.5 1.5 0 0 0-.552.28c-.181.14-.351.188-.51.147a.56.56 0 0 1-.386-.23.47.47 0 0 1-.146-.395c0-.153.076-.285.229-.396.278-.222.59-.385.938-.49.347-.104.701-.156 1.063-.156.958 0 1.673.226 2.146.677.471.451.708 1.128.708 2.031v3.063a.63.63 0 0 1-.168.458.58.58 0 0 1-.469.187.58.58 0 0 1-.458-.197.63.63 0 0 1-.188-.49v-.104h-.083a1.8 1.8 0 0 1-.792.729c-.333.167-.701.25-1.104.25Zm.25-1.125c.486 0 .9-.167 1.24-.5.34-.333.51-.722.51-1.167a2.2 2.2 0 0 0-.698-.26 3.3 3.3 0 0 0-.802-.094c-.444 0-.791.097-1.041.292-.25.194-.375.451-.375.77 0 .278.111.507.333.688.222.18.5.271.833.271Z"
      fill={active ? "var(--cometchat-text-color-highlight)" : cIcon}
    />
  </svg>
);

/* ─── Formatting toolbar (DS Multi Line Composer · Formatting) ─────────────── */

const fmtBtn: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  padding: "var(--cometchat-spacing-1-5)",
  borderRadius: "var(--cometchat-radius-2)",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  color: "var(--cometchat-text-color-tertiary)",
  fontSize: 16,
  flexShrink: 0,
};
const fmtSep: React.CSSProperties = {
  width: 1,
  height: 20,
  background: "var(--cometchat-border-color-default)",
  margin: "0 var(--cometchat-spacing-1)",
  flexShrink: 0,
};

/** The rich-text formatting row that sits above the input when Aa is on. */
export function FormatToolbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--cometchat-spacing-2)",
        padding: "var(--cometchat-spacing-2)",
        background: "var(--cometchat-background-color-02)",
        borderBottom: "1px solid var(--cometchat-border-color-light)",
        // Narrow phones can't fit every control — scroll rather than clip.
        overflowX: "auto",
      }}
    >
      <button style={fmtBtn} aria-label="Bold">
        <span style={{ fontWeight: 700 }}>B</span>
      </button>
      <button style={fmtBtn} aria-label="Italic">
        <span style={{ fontStyle: "italic" }}>I</span>
      </button>
      <button style={fmtBtn} aria-label="Underline">
        <span style={{ textDecoration: "underline" }}>U</span>
      </button>
      <button style={fmtBtn} aria-label="Strikethrough">
        <span style={{ textDecoration: "line-through" }}>S</span>
      </button>
      <div style={fmtSep} />
      <button style={fmtBtn} aria-label="Link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 0-10Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button style={fmtBtn} aria-label="Ordered List">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1Zm1-9h1V4H2v1h1v3Zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1Zm5-6v2h14V5H7Zm0 14h14v-2H7v2Zm0-6h14v-2H7v2Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button style={fmtBtn} aria-label="Bullet List">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5Zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5ZM7 19h14v-2H7v2Zm0-6h14v-2H7v2Zm0-8v2h14V5H7Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <div style={fmtSep} />
      <button style={fmtBtn} aria-label="Block Quote">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 17h3l2-4V7H5v6h3l-2 4Zm8 0h3l2-4V7h-6v6h3l-2 4Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button style={fmtBtn} aria-label="Code">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button style={fmtBtn} aria-label="Code Block">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <rect
            x="2"
            y="2"
            width="16"
            height="16"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M8 7.5 5.5 10 8 12.5M12 7.5l2.5 2.5-2.5 2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>
    </div>
  );
}
export const CIconAI = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 20 20"
    fill="none"
    style={{ minWidth: 22, minHeight: 22 }}
  >
    <path
      d="M7.377 5.43c.083-.406.663-.406.746 0a5 5 0 0 0 3.947 3.947c.406.083.406.663 0 .746a5 5 0 0 0-3.947 3.947c-.083.406-.663.406-.746 0a5 5 0 0 0-3.947-3.947c-.406-.083-.406-.663 0-.746A5 5 0 0 0 7.377 5.43Z"
      stroke={cIcon}
      strokeWidth="1.25"
      fill="none"
    />
    <path
      d="M13.913 4.145a.03.03 0 0 1 .049 0 3.38 3.38 0 0 0 2.393 2.393.03.03 0 0 1 0 .049 3.38 3.38 0 0 0-2.393 2.393.03.03 0 0 1-.049 0 3.38 3.38 0 0 0-2.393-2.393.03.03 0 0 1 0-.049 3.38 3.38 0 0 0 2.393-2.393Z"
      stroke={cIcon}
      strokeWidth="1.25"
      fill="none"
    />
  </svg>
);
const CIconSend = () => (
  <svg width="16" height="14" viewBox="0 0 15.78 13.6" fill="none">
    <path
      d="M1.267 13.52c-.302.121-.589.095-.86-.077-.271-.172-.407-.422-.407-.751V8.47L6.923 6.797 0 5.124V.903C0 .574.136.324.407.152.678-.02.965-.046 1.267.075L15.223 5.96c.372.166.558.447.558.84 0 .393-.186.673-.558.836L1.267 13.52Z"
      fill="currentColor"
    />
  </svg>
);

const cActionBtn: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  padding: "var(--cometchat-spacing-1-5)",
  borderRadius: "var(--cometchat-radius-2)",
  background: "transparent",
  border: "none",
  cursor: "pointer",
};
const cSend: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: "var(--cometchat-radius-max)",
  border:
    "2px solid color-mix(in srgb, var(--cometchat-static-white) 12%, transparent)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "var(--cometchat-shadow-xs)",
  background: "var(--cometchat-background-color-03)",
  color: "var(--cometchat-icon-color-disabled)",
  flexShrink: 0,
};

// Attachment preview strip inside a composer — horizontal, scrollable; the top
// padding keeps the corner remove/upload badges from clipping.
const cStrip: React.CSSProperties = {
  display: "flex",
  gap: "var(--cometchat-spacing-2)",
  padding:
    "var(--cometchat-spacing-2-5) var(--cometchat-spacing-3) var(--cometchat-spacing)",
  overflowX: "auto",
};

/** Empty Single Line Composer (placeholder state), DS markup. */
export function SingleLineComposer({
  attachments,
}: { attachments?: React.ReactNode } = {}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--cometchat-background-color-01)",
        border: "1px solid var(--cometchat-border-color-default)",
        borderRadius: "var(--cometchat-radius-2)",
      }}
    >
      {attachments && <div style={cStrip}>{attachments}</div>}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--cometchat-spacing-2)",
          padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)",
        }}
      >
        <button style={cActionBtn} aria-label="Attach file">
          <CIconAdd />
        </button>
        <div
          style={{
            flex: 1,
            minWidth: 0,
            fontSize: 14,
            lineHeight: "20px",
            color: "var(--cometchat-text-color-placeholder)",
            fontFamily: "var(--cometchat-font-family, Inter, sans-serif)",
          }}
        >
          Enter your message here
        </div>
        <button style={cActionBtn} aria-label="Emoji">
          <CIconMood />
        </button>
        <button style={cActionBtn} aria-label="Sticker">
          <CIconSticker />
        </button>
        <button style={cActionBtn} aria-label="Voice record">
          <CIconMic />
        </button>
        <div style={cSend}>
          <CIconSend />
        </div>
      </div>
    </div>
  );
}

/** Empty Multi Line Composer (placeholder state), DS markup. */
export function MultiLineComposer({
  attachments,
}: { attachments?: React.ReactNode } = {}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--cometchat-background-color-01)",
        border: "1px solid var(--cometchat-border-color-default)",
        borderRadius: "var(--cometchat-radius-2)",
      }}
    >
      {attachments && <div style={cStrip}>{attachments}</div>}
      <div
        style={{
          padding: "var(--cometchat-spacing-3)",
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--cometchat-text-color-placeholder)",
          fontFamily: "var(--cometchat-font-family, Inter, sans-serif)",
        }}
      >
        Type your message...
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--cometchat-spacing-3)",
          padding: "var(--cometchat-spacing-1-5) var(--cometchat-spacing-3)",
          borderTop: "1px solid var(--cometchat-border-color-light)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--cometchat-spacing-2)",
            flex: 1,
          }}
        >
          <button style={cActionBtn} aria-label="Attach file">
            <CIconAdd />
          </button>
          <button style={cActionBtn} aria-label="Voice record">
            <CIconMic />
          </button>
          <button style={cActionBtn} aria-label="Emoji">
            <CIconMood />
          </button>
          <button style={cActionBtn} aria-label="Sticker">
            <CIconSticker />
          </button>
          <button style={cActionBtn} aria-label="Formatting">
            <CIconFormatting />
          </button>
          <button
            style={{ ...cActionBtn, padding: "var(--cometchat-spacing-1)" }}
            aria-label="AI features"
          >
            <CIconAI />
          </button>
        </div>
        <div style={cSend}>
          <CIconSend />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   USAGE — shared HTML + CSS documentation block for every story page
   ═══════════════════════════════════════════════════════════════════════════ */

function UsageSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "var(--cometchat-spacing-6)" }}>
      <div
        style={{
          font: "var(--cometchat-font-caption1-semibold)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--cometchat-text-color-secondary)",
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
          alignItems: "center",
          padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)",
          borderBottom: "1px solid var(--cometchat-border-color-default)",
          background: "var(--cometchat-background-color-03)",
        }}
      >
        <span
          style={{
            font: "var(--cometchat-font-caption2-semibold)",
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
          font: "var(--cometchat-font-caption1-regular)",
          lineHeight: 1.7,
          color: "var(--cometchat-text-color-primary)",
          overflowX: "auto",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

/** HTML + CSS-tokens + "Composed From" documentation, shared by every story's Usage page. */
export function UsageDoc({
  html,
  css,
  composed,
}: {
  html: string;
  css: string;
  composed: { name: string; desc: string }[];
}) {
  return (
    <div
      style={{
        padding: "var(--cometchat-spacing-8)",
        maxWidth: 1200,
        margin: "0 auto",
        fontFamily: "var(--cometchat-font-family)",
      }}
    >
      <UsageSection title="HTML Structure">
        <CodeCard language="HTML" code={html} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={css} />
      </UsageSection>
      <UsageSection title="Composed From">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "var(--cometchat-spacing-3)",
          }}
        >
          {composed.map((c) => (
            <div
              key={c.name}
              style={{
                padding:
                  "var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",
                border: "1px solid var(--cometchat-border-color-default)",
                borderRadius: "var(--cometchat-radius-3)",
                background: "var(--cometchat-background-color-01)",
              }}
            >
              <strong
                style={{
                  font: "var(--cometchat-font-body-semibold)",
                  color: "var(--cometchat-text-color-primary)",
                  display: "block",
                  marginBottom: "var(--cometchat-spacing-1)",
                }}
              >
                {c.name}
              </strong>
              <span
                style={{
                  font: "var(--cometchat-font-caption1-regular)",
                  color: "var(--cometchat-text-color-tertiary)",
                }}
              >
                {c.desc}
              </span>
            </div>
          ))}
        </div>
      </UsageSection>
    </div>
  );
}
