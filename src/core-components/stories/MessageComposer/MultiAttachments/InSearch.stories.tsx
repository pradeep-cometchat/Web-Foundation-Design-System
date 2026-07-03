import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "../../../../base-components/components/SearchBar";
import { UsageDoc, SAMPLE_IMAGES, FileTypeIcon, type DocKind } from "./_shared";

/**
 * **Multi Attachments — In Search.** The global chat search, filtered by
 * attachment type. Each filter renders its results differently:
 *
 * - **Photos / Videos** — a media thumbnail with a "+N" count on the right.
 * - **Documents** — the first document's icon with a stack behind it, plus time.
 *   With a caption the count is appended after it — "the signed copy · 6 Files".
 * - **Audio** — a play button on the left, plus time.
 *
 * The **All** filter is intentionally not shown here — it falls back to the
 * normal conversation list; these views are the attachment-type filters.
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Attachments/In Search",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj;

const FILTERS = ["All", "Unread", "Groups", "Photos", "Videos", "Audio", "Documents", "Gifs", "Links"];
type FileType = DocKind;

/* ─── Icons ────────────────────────────────────────────────────────────────── */

const IconPlay = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" style={{ marginLeft: size * 0.08 }}>
    <path d="M3 1.5v9l7.5-4.5L3 1.5Z" fill="currentColor" />
  </svg>
);

/* ─── Message preview (sender · icon · caption-or-label) ───────────────────── */

type PreviewKind = "image" | "video" | "file" | "audio" | "text";

const TYPE_ICON: Record<Exclude<PreviewKind, "text">, string> = {
  image: "image",
  video: "videocam",
  file: "description",
  audio: "mic",
};

function typeLabel(kind: PreviewKind, count: number): string {
  if (kind === "audio") return "Audio";
  if (kind === "text") return "";
  const words: Record<"image" | "video" | "file", [string, string]> = {
    image: ["Photo", "Images"],
    video: ["Video", "Videos"],
    file: ["Document", "Files"],
  };
  const [one, many] = words[kind];
  return count > 1 ? `${count} ${many}` : one;
}

interface PreviewProps {
  /** True when you sent it (shows a read receipt); otherwise `sender` is shown. */
  sent?: boolean;
  sender?: string;
  kind: PreviewKind;
  count?: number;
  /** A caption/text replaces the generic type label when present. */
  caption?: string;
}

function Preview({ sent, sender, kind, count = 1, caption }: PreviewProps) {
  const base = typeLabel(kind, count);
  const who = sent ? "You" : sender;
  // Documents append the count after the caption ("caption · 6 Files"). A long
  // caption truncates, but the "· N Files" suffix stays pinned and visible.
  const showCount = !!caption && kind === "file" && count > 1;
  const mainText = caption ?? base;
  const clamp: React.CSSProperties = { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", minWidth: 0 };
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 5, minWidth: 0, fontSize: 13, color: "var(--cometchat-text-color-secondary)", fontFamily: "var(--cometchat-font-family, Inter, sans-serif)" }}>
      {who && <span style={{ flexShrink: 0 }}>{who}:</span>}
      {kind !== "text" && (
        <span className="icon-rounded" style={{ fontSize: 16, color: "var(--cometchat-icon-color-secondary)", "--icon-fill": 0, flexShrink: 0 } as React.CSSProperties}>{TYPE_ICON[kind]}</span>
      )}
      <span style={clamp}>{mainText}</span>
      {showCount && <span style={{ flexShrink: 0 }}> · {base}</span>}
    </span>
  );
}

/* ─── Search header ────────────────────────────────────────────────────────── */

function FilterPills({ active }: { active: string }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {FILTERS.map((f) => {
        const on = f === active;
        return (
          <span
            key={f}
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 32,
              padding: "0 var(--cometchat-spacing-3)",
              borderRadius: "var(--cometchat-radius-max)",
              border: on ? "1px solid var(--cometchat-primary-color)" : "1px solid var(--cometchat-border-color-default)",
              background: on ? "var(--cometchat-primary-color)" : "var(--cometchat-background-color-01)",
              color: on ? "var(--cometchat-static-white)" : "var(--cometchat-text-color-primary)",
              fontFamily: "var(--cometchat-font-family, Inter, sans-serif)",
              fontSize: 13,
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            {f}
          </span>
        );
      })}
    </div>
  );
}

function ChatSearchPanel({ active, children }: { active: string; children: React.ReactNode }) {
  return (
    <div style={{ width: 400, display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-3)", padding: "var(--cometchat-spacing-4)", background: "var(--cometchat-background-color-01)", borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-default)" }}>
      <span style={{ fontSize: 13, color: "var(--cometchat-text-color-secondary)", fontFamily: "var(--cometchat-font-family, Inter, sans-serif)" }}>Chats</span>
      <SearchBar placeholder="Search" />
      <FilterPills active={active} />
      <span style={{ fontSize: 13, fontWeight: 500, color: "var(--cometchat-text-color-secondary)", marginTop: 4 }}>March 2026</span>
      <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
    </div>
  );
}

/* ─── Row scaffold ─────────────────────────────────────────────────────────── */

function Row({ left, title, subtitle, right }: { left?: React.ReactNode; title: string; subtitle: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--cometchat-spacing-3)", padding: "var(--cometchat-spacing-2-5) 2px" }}>
      {left}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "var(--cometchat-text-color-primary)", fontFamily: "var(--cometchat-font-family, Inter, sans-serif)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</span>
        {subtitle}
      </div>
      {right}
    </div>
  );
}

/* ─── Media (photos / videos) ──────────────────────────────────────────────── */

function MediaThumb({ kind, count, src }: { kind: "image" | "video"; count: number; src: string }) {
  return (
    <div style={{ position: "relative", width: 76, height: 54, borderRadius: "var(--cometchat-radius-2)", overflow: "hidden", flexShrink: 0, border: "1px solid var(--cometchat-border-color-default)" }}>
      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: kind === "video" ? "brightness(0.8)" : undefined }} />
      {/* "+N" covers the whole thumb, centred; the play icon shows when there is no count. */}
      {count > 0 ? (
        <div style={{ position: "absolute", inset: 0, background: "color-mix(in srgb, var(--cometchat-static-black) 50%, transparent)", color: "var(--cometchat-static-white)", fontSize: 15, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>+{count}</div>
      ) : (
        kind === "video" && (
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 30, height: 30, borderRadius: "50%", background: "color-mix(in srgb, var(--cometchat-static-black) 50%, transparent)", color: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IconPlay size={13} />
          </div>
        )
      )}
    </div>
  );
}

function MediaRow({ title, kind, count = 4, caption, sent, sender, srcOffset = 0 }: { title: string; kind: "image" | "video"; count?: number; caption?: string; sent?: boolean; sender?: string; srcOffset?: number }) {
  return (
    <Row
      title={title}
      subtitle={<Preview sent={sent} sender={sender} kind={kind} count={count} caption={caption} />}
      right={<MediaThumb kind={kind} count={count - 1} src={SAMPLE_IMAGES[srcOffset % SAMPLE_IMAGES.length]} />}
    />
  );
}

/* ─── Documents (first doc icon + stack behind) ────────────────────────────── */

/** A single document silhouette (rounded page with a folded top-right corner). */
function Sheet({ w, fill, fold, transform }: { w: number; fill: string; fold: string; transform: string }) {
  const h = Math.round((w * 80) / 64);
  return (
    <svg width={w} height={h} viewBox="0 0 64 80" style={{ position: "absolute", left: "50%", top: 5, marginLeft: -w / 2, transform, transformOrigin: "50% 100%" }}>
      <path d="M4 8C4 3.58 7.58 0 12 0H44L60 16V72C60 76.42 56.42 80 52 80H12C7.58 80 4 76.42 4 72V8Z" fill={fill} stroke="var(--cometchat-border-color-default)" strokeWidth="1" />
      <path d="M44 0L60 16H48C45.79 16 44 14.21 44 12V0Z" fill={fold} />
    </svg>
  );
}

function DocStack({ type = "pdf" }: { type?: FileType }) {
  // Two lighter sheets fanned behind the front document — reads as a stack.
  return (
    <div style={{ position: "relative", width: 46, height: 46, flexShrink: 0 }}>
      <Sheet w={26} fill="var(--cometchat-background-color-03)" fold="var(--cometchat-border-color-default)" transform="rotate(-11deg) translateX(-3px)" />
      <Sheet w={26} fill="var(--cometchat-background-color-02)" fold="var(--cometchat-border-color-dark)" transform="rotate(9deg) translateX(3px)" />
      <div style={{ position: "absolute", left: "50%", top: 2, transform: "translateX(-50%)", filter: "drop-shadow(0 1px 2px color-mix(in srgb, var(--cometchat-static-black) 12%, transparent))" }}>
        <FileTypeIcon type={type} size={34} />
      </div>
    </div>
  );
}

function DocRow({ title, count = 12, caption, sent, sender, type = "pdf", time }: { title: string; count?: number; caption?: string; sent?: boolean; sender?: string; type?: FileType; time: string }) {
  return (
    <Row
      left={<DocStack type={type} />}
      title={title}
      subtitle={<Preview sent={sent} sender={sender} kind="file" count={count} caption={caption} />}
      right={<span style={{ fontSize: 12, color: "var(--cometchat-text-color-tertiary)", flexShrink: 0 }}>{time}</span>}
    />
  );
}

/* ─── Audio (play button + time) ───────────────────────────────────────────── */

function PlayCircle() {
  return (
    <div style={{ width: 44, height: 44, borderRadius: "50%", flexShrink: 0, background: "var(--cometchat-primary-color)", color: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <IconPlay size={16} />
    </div>
  );
}

function AudioRow({ title, caption, sent, sender, time }: { title: string; caption?: string; sent?: boolean; sender?: string; time: string }) {
  return <Row left={<PlayCircle />} title={title} subtitle={<Preview sent={sent} sender={sender} kind="audio" caption={caption} />} right={<span style={{ fontSize: 12, color: "var(--cometchat-text-color-tertiary)", flexShrink: 0 }}>{time}</span>} />;
}

/* ─── Stories ──────────────────────────────────────────────────────────────── */

export const Photos: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
      <ChatSearchPanel active="Photos">
        <MediaRow title="Group 1" kind="image" count={4} sent srcOffset={0} />
        <MediaRow title="Group 1" kind="image" count={4} sent caption="hello" srcOffset={1} />
        <MediaRow title="Group 2" kind="image" count={4} sender="Pradeep" srcOffset={2} />
        <MediaRow title="Group 2" kind="image" count={4} sender="Pradeep" caption="on the way!" srcOffset={3} />
        <MediaRow title="George Alan" kind="image" count={4} sent srcOffset={0} />
        <MediaRow title="George Alan" kind="image" count={1} sent caption="check this out 👀" srcOffset={1} />
      </ChatSearchPanel>
    </div>
  ),
};

export const Videos: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
      <ChatSearchPanel active="Videos">
        <MediaRow title="Group 1" kind="video" count={4} sent srcOffset={1} />
        <MediaRow title="Group 1" kind="video" count={4} sent caption="the highlights 🎬" srcOffset={2} />
        <MediaRow title="Group 2" kind="video" count={4} sender="Pradeep" srcOffset={3} />
        <MediaRow title="Group 2" kind="video" count={1} sender="Pradeep" caption="watch till the end" srcOffset={0} />
        <MediaRow title="George Alan" kind="video" count={4} sent srcOffset={1} />
        <MediaRow title="George Alan" kind="video" count={1} sent srcOffset={2} />
      </ChatSearchPanel>
    </div>
  ),
};

export const Documents: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
      <ChatSearchPanel active="Documents">
        <DocRow title="Group 1" count={12} sent type="pdf" time="4:30 PM" />
        <DocRow title="Group 1" count={6} sender="Pradeep" caption="the signed copy" type="doc" time="4:30 PM" />
        <DocRow title="George Alan" count={12} sent type="xls" time="4:30 PM" />
        <DocRow title="George Alan" count={3} sent caption="final drafts" type="pdf" time="4:30 PM" />
        <DocRow title="Design Team" count={9} sent caption="here are all the assets and the final export from yesterday's review session" type="ppt" time="4:30 PM" />
      </ChatSearchPanel>
    </div>
  ),
};

export const Audio: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
      <ChatSearchPanel active="Audio">
        <AudioRow title="Group 1" sent time="4:30 PM" />
        <AudioRow title="Group 1" sender="Pradeep" time="4:30 PM" />
        <AudioRow title="George Alan" sent caption="Hello.mp3" time="4:30 PM" />
        <AudioRow title="Group 1" sent time="4:30 PM" />
        <AudioRow title="Group 1" sender="Pradeep" caption="voice note 🎙" time="4:30 PM" />
        <AudioRow title="George Alan" sent time="4:30 PM" />
      </ChatSearchPanel>
    </div>
  ),
};

/** All attachment-type filters side by side (excludes "All"). Each shows both an
 *  attachment-only preview and one with a caption. */
export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--cometchat-spacing-5)", padding: "var(--cometchat-spacing-6)", alignItems: "flex-start" }}>
      <ChatSearchPanel active="Photos">
        <MediaRow title="Group 1" kind="image" count={4} sent srcOffset={0} />
        <MediaRow title="Group 2" kind="image" count={4} sender="Pradeep" caption="on the way!" srcOffset={2} />
        <MediaRow title="George Alan" kind="image" count={1} sent caption="check this out 👀" srcOffset={1} />
      </ChatSearchPanel>
      <ChatSearchPanel active="Videos">
        <MediaRow title="Group 1" kind="video" count={4} sent srcOffset={1} />
        <MediaRow title="Group 2" kind="video" count={4} sender="Pradeep" srcOffset={3} />
        <MediaRow title="George Alan" kind="video" count={1} sent caption="watch till the end" srcOffset={2} />
      </ChatSearchPanel>
      <ChatSearchPanel active="Documents">
        <DocRow title="Group 1" count={12} sent type="pdf" time="4:30 PM" />
        <DocRow title="Group 1" count={6} sender="Pradeep" caption="the signed copy" type="doc" time="4:30 PM" />
        <DocRow title="George Alan" count={12} sent type="xls" time="4:30 PM" />
      </ChatSearchPanel>
      <ChatSearchPanel active="Audio">
        <AudioRow title="Group 1" sent time="4:30 PM" />
        <AudioRow title="George Alan" sent caption="Hello.mp3" time="4:30 PM" />
        <AudioRow title="Group 1" sender="Pradeep" caption="voice note 🎙" time="4:30 PM" />
      </ChatSearchPanel>
    </div>
  ),
};

/** Usage — HTML structure + token CSS. */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <UsageDoc
      composed={[
        { name: "SearchBar", desc: "Design-system search input at the top of the panel." },
        { name: "Filter chips", desc: "All / Photos / Videos / Audio / Documents — active chip fills with primary." },
        { name: "MediaRow / DocRow / AudioRow", desc: "Filter-specific result rows: right media thumb, fanned doc stack + count, play button + time." },
      ]}
      html={`<!-- Search panel with attachment filters -->
<div class="ma-search">
  <!-- SearchBar (Base Component) -->
  <div class="search-bar"><!-- … --></div>

  <div class="ma-search__chips">
    <button class="ma-chip ma-chip--active">Photos</button>
    <button class="ma-chip">Videos</button>
    <button class="ma-chip">Audio</button>
    <button class="ma-chip">Documents</button>
  </div>

  <!-- Photos/Videos result — text left, media thumb right (no read receipt) -->
  <div class="ma-result">
    <div class="ma-result__body">
      <p class="ma-result__title">George Alan</p>
      <p class="ma-result__preview"><span class="icon-rounded">image</span> 4 Photos · the set</p>
    </div>
    <div class="ma-result__thumb"><img src="1.jpg" alt="" /><span>+3</span></div>
  </div>

  <!-- Documents result — fanned stack icon; count folds into the caption -->
  <div class="ma-result">
    <div class="ma-doc-stack"><!-- first doc icon + fanned copies behind --></div>
    <div class="ma-result__body">
      <p class="ma-result__title">Group 1</p>
      <p class="ma-result__preview">the signed copy · 6 Files</p>
    </div>
  </div>
</div>`}
      css={`.ma-search__chips { display: flex; flex-wrap: wrap; gap: var(--cometchat-spacing-1-5); }
.ma-chip {
  height: 34px; padding: 0 var(--cometchat-spacing-4);
  border-radius: var(--cometchat-radius-max);
  border: 1px solid var(--cometchat-border-color-default);
  background: var(--cometchat-background-color-01);
  color: var(--cometchat-text-color-primary);
  font: var(--cometchat-font-body-medium);
}
.ma-chip--active {
  background: var(--cometchat-primary-color);
  border-color: var(--cometchat-primary-color);
  color: var(--cometchat-static-white);
}

.ma-result {
  display: flex; align-items: center; gap: var(--cometchat-spacing-3);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-1);
}
.ma-result__title { font: var(--cometchat-font-body-semibold); color: var(--cometchat-text-color-primary); }
.ma-result__preview { font: var(--cometchat-font-caption1-regular); color: var(--cometchat-text-color-secondary); }
.ma-result__thumb {
  width: 76px; height: 54px;
  border-radius: var(--cometchat-radius-2); overflow: hidden;
  border: 1px solid var(--cometchat-border-color-default);
}
.ma-result__thumb span {
  background: color-mix(in srgb, var(--cometchat-static-black) 60%, transparent);
  color: var(--cometchat-static-white);
  font: var(--cometchat-font-caption2-semibold);
}`}
    />
  ),
};
