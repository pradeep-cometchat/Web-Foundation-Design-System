import type { Meta, StoryObj } from "@storybook/react";
import { MessagePreview } from "../../../../base-components/components/MessagePreview";
import {
  UsageDoc,
  DropOverlay,
  MultiAttachmentBubble,
  MessageStack,
  ComposerShell,
  SingleLineComposer,
  MultiLineComposer,
  ImagePreview,
  VideoPreview,
  DocumentPreview,
  AudioPreview,
  SpinKeyframes,
  Section,
  SAMPLE_IMAGES,
} from "./_shared";

/**
 * **Multi Attachments — In Composer.** How a batch of mixed attachments looks
 * while queued in the message composer, before the message is sent. Previews
 * sit in a horizontally scrollable strip between the input and the toolbar.
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Attachments/In Composer",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj;

/** A full mixed batch — images, video, document and audio queued together. */
export const MixedBatch: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
      <SpinKeyframes />
      <ComposerShell>
        <ImagePreview badge="hover" />
        <VideoPreview badge="hover" />
        <DocumentPreview
          badge="hover"
          name="Q3-Report.pdf"
          type="pdf"
          meta="PDF · 2.4 MB"
        />
        <DocumentPreview
          badge="hover"
          name="Budget.xlsx"
          type="xls"
          meta="XLS · 812 KB"
        />
        <AudioPreview badge="hover" />
      </ComposerShell>
    </div>
  ),
};

/** Uploading — some attachments still in flight (spinner badge). */
export const Uploading: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
      <SpinKeyframes />
      <ComposerShell>
        <ImagePreview badge="loading" />
        <VideoPreview badge="loading" src={SAMPLE_IMAGES[1]} />
        <DocumentPreview
          badge="loading"
          name="Deck.pdf"
          type="pdf"
          meta="PDF · 6.1 MB"
        />
        <AudioPreview badge="loading" />
      </ComposerShell>
    </div>
  ),
};

/** Error — one attachment failed to upload (error badge). */
export const WithError: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
      <SpinKeyframes />
      <ComposerShell>
        <ImagePreview badge="retry" />
        <VideoPreview badge="error" />
        <DocumentPreview
          badge="none"
          name="Notes.docx"
          type="doc"
          meta="DOC · 340 KB"
        />
      </ComposerShell>
    </div>
  ),
};

/** The design-system Single Line and Multi Line composers, empty (no
 *  attachments) — the base surface for the drag-and-drop states. */
export const Composers: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--cometchat-spacing-8)",
        padding: "var(--cometchat-spacing-6)",
        maxWidth: 760,
      }}
    >
      <Section title="Single Line Composer">
        <SingleLineComposer />
      </Section>
      <Section title="Multi Line Composer">
        <MultiLineComposer />
      </Section>
    </div>
  ),
};

/** Dragging files onto a single composer — a compact overlay (icon + header
 *  only) covers just the composer, not the whole chat panel. */
export const DragAndDropComposer: Story = {
  name: "Drag & Drop (Composer)",
  parameters: { controls: { disable: true } },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--cometchat-spacing-8)",
        padding: "var(--cometchat-spacing-6)",
        maxWidth: 760,
      }}
    >
      <Section title="Single Line Composer">
        <div
          style={{
            position: "relative",
            borderRadius: "var(--cometchat-radius-3)",
            overflow: "hidden",
          }}
        >
          <SingleLineComposer />
          <DropOverlay compact />
        </div>
      </Section>
      <Section title="Multi Line Composer">
        <div
          style={{
            position: "relative",
            borderRadius: "var(--cometchat-radius-3)",
            overflow: "hidden",
          }}
        >
          <MultiLineComposer />
          <DropOverlay compact />
        </div>
      </Section>
    </div>
  ),
};

/** Dragging files over the chat — a dark full-bleed overlay with the upload
 *  icon and the destination chat name covers the conversation. */
export const DragAndDrop: Story = {
  name: "Drag & Drop",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
      <div
        style={{
          position: "relative",
          width: 720,
          maxWidth: "100%",
          borderRadius: "var(--cometchat-radius-3)",
          border: "1px solid var(--cometchat-border-color-default)",
          background: "var(--cometchat-background-color-02)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "var(--cometchat-spacing-4)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--cometchat-spacing-2)",
          }}
        >
          <MessageStack variant="received">
            <MultiAttachmentBubble
              variant="received"
              images={1}
              caption="and here's the hero shot 📸"
            />
          </MessageStack>
          <MessageStack variant="sent">
            <MultiAttachmentBubble variant="sent" caption="love these 🙌" />
          </MessageStack>
        </div>
        <div
          style={{
            padding: "0 var(--cometchat-spacing-4) var(--cometchat-spacing-4)",
          }}
        >
          <ComposerShell>
            <ImagePreview badge="hover" />
          </ComposerShell>
        </div>
        <DropOverlay chatName="George Alan" />
      </div>
    </div>
  ),
};

/** Replying — the quoted message (DS MessagePreview) sits above the input
 *  while attachments are queued. */
export const WithReply: Story = {
  name: "With Reply",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
      <SpinKeyframes />
      <ComposerShell
        reply={
          <MessagePreview
            mode="reply"
            senderName="George Alan"
            messageText="Awesome! Can I see a couple of pictures?"
            onClose={() => {}}
          />
        }
      >
        <ImagePreview badge="hover" />
        <ImagePreview badge="hover" src={SAMPLE_IMAGES[1]} />
        <VideoPreview badge="hover" src={SAMPLE_IMAGES[2]} />
      </ComposerShell>
    </div>
  ),
};

/** Overflow — many attachments; the strip scrolls horizontally. */
export const Overflow: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
      <SpinKeyframes />
      <ComposerShell>
        <ImagePreview badge="hover" src={SAMPLE_IMAGES[0]} />
        <ImagePreview badge="hover" src={SAMPLE_IMAGES[1]} />
        <VideoPreview badge="hover" src={SAMPLE_IMAGES[2]} />
        <ImagePreview badge="hover" src={SAMPLE_IMAGES[3]} />
        <DocumentPreview
          badge="hover"
          name="Contract.pdf"
          type="pdf"
          meta="PDF · 1.2 MB"
        />
        <DocumentPreview
          badge="hover"
          name="Sheet.xlsx"
          type="xls"
          meta="XLS · 96 KB"
        />
        <AudioPreview badge="hover" />
      </ComposerShell>
    </div>
  ),
};

/** Every composer state stacked for review. */
export const AllStates: Story = {
  name: "All States",
  parameters: { controls: { disable: true } },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--cometchat-spacing-10)",
        padding: "var(--cometchat-spacing-6)",
      }}
    >
      <SpinKeyframes />
      <Section title="Mixed batch">
        <ComposerShell>
          <ImagePreview badge="hover" />
          <VideoPreview badge="hover" />
          <DocumentPreview
            badge="hover"
            name="Q3-Report.pdf"
            type="pdf"
            meta="PDF · 2.4 MB"
          />
          <AudioPreview badge="hover" />
        </ComposerShell>
      </Section>
      <Section title="Uploading">
        <ComposerShell>
          <ImagePreview badge="loading" />
          <VideoPreview badge="loading" src={SAMPLE_IMAGES[1]} />
          <DocumentPreview
            badge="loading"
            name="Deck.pdf"
            type="pdf"
            meta="PDF · 6.1 MB"
          />
          <AudioPreview badge="loading" />
        </ComposerShell>
      </Section>
      <Section title="Error & Retry">
        <ComposerShell>
          <ImagePreview badge="retry" />
          <VideoPreview badge="error" />
          <DocumentPreview
            badge="none"
            name="Notes.docx"
            type="doc"
            meta="DOC · 340 KB"
          />
        </ComposerShell>
      </Section>
    </div>
  ),
};

/** Usage — HTML structure + token CSS. */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <UsageDoc
      composed={[
        {
          name: "ComposerShell",
          desc: "Message composer with the horizontal, scrollable attachment preview strip.",
        },
        {
          name: "ImagePreview / VideoPreview",
          desc: "72px media thumbnails; video carries a play overlay.",
        },
        {
          name: "DocumentPreview / AudioPreview",
          desc: "File and audio chips at the same 72px height.",
        },
        {
          name: "Badge",
          desc: "Single-slot corner control — ✕ remove, spinner while uploading, error mark on failure.",
        },
      ]}
      html={`<!-- Composer with attachment strip -->
<div class="ma-composer">
  <input class="ma-composer__input" placeholder="Type your message..." />

  <div class="ma-composer__strip">
    <div class="ma-image-preview">
      <img src="photo.jpg" alt="" />
      <button class="ma-badge ma-badge--remove" aria-label="Remove">✕</button>
    </div>
    <div class="ma-doc-preview"><!-- file chip --></div>
    <div class="ma-audio-preview"><!-- audio chip --></div>
  </div>

  <div class="ma-composer__toolbar">
    <button class="ma-composer__attach" aria-label="Attach">add_circle</button>
    <button class="ma-composer__send" aria-label="Send">send</button>
  </div>
</div>`}
      css={`
        .ma-composer {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--cometchat-border-color-default);
          border-radius: var(--cometchat-radius-2);
          background: var(--cometchat-background-color-01);
        }
        .ma-composer__input {
          padding: var(--cometchat-spacing-3);
          font: var(--cometchat-font-body-regular);
          color: var(--cometchat-text-color-primary);
        }
        .ma-composer__input::placeholder {
          color: var(--cometchat-text-color-placeholder);
        }

        /* The strip scrolls horizontally; top padding keeps corner badges unclipped */
        .ma-composer__strip {
          display: flex;
          gap: var(--cometchat-spacing-2);
          padding: var(--cometchat-spacing-2-5) var(--cometchat-spacing-3-5);
          overflow-x: auto;
          scrollbar-width: none;
        }

        .ma-composer__toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--cometchat-spacing-1-5) var(--cometchat-spacing-3);
          border-top: 1px solid var(--cometchat-border-color-light);
        }
        .ma-composer__send {
          width: 36px;
          height: 36px;
          border-radius: var(--cometchat-radius-max);
          background: var(--cometchat-background-color-solid);
          color: var(--cometchat-static-white);
          box-shadow: var(--cometchat-shadow-xs);
        }
      `}
    />
  ),
};
