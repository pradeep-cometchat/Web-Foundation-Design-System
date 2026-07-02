import type { Meta, StoryObj } from "@storybook/react";
import { MultiAttachmentBubble, ChatCanvas, BubbleRow, SpinKeyframes, Label } from "./_shared";

/**
 * **Multi Attachments — Sent & Received.** How a delivered message carrying
 * multiple attachments renders in the conversation. Images and video collapse
 * into a grid; documents and audio stack as cards beneath. Sent bubbles are
 * right-aligned with a delivery receipt; received bubbles are left-aligned.
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Attachments/Sent & Received",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

/** Images + documents together, sent. */
export const Sent: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <SpinKeyframes />
      <BubbleRow variant="sent">
        <MultiAttachmentBubble
          variant="sent"
          images={3}
          videoAt={[1]}
          files={[
            { kind: "pdf", name: "Q3-Report.pdf", meta: "12 Jun · 2.4 MB" },
            { kind: "audio", name: "Voice note", meta: "0:32" },
          ]}
          caption="Everything from the review 👆"
        />
      </BubbleRow>
    </ChatCanvas>
  ),
};

/** Images + documents together, received. */
export const Received: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <SpinKeyframes />
      <BubbleRow variant="received">
        <MultiAttachmentBubble
          variant="received"
          images={3}
          videoAt={[1]}
          files={[
            { kind: "pdf", name: "Q3-Report.pdf", meta: "12 Jun · 2.4 MB" },
            { kind: "audio", name: "Voice note", meta: "0:32" },
          ]}
          caption="Everything from the review 👆"
        />
      </BubbleRow>
    </ChatCanvas>
  ),
};

/** A 2×2 image grid with a "+N" overflow badge. */
export const ImageGrid: Story = {
  name: "Image Grid (4+)",
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <BubbleRow variant="sent">
        <MultiAttachmentBubble variant="sent" images={4} totalImages={7} />
      </BubbleRow>
      <BubbleRow variant="received">
        <MultiAttachmentBubble variant="received" images={4} totalImages={7} />
      </BubbleRow>
    </ChatCanvas>
  ),
};

/** Documents only — several file cards stacked in one message. */
export const DocumentsOnly: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <ChatCanvas>
      <BubbleRow variant="sent">
        <MultiAttachmentBubble
          variant="sent"
          files={[
            { kind: "pdf", name: "Contract.pdf", meta: "12 Jun · 1.2 MB" },
            { kind: "doc", name: "Notes.docx", meta: "12 Jun · 340 KB" },
            { kind: "xls", name: "Budget.xlsx", meta: "12 Jun · 812 KB" },
          ]}
        />
      </BubbleRow>
      <BubbleRow variant="received">
        <MultiAttachmentBubble
          variant="received"
          files={[
            { kind: "pdf", name: "Contract.pdf", meta: "12 Jun · 1.2 MB" },
            { kind: "doc", name: "Notes.docx", meta: "12 Jun · 340 KB" },
            { kind: "xls", name: "Budget.xlsx", meta: "12 Jun · 812 KB" },
          ]}
        />
      </BubbleRow>
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
      <BubbleRow variant="sent">
        <MultiAttachmentBubble variant="sent" images={4} state="uploading" files={[{ kind: "pdf", name: "Deck.pdf", meta: "6.1 MB" }]} />
      </BubbleRow>
      <Label>Failed</Label>
      <BubbleRow variant="sent">
        <MultiAttachmentBubble variant="sent" images={2} state="failed" />
      </BubbleRow>
    </ChatCanvas>
  ),
};

/** A full exchange: every composition, both directions. */
export const AllStates: Story = {
  name: "All States",
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: 24, alignItems: "flex-start" }}>
      <SpinKeyframes />
      {(["sent", "received"] as const).map((v) => (
        <div key={v} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Label>{v}</Label>
          <MultiAttachmentBubble variant={v} images={3} videoAt={[1]} files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "12 Jun · 2.4 MB" }]} caption="Review pack 👆" />
          <MultiAttachmentBubble variant={v} images={4} totalImages={9} />
          <MultiAttachmentBubble variant={v} files={[{ kind: "pdf", name: "Contract.pdf", meta: "1.2 MB" }, { kind: "doc", name: "Notes.docx", meta: "340 KB" }, { kind: "audio", name: "Voice note", meta: "0:32" }]} />
        </div>
      ))}
    </div>
  ),
};
