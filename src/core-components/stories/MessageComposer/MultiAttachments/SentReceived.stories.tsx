import type { Meta, StoryObj } from "@storybook/react";
import { UsageDoc, MultiAttachmentBubble, MessageStack, ChatCanvas, SpinKeyframes, Label } from "./_shared";

/**
 * **Multi Attachments — Sent & Received.** How attachments render in the
 * conversation once sent.
 *
 * Every **format goes separately** — images, videos, documents and audio each
 * become their own message bubble, stacked one below another. Multiple items of
 * the same format group into a grid (an image grid, a video grid); different
 * formats never share a bubble. A caption or a quoted reply attaches to a single
 * bubble.
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Attachments/Sent & Received",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

/** A send of several formats — an image grid, a video grid, a document and an
 *  audio clip, each its own bubble, one below another. */
function SeparateStack({ variant }: { variant: "sent" | "received" }) {
  return (
    <MessageStack variant={variant}>
      <MultiAttachmentBubble variant={variant} images={3} showMeta={false} />
      <MultiAttachmentBubble variant={variant} images={2} videoAt={[0, 1]} showMeta={false} />
      <MultiAttachmentBubble variant={variant} files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "12 Jun · 2.4 MB" }]} showMeta={false} />
      <MultiAttachmentBubble variant={variant} files={[{ kind: "audio", name: "Audio.mp3", meta: "00:32" }]} />
    </MessageStack>
  );
}

export const MultipleFormats: Story = {
  name: "Multiple Formats",
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <SpinKeyframes />
      <SeparateStack variant="received" />
      <SeparateStack variant="sent" />
    </ChatCanvas>
  ),
};

/** Multiple images collapse into a grid within one bubble ("+N" past four). */
export const ImageGrid: Story = {
  name: "Image Grid (4+)",
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <MessageStack variant="received"><MultiAttachmentBubble variant="received" images={4} totalImages={7} /></MessageStack>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" images={4} totalImages={7} /></MessageStack>
    </ChatCanvas>
  ),
};

/** Multiple videos collapse into their own grid (play overlay on every tile). */
export const VideoGrid: Story = {
  name: "Video Grid (4+)",
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <MessageStack variant="received"><MultiAttachmentBubble variant="received" images={4} videoAt={[0, 1, 2, 3]} totalImages={6} /></MessageStack>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" images={4} videoAt={[0, 1, 2, 3]} totalImages={6} /></MessageStack>
    </ChatCanvas>
  ),
};

/** Several documents — each is its own bubble, stacked one below another. */
export const Documents: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" files={[{ kind: "pdf", name: "Contract.pdf", meta: "12 Jun · 1.2 MB" }]} showMeta={false} />
        <MultiAttachmentBubble variant="sent" files={[{ kind: "doc", name: "Notes.docx", meta: "12 Jun · 340 KB" }]} showMeta={false} />
        <MultiAttachmentBubble variant="sent" files={[{ kind: "xls", name: "Budget.xlsx", meta: "12 Jun · 812 KB" }]} />
      </MessageStack>
    </ChatCanvas>
  ),
};

/** Multiple attachments with a caption — an image album, and a stacked send
 *  where the caption attaches to the last bubble. */
export const WithCaption: Story = {
  name: "With Caption",
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <SpinKeyframes />
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" images={4} totalImages={5} caption="Everything from the review 👆" />
      </MessageStack>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" images={3} showMeta={false} />
        <MultiAttachmentBubble variant="sent" files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "12 Jun · 2.4 MB" }]} showMeta={false} />
        <MultiAttachmentBubble variant="sent" files={[{ kind: "audio", name: "Audio.mp3", meta: "00:32" }]} caption="Everything from the review 👆" />
      </MessageStack>
    </ChatCanvas>
  ),
};

/** Replying **to** a multi-attachment message. The quoted preview summarises the
 *  original — "Reply to {name}" + an icon + "6 Images · hello" / "6 Videos". */
export const Quoted: Story = {
  name: "Quoted (Reply)",
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <SpinKeyframes />
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" quoted={{ name: "George Alan", media: { kind: "image", count: 6, caption: "hello" } }} caption="These look great! 🙌" />
      </MessageStack>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" quoted={{ name: "George Alan", media: { kind: "video", count: 6 } }} caption="On it 👍" />
      </MessageStack>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" quoted={{ name: "Priya Nair", media: { kind: "file", count: 3 } }} files={[{ kind: "pdf", name: "Signed.pdf", meta: "12 Jun · 1.1 MB" }]} />
      </MessageStack>
    </ChatCanvas>
  ),
};

/** Uploading and failed delivery states. */
export const DeliveryStates: Story = {
  name: "Uploading & Failed",
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <SpinKeyframes />
      <Label>Uploading</Label>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" images={4} state="uploading" /></MessageStack>
      <Label>Failed</Label>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" images={2} state="failed" /></MessageStack>
    </ChatCanvas>
  ),
};

/** Read receipts on a sent attachment: sent (✓), delivered (✓✓), read (✓✓ blue). */
export const ReceiptStates: Story = {
  name: "Receipt States",
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <Label>Sent</Label>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "2.4 MB" }]} status="sent" /></MessageStack>
      <Label>Delivered</Label>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "2.4 MB" }]} status="delivered" /></MessageStack>
      <Label>Read</Label>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "2.4 MB" }]} status="read" /></MessageStack>
    </ChatCanvas>
  ),
};

/** Downloading — a received attachment being fetched (progress ring). */
export const Downloading: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <SpinKeyframes />
      <Label>Received · downloading</Label>
      <MessageStack variant="received"><MultiAttachmentBubble variant="received" images={4} state="downloading" /></MessageStack>
      <MessageStack variant="received"><MultiAttachmentBubble variant="received" state="downloading" files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "2.4 MB" }]} /></MessageStack>
      <MessageStack variant="received"><MultiAttachmentBubble variant="received" state="downloading" files={[{ kind: "audio", name: "Audio.mp3", meta: "00:32" }]} /></MessageStack>
    </ChatCanvas>
  ),
};

/** Forwarded and edited markers. */
export const ForwardedEdited: Story = {
  name: "Forwarded & Edited",
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <SpinKeyframes />
      <Label>Forwarded</Label>
      <MessageStack variant="received"><MultiAttachmentBubble variant="received" forwarded images={2} /></MessageStack>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" forwarded files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "2.4 MB" }]} /></MessageStack>
      <Label>Edited</Label>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" edited images={1} caption="updated the caption ✍️" /></MessageStack>
    </ChatCanvas>
  ),
};

/** Every state together. */
export const AllStates: Story = {
  name: "All States",
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--cometchat-spacing-6)", padding: "var(--cometchat-spacing-6)", alignItems: "flex-start" }}>
      <SpinKeyframes />
      <ChatCanvas>
        <Label>Multiple formats (separate)</Label>
        <SeparateStack variant="sent" />
      </ChatCanvas>
      <ChatCanvas>
        <Label>With caption</Label>
        <MessageStack variant="received"><MultiAttachmentBubble variant="received" images={4} totalImages={5} caption="Review pack 👆" /></MessageStack>
        <Label>Quoted — reply to 6 images</Label>
        <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" quoted={{ name: "George Alan", media: { kind: "image", count: 6, caption: "hello" } }} caption="These look great! 🙌" /></MessageStack>
        <Label>Quoted — reply to 6 videos</Label>
        <MessageStack variant="received"><MultiAttachmentBubble variant="received" quoted={{ name: "George Alan", media: { kind: "video", count: 6 } }} caption="On it 👍" /></MessageStack>
      </ChatCanvas>
    </div>
  ),
};

/** Usage — HTML structure + token CSS. */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <UsageDoc
      composed={[
        { name: "MessageStack", desc: "Vertical stack of one sender's bubbles — mixed formats become separate bubbles, aligned to the sender's side." },
        { name: "MultiAttachmentBubble", desc: "One bubble per format: media grid, file card or audio card + caption, quoted reply, time and receipt." },
        { name: "DownloadRing", desc: "Determinate progress ring shown while a received attachment downloads." },
      ]}
      html={`<!-- Multiple formats — each format is its OWN bubble, stacked -->
<div class="ma-stack ma-stack--sent">
  <div class="ma-bubble ma-bubble--sent"><!-- image grid --></div>
  <div class="ma-bubble ma-bubble--sent"><!-- video grid --></div>
  <div class="ma-bubble ma-bubble--sent"><!-- document card --></div>
  <div class="ma-bubble ma-bubble--sent">
    <!-- audio card -->
    <div class="ma-bubble__meta">4:56 pm <span class="ma-receipt">done_all</span></div>
  </div>
</div>

<!-- Quoted reply to a multi-attachment message -->
<div class="ma-bubble ma-bubble--sent">
  <div class="ma-quote">
    <div class="ma-quote__bar"></div>
    <div>
      <p class="ma-quote__name">Reply to George Alan</p>
      <p class="ma-quote__summary"><span class="icon-rounded">image</span> 6 Images · hello</p>
    </div>
  </div>
  <p class="ma-bubble__caption">These look great! 🙌</p>
  <div class="ma-bubble__meta">4:56 pm <span class="ma-receipt">done_all</span></div>
</div>`}
      css={`.ma-stack { display: flex; flex-direction: column; gap: 3px; }
.ma-stack--sent { align-items: flex-end; }
.ma-stack--received { align-items: flex-start; }

.ma-bubble {
  width: fit-content;
  padding: var(--cometchat-spacing-2);
  border-radius: var(--cometchat-radius-3);
  display: flex; flex-direction: column; gap: var(--cometchat-spacing-1);
}
.ma-bubble--sent { background: var(--cometchat-send-bubble-background); }
.ma-bubble--received { background: var(--cometchat-received-bubble-background); }

.ma-quote {
  display: flex; gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-2-5);
  border-radius: var(--cometchat-radius-1-5);
  background: color-mix(in srgb, var(--cometchat-static-white) 16%, transparent);
}
.ma-quote__bar { width: 3px; border-radius: var(--cometchat-radius); background: var(--cometchat-static-white); }
.ma-quote__name { font: var(--cometchat-font-caption1-semibold); color: var(--cometchat-static-white); }
.ma-quote__summary {
  font: var(--cometchat-font-caption1-regular);
  color: color-mix(in srgb, var(--cometchat-static-white) 70%, transparent);
}

.ma-bubble__caption { font: var(--cometchat-font-body-regular); color: var(--cometchat-static-white); }
.ma-bubble__meta {
  align-self: flex-end;
  font: var(--cometchat-font-caption1-regular);
  color: color-mix(in srgb, var(--cometchat-static-white) 70%, transparent);
}`}
    />
  ),
};
