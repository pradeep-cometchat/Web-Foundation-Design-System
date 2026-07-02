import type { Meta, StoryObj } from "@storybook/react";
import {
  SAMPLE_IMAGES,
  SearchHeader,
  ConversationResult,
  MediaTile,
  DocumentResult,
  Panel,
  Divider,
  ResultsLabel,
  Section,
} from "./_shared";

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
      <ConversationResult name="Priya Nair" time="Yesterday" count={3} hue={20} thumbs={[1, 2, 3]} />
      <ConversationResult name="Marketing" time="Mon" count={8} hue={150} thumbs={[2, 0, 1]} />
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
          <MediaTile key={i} src={SAMPLE_IMAGES[i % SAMPLE_IMAGES.length]} video={i === 1 || i === 5} duration="0:12" />
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
          <ConversationResult name="Priya Nair" time="Yesterday" count={3} hue={20} thumbs={[1, 2, 3]} />
        </Panel>
      </Section>
      <Section title="Media grid">
        <Panel>
          <SearchHeader value="review" active="Photos" />
          <Divider />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--cometchat-spacing-1-5)" }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <MediaTile key={i} src={SAMPLE_IMAGES[i % SAMPLE_IMAGES.length]} video={i === 1} duration="0:12" />
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
