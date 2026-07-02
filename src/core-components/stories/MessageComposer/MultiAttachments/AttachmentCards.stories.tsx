import type { Meta, StoryObj } from "@storybook/react";
import { SAMPLE_IMAGES, Section, Item, Row, SpinKeyframes, FileTypeIcon } from "./_shared";

/**
 * **Attachment Cards.** The standalone attachment-card primitives — Document,
 * Image, Video and Audio — in every state, on both desktop and mobile.
 *
 * The top-right corner is a **single slot**: it shows the remove **✕**
 * (default), a **spinner** (loading), or an **error** mark (failed) — never two
 * at once. On mobile there is no hover, so the ✕ is persistent; during loading
 * the spinner takes that slot instead of the ✕ (which would otherwise collide
 * with the error mark when an upload fails).
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Attachments/Attachment Cards",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj;

/* ─── Types ────────────────────────────────────────────────────────────────── */

type CardState = "default" | "hover" | "loading" | "error";
type Platform = "desktop" | "mobile";
type FileType = "pdf" | "doc" | "xls";

/* ─── Icons ────────────────────────────────────────────────────────────────── */

const IconPlay = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" style={{ marginLeft: size * 0.08 }}>
    <path d="M3 1.5v9l7.5-4.5L3 1.5Z" fill="currentColor" />
  </svg>
);
const IconClose = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const IconError = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <rect x="5" y="2.5" width="2" height="5" rx="1" fill="currentColor" />
    <circle cx="6" cy="9" r="1" fill="currentColor" />
  </svg>
);
const IconSpinner = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" style={{ animation: "ma-spin 0.9s linear infinite" }}>
    <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.6" strokeDasharray="14 10" strokeLinecap="round" />
  </svg>
);

/* ─── Corner badge (the single-slot control) ───────────────────────────────── */

type CornerKind = "none" | "remove" | "loading" | "error";

function cornerFor(state: CardState, platform: Platform): CornerKind {
  // Loading is shown as a ring on the icon/button, so the corner stays empty —
  // that's what keeps it from ever colliding with the error mark.
  if (state === "loading") return "none";
  if (state === "error") return "error";
  if (state === "hover") return "remove";
  // default
  return platform === "mobile" ? "remove" : "none";
}

function CornerBadge({ kind }: { kind: CornerKind }) {
  if (kind === "none") return null;
  const bg =
    kind === "error" ? "var(--cometchat-error-color)" : kind === "remove" ? "var(--cometchat-neutral-color-700)" : "var(--cometchat-neutral-color-700)";
  return (
    <div
      style={{
        position: "absolute",
        top: -8,
        right: -8,
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: bg,
        color: "var(--cometchat-static-white)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid var(--cometchat-background-color-01)",
        boxShadow: "var(--cometchat-shadow-xs)",
        zIndex: 2,
      }}
    >
      {kind === "remove" ? <IconClose /> : kind === "loading" ? <IconSpinner size={11} /> : <IconError />}
    </div>
  );
}

/* ─── Progress ring (determinate upload progress, drawn on the icon/button) ── */

function ProgressRing({ size = 40, stroke = 4, progress = 62 }: { size?: number; stroke?: number; progress?: number }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - progress / 100);
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.3)" strokeWidth={stroke} fill="none" />
      <circle cx={size / 2} cy={size / 2} r={r} stroke="var(--cometchat-static-white)" strokeWidth={stroke} fill="none" strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round" />
    </svg>
  );
}

/* ─── File tile (dark app-style icon; ring overlay while loading) ──────────── */

const FILE_META: Record<FileType, { icon: string; color: string; label: string }> = {
  pdf: { icon: "picture_as_pdf", color: "var(--cometchat-error-color)", label: "PDF" },
  doc: { icon: "description", color: "var(--cometchat-info-color)", label: "DOC" },
  xls: { icon: "table_chart", color: "var(--cometchat-success-color)", label: "XLS" },
};

function FileTile({ type, size = 52, loading = false }: { type: FileType; size?: number; loading?: boolean }) {
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <FileTypeIcon type={type} size={size} />
      {loading && (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ProgressRing size={size - 12} stroke={3.5} />
        </div>
      )}
    </div>
  );
}

/* ─── Audio button (dark circle; progress ring wraps it only while loading) ── */

function AudioButton({ size = 60, loading = false }: { size?: number; loading?: boolean }) {
  const inset = loading ? 5 : 0;
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <div style={{ position: "absolute", inset, borderRadius: "50%", background: "var(--cometchat-primary-color)", color: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IconPlay size={Math.round(size * 0.3)} />
      </div>
      {loading && (
        <div style={{ position: "absolute", inset: 0 }}>
          <ProgressRing size={size} stroke={4} />
        </div>
      )}
    </div>
  );
}

function SeekBar({ progress = 0 }: { progress?: number }) {
  return (
    <div style={{ position: "relative", height: 6, borderRadius: 3, width: "100%", background: "var(--cometchat-neutral-color-300)" }}>
      <div style={{ position: "absolute", top: "50%", left: `calc(${progress}% - ${(progress / 100) * 16}px)`, transform: "translateY(-50%)", width: 16, height: 16, borderRadius: "50%", background: "var(--cometchat-static-white)", border: "1px solid var(--cometchat-border-color-default)", boxShadow: "var(--cometchat-shadow-xs)" }} />
    </div>
  );
}

/* ─── Card chrome ──────────────────────────────────────────────────────────── */

function cardShell(state: CardState, mobile: boolean): React.CSSProperties {
  return {
    position: "relative",
    width: mobile ? "100%" : 300,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: 14,
    borderRadius: 16,
    background: "var(--cometchat-background-color-01)",
    border: `1px solid ${state === "error" ? "var(--cometchat-error-color)" : "var(--cometchat-border-color-default)"}`,
  };
}

const titleStyle: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  color: "var(--cometchat-text-color-primary)",
  fontFamily: "var(--cometchat-font-family, Inter, sans-serif)",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

function subtitle(state: CardState, done: string) {
  if (state === "error") return "Upload failed · Retry";
  // Loading keeps the normal subtitle — the ring on the icon signals progress.
  return done;
}

const subStyle = (state: CardState): React.CSSProperties => ({
  fontSize: 12,
  color: state === "error" ? "var(--cometchat-error-color)" : "var(--cometchat-text-color-tertiary)",
  fontFamily: "var(--cometchat-font-family, Inter, sans-serif)",
});

/* ─── Document card ────────────────────────────────────────────────────────── */

function DocumentCard({ state = "default", platform = "desktop", type = "pdf", name = "Invoice 45821.pdf" }: { state?: CardState; platform?: Platform; type?: FileType; name?: string }) {
  const mobile = platform === "mobile";
  return (
    <div style={cardShell(state, mobile)}>
      <FileTile type={type} loading={state === "loading"} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={titleStyle}>{name}</span>
        <span style={subStyle(state)}>{subtitle(state, FILE_META[type].label)}</span>
      </div>
      <CornerBadge kind={cornerFor(state, platform)} />
    </div>
  );
}

/* ─── Audio card ───────────────────────────────────────────────────────────── */

function AudioCard({ state = "default", platform = "desktop", name = "Watch by Billie.mp3" }: { state?: CardState; platform?: Platform; name?: string }) {
  const mobile = platform === "mobile";
  return (
    <div style={cardShell(state, mobile)}>
      <AudioButton loading={state === "loading"} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={titleStyle}>{name}</span>
        {state === "error" ? (
          <span style={subStyle(state)}>Upload failed · Retry</span>
        ) : (
          <>
            <SeekBar />
            <span style={{ fontSize: 12, color: "var(--cometchat-text-color-tertiary)" }}>00:00/00:00</span>
          </>
        )}
      </div>
      <CornerBadge kind={cornerFor(state, platform)} />
    </div>
  );
}

/* ─── Media tile (image / video) ───────────────────────────────────────────── */

function MediaTile({ kind, state = "default", platform = "desktop", src = SAMPLE_IMAGES[0] }: { kind: "image" | "video"; state?: CardState; platform?: Platform; src?: string }) {
  const mobile = platform === "mobile";
  const size = mobile ? 104 : 120;
  const dim = state === "loading" || state === "error";
  // Tiles show loading/error in the centre, so the corner only carries the remove ✕.
  const corner: CornerKind = state === "hover" ? "remove" : state === "default" && mobile ? "remove" : "none";
  return (
    <div style={{ position: "relative", width: size, height: size, borderRadius: 14, overflow: "hidden", flexShrink: 0, border: `1px solid ${state === "error" ? "var(--cometchat-error-color)" : "var(--cometchat-border-color-default)"}` }}>
      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: dim ? "blur(2px) brightness(0.7)" : undefined }} />
      {kind === "video" && !dim && (
        <>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 32, height: 32, borderRadius: "50%", background: "rgba(0,0,0,0.45)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IconPlay size={13} />
          </div>
          <div style={{ position: "absolute", bottom: 6, left: 6, padding: "1px 6px", borderRadius: 4, background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: 10, fontWeight: 500 }}>0:12</div>
        </>
      )}
      {state === "loading" && (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ProgressRing size={36} stroke={4} />
        </div>
      )}
      {state === "error" && (
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", gap: 4, alignItems: "center", justifyContent: "center", color: "#fff" }}>
          <span className="icon-rounded" style={{ fontSize: 22, "--icon-fill": 1 } as React.CSSProperties}>error</span>
          <span style={{ fontSize: 10, fontWeight: 600 }}>Retry</span>
        </div>
      )}
      <CornerBadge kind={corner} />
    </div>
  );
}

/* ─── Mobile frame ─────────────────────────────────────────────────────────── */

function MobileFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: 360, borderRadius: 28, border: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-02)", padding: 12, boxShadow: "var(--cometchat-shadow-xs)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2px 12px 10px" }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: "var(--cometchat-text-color-secondary)" }}>9:41</span>
        <div style={{ width: 60, height: 5, borderRadius: 3, background: "var(--cometchat-neutral-color-300)" }} />
        <span style={{ fontSize: 12, color: "var(--cometchat-text-color-tertiary)" }}>▮▮▮</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "4px 12px 12px" }}>{children}</div>
    </div>
  );
}

/* ─── Per-type stories ─────────────────────────────────────────────────────── */

const STATES: CardState[] = ["default", "hover", "loading", "error"];

function TypePage({ render }: { render: (state: CardState, platform: Platform) => React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40, padding: 24 }}>
      <SpinKeyframes />
      <Section title="Desktop">
        <Row gap={20}>
          {STATES.map((s) => (
            <Item key={s} label={s}>{render(s, "desktop")}</Item>
          ))}
        </Row>
      </Section>
      <Section title="Mobile">
        <MobileFrame>
          {(["default", "loading", "error"] as CardState[]).map((s) => (
            <div key={s} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: "var(--cometchat-text-color-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s}</span>
              {render(s, "mobile")}
            </div>
          ))}
        </MobileFrame>
      </Section>
    </div>
  );
}

export const Document: Story = {
  parameters: { controls: { disable: true } },
  render: () => <TypePage render={(s, p) => <DocumentCard state={s} platform={p} type="pdf" name="Invoice 45821.pdf" />} />,
};

export const Image: Story = {
  parameters: { controls: { disable: true } },
  render: () => <TypePage render={(s, p) => <MediaTile kind="image" state={s} platform={p} src={SAMPLE_IMAGES[0]} />} />,
};

export const Video: Story = {
  parameters: { controls: { disable: true } },
  render: () => <TypePage render={(s, p) => <MediaTile kind="video" state={s} platform={p} src={SAMPLE_IMAGES[1]} />} />,
};

export const Audio: Story = {
  parameters: { controls: { disable: true } },
  render: () => <TypePage render={(s, p) => <AudioCard state={s} platform={p} name="Watch by Billie.mp3" />} />,
};

/** Every card type in its default state, desktop and mobile. */
export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 40, padding: 24, alignItems: "flex-start" }}>
      <SpinKeyframes />
      <Section title="Desktop">
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <DocumentCard type="pdf" name="Invoice 45821.pdf" />
          <AudioCard name="Watch by Billie.mp3" />
          <Row gap={12}>
            <MediaTile kind="image" src={SAMPLE_IMAGES[0]} />
            <MediaTile kind="video" src={SAMPLE_IMAGES[1]} />
          </Row>
        </div>
      </Section>
      <Section title="Mobile">
        <MobileFrame>
          <DocumentCard platform="mobile" type="pdf" name="Invoice 45821.pdf" />
          <AudioCard platform="mobile" name="Watch by Billie.mp3" />
          <Row gap={10}>
            <MediaTile kind="image" platform="mobile" src={SAMPLE_IMAGES[0]} />
            <MediaTile kind="video" platform="mobile" src={SAMPLE_IMAGES[1]} />
          </Row>
        </MobileFrame>
      </Section>
    </div>
  ),
};

/** Documents come in PDF, DOC and XLS variants. */
export const FileTypes: Story = {
  name: "Document Types",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: 24, maxWidth: 320 }}>
      <DocumentCard type="pdf" name="Invoice 45821.pdf" />
      <DocumentCard type="doc" name="Proposal draft.docx" />
      <DocumentCard type="xls" name="Q3 Budget.xlsx" />
    </div>
  ),
};
