import type { Meta, StoryObj } from "@storybook/react";
import { MediaRecorder } from "../components/MediaRecorder";
import type { MediaRecorderState } from "../components/MediaRecorder";

/**
 * A single-line message composer with inline voice recording controls.
 * Shows the recording waveform, duration timer, and action buttons inline
 * with the message input area.
 *
 * **Structure (from Figma node 191:21271):**
 * - Container: full-width, border `#e9eaeb`, radius-md (8px), px-12 py-6
 * - Left: add icon (20px, `#a4a7ae`) + placeholder text (14px, `#717680`)
 * - Mic icon: 24px, `#a4a7ae`
 * - Recording area: status icon + duration (14px, `#414651`) + waveform (`#6852d6`) + action btn
 * - Send button: 36px circle, disabled (`#f5f5f5`) or active (`#6852d6`)
 *
 * **States:**
 * - Recording: red dot (pulsing) + timer + waveform + pause btn + send
 * - Paused: play btn (purple) + "00:00" + waveform + delete btn + send
 * - Playing: pause btn (purple) + timer + waveform + delete btn + send
 */
const meta: Meta<typeof MediaRecorder> = {
  title: "Base Components/Media Recorder/Single Line Composer",
  component: MediaRecorder,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    state: {
      control: "select",
      options: ["recording", "paused", "playing"] satisfies MediaRecorderState[],
      description: "Current state of the recorder.",
    },
    duration: { control: "text", description: "Duration string (e.g. '00:32')." },
    placeholder: { control: "text", description: "Placeholder text for the input area." },
    onTogglePlayPause: { control: false },
    onDelete: { control: false },
    onSend: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof MediaRecorder>;

/* ─── Stories ─── */

/** Recording state — red dot pulsing, timer counting, pause button. */
export const Recording: Story = {
  args: {
    state: "recording",
    duration: "00:32",
  },
};

/** Paused state — play button, timer reset, delete button available. */
export const Paused: Story = {
  args: {
    state: "paused",
    duration: "00:00",
  },
};

/** Playing state — pause button (purple), timer counting, delete button. */
export const Playing: Story = {
  args: {
    state: "playing",
    duration: "00:24",
  },
};

/** All states stacked for comparison. */
export const States: StoryObj = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-10)", display: "flex", flexDirection: "column", gap: "var(--space-8)", maxWidth: 900, margin: "0 auto" }}>
      <div>
        <div style={stateLabelStyle}>Recording</div>
        <MediaRecorder state="recording" duration="00:32" />
      </div>
      <div>
        <div style={stateLabelStyle}>Paused</div>
        <MediaRecorder state="paused" duration="00:00" />
      </div>
      <div>
        <div style={stateLabelStyle}>Playing</div>
        <MediaRecorder state="playing" duration="00:24" />
      </div>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure. */
export const Playground: Story = {
  args: {
    state: "recording",
    duration: "00:32",
    placeholder: "Type your message...",
  },
  parameters: { docs: { disable: true } },
};

const stateLabelStyle: React.CSSProperties = {
  fontSize: "var(--font-size-0)",
  fontWeight: "var(--font-weight-semibold)",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--color-neutral-500, #535862)",
  marginBottom: "var(--space-2)",
};
