import type { Meta, StoryObj } from "@storybook/react";
import {
  UsageDoc,
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
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
      <SpinKeyframes />
      <Section title="In Composer">
        <Row gap={24}>
          <Item label="Loading"><VideoPreview badge="loading" /></Item>
          <Item label="Default"><VideoPreview badge="none" /></Item>
          <Item label="Hover"><VideoPreview badge="hover" /></Item>
          <Item label="Remove"><VideoPreview badge="remove" /></Item>
          <Item label="Error"><VideoPreview badge="error" /></Item>
          <Item label="Retry"><VideoPreview badge="retry" /></Item>
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
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
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
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
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

/** Usage — HTML structure + token CSS. */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <UsageDoc
      composed={[
        { name: "VideoPreview", desc: "Composer thumbnail with a centered play overlay and the single-slot corner badge." },
        { name: "MultiAttachmentBubble", desc: "Delivered video grid — every tile carries a play overlay; “+N” for overflow." },
        { name: "SearchBar", desc: "Design-system search input used by the Videos filter." },
        { name: "MediaTile", desc: "Search video tile with play overlay + duration badge." },
      ]}
      html={`<!-- Composer preview -->
<div class="ma-video-preview">
  <img class="ma-video-preview__img" src="clip.jpg" alt="" />
  <span class="ma-play">play_arrow</span>
  <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
</div>

<!-- In search — Videos filter tile -->
<div class="ma-tile">
  <img src="clip.jpg" alt="" />
  <span class="ma-tile__play">play_arrow</span>
  <span class="ma-tile__duration">0:12</span>
</div>`}
      css={`.ma-video-preview { position: relative; width: 72px; height: 72px; }
.ma-video-preview__img {
  width: 100%; height: 100%; object-fit: cover;
  border-radius: var(--cometchat-radius-3);
  border: 1px solid var(--cometchat-border-color-default);
}
.ma-play {
  position: absolute; inset: 0; margin: auto;
  width: 30px; height: 30px; border-radius: var(--cometchat-radius-max);
  background: color-mix(in srgb, var(--cometchat-static-black) 45%, transparent);
  color: var(--cometchat-static-white);
}

.ma-tile { position: relative; aspect-ratio: 1 / 1; border-radius: var(--cometchat-radius-2); overflow: hidden; }
.ma-tile__duration {
  position: absolute; left: 6px; bottom: 6px;
  padding: 1px var(--cometchat-spacing-1-5);
  border-radius: var(--cometchat-radius-1);
  font: var(--cometchat-font-caption2-medium);
  background: color-mix(in srgb, var(--cometchat-static-black) 60%, transparent);
  color: var(--cometchat-static-white);
}`}
    />
  ),
};
