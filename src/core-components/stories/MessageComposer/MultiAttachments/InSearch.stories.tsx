import type { Meta, StoryObj } from "@storybook/react";
import { SAMPLE_IMAGES, FileTypeIcon } from "./_shared";

/**
 * **Multi Attachments — In Search.** The global chat search, filtered by
 * attachment type. Each filter renders its results differently:
 *
 * - **Photos / Videos** — a media thumbnail with a "+N" count on the right.
 * - **Documents** — the first document's icon with a stack behind it, plus time
 *   and an unread count.
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
type FileType = "pdf" | "doc" | "xls";

/* ─── Icons ────────────────────────────────────────────────────────────────── */

const IconPlay = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" style={{ marginLeft: size * 0.08 }}>
    <path d="M3 1.5v9l7.5-4.5L3 1.5Z" fill="currentColor" />
  </svg>
);

/** Read receipt (double check) shown before your own messages in the preview. */
const Receipt = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <path d="M2 8.5L5 11.5L11 4.5" stroke="var(--cometchat-message-seen-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.5 8.5L8.5 11.5L14.5 4.5" stroke="var(--cometchat-message-seen-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Message preview (receipt/sender · icon · caption-or-label) ────────────── */

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
  const label = caption ?? typeLabel(kind, count);
  const who = sent ? "You" : sender;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, minWidth: 0, fontSize: 13, color: "var(--cometchat-text-color-secondary)", fontFamily: "var(--cometchat-font-family, Inter, sans-serif)" }}>
      {sent && <Receipt />}
      {who && <span style={{ flexShrink: 0 }}>{who}:</span>}
      {kind !== "text" && (
        <span className="icon-rounded" style={{ fontSize: 16, color: "var(--cometchat-icon-color-secondary)", "--icon-fill": 0, flexShrink: 0 } as React.CSSProperties}>{TYPE_ICON[kind]}</span>
      )}
      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{label}</span>
    </span>
  );
}

/* ─── Search header ────────────────────────────────────────────────────────── */

function SearchBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, height: 44, padding: "0 16px", borderRadius: "var(--cometchat-radius-max)", background: "var(--cometchat-background-color-02)", border: "1px solid var(--cometchat-border-color-default)" }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ color: "var(--cometchat-icon-color-secondary)", flexShrink: 0 }}>
        <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="currentColor" />
      </svg>
      <span style={{ fontSize: 15, color: "var(--cometchat-text-color-placeholder)", fontFamily: "var(--cometchat-font-family, Inter, sans-serif)" }}>Search</span>
    </div>
  );
}

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
              padding: "0 12px",
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
    <div style={{ width: 400, display: "flex", flexDirection: "column", gap: 12, padding: 16, background: "var(--cometchat-background-color-01)", borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-default)" }}>
      <span style={{ fontSize: 13, color: "var(--cometchat-text-color-secondary)", fontFamily: "var(--cometchat-font-family, Inter, sans-serif)" }}>Chats</span>
      <SearchBar />
      <FilterPills active={active} />
      <span style={{ fontSize: 13, fontWeight: 500, color: "var(--cometchat-text-color-secondary)", marginTop: 4 }}>March 2026</span>
      <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
    </div>
  );
}

/* ─── Row scaffold ─────────────────────────────────────────────────────────── */

function Row({ left, title, subtitle, right }: { left?: React.ReactNode; title: string; subtitle: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 2px" }}>
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
    <div style={{ position: "relative", width: 58, height: 44, borderRadius: 8, overflow: "hidden", flexShrink: 0, border: "1px solid var(--cometchat-border-color-default)" }}>
      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: kind === "video" ? "brightness(0.8)" : undefined }} />
      {kind === "video" && (
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 22, height: 22, borderRadius: "50%", background: "rgba(0,0,0,0.5)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IconPlay size={9} />
        </div>
      )}
      {count > 0 && (
        <div style={{ position: "absolute", right: 4, bottom: 4, padding: "0 6px", height: 16, borderRadius: 8, background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: 11, fontWeight: 600, display: "flex", alignItems: "center" }}>+{count}</div>
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

function DocStack({ type = "pdf" }: { type?: FileType }) {
  // Cards sit BEHIND the front document and peek out BELOW it (a downward stack).
  const backCard = (top: number, inset: number, bg: string): React.CSSProperties => ({
    position: "absolute",
    top,
    left: inset,
    right: inset,
    height: 32,
    borderRadius: 5,
    background: bg,
    border: "1px solid var(--cometchat-border-color-default)",
  });
  return (
    <div style={{ position: "relative", width: 40, height: 50, flexShrink: 0 }}>
      <div style={backCard(17, 2, "var(--cometchat-background-color-03)")} />
      <div style={backCard(11, 4, "var(--cometchat-background-color-02)")} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        <FileTypeIcon type={type} size={36} />
      </div>
    </div>
  );
}

function MetaRight({ time, unread }: { time: string; unread?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
      <span style={{ fontSize: 12, color: "var(--cometchat-text-color-tertiary)" }}>{time}</span>
      {unread ? (
        <span style={{ minWidth: 20, height: 20, padding: "0 6px", borderRadius: 10, background: "var(--cometchat-neutral-color-400)", color: "var(--cometchat-static-white)", fontSize: 11, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>{unread}</span>
      ) : (
        <span style={{ height: 20 }} />
      )}
    </div>
  );
}

function DocRow({ title, count = 12, caption, sent, sender, type = "pdf", time, unread }: { title: string; count?: number; caption?: string; sent?: boolean; sender?: string; type?: FileType; time: string; unread?: number }) {
  // The unread chip can't sit next to a caption — suppress it when a caption is shown.
  return <Row left={<DocStack type={type} />} title={title} subtitle={<Preview sent={sent} sender={sender} kind="file" count={count} caption={caption} />} right={<MetaRight time={time} unread={caption ? undefined : unread} />} />;
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
    <div style={{ padding: 24 }}>
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
    <div style={{ padding: 24 }}>
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
    <div style={{ padding: 24 }}>
      <ChatSearchPanel active="Documents">
        <DocRow title="Group 1" count={12} sent type="pdf" time="4:30 PM" unread={8} />
        <DocRow title="Group 1" count={1} sender="Pradeep" caption="the signed copy" type="doc" time="4:30 PM" />
        <DocRow title="George Alan" count={12} sent type="xls" time="4:30 PM" unread={8} />
        <DocRow title="George Alan" count={3} sent caption="final drafts" type="pdf" time="4:30 PM" />
      </ChatSearchPanel>
    </div>
  ),
};

export const Audio: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24 }}>
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
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20, padding: 24, alignItems: "flex-start" }}>
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
        <DocRow title="Group 1" count={12} sent type="pdf" time="4:30 PM" unread={8} />
        <DocRow title="Group 1" count={1} sender="Pradeep" caption="the signed copy" type="doc" time="4:30 PM" />
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
