import type { Meta, StoryObj } from "@storybook/react";
import {
  ImagePreview,
  MultiAttachmentBubble,
  ChatCanvas,
  SearchHeader,
  ConversationResult,
  MediaTile,
  Panel,
  Divider,
  ResultsLabel,
  Section,
  Item,
  Row,
  SAMPLE_IMAGES,
  SpinKeyframes,
} from "./_shared";

/**
 * **Image attachment — all states.** Image files across every surface: queued
 * in the composer (loading → default → hover → remove → error), delivered in a
 * message (single, grids, "+N" overflow, uploading, failed), and in search.
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Attachments/Types/Image",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj;

/** Composer preview — every badge state. */
export const InComposer: Story = {
  name: "In Composer",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24 }}>
      <SpinKeyframes />
      <Section title="In Composer">
        <Row gap={24}>
          <Item label="Loading"><ImagePreview badge="loading" /></Item>
          <Item label="Default"><ImagePreview badge="none" /></Item>
          <Item label="Hover"><ImagePreview badge="hover" /></Item>
          <Item label="Remove"><ImagePreview badge="remove" /></Item>
          <Item label="Error"><ImagePreview badge="error" /></Item>
        </Row>
      </Section>
    </div>
  ),
};

/** Delivered — single, grids and overflow, sent and received. */
export const InMessage: Story = {
  name: "In Message",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24 }}>
      <SpinKeyframes />
      <Row gap={24}>
        {(["sent", "received"] as const).map((v) => (
          <ChatCanvas key={v} width={320}>
            <Item label={`${v} · single`}><MultiAttachmentBubble variant={v} images={1} /></Item>
            <Item label={`${v} · 2 grid`}><MultiAttachmentBubble variant={v} images={2} /></Item>
            <Item label={`${v} · 3 grid`}><MultiAttachmentBubble variant={v} images={3} /></Item>
            <Item label={`${v} · 4 grid`}><MultiAttachmentBubble variant={v} images={4} /></Item>
            <Item label={`${v} · 4+ overflow`}><MultiAttachmentBubble variant={v} images={4} totalImages={9} /></Item>
          </ChatCanvas>
        ))}
        <ChatCanvas width={320}>
          <Item label="uploading"><MultiAttachmentBubble variant="sent" images={4} state="uploading" /></Item>
          <Item label="failed"><MultiAttachmentBubble variant="sent" images={2} state="failed" /></Item>
        </ChatCanvas>
      </Row>
    </div>
  ),
};

/** In search — media grid tiles and a conversation result. */
export const InSearch: Story = {
  name: "In Search",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24 }}>
      <Row gap={24}>
        <Section title="Media grid">
          <Panel>
            <SearchHeader value="review" active="Photos" />
            <Divider />
            <ResultsLabel>Photos</ResultsLabel>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--cometchat-spacing-1-5)" }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <MediaTile key={i} src={SAMPLE_IMAGES[i % SAMPLE_IMAGES.length]} />
              ))}
            </div>
          </Panel>
        </Section>
        <Section title="Conversation result">
          <Panel>
            <SearchHeader value="review" active="All" />
            <Divider />
            <ConversationResult name="Design Team" time="4:56 pm" count={5} hue={250} />
          </Panel>
        </Section>
      </Row>
    </div>
  ),
};
