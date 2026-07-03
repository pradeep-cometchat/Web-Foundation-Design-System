import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";
import "../../../../shell/Shell.css";
import "../../ChatBubbles/ChatBubbles.css";
import { Header } from "../../../../base-components/components/Header";
import { SearchBar } from "../../../../base-components/components/SearchBar";
import { ConversationItem } from "../../../../base-components/components/ListItem";
import { ActionSheet, CameraIcon, PhotoIcon, VideocamIcon, PlayCircleIcon, DescriptionIcon, PollIcon, CollaborativeWhiteboardIcon, CollaborativeDocumentIcon } from "../../../../base-components/components/ActionSheet";
import {
  MultiAttachmentBubble,
  MessageStack,
  ImagePreview,
  VideoPreview,
  DocumentPreview,
  AudioPreview,
  SAMPLE_IMAGES,
  type DocKind,
  type QuotedReply,
} from "./_shared";

/**
 * **Multi Attachments — End to End.** A single chat with the design-system
 * **Single Line Composer** wired up: **drag files onto the chat** (or use ＋) to
 * queue previews, then **Send** to post them as separate-format bubbles running
 * *uploading → read*. The thread is pre-seeded with the range of states.
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Attachments/End to End",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

const AV = (n: number) => `https://i.pravatar.cc/120?img=${n}`;
const AVATAR = AV(12);
const CHAT_NAME = "George Alan";

type ChatRow = {
  name: string;
  img?: string;
  avatarText?: string;
  time: string;
  text?: string;
  sender?: string;
  type?: "photo" | "video" | "file" | "audio";
  status?: "read" | "error" | "sent";
  online?: boolean;
  active?: boolean;
};

// Derive the sidebar preview for the active chat from its latest message,
// so anything sent in the panel is reflected in the Chat List row.
function previewFor(m: Msg): Partial<ChatRow> {
  const g = m.groups[0];
  const type: ChatRow["type"] = g ? (g.t === "media" ? (g.video ? "video" : "photo") : g.t === "file" ? "file" : "audio") : undefined;
  const status: ChatRow["status"] = m.variant === "sent" ? (m.state === "uploading" ? "sent" : "read") : undefined;
  return { type, text: m.caption, status, time: m.time === "now" ? "Now" : m.time };
}

// Mirrors the Chat List / Default story, with working avatar images.
const CONVOS: ChatRow[] = [
  { name: "George Alan", img: AV(12), time: "6:45 PM", text: "Hey, let's catch up later!", status: "read", online: true, active: true },
  { name: "Uber Cars", img: AV(52), time: "4:30 PM", sender: "John:", type: "photo", text: "Your ride has arrived. Driver is waiting outside." },
  { name: "Safiya Fareena", img: AV(5), time: "2:10 PM", type: "video" },
  { name: "Robert Allen", img: AV(13), time: "11:00 AM", status: "read", type: "photo", text: "Check this out from yesterday!", online: true },
  { name: "Epic Game", img: AV(60), time: "Yesterday", sender: "John Paul:", type: "file", text: "join the match now" },
  { name: "Scott Franklin", avatarText: "SF", time: "Monday", status: "error", type: "audio" },
  { name: "Micheal Scott", img: AV(15), time: "Sunday", status: "read", text: "Emoji" },
  { name: "Innovative Online Shopping", img: AV(16), time: "Friday", status: "read", sender: "Tessa:", text: "Order delivered" },
  { name: "Micheal Scott", img: AV(15), time: "11/04/26", text: "Incoming voice call" },
];

function TabItem({ icon, label, active }: { icon: string; label: string; active?: boolean }) {
  return (
    <div className="shell__tab-item">
      <span className={`icon-rounded shell__tab-icon ${active ? "shell__tab-icon--active" : ""}`}>{icon}</span>
      <span className={`shell__tab-label ${active ? "shell__tab-label--active" : ""}`}>{label}</span>
    </div>
  );
}

/* ─── Single Line Composer icons (from the DS composer) ────────────────────── */

const IconAddCircle = () => (
  <svg width="20" height="20" viewBox="0 0 15.83 15.83" fill="none">
    <path d="M7.292 8.542V11.25c0 .177.06.326.18.445a.6.6 0 0 0 .445.18.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.445V8.542h2.708a.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.446.6.6 0 0 0-.18-.445.6.6 0 0 0-.445-.18H8.542V4.584a.6.6 0 0 0-.18-.446.6.6 0 0 0-.446-.18.6.6 0 0 0-.445.18.6.6 0 0 0-.18.446v2.708H4.584a.6.6 0 0 0-.446.18.6.6 0 0 0-.18.445c0 .177.06.326.18.446a.6.6 0 0 0 .446.18h2.708Zm.626 7.291A7.917 7.917 0 1 1 7.918 0a7.917 7.917 0 0 1 0 15.833Zm0-1.25a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z" fill="var(--cometchat-icon-color-tertiary)" />
  </svg>
);
const IconMic = () => (
  <svg width="20" height="20" viewBox="0 0 11.37 15.58" fill="none">
    <path d="M5.685 9.472c-.607 0-1.117-.218-1.531-.653-.415-.435-.622-.963-.622-1.583V2.139c0-.594.21-1.1.628-1.515A2.07 2.07 0 0 1 5.684 0c.598 0 1.106.208 1.525.624.419.416.628.92.628 1.515v5.097c0 .62-.207 1.148-.622 1.583-.414.435-.924.653-1.53.653Zm-.657 5.448v-2.078a5.23 5.23 0 0 1-3.37-1.587A5.17 5.17 0 0 1 .008 7.91a.63.63 0 0 1 .142-.477.62.62 0 0 1 .474-.197c.184 0 .34.064.467.193a.72.72 0 0 1 .243.477 3.87 3.87 0 0 0 1.501 2.64 4.37 4.37 0 0 0 2.849 1.047c1.082 0 2.035-.343 2.86-1.03a3.87 3.87 0 0 0 1.499-2.633.72.72 0 0 1 .239-.477.66.66 0 0 1 .474-.193.63.63 0 0 1 .474.197.63.63 0 0 1 .149.477 5.17 5.17 0 0 1-1.651 3.334 5.23 5.23 0 0 1-3.388 1.59v2.075a.66.66 0 0 1-.193.47.64.64 0 0 1-.472.196.64.64 0 0 1-.472-.193.66.66 0 0 1-.193-.47Zm.657-6.768c.244 0 .444-.089.6-.267a.93.93 0 0 0 .233-.65V2.145a.83.83 0 0 0-.24-.587.8.8 0 0 0-.593-.238.8.8 0 0 0-.593.238.83.83 0 0 0-.24.583v5.095c0 .256.077.472.233.65.156.179.356.268.6.268Z" fill="var(--cometchat-icon-color-tertiary)" />
  </svg>
);
const IconMood = () => (
  <svg width="20" height="20" viewBox="0 0 16.39 16.39" fill="none">
    <path d="M11.151 7.167a1.14 1.14 0 0 0 .807-.333c.222-.222.333-.49.333-.806a1.14 1.14 0 0 0-.332-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.49.333.807.333Zm-5.917 0a1.14 1.14 0 0 0 .807-.333c.222-.222.334-.49.334-.806a1.14 1.14 0 0 0-.333-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.491.333.807.333Zm2.96 5.513c.784 0 1.497-.18 2.159-.541a4.58 4.58 0 0 0 1.616-1.498.38.38 0 0 0-.016-.469.44.44 0 0 0-.435-.229H4.859a.44.44 0 0 0-.427.23.38.38 0 0 0-.008.462 4.58 4.58 0 0 0 1.609 1.504c.663.36 1.38.541 2.149.541h.012ZM8.195 16.389a8.19 8.19 0 0 1-5.8-2.406A8.19 8.19 0 0 1 0 8.195 8.19 8.19 0 0 1 2.399 2.395 8.19 8.19 0 0 1 8.194 0a8.19 8.19 0 0 1 5.8 2.399 8.19 8.19 0 0 1 2.395 5.795 8.19 8.19 0 0 1-2.406 5.8 8.19 8.19 0 0 1-5.788 2.395Zm-.001-1.32a6.73 6.73 0 0 0 4.876-1.999 6.73 6.73 0 0 0 2-4.876 6.73 6.73 0 0 0-2-4.876 6.73 6.73 0 0 0-4.876-2 6.73 6.73 0 0 0-4.876 2 6.73 6.73 0 0 0-2 4.876 6.73 6.73 0 0 0 2 4.876 6.73 6.73 0 0 0 4.876 2Z" fill="var(--cometchat-icon-color-tertiary)" />
  </svg>
);
const IconSticker = () => (
  <svg width="22" height="22" viewBox="0 -960 960 960" fill="none" style={{ minWidth: 22, minHeight: 22 }}>
    <path d="M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v320L600-160H200Zm0-80h360v-120q0-33 23.5-56.5T640-440h120v-280H200v480Z" fill="var(--cometchat-icon-color-tertiary)" />
  </svg>
);
const IconSend = () => (
  <svg width="16" height="14" viewBox="0 0 15.78 13.6" fill="none">
    <path d="M1.267 13.52c-.302.121-.589.095-.86-.077-.271-.172-.407-.422-.407-.751V8.47L6.923 6.797 0 5.124V.903C0 .574.136.324.407.152.678-.02.965-.046 1.267.075L15.223 5.96c.372.166.558.447.558.84 0 .393-.186.673-.558.836L1.267 13.52Z" fill="currentColor" />
  </svg>
);
const IconClose = () => (
  <svg width="9" height="9" viewBox="0 0 8 8" fill="none">
    <path d="M1 1l6 6M7 1L1 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/* ─── DS composer styles ───────────────────────────────────────────────────── */

const composerRow: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  background: "var(--cometchat-background-color-01)",
  border: "1px solid var(--cometchat-border-color-default)",
  borderRadius: 8,
  padding: "8px 12px",
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
  border: "2px solid color-mix(in srgb, var(--cometchat-static-white) 12%, transparent)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 1px 2px color-mix(in srgb, var(--cometchat-neutral-color-900) 5%, transparent)",
  flexShrink: 0,
};

/* ─── Model ────────────────────────────────────────────────────────────────── */

type PendKind = "image" | "video" | "audio" | "doc";
interface Pending {
  id: number;
  kind: PendKind;
  name: string;
  meta: string;
  src?: string;
  docType?: DocKind;
  loading?: boolean;
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
  quoted?: QuotedReply;
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

// Build a quoted-reply summary from the message being replied to.
function quoteFrom(m: Msg): QuotedReply {
  const name = m.variant === "sent" ? "You" : CHAT_NAME;
  const g = m.groups[0];
  if (g) {
    const kind = g.t === "media" ? (g.video ? "video" : "image") : g.t === "file" ? "file" : "audio";
    const count = g.t === "media" ? g.total : 1;
    return { name, media: { kind, count, caption: m.caption } };
  }
  return { name, text: m.caption };
}

function quoteSummary(q: QuotedReply): string {
  if (!q.media) return q.text ?? "";
  const labels: Record<"image" | "video" | "file" | "audio", [string, string]> = {
    image: ["Image", "Images"],
    video: ["Video", "Videos"],
    file: ["File", "Files"],
    audio: ["Audio", "Audio"],
  };
  const [s, p] = labels[q.media.kind];
  return `${q.media.count} ${q.media.count === 1 ? s : p}${q.media.caption ? ` · ${q.media.caption}` : ""}`;
}

/* ─── Chat ─────────────────────────────────────────────────────────────────── */

function EndToEndChat({ messages, setMessages }: { messages: Msg[]; setMessages: React.Dispatch<React.SetStateAction<Msg[]>> }) {
  const [pending, setPending] = useState<Pending[]>([]);
  const [text, setText] = useState("");
  const [dragging, setDragging] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [replyTo, setReplyTo] = useState<Msg | null>(null);
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

  // Queue items in a loading state, then flip each to ready (mimics an upload).
  const queue = (items: Pending[]) => {
    const loading = items.map((it) => ({ ...it, loading: true }));
    setPending((p) => [...p, ...loading]);
    loading.forEach((it) =>
      window.setTimeout(() => setPending((p) => p.map((x) => (x.id === it.id ? { ...x, loading: false } : x))), 1200),
    );
  };
  const addFiles = (files: FileList | File[]) => queue(Array.from(files).map(classify));
  const removePending = (id: number) => setPending((p) => p.filter((x) => x.id !== id));

  // Action-sheet items add a representative attachment (Photos opens the picker).
  function addSample(kind: PendKind, docType?: DocKind) {
    const id = uid.current++;
    const item: Pending =
      kind === "image"
        ? { id, kind, name: "Photo.jpg", meta: "", src: SAMPLE_IMAGES[id % SAMPLE_IMAGES.length] }
        : kind === "video"
          ? { id, kind, name: "Clip.mp4", meta: "12 MB", src: SAMPLE_IMAGES[1] }
          : kind === "audio"
            ? { id, kind, name: "Audio.mp3", meta: "00:30" }
            : { id, kind: "doc", docType: docType ?? "pdf", name: "Document.pdf", meta: "PDF · 2.4 MB" };
    queue([item]);
    setSheetOpen(false);
  }

  const sheetItems = [
    { icon: <CameraIcon />, label: "Camera", onClick: () => addSample("image") },
    { icon: <PhotoIcon />, label: "Attach Image", onClick: () => { setSheetOpen(false); fileInput.current?.click(); } },
    { icon: <VideocamIcon />, label: "Attach Video", onClick: () => addSample("video") },
    { icon: <PlayCircleIcon />, label: "Attach Audio", onClick: () => addSample("audio") },
    { icon: <DescriptionIcon />, label: "Attach Document", onClick: () => { setSheetOpen(false); fileInput.current?.click(); } },
    { icon: <PollIcon />, label: "Poll", onClick: () => setSheetOpen(false) },
    { icon: <CollaborativeWhiteboardIcon />, label: "Collaborative Whiteboard", onClick: () => setSheetOpen(false) },
    { icon: <CollaborativeDocumentIcon />, label: "Collaborative Document", onClick: () => setSheetOpen(false) },
  ];

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
    const quoted = replyTo ? quoteFrom(replyTo) : undefined;
    setMessages((ms) => [...ms, { id, variant: "sent", groups, caption: text.trim() || undefined, quoted, time: "now", status: "sent", state: "uploading" }]);
    setPending([]);
    setText("");
    setReplyTo(null);
    window.setTimeout(() => {
      setMessages((ms) => ms.map((m) => (m.id === id ? { ...m, state: "default", status: "read" } : m)));
    }, 1700);
  }

  function renderMsg(m: Msg) {
    const bubbles: React.ReactNode[] =
      m.groups.length === 0
        ? [<MultiAttachmentBubble key="t" variant={m.variant} quoted={m.quoted} caption={m.caption} time={m.time} status={m.status} />]
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
      <div key={m.id} className={`e2e-row e2e-row--${m.variant}`}>
        <MessageStack variant={m.variant}>{bubbles}</MessageStack>
        <button className="e2e-reply" onClick={() => setReplyTo(m)} aria-label="Reply">
          <span className="icon-rounded" style={{ fontSize: 18, "--icon-fill": 0 } as React.CSSProperties}>reply</span>
        </button>
      </div>
    );
  }

  const canSend = pending.length > 0 || text.trim().length > 0;

  return (
    <div
      style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", position: "relative", fontFamily: "var(--cometchat-font-family, Inter, sans-serif)" }}
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
            <img src={AVATAR} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
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
      <style>{`
        .e2e-row { display: flex; align-items: center; gap: 6px; }
        .e2e-row--received { justify-content: flex-start; }
        .e2e-row--sent { flex-direction: row-reverse; justify-content: flex-start; }
        .e2e-reply {
          opacity: 0; flex-shrink: 0; width: 30px; height: 30px; border-radius: 50%;
          border: none; background: transparent; color: var(--cometchat-icon-color-secondary);
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: opacity .12s ease, background .12s ease;
        }
        .e2e-row:hover .e2e-reply { opacity: 1; }
        .e2e-reply:hover { background: var(--cometchat-background-color-03); }
      `}</style>
      <div ref={listRef} style={{ flex: 1, overflowY: "auto", padding: "var(--cometchat-spacing-4) var(--cometchat-spacing-6)", display: "flex", flexDirection: "column", gap: 8, background: "var(--cometchat-background-color-02)" }}>
        {messages.map(renderMsg)}
      </div>

      {/* Composer (DS Single Line Composer) */}
      <div style={{ position: "relative", padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-4)", background: "var(--cometchat-background-color-01)", borderTop: "1px solid var(--cometchat-border-color-light)" }}>
        {sheetOpen && (
          <div style={{ position: "absolute", bottom: "calc(100% - 8px)", left: 16, zIndex: 1000 }}>
            {/* Lift the sheet above its own (transparent) backdrop so item clicks land. */}
            <style>{`.action-sheet{position:relative;z-index:1000;}`}</style>
            <ActionSheet items={sheetItems} onClose={() => setSheetOpen(false)} width={288} />
          </div>
        )}
        {pending.length > 0 && (
          <div style={{ display: "flex", gap: 8, padding: "10px 12px 2px", marginBottom: 2, overflowX: "auto", overflowY: "visible" }}>
            {pending.map((p) => (
              <div key={p.id} style={{ position: "relative", flexShrink: 0 }}>
                {(() => {
                  const badge = p.loading ? "loading" : "none";
                  return p.kind === "image" ? <ImagePreview badge={badge} src={p.src} /> : p.kind === "video" ? <VideoPreview badge={badge} src={p.src} /> : p.kind === "audio" ? <AudioPreview badge={badge} title={p.name} /> : <DocumentPreview badge={badge} name={p.name} type={p.docType} meta={p.meta} />;
                })()}
                {!p.loading && (
                  <button onClick={() => removePending(p.id)} style={{ position: "absolute", top: -6, right: -6, width: 22, height: 22, borderRadius: "50%", border: "2px solid var(--cometchat-background-color-01)", background: "var(--cometchat-neutral-color-700)", color: "var(--cometchat-static-white)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0 }} aria-label="Remove attachment">
                    <IconClose />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
        {replyTo && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px 8px 12px", margin: "4px 0 6px", borderRadius: 8, background: "var(--cometchat-background-color-02)", borderLeft: "3px solid var(--cometchat-primary-color)" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--cometchat-primary-color)" }}>Reply to {quoteFrom(replyTo).name}</div>
              <div style={{ fontSize: 13, color: "var(--cometchat-text-color-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {quoteSummary(quoteFrom(replyTo)) || "Message"}
              </div>
            </div>
            <button onClick={() => setReplyTo(null)} style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", border: "none", background: "var(--cometchat-background-color-03)", color: "var(--cometchat-icon-color-secondary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0 }} aria-label="Cancel reply">
              <IconClose />
            </button>
          </div>
        )}
        <div style={composerRow}>
          <input ref={fileInput} type="file" multiple style={{ display: "none" }} onChange={(e) => e.target.files && addFiles(e.target.files)} />
          <button style={actionButton} aria-label="Attach file" onClick={() => setSheetOpen((o) => !o)}><IconAddCircle /></button>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") send();
            }}
            placeholder="Enter your message here"
            style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", fontSize: 14, lineHeight: "20px", color: "var(--cometchat-text-color-primary)", fontFamily: "inherit" }}
          />
          <button style={actionButton} aria-label="Emoji"><IconMood /></button>
          <button style={actionButton} aria-label="Sticker"><IconSticker /></button>
          <button style={actionButton} aria-label="Voice record"><IconMic /></button>
          <div
            onClick={send}
            role="button"
            aria-label="Send"
            style={{ ...sendBase, cursor: canSend ? "pointer" : "default", background: canSend ? "var(--cometchat-background-color-solid)" : "var(--cometchat-background-color-03)", color: canSend ? "var(--cometchat-static-white)" : "var(--cometchat-icon-color-disabled)" }}
          >
            <IconSend />
          </div>
        </div>
      </div>

      {/* Drag overlay */}
      {dragging && (
        <div style={{ position: "absolute", inset: 0, borderRadius: 0, border: "2px dashed color-mix(in srgb, var(--cometchat-static-white) 45%, transparent)", background: "color-mix(in srgb, var(--cometchat-neutral-color-800) 92%, transparent)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, pointerEvents: "none", zIndex: 5 }}>
          <span className="icon-rounded" style={{ fontSize: 48, color: "var(--cometchat-static-white)", "--icon-fill": 0 } as React.CSSProperties}>upload_file</span>
          <span style={{ fontSize: 17, fontWeight: 600, color: "var(--cometchat-static-white)" }}>Drop files to attach</span>
          <span style={{ fontSize: 13, color: "color-mix(in srgb, var(--cometchat-static-white) 75%, transparent)" }}>
            to <strong style={{ color: "var(--cometchat-static-white)", fontWeight: 600 }}>{CHAT_NAME}</strong>
          </span>
        </div>
      )}
    </div>
  );
}

function ChatScreen() {
  const [messages, setMessages] = useState<Msg[]>(SEED);
  const last = messages[messages.length - 1];
  return (
    <div className="shell" style={{ height: "100vh", borderRadius: 0, border: "none", fontFamily: "var(--cometchat-font-family, Inter, sans-serif)" }}>
      <div className="shell__sidebar">
        <Header title="Chats" actions={[]} showMore />
        <div style={{ padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-4)" }}>
          <SearchBar placeholder="Search chats or messages" />
        </div>
        <div style={{ flex: 1, overflow: "auto" }}>
          {CONVOS.map((base, i) => {
            const c = base.active ? { ...base, ...previewFor(last) } : base;
            return (
              <div key={i} style={c.active ? { background: "var(--cometchat-background-color-03)" } : undefined}>
                <ConversationItem
                  title={c.name}
                  timestamp={c.time}
                  avatarVariant={c.avatarText ? "text" : "image"}
                  avatarUrl={c.img}
                  avatarText={c.avatarText}
                  statusIcon={c.online ? "online" : "none"}
                  messageStatus={c.status}
                  senderLabel={c.sender}
                  messageType={c.type}
                  messageTypeLabel={c.type ? true : undefined}
                  textContent={c.text}
                />
              </div>
            );
          })}
        </div>
        <div className="shell__tab-bar">
          <TabItem icon="chat" label="Chats" active />
          <TabItem icon="call" label="Calls" />
          <TabItem icon="group" label="Groups" />
          <TabItem icon="person" label="Users" />
        </div>
      </div>
      <EndToEndChat messages={messages} setMessages={setMessages} />
    </div>
  );
}

export const Chat: Story = {
  parameters: { controls: { disable: true } },
  render: () => <ChatScreen />,
};
