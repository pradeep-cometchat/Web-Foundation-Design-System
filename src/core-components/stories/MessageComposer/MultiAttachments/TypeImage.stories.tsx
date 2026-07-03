import type { Meta, StoryObj } from "@storybook/react";
import {
  UsageDoc,
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
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
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
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
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
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
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

/** Usage — HTML structure + token CSS. */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <UsageDoc
      composed={[
        { name: "ImagePreview", desc: "Composer thumbnail with the single-slot corner badge (remove / loading / error)." },
        { name: "MultiAttachmentBubble", desc: "Delivered image grid (1–4 tiles + “+N” overflow) with time + read receipt." },
        { name: "SearchBar", desc: "Design-system search input used by the Photos filter." },
        { name: "MediaTile", desc: "Square media-grid result tile in search." },
      ]}
      html={`<!-- Composer preview -->
<div class="ma-image-preview">
  <img class="ma-image-preview__img" src="photo.jpg" alt="" />
  <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
</div>

<!-- Delivered — image grid in a sent bubble -->
<div class="ma-bubble ma-bubble--sent">
  <div class="ma-grid ma-grid--2">
    <img src="1.jpg" alt="" /><img src="2.jpg" alt="" />
  </div>
  <div class="ma-bubble__meta">4:56 pm <span class="ma-receipt">done_all</span></div>
</div>

<!-- In search — Photos filter media grid -->
<div class="ma-search__grid">
  <div class="ma-tile"><img src="1.jpg" alt="" /></div>
  <!-- … -->
</div>`}
      css={`.ma-image-preview { position: relative; width: 72px; height: 72px; }
.ma-image-preview__img {
  width: 100%; height: 100%; object-fit: cover;
  border-radius: var(--cometchat-radius-3);
  border: 1px solid var(--cometchat-border-color-default);
}
.ma-badge {
  position: absolute; top: -6px; right: -6px;
  width: 22px; height: 22px;
  border-radius: var(--cometchat-radius-max);
  border: 2px solid var(--cometchat-background-color-01);
  color: var(--cometchat-static-white);
}
.ma-badge--remove { background: color-mix(in srgb, var(--cometchat-static-black) 70%, var(--cometchat-static-white)); }

.ma-bubble--sent {
  padding: var(--cometchat-spacing-2);
  border-radius: var(--cometchat-radius-3);
  background: var(--cometchat-send-bubble-background);
}
.ma-grid { display: grid; gap: 2px; border-radius: var(--cometchat-radius-2); overflow: hidden; }
.ma-grid--2 { grid-template-columns: 1fr 1fr; }
.ma-bubble__meta {
  font: var(--cometchat-font-caption1-regular);
  color: color-mix(in srgb, var(--cometchat-static-white) 70%, transparent);
}

.ma-tile { aspect-ratio: 1 / 1; border-radius: var(--cometchat-radius-2); overflow: hidden; }`}
    />
  ),
};
