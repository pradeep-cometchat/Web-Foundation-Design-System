import type { Meta, StoryObj } from "@storybook/react";
import { MultiAttachmentBubble, MessageStack, ChatCanvas, SpinKeyframes, Label } from "./_shared";

/**
 * **Multi Attachments — Sent & Received.** How attachments render in the
 * conversation once sent.
 *
 * Attachments of **different formats are not combined into one bubble** — each
 * format becomes its own message bubble, stacked one below another (only images
 * and videos share a grid, since they are one visual-media format). A caption or
 * a quoted reply attaches to a single bubble.
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Attachments/Sent & Received",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

/** A mixed send: a media grid, a document and an audio clip — three separate
 *  bubbles, one below another, from the same sender. */
function MixedStack({ variant }: { variant: "sent" | "received" }) {
  return (
    <MessageStack variant={variant}>
      <MultiAttachmentBubble variant={variant} images={3} videoAt={[1]} showMeta={false} />
      <MultiAttachmentBubble variant={variant} files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "12 Jun · 2.4 MB" }]} showMeta={false} />
      <MultiAttachmentBubble variant={variant} files={[{ kind: "audio", name: "Audio.mp3", meta: "00:32" }]} />
    </MessageStack>
  );
}

export const MixedBatch: Story = {
  name: "Mixed Batch",
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <SpinKeyframes />
      <MixedStack variant="received" />
      <MixedStack variant="sent" />
    </ChatCanvas>
  ),
};

/** A single image with a caption in the same bubble. */
export const WithCaption: Story = {
  name: "With Caption",
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" images={1} caption="Everything from the review 👆" />
      </MessageStack>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" images={1} caption="Everything from the review 👆" />
      </MessageStack>
    </ChatCanvas>
  ),
};

/** Attachments sent as a reply — a quoted preview sits above the attachment. */
export const Quoted: Story = {
  name: "Quoted (Reply)",
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" quoted={{ name: "You", text: "Can you send the report?" }} files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "12 Jun · 2.4 MB" }]} />
      </MessageStack>
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" quoted={{ name: "Priya Nair", text: "Photo", thumb: 2 }} images={1} caption="This one?" />
      </MessageStack>
    </ChatCanvas>
  ),
};

/** A single image, sent and received. */
export const SingleImage: Story = {
  name: "Single Image",
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <MessageStack variant="received"><MultiAttachmentBubble variant="received" images={1} /></MessageStack>
      <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" images={1} /></MessageStack>
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

/** Every state together, both directions. */
export const AllStates: Story = {
  name: "All States",
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: 24, alignItems: "flex-start" }}>
      <SpinKeyframes />
      <ChatCanvas>
        <Label>Mixed batch</Label>
        <MixedStack variant="sent" />
      </ChatCanvas>
      <ChatCanvas>
        <Label>With caption</Label>
        <MessageStack variant="received"><MultiAttachmentBubble variant="received" images={1} caption="Review pack 👆" /></MessageStack>
        <Label>Quoted reply</Label>
        <MessageStack variant="sent"><MultiAttachmentBubble variant="sent" quoted={{ name: "Priya Nair", text: "Can you send the report?" }} files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "2.4 MB" }]} /></MessageStack>
      </ChatCanvas>
      <ChatCanvas>
        <Label>Documents (stacked)</Label>
        <MessageStack variant="sent">
          <MultiAttachmentBubble variant="sent" files={[{ kind: "pdf", name: "Contract.pdf", meta: "1.2 MB" }]} showMeta={false} />
          <MultiAttachmentBubble variant="sent" files={[{ kind: "xls", name: "Budget.xlsx", meta: "812 KB" }]} />
        </MessageStack>
      </ChatCanvas>
    </div>
  ),
};
