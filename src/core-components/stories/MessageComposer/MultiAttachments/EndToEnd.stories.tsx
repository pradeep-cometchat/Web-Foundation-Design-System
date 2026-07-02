import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";
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
 * **Multi Attachments — End to End.** A working chat surface that ties every
 * piece together: **drag files anywhere** (or use the **＋**) to queue them in
 * the composer, then **Send** to watch them post as message bubbles and go
 * through *uploading → read*. Different formats post as **separate bubbles**;
 * a typed message becomes the caption. The thread is pre-seeded with the range
 * of states (image grid, document, audio, caption, quoted reply, receipts).
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Attachments/End to End",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

/* ─── Icons ────────────────────────────────────────────────────────────────── */

const IconSend = () => (
  <svg width="18" height="16" viewBox="0 0 15.78 13.6" fill="none">
    <path d="M1.267 13.52c-.302.121-.589.095-.86-.077-.271-.172-.407-.422-.407-.751V8.47L6.923 6.797 0 5.124V.903C0 .574.136.324.407.152.678-.02.965-.046 1.267.075L15.223 5.96c.372.166.558.447.558.84 0 .393-.186.673-.558.836L1.267 13.52Z" fill="currentColor" />
  </svg>
);
const IconPlus = () => (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4" />
    <path d="M10 6.5v7M6.5 10h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
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

/* ─── Chat shell ───────────────────────────────────────────────────────────── */

function EndToEndChat() {
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
      setMessages((ms) => ms.map((m) => (m.id === id ? { ...m, state: "default", status: "read", time: "now" } : m)));
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
            if (g.t === "media")
              return <MultiAttachmentBubble key={i} {...common} images={g.count} totalImages={g.total} videoAt={g.video ? Array.from({ length: g.count }, (_, k) => k) : []} />;
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
      style={{ position: "relative", width: 440, height: 660, display: "flex", flexDirection: "column", background: "var(--cometchat-background-color-01)", borderRadius: "var(--cometchat-radius-4)", border: "1px solid var(--cometchat-border-color-default)", overflow: "hidden", boxShadow: "var(--cometchat-shadow-sm)", fontFamily: "var(--cometchat-font-family, Inter, sans-serif)" }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderBottom: "1px solid var(--cometchat-border-color-light)", flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "hsl(250 60% 92%)", color: "hsl(250 45% 40%)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 15 }}>G</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "var(--cometchat-text-color-primary)" }}>George Alan</div>
          <div style={{ fontSize: 12, color: "var(--cometchat-success-color)" }}>online</div>
        </div>
      </div>

      {/* Message list */}
      <div ref={listRef} style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 8, background: "var(--cometchat-background-color-02)" }}>
        {messages.map(renderMsg)}
      </div>

      {/* Composer */}
      <div style={{ borderTop: "1px solid var(--cometchat-border-color-light)", background: "var(--cometchat-background-color-01)", flexShrink: 0 }}>
        {pending.length > 0 && (
          <div style={{ display: "flex", gap: 8, padding: "10px 12px 2px", overflowX: "auto" }}>
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
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px" }}>
          <input ref={fileInput} type="file" multiple style={{ display: "none" }} onChange={(e) => e.target.files && addFiles(e.target.files)} />
          <button onClick={() => fileInput.current?.click()} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 8, border: "none", background: "transparent", color: "var(--cometchat-icon-color-secondary)", cursor: "pointer", flexShrink: 0 }} aria-label="Attach files">
            <IconPlus />
          </button>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") send();
            }}
            placeholder="Type a message…"
            style={{ flex: 1, minWidth: 0, height: 40, border: "none", outline: "none", background: "transparent", fontSize: 14, color: "var(--cometchat-text-color-primary)", fontFamily: "inherit" }}
          />
          <button
            onClick={send}
            disabled={!canSend}
            style={{ width: 40, height: 40, borderRadius: "50%", border: "none", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", cursor: canSend ? "pointer" : "default", background: canSend ? "var(--cometchat-primary-color)" : "var(--cometchat-neutral-color-300)", color: "var(--cometchat-static-white)", transition: "background 0.15s" }}
            aria-label="Send"
          >
            <IconSend />
          </button>
        </div>
      </div>

      {/* Drag overlay */}
      {dragging && (
        <div style={{ position: "absolute", inset: 8, borderRadius: "var(--cometchat-radius-3)", border: "2px dashed var(--cometchat-primary-color)", background: "color-mix(in srgb, var(--cometchat-primary-color) 12%, transparent)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, pointerEvents: "none", zIndex: 5 }}>
          <span className="icon-rounded" style={{ fontSize: 40, color: "var(--cometchat-primary-color)", "--icon-fill": 0 } as React.CSSProperties}>upload_file</span>
          <span style={{ fontSize: 15, fontWeight: 600, color: "var(--cometchat-primary-color)" }}>Drop files to attach</span>
        </div>
      )}
    </div>
  );
}

export const Chat: Story = {
  parameters: { controls: { disable: true } },
  render: () => <EndToEndChat />,
};
