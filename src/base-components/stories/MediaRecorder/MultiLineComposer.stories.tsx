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
 * **Usage** — HTML & CSS reference for the Multi Line Composer (Voice Note Popup).
 */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- Voice Note Popup — Idle state -->
<div class="ml-composer__popup">
  <span class="ml-composer__popup-title">Voice Note</span>
  <div class="ml-composer__wave">
    <div class="ml-composer__wave-outer">
      <div class="ml-composer__wave-inner">
        <div class="ml-composer__wave-center">
          <svg class="ml-composer__wave-mic"><!-- mic icon --></svg>
        </div>
      </div>
    </div>
  </div>
  <span class="ml-composer__duration">00:00:00</span>
  <div class="ml-composer__actions">
    <button class="ml-composer__action-btn ml-composer__action-btn--outline"><!-- delete --></button>
    <button class="ml-composer__action-btn ml-composer__action-btn--destructive"><!-- stop --></button>
    <button class="ml-composer__action-btn ml-composer__action-btn--outline"><!-- pause --></button>
  </div>
</div>

<!-- Recording state (active rings) -->
<div class="ml-composer__popup">
  <span class="ml-composer__popup-title">Voice Note</span>
  <div class="ml-composer__wave">
    <div class="ml-composer__wave-outer ml-composer__wave-outer--visible ml-composer__wave-outer--pulse">
      <div class="ml-composer__wave-inner ml-composer__wave-inner--visible">
        <div class="ml-composer__wave-center ml-composer__wave-center--active">
          <svg class="ml-composer__wave-mic"><!-- pause icon --></svg>
        </div>
      </div>
    </div>
  </div>
  <span class="ml-composer__duration">00:00:10</span>
  <div class="ml-composer__actions">...</div>
</div>

<!-- Preview state -->
<div class="ml-composer__popup">
  <span class="ml-composer__popup-title">Voice Note</span>
  <div class="ml-composer__preview">
    <button class="ml-composer__play-btn"><!-- play icon --></button>
    <div class="ml-composer__waveform">
      <div class="ml-composer__waveform-bars">
        <div class="ml-composer__waveform-bar" style="height: 8px"></div>
        <div class="ml-composer__waveform-bar" style="height: 16px"></div>
        <!-- more bars -->
      </div>
      <span class="ml-composer__preview-duration">0:32</span>
    </div>
  </div>
  <div class="ml-composer__actions">
    <button class="ml-composer__action-btn ml-composer__action-btn--outline"><!-- delete --></button>
    <button class="ml-composer__action-btn ml-composer__action-btn--send"><!-- send --></button>
  </div>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={`.ml-composer__popup {
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  max-width: 300px;
}

.ml-composer__popup-title {
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.ml-composer__wave-center {
  width: 92px;
  height: 92px;
  border-radius: var(--radius-full);
  background: var(--color-ep-200);
}

.ml-composer__wave-center--active {
  background: var(--color-ep-600);
}

.ml-composer__wave-outer--visible {
  background: var(--color-ep-50);
}

.ml-composer__wave-inner--visible {
  background: var(--color-ep-100);
}

.ml-composer__duration {
  font-size: var(--font-size-3);
  color: var(--color-text-primary);
}

.ml-composer__play-btn {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  background: var(--color-ep-600);
  color: var(--color-white);
}

.ml-composer__action-btn--destructive {
  width: 52px;
  height: 52px;
  background: var(--color-error);
  color: var(--color-white);
  border-radius: var(--radius-xl);
}

.ml-composer__action-btn--send {
  width: 48px;
  height: 48px;
  background: var(--color-ep-600);
  border-radius: var(--radius-full);
  color: var(--color-white);
}`} />
      </UsageSection>
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


/* ─── Usage helpers ─── */

const UsageCodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div style={{ border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--color-bg-01)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--color-border-default)", background: "var(--color-bg-02)" }}>
      <span style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-tertiary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: "var(--space-3-5)", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-1)", lineHeight: 1.6, color: "var(--color-text-primary)", overflowX: "auto" }}>
      <code>{code}</code>
    </pre>
  </div>
);

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>{title}</div>
      {children}
    </div>
  );
}
