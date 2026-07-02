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

/** Multiple attachments with a caption. The caption attaches to the last
 *  bubble of the send — an image album here, plus a mixed stack example. */
export const WithCaption: Story = {
  name: "With Caption",
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <SpinKeyframes />
      {/* Image album (multiple images) + caption */}
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" images={4} totalImages={5} caption="Everything from the review 👆" />
      </MessageStack>
      {/* Mixed stack — caption on the last bubble */}
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" images={3} videoAt={[1]} showMeta={false} />
        <MultiAttachmentBubble variant="sent" files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "12 Jun · 2.4 MB" }]} showMeta={false} />
        <MultiAttachmentBubble variant="sent" files={[{ kind: "audio", name: "Audio.mp3", meta: "00:32" }]} caption="Everything from the review 👆" />
      </MessageStack>
    </ChatCanvas>
  ),
};

/** Multiple attachments sent as a reply — the quoted preview sits on the first
 *  bubble of the stack, with the rest of the attachments below it. */
export const Quoted: Story = {
  name: "Quoted (Reply)",
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <SpinKeyframes />
      {/* Reply with multiple documents */}
      <MessageStack variant="received">
        <MultiAttachmentBubble variant="received" quoted={{ name: "You", text: "Can you send the report + numbers?" }} files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "12 Jun · 2.4 MB" }]} showMeta={false} />
        <MultiAttachmentBubble variant="received" files={[{ kind: "xls", name: "Budget.xlsx", meta: "12 Jun · 812 KB" }]} />
      </MessageStack>
      {/* Reply with a mixed batch + caption */}
      <MessageStack variant="sent">
        <MultiAttachmentBubble variant="sent" quoted={{ name: "Priya Nair", text: "Photos from the shoot?", thumb: 2 }} images={3} videoAt={[1]} showMeta={false} />
        <MultiAttachmentBubble variant="sent" files={[{ kind: "audio", name: "Audio.mp3", meta: "00:32" }]} caption="Here you go 👆" />
      </MessageStack>
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
        <MessageStack variant="received"><MultiAttachmentBubble variant="received" images={4} totalImages={5} caption="Review pack 👆" /></MessageStack>
        <Label>Quoted reply</Label>
        <MessageStack variant="sent">
          <MultiAttachmentBubble variant="sent" quoted={{ name: "Priya Nair", text: "Can you send the report?" }} files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "2.4 MB" }]} showMeta={false} />
          <MultiAttachmentBubble variant="sent" files={[{ kind: "audio", name: "Audio.mp3", meta: "00:32" }]} />
        </MessageStack>
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
