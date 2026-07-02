import type { Meta, StoryObj } from "@storybook/react";
import {
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
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 40 }}>
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
    <div style={{ padding: 24 }}>
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
    <div style={{ padding: 24 }}>
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
