import type { Meta, StoryObj } from "@storybook/react";
import { MultiAttachmentBubble, MessageStack, ChatCanvas, SpinKeyframes, Label } from "./_shared";

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

/** Every state together. */
export const AllStates: Story = {
  name: "All States",
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: 24, alignItems: "flex-start" }}>
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
