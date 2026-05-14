import type { Meta, StoryObj } from "@storybook/react";
import { MultiLineComposer } from "../../components/MediaRecorder";

/**
 * The **Voice Note Popup** lets users record, pause, stop, and preview a voice message.
 *
 * ### States
 * | State | Circle | Rings | Center button |
 * |---|---|---|---|
 * | `idle` | Lavender (`ep-200`) | None | Mic |
 * | `recording` | Purple (`ep-600`) | Pulsing outer + inner | Pause |
 * | `paused` | Purple (`ep-600`) | Inner only (static) | Mic |
 * | `preview` | — | — | Play + waveform |
 */
const meta: Meta<typeof MultiLineComposer> = {
  title: "Base Components/Media Recorder/Multi Line Composer",
  component: MultiLineComposer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light-gray",
      values: [
        { name: "light-gray", value: "#F4F4F5" },
        { name: "white", value: "#ffffff" },
      ],
    },
  },
  argTypes: {
    recordingState: {
      control: "select",
      options: ["idle", "recording", "paused", "preview"],
      description: "Current state of the recorder.",
    },
    duration: {
      control: "text",
      description: "Duration string shown in the popup (e.g. `00:00:10`).",
    },
    onRecord: { action: "record" },
    onPause:  { action: "pause" },
    onStop:   { action: "stop" },
    onDelete: { action: "delete" },
    onPlay:   { action: "play" },
  },
};
export default meta;

type Story = StoryObj<typeof MultiLineComposer>;

// Shared 320px wrapper for single-state stories
const singleDecorator: Story["decorators"] = [
  (Story) => (
    <div style={{ width: 320 }}>
      <Story />
    </div>
  ),
];

/**
 * **Idle** — ready to record.
 * Circle is lavender, no rings. Center button shows mic.
 */
export const Idle: Story = {
  decorators: singleDecorator,
  args: { recordingState: "idle", duration: "00:00:00" },
};

/**
 * **Recording** — actively capturing audio.
 * Circle turns purple; two concentric rings pulse outward. Center button → pause.
 */
export const Recording: Story = {
  decorators: singleDecorator,
  args: { recordingState: "recording", duration: "00:00:10" },
};

/**
 * **Paused** — recording on hold.
 * Circle stays purple, rings collapse, duration dims. Center button → mic to resume.
 */
export const Paused: Story = {
  decorators: singleDecorator,
  args: { recordingState: "paused", duration: "00:00:10" },
};

/**
 * **Preview** — playback mode after recording stops.
 * Shows a waveform and a play button.
 */
export const Preview: Story = {
  decorators: singleDecorator,
  args: { recordingState: "preview", duration: "0:32" },
};

/**
 * **All states** — side-by-side visual reference for all four variants.
 */
export const AllStates: Story = {
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
  },
  render: () => (
    <div
      style={{
        padding: "var(--space-6)",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-4)", alignItems: "stretch" }}>
      {(["idle", "recording", "paused", "preview"] as const).map((state) => (
        <div
          key={state}
          style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}
        >
          <span
            style={{
              fontSize: "var(--font-size-0)",
              fontWeight: "var(--font-weight-semibold)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#717680",
              paddingLeft: 4,
            }}
          >
            {state}
          </span>
          <div style={{ flex: 1, display: "flex" }}>
            <MultiLineComposer
              recordingState={state}
              duration={state === "preview" ? "0:32" : "00:00:10"}
            />
          </div>
        </div>
      ))}
      </div>
    </div>
  ),
};

/**
 * **Playground** — use controls to explore every prop.
 */
export const Playground: Story = {
  decorators: singleDecorator,
  args: { recordingState: "idle", duration: "00:00:00" },
  parameters: { docs: { disable: true } },
};
