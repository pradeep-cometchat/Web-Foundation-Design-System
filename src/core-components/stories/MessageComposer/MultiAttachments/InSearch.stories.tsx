import type { Meta, StoryObj } from "@storybook/react";
import "../../../../base-components/components/SearchBar/SearchBar.css";
import { SAMPLE_IMAGES, FileTypeIcon, IconClip, IconPlay, Section } from "./_shared";

/**
 * **Multi Attachments — In Search.** How a message carrying multiple
 * attachments surfaces in search. A conversation result shows an attachment
 * count with a thumbnail strip; the media filters (Photos / Videos) render a
 * tiled grid; the Documents filter renders a file list.
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Attachments/In Search",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

const FILTERS = ["All", "Photos", "Videos", "Audio", "Documents"];

function SearchHeader({ value = "review", active = "All" }: { value?: string; active?: string }) {
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
        {FILTERS.map((f) => {
          const on = f === active;
          return (
            <button
              key={f}
              style={{
                height: 28,
                padding: "0 10px",
                borderRadius: "var(--cometchat-radius-1-5)",
                border: on ? "1px solid var(--cometchat-primary-color)" : "1px solid var(--cometchat-border-color-dark)",
                background: on ? "var(--cometchat-primary-color)" : "var(--cometchat-background-color-01)",
                color: on ? "var(--cometchat-static-white)" : "var(--cometchat-text-color-primary)",
                fontFamily: "var(--cometchat-font-family, Inter, sans-serif)",
                fontSize: 12,
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

function Avatar({ label, hue = 250 }: { label: string; hue?: number }) {
  return (
    <div style={{ width: 40, height: 40, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: `hsl(${hue} 60% 92%)`, color: `hsl(${hue} 45% 40%)`, fontSize: 14, fontWeight: 600 }}>
      {label}
    </div>
  );
}

/** A conversation search result whose matched message carries several attachments. */
function ConversationResult({ name, time, count, hue }: { name: string; time: string; count: number; hue?: number }) {
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
          {count} attachments
        </span>
      </div>
      <div style={{ display: "flex", gap: 3, flexShrink: 0 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ position: "relative", width: 34, height: 34, borderRadius: 6, overflow: "hidden", border: "1px solid var(--cometchat-border-color-default)" }}>
            <img src={SAMPLE_IMAGES[i]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            {i === 2 && count > 3 && (
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600 }}>+{count - 3}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Media-grid result tile (Photos / Videos filter). */
function MediaTile({ src, video }: { src: string; video?: boolean }) {
  return (
    <div style={{ position: "relative", aspectRatio: "1 / 1", borderRadius: "var(--cometchat-radius-2)", overflow: "hidden", border: "1px solid var(--cometchat-border-color-default)" }}>
      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      {video && (
        <div style={{ position: "absolute", top: 6, right: 6, width: 22, height: 22, borderRadius: "50%", background: "rgba(0,0,0,0.5)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IconPlay size={10} />
        </div>
      )}
    </div>
  );
}

/** Document-list result row (Documents filter). */
function DocumentResult({ name, meta, type, from }: { name: string; meta: string; type: "pdf" | "doc" | "xls"; from: string }) {
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

function Panel({ children, width = 380 }: { children: React.ReactNode; width?: number }) {
  return (
    <div style={{ width, display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)", padding: "var(--cometchat-spacing-4)", background: "var(--cometchat-background-color-01)", borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-default)" }}>
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "var(--cometchat-border-color-light)" }} />;
}

function ResultsLabel({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--cometchat-text-color-tertiary)" }}>{children}</div>;
}

/** Default search — conversation results with an attachment count + thumbnail strip. */
export const ConversationResults: Story = {
  name: "Conversation Results",
  parameters: { controls: { disable: true } },
  render: () => (
    <Panel>
      <SearchHeader value="review" active="All" />
      <Divider />
      <ResultsLabel>Messages</ResultsLabel>
      <ConversationResult name="Design Team" time="4:56 pm" count={5} hue={250} />
      <ConversationResult name="Priya Nair" time="Yesterday" count={3} hue={20} />
      <ConversationResult name="Marketing" time="Mon" count={8} hue={150} />
    </Panel>
  ),
};

/** Photos / Videos filter — attachments render as a media grid. */
export const MediaGrid: Story = {
  name: "Media Grid (Photos)",
  parameters: { controls: { disable: true } },
  render: () => (
    <Panel>
      <SearchHeader value="review" active="Photos" />
      <Divider />
      <ResultsLabel>32 photos & videos</ResultsLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--cometchat-spacing-1-5)" }}>
        {Array.from({ length: 9 }).map((_, i) => (
          <MediaTile key={i} src={SAMPLE_IMAGES[i % SAMPLE_IMAGES.length]} video={i === 1 || i === 5} />
        ))}
      </div>
    </Panel>
  ),
};

/** Documents filter — attachments render as a file list. */
export const DocumentResults: Story = {
  name: "Document Results",
  parameters: { controls: { disable: true } },
  render: () => (
    <Panel>
      <SearchHeader value="review" active="Documents" />
      <Divider />
      <ResultsLabel>Documents</ResultsLabel>
      <DocumentResult name="Q3-Report.pdf" meta="2.4 MB" type="pdf" from="You" />
      <DocumentResult name="Notes.docx" meta="340 KB" type="doc" from="Priya" />
      <DocumentResult name="Budget.xlsx" meta="812 KB" type="xls" from="Marketing" />
    </Panel>
  ),
};

/** All three search presentations side by side. */
export const AllStates: Story = {
  name: "All States",
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: 24, alignItems: "flex-start" }}>
      <Section title="Conversation results">
        <Panel>
          <SearchHeader value="review" active="All" />
          <Divider />
          <ConversationResult name="Design Team" time="4:56 pm" count={5} hue={250} />
          <ConversationResult name="Priya Nair" time="Yesterday" count={3} hue={20} />
        </Panel>
      </Section>
      <Section title="Media grid">
        <Panel>
          <SearchHeader value="review" active="Photos" />
          <Divider />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--cometchat-spacing-1-5)" }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <MediaTile key={i} src={SAMPLE_IMAGES[i % SAMPLE_IMAGES.length]} video={i === 1} />
            ))}
          </div>
        </Panel>
      </Section>
      <Section title="Documents">
        <Panel>
          <SearchHeader value="review" active="Documents" />
          <Divider />
          <DocumentResult name="Q3-Report.pdf" meta="2.4 MB" type="pdf" from="You" />
          <DocumentResult name="Budget.xlsx" meta="812 KB" type="xls" from="Marketing" />
        </Panel>
      </Section>
    </div>
  ),
};
