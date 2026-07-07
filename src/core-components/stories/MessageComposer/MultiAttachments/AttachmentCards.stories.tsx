import type { Meta, StoryObj } from "@storybook/react";
import { UsageDoc, IconRetry, SAMPLE_IMAGES, Section, Item, Row, SpinKeyframes, FileTypeIcon, type DocKind } from "./_shared";

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

type CardState = "default" | "hover" | "loading" | "error" | "retry";
type Platform = "desktop" | "mobile";
type FileType = DocKind;

/* ─── Icons ────────────────────────────────────────────────────────────────── */

const IconPlay = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" style={{ marginLeft: size * 0.08 }}>
    <path d="M3 1.5v9l7.5-4.5L3 1.5Z" fill="currentColor" />
  </svg>
);

const IconPause = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <rect x="2.5" y="1.5" width="2.5" height="9" rx="1" fill="currentColor" />
    <rect x="7" y="1.5" width="2.5" height="9" rx="1" fill="currentColor" />
  </svg>
);
const IconClose = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const IconError = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
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

type CornerKind = "none" | "remove" | "loading" | "error" | "retry";

function cornerFor(state: CardState, platform: Platform): CornerKind {
  // Loading is shown as a ring on the icon/button, so the corner stays empty —
  // that's what keeps it from ever colliding with the error mark.
  if (state === "loading") return "none";
  // On mobile the error/retry lives on the icon overlay, so the corner keeps
  // the ✕ (dismiss); on desktop the corner carries the mark.
  if (state === "error" || state === "retry") return platform === "mobile" ? "remove" : state;
  if (state === "hover") return "remove";
  // default
  return platform === "mobile" ? "remove" : "none";
}

function CornerBadge({ kind }: { kind: CornerKind }) {
  if (kind === "none") return null;
  const bg =
    kind === "error" || kind === "retry" ? "var(--cometchat-error-color)" : "color-mix(in srgb, var(--cometchat-static-black) 70%, var(--cometchat-static-white))";
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
      {kind === "remove" ? <IconClose /> : kind === "loading" ? <IconSpinner size={11} /> : kind === "retry" ? <IconRetry /> : <IconError />}
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
      <circle cx={size / 2} cy={size / 2} r={r} stroke="color-mix(in srgb, var(--cometchat-static-white) 30%, transparent)" strokeWidth={stroke} fill="none" />
      <circle cx={size / 2} cy={size / 2} r={r} stroke="var(--cometchat-static-white)" strokeWidth={stroke} fill="none" strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round" />
    </svg>
  );
}

/* ─── File tile (dark app-style icon; ring overlay while loading) ──────────── */

const FILE_LABEL: Record<FileType, string> = { pdf: "PDF", doc: "DOC", xls: "XLS", ppt: "PPT", zip: "ZIP", txt: "TXT", file: "FILE" };

function FileTile({ type, size = 54, loading = false, error = false, retry = false }: { type: FileType; size?: number; loading?: boolean; error?: boolean; retry?: boolean }) {
  // App-tile: white by default; loading/error/retry draw a translucent dark
  // overlay on the icon — ring while uploading, red error / retry mark after.
  const radius = Math.round(size * 0.26);
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: radius,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FileTypeIcon type={type} size={size} />
      {(loading || error || retry) && (
        <div style={{ position: "absolute", inset: 0, borderRadius: radius, display: "flex", alignItems: "center", justifyContent: "center", background: "color-mix(in srgb, var(--cometchat-static-black) 62%, transparent)", color: "var(--cometchat-static-white)" }}>
          {loading ? (
            <ProgressRing size={Math.round(size * 0.62)} stroke={3.5} />
          ) : (
            <div style={{ width: Math.round(size * 0.38), height: Math.round(size * 0.38), borderRadius: "50%", background: "var(--cometchat-error-color)", color: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {retry ? <IconRetry size={Math.round(size * 0.24)} /> : <IconError size={Math.round(size * 0.24)} />}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Audio button: purple by default; dark with a dimmed play while loading ── */

function AudioButton({ size = 60, loading = false, error = false, retry = false, playing = false }: { size?: number; loading?: boolean; error?: boolean; retry?: boolean; playing?: boolean }) {
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      {/* Full-size circle (same size loading or not) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "var(--cometchat-primary-color)",
          color: "var(--cometchat-static-white)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {playing ? <IconPause size={Math.round(size * 0.3)} /> : <IconPlay size={Math.round(size * 0.3)} />}
      </div>
      {(loading || error || retry) && (
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "color-mix(in srgb, var(--cometchat-static-black) 62%, transparent)", color: "var(--cometchat-static-white)" }}>
          {loading ? (
            <ProgressRing size={Math.round(size * 0.62)} stroke={3.5} />
          ) : (
            <div style={{ width: Math.round(size * 0.38), height: Math.round(size * 0.38), borderRadius: "50%", background: "var(--cometchat-error-color)", color: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {retry ? <IconRetry size={Math.round(size * 0.24)} /> : <IconError size={Math.round(size * 0.24)} />}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SeekBar({ progress = 0 }: { progress?: number }) {
  return (
    <div style={{ position: "relative", height: 6, borderRadius: 3, width: "100%", background: "var(--cometchat-neutral-color-300)" }}>
      {progress > 0 && <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: `${progress}%`, borderRadius: 3, background: "var(--cometchat-primary-color)" }} />}
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
    gap: "var(--cometchat-spacing-3-5)",
    padding: "var(--cometchat-spacing-3-5)",
    borderRadius: "var(--cometchat-radius-4)",
    background: "var(--cometchat-background-color-01)",
    border: `1px solid ${state === "error" || state === "retry" ? "var(--cometchat-error-color)" : "var(--cometchat-border-color-default)"}`,
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
  if (state === "error") return "Upload failed";
  if (state === "retry") return "Tap to retry";
  // Loading keeps the normal subtitle — the ring on the icon signals progress.
  return done;
}

const subStyle = (state: CardState): React.CSSProperties => ({
  fontSize: 12,
  color: state === "error" || state === "retry" ? "var(--cometchat-error-color)" : "var(--cometchat-text-color-tertiary)",
  fontFamily: "var(--cometchat-font-family, Inter, sans-serif)",
});

/* ─── Document card ────────────────────────────────────────────────────────── */

function DocumentCard({ state = "default", platform = "desktop", type = "pdf", name = "Invoice 45821.pdf" }: { state?: CardState; platform?: Platform; type?: FileType; name?: string }) {
  const mobile = platform === "mobile";
  return (
    <div style={cardShell(state, mobile)}>
      <FileTile type={type} loading={state === "loading"} error={state === "error" && mobile} retry={state === "retry" && mobile} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={titleStyle}>{name}</span>
        <span style={subStyle(state)}>{subtitle(state, FILE_LABEL[type])}</span>
      </div>
      <CornerBadge kind={cornerFor(state, platform)} />
    </div>
  );
}

/* ─── Audio card ───────────────────────────────────────────────────────────── */

function AudioCard({ state = "default", platform = "desktop", name = "Watch by Billie.mp3", playing = false }: { state?: CardState; platform?: Platform; name?: string; playing?: boolean }) {
  const mobile = platform === "mobile";
  return (
    <div style={cardShell(state, mobile)}>
      <AudioButton loading={state === "loading"} error={state === "error" && mobile} retry={state === "retry" && mobile} playing={playing} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={titleStyle}>{name}</span>
        {state === "error" || state === "retry" ? (
          <span style={subStyle(state)}>{subtitle(state, "")}</span>
        ) : (
          <>
            <SeekBar progress={playing ? 38 : 0} />
            <span style={{ fontSize: 12, color: "var(--cometchat-text-color-tertiary)" }}>{playing ? "00:12" : "00:00"}/00:32</span>
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
  const failed = state === "error" || state === "retry";
  const dim = state === "loading" || failed;
  // Tiles show loading/error/retry in the centre, so the corner only carries the ✕.
  const corner: CornerKind = state === "hover" ? "remove" : state === "default" && mobile ? "remove" : "none";
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <div style={{ position: "relative", width: size, height: size, borderRadius: 14, overflow: "hidden", border: `1px solid ${failed ? "var(--cometchat-error-color)" : "var(--cometchat-border-color-default)"}` }}>
        <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: dim ? "blur(2px) brightness(0.7)" : undefined }} />
        {kind === "video" && !dim && (
          <>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 44, height: 44, borderRadius: "50%", background: "color-mix(in srgb, var(--cometchat-static-black) 45%, transparent)", color: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconPlay size={18} />
            </div>
            <div style={{ position: "absolute", bottom: 6, left: 6, padding: "1px var(--cometchat-spacing-1-5)", borderRadius: "var(--cometchat-radius-1)", background: "color-mix(in srgb, var(--cometchat-static-black) 60%, transparent)", color: "var(--cometchat-static-white)", fontSize: 10, fontWeight: 500 }}>0:12</div>
          </>
        )}
        {state === "loading" && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ProgressRing size={36} stroke={4} />
          </div>
        )}
        {failed && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--cometchat-error-color)", color: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {state === "retry" ? <IconRetry size={15} /> : <IconError size={15} />}
            </div>
          </div>
        )}
      </div>
      <CornerBadge kind={corner} />
    </div>
  );
}

/* ─── Mobile frame ─────────────────────────────────────────────────────────── */

function MobileFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: 360, borderRadius: 28, border: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-02)", padding: "var(--cometchat-spacing-3)", boxShadow: "var(--cometchat-shadow-xs)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--cometchat-spacing) var(--cometchat-spacing-3) var(--cometchat-spacing-2-5)" }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: "var(--cometchat-text-color-secondary)" }}>9:41</span>
        <div style={{ width: 60, height: 5, borderRadius: 3, background: "var(--cometchat-neutral-color-300)" }} />
        <span style={{ fontSize: 12, color: "var(--cometchat-text-color-tertiary)" }}>▮▮▮</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)", padding: "var(--cometchat-spacing-1) var(--cometchat-spacing-3) var(--cometchat-spacing-3)" }}>{children}</div>
    </div>
  );
}

/* ─── Per-type stories ─────────────────────────────────────────────────────── */

const STATES: CardState[] = ["default", "hover", "loading", "error", "retry"];

function TypePage({ render }: { render: (state: CardState, platform: Platform) => React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-10)", padding: "var(--cometchat-spacing-6)" }}>
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
          {(["default", "loading", "error", "retry"] as CardState[]).map((s) => (
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
  render: () => (
    <>
      <TypePage render={(s, p) => <AudioCard state={s} platform={p} name="Watch by Billie.mp3" />} />
      <div style={{ padding: "0 var(--cometchat-spacing-6) var(--cometchat-spacing-6)" }}>
        <Section title="Playing (pause + progress)">
          <div style={{ maxWidth: 300 }}>
            <AudioCard name="Watch by Billie.mp3" playing />
          </div>
        </Section>
      </div>
    </>
  ),
};

/** Every card type in its default state, desktop and mobile. */
export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--cometchat-spacing-10)", padding: "var(--cometchat-spacing-6)", alignItems: "flex-start" }}>
      <SpinKeyframes />
      <Section title="Desktop">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-3-5)" }}>
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

/** Documents come in several file-type variants. */
export const FileTypes: Story = {
  name: "Document Types",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-3-5)", padding: "var(--cometchat-spacing-6)", maxWidth: 320 }}>
      <DocumentCard type="pdf" name="Invoice 45821.pdf" />
      <DocumentCard type="doc" name="Proposal draft.docx" />
      <DocumentCard type="xls" name="Q3 Budget.xlsx" />
      <DocumentCard type="ppt" name="Kickoff deck.pptx" />
      <DocumentCard type="zip" name="Assets.zip" />
      <DocumentCard type="txt" name="Notes.txt" />
      <DocumentCard type="file" name="data.bin" />
    </div>
  ),
};

/** Usage — HTML structure + token CSS. */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <UsageDoc
      composed={[
        { name: "DocumentCard / AudioCard", desc: "300px cards — icon tile or play button + name + subtitle; red border + error treatment on failure." },
        { name: "MediaTile (image / video)", desc: "120px square tile; loading ring or error overlay in the centre." },
        { name: "CornerBadge", desc: "Single-slot corner: ✕ remove (hover / mobile), never colliding with loading or error." },
        { name: "FileTile / AudioButton", desc: "Icon carriers — translucent dark overlay hosts the progress ring (loading) or error mark (mobile error)." },
      ]}
      html={`<!-- Document card (desktop) -->
<div class="ma-card">
  <div class="ma-file-tile"><span class="ma-file-icon ma-file-icon--pdf"></span></div>
  <div class="ma-card__body">
    <p class="ma-card__name">Invoice 45821.pdf</p>
    <p class="ma-card__sub">PDF</p>
  </div>
  <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
</div>

<!-- Error (mobile): corner keeps ✕, error moves onto the icon overlay -->
<div class="ma-card ma-card--error">
  <div class="ma-file-tile">
    <span class="ma-file-icon ma-file-icon--pdf"></span>
    <div class="ma-tile-overlay"><span class="icon-rounded">error</span></div>
  </div>
  <div class="ma-card__body">
    <p class="ma-card__name">Invoice 45821.pdf</p>
    <p class="ma-card__sub ma-card__sub--error">Upload failed · Retry</p>
  </div>
  <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
</div>`}
      css={`.ma-card {
  position: relative;
  display: flex; align-items: center; gap: var(--cometchat-spacing-3-5);
  width: 300px; padding: var(--cometchat-spacing-3-5);
  border-radius: var(--cometchat-radius-4);
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-default);
}
.ma-card--error { border-color: var(--cometchat-error-color); }

.ma-file-tile {
  position: relative; width: 54px; height: 54px;
  display: flex; align-items: center; justify-content: center;
  border-radius: var(--cometchat-radius-3-5, 14px);
  background: var(--cometchat-static-white);
  box-shadow: 0 1px 3px color-mix(in srgb, var(--cometchat-static-black) 12%, transparent);
}
/* Loading/error overlay on the icon — same translucent treatment */
.ma-tile-overlay {
  position: absolute; inset: 0; border-radius: inherit;
  display: flex; align-items: center; justify-content: center;
  background: color-mix(in srgb, var(--cometchat-static-black) 62%, transparent);
  color: var(--cometchat-static-white);
}

.ma-card__name { font: var(--cometchat-font-body-semibold); color: var(--cometchat-text-color-primary); }
.ma-card__sub { font: var(--cometchat-font-caption1-regular); color: var(--cometchat-text-color-tertiary); }
.ma-card__sub--error { color: var(--cometchat-error-color); }

.ma-badge {
  position: absolute; top: -8px; right: -8px;
  width: 22px; height: 22px;
  border-radius: var(--cometchat-radius-max);
  border: 2px solid var(--cometchat-background-color-01);
  background: color-mix(in srgb, var(--cometchat-static-black) 70%, var(--cometchat-static-white));
  color: var(--cometchat-static-white);
  box-shadow: var(--cometchat-shadow-xs);
}`}
    />
  ),
};
