import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";
import "../../../../shell/Shell.css";
import "../../ChatBubbles/ChatBubbles.css";
import { Header } from "../../../../base-components/components/Header";
import { ConversationItem } from "../../../../base-components/components/ListItem";
import {
  MultiAttachmentBubble,
  MessageStack,
  ImagePreview,
  VideoPreview,
  DocumentPreview,
  AudioPreview,
  SAMPLE_IMAGES,
  type DocKind,
} from "./_shared";

/**
 * **Multi Attachments — End to End.** The full chat app (conversation list +
 * chat area, built from the shell/core components) with a working multi-
 * attachment flow: **drag files onto the chat** (or use ＋) to queue previews,
 * then **Send** to post them as separate-format bubbles running *uploading →
 * read*. The thread is pre-seeded with the range of states.
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Attachments/End to End",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

const AV = (n: number) => `https://i.pravatar.cc/120?img=${n}`;

/* ─── Icons ────────────────────────────────────────────────────────────────── */

const IconSend = () => (
  <svg width="18" height="16" viewBox="0 0 15.78 13.6" fill="none">
    <path d="M1.267 13.52c-.302.121-.589.095-.86-.077-.271-.172-.407-.422-.407-.751V8.47L6.923 6.797 0 5.124V.903C0 .574.136.324.407.152.678-.02.965-.046 1.267.075L15.223 5.96c.372.166.558.447.558.84 0 .393-.186.673-.558.836L1.267 13.52Z" fill="currentColor" />
  </svg>
);
const IconClose = () => (
  <svg width="9" height="9" viewBox="0 0 8 8" fill="none">
    <path d="M1 1l6 6M7 1L1 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/* ─── Model ────────────────────────────────────────────────────────────────── */

type PendKind = "image" | "video" | "audio" | "doc";
interface Pending {
  id: number;
  kind: PendKind;
  name: string;
  meta: string;
  src?: string;
  docType?: DocKind;
}

type Group =
  | { t: "media"; count: number; total: number; video: boolean }
  | { t: "file"; kind: DocKind; name: string; meta: string }
  | { t: "audio"; name: string; meta: string };

interface Msg {
  id: number;
  variant: "sent" | "received";
  groups: Group[];
  caption?: string;
  quoted?: { name: string; media: { kind: "image" | "video" | "file" | "audio"; count: number; caption?: string } };
  time: string;
  status?: "sent" | "delivered" | "read";
  state?: "default" | "uploading";
}

const formatSize = (b: number) => (b < 1024 ? `${b} B` : b < 1048576 ? `${Math.round(b / 1024)} KB` : `${(b / 1048576).toFixed(1)} MB`);
const DOC_EXT: Record<string, DocKind> = { pdf: "pdf", doc: "doc", docx: "doc", xls: "xls", xlsx: "xls", csv: "xls", ppt: "ppt", pptx: "ppt", zip: "zip", rar: "zip", txt: "txt" };

const SEED: Msg[] = [
  { id: 1, variant: "received", groups: [{ t: "media", count: 4, total: 6, video: false }], time: "4:52 pm" },
  { id: 2, variant: "received", groups: [{ t: "file", kind: "pdf", name: "Q3-Report.pdf", meta: "12 Jun · 2.4 MB" }], time: "4:52 pm" },
  { id: 3, variant: "sent", groups: [{ t: "audio", name: "Voice-reply.mp3", meta: "00:18" }], time: "4:53 pm", status: "read" },
  { id: 4, variant: "received", groups: [{ t: "media", count: 1, total: 1, video: false }], caption: "and here's the hero shot 📸", time: "4:54 pm" },
  { id: 5, variant: "sent", quoted: { name: "George Alan", media: { kind: "image", count: 6, caption: "the set" } }, groups: [{ t: "media", count: 2, total: 2, video: false }], caption: "love these 🙌", time: "4:55 pm", status: "read" },
];

/* ─── Sidebar helpers ──────────────────────────────────────────────────────── */

function TabItem({ icon, label, active }: { icon: string; label: string; active?: boolean }) {
  return (
    <div className="shell__tab-item">
      <span className={`icon-rounded shell__tab-icon ${active ? "shell__tab-icon--active" : ""}`}>{icon}</span>
      <span className={`shell__tab-label ${active ? "shell__tab-label--active" : ""}`}>{label}</span>
    </div>
  );
}

const CONVOS = [
  { name: "George Alan", img: AV(12), last: "love these 🙌", time: "4:55 pm", active: true },
  { name: "Camilla Juliette", img: AV(5), last: "🖼 4 Photos", time: "3:20 pm" },
  { name: "Brian Michael", img: AV(13), last: "📄 Contract.pdf", time: "2:14 pm" },
  { name: "Emma Rose", img: AV(9), last: "🎤 Audio", time: "1:02 pm" },
  { name: "Chris Nolan", img: AV(14), last: "🎬 2 Videos", time: "Yesterday" },
  { name: "Gabriella Elise", img: AV(16), last: "You: sounds good!", time: "Yesterday" },
  { name: "Daniel Brooks", img: AV(15), last: "📎 3 Files", time: "Mon" },
  { name: "Isabella Fleur", img: AV(20), last: "Thanks a lot 🙏", time: "Mon" },
];

/* ─── Chat main (interactive) ──────────────────────────────────────────────── */

function ChatMain() {
  const [messages, setMessages] = useState<Msg[]>(SEED);
  const [pending, setPending] = useState<Pending[]>([]);
  const [text, setText] = useState("");
  const [dragging, setDragging] = useState(false);
  const uid = useRef(100);
  const fileInput = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, pending]);

  function classify(file: File): Pending {
    const id = uid.current++;
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (file.type.startsWith("image/")) return { id, kind: "image", name: file.name, meta: "", src: URL.createObjectURL(file) };
    if (file.type.startsWith("video/")) return { id, kind: "video", name: file.name, meta: formatSize(file.size), src: SAMPLE_IMAGES[1] };
    if (file.type.startsWith("audio/")) return { id, kind: "audio", name: file.name, meta: "00:30" };
    const docType = DOC_EXT[ext] ?? "file";
    return { id, kind: "doc", docType, name: file.name, meta: `${docType.toUpperCase()} · ${formatSize(file.size)}` };
  }

  const addFiles = (files: FileList | File[]) => setPending((p) => [...p, ...Array.from(files).map(classify)]);
  const removePending = (id: number) => setPending((p) => p.filter((x) => x.id !== id));

  function buildGroups(items: Pending[]): Group[] {
    const imgs = items.filter((p) => p.kind === "image");
    const vids = items.filter((p) => p.kind === "video");
    const docs = items.filter((p) => p.kind === "doc");
    const auds = items.filter((p) => p.kind === "audio");
    const g: Group[] = [];
    if (imgs.length) g.push({ t: "media", count: Math.min(imgs.length, 4), total: imgs.length, video: false });
    if (vids.length) g.push({ t: "media", count: Math.min(vids.length, 4), total: vids.length, video: true });
    docs.forEach((d) => g.push({ t: "file", kind: d.docType ?? "file", name: d.name, meta: d.meta }));
    auds.forEach((a) => g.push({ t: "audio", name: a.name, meta: a.meta || "00:30" }));
    return g;
  }

  function send() {
    const groups = buildGroups(pending);
    if (!groups.length && !text.trim()) return;
    const id = uid.current++;
    setMessages((ms) => [...ms, { id, variant: "sent", groups, caption: text.trim() || undefined, time: "now", status: "sent", state: "uploading" }]);
    setPending([]);
    setText("");
    window.setTimeout(() => {
      setMessages((ms) => ms.map((m) => (m.id === id ? { ...m, state: "default", status: "read" } : m)));
    }, 1700);
  }

  function renderMsg(m: Msg) {
    const bubbles: React.ReactNode[] =
      m.groups.length === 0
        ? [<MultiAttachmentBubble key="t" variant={m.variant} caption={m.caption} time={m.time} status={m.status} />]
        : m.groups.map((g, i) => {
            const last = i === m.groups.length - 1;
            const common = {
              variant: m.variant,
              showMeta: last,
              time: m.time,
              status: m.status,
              state: (m.state === "uploading" ? "uploading" : "default") as "uploading" | "default",
              quoted: i === 0 ? m.quoted : undefined,
              caption: last ? m.caption : undefined,
            };
            if (g.t === "media") return <MultiAttachmentBubble key={i} {...common} images={g.count} totalImages={g.total} videoAt={g.video ? Array.from({ length: g.count }, (_, k) => k) : []} />;
            if (g.t === "file") return <MultiAttachmentBubble key={i} {...common} files={[{ kind: g.kind, name: g.name, meta: g.meta }]} />;
            return <MultiAttachmentBubble key={i} {...common} files={[{ kind: "audio", name: g.name, meta: g.meta }]} />;
          });
    return (
      <MessageStack key={m.id} variant={m.variant}>
        {bubbles}
      </MessageStack>
    );
  }

  const canSend = pending.length > 0 || text.trim().length > 0;

  return (
    <div
      style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, position: "relative" }}
      onDragOver={(e) => {
        e.preventDefault();
        if (!dragging) setDragging(true);
      }}
      onDragLeave={(e) => {
        if (e.currentTarget === e.target) setDragging(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
      }}
    >
      {/* Chat header */}
      <div className="chat-header">
        <div className="chat-header__info">
          <div className="chat-header__avatar">
            <img src={CONVOS[0].img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
          </div>
          <div className="chat-header__text">
            <span className="chat-header__name">George Alan</span>
            <span className="chat-header__status">Online</span>
          </div>
        </div>
        <div className="chat-header__actions">
          <button className="chat-header__action-btn"><span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-primary)" }}>videocam</span></button>
          <button className="chat-header__action-btn"><span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-primary)" }}>call</span></button>
          <button className="chat-header__action-btn"><span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-primary)" }}>more_vert</span></button>
        </div>
      </div>

      {/* Messages */}
      <div ref={listRef} style={{ flex: 1, overflowY: "auto", padding: "var(--cometchat-spacing-4) var(--cometchat-spacing-6)", display: "flex", flexDirection: "column", gap: 8, background: "var(--cometchat-background-color-02)" }}>
        {messages.map(renderMsg)}
      </div>

      {/* Composer */}
      <div style={{ borderTop: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-01)" }}>
        {pending.length > 0 && (
          <div style={{ display: "flex", gap: 8, padding: "12px 16px 2px", overflowX: "auto" }}>
            {pending.map((p) => (
              <div key={p.id} style={{ position: "relative", flexShrink: 0 }}>
                {p.kind === "image" ? (
                  <ImagePreview badge="none" src={p.src} />
                ) : p.kind === "video" ? (
                  <VideoPreview badge="none" src={p.src} />
                ) : p.kind === "audio" ? (
                  <AudioPreview badge="none" title={p.name} />
                ) : (
                  <DocumentPreview badge="none" name={p.name} type={p.docType} meta={p.meta} />
                )}
                <button
                  onClick={() => removePending(p.id)}
                  style={{ position: "absolute", top: -6, right: -6, width: 22, height: 22, borderRadius: "50%", border: "2px solid var(--cometchat-background-color-01)", background: "var(--cometchat-neutral-color-700)", color: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0 }}
                  aria-label="Remove attachment"
                >
                  <IconClose />
                </button>
              </div>
            ))}
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px" }}>
          <input ref={fileInput} type="file" multiple style={{ display: "none" }} onChange={(e) => e.target.files && addFiles(e.target.files)} />
          <button onClick={() => fileInput.current?.click()} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexShrink: 0, padding: 0 }} aria-label="Attach files">
            <span className="icon-rounded" style={{ fontSize: 26, color: "var(--cometchat-icon-color-secondary)", "--icon-fill": 0 } as React.CSSProperties}>add_circle</span>
          </button>
          <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: 8, height: 42, padding: "0 8px 0 16px", background: "var(--cometchat-background-color-03)", borderRadius: "var(--cometchat-radius-max)" }}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") send();
              }}
              placeholder="Type a message…"
              style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", fontSize: 14, color: "var(--cometchat-text-color-primary)", fontFamily: "inherit" }}
            />
            <span className="icon-rounded" style={{ fontSize: 22, color: "var(--cometchat-icon-color-secondary)", "--icon-fill": 0, flexShrink: 0 } as React.CSSProperties}>mood</span>
          </div>
          <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexShrink: 0, padding: 0 }} aria-label="Voice message">
            <span className="icon-rounded" style={{ fontSize: 24, color: "var(--cometchat-icon-color-secondary)", "--icon-fill": 0 } as React.CSSProperties}>mic</span>
          </button>
          <button
            onClick={send}
            disabled={!canSend}
            style={{ width: 40, height: 40, borderRadius: "50%", border: "none", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", cursor: canSend ? "pointer" : "default", background: canSend ? "var(--cometchat-primary-color)" : "var(--cometchat-neutral-color-300)", color: "var(--cometchat-static-white)" }}
            aria-label="Send"
          >
            <IconSend />
          </button>
        </div>
      </div>

      {/* Drag overlay */}
      {dragging && (
        <div style={{ position: "absolute", inset: 12, borderRadius: "var(--cometchat-radius-3)", border: "2px dashed var(--cometchat-primary-color)", background: "color-mix(in srgb, var(--cometchat-primary-color) 10%, transparent)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, pointerEvents: "none", zIndex: 5 }}>
          <span className="icon-rounded" style={{ fontSize: 48, color: "var(--cometchat-primary-color)", "--icon-fill": 0 } as React.CSSProperties}>upload_file</span>
          <span style={{ fontSize: 17, fontWeight: 600, color: "var(--cometchat-primary-color)" }}>Drop files to attach</span>
        </div>
      )}
    </div>
  );
}

/* ─── Full screen ──────────────────────────────────────────────────────────── */

function ChatScreen() {
  return (
    <div className="shell" style={{ height: "100vh", borderRadius: 0, border: "none", fontFamily: "var(--cometchat-font-family, Inter, sans-serif)" }}>
      <div className="shell__sidebar">
        <Header title="Chats" actions={[{ icon: "more_vert", onClick: () => {}, ariaLabel: "More" }]} />
        <div style={{ flex: 1, overflow: "auto" }}>
          {CONVOS.map((c, i) => (
            <div key={i} style={c.active ? { background: "var(--cometchat-background-color-03)" } : undefined}>
              <ConversationItem title={c.name} avatarUrl={c.img} textContent={c.last} timestamp={c.time} avatarVariant="image" />
            </div>
          ))}
        </div>
        <div className="shell__tab-bar">
          <TabItem icon="chat" label="Chats" active />
          <TabItem icon="call" label="Calls" />
          <TabItem icon="group" label="Groups" />
          <TabItem icon="person" label="Users" />
        </div>
      </div>
      <ChatMain />
    </div>
  );
}

export const Chat: Story = {
  parameters: { controls: { disable: true } },
  render: () => <ChatScreen />,
};
