import type { Meta, StoryObj } from "@storybook/react";
import {
  UsageDoc,
  DocumentPreview,
  MultiAttachmentBubble,
  MessageStack,
  ChatCanvas,
  SearchHeader,
  DocumentResult,
  Panel,
  Divider,
  ResultsLabel,
  Section,
  Item,
  Row,
  SpinKeyframes,
} from "./_shared";

/**
 * **File attachment — all states.** Documents (PDF / DOC / XLS) across the
 * composer (loading → default → hover → remove → error), delivered as stacked
 * file cards (single, multiple, uploading, failed), and as a search list.
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Attachments/Types/Files",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj;

/** Composer preview — every badge state, plus the three file types. */
export const InComposer: Story = {
  name: "In Composer",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-6)", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-10)" }}>
      <SpinKeyframes />
      <Section title="States">
        <Row gap={16}>
          <Item label="Loading"><DocumentPreview badge="loading" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
          <Item label="Default"><DocumentPreview badge="none" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
          <Item label="Hover"><DocumentPreview badge="hover" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
          <Item label="Remove"><DocumentPreview badge="remove" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
          <Item label="Error"><DocumentPreview badge="error" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" /></Item>
        </Row>
      </Section>
      <Section title="File types">
        <Row gap={16}>
          <Item label="PDF"><DocumentPreview badge="hover" name="Q3-Report.pdf" type="pdf" meta="PDF · 2.4 MB" /></Item>
          <Item label="DOC"><DocumentPreview badge="hover" name="Notes.docx" type="doc" meta="DOC · 340 KB" /></Item>
          <Item label="XLS"><DocumentPreview badge="hover" name="Budget.xlsx" type="xls" meta="XLS · 812 KB" /></Item>
        </Row>
      </Section>
    </div>
  ),
};

/** Delivered — single card, several stacked, uploading and failed. */
export const InMessage: Story = {
  name: "In Message",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
      <SpinKeyframes />
      <Row gap={24}>
        {(["sent", "received"] as const).map((v) => (
          <ChatCanvas key={v} width={320}>
            <Item label={`${v} · single`}>
              <MessageStack variant={v}>
                <MultiAttachmentBubble variant={v} files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "12 Jun · 2.4 MB" }]} />
              </MessageStack>
            </Item>
            <Item label={`${v} · multiple (separate bubbles)`}>
              <MessageStack variant={v}>
                <MultiAttachmentBubble variant={v} files={[{ kind: "pdf", name: "Contract.pdf", meta: "12 Jun · 1.2 MB" }]} showMeta={false} />
                <MultiAttachmentBubble variant={v} files={[{ kind: "doc", name: "Notes.docx", meta: "12 Jun · 340 KB" }]} showMeta={false} />
                <MultiAttachmentBubble variant={v} files={[{ kind: "xls", name: "Budget.xlsx", meta: "12 Jun · 812 KB" }]} />
              </MessageStack>
            </Item>
          </ChatCanvas>
        ))}
        <ChatCanvas width={320}>
          <Item label="uploading"><MessageStack variant="sent"><MultiAttachmentBubble variant="sent" state="uploading" files={[{ kind: "pdf", name: "Deck.pdf", meta: "6.1 MB" }]} /></MessageStack></Item>
          <Item label="failed"><MessageStack variant="sent"><MultiAttachmentBubble variant="sent" state="failed" files={[{ kind: "pdf", name: "Deck.pdf", meta: "6.1 MB" }]} /></MessageStack></Item>
        </ChatCanvas>
      </Row>
    </div>
  ),
};

/** In search — the Documents filter renders a file list. */
export const InSearch: Story = {
  name: "In Search",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
      <Section title="Document results">
        <Panel>
          <SearchHeader value="review" active="Documents" />
          <Divider />
          <ResultsLabel>Documents</ResultsLabel>
          <DocumentResult name="Q3-Report.pdf" meta="2.4 MB" type="pdf" from="You" />
          <DocumentResult name="Notes.docx" meta="340 KB" type="doc" from="Priya" />
          <DocumentResult name="Budget.xlsx" meta="812 KB" type="xls" from="Marketing" />
        </Panel>
      </Section>
    </div>
  ),
};

/** Usage — HTML structure + token CSS. */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <UsageDoc
      composed={[
        { name: "DocumentPreview", desc: "Composer file chip — white app-tile icon + name + meta, single-slot corner badge." },
        { name: "FileTypeIcon", desc: "Per-type document glyph (PDF / DOC / XLS / PPT / ZIP / TXT / generic)." },
        { name: "MultiAttachmentBubble", desc: "Delivered file card; multiple documents stack as separate bubbles." },
        { name: "SearchBar", desc: "Design-system search input used by the Documents filter." },
        { name: "DocumentResult", desc: "Search list row — icon tile, name, size · sharer, download." },
      ]}
      html={`<!-- Composer preview chip -->
<div class="ma-doc-preview">
  <div class="ma-doc-preview__tile"><span class="ma-file-icon ma-file-icon--pdf"></span></div>
  <div class="ma-doc-preview__text">
    <p class="ma-doc-preview__name">Q3-Report.pdf</p>
    <p class="ma-doc-preview__meta">PDF · 2.4 MB</p>
  </div>
  <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
</div>

<!-- Delivered — file card in a sent bubble (one document per bubble) -->
<div class="ma-bubble ma-bubble--sent">
  <div class="ma-file-card">
    <div class="ma-file-card__tile"><span class="ma-file-icon ma-file-icon--pdf"></span></div>
    <div class="ma-file-card__text">
      <p class="ma-file-card__name">Q3-Report.pdf</p>
      <p class="ma-file-card__meta">12 Jun · 2.4 MB</p>
    </div>
    <span class="icon-rounded">download</span>
  </div>
  <div class="ma-bubble__meta">4:56 pm <span class="ma-receipt">done_all</span></div>
</div>`}
      css={`.ma-doc-preview {
  position: relative;
  display: flex; align-items: center; gap: var(--cometchat-spacing-2-5);
  height: 72px; padding: 0 var(--cometchat-spacing-3);
  border-radius: var(--cometchat-radius-2);
  border: 1px solid var(--cometchat-border-color-default);
  background: var(--cometchat-background-color-02);
}
.ma-doc-preview__tile, .ma-file-card__tile {
  width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  border-radius: var(--cometchat-radius-1-5);
  background: var(--cometchat-static-white);
  border: 1px solid var(--cometchat-border-color-light);
}
.ma-doc-preview__name { font: var(--cometchat-font-caption1-medium); color: var(--cometchat-text-color-primary); }
.ma-doc-preview__meta { font: var(--cometchat-font-caption2-regular); color: var(--cometchat-text-color-secondary); }

.ma-file-card {
  display: flex; align-items: center; gap: var(--cometchat-spacing-2-5);
  width: 240px; padding: var(--cometchat-spacing-1);
}
.ma-file-card__name { font: var(--cometchat-font-body-semibold); color: var(--cometchat-static-white); }
.ma-file-card__meta {
  font: var(--cometchat-font-caption1-regular);
  color: color-mix(in srgb, var(--cometchat-static-white) 70%, transparent);
}`}
    />
  ),
};
