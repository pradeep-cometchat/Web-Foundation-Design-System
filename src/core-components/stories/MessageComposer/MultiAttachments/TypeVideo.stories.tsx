import type { Meta, StoryObj } from "@storybook/react";
import {
  VideoPreview,
  MultiAttachmentBubble,
  ChatCanvas,
  SearchHeader,
  MediaTile,
  ConversationResult,
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
 * **Video attachment — all states.** Same lifecycle as images, but every tile
 * carries a play overlay (and a duration badge in search). Composer preview
 * states, delivered single/grid/overflow, uploading/failed, and search.
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Attachments/Types/Video",
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
          <Item label="Loading"><VideoPreview badge="loading" /></Item>
          <Item label="Default"><VideoPreview badge="none" /></Item>
          <Item label="Hover"><VideoPreview badge="hover" /></Item>
          <Item label="Remove"><VideoPreview badge="remove" /></Item>
          <Item label="Error"><VideoPreview badge="error" /></Item>
        </Row>
      </Section>
    </div>
  ),
};

/** Delivered — single, grids, overflow, sent and received. */
export const InMessage: Story = {
  name: "In Message",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24 }}>
      <SpinKeyframes />
      <Row gap={24}>
        {(["sent", "received"] as const).map((v) => (
          <ChatCanvas key={v} width={320}>
            <Item label={`${v} · single`}><MultiAttachmentBubble variant={v} images={1} videoAt={[0]} /></Item>
            <Item label={`${v} · 2 grid`}><MultiAttachmentBubble variant={v} images={2} videoAt={[0, 1]} /></Item>
            <Item label={`${v} · 4 grid`}><MultiAttachmentBubble variant={v} images={4} videoAt={[0, 1, 2, 3]} /></Item>
            <Item label={`${v} · 4+ overflow`}><MultiAttachmentBubble variant={v} images={4} videoAt={[0, 1, 2]} totalImages={8} /></Item>
          </ChatCanvas>
        ))}
        <ChatCanvas width={320}>
          <Item label="uploading"><MultiAttachmentBubble variant="sent" images={2} videoAt={[0, 1]} state="uploading" /></Item>
          <Item label="failed"><MultiAttachmentBubble variant="sent" images={1} videoAt={[0]} state="failed" /></Item>
        </ChatCanvas>
      </Row>
    </div>
  ),
};

/** In search — video tiles with play + duration, and a conversation result. */
export const InSearch: Story = {
  name: "In Search",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24 }}>
      <Row gap={24}>
        <Section title="Media grid">
          <Panel>
            <SearchHeader value="review" active="Videos" />
            <Divider />
            <ResultsLabel>Videos</ResultsLabel>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--cometchat-spacing-1-5)" }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <MediaTile key={i} src={SAMPLE_IMAGES[i % SAMPLE_IMAGES.length]} video duration="0:12" />
              ))}
            </div>
          </Panel>
        </Section>
        <Section title="Conversation result">
          <Panel>
            <SearchHeader value="review" active="All" />
            <Divider />
            <ConversationResult name="Marketing" time="Mon" count={4} hue={150} />
          </Panel>
        </Section>
      </Row>
    </div>
  ),
};
