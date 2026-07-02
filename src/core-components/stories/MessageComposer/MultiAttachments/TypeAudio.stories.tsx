import type { Meta, StoryObj } from "@storybook/react";
import {
  AudioPreview,
  MultiAttachmentBubble,
  ChatCanvas,
  SearchHeader,
  AudioResult,
  Panel,
  Divider,
  ResultsLabel,
  Section,
  Item,
  Row,
  SpinKeyframes,
} from "./_shared";

/**
 * **Audio attachment — all states.** An audio *file* attached from the picker.
 *
 * > **Not a voice note.** A voice note is *recorded* in the composer via the
 * > mic and cannot be added through the attachment picker. It shares this
 * > waveform card visually, but it is a separate recording flow — so it is not
 * > represented as an attachable type here.
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Attachments/Types/Audio",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj;

function Callout() {
  return (
    <div style={{ display: "flex", gap: 10, padding: "12px 14px", borderRadius: "var(--cometchat-radius-2)", background: "var(--cometchat-background-color-02)", border: "1px solid var(--cometchat-border-color-default)", maxWidth: 640 }}>
      <span className="icon-rounded" style={{ fontSize: 20, color: "var(--cometchat-icon-color-highlight)", "--icon-fill": 0 } as React.CSSProperties}>info</span>
      <span style={{ fontSize: 13, lineHeight: "20px", color: "var(--cometchat-text-color-secondary)" }}>
        This is an <strong>audio file attachment</strong>. A <strong>voice note</strong> looks identical but is recorded via the mic — it is not attachable in the composer, so it isn't shown as a type here.
      </span>
    </div>
  );
}

/** Composer preview — every badge state. */
export const InComposer: Story = {
  name: "In Composer",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 32 }}>
      <SpinKeyframes />
      <Callout />
      <Section title="In Composer">
        <Row gap={16}>
          <Item label="Loading"><AudioPreview badge="loading" /></Item>
          <Item label="Default"><AudioPreview badge="none" /></Item>
          <Item label="Hover"><AudioPreview badge="hover" /></Item>
          <Item label="Remove"><AudioPreview badge="remove" /></Item>
          <Item label="Error"><AudioPreview badge="error" /></Item>
        </Row>
      </Section>
    </div>
  ),
};

/** Delivered — audio card, sent and received; with other attachments and alone. */
export const InMessage: Story = {
  name: "In Message",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24 }}>
      <SpinKeyframes />
      <Row gap={24}>
        {(["sent", "received"] as const).map((v) => (
          <ChatCanvas key={v} width={320}>
            <Item label={`${v} · single`}>
              <MultiAttachmentBubble variant={v} files={[{ kind: "audio", name: "Audio.mp3", meta: "0:32" }]} />
            </Item>
            <Item label={`${v} · with files`}>
              <MultiAttachmentBubble
                variant={v}
                files={[
                  { kind: "pdf", name: "Q3-Report.pdf", meta: "2.4 MB" },
                  { kind: "audio", name: "Audio.mp3", meta: "0:32" },
                ]}
              />
            </Item>
          </ChatCanvas>
        ))}
      </Row>
    </div>
  ),
};

/** In search — the Audio filter renders a play-list of audio results. */
export const InSearch: Story = {
  name: "In Search",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24 }}>
      <Section title="Audio results">
        <Panel>
          <SearchHeader value="review" active="Audio" />
          <Divider />
          <ResultsLabel>Audio</ResultsLabel>
          <AudioResult title="Audio.mp3" meta="0:32" from="You" />
          <AudioResult title="Recording.m4a" meta="1:14" from="Priya" />
        </Panel>
      </Section>
    </div>
  ),
};
