import type { Meta, StoryObj } from "@storybook/react";
import "./ChatBubbles.css";

const meta: Meta = {
  title: "Core Components/Chat Bubbles/File Bubble",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   SENT VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const SentPDF: StoryObj = {
  name: "Sent — PDF",
  parameters: { docs: { description: { story: "Outgoing PDF file bubble." } } },
  render: () => (
    <Wrapper>
      <FileBubble variant="sent" fileName="File.pdf" fileDate="16 Sep, 2026" fileSize="200 KB" fileType="pdf" />
    </Wrapper>
  ),
};

export const SentDOC: StoryObj = {
  name: "Sent — DOC",
  parameters: { docs: { description: { story: "Outgoing Word document file bubble." } } },
  render: () => (
    <Wrapper>
      <FileBubble variant="sent" fileName="Report.docx" fileDate="16 Sep, 2026" fileSize="1.2 MB" fileType="doc" />
    </Wrapper>
  ),
};

export const SentXLS: StoryObj = {
  name: "Sent — XLS",
  parameters: { docs: { description: { story: "Outgoing Excel file bubble." } } },
  render: () => (
    <Wrapper>
      <FileBubble variant="sent" fileName="Data.xlsx" fileDate="16 Sep, 2026" fileSize="540 KB" fileType="xls" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   RECEIVED VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const ReceivedPDF: StoryObj = {
  name: "Received — PDF",
  parameters: { docs: { description: { story: "Incoming PDF file bubble." } } },
  render: () => (
    <Wrapper>
      <FileBubble variant="received" fileName="File.pdf" fileDate="16 Sep, 2026" fileSize="200 KB" fileType="pdf" />
    </Wrapper>
  ),
};

export const ReceivedDOC: StoryObj = {
  name: "Received — DOC",
  parameters: { docs: { description: { story: "Incoming Word document file bubble." } } },
  render: () => (
    <Wrapper>
      <FileBubble variant="received" fileName="Report.docx" fileDate="16 Sep, 2026" fileSize="1.2 MB" fileType="doc" />
    </Wrapper>
  ),
};

export const ReceivedXLS: StoryObj = {
  name: "Received — XLS",
  parameters: { docs: { description: { story: "Incoming Excel file bubble." } } },
  render: () => (
    <Wrapper>
      <FileBubble variant="received" fileName="Data.xlsx" fileDate="16 Sep, 2026" fileSize="540 KB" fileType="xls" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllVariants: StoryObj = {
  name: "All Variants",
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", width: 320, padding: "var(--space-4)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Sent — PDF</Label>
        <FileBubble variant="sent" fileName="File.pdf" fileDate="16 Sep, 2026" fileSize="200 KB" fileType="pdf" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Received — PDF</Label>
        <FileBubble variant="received" fileName="File.pdf" fileDate="16 Sep, 2026" fileSize="200 KB" fileType="pdf" />
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   USAGE / DOCS
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto" }}>
      <UsageSection title="HTML Structure">
        <CodeCard
          language="HTML"
          code={`<!-- Sent File Bubble -->
<div class="file-bubble file-bubble--sent">
  <!-- Preview area -->
  <div class="file-bubble__preview">
    <!-- Large file type icon (PDF/DOC/XLS) -->
  </div>
  <!-- Info bar -->
  <div class="file-bubble__info">
    <div class="file-bubble__icon-thumb">
      <!-- Small file type thumbnail -->
    </div>
    <div class="file-bubble__details">
      <span class="file-bubble__name">File.pdf</span>
      <span class="file-bubble__meta">16 Sep, 2026 • 200 KB</span>
    </div>
    <span class="icon-rounded file-bubble__download">download</span>
  </div>
</div>

<!-- Received File Bubble -->
<div class="file-bubble file-bubble--received">
  <div class="file-bubble__preview">...</div>
  <div class="file-bubble__info">
    <div class="file-bubble__icon-thumb">...</div>
    <div class="file-bubble__details">
      <span class="file-bubble__name">File.pdf</span>
      <span class="file-bubble__meta">16 Sep, 2026 • 200 KB</span>
    </div>
    <span class="icon-rounded file-bubble__download">download</span>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Sent — PDF" description="Purple info bar. White preview area with large PDF icon. File thumbnail, name, date/size, and download icon in white." />
          <StateCard title="Sent — DOC" description="Same layout with Word document icon (blue)." />
          <StateCard title="Sent — XLS" description="Same layout with Excel icon (green)." />
          <StateCard title="Received — PDF" description="Gray info bar. White preview area with large PDF icon. File thumbnail, name, date/size in dark, download icon in purple." />
          <StateCard title="Received — DOC" description="Same layout with Word document icon." />
          <StateCard title="Received — XLS" description="Same layout with Excel icon." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Preview Area" description="White/light background showing a large file type icon (PDF, DOC, XLS) centered." />
          <StateCard title="File Thumbnail" description="Small rounded square (36×36) with the file type icon at the left of the info bar." />
          <StateCard title="File Name" description="Semibold text showing the file name (e.g. 'File.pdf')." />
          <StateCard title="File Meta" description="Date and file size separated by a bullet (e.g. '16 Sep, 2026 • 200 KB')." />
          <StateCard title="Download Icon" description="Material icon 'download' at the right of the info bar. White on sent, purple on received." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Sent Info Bar" description="var(--color-send-bubble-bg) — Primary purple" />
          <StateCard title="Received Info Bar" description="var(--color-received-bubble-bg) — Light gray" />
          <StateCard title="Preview Background" description="var(--color-static-white) — White" />
          <StateCard title="File Name (Sent)" description="var(--color-static-white)" />
          <StateCard title="File Name (Received)" description="var(--color-text-primary)" />
          <StateCard title="File Meta (Sent)" description="rgba(255, 255, 255, 0.7)" />
          <StateCard title="File Meta (Received)" description="var(--color-text-tertiary)" />
          <StateCard title="Download Icon (Sent)" description="var(--color-static-white)" />
          <StateCard title="Download Icon (Received)" description="var(--color-icon-highlight-primary)" />
          <StateCard title="Border Radius" description="var(--radius-lg) — Rounded corners on the bubble" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Design System — Web Chat UI Kits → Document Container (node 17219:542)" />
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function FileBubble({
  variant,
  fileName,
  fileDate,
  fileSize,
  fileType,
}: {
  variant: "sent" | "received";
  fileName: string;
  fileDate: string;
  fileSize: string;
  fileType: "pdf" | "doc" | "xls";
}) {
  const isSent = variant === "sent";

  return (
    <div
      style={{
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        minWidth: 240,
        background: isSent ? "var(--color-send-bubble-bg)" : "var(--color-received-bubble-bg)",
      }}
    >
      {/* Preview area */}
      <div
        style={{
          background: "var(--color-static-white)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--space-8) var(--space-4)",
          borderRadius: "var(--radius-md)",
          margin: "var(--space-2)",
          marginBottom: 0,
        }}
      >
        <FileTypeIcon type={fileType} size="large" />
      </div>

      {/* Info bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-2)",
          padding: "var(--space-3) var(--space-3)",
        }}
      >
        {/* Small file thumbnail */}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "var(--radius-sm)",
            background: "var(--color-static-white)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <FileTypeIcon type={fileType} size="small" />
        </div>

        {/* File details */}
        <div style={{ display: "flex", flexDirection: "column", gap: 1, flex: 1, minWidth: 0 }}>
          <span
            style={{
              fontSize: "var(--font-size-2)",
              fontWeight: "var(--font-weight-semibold)",
              fontFamily: "var(--font-family-body)",
              lineHeight: "var(--line-height-body)",
              color: isSent ? "var(--color-static-white)" : "var(--color-text-primary)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {fileName}
          </span>
          <span
            style={{
              fontSize: "var(--font-size-1)",
              fontFamily: "var(--font-family-body)",
              lineHeight: "var(--line-height-caption-1)",
              color: isSent ? "rgba(255, 255, 255, 0.7)" : "var(--color-text-tertiary)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {fileDate} • {fileSize}
          </span>
        </div>

        {/* Download icon */}
        <span
          className="icon-rounded"
          style={{
            fontSize: 20,
            color: isSent ? "var(--color-static-white)" : "var(--color-icon-highlight-primary)",
            "--icon-fill": 0,
            flexShrink: 0,
            cursor: "pointer",
          } as React.CSSProperties}
        >
          download
        </span>
      </div>
    </div>
  );
}

function FileTypeIcon({ type, size }: { type: "pdf" | "doc" | "xls"; size: "large" | "small" }) {
  const isLarge = size === "large";
  const w = isLarge ? 64 : 18;
  const h = isLarge ? 80 : 22;

  const colors: Record<string, { bg: string; fold: string; text: string }> = {
    pdf: { bg: "#E53935", fold: "#C62828", text: "PDF" },
    doc: { bg: "#1E88E5", fold: "#1565C0", text: "DOC" },
    xls: { bg: "#43A047", fold: "#2E7D32", text: "XLS" },
  };

  const c = colors[type];

  return (
    <svg width={w} height={h} viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Document body */}
      <path d="M4 8C4 3.58 7.58 0 12 0H44L60 16V72C60 76.42 56.42 80 52 80H12C7.58 80 4 76.42 4 72V8Z" fill={c.bg} />
      {/* Fold */}
      <path d="M44 0L60 16H48C45.79 16 44 14.21 44 12V0Z" fill={c.fold} opacity="0.6" />
      {/* Text label */}
      <text x="32" y="56" textAnchor="middle" fontSize="16" fontWeight="700" fill="white">{c.text}</text>
    </svg>
  );
}

function Wrapper({ children, width = 320 }: { children: React.ReactNode; width?: number }) {
  return (
    <div
      style={{
        width,
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        padding: "var(--space-4)",
        background: "var(--color-bg-01)",
        borderRadius: "var(--radius-xl)",
        border: "1px solid var(--color-border-default)",
      }}
    >
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: "var(--font-size-0)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--color-text-tertiary)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
      }}
    >
      {children}
    </span>
  );
}

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "var(--space-6)" }}>
      <div
        style={{
          fontSize: "var(--font-size-1)",
          fontWeight: "var(--font-weight-semibold)",
          color: "var(--color-text-secondary)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: "var(--space-2)",
          paddingBottom: "var(--space-2)",
          borderBottom: "1px solid var(--color-border-default)",
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
        border: "1px solid var(--color-border-default)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        background: "var(--color-bg-02)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--space-2) var(--space-3)",
          borderBottom: "1px solid var(--color-border-default)",
          background: "var(--color-bg-03)",
        }}
      >
        <span
          style={{
            fontSize: "var(--font-size-0)",
            fontWeight: "var(--font-weight-semibold)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--color-text-secondary)",
          }}
        >
          {language}
        </span>
      </div>
      <pre
        style={{
          margin: 0,
          padding: "var(--space-3-5)",
          fontFamily: "var(--font-family-body)",
          fontSize: "var(--font-size-1)",
          lineHeight: 1.6,
          color: "var(--color-text-primary)",
          overflowX: "auto",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

function StateCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      style={{
        padding: "var(--space-3-5) var(--space-4)",
        border: "1px solid var(--color-border-default)",
        borderRadius: "var(--radius-xl)",
        background: "var(--color-bg-01)",
      }}
    >
      <strong
        style={{
          fontSize: "var(--font-size-2)",
          fontWeight: "var(--font-weight-semibold)",
          color: "var(--color-text-primary)",
          display: "block",
          marginBottom: "var(--space-1)",
        }}
      >
        {title}
      </strong>
      <span
        style={{
          fontSize: "var(--font-size-1)",
          color: "var(--color-text-tertiary)",
          lineHeight: "var(--line-height-caption-1)",
        }}
      >
        {description}
      </span>
    </div>
  );
}
