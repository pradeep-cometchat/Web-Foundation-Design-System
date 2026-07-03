import type { Meta, StoryObj } from "@storybook/react";
import {
  UsageDoc,
  AudioPreview,
  MultiAttachmentBubble,
  MessageStack,
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
    <div style={{ display: "flex", gap: "var(--cometchat-spacing-2-5)", padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-3-5)", borderRadius: "var(--cometchat-radius-2)", background: "var(--cometchat-background-color-02)", border: "1px solid var(--cometchat-border-color-default)", maxWidth: 640 }}>
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
    <div style={{ padding: "var(--cometchat-spacing-6)", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-8)" }}>
      <SpinKeyframes />
      <Callout />
      <Section title="In Composer">
        <Row gap={16}>
          <Item label="Loading"><AudioPreview badge="loading" /></Item>
          <Item label="Default"><AudioPreview badge="none" /></Item>
          <Item label="Hover"><AudioPreview badge="hover" /></Item>
          <Item label="Remove"><AudioPreview badge="remove" /></Item>
          <Item label="Error"><AudioPreview badge="error" /></Item>
          <Item label="Retry"><AudioPreview badge="retry" /></Item>
        </Row>
      </Section>
    </div>
  ),
};

/** Delivered — an audio message is always its own bubble. When sent alongside a
 *  document, each format is a separate bubble stacked one below another. */
export const InMessage: Story = {
  name: "In Message",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
      <SpinKeyframes />
      <Row gap={24}>
        {(["sent", "received"] as const).map((v) => (
          <ChatCanvas key={v} width={320}>
            <Item label={`${v} · single`}>
              <MessageStack variant={v}>
                <MultiAttachmentBubble variant={v} files={[{ kind: "audio", name: "Audio.mp3", meta: "00:32" }]} />
              </MessageStack>
            </Item>
            <Item label={`${v} · playing`}>
              <MessageStack variant={v}>
                <MultiAttachmentBubble variant={v} files={[{ kind: "audio", name: "Audio.mp3", meta: "00:32", playing: true }]} />
              </MessageStack>
            </Item>
            <Item label={`${v} · with a document (separate bubbles)`}>
              <MessageStack variant={v}>
                <MultiAttachmentBubble variant={v} files={[{ kind: "pdf", name: "Q3-Report.pdf", meta: "2.4 MB" }]} showMeta={false} />
                <MultiAttachmentBubble variant={v} files={[{ kind: "audio", name: "Audio.mp3", meta: "00:32" }]} />
              </MessageStack>
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
    <div style={{ padding: "var(--cometchat-spacing-6)" }}>
      <Section title="Audio results">
        <Panel>
          <SearchHeader value="review" active="Audio" />
          <Divider />
          <ResultsLabel>Audio</ResultsLabel>
          <AudioResult title="Audio.mp3" meta="00:32" from="You" />
          <AudioResult title="Recording.m4a" meta="01:14" from="Priya" />
        </Panel>
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
        { name: "AudioPreview", desc: "Composer audio chip — play button, title, seek bar, time; single-slot corner badge." },
        { name: "AudioCard / PlayButton / AudioSeekBar", desc: "Media-player card: play/pause button, elapsed-fill seek bar, mm:ss / mm:ss." },
        { name: "MultiAttachmentBubble", desc: "Delivered audio message; always its own bubble, download affordance once sent." },
        { name: "SearchBar", desc: "Design-system search input used by the Audio filter." },
        { name: "AudioResult", desc: "Search list row — play button, title, seek bar, time · sender." },
      ]}
      html={`<!-- Delivered — audio card in a sent bubble -->
<div class="ma-bubble ma-bubble--sent">
  <div class="ma-audio-card">
    <button class="ma-play-btn" aria-label="Play">play_arrow</button>
    <div class="ma-audio-card__body">
      <p class="ma-audio-card__title">Audio.mp3</p>
      <div class="ma-seek"><div class="ma-seek__fill"></div><div class="ma-seek__knob"></div></div>
      <p class="ma-audio-card__time">00:00/00:32</p>
    </div>
    <span class="icon-rounded">download</span>
  </div>
  <div class="ma-bubble__meta">4:56 pm <span class="ma-receipt">done_all</span></div>
</div>`}
      css={`.ma-audio-card {
  display: flex; align-items: center; gap: var(--cometchat-spacing-2-5);
  width: 240px; padding: var(--cometchat-spacing-1);
}
.ma-play-btn {
  width: 40px; height: 40px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-static-white);          /* sent bubble */
  color: var(--cometchat-primary-color);
  /* received bubble: background primary, color static-white */
}
.ma-audio-card__title { font: var(--cometchat-font-body-semibold); color: var(--cometchat-static-white); }
.ma-seek {
  position: relative; height: 6px; width: 100%;
  border-radius: var(--cometchat-radius-1);
  background: color-mix(in srgb, var(--cometchat-static-white) 30%, transparent);
}
.ma-seek__fill {
  height: 100%; border-radius: var(--cometchat-radius-1);
  background: var(--cometchat-static-white);           /* received: primary-color */
}
.ma-seek__knob {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 16px; height: 16px; border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-static-white);
  border: 1px solid var(--cometchat-border-color-default);
  box-shadow: var(--cometchat-shadow-xs);
}
.ma-audio-card__time {
  font: var(--cometchat-font-caption1-regular);
  color: color-mix(in srgb, var(--cometchat-static-white) 70%, transparent);
}`}
    />
  ),
};
