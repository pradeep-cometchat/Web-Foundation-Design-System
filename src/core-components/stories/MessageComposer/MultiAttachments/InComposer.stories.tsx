import type { Meta, StoryObj } from "@storybook/react";
import {
  ComposerShell,
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
    <div style={{ padding: 24 }}>
      <SpinKeyframes />
      <ComposerShell>
        <ImagePreview badge="hover" />
        <VideoPreview badge="hover" />
        <DocumentPreview badge="hover" name="Q3-Report.pdf" type="pdf" meta="PDF · 2.4 MB" />
        <DocumentPreview badge="hover" name="Budget.xlsx" type="xls" meta="XLS · 812 KB" />
        <AudioPreview badge="hover" />
      </ComposerShell>
    </div>
  ),
};

/** Uploading — some attachments still in flight (spinner badge). */
export const Uploading: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24 }}>
      <SpinKeyframes />
      <ComposerShell>
        <ImagePreview badge="loading" />
        <VideoPreview badge="loading" src={SAMPLE_IMAGES[1]} />
        <DocumentPreview badge="loading" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" />
        <AudioPreview badge="loading" />
      </ComposerShell>
    </div>
  ),
};

/** Error — one attachment failed to upload (error badge). */
export const WithError: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24 }}>
      <SpinKeyframes />
      <ComposerShell>
        <ImagePreview badge="none" />
        <VideoPreview badge="error" />
        <DocumentPreview badge="none" name="Notes.docx" type="doc" meta="DOC · 340 KB" />
      </ComposerShell>
    </div>
  ),
};

/** Overflow — many attachments; the strip scrolls horizontally. */
export const Overflow: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24 }}>
      <SpinKeyframes />
      <ComposerShell>
        <ImagePreview badge="hover" src={SAMPLE_IMAGES[0]} />
        <ImagePreview badge="hover" src={SAMPLE_IMAGES[1]} />
        <VideoPreview badge="hover" src={SAMPLE_IMAGES[2]} />
        <ImagePreview badge="hover" src={SAMPLE_IMAGES[3]} />
        <DocumentPreview badge="hover" name="Contract.pdf" type="pdf" meta="PDF · 1.2 MB" />
        <DocumentPreview badge="hover" name="Sheet.xlsx" type="xls" meta="XLS · 96 KB" />
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
    <div style={{ display: "flex", flexDirection: "column", gap: 40, padding: 24 }}>
      <SpinKeyframes />
      <Section title="Mixed batch">
        <ComposerShell>
          <ImagePreview badge="hover" />
          <VideoPreview badge="hover" />
          <DocumentPreview badge="hover" name="Q3-Report.pdf" type="pdf" meta="PDF · 2.4 MB" />
          <AudioPreview badge="hover" />
        </ComposerShell>
      </Section>
      <Section title="Uploading">
        <ComposerShell>
          <ImagePreview badge="loading" />
          <VideoPreview badge="loading" src={SAMPLE_IMAGES[1]} />
          <DocumentPreview badge="loading" name="Deck.pdf" type="pdf" meta="PDF · 6.1 MB" />
          <AudioPreview badge="loading" />
        </ComposerShell>
      </Section>
      <Section title="Error">
        <ComposerShell>
          <ImagePreview badge="none" />
          <VideoPreview badge="error" />
          <DocumentPreview badge="none" name="Notes.docx" type="doc" meta="DOC · 340 KB" />
        </ComposerShell>
      </Section>
    </div>
  ),
};
